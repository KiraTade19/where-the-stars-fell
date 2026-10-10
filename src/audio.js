// All sound is synthesized live with Web Audio, so the game ships with no audio files.
let ctx = null, master, music, sfx, padGain, nightGain, dayGain;
let muted = false;
let prayerTimer = null;
const pluckCache = new Map();

export function initAudio() {
  if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return; }
  try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return; }
  master = ctx.createGain(); master.gain.value = muted ? 0 : 0.9; master.connect(ctx.destination);
  music = ctx.createGain(); music.gain.value = 0.55; music.connect(master);
  sfx = ctx.createGain(); sfx.gain.value = 0.6; sfx.connect(master);
  startAmbient();
}

export function toggleMute() {
  muted = !muted;
  if (master) master.gain.setTargetAtTime(muted ? 0 : 0.9, ctx.currentTime, 0.1);
  return muted;
}
export const isMuted = () => muted;

// ── Begena-style pluck: Karplus-Strong string with a leather "buzz" ──
function pluckBuffer(freq) {
  const key = Math.round(freq * 10);
  if (pluckCache.has(key)) return pluckCache.get(key);
  const sr = ctx.sampleRate, dur = 4.5, N = Math.floor(sr * dur);
  const buf = ctx.createBuffer(1, N, sr), d = buf.getChannelData(0);
  const p = Math.max(2, Math.round(sr / freq));
  const ring = new Float32Array(p);
  for (let i = 0; i < p; i++) ring[i] = Math.random() * 2 - 1;
  let idx = 0, peak = 0;
  for (let i = 0; i < N; i++) {
    const a = ring[idx], b = ring[(idx + 1) % p];
    const v = (a + b) * 0.5 * 0.9985;
    ring[idx] = v; idx = (idx + 1) % p;
    const buzz = Math.tanh(v * 5) * 0.4;           // the begena's buzzing hum
    const s = (v * 0.55 + buzz) * Math.min(1, i / 60);
    d[i] = s; if (Math.abs(s) > peak) peak = Math.abs(s);
  }
  for (let i = 0; i < N; i++) d[i] /= (peak || 1);
  pluckCache.set(key, buf);
  return buf;
}

function pluck(freq, when = 0, vol = 0.35) {
  if (!ctx) return;
  const src = ctx.createBufferSource(); src.buffer = pluckBuffer(freq);
  const g = ctx.createGain(); g.gain.value = vol;
  const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1800;
  src.connect(lp); lp.connect(g); g.connect(music);
  src.start(ctx.currentTime + when);
}

// Low, slow pentatonic phrases in the spirit of begena (tezeta-like scale)
const SCALE = [73.42, 82.41, 92.5, 110.0, 123.47, 146.83, 164.81];
const PHRASES = [[0, 2, 3, 2], [3, 4, 3, 1], [0, 3, 5, 3], [2, 1, 0, 0], [5, 4, 3, 2], [3, 3, 1, 0]];

export function startPrayerMusic() {
  if (!ctx || prayerTimer) return;
  let n = 0;
  const play = () => {
    const ph = PHRASES[n++ % PHRASES.length];
    ph.forEach((step, i) => pluck(SCALE[step], i * 0.9, i === 0 ? 0.42 : 0.3));
    pluck(SCALE[0] / 2, 0, 0.25); // drone root
  };
  play();
  prayerTimer = setInterval(play, 3600);
  if (padGain) padGain.gain.setTargetAtTime(0.012, ctx.currentTime, 1);
}
export function stopPrayerMusic() {
  if (prayerTimer) { clearInterval(prayerTimer); prayerTimer = null; }
  if (padGain && ctx) padGain.gain.setTargetAtTime(0.035, ctx.currentTime, 2);
}

// ── Ambient bed: soft pad + crickets at night, birds by day ──
function startAmbient() {
  padGain = ctx.createGain(); padGain.gain.value = 0.035;
  const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 600;
  [110, 110.6, 164.8].forEach(f => {
    const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.value = f; o.connect(lp); o.start();
  });
  lp.connect(padGain); padGain.connect(master);
  nightGain = ctx.createGain(); nightGain.gain.value = 1; nightGain.connect(sfx);
  dayGain = ctx.createGain(); dayGain.gain.value = 0; dayGain.connect(sfx);
  setInterval(() => { if (Math.random() < 0.7) cricket(); }, 650);
  setInterval(() => { if (Math.random() < 0.45) bird(); }, 1900);
}
function cricket() {
  const t = ctx.currentTime, f = 4200 + Math.random() * 900;
  for (let i = 0; i < 3; i++) {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.frequency.value = f; g.gain.value = 0;
    g.gain.setValueAtTime(0, t + i * 0.06); g.gain.linearRampToValueAtTime(0.025, t + i * 0.06 + 0.01);
    g.gain.linearRampToValueAtTime(0, t + i * 0.06 + 0.04);
    o.connect(g); g.connect(nightGain); o.start(t + i * 0.06); o.stop(t + i * 0.06 + 0.05);
  }
}
function bird() {
  const t = ctx.currentTime, o = ctx.createOscillator(), g = ctx.createGain();
  const f = 1800 + Math.random() * 1400;
  o.frequency.setValueAtTime(f, t); o.frequency.exponentialRampToValueAtTime(f * 1.5, t + 0.12);
  o.frequency.exponentialRampToValueAtTime(f * 0.9, t + 0.25);
  g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.03, t + 0.03); g.gain.linearRampToValueAtTime(0, t + 0.28);
  o.connect(g); g.connect(dayGain); o.start(t); o.stop(t + 0.3);
}
export function setAmbientDaylight(day) { // 0 night .. 1 day
  if (!ctx) return;
  nightGain.gain.setTargetAtTime(1 - day, ctx.currentTime, 0.5);
  dayGain.gain.setTargetAtTime(day, ctx.currentTime, 0.5);
}

// ── Effects ──
export function chime() {
  if (!ctx) return;
  [880, 1108.7, 1318.5].forEach((f, i) => {
    const t = ctx.currentTime + i * 0.08, o = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'sine'; o.frequency.value = f;
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.12, t + 0.01); g.gain.exponentialRampToValueAtTime(0.001, t + 0.9);
    o.connect(g); g.connect(sfx); o.start(t); o.stop(t + 1);
  });
}
export function sparkle() {
  if (!ctx) return;
  for (let i = 0; i < 6; i++) {
    const t = ctx.currentTime + i * 0.05, o = ctx.createOscillator(), g = ctx.createGain();
    o.frequency.value = 1500 + Math.random() * 1500;
    g.gain.setValueAtTime(0.05, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
    o.connect(g); g.connect(sfx); o.start(t); o.stop(t + 0.35);
  }
}
export function crash() {
  if (!ctx) return;
  const t = ctx.currentTime, len = ctx.sampleRate * 2.5;
  const buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2);
  const src = ctx.createBufferSource(); src.buffer = buf;
  const lp = ctx.createBiquadFilter(); lp.type = 'lowpass';
  lp.frequency.setValueAtTime(1200, t); lp.frequency.exponentialRampToValueAtTime(60, t + 2);
  const g = ctx.createGain(); g.gain.value = 0.9;
  src.connect(lp); lp.connect(g); g.connect(sfx); src.start(t);
}
export function whoosh() {
  if (!ctx) return;
  const t = ctx.currentTime, o = ctx.createOscillator(), g = ctx.createGain();
  o.type = 'triangle'; o.frequency.setValueAtTime(900, t); o.frequency.exponentialRampToValueAtTime(120, t + 2.5);
  g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.08, t + 0.4); g.gain.linearRampToValueAtTime(0, t + 2.6);
  o.connect(g); g.connect(sfx); o.start(t); o.stop(t + 2.7);
}
export function tick() {
  if (!ctx) return;
  const t = ctx.currentTime, o = ctx.createOscillator(), g = ctx.createGain();
  o.frequency.value = 660; g.gain.setValueAtTime(0.04, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
  o.connect(g); g.connect(sfx); o.start(t); o.stop(t + 0.1);
}
