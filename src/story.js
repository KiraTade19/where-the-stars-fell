import * as THREE from 'three';
import { FRAGMENT_LINES } from './personal.js';
import { saveState } from './state.js';

// Story for Phase 1: the crash night and Day 1.
// Every scene is an async function, so it reads top to bottom like a script.

let G, UI, W, S;
const K = 'Kristi', B = 'Kirubel', SE = 'Sena', L = 'Lumi';
const V = (x, y, z) => new THREE.Vector3(x, y, z);
const say = (n, t, o) => UI.say(n, t, o);
const narrate = (t, ms) => UI.narrate(t, ms);
const at = (p, dx, dy, dz) => V(p.x + dx, G.groundAt(p.x + dx, p.z + dz) + dy, p.z + dz);


// camera beside two characters so both faces are visible (picks the side away from the wreck)
function twoShot(b = W.kirubel.group.position, speed = 1.4, dist = 3.4) {
  const a = G.P.pos, mx = (a.x + b.x) / 2, mz = (a.z + b.z) / 2;
  let dx = b.x - a.x, dz = b.z - a.z; const L = Math.hypot(dx, dz) || 1; dx /= L; dz /= L;
  const c1 = [mx - dz * dist, mz + dx * dist], c2 = [mx + dz * dist, mz - dx * dist];
  const far = (c) => Math.hypot(c[0] - G.SPOTS.crash.x, c[1] - G.SPOTS.crash.z);
  const c = far(c1) > far(c2) ? c1 : c2, y = Math.max(a.y, b.y);
  G.shot(V(c[0], Math.max(y, G.groundAt(c[0], c[1])) + 1.5, c[1]), V(mx, y + 1.05, mz), speed);
}

export async function runFrom(g, cp) {
  G = g; UI = g.UI; W = g.W; S = g.state;
  W.setMoonDay(S.day);
  applyFlags();
  if (cp === 'prologue') { await prologue(); cp = 'day1_morning'; }
  if (cp === 'day1_morning') { await day1Morning(); cp = 'day1_day'; }
  if (cp === 'day1_day') { await day1Day(); await day1Evening(); cp = 'day1_end'; }
  if (cp === 'day1_end') await endOfDay1();
}

function applyFlags() {
  if (S.flags.healed) healSapling(true);
  if (S.flags.lanterns) W.posts.forEach(p => p.userData.lit());
  if (S.flags.goldStar) W.kirubel.goldStar.visible = true;
}

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

// ════════════════════ DAY 1: MORNING PRAYER ════════════════════
async function day1Morning() {
  G.freeze(true);
  S.day = 1; W.setMoonDay(1);
  if (!S.snapshot) { const copy = JSON.parse(JSON.stringify(S)); copy.checkpoint = 'day1_morning'; S.snapshot = copy; }
  S.checkpoint = 'day1_morning'; G.save();
  W.wreck.visible = true; W.setSmoke(0.6);
  W.kirubel.group.visible = true; W.lumi.group.visible = true;
  const pp = G.SPOTS.prayer;
  G.place(W.kirubel, pp.x, pp.z, pp.x + 10, pp.z);
  W.kirubel.setPose('pray');
  G.placePlayer(pp.x - 3.2, pp.z + 2.4); G.faceKristi(pp);
  W.setTime(0.245);
  G.shotNow(at(pp, -7, 2.2, -3.5), at(pp, 10, 3, 0));
  await UI.fade(false, 1200);
  await UI.dayCard('Day 1', 'The full moon rises in ten days.');

  G.A.startPrayerMusic();
  await narrate('Kristi wakes to find him already standing, facing the sunrise.', 3400);
  G.shot(at(pp, 4.5, 1.9, 3.5), at(pp, 0, 1.3, 0), 0.6);
  await UI.prayerLine('በስመ አብ ወወልድ ወመንፈስ ቅዱስ', 'In the name of the Father, the Son and the Holy Spirit.', 5200);
  await UI.prayerLine('እግዚአብሔር ይመስገን', 'Egziabher yimesgen — God be praised.', 4800);
  await UI.prayerLine('', 'For this morning. For this forest. And for the one who wasn’t afraid.', 5200);

  const ch = await UI.choose(['Wait quietly beside him', 'Slip away and start the day early']);
  if (ch === 0) {
    S.calm += 1; S.waited += 1; S.restless -= 2; S.flags.leftEarly = false;
    G.placePlayer(pp.x - 1.1, pp.z + 1.3, Math.PI / 2); W.kristi.group.rotation.y = Math.PI / 2;
    G.shot(at(pp, -6, 2, 2), at(pp, 2, 1.4, 0), 0.5);
    await narrate('She doesn’t know the words. She stays anyway.', 3400);
    await narrate('The forest goes very quiet.', 2800);
    G.A.stopPrayerMusic(); W.kirubel.setPose('stand');
    W.kirubel.group.rotation.y = Math.atan2(-1.1, 1.3);
    twoShot();
    await say(B, 'You stayed.');
    await say(K, 'You looked… peaceful. I’ve never seen you peaceful.');
    await say(B, 'You’ve known me for one night.');
    await say(K, 'Exactly. And that’s the first time.');
  } else {
    S.restless -= 1; S.flags.leftEarly = true;
    await narrate('She tiptoes away. There is so much to do.', 3000);
    G.A.stopPrayerMusic();
    await UI.fade(true, 700);
    W.kirubel.setPose('stand');
    G.placePlayer(pp.x - 4, pp.z + 3); G.faceKristi(pp);
    W.kirubel.group.rotation.y = Math.atan2(-4, 3);
    twoShot(undefined, 50);
    await UI.fade(false, 700);
    await say(B, 'You left early.');
    await say(K, 'I had things to do!');
    await say(B, 'Before the sun was even up?');
  }
  await say(B, 'Every morning starts like this for me. Before anything else.');
  await say(K, 'Before anything else? I have a hundred things to do today.');
  await say(B, 'Then do one. Then the next one.');
  await say(K, 'That is not how it works.');
  await say(B, 'Where I come from, it’s the only way it works.');
  await say(L, '*chirp chirp!*');
  await say(B, 'This is Lumi. She came with me. Or I came with her — I’m never sure.');
  await say(B, 'She keeps staring at that tall rock to the southwest. Something up there is glowing.');
  await say(K, 'Fine. Let me plan my day.');
  S.checkpoint = 'day1_day'; G.save();
}

// ════════════════════ DAY 1: THE DAY ════════════════════
const TASKS = [
  { id: 'parts', title: 'Look for ship parts', desc: 'Two pieces of his ship were thrown deep into the forest.' },
  { id: 'heal', title: 'Heal the fading sapling', desc: 'A young Warka tree to the west is losing its colour. Grandmother Warka asked you to tend it.' },
  { id: 'petals', title: 'Gather moonpetals', desc: 'The Elder needs five moonpetals for the Moon Festival.' },
  { id: 'lanterns', title: 'Hang lanterns with Sena', desc: 'Sena needs help with the festival lanterns. (And she wants gossip.)' },
];
const SLOTS = 3;
let D; // today's progress

function healSapling(instant) {
  const s = W.sapling, mat = s.userData.leafMat, to = new THREE.Color(0x4fa04a);
  if (instant) { mat.color.copy(to); s.userData.leaf.scale.set(1.35, 0.85, 1.35); return; }
  let t = 0; const from = mat.color.clone();
  const step = () => { t += 0.02; mat.color.copy(from).lerp(to, Math.min(1, t)); const sc = 1 + 0.35 * Math.min(1, t); s.userData.leaf.scale.set(sc, 0.6 + 0.25 * Math.min(1, t), sc); if (t < 1) requestAnimationFrame(step); };
  step();
}

async function day1Day() {
  G.freeze(true);
  W.setTime(0.29); W.setSmoke(0.5);
  W.kirubel.group.visible = true; W.lumi.group.visible = true;
  const kp = G.SPOTS.kirubel;
  G.place(W.kirubel, kp.x, kp.z, G.SPOTS.crash.x, G.SPOTS.crash.z); W.kirubel.setPose('work');
  if (!G.near(kp, 25)) G.placePlayer(kp.x - 3, kp.z + 3);
  G.shotNow(at(kp, -4, 2.4, 5), at(kp, 0, 1, 0));
  await UI.fade(false, 600);

  const chosen = await UI.planner(TASKS, SLOTS);
  D = { chosen, done: {}, parts: 0, petals: 0, lanterns: 0, gotLanterns: false, released: false, sunset: false, busy: false };
  const over = chosen.length > SLOTS;
  S.flags.over = over;
  if (over) {
    G.P.energyMax = 55; G.P.drain = 1.4; G.P.energy = 55;
    await say(K, 'Four things. Easy. Probably.');
  } else await say(K, chosen.length === 1 ? 'One thing. Done properly.' : 'Okay. One at a time.');
  W.kirubel.setPose('work');

  // build today's tasks
  const has = (id) => chosen.includes(id);
  const live = [];
  if (has('parts')) G.SPOTS.parts.forEach((p, i) => {
    const item = W.makeItem('part', p); live.push({ task: 'parts', p, item, id: 'part' + i });
    G.addInteract('part' + i, p, 'Pick up', { onUse: () => { G.removeInteract('part' + i); W.removeItem(item); G.A.chime(); D.parts++; tick(); UI.toast(`Ship part ${D.parts} of 2`); if (D.parts === 2) finish('parts'); } });
  });
  if (has('heal')) {
    const sp = G.SPOTS.sapling; live.push({ task: 'heal', p: sp, id: 'sapling' });
    G.addInteract('sapling', sp, 'Hold to heal', { hold: 5, radius: 3, onUse: (it) => {
      healSapling(false); G.A.sparkle(); S.flags.healed = true;
      if (!it.released) { S.calm += 1; UI.toast('She didn’t rush it. The little tree breathes again.'); }
      else UI.toast('Healing can’t be rushed… but it’s done.');
      finish('heal');
    } });
  }
  if (has('petals')) for (let i = 0; i < 5; i++) {
    const a = i / 5 * Math.PI * 2, p = V(G.SPOTS.petals.x + Math.cos(a) * 4.5, 0, G.SPOTS.petals.z + Math.sin(a) * 4.5);
    const item = W.makeItem('petal', p); live.push({ task: 'petals', p, item, id: 'petal' + i });
    G.addInteract('petal' + i, p, 'Pick', { radius: 2, onUse: () => { G.removeInteract('petal' + i); W.removeItem(item); G.A.chime(); D.petals++; tick(); if (D.petals === 5) finish('petals'); } });
  }
  if (has('lanterns')) {
    const senaPos = G.SPOTS.sena;
    W.sena.group.position.set(senaPos.x, G.groundAt(senaPos.x, senaPos.z) + 1.4, senaPos.z); W.sena.rebase();
    live.push({ task: 'lanterns', p: senaPos, id: 'sena' });
    G.addInteract('sena', senaPos, 'Talk to Sena', { onUse: () => senaScene() });
  }

  // the star fragment waits on top of the pillar
  if (!S.fragments.includes(1)) placeFragment();

  // talking to Kirubel during the day
  G.addInteract('kirubelDay', kp, 'Talk', { radius: 3, onUse: () => kirubelChat() });

  function tick() {
    const lines = [];
    if (has('parts')) lines.push({ text: `Ship parts (${D.parts}/2)`, done: !!D.done.parts });
    if (has('heal')) lines.push({ text: 'Heal the sapling', done: !!D.done.heal });
    if (has('petals')) lines.push({ text: `Moonpetals (${D.petals}/5)`, done: !!D.done.petals });
    if (has('lanterns')) lines.push({ text: D.gotLanterns ? `Hang lanterns (${D.lanterns}/3)` : 'Find Sena by your home', done: !!D.done.lanterns });
    const all = chosen.every(id => D.done[id]);
    if (D.sunset) UI.objective('The sun is setting — go back to Kirubel', lines);
    else if (all) UI.objective('All done! Go tell Kirubel', lines);
    else UI.objective('Today', lines);
    D.lines = lines;
    G.targets = (D.sunset || all) ? [kp] : live.filter(l => !D.done[l.task] && G.hasInteract(l.id)).map(l => l.p);
    if (!G.targets.length) G.targets = [kp];
  }
  D.tick = tick; D.live = live;
  function finish(id) { D.done[id] = true; tick(); }
  tick();
  UI.plannerButton(true);
  document.getElementById('btnPlanner').onclick = () => UI.showPlan(D.lines || []);

  // the sun moves on its own; the day lasts ~8 minutes (longer if she skipped prayer)
  G.dayClock = { running: true, elapsed: 0, dur: S.flags.leftEarly ? 576 : 480, from: 0.29, to: 0.74, onEnd: () => {
    D.sunset = true; UI.toast('The sun is setting. Head back to Kirubel.', 4500); tick();
  } };
  G.follow(); G.resetCam(); G.freeze(false);
  UI.toast(over ? 'Kristi took on too much. Her wings tire faster today.' : 'Tap ☀ to see your plan. Talk to Kirubel when you’re done.', 5000);

  // wait until the day is ended through Kirubel
  await new Promise(res => { D.endDay = res; });
  G.dayClock.running = false;
  ['kirubelDay', 'sena', 'sapling', 'part0', 'part1', 'post0', 'post1', 'post2', ...[0, 1, 2, 3, 4].map(i => 'petal' + i)].forEach(id => G.removeInteract(id));
  live.forEach(l => l.item && W.removeItem(l.item));
  if (fragItem) { W.removeItem(fragItem); fragItem = null; G.removeInteract('frag1'); }
  UI.plannerButton(false); G.targets = []; UI.objective(null);
}

let fragItem = null;
function placeFragment() {
  if (fragItem || S.fragments.includes(1)) return;
  const p = G.SPOTS.pillar, item = W.makeItem('star', p); fragItem = item;
  G.addInteract('frag1', p, 'Take the star', { radius: 2.4, onUse: async () => {
    G.removeInteract('frag1'); W.removeItem(item); fragItem = null; G.A.sparkle();
    S.fragments.push(1); G.save();
    G.freeze(true);
    await UI.fragmentCard(1, FRAGMENT_LINES[0]);
    G.freeze(false);
    if (D && D.tick) D.tick();
  } });
}

async function senaScene() {
  if (D.busy) return; D.busy = true;
  G.freeze(true);
  const sp = W.sena.group.position;
  twoShot(sp);
  if (!D.gotLanterns) {
    G.removeInteract('sena');
    if (S.flags.over) await say(SE, 'You’re helping? Wait. You’re helping me AND hunting for metal AND healing a tree AND picking petals? Kristi.');
    else await say(SE, 'You came! I thought you forgot. You always forget.');
    await say(SE, 'Everyone is whispering about the light that fell last night. You wouldn’t know anything about that… would you?');
    const c = await UI.choose(['No idea what you’re talking about.', '…Maybe.']);
    if (c === 0) { await say(SE, 'Mm-hm. Your face says otherwise.'); }
    else { await say(SE, 'KRISTI.'); await say(SE, '…Fine. Your secret is safe with me. But I want ALL the details later.'); S.flags.senaKnows = true; }
    await say(SE, 'Here. Three lanterns. Hang them on the posts around the hollow.');
    D.gotLanterns = true;
    G.SPOTS.posts.forEach((p, i) => D.live.push({ task: 'lanterns', p, id: 'post' + i }));
    G.SPOTS.posts.forEach((p, i) => G.addInteract('post' + i, p, 'Hang lantern', { onUse: () => {
      G.removeInteract('post' + i); W.posts[i].userData.lit(); G.A.chime(); D.lanterns++; D.tick();
      if (D.lanterns === 3) { S.flags.lanterns = true; D.done.lanterns = true; D.tick(); UI.toast('The hollow glows. Sena is delighted.'); }
    } }));
  }
  G.follow(); G.freeze(false); D.busy = false; D.tick();
}

async function kirubelChat() {
  if (D.busy) return; D.busy = true;
  G.freeze(true);
  const kb = W.kirubel.group.position;
  W.kirubel.setPose('stand'); W.kirubel.group.rotation.y = Math.atan2(G.P.pos.x - kb.x, G.P.pos.z - kb.z);
  G.faceKristi(kb);
  twoShot();
  const all = D.chosen.every(id => D.done[id]);
  if (D.sunset || all) {
    await say(B, all ? 'You’re back. And you look like someone who finished something.' : 'The sun’s going down. Come sit.');
    D.busy = false; D.endDay(); return;
  }
  const lines = ['Still working on it?', 'Lumi says you flew past three times.', 'You don’t have to do everything before sunset, you know.'];
  await say(B, lines[Math.floor(Math.random() * lines.length)]);
  const c = await UI.choose(['Keep going', 'Call it a day']);
  if (c === 1) { await say(B, 'Then sit. The rest will still be there tomorrow.'); D.busy = false; D.endDay(); return; }
  W.kirubel.setPose('work');
  G.follow(); G.freeze(false); D.busy = false;
}

// ════════════════════ DAY 1: EVENING ════════════════════
async function day1Evening() {
  G.freeze(true);
  const kb = W.kirubel.group.position;
  W.setTime(0.76);
  G.placePlayer(kb.x - 1.6, kb.z + 1.4); G.faceKristi(kb);
  W.kirubel.setPose('sit'); W.kirubel.group.rotation.y = Math.atan2(-1.6, 1.4);
  twoShot();
  const chosen = D.chosen, done = chosen.filter(id => D.done[id]), unfinished = chosen.filter(id => !D.done[id]);
  S.steadiness += done.length - unfinished.length;
  D.reflect = {};

  // ship parts
  if (chosen.includes('parts') && D.parts === 2) {
    await say(B, 'You found both pieces? Kristi…');
    await narrate('He turns the second piece over. A crack runs straight through it.', 3000);
    await say(B, 'This one’s cracked. It won’t hold.');
    const c = await UI.choose(['All that searching for nothing?!', 'Then that’s one less place to look tomorrow.']);
    if (c === 0) { S.calm -= 1; D.reflect.calm = 'down'; await say(B, 'It’s not nothing. You brought it back. That’s something.'); }
    else { S.calm += 1; D.reflect.calm = 'up'; await say(B, '…You sound like me in the morning.'); }
  } else if (chosen.includes('parts') && D.parts === 1) {
    await say(B, 'One piece! And it’s whole. That’s one step closer.');
  } else {
    await say(B, 'No ship parts today. That’s alright. The ship isn’t going anywhere. Neither am I, apparently.');
  }

  // his restlessness, shaped by prayer
  if (S.restless >= 5) {
    await say(B, 'I tried to rush the hull today. Bent a bracket. Two hours of work, undone.');
    await narrate('He doesn’t sit still for long. He keeps getting up. He keeps pacing.', 3200);
  } else {
    await say(B, 'I worked slowly today. Everything I touched, held.');
  }

  // her day
  if (unfinished.length) {
    await say(K, 'I tried to do everything. I did half of it. Badly.');
    const c = await UI.choose(['It’s fine. I’ll just do it all tomorrow.', 'Tomorrow I’ll pick less. And finish it.']);
    if (c === 0) { S.steadiness -= 1; D.reflect.plan = 'all'; await say(B, 'Isn’t that what you said about today?'); await say(K, '…Maybe.'); }
    else { S.steadiness += 1; D.reflect.plan = 'less'; await say(B, 'One thing. Then the next.'); await say(K, 'Don’t look so pleased with yourself.'); }
  } else {
    await say(K, 'I did everything I planned. Everything!');
    await say(B, 'Then tonight, you rest. Fairy’s orders.');
    await say(K, 'That’s MY line.');
  }

  // night prayer
  await UI.fade(true, 900);
  W.setTime(0.86);
  const pp = G.SPOTS.prayer;
  G.place(W.kirubel, pp.x, pp.z, pp.x + 10, pp.z); W.kirubel.setPose('stand');
  G.placePlayer(pp.x - 2.4, pp.z + 2.2); G.faceKristi(pp);
  G.shotNow(at(pp, -4.5, 1.8, 4), at(pp, 0, 1.2, 0));
  await UI.fade(false, 900);
  W.kirubel.group.rotation.y = Math.atan2(-2.4, 2.2);
  await say(B, 'ሰላም ለኪ, Kristi.', { sub: 'Selam leki — peace be with you.' });
  W.kirubel.group.rotation.y = Math.PI / 2; W.kirubel.setPose('pray');
  G.A.startPrayerMusic();
  G.shot(at(pp, 3.5, 1.7, 3), at(pp, 0, 1.2, 0), 0.5);
  await UI.prayerLine('በስመ አብ ወወልድ ወመንፈስ ቅዱስ', 'In the name of the Father, the Son and the Holy Spirit.', 4800);
  await UI.prayerLine('', 'For the parts that were found, and the ones that weren’t.', 4600);
  await UI.prayerLine('', 'And keep her safe tonight.', 4200);
  const c = await UI.choose(['Sit beside him until he’s done', 'Go home and get some sleep']);
  if (c === 0) {
    S.calm += 1; S.waited += 1; S.restless -= 2; D.reflect.night = 'stay';
    G.placePlayer(pp.x - 1, pp.z + 1.2, Math.PI / 2);
    await narrate('She sits in the grass beside him. The stars come out one by one, as if they were listening too.', 4200);
  } else {
    S.restless -= 1; D.reflect.night = 'home';
    await narrate('From her window, she can still see the glow of his little camp.', 3400);
  }
  G.A.stopPrayerMusic();
  S.restless = Math.max(0, S.restless);
  W.kirubel.setPose('sleep');
  G.dayClock = null;
}

// ════════════════════ END OF DAY 1 ════════════════════
async function endOfDay1() {
  const fresh = S.checkpoint !== 'day1_end';
  S.checkpoint = 'day1_end'; G.save();
  G.freeze(true);
  W.setTime(0.9); W.kirubel.group.visible = true; W.lumi.group.visible = true;
  const pp = G.SPOTS.prayer;
  G.place(W.kirubel, pp.x, pp.z, pp.x + 10, pp.z); W.kirubel.setPose('sleep');

  if (fresh && D) {
    const R = D.reflect || {}, chosen = D.chosen, unf = chosen.filter(id => !D.done[id]);
    const li = [];
    if (!unf.length) li.push(['☀', chosen.length > SLOTS ? 'Kristi fit everything in. Barely. Her wings are exhausted.' : 'Kristi finished everything she planned.']);
    else if (chosen.length > SLOTS) li.push(['☀', 'Kristi tried to fit everything in, and ran herself thin.']);
    else li.push(['☀', 'Kristi left a few things unfinished.']);
    if (R.plan === 'less') li.push(['✦', 'Tomorrow, she’ll choose more carefully.']);
    if (R.plan === 'all') li.push(['✦', 'Tomorrow is already looking crowded.']);
    if (R.calm === 'up') li.push(['❁', 'When the part was cracked, she stayed calm.']);
    if (R.calm === 'down') li.push(['❁', 'The cracked part got to her. Patience is still a work in progress.']);
    li.push(['✝', S.waited >= 2 ? 'She stayed beside him for both prayers.' : S.waited === 1 ? 'She stayed beside him for one prayer.' : 'She didn’t stay for his prayers today.']);
    li.push(['☾', S.restless <= 3 ? 'Kirubel slept peacefully, for the first time since he fell.' : 'Kirubel was still restless. He paced long after dark.']);
    li.push(['✦', S.fragments.includes(1) ? 'Star fragments: 1 of 10' : 'High above the forest, a star fragment is still waiting.']);
    li.push(['○', 'The moon grows a little fuller. Nine days remain.']);
    const pick = await UI.card(`<h2>Day 1 complete</h2><h3>How the day went</h3><ul class="reflect">${li.map(([i, t]) => `<li><i>${i}</i>${t}</li>`).join('')}</ul><p style="color:var(--muted);font-size:13px">Day 2 arrives in the next update.</p>`, ['Explore the night', 'Replay Day 1']);
    if (pick === 1) return replay();
  }
  // free roam at night until Day 2 exists
  G.placePlayer(pp.x - 3, pp.z + 3); G.follow(); G.resetCam(); G.freeze(false);
  await UI.fade(false, 800);
  UI.objective('Day 2 is on its way', [{ text: 'Explore the night forest', done: false }]);
  if (!S.fragments.includes(1)) { placeFragment(); G.targets = [G.SPOTS.pillar]; UI.toast('The star on the tall rock is still glowing…', 4000); }
  else UI.toast('Kirubel is asleep. The forest is yours tonight.', 4000);
}

function replay() {
  const snap = S.snapshot;
  if (!snap) return;
  const copy = JSON.parse(JSON.stringify(snap)); copy.snapshot = snap; copy.checkpoint = 'day1_morning';
  saveState(copy);
  location.href = location.pathname + '?autostart=continue';
}
