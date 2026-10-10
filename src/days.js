import * as THREE from 'three';
import { SPOTS } from './world.js';

// ═══════════════════════════════════════════════════════════════
//  THE TEN DAYS — all story content lives here.
//  The engine (story.js) runs each day the same way:
//  morning prayer → plan the day → tasks → evening → question → night prayer.
// ═══════════════════════════════════════════════════════════════

const V = (x, z) => new THREE.Vector3(x, 0, z);
const ring = (c, r, n, rot = 0) => Array.from({ length: n }, (_, i) => { const a = rot + i / n * Math.PI * 2; return V(c.x + Math.cos(a) * r, c.z + Math.sin(a) * r); });
export const K = 'Kristi', B = 'Kirubel', SE = 'Sena', L = 'Lumi', EL = 'Elder Thorne', MI = 'Mira', WA = 'Grandmother Warka';
const CROSS = ['በስመ አብ ወወልድ ወመንፈስ ቅዱስ', 'In the name of the Father, the Son and the Holy Spirit.'];
const PRAISE = ['እግዚአብሔር ይመስገን', 'Egziabher yimesgen — God be praised.'];
export const PRAYER_OPEN = CROSS;
export const SHIP_GOAL = 12;
const WARKA_ROOTS = V(SPOTS.warka.x + 3.5, SPOTS.warka.z - 2.5);

// reusable task pieces
const parts = (a, b, cracked) => ({ id: 'parts', title: 'Look for ship parts', desc: 'Pieces of his ship are still scattered through the forest.', ship: true, cracked,
  steps: [{ type: 'collect', kind: 'part', at: [a, b], label: 'Pick up', text: (n, N) => `Ship parts (${n}/${N})` }] });
const leaves = (c, r, title, desc) => ({ id: 'leaves', title, desc, steps: [{ type: 'collect', kind: 'leaf', at: ring(c, r, 3, 0.4), label: 'Pick', text: (n, N) => `${title} (${n}/${N})` }] });

export const DAYS = {
  // ─────────────────────────── DAY 1 ───────────────────────────
  1: {
    title: 'Day 1', sub: 'The full moon rises in ten days.',
    intro: 'Kristi wakes to find him already standing, facing the sunrise.',
    morning: [CROSS, PRAISE, ['', 'For this morning. For this forest. And for the one who wasn’t afraid.']],
    async afterPrayer(c) {
      if (c.prayed) {
        await c.say(B, 'You stayed.');
        await c.say(K, 'You looked… peaceful. I’ve never seen you peaceful.');
        await c.say(B, 'You’ve known me for one night.');
        await c.say(K, 'Exactly. And that’s the first time.');
      } else {
        await c.say(B, 'You left early.'); await c.say(K, 'I had things to do!'); await c.say(B, 'Before the sun was even up?');
      }
      await c.say(B, 'Every morning starts like this for me. Before anything else.');
      await c.say(K, 'Before anything else? I have a hundred things to do today.');
      await c.say(B, 'Then do one. Then the next one.');
      await c.say(K, 'That is not how it works.');
      await c.say(B, 'Where I come from, it’s the only way it works.');
      await c.say(L, '*chirp chirp!*');
      await c.say(B, 'This is Lumi. She came with me. Or I came with her — I’m never sure.');
    },
    hint: 'Lumi keeps staring at that tall rock to the southwest. Something up there is glowing.',
    fragment: 'pillar',
    tasks: [
      parts(SPOTS.parts[0], SPOTS.parts[1], true),
      { id: 'heal', title: 'Heal the fading sapling', desc: 'A young Warka tree to the west is losing its colour. Grandmother Warka asked you to tend it.',
        steps: [{ type: 'hold', at: SPOTS.sapling, secs: 5, label: 'Hold to heal', text: () => 'Heal the sapling', effect: 'sapling' }] },
      { id: 'petals', title: 'Gather moonpetals', desc: 'The Elder needs five moonpetals for the Moon Festival.', trust: 1,
        steps: [{ type: 'collect', kind: 'petal', at: ring(SPOTS.petals, 4.5, 5), label: 'Pick', radius: 2, text: (n, N) => `Moonpetals (${n}/${N})` }] },
      { id: 'lanterns', title: 'Hang lanterns with Sena', desc: 'Sena needs help with the festival lanterns. (And she wants gossip.)',
        steps: [
          { type: 'talk', who: 'sena', at: SPOTS.sena, label: 'Talk to Sena', text: () => 'Find Sena by your home', async scene(c) {
            await c.say(SE, c.over ? 'You’re helping? You’re helping me AND hunting for metal AND healing a tree AND picking petals? Kristi.' : 'You came! I thought you forgot. You always forget.');
            await c.say(SE, 'Everyone is whispering about the light that fell last night. You wouldn’t know anything about that… would you?');
            const ch = await c.choose(['No idea what you’re talking about.', '…Maybe.']);
            if (ch === 0) await c.say(SE, 'Mm-hm. Your face says otherwise.');
            else { await c.say(SE, 'KRISTI.'); await c.say(SE, '…Fine. Your secret is safe with me. But I want ALL the details later.'); c.S.flags.senaKnows = true; }
            await c.say(SE, 'Here. Three lanterns. Hang them on the posts around the hollow.');
          } },
          { type: 'collect', at: SPOTS.posts, noItem: true, label: 'Hang lantern', effect: 'lantern', text: (n, N) => `Hang lanterns (${n}/${N})` },
        ] },
    ],
    async evening(c) {
      if (c.partsFound === 2) {
        await c.say(B, 'You found both pieces? Kristi…');
        await c.narrate('He turns the second piece over. A crack runs straight through it.', 3000);
        await c.say(B, 'This one’s cracked. It won’t hold.');
        await c.calmTest(['All that searching for nothing?!', 'Then that’s one less place to look tomorrow.'],
          () => c.say(B, 'It’s not nothing. You brought it back. That’s something.'),
          () => c.say(B, '…You sound like me in the morning.'), 'the cracked part');
      }
    },
    night: [['', 'For the parts that were found, and the ones that weren’t.'], ['', 'And keep her safe tonight.']],
  },

  // ─────────────────────────── DAY 2 ───────────────────────────
  2: {
    title: 'Day 2', sub: 'Nine nights until the full moon.',
    intro: 'Mist hangs between the trees. He is already up, of course.',
    morning: [CROSS, ['', 'For sleep that came, even a little.'], ['', 'Teach me to wait without pacing.']],
    async afterPrayer(c) {
      await c.say(B, 'Your grandmother tree — the big one by your home. Lumi says she hums at night.');
      await c.say(K, 'Grandmother Warka doesn’t hum. She’s a tree.');
      await c.say(L, '*hums*');
      await c.say(K, '…Okay, maybe she hums.');
    },
    hint: 'Lumi keeps circling the top of Grandmother Warka. She won’t say why.',
    fragment: 'warka',
    tasks: [
      parts(V(-70, 10), V(30, 60)),
      { id: 'roots', title: 'Tend Grandmother Warka’s roots', desc: 'The oldest tree in the forest asked for you by name. That has never happened before.',
        steps: [
          { type: 'talk', who: 'warka', at: SPOTS.warka, radius: 5.5, label: 'Speak to Warka', text: () => 'Visit Grandmother Warka', async scene(c) {
            await c.narrate('Two warm lights open in the bark.', 2600);
            await c.say(WA, 'Little one. Not so little anymore, are you.');
            await c.say(K, 'Grandmother! You — you’ve never spoken to me before.');
            await c.say(WA, 'You never stood still long enough to hear me.');
            await c.say(WA, 'My roots are tangled on the eastern side. Sit with them a while. Do not pull. Roots cannot be hurried.');
          } },
          { type: 'hold', at: WARKA_ROOTS, secs: 6, label: 'Hold to untangle', text: () => 'Untangle the roots, gently', effect: 'calmIfSteady' },
        ] },
      { id: 'banners', title: 'Air out the festival banners', desc: 'Sena left the festival banners drying all over the hollow. The wind has other plans.',
        steps: [{ type: 'collect', kind: 'banner', at: [V(10, -14), V(-14, 2), V(4, 16), V(18, 4)], label: 'Catch it', text: (n, N) => `Banners (${n}/${N})` }] },
      leaves(V(-25, -30), 4, 'Moonleaf for his tea', 'He drank the whole pot last night. He will not admit he liked it.'),
    ],
    async evening(c) {
      await c.say(B, 'Did your grandmother tree say anything?');
      await c.say(K, c.done('roots') ? 'She said I never stood still long enough to hear her.' : 'I didn’t visit her today. There wasn’t time.');
      await c.say(B, c.done('roots') ? 'Ah. She sounds like someone I know.' : 'There’s always time for the things that waited for you.');
      await c.narrate('Lumi bounces too close to the kettle. It tips. The last of the moonleaf tea soaks into the moss.', 3600);
      await c.calmTest(['Lumi! That was the last of it!', '*laughs* It’s fine. There’s more moonleaf in the forest.'],
        () => c.say(L, '*sad chirp*'), () => c.say(L, '*happy chirp!*'), 'the spilled tea');
    },
    question: 0,
    night: [['', 'For the old tree, who has waited a long time.'], ['', 'And for Kristi, who is learning that she doesn’t have to.']],
  },

  // ─────────────────────────── DAY 3 ───────────────────────────
  3: {
    title: 'Day 3', sub: 'Eight nights until the full moon.',
    intro: 'He prays a little longer than yesterday. Something is on his mind.',
    morning: [CROSS, ['', 'Give me patience with the hull, and with myself.'], ['', 'Keep the others from finding us too soon.']],
    async afterPrayer(c) {
      await c.say(B, 'I didn’t sleep much. Every time I close my eyes I see the ship falling.');
      await c.say(K, 'Then tonight I’m making you a sleep tea. Doctor’s orders.');
      await c.say(B, 'I thought you were a nurse.');
      await c.say(K, 'It changes depending on how stubborn the patient is.');
    },
    hint: 'Lumi keeps landing on top of the ship’s glass dome and refusing to come down.',
    fragment: 'dome',
    tasks: [
      parts(V(70, -40), V(-20, -80)),
      { id: 'wood', title: 'Gather firewood', desc: 'Nights at the crash site are cold. He would never ask.', bond: 1,
        steps: [{ type: 'collect', kind: 'wood', at: ring(V(25, 25), 5, 4), label: 'Gather', text: (n, N) => `Firewood (${n}/${N})` }] },
      leaves(V(-55, 15), 4, 'Herbs for a sleep tea', 'Sleepy-moss and moonleaf. It’s worth a try.'),
      { id: 'song', title: 'Help Sena practise her lantern song', desc: 'Sena is singing at the bonfire festival. She is very nervous. And very loud.',
        steps: [{ type: 'talk', who: 'sena', at: SPOTS.sena, label: 'Listen to Sena', text: () => 'Find Sena', async scene(c) {
          await c.say(SE, 'Okay. Okay okay okay. Tell me honestly. Is this good?');
          await c.narrate('Sena sings. Several birds leave the area.', 2600);
          const ch = await c.choose(['It was beautiful. Truly.', 'Maybe… a little softer?']);
          if (ch === 0) await c.say(SE, 'You’re lying, but I love you for it.');
          else { await c.say(SE, 'Softer. Softer! You’re right.'); await c.narrate('She sings again, softer. It really is lovely.', 2600); }
        } }] },
    ],
    event: { at: 0.35, async run(c) {
      c.W.mira.at(c.G.P.pos.x + 2.2, c.G.P.pos.z + 1.2, c.G.P.pos.x, c.G.P.pos.z);
      c.twoShot(c.W.mira.group.position);
      await c.say(MI, 'Well, well. Kristi. The tall one. Out all alone again.');
      await c.say(MI, 'You smell like smoke. And metal. And… sky.');
      const ch = await c.choose(['I don’t know what you mean.', 'Mira, please. Can you keep a secret?']);
      if (ch === 0) { await c.say(MI, 'Liar. Everyone saw you fly toward the light.'); }
      else { c.S.miraKind += 1; await c.say(MI, '…You’re asking me? Nobody asks me anything.'); }
      await c.say(MI, 'Whatever fell out of the sky doesn’t belong here. If I have to, I’ll break that ship myself.');
      await c.calmTest(['Touch it and you’ll be sorry, Mira!', 'He’s not dangerous. He’s just lost. Like anyone could be.'],
        () => c.say(MI, 'Big words for a fairy who doesn’t even fit in.'),
        async () => { c.S.miraKind += 1; await c.say(MI, '…Hmph.'); await c.narrate('Mira flies off. Slower than usual.', 2400); }, 'Mira’s threat');
      c.W.mira.group.visible = false;
    } },
    async evening(c) {
      await c.say(B, 'Someone was watching the camp today. Small. Purple. Very angry.');
      await c.say(K, 'Mira. She’s… complicated.');
      await c.narrate('Night falls. He lies down. He gets up. He lies down again.', 3000);
      await c.say(K, 'Alright. That’s it. Close your eyes.');
      await c.say(B, 'Why?');
      await c.say(K, 'Abra kadabra. SLEEP FOCUS SPELL. Guarantees five to eight uninterrupted hours of rest.');
      await c.say(K, 'Side effects include actually waking up well-rested for once.');
      const r = await c.UI.spell();
      if (r.slips === 0) { c.S.calm += 1; c.S.restless -= 3; c.D.reflect.spell = 'gentle'; await c.narrate('The stars settle into place. So does his breathing.', 3000); await c.say(B, '…That’s… a real spell…', { sub: 'He is asleep before he finishes the sentence.' }); }
      else { c.S.restless -= 1; c.D.reflect.spell = 'rushed'; await c.say(B, 'I think it… almost worked.'); await c.say(K, 'Spells are like tea. Not a race.'); }
    },
    question: 1,
    night: [['', 'For a spell I don’t understand, from someone I am starting to.'], ['', 'Soften the angry ones. Mira too.']],
  },

  // ─────────────────────────── DAY 4 ───────────────────────────
  4: {
    title: 'Day 4', sub: 'Golden Daisy Night. Seven nights until the full moon.',
    intro: 'The forest smells of daisies. Tonight the fairies light their great bonfire.',
    morning: [CROSS, PRAISE, ['', 'For the fire tonight, and for a world that lights fires too.']],
    async afterPrayer(c) {
      await c.say(K, 'Tonight is Golden Daisy Night. We build a bonfire as tall as Grandmother Warka and crown it with daisies.');
      await c.say(B, 'A bonfire… with yellow daisies on top?');
      await c.say(B, 'Kristi. Where I come from, we do the same. We call it Demera. For the day the True Cross was found.');
      await c.say(K, 'Your world has daisy fires too?');
      await c.say(B, 'Maybe our worlds aren’t as far apart as the sky makes them look.');
    },
    hint: 'Lumi keeps rolling around in the daisy meadow to the west, next to an old hollow log.',
    fragment: 'meadow',
    tasks: [
      parts(V(-45, 60), V(45, -70)),
      { id: 'daisies', title: 'Pick golden daisies', desc: 'Six of the brightest daisies for the bonfire crown, from the western meadow.', trust: 1,
        steps: [{ type: 'collect', kind: 'daisy', at: ring(SPOTS.meadow, 7, 6, 0.3), label: 'Pick', text: (n, N) => `Golden daisies (${n}/${N})` }] },
      { id: 'stack', title: 'Stack the bonfire', desc: 'The logs have to lean just right, or the whole thing topples. Slowly does it.', trust: 1,
        steps: [{ type: 'hold', at: SPOTS.bonfire, secs: 6, label: 'Hold to stack', text: () => 'Stack the bonfire', effect: 'bonfire' }] },
      { id: 'torch', title: 'Carry the Elder’s torch-staff', desc: 'Every year someone carries the flame from the council stone. This year the Elder asked for you.', trust: 1,
        steps: [
          { type: 'talk', who: 'elder', at: SPOTS.council, label: 'Speak to the Elder', text: () => 'Go to the council stone', async scene(c) {
            await c.say(EL, 'Kristi. You are tall enough to carry it without dragging it in the moss, at least.');
            await c.say(K, 'Thank you, Elder. I think.');
            await c.say(EL, 'Strange lights fell from the sky four nights ago. You would tell me if you knew anything. Wouldn’t you?');
            const ch = await c.choose(['Of course, Elder.', '(Say nothing.)']);
            if (ch === 1) await c.say(EL, 'Hm. Silence is also an answer, child.');
          } },
          { type: 'visit', at: SPOTS.bonfire, label: 'Place the torch', text: () => 'Bring the torch to the bonfire' },
        ] },
    ],
    async evening(c) {
      c.W.setTime(0.83); c.W.setBonfire(2); c.S.flags.bonfire = 2;
      c.W.villagers.forEach((v, i) => { const a = i * 2.1; v.at(c.SPOTS.bonfire.x + Math.cos(a) * 4, c.SPOTS.bonfire.z + Math.sin(a) * 4, c.SPOTS.bonfire.x, c.SPOTS.bonfire.z); });
      c.W.sena.at(c.SPOTS.bonfire.x - 3, c.SPOTS.bonfire.z + 2, c.SPOTS.bonfire.x, c.SPOTS.bonfire.z);
      c.G.placePlayer(c.SPOTS.bonfire.x - 5, c.SPOTS.bonfire.z + 5); c.G.faceKristi(c.SPOTS.bonfire);
      c.G.shotNow(c.at(c.SPOTS.bonfire, -9, 3, 8), c.at(c.SPOTS.bonfire, 0, 2, 0));
      await c.UI.fade(false, 900);
      await c.narrate('The daisies catch. The whole hollow turns gold.', 3000);
      await c.say(SE, 'Kristi! Where’s your… friend? Is he coming?', { sub: 'Sena whispers, very badly.' });
      const ch = await c.choose(['Bring him to the edge of the firelight', 'Watch it with him from the trees']);
      if (ch === 0) {
        c.S.flags.miraSaw = true; c.S.trust -= 1; c.S.bond += 1;
        await c.narrate('For one moment he stands in the golden light, and every fairy turns to stare.', 3400);
        await c.say(B, 'Demera… just like home.');
        await c.narrate('Somewhere in the crowd, a small purple fairy slips away toward the council stone.', 3200);
      } else {
        c.S.bond += 1;
        await c.narrate('They sit on a fallen branch where the light only just reaches. He makes the sign of the cross toward the fire.', 3800);
        await c.say(B, 'Thank you for not making me choose between hiding and being seen.');
      }
      await c.narrate('Sena trips on her own wings. The daisy crown Kristi spent the morning on tumbles into the fire.', 3400);
      await c.calmTest(['Sena! I spent all morning on that!', 'It’s a bonfire. Everything ends up in the fire eventually.'],
        () => c.say(SE, 'I’m sorry, I’m sorry…'), () => c.say(SE, '…That’s weirdly wise. Who taught you that?'), 'the fallen crown');
      c.W.villagers.forEach(v => v.group.visible = false);
    },
    eveningAtFire: true,
    question: 2,
    night: [['', 'For the fire that reminded me of home.'], ['', 'And for her, who made a place for me beside it.']],
  },

  // ─────────────────────────── DAY 5 ───────────────────────────
  5: {
    title: 'Day 5', sub: 'Six nights until the full moon.',
    intro: 'Grey morning. Even the fireflies seem to know something is coming.',
    morning: [CROSS, ['', 'If they come today, give me the right words.'], ['', 'And give her courage. She has already given me so much.']],
    async afterPrayer(c) {
      await c.say(B, 'Sena flew past before dawn. She said the Elder has been asking questions.');
      await c.say(K, 'Then we keep working. One thing, then the next.');
      await c.say(B, 'Did you just quote me?');
      await c.say(K, 'Don’t let it go to your head.');
    },
    hint: 'Lumi keeps staring at the tall stone pillar in the northeast.',
    fragment: 'pillar2',
    tasks: [
      parts(V(75, 20), V(-80, -30)),
      { id: 'petals5', title: 'Moonpetals for the Elder', desc: 'A peace offering. The Elder loves moonpetals more than he admits.', trust: 1,
        steps: [{ type: 'collect', kind: 'petal', at: ring(SPOTS.petals, 4.5, 5, 0.6), label: 'Pick', radius: 2, text: (n, N) => `Moonpetals (${n}/${N})` }] },
      { id: 'scorch', title: 'Heal the scorched earth', desc: 'The crash burned a scar into the moss. It hurts to look at.',
        steps: [{ type: 'hold', at: V(32, -52), secs: 6, label: 'Hold to heal', text: () => 'Heal the burned moss', effect: 'calmIfSteady' }] },
      { id: 'lantern5', title: 'Fix Sena’s broken lantern', desc: 'She dropped it during the festival. She will not stop talking about it.',
        steps: [
          { type: 'talk', who: 'sena', at: SPOTS.sena, label: 'Talk to Sena', text: () => 'Find Sena', async scene(c) { await c.say(SE, 'My lantern! Look at it! It’s RUINED. Can you hold it together while the glow-sap sets? It takes forever.'); } },
          { type: 'hold', at: SPOTS.posts[0], secs: 5, label: 'Hold it steady', text: () => 'Hold the lantern while it sets' },
        ] },
    ],
    event: { at: 0.45, async run(c) {
      await c.UI.fade(true, 600);
      const kb = c.W.kirubel.group.position;
      c.G.placePlayer(kb.x - 1.6, kb.z + 1.6); c.G.faceKristi(kb);
      c.W.kirubel.setPose('stand');
      c.W.elder.at(kb.x + 2.5, kb.z + 2.2, kb.x, kb.z); c.W.mira.at(kb.x + 3.6, kb.z + 1.2, kb.x, kb.z);
      c.G.shotNow(c.at(kb, -2, 2.4, 6.5), c.at(kb, 1, 1.2, 1));
      await c.UI.fade(false, 600);
      await c.narrate('Sena’s warning comes too late. The Elder is already at the crash site. Mira is with him.', 3600);
      await c.say(EL, 'So it is true. An outsider. A sky-thing, in our forest.');
      await c.say(MI, 'I told you. I TOLD you.');
      await c.say(EL, 'Kristi. You hid this from your own people.');
      await c.calmTest(['He’s done NOTHING wrong! You’re all just afraid!', 'Elder, please. Hear him before you judge him.'],
        async () => { c.S.trust -= 1; await c.say(EL, 'Fear has kept this forest alive for a thousand years, child.'); },
        async () => { c.S.trust += 1; await c.say(EL, '…Speak, then. Sky-thing.'); await c.say(B, 'My name is Kirubel. I didn’t mean to fall. I only want to go home.'); await c.say(EL, 'Hm. At least it has manners.'); }, 'the Elder');
      await c.say(EL, 'When the moon is full, the sky opens a path for one night only. Be gone through it.');
      await c.say(EL, 'If you are still here when it closes, the forest will make you go.');
      c.W.elder.group.visible = false;
      await c.narrate('In the commotion, nobody sees Mira dart behind the ship.', 3000);
      c.W.mira.group.visible = false;
      c.S.flags.coreStolen = true;
    } },
    async evening(c) {
      await c.say(B, 'Kristi… the star-core. The heart of the engine. It’s gone.');
      await c.say(B, 'Without it the ship is just a very shiny rock.');
      await c.calmTest(['Mira! I’ll find her and I’ll—', 'We’ll get it back. Somehow. Not tonight, but we will.'],
        () => c.say(B, 'Please don’t. She’s scared. Scared people do scared things.'),
        () => c.say(B, '…You’re calmer than I am. When did that happen?'), 'the stolen core');
    },
    question: 3,
    night: [['', 'For the Elder, who is only protecting what he loves.'], ['', 'And for Mira. Wherever she put it.']],
  },

  // ─────────────────────────── DAY 6 ───────────────────────────
  6: {
    title: 'Day 6', sub: 'Kidane Mihret. Five nights until the full moon.',
    intro: 'He has made a small cross of flowers at the prayer stones.',
    morning: [CROSS, ['', 'Today is a day of mercy where I come from. Of promises kept.'], ['', 'Have mercy on the Elder. On Mira. On me, for being afraid.']],
    async afterPrayer(c) {
      await c.say(B, 'Kidane Mihret. The Covenant of Mercy. At home, today, everyone would be in white, walking to church before the sun.');
      await c.say(K, 'Mercy… even for Mira?');
      await c.say(B, 'Especially for Mira.');
    },
    hint: 'Lumi keeps landing on the roof of your home. Your actual home. Rude.',
    fragment: 'roof',
    tasks: [
      parts(V(-30, 70), V(20, -30)),
      { id: 'cake', title: 'A peace offering for Mira', desc: 'Sena bakes the best honeycakes in the forest. Maybe mercy tastes like honey.', mira: 1,
        steps: [
          { type: 'talk', who: 'sena', at: SPOTS.sena, label: 'Ask Sena', text: () => 'Ask Sena for a honeycake', async scene(c) { await c.say(SE, 'For MIRA? After what she did? …You’re a better fairy than me. It’s on the stump by your door.'); } },
          { type: 'collect', kind: 'cake', at: [V(-1, 0)], label: 'Take the cake', text: () => 'Take the honeycake' },
          { type: 'talk', who: 'mira', at: V(-30, -40), label: 'Give it to Mira', text: () => 'Find Mira in the south woods', async scene(c) {
            await c.say(MI, 'What do you want.');
            await c.say(K, 'Nothing. It’s a honeycake. It’s a day for mercy, apparently.');
            await c.narrate('Mira stares at the cake for a long time.', 2600);
            await c.say(MI, '…Nobody ever brings me anything.');
          } },
        ] },
      { id: 'petition', title: 'Gather names for a petition', desc: 'Ask three fairies to sign a plea to the Elder: let him leave in peace.', trust: 1,
        steps: [0, 1, 2].map(i => ({ type: 'talk', who: 'villager' + i, at: SPOTS.village[i], label: 'Ask to sign', text: () => `Petition signatures (${i}/3)`, async scene(c) {
          const lines = [['Is he… nice? Sena says he’s nice.', 'Fine. I’ll sign.'], ['He watched our bonfire? From the trees? …That’s kind of sweet.', 'Give me the leaf.'], ['I don’t trust sky-things. But I trust you, Kristi.', 'There. Signed.']][i];
          await c.say('Fairy', lines[0], { cls: 'sena' }); await c.say('Fairy', lines[1], { cls: 'sena' });
        } })) },
      { id: 'candles', title: 'Light candles at the prayer stones', desc: 'Three glow-candles for his feast day. He doesn’t know you’re doing this.', bond: 1,
        steps: [{ type: 'collect', kind: 'petal', at: ring(SPOTS.prayer, 1.6, 3, 0.5), label: 'Light', text: (n, N) => `Candles (${n}/${N})` }] },
    ],
    async evening(c) {
      await c.narrate('Kirubel pats his pockets. Then pats them again. His face goes pale.', 3000);
      await c.say(B, 'My hand cross. It was here. It was right here —');
      await c.calmTest(['Kirubel, calm down, it’s just a—', 'Breathe. Let’s retrace your steps. Together.'],
        async () => { await c.say(B, 'It’s not just anything.'); await c.narrate('They find it under his blanket. He doesn’t say much for a while.', 3000); },
        async () => { await c.narrate('Workbench. Wreck. Prayer stones. Blanket. There — under the moss blanket.', 3200); await c.say(B, 'You were calm for me. Thank you.'); c.S.bond += 1; }, 'his lost cross');
    },
    question: 4,
    night: [['', 'For mercy given, and mercy received.'], ['', 'And thank You for her. I keep saying it. I keep meaning it.']],
  },

  // ─────────────────────────── DAY 7 ───────────────────────────
  7: {
    title: 'Day 7', sub: 'Four nights until the full moon.',
    intro: 'Heavy clouds sit on the horizon. The air feels like a held breath.',
    morning: [CROSS, ['', 'There is a storm coming. Let it pass gently.'], ['', 'And if it doesn’t, let us be gentle with each other.']],
    async afterPrayer(c) {
      await c.say(B, 'The hull is almost sealed. Four more nights. I can feel it.');
      await c.say(K, 'Don’t rush it.');
      await c.say(B, 'I’m not rushing.');
      await c.say(L, '*doubtful chirp*');
    },
    hint: 'Lumi keeps disappearing toward a ring of glowing mushrooms far to the east.',
    fragment: 'ring',
    dayLength: 460,
    tasks: [
      parts(V(55, 60), V(-60, -60)),
      { id: 'tie', title: 'Tie down the ship’s hull', desc: 'Vines and patience. If the wind comes, this could save days of work.',
        steps: [{ type: 'hold', at: V(43, -48), secs: 6, label: 'Hold to tie', text: () => 'Tie down the hull', effect: 'tie' }] },
      { id: 'moss', title: 'Gather dry moss', desc: 'For bedding, for tea, for anything. It will be a wet night.',
        steps: [{ type: 'collect', kind: 'wood', at: ring(V(-15, -45), 4, 3), label: 'Gather', text: (n, N) => `Dry moss (${n}/${N})` }] },
      { id: 'warka7', title: 'Check on Grandmother Warka', desc: 'Old trees feel storms coming before anyone else.',
        steps: [{ type: 'talk', who: 'warka', at: SPOTS.warka, radius: 5.5, label: 'Speak to Warka', text: () => 'Visit Grandmother Warka', async scene(c) {
          await c.say(WA, 'A storm is coming, little one. Not only in the sky.');
          await c.say(WA, 'When it breaks what you built, remember: the building was never the point. The builders were.');
        } }] },
    ],
    event: { at: 0.45, async run(c) {
      c.W.setStorm(1); c.W.lightning(); c.A.crash();
      c.UI.toast('The storm breaks!', 3000);
      await c.narrate('The sky cracks open. Rain hammers the forest.', 2400);
      if (!c.done('tie')) { c.S.ship = Math.max(0, c.S.ship - 2); c.D.reflect.storm = 'hurt'; }
      else { c.D.reflect.storm = 'held'; }
      c.addTask({ id: 'shelter', title: 'Shelter the ship parts', desc: '', urgent: true,
        steps: [{ type: 'holds', at: [c.V(35, -50), c.V(47, -39), c.V(44, -53)], secs: 2.5, label: 'Hold to cover', text: (n, N) => `Shelter the parts (${n}/${N})` }] });
    } },
    async evening(c) {
      c.W.setStorm(0.4);
      if (c.D.reflect.storm === 'hurt') {
        await c.narrate('A branch has come down across the hull. Days of work, crushed.', 3200);
        c.S.restless += 3;
      } else {
        await c.narrate('The vines held. The hull is battered, but whole.', 3000);
        c.S.restless += 1;
      }
      if (!c.done('shelter')) { c.S.ship = Math.max(0, c.S.ship - 1); await c.narrate('Some of the parts they stacked are lost in the mud.', 2600); }
      await c.say(B, 'Four nights. FOUR. And now this. I should have tied everything down myself, I should have —');
      await c.calmTest(['Why didn’t you tie it down then?!', 'Breathe, Kirubel. We’ll fix it together. One thing, then the next.'],
        () => c.say(B, '…You’re right. I should have. I’m sorry.'),
        async () => { c.S.restless -= 2; await c.say(B, '…You sound like me. On a good day.'); await c.say(K, 'Today’s not a good day. So I’ll be you for both of us.'); }, 'the storm damage');
    },
    question: 5,
    night: [['', 'Even in the storm. Especially in the storm.'], ['', 'Thank You that she stayed dry. Thank You that she stayed.']],
  },

  // ─────────────────────────── DAY 8 ───────────────────────────
  8: {
    title: 'Day 8', sub: 'Three nights until the full moon.',
    intro: 'The storm has washed everything clean. The forest is glittering.',
    morning: [CROSS, PRAISE, ['', 'For the morning after the storm. There is always one.']],
    async afterPrayer(c) {
      await c.say(B, 'You’ve watched me pray for eight days now. Do you want to learn a word? Just one.');
      await c.say(K, 'Only if you don’t laugh at my accent.');
      await c.say(B, 'I would never.', { sub: 'He is clearly already trying not to laugh.' });
    },
    hint: 'Lumi keeps flying to the big round rock at the far north edge of the forest.',
    fragment: 'ridge',
    tasks: [
      parts(V(-75, 45), V(25, -80)),
      { id: 'word', title: 'Learn a word from Kirubel', desc: 'Just one word. In his language. Maybe two.', bond: 1,
        steps: [{ type: 'talk', who: 'kirubel', label: 'Learn a word', text: () => 'Learn a word at his camp', async scene(c) {
          const ch = await c.choose(['ሰላም — Selam (peace)', 'አመሰግናለሁ — Amesegnalehu (thank you)', 'እግዚአብሔር — Egziabher (God)']);
          const w = ['Selam', 'Amesegnalehu', 'Egziabher'][ch]; c.S.flags.word = w;
          await c.say(K, w + '?');
          await c.say(B, ch === 1 ? 'Perfect. Almost perfect. Amesegnalehu.' : 'Perfect. That’s exactly right.');
          await c.say(K, 'You’re smiling.');
          await c.say(B, 'Because now you can say it back to me. Tonight. If you want.');
        } }] },
      { id: 'bark', title: 'Help Grandmother Warka shed old bark', desc: 'After storms she sheds. It has to come away on its own, with a little help.',
        steps: [{ type: 'hold', at: WARKA_ROOTS, secs: 6, label: 'Hold gently', text: () => 'Ease the old bark away', effect: 'calmIfSteady' }] },
      { id: 'speech', title: 'Practise what to say to the Elder', desc: 'Sena insists on playing the Elder. She has a fake beard. It’s moss.', trust: 1,
        steps: [{ type: 'talk', who: 'sena', at: SPOTS.sena, label: 'Practise with Sena', text: () => 'Find Sena', async scene(c) {
          await c.say(SE, '*deep voice* Kristi. Why should the sky-thing be shown mercy.');
          const ch = await c.choose(['Because he’s done nothing wrong.', 'Because I trust him. And you trust me.']);
          if (ch === 1) { await c.say(SE, '*normal voice* Oh. Oh, that’s good. That’s really good.'); c.S.trust += 1; }
          else await c.say(SE, '*deep voice* Hm. True, but the Elder will want more. *normal voice* Try again tomorrow.');
        } }] },
    ],
    async evening(c) {
      c.G.placePlayer(c.SPOTS.warka.x + 4, c.SPOTS.warka.z - 5); c.W.setTime(0.8);
      c.G.place(c.W.kirubel, c.SPOTS.warka.x + 5.2, c.SPOTS.warka.z - 4, c.SPOTS.warka.x + 4, c.SPOTS.warka.z - 5); c.W.kirubel.setPose('stand');
      c.G.faceKristi(c.W.kirubel.group.position);
      c.twoShot();
      await c.UI.fade(false, 700);
      await c.narrate('That evening he asks to see Grandmother Warka. They sit beneath her branches as the stars come out.', 3600);
      await c.say(B, 'My turn to ask a question. Only one. And you can only answer yes, no, or…');
      await c.say(K, 'You’ll have to find out?');
      await c.say(B, 'Exactly.');
      await c.say(B, 'If the ship flies… on the full moon… would you come with me?');
      const ch = await c.choose(['Yes.', 'You’ll have to find out.']);
      if (ch === 0) { c.S.flags.saidYes = true; await c.narrate('He doesn’t say anything. He doesn’t have to.', 2800); }
      else { await c.say(B, '…That’s fair. That’s very fair.'); await c.narrate('He is smiling anyway.', 2400); }
      c.S.bond += 1;
    },
    eveningAway: true,
    question: 6,
    night: [['', 'For the question I asked, and the one she answered.'], ['', c => c.S.flags.word ? 'She said ' + c.S.flags.word + ' back to me tonight. I will remember it.' : 'Whatever happens, I will remember this forest.']],
  },

  // ─────────────────────────── DAY 9 ───────────────────────────
  9: {
    title: 'Day 9', sub: 'Tomorrow is the full moon.',
    intro: 'Neither of them says it out loud. Tomorrow.',
    morning: [CROSS, ['', 'One more day. Let it be enough.'], ['', 'Whatever happens tomorrow, let us not waste today.']],
    async afterPrayer(c) {
      if (c.S.miraKind >= 2 && !c.S.flags.core) {
        c.W.mira.at(c.G.P.pos.x + 2, c.G.P.pos.z + 1.5, c.G.P.pos.x, c.G.P.pos.z);
        c.twoShot(c.W.mira.group.position);
        await c.say(MI, 'Here. Take it before I change my mind.');
        await c.narrate('In her tiny arms: the star-core, glowing cyan.', 2600);
        await c.say(MI, 'I thought he’d hurt you. Everyone said sky-things hurt people. But you’ve been… happier. Since he fell.');
        await c.say(MI, 'And you were kind to me. Even when I wasn’t.');
        await c.say(K, 'Thank you, Mira. Really.');
        await c.say(MI, 'Don’t make it weird.');
        c.S.flags.core = true; c.D.reflect.mira = 'returned';
        c.W.mira.group.visible = false; c.A.sparkle();
        await c.say(B, 'The core! Kristi, the core!');
      } else if (!c.S.flags.core) {
        await c.say(B, 'Without the core, none of the rest matters. Mira must have hidden it somewhere.');
        await c.say(L, '*chirp!*', { sub: 'Lumi keeps pointing west, toward the daisy meadow.' });
      }
    },
    hint: 'Lumi keeps circling the top of the old dead tree in the northwest.',
    fragment: 'deadTree',
    tasks: [
      parts(V(80, -35), V(-35, 40)),
      { id: 'core', title: 'Find the stolen core', desc: 'Mira hid it somewhere. Lumi keeps pointing toward the daisy meadow.', needsCore: true,
        steps: [{ type: 'collect', kind: 'core', at: [V(SPOTS.meadow.x + 2.4, SPOTS.meadow.z + 1)], label: 'Take the core', text: () => 'Find the star-core', effect: 'core' }] },
      { id: 'ask', title: 'Ask the Elder for mercy', desc: 'He will go tomorrow either way. But how he goes — that the Elder can decide.',
        steps: [{ type: 'talk', who: 'elder', at: SPOTS.council, label: 'Speak to the Elder', text: () => 'Go to the council stone', async scene(c) {
          await c.say(EL, 'Kristi. You have come to ask me something.');
          const words = c.S.trust >= 3 ? 'Because I trust him. And you have always trusted me.' : 'Because he has done nothing wrong.';
          await c.say(K, 'Let him leave in peace tomorrow. Or… let him stay, if he chooses. ' + words);
          if (c.S.trust >= 3) { c.S.flags.elderBlessing = true; await c.say(EL, '…The petition. The petals. The way you spoke to me at the crash.'); await c.say(EL, 'Very well. Tomorrow, the forest will not make him do anything. He may choose.'); }
          else { await c.say(EL, 'The forest has its ways, child. He goes through the path, or the forest decides for him.'); await c.say(EL, 'I am sorry. I am old, and I am afraid. Both are slow to change.'); }
        } }] },
      leaves(V(20, -55), 4, 'Pack moonleaf for his journey', 'Enough for the whole trip home. However long that is.'),
    ],
    async evening(c) {
      await c.narrate('The ship is almost whole. It hums when the wind passes over it.', 3000);
      await c.say(B, 'Kristi. What if it doesn’t work tomorrow?');
      await c.calmTest(['Then I… I don’t know! Don’t ask me that!', 'Then we’ll be here. Together. That’s not nothing.'],
        () => c.say(B, 'You’re right. I shouldn’t have asked.'),
        () => c.say(B, 'No. That’s not nothing at all.'), 'his doubt');
      await c.narrate('Grandmother Warka’s voice drifts across the clearing, soft as wind:', 2600);
      await c.say(WA, 'Tomorrow will ask three things of you, little one. Calm when it breaks. Hands that finished what they started. And a heart that knows how to kneel beside his.');
    },
    night: [['', 'Tomorrow is in Your hands. So is she.'], ['', 'Thank You for every one of these ten days.']],
  },

  // ─────────────────────────── DAY 10 ───────────────────────────
  10: {
    title: 'Day 10', sub: 'The full moon rises tonight.',
    intro: 'The last morning. He prays for a very long time.',
    morning: [CROSS, PRAISE, ['', 'For the forest. For the fall. For her.'], ['', 'Whatever tonight brings, it has already been worth it.']],
    async afterPrayer(c) {
      await c.say(B, 'Tonight, then.');
      await c.say(K, 'Tonight.');
      await c.say(L, '*very quiet chirp*');
    },
    hint: null,
    fragment: null,
    dayLength: 360,
    tasks: [
      parts(V(-10, -50), V(60, 0)),
      { id: 'core10', title: 'Find the stolen core', desc: 'There is still time. Lumi keeps pointing toward the daisy meadow.', needsCore: true,
        steps: [{ type: 'collect', kind: 'core', at: [V(SPOTS.meadow.x + 2.4, SPOTS.meadow.z + 1)], label: 'Take the core', text: () => 'Find the star-core', effect: 'core' }] },
      { id: 'bye', title: 'Say goodbye to Grandmother Warka', desc: 'Just in case. You don’t want to think about just in case.',
        steps: [{ type: 'talk', who: 'warka', at: SPOTS.warka, radius: 5.5, label: 'Speak to Warka', text: () => 'Visit Grandmother Warka', async scene(c) {
          await c.say(WA, 'You came to say goodbye. To whom, I wonder.');
          await c.say(WA, 'Every time a child says she does not believe in fairies, somewhere a fairy fades. Did you know that?');
          await c.say(WA, 'He believes in you, little one. I have watched. You will not fade.');
        } }] },
      { id: 'sena10', title: 'Sena wants to see you', desc: 'She says it’s urgent. With Sena, that could mean anything.',
        steps: [{ type: 'talk', who: 'sena', at: SPOTS.sena, label: 'Talk to Sena', text: () => 'Find Sena', async scene(c) {
          await c.say(SE, 'Whatever happens tonight. Whatever you choose. I’m your best friend. That’s not changing.');
          await c.say(SE, 'Also I’m coming to watch. Obviously.');
        } }] },
    ],
  },
};

// The Seven Questions: one each evening, Days 2–8. She asks; he may only answer yes, no, or "you'll have to find out."
export const QUESTIONS = [
  [ { q: 'What’s something you’re passionate about that most people don’t know?', a: ['You’ll have to find out.', '…Fine. A hint. It has strings. It’s older than both of us. And you’ve already heard a little of it, every morning.'] },
    { q: 'Do you miss home?', a: ['Yes.', '…Less than I thought I would.'] },
    { q: 'Are you scared of the Elder?', a: ['No.', '…Should I be?'] } ],
  [ { q: 'What’s something you hope I don’t ask you?', a: ['Nothing.', 'You can ask me anything. That’s the honest answer.'] },
    { q: 'Do you ever actually sleep?', a: ['You’ll have to find out.'] },
    { q: 'Is Lumi a girl?', a: ['Yes.', 'And she’s the boss of both of us.'] } ],
  [ { q: 'What’s something you like that other people hate?', a: ['…That’s not a yes or no question.', 'But: honesty. Most people only like it until it’s about them.'] },
    { q: 'Do aliens dance?', a: ['You’ll have to find out.'] },
    { q: 'Was the bonfire really like home?', a: ['Yes.', 'Better. Home didn’t have you in it.'] } ],
  [ { q: 'Are you afraid of leaving?', a: ['Yes.'] },
    { q: 'Did you mean it, about our worlds not being so far apart?', a: ['Yes.'] },
    { q: 'Would you forgive Mira?', a: ['Yes.', 'I already have.'] } ],
  [ { q: 'Do you think about me when you pray?', a: ['Yes.', 'Every time. Even when I get lazy praying for myself, remembering I pray for you keeps me going.'] },
    { q: 'Is your home planet pretty?', a: ['Yes.', 'Not as pretty as this forest. Don’t tell it I said that.'] },
    { q: 'Do you like the gold stars?', a: ['Yes.', 'I’m building a whole constellation.'] } ],
  [ { q: 'If the ship works, will you go?', a: ['You’ll have to find out.'] },
    { q: 'Do you trust me?', a: ['Yes.'] },
    { q: 'Were you scared, in the storm?', a: ['Yes.', 'Less, once you were there.'] } ],
  [ { q: 'Would you stay, if you could?', a: ['…', 'You’ll have to find out. But Kristi — I’m thinking about it. More than I should.'] },
    { q: 'Are you happy here?', a: ['Yes.'] },
    { q: 'Is this the last question?', a: ['Yes.', 'Make it count. …Oh. You just did.'] } ],
];
