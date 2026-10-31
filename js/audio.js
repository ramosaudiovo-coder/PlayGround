/* ------------------------------------------------------------------ */
/*  Procedural audio — synthesized lounge, city hum, engines, sirens   */
/* ------------------------------------------------------------------ */

export class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.ready = false;
    this.musicTimer = null;
    this.step = 0;
    this.nextTime = 0;
    this.siren = null;
    this.engine = null;
    this.sirenOn = false;
    this.musicLevel = 0.5;
  }

  async init() {
    if (this.ready) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    if (this.ctx.state === 'suspended') await this.ctx.resume();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.enabled ? 0.85 : 0;
    this.master.connect(this.ctx.destination);
    this.sfx = this.ctx.createGain(); this.sfx.gain.value = 0.72; this.sfx.connect(this.master);
    this.musicBus = this.ctx.createGain(); this.musicBus.gain.value = 0.24; this.musicBus.connect(this.master);
    this.noiseBuf = this.makeNoise(2.2);
    this.ready = true;
    this.startMusic();
    this.startCityHum();
    document.addEventListener('visibilitychange', () => {
      if (!this.ctx) return;
      if (document.hidden) this.ctx.suspend(); else if (this.enabled) this.ctx.resume();
    });
  }

  makeNoise(seconds) {
    const len = Math.floor(this.ctx.sampleRate * seconds);
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const d = buf.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      const white = Math.random() * 2 - 1;
      last = last * 0.92 + white * 0.08;
      d[i] = white * 0.6 + last * 0.6;
    }
    return buf;
  }

  setEnabled(on) {
    this.enabled = on;
    if (!this.ctx) return;
    this.master.gain.cancelScheduledValues(this.ctx.currentTime);
    this.master.gain.linearRampToValueAtTime(on ? 0.85 : 0, this.ctx.currentTime + 0.25);
  }

  now() { return this.ctx ? this.ctx.currentTime : 0; }

  /* ------------------------------- music -------------------------------- */

  startMusic() {
    if (!this.ctx || this.musicTimer) return;
    this.nextTime = this.ctx.currentTime + 0.1;
    this.musicTimer = setInterval(() => this.scheduleMusic(), 180);
  }

  scheduleMusic() {
    if (!this.ctx || !this.enabled) return;
    const stepDur = 0.46;
    while (this.nextTime < this.ctx.currentTime + 0.7) {
      this.playStep(this.step, this.nextTime);
      this.step = (this.step + 1) % 64;
      this.nextTime += stepDur;
    }
  }

  playStep(step, t) {
    const chordIdx = Math.floor(step / 16) % 4;
    const chords = [
      { root: 110.0, notes: [220.0, 261.63, 329.63] },  // Am
      { root: 87.31, notes: [174.61, 220.0, 261.63] },  // F
      { root: 98.0, notes: [196.0, 246.94, 293.66] },   // G
      { root: 82.41, notes: [164.81, 207.65, 246.94] }, // E
    ];
    const ch = chords[chordIdx];
    if (step % 16 === 0) {
      for (const n of ch.notes) this.pad(n, t, 3.9, 0.026);
    }
    if (step % 8 === 0) this.bass(ch.root, t, 1.4);
    if (step % 4 === 2) {
      const scale = [0, 3, 7, 10, 12, 15];
      const n = ch.notes[1] * Math.pow(2, scale[(Math.floor(step / 4) + chordIdx) % scale.length] / 12);
      this.pluck(n * 2, t, 0.055);
    }
    if (step % 16 === 6) this.pluck(ch.notes[2] * 4, t + 0.22, 0.032);
  }

  pad(freq, t, dur, vol) {
    const o = this.ctx.createOscillator(); const g = this.ctx.createGain();
    const f = this.ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 1000; f.Q.value = 0.6;
    o.type = 'sawtooth'; o.frequency.value = freq;
    const o2 = this.ctx.createOscillator(); o2.type = 'sine'; o2.frequency.value = freq * 1.004;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.7);
    g.gain.linearRampToValueAtTime(0.0001, t + dur);
    o.connect(f); o2.connect(f); f.connect(g); g.connect(this.musicBus);
    o.start(t); o2.start(t); o.stop(t + dur + 0.1); o2.stop(t + dur + 0.1);
  }

  bass(freq, t, dur) {
    const o = this.ctx.createOscillator(); const g = this.ctx.createGain();
    o.type = 'triangle'; o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(0.16, t + 0.03);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(this.musicBus); o.start(t); o.stop(t + dur + 0.05);
  }

  pluck(freq, t, vol) {
    const o = this.ctx.createOscillator(); const g = this.ctx.createGain();
    o.type = 'sine'; o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.55);
    o.connect(g); g.connect(this.musicBus); o.start(t); o.stop(t + 0.6);
  }

  startCityHum() {
    if (!this.ctx) return;
    const src = this.ctx.createBufferSource(); src.buffer = this.noiseBuf; src.loop = true;
    const f = this.ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 220; f.Q.value = 0.4;
    const g = this.ctx.createGain(); g.gain.value = 0.03;
    src.connect(f); f.connect(g); g.connect(this.master); src.start();
    const lfo = this.ctx.createOscillator(); const lg = this.ctx.createGain();
    lfo.frequency.value = 0.08; lg.gain.value = 0.012;
    lfo.connect(lg); lg.connect(g.gain); lfo.start();
  }

  /* ------------------------------- effects ------------------------------ */

  click() { this.tone(620, 0.045, 0.04, 'sine'); this.tone(310, 0.05, 0.025, 'sine'); }
  confirm() { this.tone(392, 0.12, 0.06, 'sine'); setTimeout(() => this.tone(587, 0.18, 0.05, 'sine'), 80); }
  cash() { this.tone(880, 0.07, 0.05, 'sine'); setTimeout(() => this.tone(1320, 0.12, 0.04, 'sine'), 55); }

  tone(freq, dur, vol, type = 'sine', delay = 0, slide = 0) {
    if (!this.ready || !this.enabled) return;
    const t = this.now() + delay;
    const o = this.ctx.createOscillator(); const g = this.ctx.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(20, freq + slide), t + dur);
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(this.sfx); o.start(t); o.stop(t + dur + 0.02);
  }

  noise(dur = 0.2, vol = 0.2, freq = 1200, type = 'bandpass', delay = 0) {
    if (!this.ready || !this.enabled) return;
    const t = this.now() + delay;
    const src = this.ctx.createBufferSource(); src.buffer = this.noiseBuf;
    const f = this.ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = 0.8;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f); f.connect(g); g.connect(this.sfx);
    src.start(t); src.stop(t + dur + 0.05);
  }

  shot(drive = false) {
    if (!this.ready) return;
    this.noise(0.09, drive ? 0.26 : 0.34, drive ? 900 : 1600);
    this.tone(120, 0.1, 0.22, 'square', 0, -75);
    this.tone(62, 0.18, 0.18, 'sine', 0, -28);
  }
  enemyShot() { this.noise(0.07, 0.14, 1200); this.tone(150, 0.08, 0.09, 'square', 0, -70); }
  hit() { this.tone(1400, 0.05, 0.05, 'square', 0, -500); }
  hurt() { this.noise(0.18, 0.2, 420); this.tone(75, 0.24, 0.14, 'sawtooth', 0, -25); }
  explosion() {
    if (!this.ready) return;
    this.noise(0.75, 0.5, 260, 'lowpass');
    this.tone(55, 0.8, 0.3, 'sine', 0, -28);
    this.noise(0.4, 0.25, 2200, 'highpass', 0.05);
  }
  crash() { this.noise(0.3, 0.3, 600); this.tone(90, 0.25, 0.18, 'sawtooth', 0, -40); }
  reload() { this.click(); setTimeout(() => this.tone(340, 0.06, 0.05, 'square'), 260); }
  missionDone() {
    const t = [523.25, 659.25, 783.99, 1046.5];
    t.forEach((f, i) => this.tone(f, 0.5, 0.07, 'sine', i * 0.12));
    this.tone(130.8, 1.4, 0.08, 'triangle', 0.1);
  }
  missionFail() { this.tone(220, 0.5, 0.08, 'sawtooth'); this.tone(155, 0.7, 0.07, 'sawtooth', 0.18); }

  setEngine(on, speed = 0, max = 35) {
    if (!this.ready) return;
    if (on && !this.engine) {
      const o = this.ctx.createOscillator(); const o2 = this.ctx.createOscillator();
      const f = this.ctx.createBiquadFilter(); const g = this.ctx.createGain();
      o.type = 'sawtooth'; o2.type = 'square'; f.type = 'lowpass'; f.frequency.value = 320; f.Q.value = 2;
      g.gain.value = 0;
      o.connect(f); o2.connect(f); f.connect(g); g.connect(this.sfx);
      o.start(); o2.start();
      this.engine = { o, o2, f, g };
    }
    if (!this.engine) return;
    const t = this.now();
    const ratio = Math.min(1, Math.abs(speed) / max);
    this.engine.o.frequency.setTargetAtTime(38 + ratio * 74, t, 0.08);
    this.engine.o2.frequency.setTargetAtTime(19 + ratio * 37, t, 0.08);
    this.engine.f.frequency.setTargetAtTime(220 + ratio * 900, t, 0.1);
    this.engine.g.gain.setTargetAtTime(on ? 0.045 + ratio * 0.05 : 0, t, 0.18);
  }

  setSiren(on) {
    if (!this.ready) return;
    if (on && !this.siren) {
      const o = this.ctx.createOscillator(); const o2 = this.ctx.createOscillator();
      const g = this.ctx.createGain(); const lfo = this.ctx.createOscillator(); const lg = this.ctx.createGain();
      o.type = 'sawtooth'; o.frequency.value = 620;
      o2.type = 'sine'; o2.frequency.value = 930;
      g.gain.value = 0;
      lfo.type = 'sine'; lfo.frequency.value = 0.55; lg.gain.value = 180;
      lfo.connect(lg); lg.connect(o.frequency); lg.connect(o2.frequency);
      o.connect(g); o2.connect(g); g.connect(this.sfx);
      o.start(); o2.start(); lfo.start();
      this.siren = { g, o, o2, lfo };
    }
    if (this.siren) {
      this.sirenOn = on;
      this.siren.g.gain.setTargetAtTime(on ? 0.018 : 0, this.now(), 0.25);
    }
  }
}
