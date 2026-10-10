# Where the Stars Fell — project backup

Private 3D mobile PWA love story, built by Kirubel as a gift for Kristi.
Attach this file (plus the zip) when continuing in a new chat.

## Status
**Complete game:** prologue (the crash) + Days 1–10 + the full-moon finale + two endings (happy: "go with him" / "ask him to stay"; sad), constellation message, replay of any day, "try again from Day 8".

## How a day works (story.js engine, content in days.js)
1. **Morning prayer** at sunrise. Choices: wait beside him (+Calm, lowers his Restlessness) / slip away (day is 20% longer) / from Day 4, once she has waited 4 times: **kneel and pray with him** (+2 Calm).
2. **Day planner**: 3 sun slots, 4 tasks offered. Picking 4 = overcommitting (wings tire faster, unfinished tasks cost Steadiness).
3. **Free play**: collect / hold-to-heal (rushing = no Calm bonus) / talk tasks; a hidden **star fragment** on a different landmark each day (most need flying); a story **event** mid-day (Day 3 Mira, Day 5 the Elder + stolen core, Day 7 the storm).
4. **Evening**: ship-part progress, his restlessness (≥6 = he rushes and breaks a part), her plan reflection, a **calm test**, then one of the **Seven Questions** (Days 2–8; he answers only yes / no / "you'll have to find out").
5. **Night prayer** (same three choices) → day summary card.

## What decides the ending (finale, night 10)
Happy needs all of: Calm ≥ 10 **and** the calm choice when the engine fails · knelt with him in the final prayer (needs ≥ 6 prayers stayed for) · ship ≥ 12 parts · the star-core recovered (Mira returns it on Day 9 if she was treated kindly twice, otherwise a "Find the stolen core" task appears on Days 9–10) · Steadiness ≥ 6.
"Ask him to stay" is only offered if the Elder gave his blessing on Day 9 (village trust ≥ 3: petals, petition, festival help, staying calm with the Elder, Sena's speech practice).
Thresholds are constants at the top of `src/story.js` and `SHIP_GOAL` in `src/days.js`.

## Story decisions (from Kirubel)
- Alien **Kirubel** (almost human, silver-blue skin, cyan markings, pointed ears), restless, **Orthodox Christian**, prays every morning and night facing east, small hand cross saved from the crash, a few Ge'ez/Amharic words with English meanings.
- Fairy **Kristi**: forest-born, almost human-sized, different from the other (tiny) fairies. Growing in time management (overcommitting, then running on empty) and in patience/calm. Framed with warmth.
- 3D, ~2+ hours, exploration + daily rhythm, English only, virtual joystick, she can fly.
- Hidden message: one star fragment per day (lines in `src/personal.js`), all of them rise into a heart-shaped constellation after the happy ending, followed by `FINAL_MESSAGE` and `SIGNATURE`. Fragment lines and the final message were drafted by Claude in Kirubel's voice at his request (Oct 10); he can edit them anytime.
- Private: noindex, robots disallow, progress saved only on her phone.

## Cast (Claude's names — rename freely in days.js/story.js)
Sena (best friend), Lumi (glowing companion), Elder Thorne, Mira (rival, can be won over), Grandmother Warka (tree spirit), three villager fairies.

## In-jokes used
Nurse/doctor's orders, gold star, "I'm not from around here", squad keeping secrets, begena music, ሰላም ለኪ, "one thing, then the next", Sleep Focus Spell (Day 3 mini-game), "we'll destroy your spaceship" (Kristi, in the "ask him to stay" ending), Seven Questions, fairy-belief line (Warka, Day 10), constellation of gold stars, Meskel/Demera bonfire (Day 4, Golden Daisy Night), Kidane Mihret (Day 6), praying for each other, learning a word (Day 8: Selam / Amesegnalehu / Egziabher).

## Tech
- Three.js bundled with esbuild into `site/game.js`; all sound synthesized with Web Audio; procedural low-poly models.
- `src/main.js` engine (input, physics, camera, interactables, game API `G`), `src/world.js` scene/characters/landmarks/storm/sky-path, `src/story.js` prologue + day engine + finale + endings, `src/days.js` all ten days of content, `src/ui.js` overlays (dialogue, planner, spell, constellation), `src/audio.js`, `src/state.js`, `src/personal.js`.
- Checkpoints: `prologue`, `d{N}_morning`, `d{N}_day`, `finale`, `ending`. Test any point with `?debug=1&cp=d5_morning&autostart=new`.
- Build: `npm install` then `npm run build`. Deploy: drag `site` onto Netlify. Bump `VERSION` in `site/sw.js` each release so installed copies update.
