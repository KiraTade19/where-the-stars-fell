import * as THREE from 'three';

// ── deterministic randomness so the forest is the same every time ──
function rng(seed) {
  return () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
}

// ── key places in the forest ──
export const SPOTS = {
  home: new THREE.Vector3(0, 0, 0),
  warka: new THREE.Vector3(-15, 0, 13),
  sena: new THREE.Vector3(3, 0, 3),
  crash: new THREE.Vector3(40, 0, -45),
  kirubel: new THREE.Vector3(36.5, 0, -41),
  prayer: new THREE.Vector3(55, 0, -45),
  leaves: [new THREE.Vector3(29, 0, -36), new THREE.Vector3(53, 0, -38), new THREE.Vector3(45, 0, -60)],
  parts: [new THREE.Vector3(-36, 0, -20), new THREE.Vector3(14, 0, -72)],
  sapling: new THREE.Vector3(-32, 0, 30),
  petals: new THREE.Vector3(55, 0, 22),
  posts: [new THREE.Vector3(7, 0, -9), new THREE.Vector3(-11, 0, -6), new THREE.Vector3(9, 0, 11)],
  pillar: new THREE.Vector3(-50, 0, -55),
};
export const WORLD_RADIUS = 95;
const PILLAR_TOP = 9, PILLAR_R = 2.2;

export function groundAt(x, z) {
  let h = Math.sin(x * 0.05) * 1.1 + Math.cos(z * 0.045) * 1.0 + Math.sin((x + z) * 0.11) * 0.35;
  // flatten the crater and clearings a little
  const flat = (p, r) => { const d = Math.hypot(x - p.x, z - p.z); return d < r ? 1 - d / r : 0; };
  h -= flat(SPOTS.crash, 9) * 1.2;
  const r = Math.hypot(x, z);
  if (r > WORLD_RADIUS - 6) h += (r - (WORLD_RADIUS - 6)) * 0.6; // rising edge of the forest
  return h;
}

// floor including platforms you can land on (the star pillar)
export function floorAt(x, z, y) {
  const g = groundAt(x, z);
  const d = Math.hypot(x - SPOTS.pillar.x, z - SPOTS.pillar.z);
  const top = groundAt(SPOTS.pillar.x, SPOTS.pillar.z) + PILLAR_TOP;
  if (d < PILLAR_R && y >= top - 0.6) return top;
  return g;
}

// ── shared textures ──
function glowTexture(inner = 'rgba(255,255,255,1)', outer = 'rgba(255,255,255,0)') {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d'), gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  gr.addColorStop(0, inner); gr.addColorStop(0.25, inner.replace(/[\d.]+\)$/, '0.6)')); gr.addColorStop(1, outer);
  g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
function moonTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 256;
  const g = c.getContext('2d');
  const halo = g.createRadialGradient(128, 128, 40, 128, 128, 128);
  halo.addColorStop(0, 'rgba(255,248,225,0.55)'); halo.addColorStop(1, 'rgba(255,248,225,0)');
  g.fillStyle = halo; g.fillRect(0, 0, 256, 256);
  g.fillStyle = '#fff6dc'; g.beginPath(); g.arc(128, 128, 46, 0, Math.PI * 2); g.fill();
  g.fillStyle = 'rgba(200,190,170,0.35)';
  [[112, 118, 9], [140, 140, 12], [130, 105, 6], [116, 146, 5]].forEach(([x, y, r]) => { g.beginPath(); g.arc(x, y, r, 0, 7); g.fill(); });
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
export const TEX = {};

const std = (color, o = {}) => new THREE.MeshStandardMaterial({ color, flatShading: true, roughness: 0.85, ...o });

// ── sky palette over a day (t: 0 midnight, .25 sunrise, .5 noon, .75 sunset) ──
const KEYS = [
  { t: 0.00, top: 0x04061a, bot: 0x1b1745, fog: 0x15173a, sun: 0x8f9fe8, si: 0.7, hs: 0x5a64b8, hg: 0x1a2a24, hi: 1.25 },
  { t: 0.19, top: 0x070a24, bot: 0x241a4a, fog: 0x1c1a42, sun: 0x8f9fe8, si: 0.7, hs: 0x5a64b8, hg: 0x1a2a24, hi: 1.25 },
  { t: 0.26, top: 0x3a4a92, bot: 0xf3a57e, fog: 0xc4908c, sun: 0xffb27a, si: 1.0, hs: 0x8a8fd0, hg: 0x2a2a1a, hi: 0.8 },
  { t: 0.50, top: 0x5c8fd8, bot: 0xeadcb2, fog: 0xc6d1b4, sun: 0xfff0cf, si: 1.7, hs: 0xcfe0ff, hg: 0x4a5a2a, hi: 1.0 },
  { t: 0.72, top: 0x3c3a80, bot: 0xff9a64, fog: 0xb07a72, sun: 0xff9a5a, si: 1.0, hs: 0x9a80c0, hg: 0x2a1a1a, hi: 0.75 },
  { t: 0.80, top: 0x0b0d2c, bot: 0x3a2050, fog: 0x231c48, sun: 0x8f9fe8, si: 0.7, hs: 0x5a64b8, hg: 0x1a2a24, hi: 1.25 },
  { t: 1.00, top: 0x04061a, bot: 0x1b1745, fog: 0x15173a, sun: 0x8f9fe8, si: 0.7, hs: 0x5a64b8, hg: 0x1a2a24, hi: 1.25 },
];
const _c1 = new THREE.Color(), _c2 = new THREE.Color();
function lerpHex(a, b, f, out) { _c1.setHex(a); _c2.setHex(b); return out.copy(_c1).lerp(_c2, f); }

export function buildWorld(renderer) {
  const R = rng(1977);
  const scene = new THREE.Scene();
  TEX.glow = glowTexture();
  TEX.warm = glowTexture('rgba(255,210,130,1)', 'rgba(255,180,90,0)');
  TEX.cyan = glowTexture('rgba(120,240,255,1)', 'rgba(80,200,255,0)');

  scene.fog = new THREE.Fog(0x15173a, 18, 95);

  // sky dome
  const skyMat = new THREE.ShaderMaterial({
    uniforms: { top: { value: new THREE.Color() }, bot: { value: new THREE.Color() } },
    vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: 'uniform vec3 top; uniform vec3 bot; varying vec3 vP; void main(){ float h = clamp(vP.y*0.5+0.5,0.0,1.0); gl_FragColor = vec4(mix(bot, top, smoothstep(0.48,0.85,h)),1.0); \n#include <colorspace_fragment>\n }',
    side: THREE.BackSide, depthWrite: false, fog: false,
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(450, 24, 16), skyMat);
  scene.add(sky);

  // stars
  const starGeo = new THREE.BufferGeometry(), sp = [];
  for (let i = 0; i < 1400; i++) {
    const th = R() * Math.PI * 2, ph = Math.acos(R() * 0.95);
    sp.push(Math.sin(ph) * Math.cos(th) * 420, Math.cos(ph) * 420, Math.sin(ph) * Math.sin(th) * 420);
  }
  starGeo.setAttribute('position', new THREE.Float32BufferAttribute(sp, 3));
  const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 1.6, sizeAttenuation: false, transparent: true, fog: false, depthWrite: false });
  const stars = new THREE.Points(starGeo, starMat); scene.add(stars);

  // moon (grows toward the full moon) & sun
  const moon = new THREE.Sprite(new THREE.SpriteMaterial({ map: moonTexture(), fog: false, depthWrite: false, transparent: true }));
  moon.position.set(-160, 170, -260); scene.add(moon);
  const sunSpr = new THREE.Sprite(new THREE.SpriteMaterial({ map: TEX.warm, fog: false, depthWrite: false, transparent: true, blending: THREE.AdditiveBlending }));
  sunSpr.scale.set(90, 90, 1); scene.add(sunSpr);

  // lights
  const hemi = new THREE.HemisphereLight(0x3a3f8a, 0x0b1a14, 0.6); scene.add(hemi);
  const sun = new THREE.DirectionalLight(0x6f7fd0, 0.3); scene.add(sun); scene.add(sun.target);

  // ground with vertex colour variation
  const SIZE = 240, SEG = 90;
  const gGeo = new THREE.PlaneGeometry(SIZE, SIZE, SEG, SEG); gGeo.rotateX(-Math.PI / 2);
  const pos = gGeo.attributes.position, cols = [];
  const moss = new THREE.Color(0x2f5a2a), deep = new THREE.Color(0x1c3a22), dirt = new THREE.Color(0x4a3a24), tmp = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i);
    pos.setY(i, groundAt(x, z));
    tmp.copy(moss).lerp(deep, (Math.sin(x * 0.3) * Math.cos(z * 0.27) + 1) * 0.35 + R() * 0.2);
    const dc = Math.hypot(x - SPOTS.crash.x, z - SPOTS.crash.z);
    if (dc < 9) tmp.lerp(dirt, 1 - dc / 9);
    cols.push(tmp.r, tmp.g, tmp.b);
  }
  gGeo.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
  gGeo.computeVertexNormals();
  const ground = new THREE.Mesh(gGeo, new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 1 }));
  scene.add(ground);

  // ── trees (instanced) ──
  const colliders = [];
  const keep = [SPOTS.home, SPOTS.warka, SPOTS.crash, SPOTS.prayer, SPOTS.sapling, SPOTS.petals, SPOTS.pillar, SPOTS.sena,
    ...SPOTS.leaves, ...SPOTS.parts, ...SPOTS.posts];
  const treeSpots = [];
  let tries = 0;
  while (treeSpots.length < 300 && tries++ < 5000) {
    const a = R() * Math.PI * 2, r = 8 + Math.sqrt(R()) * (WORLD_RADIUS + 10);
    const x = Math.cos(a) * r, z = Math.sin(a) * r;
    if (keep.some(p => Math.hypot(p.x - x, p.z - z) < (p === SPOTS.crash ? 13 : p === SPOTS.prayer ? 10 : 6))) continue;
    if (treeSpots.some(t => Math.hypot(t.x - x, t.z - z) < 3.2)) continue;
    treeSpots.push({ x, z, s: 0.8 + R() * 0.8, k: R() });
  }
  const trunkGeo = new THREE.CylinderGeometry(0.22, 0.38, 3, 6); trunkGeo.translate(0, 1.5, 0);
  const leafGeo1 = new THREE.ConeGeometry(2.0, 3.4, 7); leafGeo1.translate(0, 3.8, 0);
  const leafGeo2 = new THREE.ConeGeometry(1.5, 2.8, 7); leafGeo2.translate(0, 5.4, 0);
  const trunks = new THREE.InstancedMesh(trunkGeo, std(0x4a3426), treeSpots.length);
  const leaves1 = new THREE.InstancedMesh(leafGeo1, std(0xffffff), treeSpots.length);
  const leaves2 = new THREE.InstancedMesh(leafGeo2, std(0xffffff), treeSpots.length);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3(), p3 = new THREE.Vector3();
  const greens = [0x2e6b3a, 0x3d7d3a, 0x2a5e48, 0x4a7a30, 0x2f6a5a];
  treeSpots.forEach((t, i) => {
    q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), t.k * 6.28);
    sc.set(t.s, t.s * (0.9 + t.k * 0.4), t.s); p3.set(t.x, groundAt(t.x, t.z) - 0.2, t.z);
    m.compose(p3, q, sc);
    trunks.setMatrixAt(i, m); leaves1.setMatrixAt(i, m); leaves2.setMatrixAt(i, m);
    const c = new THREE.Color(greens[i % greens.length]);
    leaves1.setColorAt(i, c); leaves2.setColorAt(i, c.clone().offsetHSL(0, 0, 0.05));
    colliders.push({ x: t.x, z: t.z, r: 0.45 * t.s + 0.35, h: 5 * t.s });
  });
  scene.add(trunks, leaves1, leaves2);

  // ── Grandmother Warka: a huge flat-crowned sycamore by Kristi's home ──
  const warka = new THREE.Group();
  const wTrunk = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 2.0, 7, 8), std(0x5a4030)); wTrunk.position.y = 3.5;
  warka.add(wTrunk);
  for (let i = 0; i < 9; i++) {
    const a = i / 9 * Math.PI * 2, r = i === 0 ? 0 : 4 + R() * 2;
    const blob = new THREE.Mesh(new THREE.IcosahedronGeometry(3.4 + R() * 1.2, 0), std(i % 2 ? 0x3d7a3a : 0x356e42));
    blob.position.set(Math.cos(a) * r, 8 + R() * 1.5, Math.sin(a) * r); blob.scale.y = 0.55; warka.add(blob);
  }
  warka.position.copy(SPOTS.warka).setY(groundAt(SPOTS.warka.x, SPOTS.warka.z) - 0.3);
  scene.add(warka);
  colliders.push({ x: SPOTS.warka.x, z: SPOTS.warka.z, r: 2.2, h: 7 });

  // Kristi's home: a glowing hollow stump with a round door
  const home = new THREE.Group();
  const stump = new THREE.Mesh(new THREE.CylinderGeometry(1.8, 2.3, 2.6, 9), std(0x6a4a34)); stump.position.y = 1.3;
  const roof = new THREE.Mesh(new THREE.ConeGeometry(2.4, 1.6, 9), std(0x4f7a3a)); roof.position.y = 3.3;
  const doorShape = new THREE.Shape(); doorShape.moveTo(-0.45, 0); doorShape.lineTo(-0.45, 0.75); doorShape.absarc(0, 0.75, 0.45, Math.PI, 0, true); doorShape.lineTo(0.45, 0); doorShape.lineTo(-0.45, 0);
  const door = new THREE.Mesh(new THREE.ShapeGeometry(doorShape), new THREE.MeshBasicMaterial({ color: 0xffa04a }));
  door.position.set(0, 0.02, 2.1);
  const win = new THREE.Mesh(new THREE.CircleGeometry(0.22, 12), new THREE.MeshBasicMaterial({ color: 0xffb860 })); win.position.set(1.1, 1.7, 1.75); win.rotation.y = 0.5;
  const homeLight = new THREE.PointLight(0xffb860, 3, 9, 1.6); homeLight.position.set(0, 1.2, 3);
  home.add(stump, roof, door, win, homeLight);
  home.position.set(-1.5, groundAt(-1.5, -4.5), -4.5); home.rotation.y = 0.4;
  scene.add(home);
  colliders.push({ x: -1.5, z: -4.5, r: 2.3, h: 4 });

  // ── glowing mushrooms ──
  const capGeo = new THREE.ConeGeometry(0.28, 0.22, 7); capGeo.translate(0, 0.32, 0);
  const stemGeo = new THREE.CylinderGeometry(0.05, 0.07, 0.3, 5); stemGeo.translate(0, 0.15, 0);
  const caps = new THREE.InstancedMesh(capGeo, new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 0.9, flatShading: true }), 160);
  const stems = new THREE.InstancedMesh(stemGeo, std(0xe8e0d0), 160);
  const shroomCols = [0xff7ad9, 0x6ae8ff, 0xb98bff, 0xffc46a];
  for (let i = 0; i < 160; i++) {
    const cl = treeSpots[Math.floor(R() * treeSpots.length)];
    const x = cl.x + (R() - 0.5) * 3, z = cl.z + (R() - 0.5) * 3, s = 0.7 + R() * 1.3;
    m.compose(p3.set(x, groundAt(x, z), z), q.identity(), sc.set(s, s, s));
    caps.setMatrixAt(i, m); stems.setMatrixAt(i, m);
    const c = new THREE.Color(shroomCols[i % 4]); caps.setColorAt(i, c);
  }
  caps.material.emissive.set(0x000000);
  caps.material.onBeforeCompile = (sh) => { // emissive follows each instance's colour
    sh.fragmentShader = sh.fragmentShader.replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\n totalEmissiveRadiance = vColor.rgb * 0.85;');
  };
  scene.add(caps, stems);

  // ── fireflies ──
  const FF = 140, ffGeo = new THREE.BufferGeometry(), ffPos = new Float32Array(FF * 3), ffSeed = [];
  for (let i = 0; i < FF; i++) {
    const a = R() * 6.28, r = R() * 70;
    ffSeed.push({ x: Math.cos(a) * r, z: Math.sin(a) * r, y: 0.6 + R() * 3, p: R() * 6.28, s: 0.3 + R() * 0.6 });
  }
  ffGeo.setAttribute('position', new THREE.BufferAttribute(ffPos, 3));
  const ffMat = new THREE.PointsMaterial({ map: TEX.warm, size: 0.55, color: 0xfff0a0, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
  const fireflies = new THREE.Points(ffGeo, ffMat); scene.add(fireflies);

  // ── the crashed ship ──
  const wreck = new THREE.Group();
  const metal = new THREE.MeshStandardMaterial({ color: 0xaab6c8, metalness: 0.55, roughness: 0.35, flatShading: true });
  const hull = new THREE.Mesh(new THREE.SphereGeometry(3, 14, 8), metal); hull.scale.set(1, 0.35, 1);
  const dome = new THREE.Mesh(new THREE.SphereGeometry(1.3, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2),
    new THREE.MeshStandardMaterial({ color: 0x8ad8ff, transparent: true, opacity: 0.45, emissive: 0x2a8ab0, emissiveIntensity: 0.6 }));
  dome.position.y = 0.6;
  const ring = new THREE.Mesh(new THREE.TorusGeometry(2.95, 0.09, 6, 40), new THREE.MeshBasicMaterial({ color: 0x5ef0ff }));
  ring.rotation.x = Math.PI / 2;
  wreck.add(hull, dome, ring);
  for (let i = 0; i < 6; i++) { // debris lying on the ground around the crater
    const d = new THREE.Mesh(new THREE.BoxGeometry(0.6 + R(), 0.08, 0.4 + R() * 0.5), metal);
    const a = R() * 6.28, r = 4.5 + R() * 3, x = SPOTS.crash.x + Math.cos(a) * r, z = SPOTS.crash.z + Math.sin(a) * r;
    d.position.set(x, groundAt(x, z) + 0.05, z); d.rotation.set((R() - 0.5) * 0.3, R() * 3, (R() - 0.5) * 0.3);
    scene.add(d);
  }
  wreck.position.copy(SPOTS.crash).setY(groundAt(SPOTS.crash.x, SPOTS.crash.z) + 0.4);
  wreck.rotation.set(0.32, 0.6, 0.18);
  scene.add(wreck);
  colliders.push({ x: SPOTS.crash.x, z: SPOTS.crash.z, r: 3.1, h: 2.5 });
  const wreckLight = new THREE.PointLight(0x5ef0ff, 6, 16, 1.6);
  wreckLight.position.copy(SPOTS.crash).setY(groundAt(SPOTS.crash.x, SPOTS.crash.z) + 2.2); scene.add(wreckLight);

  // smoke
  const smoke = [];
  const smokeMat = new THREE.SpriteMaterial({ map: TEX.glow, color: 0x8a8a9a, transparent: true, opacity: 0.25, depthWrite: false });
  for (let i = 0; i < 14; i++) {
    const s = new THREE.Sprite(smokeMat.clone()); s.userData.t = i / 14; scene.add(s); smoke.push(s);
  }

  // ── prayer spot: a small handmade cross of sticks, facing east ──
  const prayer = new THREE.Group();
  const stick = std(0x6a4a2a);
  const v = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.4, 0.12), stick); v.position.y = 0.7;
  const h = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.1, 0.1), stick); h.position.y = 1.05;
  prayer.add(v, h);
  for (let i = 0; i < 7; i++) { // ring of stones
    const st = new THREE.Mesh(new THREE.DodecahedronGeometry(0.18, 0), std(0x8a8a8a));
    st.position.set(Math.cos(i / 7 * 6.28) * 0.6, 0.05, Math.sin(i / 7 * 6.28) * 0.6); prayer.add(st);
  }
  prayer.position.set(SPOTS.prayer.x + 2.2, groundAt(SPOTS.prayer.x + 2.2, SPOTS.prayer.z), SPOTS.prayer.z);
  prayer.rotation.y = Math.PI / 2;
  scene.add(prayer);

  // ── the star pillar (reachable only by flying) ──
  const pillar = new THREE.Mesh(new THREE.CylinderGeometry(PILLAR_R * 0.9, PILLAR_R * 1.25, PILLAR_TOP, 7), std(0x6a6470));
  pillar.position.set(SPOTS.pillar.x, groundAt(SPOTS.pillar.x, SPOTS.pillar.z) + PILLAR_TOP / 2, SPOTS.pillar.z);
  scene.add(pillar);
  colliders.push({ x: SPOTS.pillar.x, z: SPOTS.pillar.z, r: PILLAR_R + 0.3, h: PILLAR_TOP - 0.6, pillar: true });

  // ── the sick Warka sapling ──
  const sapling = new THREE.Group();
  const sTrunk = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.22, 1.6, 6), std(0x5a4636)); sTrunk.position.y = 0.8;
  const sLeafMat = std(0x7a6a50);
  const sLeaf = new THREE.Mesh(new THREE.IcosahedronGeometry(0.9, 0), sLeafMat); sLeaf.position.y = 1.9; sLeaf.scale.y = 0.6;
  sapling.add(sTrunk, sLeaf);
  sapling.position.copy(SPOTS.sapling).setY(groundAt(SPOTS.sapling.x, SPOTS.sapling.z));
  sapling.userData.leafMat = sLeafMat; sapling.userData.leaf = sLeaf;
  scene.add(sapling);

  // ── lantern posts ──
  const posts = SPOTS.posts.map(pp => {
    const g = new THREE.Group();
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 2.4, 5), std(0x5a4030)); pole.position.y = 1.2;
    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.06, 0.06), std(0x5a4030)); arm.position.set(0.25, 2.3, 0);
    const lantern = new THREE.Mesh(new THREE.OctahedronGeometry(0.22, 0), new THREE.MeshBasicMaterial({ color: 0xffc46a }));
    lantern.position.set(0.5, 2.05, 0); lantern.visible = false;
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: TEX.warm, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    halo.scale.set(1.6, 1.6, 1); halo.position.copy(lantern.position); halo.visible = false;
    g.add(pole, arm, lantern, halo);
    g.position.copy(pp).setY(groundAt(pp.x, pp.z));
    g.userData.lit = () => { lantern.visible = true; halo.visible = true; };
    scene.add(g); return g;
  });

  // ── characters ──
  const kristi = makeKristi(); scene.add(kristi.group);
  const kirubel = makeKirubel(); scene.add(kirubel.group);
  const lumi = makeLumi(); scene.add(lumi.group);
  const sena = makeSena(); scene.add(sena.group);
  kirubel.group.position.copy(SPOTS.kirubel).setY(groundAt(SPOTS.kirubel.x, SPOTS.kirubel.z));
  sena.group.position.copy(SPOTS.sena).setY(groundAt(SPOTS.sena.x, SPOTS.sena.z) + 1.4);

  // ── state of the sky ──
  let timeOfDay = 0.02, moonDay = 0;
  const skyState = { daylight: 0 };
  function setTime(t) {
    timeOfDay = ((t % 1) + 1) % 1;
    let i = 0; while (i < KEYS.length - 2 && KEYS[i + 1].t <= timeOfDay) i++;
    const a = KEYS[i], b = KEYS[i + 1], f = (timeOfDay - a.t) / (b.t - a.t);
    lerpHex(a.top, b.top, f, skyMat.uniforms.top.value);
    lerpHex(a.bot, b.bot, f, skyMat.uniforms.bot.value);
    lerpHex(a.fog, b.fog, f, scene.fog.color);
    lerpHex(a.sun, b.sun, f, sun.color); sun.intensity = a.si + (b.si - a.si) * f;
    lerpHex(a.hs, b.hs, f, hemi.color); lerpHex(a.hg, b.hg, f, hemi.groundColor); hemi.intensity = a.hi + (b.hi - a.hi) * f;
    const sunAng = (timeOfDay - 0.25) * Math.PI * 2; // rises in the east (+x)
    sunSpr.position.set(Math.cos(sunAng) * 300, Math.sin(sunAng) * 300, -60);
    sun.position.set(Math.cos(sunAng) * 60, Math.max(25, Math.abs(Math.sin(sunAng)) * 60), 20);
    const day = THREE.MathUtils.clamp(Math.sin(sunAng) * 2.2 + 0.3, 0, 1);
    skyState.daylight = day;
    starMat.opacity = 1 - day; moon.material.opacity = Math.max(0.15, 1 - day * 0.9);
    sunSpr.material.opacity = day;
    ffMat.opacity = 1 - day * 0.85;
    caps.material.emissiveIntensity = 1;
    scene.fog.near = 14 + day * 10; scene.fog.far = 80 + day * 40;
  }
  function setMoonDay(d) { moonDay = d; const s = 34 + d * 6; moon.scale.set(s, s, 1); }
  setTime(timeOfDay); setMoonDay(0);

  // ── collectible items ──
  function makeItem(kind, p) {
    const g = new THREE.Group();
    let core, haloTex = TEX.cyan, haloSize = 1.4;
    if (kind === 'leaf') {
      core = new THREE.Group();
      for (let i = 0; i < 3; i++) {
        const l = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.5, 4), new THREE.MeshBasicMaterial({ color: 0x7ae8ff }));
        l.rotation.z = (i - 1) * 0.5; l.position.y = 0.25; core.add(l);
      }
    } else if (kind === 'part') {
      core = new THREE.Mesh(new THREE.TetrahedronGeometry(0.4, 0), new THREE.MeshStandardMaterial({ color: 0xb8c6da, metalness: 0.7, roughness: 0.3, emissive: 0x2a8ab0, emissiveIntensity: 0.5, flatShading: true }));
    } else if (kind === 'petal') {
      core = new THREE.Mesh(new THREE.OctahedronGeometry(0.22, 0), new THREE.MeshBasicMaterial({ color: 0xf6f1ff })); haloTex = TEX.glow; haloSize = 1.1;
    } else if (kind === 'star') {
      const shape = new THREE.Shape();
      for (let i = 0; i < 10; i++) { const r = i % 2 ? 0.18 : 0.45, a = i / 10 * Math.PI * 2 + Math.PI / 2; i ? shape.lineTo(Math.cos(a) * r, Math.sin(a) * r) : shape.moveTo(Math.cos(a) * r, Math.sin(a) * r); }
      core = new THREE.Mesh(new THREE.ExtrudeGeometry(shape, { depth: 0.12, bevelEnabled: false }), new THREE.MeshBasicMaterial({ color: 0xffe08a }));
      haloTex = TEX.warm; haloSize = 2.6;
    } else if (kind === 'lanterns') {
      core = new THREE.Group();
      for (let i = 0; i < 3; i++) { const l = new THREE.Mesh(new THREE.OctahedronGeometry(0.16, 0), new THREE.MeshBasicMaterial({ color: 0xffc46a })); l.position.x = (i - 1) * 0.3; core.add(l); }
      haloTex = TEX.warm;
    }
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: haloTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    halo.scale.set(haloSize, haloSize, 1);
    g.add(core, halo);
    const y = (kind === 'star' ? floorAt(p.x, p.z, 99) : groundAt(p.x, p.z)) + 0.8;
    g.position.set(p.x, y, p.z); g.userData = { core, baseY: y, kind };
    scene.add(g);
    items.add(g);
    return g;
  }
  const items = new Set();
  function removeItem(g) { scene.remove(g); items.delete(g); }

  // ── falling star (the crash) ──
  const fallers = [];
  function fallingStar(from, to, dur) {
    const head = new THREE.Sprite(new THREE.SpriteMaterial({ map: TEX.cyan, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
    head.scale.set(6, 6, 1); scene.add(head);
    const trail = [];
    for (let i = 0; i < 18; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: TEX.glow, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false, opacity: 0.6 * (1 - i / 18) }));
      s.scale.setScalar(4 * (1 - i / 18)); scene.add(s); trail.push(s);
    }
    return new Promise(res => fallers.push({ head, trail, from: from.clone(), to: to.clone(), t: 0, dur, res, hist: [] }));
  }

  // ── per-frame updates ──
  const _v = new THREE.Vector3();
  let clock = 0, smokeLevel = 1;
  function update(dt) {
    clock += dt;
    // fireflies drift
    for (let i = 0; i < FF; i++) {
      const s = ffSeed[i], t = clock * s.s + s.p;
      ffPos[i * 3] = s.x + Math.sin(t) * 2; ffPos[i * 3 + 2] = s.z + Math.cos(t * 0.8) * 2;
      ffPos[i * 3 + 1] = groundAt(s.x, s.z) + s.y + Math.sin(t * 1.7) * 0.5;
    }
    ffGeo.attributes.position.needsUpdate = true;
    // smoke
    const base = wreck.position;
    smoke.forEach(s => {
      s.userData.t = (s.userData.t + dt * 0.08) % 1; const t = s.userData.t;
      s.position.set(base.x + Math.sin(t * 9 + s.id) * 0.6 + t * 2, base.y + 0.8 + t * 9, base.z + t * 1.5);
      s.scale.setScalar(1.2 + t * 4); s.material.opacity = 0.28 * (1 - t) * smokeLevel;
    });
    ring.material.color.setHSL(0.52, 1, 0.5 + Math.sin(clock * 3) * 0.12);
    wreckLight.intensity = 5 + Math.sin(clock * 3) * 1.2;
    // items bob and spin
    items.forEach(g => { g.userData.core.rotation.y += dt * 1.5; g.position.y = g.userData.baseY + Math.sin(clock * 2 + g.position.x) * 0.15; });
    // falling stars
    for (let i = fallers.length - 1; i >= 0; i--) {
      const f = fallers[i]; f.t += dt / f.dur;
      const k = Math.min(1, f.t), e = k * k;
      _v.lerpVectors(f.from, f.to, e); f.head.position.copy(_v);
      f.hist.unshift(_v.clone()); if (f.hist.length > 40) f.hist.pop();
      f.trail.forEach((s, j) => { const h = f.hist[Math.min(f.hist.length - 1, j * 2)]; if (h) s.position.copy(h); });
      if (k >= 1) { scene.remove(f.head); f.trail.forEach(s => scene.remove(s)); fallers.splice(i, 1); f.res(); }
    }
    kristi.update(dt, clock); kirubel.update(dt, clock); lumi.update(dt, clock); sena.update(dt, clock);
  }

  return {
    scene, setTime, setMoonDay, get time() { return timeOfDay; }, sky: skyState,
    colliders, kristi, kirubel, lumi, sena, wreck, sapling, posts, makeItem, removeItem, fallingStar, update,
    setSmoke: (v) => { smokeLevel = v; },
  };
}

// ════════════════════ CHARACTERS ════════════════════
// Built from simple shapes and animated procedurally, so everything stays light on a phone.

function limb(len, r, mat) {
  const pivot = new THREE.Group();
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(r, r * 0.85, len, 6), mat);
  mesh.position.y = -len / 2; pivot.add(mesh); return pivot;
}

function makeKristi() {
  const group = new THREE.Group(), body = new THREE.Group(); group.add(body);
  const skin = std(0x8a5a3c, { roughness: 0.7 });
  const dress = std(0x3f7a3a, { emissive: 0x1a3a10, emissiveIntensity: 0.4 });
  const gold = std(0xd9b45a, { emissive: 0x6a4a10, emissiveIntensity: 0.5 });
  const hairM = std(0x1c120c);

  const skirt = new THREE.Mesh(new THREE.ConeGeometry(0.44, 0.95, 9, 1, true), dress); skirt.position.y = 0.62;
  skirt.material.side = THREE.DoubleSide;
  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.22, 0.48, 8), dress); torso.position.y = 1.18;
  const belt = new THREE.Mesh(new THREE.TorusGeometry(0.21, 0.035, 5, 12), gold); belt.rotation.x = Math.PI / 2; belt.position.y = 0.97;
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, 0.1, 6), skin); neck.position.y = 1.46;
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.17, 12, 10), skin); head.position.y = 1.62;
  const hair = new THREE.Mesh(new THREE.SphereGeometry(0.19, 10, 8), hairM); hair.position.set(0, 1.66, -0.04); hair.scale.set(1.05, 1.0, 1.05);
  const bun = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), hairM); bun.position.set(0, 1.78, -0.15);
  body.add(skirt, torso, belt, neck, head, hair, bun);
  // flowers & moss in her hair
  [[0.14, 1.74, 0.02, 0xff8ac6], [-0.12, 1.77, -0.02, 0xffd36a], [0.05, 1.86, -0.12, 0xffffff], [-0.16, 1.68, -0.1, 0x9ae07a]].forEach(([x, y, z, c]) => {
    const f = new THREE.Mesh(new THREE.IcosahedronGeometry(0.045, 0), new THREE.MeshBasicMaterial({ color: c })); f.position.set(x, y, z); body.add(f);
  });
  // eyes
  [-0.06, 0.06].forEach(x => { const e = new THREE.Mesh(new THREE.SphereGeometry(0.022, 6, 6), new THREE.MeshBasicMaterial({ color: 0x1a0e08 })); e.position.set(x, 1.64, 0.15); body.add(e); });
  // legs & arms
  const legL = limb(0.62, 0.05, skin), legR = limb(0.62, 0.05, skin);
  legL.position.set(-0.09, 0.62, 0); legR.position.set(0.09, 0.62, 0); body.add(legL, legR);
  const armL = limb(0.5, 0.045, skin), armR = limb(0.5, 0.045, skin);
  armL.position.set(-0.22, 1.38, 0); armR.position.set(0.22, 1.38, 0); body.add(armL, armR);

  // leaf wings (two pairs)
  const leafShape = new THREE.Shape();
  leafShape.moveTo(0, 0); leafShape.quadraticCurveTo(0.35, 0.35, 0.95, 0.55); leafShape.quadraticCurveTo(0.45, 0.05, 0, 0);
  const wingMat = new THREE.MeshStandardMaterial({ color: 0xb8e07a, emissive: 0x7aa02a, emissiveIntensity: 0.7, transparent: true, opacity: 0.7, side: THREE.DoubleSide, depthWrite: false });
  const wings = [];
  [[1, 0.0, 1], [-1, 0.0, 1], [1, -0.25, 0.75], [-1, -0.25, 0.75]].forEach(([side, dy, s]) => {
    const piv = new THREE.Group(); piv.position.set(0, 1.28 + dy, -0.16);
    const w = new THREE.Mesh(new THREE.ShapeGeometry(leafShape), wingMat);
    w.scale.set(side * s, s * (dy ? -0.8 : 1), 1); piv.add(w); body.add(piv);
    wings.push({ piv, side });
  });
  const light = new THREE.PointLight(0xffcf7a, 1.4, 7, 1.8); light.position.y = 1.3; group.add(light);
  const aura = new THREE.Sprite(new THREE.SpriteMaterial({ map: TEX.warm, transparent: true, opacity: 0.35, depthWrite: false, blending: THREE.AdditiveBlending }));
  aura.scale.set(2.6, 2.6, 1); aura.position.y = 1.2; group.add(aura);

  const st = { moving: 0, air: false, flap: 0 };
  return {
    group, st,
    update(dt, t) {
      const sp = st.moving;
      st.flap += dt * (st.air ? 18 : 3 + sp * 2);
      wings.forEach(({ piv, side }) => { piv.rotation.y = side * (0.5 + Math.sin(st.flap) * (st.air ? 0.55 : 0.18)); });
      const sw = Math.sin(t * 9) * 0.6 * sp * (st.air ? 0.2 : 1);
      legL.rotation.x = sw; legR.rotation.x = -sw; armL.rotation.x = -sw * 0.8; armR.rotation.x = sw * 0.8;
      armL.rotation.z = st.air ? -0.5 : -0.12; armR.rotation.z = st.air ? 0.5 : 0.12;
      body.position.y = st.air ? Math.sin(t * 3) * 0.06 : Math.abs(Math.sin(t * 9)) * 0.04 * sp;
      body.rotation.x = st.air ? 0.25 * sp : 0;
    },
  };
}

function makeKirubel() {
  const group = new THREE.Group(), body = new THREE.Group(); group.add(body);
  const skin = new THREE.MeshStandardMaterial({ color: 0x9fb4d4, emissive: 0x1a3a5a, emissiveIntensity: 0.5, flatShading: true, roughness: 0.6 });
  const suit = std(0x2b3550); const trim = new THREE.MeshBasicMaterial({ color: 0x5ef0ff });
  const robe = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.3, 0.75, 8), suit); robe.position.y = 1.2;
  const hips = new THREE.Mesh(new THREE.CylinderGeometry(0.27, 0.25, 0.25, 8), suit); hips.position.y = 0.8;
  const belt = new THREE.Mesh(new THREE.TorusGeometry(0.27, 0.025, 4, 14), trim); belt.rotation.x = Math.PI / 2; belt.position.y = 0.9;
  const collar = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.025, 4, 12), trim); collar.rotation.x = Math.PI / 2; collar.position.y = 1.58;
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.19, 12, 10), skin); head.position.y = 1.78; head.scale.set(0.95, 1.08, 1);
  const hair = new THREE.Mesh(new THREE.SphereGeometry(0.195, 10, 8, 0, Math.PI * 2, 0, Math.PI / 2.2), std(0x101420)); hair.position.y = 1.8;
  body.add(robe, hips, belt, collar, head, hair);
  // pointed ears
  [-1, 1].forEach(s => { const ear = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.16, 4), skin); ear.position.set(0.19 * s, 1.82, 0); ear.rotation.z = -s * 1.1; body.add(ear); });
  // glowing eyes and markings
  [-0.065, 0.065].forEach(x => { const e = new THREE.Mesh(new THREE.SphereGeometry(0.025, 6, 6), trim); e.position.set(x, 1.8, 0.17); body.add(e); });
  [-1, 1].forEach(s => { const mk = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.09, 0.012), trim); mk.position.set(0.12 * s, 1.72, 0.14); mk.rotation.z = 0.3 * s; body.add(mk); });
  const legL = limb(0.72, 0.065, suit), legR = limb(0.72, 0.065, suit);
  legL.position.set(-0.12, 0.76, 0); legR.position.set(0.12, 0.76, 0); body.add(legL, legR);
  const armL = limb(0.62, 0.055, skin), armR = limb(0.62, 0.055, skin);
  armL.position.set(-0.3, 1.52, 0); armR.position.set(0.3, 1.52, 0); body.add(armL, armR);
  // small hand cross he saved from the crash
  const cross = new THREE.Group();
  const cg = new THREE.MeshStandardMaterial({ color: 0xe8c66a, metalness: 0.8, roughness: 0.3, emissive: 0x6a4a10, emissiveIntensity: 0.4 });
  const c1 = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.2, 0.03), cg), c2 = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.03, 0.03), cg);
  c2.position.y = 0.04; cross.add(c1, c2); cross.position.y = -0.66; cross.visible = false; armR.add(cross);
  // the gold star she gives him
  const goldStar = new THREE.Sprite(new THREE.SpriteMaterial({ map: TEX.warm, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
  goldStar.scale.set(0.12, 0.12, 1); goldStar.position.set(0.05, 1.93, 0.16); goldStar.visible = false; body.add(goldStar);
  const light = new THREE.PointLight(0x5ef0ff, 0.9, 5, 2); light.position.y = 1.4; group.add(light);

  const st = { pose: 'lying', t: 0, moving: 0 };
  const L = (a, b, k) => a + (b - a) * k;
  return {
    group, st, cross, goldStar,
    setPose(p) { st.pose = p; st.t = 0; cross.visible = (p === 'pray' || p === 'prayKneel'); },
    update(dt, t) {
      st.t += dt; const k = Math.min(1, dt * 4);
      let bx = 0, by = 0, lx = 0, rx = 0, alx = 0, arx = 0, alz = -0.08, arz = 0.08;
      switch (st.pose) {
        case 'lying': bx = -1.45; by = 0.25; alz = -0.6; arz = 0.4; lx = 0.1; break;
        case 'sit': by = -0.62; lx = -1.5; rx = -1.5; alx = -0.4; arx = -0.4; bx = -0.1; break;
        case 'walk': { const s = Math.sin(t * 8) * 0.6 * st.moving; lx = s; rx = -s; alx = -s; arx = s; break; }
        case 'work': arx = -1.3 + Math.sin(t * 7) * 0.5; alx = -0.6; bx = 0.25; break;
        case 'pace': { const s = Math.sin(t * 6) * 0.5; lx = s; rx = -s; alx = -0.2; arx = -0.2; break; }
        case 'pray': { // standing, right hand traces the cross, then bows
          const c = st.t % 8;
          if (c < 2.4) { arx = -1.9 + Math.sin(c * 5.2) * 0.25; arz = 0.3 - Math.cos(c * 2.6) * 0.35; }
          else if (c < 5.5) { bx = Math.sin((c - 2.4) / 3.1 * Math.PI) * 1.0; arx = -0.6; alx = -0.6; }
          else { arx = -1.2; alx = -0.2; }
          break;
        }
        case 'sleep': bx = -1.45; by = 0.25; alz = -0.3; arz = 0.3; break;
      }
      body.rotation.x = L(body.rotation.x, bx, k); body.position.y = L(body.position.y, by, k);
      legL.rotation.x = L(legL.rotation.x, lx, k); legR.rotation.x = L(legR.rotation.x, rx, k);
      armL.rotation.x = L(armL.rotation.x, alx, k); armR.rotation.x = L(armR.rotation.x, arx, k);
      armL.rotation.z = L(armL.rotation.z, alz, k); armR.rotation.z = L(armR.rotation.z, arz, k);
      if (st.pose === 'sleep' || st.pose === 'lying') body.position.y += Math.sin(t * 1.2) * 0.004;
    },
  };
}

function makeLumi() { // small glowing creature companion
  const group = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color: 0xbff6ff, emissive: 0x5ad8ff, emissiveIntensity: 1.1, flatShading: true });
  const b = new THREE.Mesh(new THREE.IcosahedronGeometry(0.2, 1), mat);
  [-1, 1].forEach(s => { const e = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.2, 4), mat); e.position.set(0.1 * s, 0.2, 0); e.rotation.z = -0.4 * s; b.add(e); });
  [-1, 1].forEach(s => { const e = new THREE.Mesh(new THREE.SphereGeometry(0.03, 5, 5), new THREE.MeshBasicMaterial({ color: 0x0a2a3a })); e.position.set(0.07 * s, 0.04, 0.17); b.add(e); });
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: TEX.cyan, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
  halo.scale.set(1.2, 1.2, 1);
  group.add(b, halo);
  const st = { target: new THREE.Vector3(), hop: 0 };
  return {
    group, st,
    update(dt, t) {
      group.position.lerp(st.target, Math.min(1, dt * 2));
      b.position.y = 0.25 + Math.abs(Math.sin(t * 3)) * 0.25; b.rotation.y = Math.sin(t) * 0.6;
      halo.position.y = b.position.y;
    },
  };
}

function makeSena() { // Kristi's best friend: tiny, like every other fairy
  const group = new THREE.Group();
  const s = 0.38;
  const dressM = std(0xff8ac6, { emissive: 0x6a1a4a, emissiveIntensity: 0.5 });
  const body = new THREE.Mesh(new THREE.ConeGeometry(0.4, 1, 8), dressM); body.position.y = 0.5;
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), std(0x6a4030)); head.position.y = 1.15;
  const hair = new THREE.Mesh(new THREE.SphereGeometry(0.22, 8, 6), std(0x2a1a10)); hair.position.set(0, 1.2, -0.05);
  group.add(body, head, hair);
  const wm = new THREE.MeshBasicMaterial({ color: 0xffd6f0, transparent: true, opacity: 0.6, side: THREE.DoubleSide, depthWrite: false });
  const wings = [-1, 1].map(sd => { const w = new THREE.Mesh(new THREE.CircleGeometry(0.45, 8), wm); w.position.set(0.3 * sd, 0.85, -0.15); w.scale.x = 0.6; group.add(w); return { w, sd }; });
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: TEX.glow, color: 0xff9ad6, transparent: true, opacity: 0.6, depthWrite: false, blending: THREE.AdditiveBlending }));
  halo.scale.set(2.2, 2.2, 1); halo.position.y = 0.8; group.add(halo);
  group.scale.setScalar(s);
  let baseY = null;
  return {
    group,
    update(dt, t) {
      if (baseY === null) baseY = group.position.y;
      wings.forEach(({ w, sd }) => { w.rotation.y = sd * (0.6 + Math.sin(t * 22) * 0.5); });
      group.position.y = baseY + Math.sin(t * 2.4) * 0.15;
    },
    rebase() { baseY = null; },
  };
}
