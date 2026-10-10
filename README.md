# Where the Stars Fell — complete game

**Put it online (2 minutes):** go to app.netlify.com/drop and drag the `site` folder onto the page. (Or deploy the `site` folder the same way you deploy Lost in Orbit.) If you already deployed Phase 1, deploy over the same site — phones that installed it will update on the next open.

**Open it on her phone:** visit the link, then "Add to Home Screen". It runs full-screen, works offline after the first load, and saves progress on her phone.

**What's inside:** the crash night, ten days before the full moon, the finale, and two endings (a happy ending with two variants, and a sad ending with a "try again from Day 8" option). Roughly 2+ hours of play.

**Your words:** the ten star-fragment lines and the final message are in `src/personal.js`. To change them, edit that file, run `npm install` once and `npm run build`, and redeploy the `site` folder.

**Test any part:** add `?debug=1&cp=d5_morning&autostart=new` to the link (checkpoints: prologue, d1_morning … d10_morning, d1_day … d10_day, finale).
