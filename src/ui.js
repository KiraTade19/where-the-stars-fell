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
      const sel = new Set();
      const render = () => {
        const n = sel.size;
        const suns = Array.from({ length: Math.max(slots, n) }, (_, i) => `<span class="${i >= slots ? 'over' : ''}">${i < n ? '☀' : '○'}</span>`).join('');
        el.cardInner.innerHTML = `<h2>Kristi's Day</h2><h3>The day holds ${slots} things. Pick what matters.</h3>
          <div class="suns">${suns}</div>
          <div class="tasks">${tasks.map(t => `<div class="task ${sel.has(t.id) ? 'on' : ''}" data-id="${t.id}"><div class="box">${sel.has(t.id) ? '✓' : ''}</div><div><b>${esc(t.title)}</b><span>${esc(t.desc)}</span></div></div>`).join('')}</div>
          <p class="warn">${n > slots ? 'That is more than one day can hold. Kristi will run low on energy… but she can try.' : ''}</p>
          <div class="btns"><button class="big" id="planGo" ${n ? '' : 'disabled'}>Start the day</button></div>`;
        el.cardInner.querySelectorAll('.task').forEach(d => d.addEventListener('click', () => {
          const id = d.dataset.id; sel.has(id) ? sel.delete(id) : sel.add(id); tick(); render();
        }));
        const go = el.cardInner.querySelector('#planGo');
        go.addEventListener('click', () => { if (!sel.size) return; show(el.card, false); res([...sel]); });
      };
      render(); show(el.card, true);
    });
  },

  // read-only view of today's plan (planner button during the day)
  showPlan(lines) { return UI.card(`<h2>Today</h2><ul class="reflect">${lines.map(l => `<li><i>${l.done ? '●' : '○'}</i>${esc(l.text)}</li>`).join('')}</ul>`, ['Back']); },
};
export { wait };
