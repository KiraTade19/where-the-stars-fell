// Save system: everything lives on her phone (localStorage). No accounts, no server.
const KEY = 'wtsf.save.v1';

export function freshState() {
  return {
    checkpoint: 'prologue', // prologue | day1_morning | day1_day | day1_end
    day: 0,
    steadiness: 0,  // her time-management growth
    calm: 0,        // her patience when things go wrong
    restless: 6,    // his restlessness (0 calm .. 10 frantic); prayer lowers it
    bond: 0,
    waited: 0,      // times she stayed beside him during prayer
    fragments: [],  // star fragment ids found
    flags: {},
    snapshot: null, // state copy taken at the start of the current day (for replay)
  };
}

export function loadState() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const s = JSON.parse(raw);
    if (s && s.checkpoint) return Object.assign(freshState(), s);
  } catch (e) { /* storage blocked: play without saving */ }
  return null;
}

export function saveState(s) {
  try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) { /* ignore */ }
}

export function clearState() {
  try { localStorage.removeItem(KEY); } catch (e) { /* ignore */ }
}
