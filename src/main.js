import * as THREE from 'three';
import { buildWorld, groundAt, floorAt, SPOTS, WORLD_RADIUS } from './world.js';
import { UI, wait } from './ui.js';
import * as A from './audio.js';
import { loadState, saveState, clearState, freshState } from './state.js';
import { runFrom } from './story.js';

// ── renderer ──
const renderer = new THREE.WebGLRenderer({ antialias: window.devicePixelRatio < 2, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.2;
document.getElementById('game').appendChild(renderer.domElement);
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 900);
addEventListener('resize', () => { renderer.setSize(innerWidth, innerHeight); camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); });

const W = buildWorld(renderer);
const scene = W.scene;

// ── player (Kristi) ──
const P = {
  pos: new THREE.Vector3(1.5, 0, 1.5), vel: new THREE.Vector3(), yaw: Math.PI, ground: true,
  energy: 100, energyMax: 100, drain: 1, frozen: true,
};
P.pos.y = groundAt(P.pos.x, P.pos.z);

// ── input ──
const input = { jx: 0, jy: 0, fly: false, act: false, actPressed: false };
let camYaw = Math.PI * 0.85, camPitch = 0.32, camDist = 6.5, lastDrag = 0;
const joyBase = document.getElementById('joyBase'), joyKnob = document.getElementById('joyKnob');
const homeJoy = { left: joyBase.style.left, bottom: joyBase.style.bottom };
let joyId = null, camId = null, joyCx = 0, joyCy = 0, camLx = 0, camLy = 0;
const canvas = renderer.domElement;
const controlsLayer = document.getElementById('controls');

function onDown(e) {
  if (P.frozen) return;
  const left = e.clientX < innerWidth * 0.45 && e.clientY > innerHeight * 0.3;
  if (e.pointerType !== 'mouse' && left && joyId === null) {
    joyId = e.pointerId; joyCx = e.clientX; joyCy = e.clientY;
    const r = joyBase.offsetWidth / 2;
    joyBase.style.left = (joyCx - r) + 'px'; joyBase.style.bottom = (innerHeight - joyCy - r) + 'px';
    joyBase.classList.add('active');
  } else if (camId === null) { camId = e.pointerId; camLx = e.clientX; camLy = e.clientY; }
}
function onMove(e) {
  if (e.pointerId === joyId) {
    const r = joyBase.offsetWidth / 2, dx = e.clientX - joyCx, dy = e.clientY - joyCy, d = Math.hypot(dx, dy), k = Math.min(1, d / r);
    const nx = d ? dx / d * k : 0, ny = d ? dy / d * k : 0;
    input.jx = nx; input.jy = -ny;
    joyKnob.style.transform = `translate(${nx * r * 0.7}px, ${ny * r * 0.7}px)`;
  } else if (e.pointerId === camId) {
    camYaw -= (e.clientX - camLx) * 0.006; camPitch = THREE.MathUtils.clamp(camPitch + (e.clientY - camLy) * 0.004, 0.05, 1.1);
    camLx = e.clientX; camLy = e.clientY; lastDrag = performance.now();
  }
}
function onUp(e) {
  if (e.pointerId === joyId) {
    joyId = null; input.jx = input.jy = 0; joyKnob.style.transform = '';
    joyBase.style.left = homeJoy.left; joyBase.style.bottom = homeJoy.bottom; joyBase.classList.remove('active');
  }
  if (e.pointerId === camId) camId = null;
}
canvas.addEventListener('pointerdown', onDown);
controlsLayer.addEventListener('pointerdown', (e) => { if (e.target === controlsLayer || e.target === joyBase || e.target === joyKnob) onDown(e); });
addEventListener('pointermove', onMove); addEventListener('pointerup', onUp); addEventListener('pointercancel', onUp);
// joystick needs the controls layer to receive touches on the left side
controlsLayer.style.pointerEvents = 'auto';

const btnFly = document.getElementById('btnFly'), btnAct = document.getElementById('btnAct');
const hold = (btn, key) => {
  btn.addEventListener('pointerdown', (e) => { e.stopPropagation(); input[key] = true; if (key === 'act') input.actPressed = true; btn.classList.add('pressed'); });
  const up = () => { input[key] = false; btn.classList.remove('pressed'); };
  btn.addEventListener('pointerup', up); btn.addEventListener('pointerleave', up); btn.addEventListener('pointercancel', up);
};
hold(btnFly, 'fly'); hold(btnAct, 'act');
const keys = new Set();
addEventListener('keydown', (e) => {
  keys.add(e.code);
  if (e.code === 'Space') input.fly = true;
  if (e.code === 'KeyE' && !e.repeat) { input.act = true; input.actPressed = true; }
});
addEventListener('keyup', (e) => {
  keys.delete(e.code);
  if (e.code === 'Space') input.fly = false;
  if (e.code === 'KeyE') input.act = false;
});

document.getElementById('btnMute').addEventListener('click', (e) => { A.initAudio(); e.currentTarget.classList.toggle('off', A.toggleMute()); });

// ── interactables ──
const interactables = new Map();
let nearest = null;
function addInteract(id, pos, label, opts = {}) {
  const it = { id, pos, label, radius: opts.radius || 2.6, hold: opts.hold || 0, onUse: opts.onUse || null, waiters: [], progress: 0, released: false, active: true };
  interactables.set(id, it); return it;
}
function removeInteract(id) { interactables.delete(id); }
function waitInteract(id) { return new Promise(res => { const it = interactables.get(id); if (it) it.waiters.push(res); }); }

// ── camera shots for cutscenes ──
const cam = { mode: 'follow', pos: new THREE.Vector3(), look: new THREE.Vector3(), curLook: new THREE.Vector3(), speed: 2 };
function shot(pos, look, speed = 1.5) { cam.mode = 'shot'; cam.pos.copy(pos); cam.look.copy(look); cam.speed = speed; }
function shotNow(pos, look) { shot(pos, look); camera.position.copy(pos); cam.curLook.copy(look); camera.lookAt(look); }
function follow() { cam.mode = 'follow'; }
let shake = 0;

// ── the game API the story uses ──
export const G = {
  W, P, UI, A, SPOTS, camera, scene, groundAt,
  state: freshState(),
  targets: [],
  dayClock: null,
  addInteract, removeInteract, waitInteract, hasInteract: (id) => interactables.has(id), shot, shotNow, follow,
  shake(v) { shake = v; },
  save(cp) { if (cp) G.state.checkpoint = cp; saveState(G.state); },
  freeze(on) { P.frozen = on; if (on) { input.jx = input.jy = 0; input.fly = false; } UI.cutscene(on); },
  placePlayer(x, z, yaw = null) { P.pos.set(x, groundAt(x, z), z); P.vel.set(0, 0, 0); if (yaw !== null) { P.yaw = yaw; camYaw = yaw; } },
  faceKristi(target) { P.yaw = Math.atan2(target.x - P.pos.x, target.z - P.pos.z); },
  place(char, x, z, faceX = null, faceZ = null, yOff = 0) {
    char.group.position.set(x, groundAt(x, z) + yOff, z);
    if (faceX !== null) char.group.rotation.y = Math.atan2(faceX - x, faceZ - z);
  },
  near(pos, r) { return Math.hypot(P.pos.x - pos.x, P.pos.z - pos.z) < r; },
  reach(pos, r) { return new Promise(res => { const check = () => G.near(pos, r) ? res() : requestAnimationFrame(check); check(); }); },
  lumiFollow: 'kirubel',
  wait,
  resetCam() { camYaw = P.yaw + Math.PI; camPitch = 0.32; },
};

// ── main loop ──
let lastT = performance.now();
const fwd = new THREE.Vector3(), right = new THREE.Vector3(), move = new THREE.Vector3(), tmp = new THREE.Vector3();
let actWasHeld = false;

function update(dt) {
  // movement intent
  let jx = input.jx, jy = input.jy;
  if (keys.has('KeyW') || keys.has('ArrowUp')) jy = 1; if (keys.has('KeyS') || keys.has('ArrowDown')) jy = -1;
  if (keys.has('KeyA') || keys.has('ArrowLeft')) jx = -1; if (keys.has('KeyD') || keys.has('ArrowRight')) jx = 1;
  if (P.frozen) { jx = jy = 0; }
  fwd.set(-Math.sin(camYaw), 0, -Math.cos(camYaw)); right.set(Math.cos(camYaw), 0, -Math.sin(camYaw));
  move.set(0, 0, 0).addScaledVector(fwd, jy).addScaledVector(right, jx);
  const mag = Math.min(1, move.length()); if (mag > 0.01) move.normalize();

  const speed = P.ground ? 5.2 : 7.5;
  P.vel.x = THREE.MathUtils.lerp(P.vel.x, move.x * speed * mag, Math.min(1, dt * 8));
  P.vel.z = THREE.MathUtils.lerp(P.vel.z, move.z * speed * mag, Math.min(1, dt * 8));
  if (mag > 0.05) {
    const target = Math.atan2(move.x, move.z);
    let d = target - P.yaw; d = Math.atan2(Math.sin(d), Math.cos(d)); P.yaw += d * Math.min(1, dt * 10);
    if (performance.now() - lastDrag > 1800 && jy > 0.3) { // camera drifts gently behind her
      let cd = (P.yaw + Math.PI) - camYaw; cd = Math.atan2(Math.sin(cd), Math.cos(cd)); camYaw += cd * dt * 0.9 * jy;
    }
  }

  // flight: hold to rise, release to glide down on her wings
  const flying = input.fly && !P.frozen && P.energy > 0;
  const gnd = floorAt(P.pos.x, P.pos.z, P.pos.y);
  if (flying) {
    P.vel.y = Math.min(P.vel.y + 22 * dt, 5.5);
    P.energy -= 20 * P.drain * dt;
    if (P.pos.y > gnd + 14) P.vel.y = Math.min(P.vel.y, 0);
  } else {
    P.vel.y -= 16 * dt;
    if (!P.ground) P.vel.y = Math.max(P.vel.y, -3.2); // gliding
  }
  P.pos.addScaledVector(P.vel, dt);

  // collisions: tree trunks, the ship, the pillar
  for (const c of W.colliders) {
    const dx = P.pos.x - c.x, dz = P.pos.z - c.z, d = Math.hypot(dx, dz), base = groundAt(c.x, c.z);
    if (d < c.r && P.pos.y < base + c.h && d > 0.0001) { P.pos.x = c.x + dx / d * c.r; P.pos.z = c.z + dz / d * c.r; }
  }
  const rr = Math.hypot(P.pos.x, P.pos.z);
  if (rr > WORLD_RADIUS) { P.pos.x *= WORLD_RADIUS / rr; P.pos.z *= WORLD_RADIUS / rr; }
  const floor = floorAt(P.pos.x, P.pos.z, P.pos.y);
  if (P.pos.y <= floor) { P.pos.y = floor; P.vel.y = Math.max(0, P.vel.y); P.ground = true; }
  else P.ground = P.pos.y - floor < 0.05;
  if (P.ground && !flying) P.energy = Math.min(P.energyMax, P.energy + 16 * dt);
  P.energy = Math.max(0, P.energy);

  const k = W.kristi;
  k.group.position.copy(P.pos); k.group.rotation.y = P.yaw;
  k.st.moving = Math.min(1, Math.hypot(P.vel.x, P.vel.z) / 5); k.st.air = !P.ground;

  // Lumi follows someone
  const lt = G.lumiFollow === 'kristi' ? W.kristi.group.position : W.kirubel.group.position;
  W.lumi.st.target.set(lt.x + 0.9, groundAt(lt.x + 0.9, lt.z + 0.6), lt.z + 0.6);

  // daytime clock
  if (G.dayClock && G.dayClock.running) {
    const c = G.dayClock; c.elapsed += dt;
    const f = Math.min(1, c.elapsed / c.dur);
    W.setTime(c.from + (c.to - c.from) * f);
    if (f >= 1 && !c.ended) { c.ended = true; c.onEnd && c.onEnd(); }
  }
  A.setAmbientDaylight(W.sky.daylight);

  // interactables: nearest in range
  nearest = null; let best = 1e9;
  if (!P.frozen) for (const it of interactables.values()) {
    if (!it.active) continue;
    const d = Math.hypot(P.pos.x - it.pos.x, P.pos.z - it.pos.z) + Math.max(0, Math.abs(P.pos.y - floorAt(it.pos.x, it.pos.z, P.pos.y)) - 2);
    if (d < it.radius && d < best) { best = d; nearest = it; }
  }
  UI.actLabel(nearest ? nearest.label : null);
  if (nearest && nearest.hold) {
    if (input.act) nearest.progress += dt / nearest.hold;
    else { if (actWasHeld && nearest.progress > 0.05 && nearest.progress < 1) nearest.released = true; nearest.progress = Math.max(0, nearest.progress - dt * 0.25); }
    UI.holdRing(nearest.progress > 0 ? Math.min(1, nearest.progress) : null);
    if (nearest.progress >= 1) { const it = nearest; UI.holdRing(null); removeInteract(it.id); it.waiters.forEach(w => w(it)); it.onUse && it.onUse(it); }
  } else UI.holdRing(null);
  actWasHeld = input.act;
  if (input.actPressed) {
    input.actPressed = false;
    if (nearest && !nearest.hold) { const it = nearest; const ws = it.waiters; it.waiters = []; ws.forEach(w => w(it)); it.onUse && it.onUse(it); }
  }

  // compass to the nearest target
  if (G.targets.length && !P.frozen) {
    let tgt = null, bd = 1e9;
    for (const t of G.targets) { const d = Math.hypot(t.x - P.pos.x, t.z - P.pos.z); if (d < bd) { bd = d; tgt = t; } }
    const ang = Math.atan2(tgt.x - P.pos.x, tgt.z - P.pos.z);
    let rel = (ang - (camYaw + Math.PI)); rel = Math.atan2(Math.sin(rel), Math.cos(rel));
    UI.compass(-rel * 180 / Math.PI, bd);
  } else UI.compass(null);
  UI.energy(P.energy / 100, P.energyMax < 100);

  W.update(dt);

  // camera
  if (cam.mode === 'follow') {
    tmp.set(P.pos.x + Math.sin(camYaw) * Math.cos(camPitch) * camDist, P.pos.y + 1.4 + Math.sin(camPitch) * camDist, P.pos.z + Math.cos(camYaw) * Math.cos(camPitch) * camDist);
    tmp.y = Math.max(tmp.y, groundAt(tmp.x, tmp.z) + 0.6);
    camera.position.lerp(tmp, Math.min(1, dt * 6));
    cam.curLook.lerp(tmp.set(P.pos.x, P.pos.y + 1.3, P.pos.z), Math.min(1, dt * 10));
  } else {
    camera.position.lerp(cam.pos, Math.min(1, dt * cam.speed));
    cam.curLook.lerp(cam.look, Math.min(1, dt * cam.speed * 1.4));
  }
  camera.lookAt(cam.curLook);
  if (shake > 0) { camera.position.x += (Math.random() - 0.5) * shake; camera.position.y += (Math.random() - 0.5) * shake; shake = Math.max(0, shake - dt * 1.5); }
}

function loop() {
  const now = performance.now(); const dt = Math.min(0.05, (now - lastT) / 1000); lastT = now;
  update(dt);
  renderer.render(scene, camera);
  requestAnimationFrame(loop);
}

// ── title screen ──
const saved = loadState();
const btnContinue = document.getElementById('btnContinue'), btnNew = document.getElementById('btnNew');
const params = new URLSearchParams(location.search);
if (saved && saved.checkpoint !== 'prologue') { btnContinue.classList.remove('hidden'); btnNew.textContent = 'Start over'; btnNew.classList.add('ghost'); }
async function start(fromSave) {
  A.initAudio();
  try { if (document.documentElement.requestFullscreen && matchMedia('(pointer: coarse)').matches) await document.documentElement.requestFullscreen(); } catch (e) { /* fine */ }
  try { screen.orientation && screen.orientation.lock && await screen.orientation.lock('landscape'); } catch (e) { /* fine */ }
  document.getElementById('title').classList.add('hidden');
  if (fromSave && saved) G.state = saved; else { clearState(); G.state = freshState(); }
  if (params.get('cp')) G.state.checkpoint = params.get('cp'); // testing shortcut
  runFrom(G, G.state.checkpoint);
}
btnContinue.addEventListener('click', () => start(true));
btnNew.addEventListener('click', async () => {
  if (saved && saved.checkpoint !== 'prologue') {
    const i = await UI.card('<h2>Start over?</h2><p>Kristi and Kirubel will forget everything so far.</p>', ['Start over', 'Keep my story']);
    if (i !== 0) return;
  }
  start(false);
});
if (params.get('debug')) window.__G = G;
if (params.get('autostart')) start(params.get('autostart') === 'continue');

// shot of the forest behind the title
G.shotNow(new THREE.Vector3(14, 12, 22), new THREE.Vector3(0, 4, -10));
W.kristi.group.position.copy(P.pos);
loop();

if ('serviceWorker' in navigator && location.protocol === 'https:') {
  addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}
