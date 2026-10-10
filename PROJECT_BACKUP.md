# Where the Stars Fell — project backup

Private 3D mobile PWA love story, built by Kirubel as a gift for Kristi.
Attach this file (plus the zip) when continuing in a new chat.

## Status
- **Phase 1 done:** crash night (prologue) + Day 1 (morning prayer, day planner, 4 tasks, evening, night prayer, day summary), star fragment 1, saving, offline PWA.
- **Next:** Day 2 onward (10 days total to the full moon), the Elder, Mira (rival), Grandmother Warka (tree spirit), Seven Questions side quest, festivals, both endings, final constellation message.

## Story decisions (from Kirubel)
- Alien **Kirubel** crash-lands in the fairy forest; fairy **Kristi** fearlessly helps him while her kind fears outsiders.
- Kirubel: almost human (silver-blue skin, cyan markings, pointed ears), restless, **Orthodox Christian**, prays every morning and night facing east (sign of the cross, bows, small hand cross saved from the crash). Speaks a few Ge'ez/Amharic words with English meanings.
- Kristi: forest-born fairy, **almost human-sized and different from the other fairies** (others are tiny). Working on time management/procrastination (overcommits, then runs on empty) and patience/calm when things go wrong. Frame with warmth, never as a lesson aimed at her.
- 3D, long game (10+ days), exploration + daily rhythm, English only, virtual joystick, she can fly.
- Two endings (happy / sad) decided by hidden **Steadiness** and **Calm**; Kirubel's hidden **Restlessness** is lowered by prayer.
- Prayer: cutscene each morning and night; she can wait beside him (+Calm, lowers his Restlessness) or leave (more time); later she can join him (key to the happy ending).
- Hidden message: one star fragment per day with a short line, full message in starlight after the happy ending. Lines live in `src/personal.js` (Kirubel writes/approves them; nothing signed as him goes in without his OK).
- Mood: dark and magical with warm light; Kristi = warm gold/pink, Kirubel = cyan/silver; moon grows each night.
- Private: noindex, robots disallow, saves only on her phone (localStorage), no backend.

## Cast names (Claude's placeholders — rename freely)
Sena (best friend, tiny pink fairy), Lumi (glowing companion creature), Elder Thorne, Mira (rival), Grandmother Warka (tree spirit, big sycamore by Kristi's home).

## In-jokes from their chats used so far
Nurse/"doctor's orders", gold star for following orders, "I'm not from around here", squad/secret-keeping (Sena), begena-style prayer music, ሰላም ለኪ, "one thing, then the next" (his advice), fairy intuition.
Saved for later: Sleep Focus Spell, Seven Questions game (yes / no / you'll have to find out), "we'll destroy your spaceship", fairy-belief line, magician, constellation of gold stars, Meskel & Kidane Mihret festivals, "battery 1%, faith 100".

## Tech
- Three.js (bundled with esbuild into `site/game.js`), synthesized Web Audio (no audio files), procedural low-poly models.
- `src/main.js` engine (input, physics, camera, interactables, game API `G`), `src/world.js` scene/characters, `src/story.js` script (async scenes), `src/ui.js` overlays, `src/audio.js`, `src/state.js` saves, `src/personal.js` personal lines.
- Checkpoints: `prologue`, `day1_morning`, `day1_day`, `day1_end`. Testing: add `?debug=1&cp=day1_day&autostart=new` to the URL.
- Build: `npm install` then `npm run build`. Deploy: drag the `site` folder onto Netlify (or push to a private GitHub repo linked to Netlify). Bump `VERSION` in `site/sw.js` on each release so phones pick up the update.
