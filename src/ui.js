import { tick } from './audio.js';

const $ = (s) => document.querySelector(s);
const el = {
  hud: $('#hud'), controls: $('#controls'), objective: $('#objective'), objTitle: $('#objective .obj-title'), objList: $('#objective .obj-list'),
  compass: $('#compass'), arrow: $('#compass .arrow'), dist: $('#compass .dist'), energy: $('#energy'), energyFill: $('#energy .fill'),
  act: $('#btnAct'), actLbl: $('#btnAct .lbl'), planner: $('#btnPlanner'),
  tap: $('#tapCatcher'), dialog: $('#dialog'), dName: $('#dialog .name'), dText: $('#dialog .text'), dSub: $('#dialog .sub'),
  choices: $('#choices'), narr: $('#narr'), prayer: $('#prayer'), pGe: $('#prayer .ge'), pEn: $('#prayer .en'),
  toast: $('#toast'), card: $('#card'), cardInner: $('#card .inner'), fade: $('#fade'), hold: $('#holdRing'), holdFg: $('#holdRing .fg'),
};
const show = (e, on = true) => e.classList.toggle('hidden', !on);
const wait = (ms) => new Promise(r => setTimeout(r, ms));
const esc = (s) => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// waits for one tap on the catcher (or the Enter / Space key)
function nextTap() {
  return new Promise(res => {
    show(el.tap, true);
    const done = (e) => { e && e.preventDefault(); el.tap.removeEventListener('pointerdown', done); window.removeEventListener('keydown', key); show(el.tap, false); res(); };
    const key = (e) => { if (e.key === 'Enter' || e.key === ' ' || e.key === 'e') done(e); };
    setTimeout(() => { el.tap.addEventListener('pointerdown', done); window.addEventListener('keydown', key); }, 120);
  });
}

export const UI = {
  cutscene(on) { show(el.controls, !on); show(el.hud, !on); },
  showHUD(on) { show(el.hud, on); show(el.controls, on); },

  async say(name, text, opts = {}) {
    show(el.dialog, true); el.dialog.classList.remove('ready');
    el.dName.textContent = name || ''; el.dName.className = 'name ' + (opts.cls || (name || '').toLowerCase());
    el.dSub.textContent = opts.sub || '';
    el.dText.textContent = '';
    let skip = false, finished = false;
    const skipper = () => { skip = true; };
    show(el.tap, true); el.tap.addEventListener('pointerdown', skipper);
    const kd = (e) => { if (e.key === 'Enter' || e.key === ' ') skip = true; }; window.addEventListener('keydown', kd);
    for (let i = 0; i < text.length && !skip; i++) {
      el.dText.textContent = text.slice(0, i + 1);
      if (i % 3 === 0) tick();
      await wait(/[.,!?…—]/.test(text[i]) ? 70 : 22);
    }
    el.tap.removeEventListener('pointerdown', skipper); window.removeEventListener('keydown', kd);
    el.dText.textContent = text; finished = true;
    el.dialog.classList.add('ready');
    await nextTap();
    if (!opts.keep) show(el.dialog, false);
    return finished;
  },

  choose(options) {
    return new Promise(res => {
      el.choices.innerHTML = ''; show(el.choices, true);
      options.forEach((o, i) => {
        const b = document.createElement('button'); b.textContent = o;
        b.addEventListener('click', () => { show(el.choices, false); show(el.dialog, false); res(i); }, { once: true });
        el.choices.appendChild(b);
      });
    });
  },

  async narrate(text, ms = 0) {
    el.narr.textContent = text; show(el.narr, true);
    el.narr.style.animation = 'none'; void el.narr.offsetWidth; el.narr.style.animation = '';
    if (ms) await wait(ms); else { await wait(700); await nextTap(); }
    show(el.narr, false);
  },

  async prayerLine(ge, en, ms = 0) {
    el.pGe.textContent = ge || ''; el.pEn.textContent = en || ''; show(el.prayer, true);
    el.prayer.style.animation = 'none'; void el.prayer.offsetWidth; el.prayer.style.animation = '';
    if (ms) await wait(ms); else { await wait(1200); await nextTap(); }
    show(el.prayer, false);
  },

  toast(text, ms = 3200) {
    el.toast.textContent = text; show(el.toast, true);
    clearTimeout(UI._tt); UI._tt = setTimeout(() => show(el.toast, false), ms);
  },

  objective(title, list) {
    if (!title) { el.objective.classList.add('empty'); el.objTitle.textContent = ''; el.objList.innerHTML = ''; return; }
    el.objective.classList.remove('empty');
    el.objTitle.textContent = title;
    el.objList.innerHTML = (list || []).map(l => `<li class="${l.done ? 'done' : ''}">${esc(l.text)}</li>`).join('');
  },

  compass(angle, dist) {
    if (angle === null) { show(el.compass, false); return; }
    show(el.compass, true);
    el.arrow.style.transform = `rotate(${angle - 90}deg)`;
    el.dist.textContent = Math.round(dist) + ' m';
  },

  energy(frac, low) { el.energyFill.style.width = Math.max(0, frac * 100) + '%'; el.energy.classList.toggle('low', !!low); },

  actLabel(text) { if (!text) { show(el.act, false); return; } el.actLbl.textContent = text; show(el.act, true); },

  holdRing(frac) {
    if (frac === null) { show(el.hold, false); return; }
    show(el.hold, true); el.holdFg.style.strokeDashoffset = String(276.5 * (1 - frac));
  },

  plannerButton(on) { show(el.planner, on); },

  async fade(toBlack, ms = 1000) {
    el.fade.style.transitionDuration = ms + 'ms';
    el.fade.style.opacity = toBlack ? '1' : '0';
    await wait(ms);
  },

  // generic card; returns the index of the clicked button
  card(html, buttons = ['Continue']) {
    return new Promise(res => {
      el.cardInner.innerHTML = html + `<div class="btns">${buttons.map((b, i) => `<button class="big ${i ? 'ghost' : ''}" data-i="${i}">${esc(b)}</button>`).join('')}</div>`;
      show(el.card, true);
      el.cardInner.querySelectorAll('.btns button').forEach(b => b.addEventListener('click', () => { show(el.card, false); res(+b.dataset.i); }, { once: true }));
    });
  },

  async dayCard(title, sub) {
    el.cardInner.innerHTML = `<div style="text-align:center"><h2>${esc(title)}</h2><h3>${esc(sub)}</h3></div>`;
    show(el.card, true); await wait(900);
    await new Promise(res => { const done = () => { el.card.removeEventListener('pointerdown', done); window.removeEventListener('keydown', done); res(); };
      el.card.addEventListener('pointerdown', done); window.addEventListener('keydown', done); });
    show(el.card, false);
  },

  fragmentCard(n, line) {
    return UI.card(`<div class="fragment"><div class="glyph">✦</div><h3>Star fragment ${n} of 10</h3><blockquote>“${esc(line)}”</blockquote></div>`, ['Keep it close']);
  },

  // the day planner: pick tasks; more than `slots` means overcommitting
  planner(tasks, slots) {
    return new Promise(res => {
      const sel = new Set(tasks.filter(t => t.required).map(t => t.id));
      const render = () => {
        const n = sel.size;
        const suns = Array.from({ length: Math.max(slots, n) }, (_, i) => `<span class="${i >= slots ? 'over' : ''}">${i < n ? '☀' : '○'}</span>`).join('');
        el.cardInner.innerHTML = `<h2>Kristi's Day</h2><h3>The day holds ${slots} things. Pick what matters.</h3>
          <div class="suns">${suns}</div>
          <div class="tasks">${tasks.map(t => `<div class="task ${sel.has(t.id) ? 'on' : ''}" data-id="${t.id}"><div class="box">${sel.has(t.id) ? '✓' : ''}</div><div><b>${esc(t.title)}${t.required ? ' <em class="must">must do</em>' : ''}</b><span>${esc(t.desc)}</span></div></div>`).join('')}</div>
          <p class="warn">${n > slots ? 'That is more than one day can hold. Kristi will run low on energy… but she can try.' : ''}</p>
          <div class="btns"><button class="big" id="planGo" ${n ? '' : 'disabled'}>Start the day</button></div>`;
        el.cardInner.querySelectorAll('.task').forEach(d => d.addEventListener('click', () => {
          const id = d.dataset.id; if (tasks.find(t => t.id === id).required) return; sel.has(id) ? sel.delete(id) : sel.add(id); tick(); render();
        }));
        const go = el.cardInner.querySelector('#planGo');
        go.addEventListener('click', () => { if (!sel.size) return; show(el.card, false); res([...sel]); });
      };
      render(); show(el.card, true);
    });
  },


  // Sleep Focus Spell: touch the five stars in order, slowly. Rushing breaks the spell.
  spell() {
    return new Promise(res => {
      const pts = Array.from({ length: 5 }, (_, i) => { const a = -Math.PI / 2 + i * (Math.PI * 4 / 5); return [50 + Math.cos(a) * 34, 50 + Math.sin(a) * 34]; });
      let next = 0, last = 0, slips = 0;
      el.cardInner.innerHTML = `<h2>Sleep Focus Spell</h2><h3>Touch the stars in order. Gently — one breath each.</h3>
        <div class="spell"><svg viewBox="0 0 100 100"><polyline class="trail" points=""/></svg>${pts.map(([x, y], i) => `<button class="sp" data-i="${i}" style="left:${x}%;top:${y}%">${i + 1}</button>`).join('')}</div>
        <p class="warn" id="spellMsg"></p>`;
      show(el.card, true);
      const trail = el.cardInner.querySelector('.trail'), msg = el.cardInner.querySelector('#spellMsg');
      const btns = [...el.cardInner.querySelectorAll('.sp')];
      const paint = () => { btns.forEach((b, i) => b.classList.toggle('lit', i < next)); btns.forEach((b, i) => b.classList.toggle('next', i === next));
        trail.setAttribute('points', pts.slice(0, next).map(p => p.join(',')).join(' ')); };
      paint();
      btns.forEach(b => b.addEventListener('pointerdown', (e) => {
        e.preventDefault(); const i = +b.dataset.i, now = performance.now();
        if (i !== next) return;
        if (next > 0 && now - last < 650) { slips++; next = 0; msg.textContent = 'Too fast — the spell slips. Gently…'; tick(); paint(); return; }
        last = now; next++; msg.textContent = ''; tick(); paint();
        if (next === 5) { setTimeout(() => { show(el.card, false); res({ slips }); }, 700); }
      }));
    });
  },

  // the ending: found star fragments rise into a constellation, then the final message
  async constellation(lines, finalMsg, sig) {
    const sky = document.createElement('div'); sky.id = 'constellation';
    const n = 10, pts = Array.from({ length: n }, (_, i) => { const t = i / n * Math.PI * 2; // a heart drawn in stars
      const x = 16 * Math.pow(Math.sin(t), 3), y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
      return [50 + x * 2.3, 44 - y * 2.3]; });
    sky.innerHTML = `<div class="cbox"><svg viewBox="0 0 100 100" preserveAspectRatio="none"><polyline class="cl" points=""/></svg>
      ${pts.map(([x, y], i) => `<div class="cs ${lines[i] ? '' : 'dim'}" style="left:${x}%;top:${y}%"></div>`).join('')}</div>
      <div class="cline"></div><div class="cfinal"></div>`;
    document.body.appendChild(sky);
    await wait(50); sky.classList.add('on');
    const stars = [...sky.querySelectorAll('.cs')], cl = sky.querySelector('.cl'), line = sky.querySelector('.cline');
    const lit = [];
    for (let i = 0; i < n; i++) {
      await wait(450); stars[i].classList.add('lit'); lit.push(pts[i]);
      cl.setAttribute('points', lit.map(p => p.join(',')).join(' '));
      if (lines[i]) { line.textContent = '“' + lines[i] + '”'; line.classList.remove('show'); void line.offsetWidth; line.classList.add('show'); await wait(2600); }
    }
    cl.setAttribute('points', [...pts, pts[0]].map(p => p.join(',')).join(' '));
    line.classList.remove('show'); await wait(900);
    sky.classList.add('end');
    const fin = sky.querySelector('.cfinal');
    fin.innerHTML = `<p>${esc(finalMsg)}</p><span>${esc(sig)}</span>`; fin.classList.add('show');
    await wait(2500);
    await new Promise(r => { const done = () => { sky.removeEventListener('pointerdown', done); r(); }; sky.addEventListener('pointerdown', done); });
    sky.classList.remove('on'); await wait(900); sky.remove();
  },

  // read-only view of today's plan (planner button during the day)
  showPlan(lines) { return UI.card(`<h2>Today</h2><ul class="reflect">${lines.map(l => `<li><i>${l.done ? '●' : '○'}</i>${esc(l.text)}</li>`).join('')}</ul>`, ['Back']); },
};
export { wait };
