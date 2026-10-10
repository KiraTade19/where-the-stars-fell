import * as THREE from 'three';
import { FRAGMENT_LINES, FINAL_MESSAGE, SIGNATURE } from './personal.js';
import { saveState } from './state.js';
import { PLATFORMS, floorAt } from './world.js';
import { DAYS, QUESTIONS, SHIP_GOAL } from './days.js';

// The story engine. The prologue is scripted here; every day after that
// runs through the same rhythm, with its content coming from days.js.

let G, UI, W, S, D = null;
const K = 'Kristi', B = 'Kirubel', SE = 'Sena', L = 'Lumi', EL = 'Elder Thorne';
const SLOTS = 3, CALM_GOAL = 10, STEADY_GOAL = 6, PRAYERS_TO_KNEEL = 6;
const V = (x, y, z) => new THREE.Vector3(x, y, z);
const say = (n, t, o) => UI.say(n, t, o);
const narrate = (t, ms) => UI.narrate(t, ms);
const at = (p, dx, dy, dz) => V(p.x + dx, G.groundAt(p.x + dx, p.z + dz) + dy, p.z + dz);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

// camera beside two characters so both faces are visible (picks the side away from the wreck)
function twoShot(b = W.kirubel.group.position, speed = 1.4, dist = 3.4) {
  const a = G.P.pos, mx = (a.x + b.x) / 2, mz = (a.z + b.z) / 2;
  let dx = b.x - a.x, dz = b.z - a.z; const len = Math.hypot(dx, dz) || 1; dx /= len; dz /= len;
  const c1 = [mx - dz * dist, mz + dx * dist], c2 = [mx + dz * dist, mz - dx * dist];
  const far = (c) => Math.hypot(c[0] - G.SPOTS.crash.x, c[1] - G.SPOTS.crash.z);
  const c = far(c1) > far(c2) ? c1 : c2, y = Math.max(a.y, Math.min(b.y, a.y + 1.5));
  G.shot(V(c[0], Math.max(y, G.groundAt(c[0], c[1])) + 1.5, c[1]), V(mx, y + 1.05, mz), speed);
}

// the object every scene in days.js receives
function ctx(extra = {}) {
  return Object.assign({
    get S() { return S; }, get D() { return D; }, G, W, UI, A: G.A, SPOTS: G.SPOTS,
    V: (x, z) => new THREE.Vector3(x, 0, z), at, twoShot, say, narrate, choose: (o) => UI.choose(o),
    calmTest, addTask: (t) => startTask(t), done: (id) => !!(D && D.done[id]),
    get over() { return !!(D && D.over); }, get partsFound() { return D ? D.partsFound : 0; },
  }, extra);
}

// a moment that tests her patience: the second option is the calm one
async function calmTest(options, onBad, onGood, what) {
  const c = await UI.choose(options);
  if (c === 0) { S.calm -= 1; if (D) (D.reflect.calmDown = D.reflect.calmDown || []).push(what); if (onBad) await onBad(); return false; }
  S.calm += 1; if (D) (D.reflect.calmUp = D.reflect.calmUp || []).push(what); if (onGood) await onGood(); return true;
}

// ════════════════════ ENTRY ════════════════════
export async function runFrom(g, cp) {
  G = g; UI = g.UI; W = g.W; S = g.state;
  Object.assign(S, { joined: S.joined || 0, ship: S.ship || 0, trust: S.trust || 0, miraKind: S.miraKind || 0, questions: S.questions || [], snaps: S.snaps || {} });
  cp = ({ day1_morning: 'd1_morning', day1_day: 'd1_day', day1_end: 'd2_morning' })[cp] || cp; // saves from Phase 1
  applyWorld();
  if (cp === 'prologue') { await prologue(); cp = 'd1_morning'; }
  for (;;) {
    const m = /^d(\d+)_(morning|day)$/.exec(cp);
    if (m) {
      const n = +m[1];
      if (m[2] === 'morning') await morning(n);
      await dayPhase(n);
      if (n === 10) { cp = 'finale'; continue; }
      await evening(n);
      await nightPrayer(n);
      const r = await summary(n);
      if (r === 'replay') return replayFrom(n);
      cp = `d${n + 1}_morning`; continue;
    }
    if (cp === 'finale') { await finale(); cp = 'ending'; continue; }
    if (cp === 'ending') { await endingCard(); return; }
    return;
  }
}

function applyWorld() {
  W.setMoonDay(S.day || 0);
  if (S.flags.healed) healSapling(true);
  if (S.flags.lanterns) W.posts.forEach(p => p.userData.lit());
  if (S.flags.goldStar) W.kirubel.goldStar.visible = true;
  if (S.flags.bonfire) W.setBonfire(S.flags.bonfire);
  W.setRepair(S.ship / SHIP_GOAL);
}

function healSapling(instant) {
  const s = W.sapling, mat = s.userData.leafMat, to = new THREE.Color(0x4fa04a);
  if (instant) { mat.color.copy(to); s.userData.leaf.scale.set(1.35, 0.85, 1.35); return; }
  let t = 0; const from = mat.color.clone();
  const step = () => { t += 0.02; mat.color.copy(from).lerp(to, Math.min(1, t)); const sc = 1 + 0.35 * Math.min(1, t); s.userData.leaf.scale.set(sc, 0.6 + 0.25 * Math.min(1, t), sc); if (t < 1) requestAnimationFrame(step); };
  step();
}

function hideNPCs() { W.elder.group.visible = false; W.mira.group.visible = false; W.villagers.forEach(v => v.group.visible = false); W.sena.at(G.SPOTS.sena.x, G.SPOTS.sena.z); }

// ════════════════════ PROLOGUE: THE NIGHT IT FELL ════════════════════
async function prologue() {
  G.freeze(true);
  W.setTime(0.02); W.setSmoke(0); W.wreck.visible = false;
  W.kirubel.group.visible = false; W.lumi.group.visible = false;
  G.placePlayer(1.5, 2.5, Math.PI * 0.8);
  G.shotNow(V(6, 4.5, 14), V(-2, 2.5, -6));
  await UI.fade(false, 2200);
  await narrate('The Whispering Forest. A night like any other.', 3200);
  G.shot(V(-4, 3.5, 10), V(40, 16, -45), 0.8);
  await narrate('Until it wasn’t.', 2400);

  G.A.whoosh();
  const crashPos = at(G.SPOTS.crash, 0, 1, 0);
  await W.fallingStar(V(-60, 120, -230), crashPos, 3.2);
  G.A.crash(); G.shake(0.5);
  W.wreck.visible = true; W.setSmoke(1);
  await G.wait(1600);

  // Sena flutters over in a panic
  G.shot(V(-1, 2.6, 6.5), V(2, 1.4, 1.5), 1.6);
  W.sena.group.position.set(3, G.groundAt(3, 1.5) + 1.5, 1.5); W.sena.rebase();
  await G.wait(900);
  await say(SE, 'Kristi! Did you SEE that?! The Elder says lights that fall from the sky bring ruin!');
  await say(K, 'It didn’t look like ruin. It looked… lost.');
  await say(SE, 'You are not going out there. Kristi. KRISTI.');
  await say(K, 'I’ll be back before the fireflies sleep.');
  await say(SE, 'That’s what you said last time, and you came back at noon!');

  // free play: follow the light
  G.follow(); G.resetCam(); G.freeze(false);
  G.targets = [G.SPOTS.crash];
  UI.objective('Follow the light to where it fell');
  const touch = matchMedia('(pointer: coarse)').matches;
  UI.toast(touch ? 'Left thumb to move · hold ✦ to fly · drag on the right to look around' : 'WASD to move · hold Space to fly · drag to look · E to interact', 6500);
  W.kirubel.group.visible = true; W.kirubel.setPose('lying');
  G.place(W.kirubel, G.SPOTS.kirubel.x, G.SPOTS.kirubel.z, G.SPOTS.crash.x, G.SPOTS.crash.z);
  W.lumi.group.visible = true; W.lumi.group.position.copy(at(G.SPOTS.kirubel, 1, 0, 1));
  await G.reach(G.SPOTS.crash, 15);

  // the discovery
  G.freeze(true); G.targets = []; UI.objective(null);
  const kb = W.kirubel.group.position;
  G.placePlayer(kb.x - 2.6, kb.z + 1.6); G.faceKristi(kb);
  G.shot(at(kb, -4.5, 2.4, 4.5), at(kb, 0, 0.6, 0), 1.2);
  await narrate('Smoke. Silver metal. And beside it… someone.');
  await say(K, 'Oh… you’re hurt.');
  const c = await UI.choose(['Kneel beside him', 'Call out softly first']);
  if (c === 1) await say(K, 'Hello…? I won’t hurt you. I promise.');
  G.placePlayer(kb.x - 1.3, kb.z + 0.7); G.faceKristi(kb);
  W.kirubel.group.rotation.y = Math.atan2(-1.3, 0.7);
  await say(L, '*chirp!*', { sub: 'A small glowing creature peeks out from behind the wreck.' });
  await say(K, 'And who are you, little light?');
  twoShot();
  W.kirubel.setPose('sit');
  await say(B, 'ሰላም…', { sub: 'Selam — peace.' });
  await say(B, 'Where… where am I?');
  await say(K, 'The Whispering Forest. You fell out of the sky. Very loudly.');
  await say(B, 'My ship — I have to fix it. Now. Tonight —');
  W.kirubel.setPose('lying');
  await narrate('He tries to stand. He doesn’t get very far.', 2600);
  W.kirubel.setPose('sit');
  await say(K, 'Not tonight. You can barely sit up.');
  await say(B, 'You don’t understand, I can’t just —');
  await say(K, 'Rest first. Ship later. Those are the rules.');
  await say(B, '…Whose rules?');
  await say(K, 'Mine. I’m the nurse now.');

  // gather moonleaves for tea
  G.follow(); G.resetCam(); G.freeze(false);
  const leaves = G.SPOTS.leaves.map((p, i) => ({ p, item: W.makeItem('leaf', p), id: 'leaf' + i, got: false }));
  const updLeaves = () => {
    const n = leaves.filter(l => l.got).length;
    UI.objective('Make him moonleaf tea', [{ text: `Gather glowing moonleaves (${n}/3)`, done: n === 3 }, { text: 'Bring them back to him', done: false }]);
    G.targets = leaves.filter(l => !l.got).map(l => l.p);
  };
  updLeaves();
  await Promise.all(leaves.map(l => {
    G.addInteract(l.id, l.p, 'Pick');
    return G.waitInteract(l.id).then(() => { l.got = true; G.removeInteract(l.id); W.removeItem(l.item); G.A.chime(); updLeaves(); });
  }));
  G.targets = [kb];
  G.addInteract('tea', kb, 'Make tea');
  await G.waitInteract('tea'); G.removeInteract('tea');

  // tea and a blanket
  G.freeze(true); G.targets = []; UI.objective(null);
  G.placePlayer(kb.x - 1.2, kb.z + 0.8); G.faceKristi(kb);
  W.kirubel.group.rotation.y = Math.atan2(-1.2, 0.8);
  twoShot();
  await say(K, 'Moonleaf tea. Drink it slowly. Slowly! It’s not a race.');
  await say(B, 'Everything is a race when you’re stranded.');
  await narrate('She wraps a blanket of soft moss around his shoulders.', 2800);
  await say(K, 'There. Warm tea, the thickest blanket in the forest, and no getting up. Doctor’s orders.');
  await say(B, 'I thought you said nurse.');
  await say(K, 'I got promoted.');
  await say(B, '…You’re not afraid of me?');
  await say(K, 'Should I be?');
  await say(B, 'Your kind are. I saw them scatter into the trees. You came toward the smoke.');
  await say(K, 'I’ve never been very good at being like the others.');
  await narrate('She is taller than every fairy she has ever known. She always has been.', 3400);
  await say(B, 'I’m Kirubel.');
  await say(K, 'Kristi.');
  await say(B, 'I’m… not from around here.');
  await say(K, 'Yes. I noticed.');
  const g = await UI.choose(['Give him a gold star for following orders', 'Tell him to get some sleep']);
  S.bond += 1;
  if (g === 0) {
    W.kirubel.goldStar.visible = true; S.flags.goldStar = true; G.A.sparkle();
    await say(K, 'A gold star. For following orders. Don’t let it go to your head.');
    await say(B, 'I’ll wear it proudly.');
  } else {
    await say(K, 'Now sleep. Fairy’s orders.');
    await say(B, 'Is that higher than nurse?');
    await say(K, 'Much higher.');
  }
  await say(B, 'Kristi… which way is east?');
  await say(K, 'East? That way, where the sun comes up. Why?');
  await say(B, 'In the morning, you’ll see.');
  W.kirubel.setPose('sleep');
  await narrate('The fireflies go to sleep. So, finally, does he.', 3200);
  await UI.fade(true, 1600);
  S.day = 1; W.setMoonDay(1);
}



// ════════════════════ MORNING ════════════════════
const MORNING_OPTS = ['Wait quietly beside him', 'Slip away and start the day early', 'Kneel and pray with him'];
const NIGHT_OPTS = ['Sit beside him until he’s done', 'Go home and get some sleep', 'Kneel and pray with him'];
const canKneel = (n) => n >= 4 && S.waited >= 4;

async function prayerChoice(n, opts) {
  const list = canKneel(n) ? [opts[0], opts[1], opts[2]] : [opts[0], opts[1]];
  const c = await UI.choose(list);
  const pp = G.SPOTS.prayer;
  if (c === 0) { S.calm += 1; S.waited += 1; S.restless -= 2; }
  else if (c === 1) { S.restless -= 1; }
  else { S.calm += 2; S.waited += 1; S.joined += 1; S.restless -= 3; S.bond += 1; }
  if (c !== 1) G.placePlayer(pp.x - 1.1, pp.z + 1.3, Math.PI / 2);
  S.restless = clamp(S.restless, 0, 10);
  return c;
}

async function morning(n) {
  const day = DAYS[n];
  G.freeze(true); S.day = n; W.setMoonDay(n);
  const snap = JSON.parse(JSON.stringify(S)); delete snap.snaps; snap.checkpoint = `d${n}_morning`; S.snaps[n] = snap;
  if (n > 1) S.restless = clamp(S.restless + 3, 0, 10); // the moon is coming; he gets more anxious every day
  S.checkpoint = `d${n}_morning`; G.save();
  W.setStorm(0); W.wreck.visible = true; W.kirubel.group.visible = true; W.lumi.group.visible = true; hideNPCs();
  if (S.flags.bonfire) { S.flags.bonfire = 1; W.setBonfire(1); } // last night's fire has burned down
  G.P.energyMax = 100; G.P.drain = 1; G.P.energy = 100;
  const pp = G.SPOTS.prayer;
  G.place(W.kirubel, pp.x, pp.z, pp.x + 10, pp.z); W.kirubel.setPose('pray');
  G.placePlayer(pp.x - 3.2, pp.z + 2.4); G.faceKristi(pp);
  W.setTime(0.245);
  G.shotNow(at(pp, -7, 2.2, -3.5), at(pp, 10, 3, 0));
  await UI.fade(false, 1200);
  await UI.dayCard(day.title, day.sub);
  G.A.startPrayerMusic();
  if (day.intro) await narrate(day.intro, 3400);
  G.shot(at(pp, 4.5, 1.9, 3.5), at(pp, 0, 1.3, 0), 0.6);
  for (const [ge, en] of day.morning) await UI.prayerLine(ge, typeof en === 'function' ? en(ctx()) : en, ge ? 5000 : 4600);
  const c = await prayerChoice(n, MORNING_OPTS);
  S.flags.leftEarly = c === 1;
  if (c === 0) {
    G.shot(at(pp, -6, 2, 2), at(pp, 2, 1.4, 0), 0.5);
    await narrate(S.waited <= 1 ? 'She doesn’t know the words. She stays anyway.' : 'She stays beside him, quiet, while the sun comes up.', 3400);
  } else if (c === 2) {
    G.shot(at(pp, -6, 2, 2), at(pp, 2, 1.4, 0), 0.5);
    await narrate(S.joined <= 1 ? 'She kneels beside him. She doesn’t know the words, so he whispers them slowly, for her.' : 'She kneels beside him. She knows some of the words now.', 3800);
  } else {
    await narrate('She tiptoes away. There is so much to do.', 3000);
  }
  G.A.stopPrayerMusic();
  if (c === 1) { await UI.fade(true, 600); G.placePlayer(pp.x - 4, pp.z + 3); }
  W.kirubel.setPose('stand');
  const kb = W.kirubel.group.position;
  W.kirubel.group.rotation.y = Math.atan2(G.P.pos.x - kb.x, G.P.pos.z - kb.z); G.faceKristi(kb);
  twoShot(undefined, c === 1 ? 50 : 1.2);
  if (c === 1) await UI.fade(false, 600);
  await day.afterPrayer(ctx({ prayed: c !== 1, knelt: c === 2 }));
  if (day.hint) { await say(L, '*chirp!*'); await say(B, day.hint); }
  if (n === 2) await say(B, 'Oh — and the ship parts I can’t reach. If you see any glinting in the forest…');
  S.checkpoint = `d${n}_day`; G.save();
}

// ════════════════════ THE DAY ════════════════════
const fragSpot = (id) => {
  if (id === 'meadow') return V(G.SPOTS.meadow.x, 0, G.SPOTS.meadow.z + 1.9);
  if (id === 'ring') return V(G.SPOTS.ring.x, 0, G.SPOTS.ring.z);
  const p = PLATFORMS.find(q => q.id === id); return V(p.x, 0, p.z);
};

async function dayPhase(n) {
  const day = DAYS[n];
  G.freeze(true);
  W.setTime(0.29); W.setStorm(0);
  W.kirubel.group.visible = true; W.lumi.group.visible = true;
  const kp = G.SPOTS.kirubel;
  G.place(W.kirubel, kp.x, kp.z, G.SPOTS.crash.x, G.SPOTS.crash.z); W.kirubel.setPose('work');
  if (!G.near(kp, 25)) G.placePlayer(kp.x - 3, kp.z + 3);
  G.shotNow(at(kp, -4, 2.4, 5), at(kp, 0, 1, 0));
  await UI.fade(false, 600);

  const offered = day.tasks.filter(t => !t.needsCore || (S.flags.coreStolen && !S.flags.core)).map(t => t.needsCore ? Object.assign({}, t, { required: true }) : t);
  const chosen = await UI.planner(offered, SLOTS);
  D = { n, chosen, tasks: [], done: {}, partsFound: 0, over: chosen.length > SLOTS, sunset: false, busy: false, reflect: {}, ids: new Set(), items: [], lines: {}, pend: {}, kirubelSteps: [], ended: false };
  if (D.over) { G.P.energyMax = 55; G.P.drain = 1.4; G.P.energy = 55; await say(K, ['Four things. Easy. Probably.', 'I can do it all. I always can. …Mostly.', 'How hard can four things be?'][n % 3]); }
  else await say(K, chosen.length === 1 ? 'One thing. Done properly.' : 'Okay. One thing, then the next.');
  W.kirubel.setPose('work');

  offered.filter(t => chosen.includes(t.id)).forEach(t => startTask(t));
  if (day.fragment && !S.fragments.includes(n)) placeFragment(n, fragSpot(day.fragment));

  const kInt = G.addInteract('kirubelDay', kp, 'Talk', { radius: 3, onUse: () => kirubelChat() }); D.ids.add('kirubelDay'); D.kInt = kInt;
  tick();
  UI.plannerButton(true);
  document.getElementById('btnPlanner').onclick = () => UI.showPlan(D.lineList || []);

  const dur = (day.dayLength || 480) * (S.flags.leftEarly ? 1.2 : 1);
  G.dayClock = { running: true, elapsed: 0, dur, from: 0.29, to: 0.74, onEnd: () => { D.sunset = true; UI.toast('The sun is setting. Head back to Kirubel.', 4500); tick(); } };
  G.follow(); G.resetCam(); G.freeze(false);
  UI.toast(D.over ? 'Kristi took on too much. Her wings tire faster today.' : 'Tap ☀ to see your plan. Talk to Kirubel when you’re done.', 4500);

  // the day's story event fires part-way through the day
  if (day.event) {
    const poll = () => {
      if (D.ended) return;
      const f = G.dayClock.elapsed / G.dayClock.dur;
      if (!D.evFired && f >= day.event.at && !D.busy && !G.P.frozen) { D.evFired = true; runEvent(day.event); }
      requestAnimationFrame(poll);
    };
    poll();
  }

  await new Promise(res => { D.endDay = res; });
  D.ended = true; G.dayClock.running = false;
  D.ids.forEach(id => G.removeInteract(id)); D.items.forEach(it => W.removeItem(it));
  if (D.frag) { W.removeItem(D.frag); G.removeInteract('frag'); }
  W.warkaEyes(false); hideNPCs();
  UI.plannerButton(false); G.targets = []; UI.objective(null); UI.holdRing(null);
}

async function runEvent(ev) {
  D.busy = true; G.freeze(true);
  await ev.run(ctx());
  G.follow(); G.resetCam(); G.freeze(false); D.busy = false; tick();
}

function tick() {
  if (!D || D.ended) return;
  const list = D.tasks.map(t => ({ text: D.lines[t.id] || t.title, done: !!D.done[t.id] }));
  const all = D.tasks.every(t => D.done[t.id]);
  D.lineList = list;
  UI.objective(D.sunset ? 'The sun is setting — go back to Kirubel' : all ? 'All done! Go tell Kirubel' : 'Today', list);
  if (D.kInt) D.kInt.label = D.kirubelSteps.length ? D.kirubelSteps[0].step.label : 'Talk';
  const kp = W.kirubel.group.position;
  let tg = [];
  if (!D.sunset && !all) D.tasks.forEach(t => { if (!D.done[t.id] && D.pend[t.id]) tg.push(...D.pend[t.id]); });
  G.targets = tg.length ? tg : [kp];
}

function startTask(t) {
  D.tasks.push(t);
  (async () => {
    for (let i = 0; i < t.steps.length; i++) {
      if (D.ended) return;
      await runStep(t, t.steps[i], i);
    }
    if (D.ended) return;
    D.done[t.id] = true;
    if (t.trust) S.trust += t.trust;
    if (t.bond) S.bond += t.bond;
    if (t.mira) S.miraKind += t.mira;
    G.A.sparkle();
    tick();
  })();
  tick();
}

function npcFor(who) {
  if (who === 'sena') return W.sena; if (who === 'elder') return W.elder; if (who === 'mira') return W.mira;
  if (who && who.startsWith('villager')) return W.villagers[+who.slice(8)];
  return null;
}

function runStep(t, step, si) {
  const id = (k) => `${t.id}_${si}_${k}`;
  return new Promise(resolve => {
    const setLine = (s) => { D.lines[t.id] = s; tick(); };
    if (step.type === 'collect' || step.type === 'holds') {
      const N = step.at.length; let got = 0; const left = new Set(step.at.map((_, i) => i));
      const upd = () => { D.pend[t.id] = [...left].map(i => step.at[i]); setLine(step.text ? step.text(got, N) : `${t.title} (${got}/${N})`); };
      step.at.forEach((p, i) => {
        const item = step.noItem || step.type === 'holds' ? null : W.makeItem(step.kind, p);
        if (item) D.items.push(item);
        if (step.type === 'holds' && !item) { const st = W.makeItem('stack', p); D.items.push(st); step._stacks = step._stacks || []; step._stacks[i] = st; }
        D.ids.add(id(i));
        G.addInteract(id(i), p, step.label, { radius: step.radius || 2.6, hold: step.type === 'holds' ? step.secs : 0, onUse: () => {
          G.removeInteract(id(i)); if (item) W.removeItem(item); G.A.chime(); got++; left.delete(i);
          if (t.ship) { D.partsFound++; UI.toast(`Ship part ${got} of ${N}`); }
          if (step.effect === 'lantern') W.posts[i].userData.lit();
          if (step.effect === 'core') { S.flags.core = true; UI.toast('The star-core! Still glowing.'); }
          if (step.type === 'holds' && step._stacks) step._stacks[i].userData.core.material.color.setHex(0x6a8a5a);
          upd(); if (got === N) { setTimeout(tick, 0); if (step.effect === 'lantern') { S.flags.lanterns = true; UI.toast('The hollow glows. Sena is delighted.'); } delete D.pend[t.id]; resolve(); }
        } });
      });
      upd();
    } else if (step.type === 'hold') {
      D.pend[t.id] = [step.at]; tick(); setLine(step.text ? step.text() : t.title);
      D.ids.add(id(0));
      G.addInteract(id(0), step.at, step.label, { hold: step.secs, radius: 3, onUse: (it) => {
        G.A.sparkle();
        if (step.effect === 'sapling') { healSapling(false); S.flags.healed = true; }
        if (step.effect === 'bonfire') { W.setBonfire(1); S.flags.bonfire = Math.max(S.flags.bonfire || 0, 1); }
        if (!it.released) { S.calm += 1; (D.reflect.patient = D.reflect.patient || []).push(t.title); UI.toast('She didn’t rush it.'); }
        else UI.toast('It can’t be rushed… but it’s done.');
        delete D.pend[t.id]; resolve(); setTimeout(tick, 0);
      } });
    } else if (step.type === 'visit') {
      D.pend[t.id] = [step.at]; tick(); setLine(step.text ? step.text() : t.title);
      D.ids.add(id(0));
      G.addInteract(id(0), step.at, step.label, { onUse: () => { G.removeInteract(id(0)); G.A.chime(); delete D.pend[t.id]; resolve(); setTimeout(tick, 0); } });
    } else if (step.type === 'talk') {
      setLine(step.text ? step.text() : t.title);
      if (step.who === 'kirubel') { D.kirubelSteps.push({ step, resolve }); D.pend[t.id] = [W.kirubel.group.position]; tick(); return; }
      const npc = npcFor(step.who), p = step.at;
      if (npc) npc.at(p.x, p.z);
      D.pend[t.id] = [p]; tick();
      D.ids.add(id(0));
      G.addInteract(id(0), p, step.label, { radius: step.radius || 2.8, onUse: async () => {
        if (D.busy) return; D.busy = true;
        G.removeInteract(id(0)); G.freeze(true);
        if (step.who === 'warka') {
          W.warkaEyes(true);
          const wp = G.SPOTS.warka, dir = V(-wp.x, 0, -wp.z).normalize();
          G.shot(V(G.P.pos.x + dir.x * 3 + dir.z * 2, G.P.pos.y + 2.2, G.P.pos.z + dir.z * 3 - dir.x * 2), V(wp.x, G.groundAt(wp.x, wp.z) + 3.8, wp.z), 1.2);
        } else if (npc) { npc.group.rotation.y = Math.atan2(G.P.pos.x - npc.group.position.x, G.P.pos.z - npc.group.position.z); G.faceKristi(npc.group.position); twoShot(npc.group.position); }
        await step.scene(ctx());
        W.warkaEyes(false);
        G.follow(); G.freeze(false); D.busy = false; delete D.pend[t.id]; resolve(); setTimeout(tick, 0);
      } });
    }
  });
}

let fragCount = 0;
function placeFragment(n, p) {
  const item = W.makeItem('star', p); D.frag = item;
  G.addInteract('frag', p, 'Take the star', { radius: 2.4, y: floorAt(p.x, p.z, 99), onUse: async () => {
    G.removeInteract('frag'); W.removeItem(item); D.frag = null; G.A.sparkle();
    if (!S.fragments.includes(n)) S.fragments.push(n); G.save();
    G.freeze(true); D.busy = true;
    await UI.fragmentCard(n, FRAGMENT_LINES[n - 1]);
    G.freeze(false); D.busy = false; tick();
  } });
  fragCount++;
}

async function kirubelChat() {
  if (D.busy) return; D.busy = true;
  G.freeze(true);
  const kb = W.kirubel.group.position;
  W.kirubel.setPose('stand'); W.kirubel.group.rotation.y = Math.atan2(G.P.pos.x - kb.x, G.P.pos.z - kb.z);
  G.faceKristi(kb); twoShot();
  if (D.kirubelSteps.length) {
    const { step, resolve } = D.kirubelSteps.shift();
    await step.scene(ctx()); resolve();
    W.kirubel.setPose('work'); G.follow(); G.freeze(false); D.busy = false; tick(); return;
  }
  const ev = DAYS[D.n].event;
  if (ev && !D.evFired) { // the day's story event always happens before the day can end
    D.evFired = true;
    await ev.run(ctx());
    W.kirubel.setPose('work'); G.follow(); G.resetCam(); G.freeze(false); D.busy = false; tick(); return;
  }
  const all = D.tasks.every(t => D.done[t.id]);
  if (D.sunset || all) {
    await say(B, all ? 'You’re back. And you look like someone who finished something.' : 'The sun’s going down. Come sit.');
    D.busy = false; D.endDay(); return;
  }
  const lines = ['Still working on it?', 'Lumi says you flew past three times.', 'You don’t have to do everything before sunset, you know.', 'Did you eat? Fairies eat, right?', 'One thing, then the next.'];
  await say(B, lines[Math.floor(Math.random() * lines.length)]);
  const c = await UI.choose(['Keep going', 'Call it a day']);
  if (c === 1) { await say(B, 'Then sit. The rest will still be there tomorrow.'); D.busy = false; D.endDay(); return; }
  W.kirubel.setPose('work'); G.follow(); G.freeze(false); D.busy = false;
}

// ════════════════════ EVENING ════════════════════
const RUSHED = ['I tried to rush the hull today. Bent a bracket. Two hours of work, undone.', 'I couldn’t sit still. I forced a panel and it cracked.', 'I worked too fast again. Something always breaks when I do.'];
const STEADY = ['I worked slowly today. Everything I touched, held.', 'Slow and steady. The hull is starting to look like a hull.', 'Good day. Nothing broke. Not even me.'];

async function stageAtCamp() {
  const kb = W.kirubel.group.position;
  G.placePlayer(kb.x - 1.6, kb.z + 1.4); G.faceKristi(kb);
  W.kirubel.setPose('sit'); W.kirubel.group.rotation.y = Math.atan2(-1.6, 1.4);
  twoShot(undefined, 30);
}

async function evening(n) {
  const day = DAYS[n];
  G.freeze(true);
  W.setTime(0.76);
  const kp = G.SPOTS.kirubel; G.place(W.kirubel, kp.x, kp.z);
  await stageAtCamp();
  const real = D.tasks.filter(t => !t.urgent);
  const done = real.filter(t => D.done[t.id]).length, unfinished = real.length - done;
  S.steadiness += done - unfinished;
  D.reflect.done = done; D.reflect.unfinished = unfinished;

  // ship parts
  const shipTask = real.find(t => t.ship);
  const cracked = shipTask && shipTask.cracked && D.partsFound === 2;
  const gain = D.partsFound - (cracked ? 1 : 0);
  S.ship += gain; D.reflect.parts = gain;
  if (shipTask && D.partsFound > 0 && !cracked) await say(B, gain >= 2 ? 'Two more pieces. It’s starting to look like a ship again.' : 'One more piece. One step closer.');
  else if (!shipTask && n < 10) await say(B, ['No ship parts today. That’s alright. The ship isn’t going anywhere. Neither am I, apparently.', 'No parts today. Lumi and I polished what we have. Very shiny.', 'No new parts. The moon won’t wait forever, but tonight it can.'][n % 3]);

  // his restlessness, shaped by prayer
  if (S.restless >= 6) {
    S.ship = Math.max(0, S.ship - 1); D.reflect.rushed = true;
    await say(B, RUSHED[n % 3]);
    await narrate('He doesn’t sit still for long. He keeps getting up. He keeps pacing.', 3000);
  } else await say(B, STEADY[n % 3]);

  // her day
  if (unfinished) {
    await say(K, D.over ? 'I tried to do everything. I did half of it. Badly.' : 'I didn’t finish everything I planned.');
    const c = await UI.choose(['It’s fine. I’ll just do it all tomorrow.', 'Tomorrow I’ll pick less. And finish it.']);
    if (c === 0) { S.steadiness -= 1; D.reflect.plan = 'all'; await say(B, 'Isn’t that what you said about today?'); await say(K, '…Maybe.'); }
    else { S.steadiness += 1; D.reflect.plan = 'less'; await say(B, 'One thing. Then the next.'); await say(K, 'Don’t look so pleased with yourself.'); }
  } else if (done) {
    await say(K, ['I did everything I planned. Everything!', 'Done. All of it. Without running on empty.', 'Every single thing. I’m almost proud of myself.'][n % 3]);
    await say(B, ['Then tonight, you rest. Fairy’s orders.', 'Gold star.', 'Almost? Be proud, Kristi.'][n % 3]);
  }

  if (day.evening) {
    if (day.eveningAtFire || day.eveningAway) await UI.fade(true, 700);
    await day.evening(ctx());
  }
  if (day.question !== undefined) await askQuestion(day.question);
  W.setRepair(S.ship / SHIP_GOAL);
}

async function askQuestion(qi) {
  const kb = W.kirubel.group.position;
  if (Math.hypot(kb.x - G.P.pos.x, kb.z - G.P.pos.z) > 6) {
    await UI.fade(true, 600); W.setTime(0.8);
    const kp = G.SPOTS.kirubel; G.place(W.kirubel, kp.x, kp.z); await stageAtCamp(); await UI.fade(false, 600);
  }
  if (S.questions.length === 0) {
    await say(B, 'Let’s play a game. Each night you can ask me one question. Anything.');
    await say(B, 'But I can only answer yes, no, or… “you’ll have to find out.”');
    await say(K, 'That’s a terrible game.');
    await say(B, 'Seven questions. One for every night we have left before the moon gets too full to think. Choose wisely.');
  } else await say(K, `Question number ${S.questions.length + 1}.`);
  const opts = QUESTIONS[qi];
  const c = await UI.choose(opts.map(o => o.q));
  S.questions.push(qi * 10 + c);
  for (const a of opts[c].a) await say(B, a);
  if (S.questions.length === 7) await say(K, 'That was seven.', { sub: 'She is already thinking of an eighth.' });
}

// ════════════════════ NIGHT PRAYER ════════════════════
async function nightPrayer(n) {
  const day = DAYS[n];
  await UI.fade(true, 900);
  W.setTime(0.86); W.setStorm(n === 7 ? 0.3 : 0); hideNPCs();
  const pp = G.SPOTS.prayer;
  G.place(W.kirubel, pp.x, pp.z, pp.x + 10, pp.z); W.kirubel.setPose('stand');
  G.placePlayer(pp.x - 2.4, pp.z + 2.2); G.faceKristi(pp);
  G.shotNow(at(pp, -4.5, 1.8, 4), at(pp, 0, 1.2, 0));
  await UI.fade(false, 900);
  W.kirubel.group.rotation.y = Math.atan2(-2.4, 2.2);
  if (n === 1 || n % 3 === 0) await say(B, 'ሰላም ለኪ, Kristi.', { sub: 'Selam leki — peace be with you.' });
  if (S.flags.word && n >= 8) await say(K, S.flags.word + ', Kirubel.', { sub: 'She says it carefully. He smiles like she gave him something.' });
  W.kirubel.group.rotation.y = Math.PI / 2; W.kirubel.setPose('pray');
  G.A.startPrayerMusic();
  G.shot(at(pp, 3.5, 1.7, 3), at(pp, 0, 1.2, 0), 0.5);
  await UI.prayerLine(...[DAYS[1].morning[0][0], DAYS[1].morning[0][1]], 4600);
  for (const [ge, en] of (day.night || [])) await UI.prayerLine(ge, typeof en === 'function' ? en(ctx()) : en, 4400);
  const c = await prayerChoice(n, NIGHT_OPTS);
  D.reflect.night = c;
  if (c === 0) await narrate(['She sits in the grass beside him. The stars come out one by one, as if they were listening too.', 'She sits beside him until the last word.', 'She stays. She is getting good at staying.'][n % 3], 3800);
  else if (c === 2) await narrate(['She kneels beside him. Two voices, one very quiet prayer.', 'Side by side, in the dark, facing east.', 'He says the words. She says the ones she knows.'][n % 3], 3800);
  else await narrate('From her window, she can still see the glow of his little camp.', 3200);
  G.A.stopPrayerMusic();
  W.kirubel.setPose('sleep');
  G.dayClock = null;
}

// ════════════════════ END OF DAY ════════════════════
async function summary(n) {
  const R = D.reflect, li = [];
  if (!R.unfinished) li.push(['☀', D.over ? 'Kristi fit everything in. Barely. Her wings are exhausted.' : R.done ? 'Kristi finished everything she planned.' : 'Kristi spent the day wandering.']);
  else if (D.over) li.push(['☀', 'Kristi tried to fit everything in, and ran herself thin.']);
  else li.push(['☀', 'Kristi left a few things unfinished.']);
  if (R.plan === 'less') li.push(['✦', 'Tomorrow, she’ll choose more carefully.']);
  if (R.plan === 'all') li.push(['✦', 'Tomorrow is already looking crowded.']);
  (R.calmUp || []).forEach(w => li.push(['❁', `When things went wrong — ${w} — she stayed calm.`]));
  (R.calmDown || []).forEach(w => li.push(['❁', `${w[0].toUpperCase() + w.slice(1)} got to her. Patience is still a work in progress.`]));
  if (R.spell === 'gentle') li.push(['✦', 'Her Sleep Focus Spell worked perfectly.']);
  li.push(['✝', R.night === 1 ? 'She went home before his prayer ended tonight.' : R.night === 2 ? 'She knelt and prayed with him tonight.' : 'She stayed beside him for his prayer.']);
  li.push(['☾', S.restless <= 3 ? 'Kirubel is at peace tonight.' : S.restless <= 6 ? 'Kirubel is restless, but holding on.' : 'Kirubel can barely sit still. The moon is getting closer.']);
  li.push(['⚙', `Kirubel’s ship: ${Math.min(S.ship, SHIP_GOAL)} of ${SHIP_GOAL} parts${R.rushed ? ' (he rushed, and broke one)' : ''}.`]);
  if (S.flags.coreStolen) li.push(['◈', S.flags.core ? 'The star-core is safe.' : 'The star-core is still missing.']);
  li.push(['✦', `Star fragments: ${S.fragments.length} of 10`]);
  li.push(['○', n === 9 ? 'Tomorrow, the moon is full.' : `The moon grows. ${10 - n} ${10 - n === 1 ? 'night remains' : 'nights remain'}.`]);
  S.checkpoint = `d${n + 1}_morning`; S.day = n; G.save();
  const pick = await UI.card(`<h2>Day ${n} complete</h2><h3>How the day went</h3><ul class="reflect">${li.map(([i, t]) => `<li><i>${i}</i>${t}</li>`).join('')}</ul>`, [`Continue to Day ${n + 1}`, `Replay Day ${n}`]);
  if (pick === 1) return 'replay';
  await UI.fade(true, 900);
  return 'next';
}

function replayFrom(n) {
  const snap = S.snaps[n]; if (!snap) return;
  const copy = JSON.parse(JSON.stringify(snap)); copy.snaps = S.snaps; copy.checkpoint = `d${n}_morning`;
  saveState(copy);
  location.href = location.pathname + '?autostart=continue';
}

// ════════════════════ THE FULL MOON ════════════════════
async function animate(dur, fn) { return new Promise(res => { const t0 = performance.now(); const st = () => { const k = Math.min(1, (performance.now() - t0) / dur); fn(k); if (k < 1) requestAnimationFrame(st); else res(); }; st(); }); }

async function finale() {
  G.freeze(true);
  S.checkpoint = 'finale'; S.day = 10; G.save();
  await UI.fade(true, 800);
  W.setTime(0.85); W.setMoonDay(12); W.setStorm(0); W.setRepair(Math.min(1, S.ship / SHIP_GOAL));
  const kp = G.SPOTS.kirubel, cr = G.SPOTS.crash;
  G.place(W.kirubel, cr.x - 3.4, cr.z + 2.6, cr.x, cr.z); W.kirubel.setPose('stand');
  G.placePlayer(cr.x - 5.4, cr.z + 4.4); G.faceKristi(W.kirubel.group.position);
  W.sena.at(cr.x - 7, cr.z + 6.5, cr.x, cr.z);
  const crowd = S.trust >= 3;
  if (crowd) { W.villagers.forEach((v, i) => v.at(cr.x - 9 + i * 1.6, cr.z + 8 - i, cr.x, cr.z)); W.elder.at(cr.x - 4, cr.z + 8.5, cr.x, cr.z); }
  if (S.miraKind >= 2) W.mira.at(cr.x - 10.5, cr.z + 5, cr.x, cr.z);
  G.shotNow(at(cr, -16, 6, 14), at(cr, 0, 6, 0));
  await UI.fade(false, 1500);
  await UI.dayCard('The Full Moon', 'Night ten.');
  await narrate('The full moon rises over the forest. It is enormous. It fills half the sky.', 3600);
  W.skyPath(0.55); G.A.whoosh();
  G.shot(at(cr, -14, 3, 12), at(cr, 0, 14, 0), 0.6);
  await narrate('And above the crash site, exactly as the Elder said, the sky opens.', 3600);
  if (crowd) await narrate('Behind them, lanterns. The Elder, the whole village. Even the fairies who were afraid came to watch.', 3800);
  else await narrate('Sena is there, hiding behind a fern, pretending she isn’t crying already.', 3400);
  twoShot(undefined, 1);
  await say(B, 'Now or never.');
  G.shot(at(cr, -9, 3.5, 7), at(cr, 0, 1.5, 0), 0.8);
  G.A.crash(); G.shake(0.25);
  await animate(2200, k => W.setLift(Math.sin(k * Math.PI) * 1.2));
  W.setLift(0);
  const reason = !S.flags.core ? 'core' : S.ship < SHIP_GOAL ? 'hull' : 'spark';
  await narrate('The engine coughs. The light flickers. The ship drops back into the crater.', 3400);
  twoShot(undefined, 1.2);
  await say(B, reason === 'core' ? 'The core. Without the star-core there’s nothing to light. Kristi, there’s nothing—' : reason === 'hull' ? 'The hull — there are too many gaps. It won’t hold. Not enough parts, not enough time—' : 'It won’t catch. Something’s missing. One spark. One piece. I don’t know what!');
  const c = await UI.choose(['NO! Not now — not after everything!', '…Breathe. One thing, then the next.']);
  let finalCalm = c === 1 && S.calm >= CALM_GOAL;
  if (c === 0) { S.calm -= 1; await narrate('She shouts at the ship, at the moon, at the whole sky. Nothing listens.', 3400); }
  else if (!finalCalm) await narrate('She tries to breathe. Her hands won’t stop shaking. Ten days of patience, and it isn’t quite enough.', 3800);
  else {
    await narrate('She breathes. Once. Twice. And in the quiet, she hears Lumi chirp — pointing up.', 3600);
    G.A.sparkle();
    await W.fallingStar(at(cr, -30, 60, -40), at(G.P.pos, 0, 1.2, 0), 2.6);
    G.A.chime();
    await narrate('The last star fragment falls, slow as a feather, straight into her hands.', 3400);
    if (!S.fragments.includes(10)) S.fragments.push(10);
    await UI.fragmentCard(10, FRAGMENT_LINES[9]);
  }

  // the last prayer
  W.kirubel.group.rotation.y = Math.PI / 2; W.kirubel.setPose('pray');
  G.A.startPrayerMusic();
  G.shot(at(W.kirubel.group.position, 3, 1.8, 3), at(W.kirubel.group.position, 0, 1.2, 0), 0.6);
  await narrate('He does the only thing left to do. He turns east, and he prays.', 3400);
  const kneelOK = S.waited >= PRAYERS_TO_KNEEL;
  let joined = false;
  if (kneelOK) {
    const k = await UI.choose(['Kneel and pray with him', 'Watch from a step away']);
    joined = k === 0;
    if (joined) { G.placePlayer(W.kirubel.group.position.x - 1, W.kirubel.group.position.z + 1.1, Math.PI / 2); await narrate('She kneels beside him. She knows the words now. Two voices, one prayer.', 3600); await UI.prayerLine(DAYS[1].morning[0][0], DAYS[1].morning[0][1], 4200); await UI.prayerLine('', 'Amen.', 2600); }
    else await narrate('She stays a step away and watches. It feels like the right thing. It isn’t.', 3400);
  } else {
    await narrate('She wants to kneel beside him. But she doesn’t know the words. She never stayed long enough to learn them.', 4200);
  }
  G.A.stopPrayerMusic();

  const happy = finalCalm && joined && S.ship >= SHIP_GOAL && S.flags.core && S.steadiness >= STEADY_GOAL;
  S.endingWhy = { calm: finalCalm, prayed: joined, ship: S.ship >= SHIP_GOAL, core: !!S.flags.core, steady: S.steadiness >= STEADY_GOAL };
  if (happy) await happyEnding(crowd); else await sadEnding(crowd);
}

async function happyEnding(crowd) {
  const cr = G.SPOTS.crash;
  W.kirubel.setPose('stand');
  await narrate('The star fragment in her hands begins to glow. Brighter. Brighter.', 3200);
  G.A.sparkle(); G.shake(0.2); W.skyPath(0.95);
  await animate(2500, k => W.setLift(k * 1.6));
  G.shot(at(cr, -10, 3, 9), at(cr, 0, 2, 0), 0.8);
  await narrate('The ship lifts out of the crater — and this time, it holds.', 3200);
  twoShot(undefined, 1);
  await say(B, 'It’s working. Kristi — it’s working!');
  await say(B, 'The path is open. I can go home.');
  const opts = S.flags.elderBlessing ? ['Go with him', 'Ask him to stay'] : ['Go with him'];
  if (!S.flags.elderBlessing) await narrate('The Elder’s words echo: through the path, or the forest decides for him. Staying is not a choice the forest will allow.', 4000);
  const c = await UI.choose(opts);
  if (c === 0) {
    S.ending = 'happy_go';
    await say(B, S.flags.saidYes ? 'You said yes, under the old tree. I didn’t dare believe it.' : 'You told me I’d have to find out.');
    await say(K, 'Now you know.');
    await say(SE, 'You’d BETTER bring her back to visit!', { sub: 'Sena, sobbing openly.' });
    await say(B, 'Every full moon. I promise.');
    await narrate('She takes his hand. Her wings catch the light of the sky-path.', 3200);
    G.shot(at(cr, -26, 8, 22), at(cr, 0, 20, 0), 0.5);
    G.P.frozenFly = true;
    await animate(6000, k => { const h = 1.6 + k * k * 70, gy = G.groundAt(cr.x, cr.z);
      W.setLift(h); G.P.pos.set(cr.x - 0.8, gy + h + 1.4, cr.z + 0.8); G.P.vel.set(0, 0, 0);
      W.kirubel.group.position.set(cr.x + 0.8, gy + h + 1.4, cr.z + 0.8); });
    G.P.frozenFly = false;
    await narrate('Up the path of light they go, past the treetops, past the clouds, toward the moon.', 3800);
  } else {
    S.ending = 'happy_stay';
    await say(K, 'Stay. Our forest needs you here.');
    await say(K, 'We’ll destroy your spaceship if necessary.');
    await say(B, 'Please don’t. I just fixed it.');
    await narrate('The engine hums. The path waits. He looks at the sky for a long time.', 3400);
    await say(B, 'Some people show up exactly when you need them. I’m not leaving mine.');
    await animate(2500, k => W.setLift(1.6 * (1 - k)));
    W.skyPath(0);
    await say(EL, 'Then the forest has one more fairy. A very tall, very strange, very blue one.');
    await say(SE, 'I KNEW IT. I knew it from the first night!');
    await narrate('One by one, the lanterns rise into the sky where the path used to be.', 3400);
  }
  G.A.startPrayerMusic();
  const lines = FRAGMENT_LINES.map((l, i) => S.fragments.includes(i + 1) ? l : null);
  await UI.fade(true, 1200);
  await UI.constellation(lines, FINAL_MESSAGE, SIGNATURE);
  G.A.stopPrayerMusic();
  S.checkpoint = 'ending'; G.save();
}

async function sadEnding(crowd) {
  const cr = G.SPOTS.crash;
  W.kirubel.setPose('stand');
  S.ending = 'sad';
  await narrate('The path above them begins to flicker.', 2800);
  if (crowd) await say(EL, 'The path is closing! Sky-thing, it is now or never!');
  else await narrate('Somewhere in the dark, the forest itself begins to stir. It has made its promise. It will keep it.', 3600);
  twoShot(undefined, 1);
  await say(B, 'Kristi. Look at me.');
  await say(B, 'If I don’t go now, I never will. The forest won’t let me stay.');
  await say(K, 'But the ship —');
  await say(B, 'The path will carry me. Maybe not gently. But it will.');
  await say(B, 'It was worth it. All ten days. Every single one.');
  await say(B, 'ሰላም ለኪ, Kristi.', { sub: 'Peace be with you.' });
  G.shot(at(cr, -18, 4, 16), at(cr, 0, 10, 0), 0.6);
  W.skyPath(0.9); G.shake(0.3); G.A.crash();
  await animate(2000, k => W.setLift(k * 3));
  G.A.whoosh();
  W.wreck.visible = false; W.kirubel.group.visible = false; W.lumi.group.visible = false;
  await W.fallingStar(at(cr, 0, 3, 0), V(-60, 160, -260), 3.4);
  W.skyPath(0); W.setLift(0);
  twoShot(G.SPOTS.prayer, 0.6);
  await narrate('The light goes up, the way it came down. And then the sky is just the sky again.', 4000);
  await narrate('Some stars only fall once.', 3400);
  S.checkpoint = 'ending'; G.save();
}

async function endingCard() {
  G.freeze(true);
  const happy = (S.ending || '').startsWith('happy');
  const why = S.endingWhy || {};
  const missing = [];
  if (!why.calm) missing.push('stay calm when everything breaks');
  if (!why.prayed) missing.push('stay for more of his prayers — enough to kneel beside him at the end');
  if (!why.ship) missing.push(`help him find more ship parts (${SHIP_GOAL} needed)`);
  if (!why.core) missing.push('find the stolen star-core (or be kind to Mira)');
  if (!why.steady) missing.push('finish the tasks she picks each day (choosing fewer helps)');
  const html = happy
    ? `<div style="text-align:center"><h2>Where the Stars Fell</h2><h3>${S.ending === 'happy_stay' ? 'He stayed.' : 'They went together.'}</h3>
       <p>Star fragments found: ${S.fragments.length} of 10</p><p style="font-family:var(--serif);font-style:italic;font-size:20px;margin-top:14px">For Kristi.</p></div>`
    : `<div style="text-align:center"><h2>The End</h2><h3>…but not the only one.</h3></div>
       <p>There is another ending. To reach it, Kristi might need to:</p><ul class="reflect">${missing.map(m => `<li><i>✦</i>${m}</li>`).join('')}</ul>
       <p>Star fragments found: ${S.fragments.length} of 10</p>`;
  const btns = happy ? ['Play again', 'See the other choices (from Day 8)'] : ['Try again from Day 8', 'Start over'];
  const pick = await UI.card(html, btns);
  if ((happy && pick === 1) || (!happy && pick === 0)) return replayFrom(8);
  try { localStorage.removeItem('wtsf.save.v1'); } catch (e) { /* ignore */ }
  location.href = location.pathname;
}
