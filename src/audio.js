export class AudioEngine {
  constructor() {
    this.ctx = null
    this.enabled = true
    this.started = false
    this.musicOn = true
    this.engineNodes = null
    this.sirenNodes = null
    this.nextBar = 0
    this.barIndex = 0
    this.timer = null
  }
  async unlock() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext
      if (!AC) return
      this.ctx = new AC()
      this.master = this.ctx.createGain(); this.master.gain.value = this.enabled ? .55 : 0; this.master.connect(this.ctx.destination)
      this.musicBus = this.ctx.createGain(); this.musicBus.gain.value = .16; this.musicBus.connect(this.master)
      this.sfxBus = this.ctx.createGain(); this.sfxBus.gain.value = .7; this.sfxBus.connect(this.master)
      this.ambBus = this.ctx.createGain(); this.ambBus.gain.value = .2; this.ambBus.connect(this.master)
      this.makeNoise()
      this.startAmbience()
      this.startMusic()
      this.started = true
    }
    if (this.ctx.state === 'suspended') await this.ctx.resume()
  }
  makeNoise() {
    const len = this.ctx.sampleRate * 2
    this.noiseBuf = this.ctx.createBuffer(1, len, this.ctx.sampleRate)
    const d = this.noiseBuf.getChannelData(0)
    let last = 0
    for (let i = 0; i < len; i++) {
      const w = Math.random() * 2 - 1
      last = (last + .02 * w) / 1.02
      d[i] = last * 3.2
    }
  }
  startAmbience() {
    const src = this.ctx.createBufferSource(); src.buffer = this.noiseBuf; src.loop = true
    const lp = this.ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 700
    const g = this.ctx.createGain(); g.gain.value = .22
    src.connect(lp); lp.connect(g); g.connect(this.ambBus); src.start()
    // rain hiss
    const src2 = this.ctx.createBufferSource(); src2.buffer = this.noiseBuf; src2.loop = true
    const hp = this.ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 2400
    const g2 = this.ctx.createGain(); g2.gain.value = .075
    src2.connect(hp); hp.connect(g2); g2.connect(this.ambBus); src2.start()
    // low city drone
    const o = this.ctx.createOscillator(); o.type = 'sine'; o.frequency.value = 44
    const og = this.ctx.createGain(); og.gain.value = .055
    o.connect(og); og.connect(this.ambBus); o.start()
  }
  startMusic() {
    this.nextBar = this.ctx.currentTime + .5
    this.timer = setInterval(() => this.schedule(), 220)
  }
  schedule() {
    if (!this.ctx || !this.musicOn) return
    const now = this.ctx.currentTime
    const barLen = 3.6
    while (this.nextBar < now + .8) {
      this.playBar(this.nextBar, this.barIndex)
      this.nextBar += barLen
      this.barIndex++
    }
  }
  playBar(t, idx) {
    const prog = [
      [50, 53, 57, 62], [46, 50, 53, 58], [43, 46, 50, 55], [45, 49, 52, 57]
    ]
    const chord = prog[idx % 4]
    // pad
    for (const n of chord.slice(0, 3)) {
      const f = 440 * Math.pow(2, (n - 69) / 12)
      const o = this.ctx.createOscillator(); o.type = 'triangle'; o.frequency.value = f
      const g = this.ctx.createGain(); g.gain.setValueAtTime(0, t)
      g.gain.linearRampToValueAtTime(.045, t + .5)
      g.gain.linearRampToValueAtTime(.028, t + 2.7)
      g.gain.linearRampToValueAtTime(0, t + 3.5)
      const lp = this.ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 900
      o.connect(g); g.connect(lp); lp.connect(this.musicBus)
      o.start(t); o.stop(t + 3.6)
    }
    // bass pluck
    const bassF = 440 * Math.pow(2, (chord[0] - 24 - 69) / 12)
    for (const bt of [0, 1.8]) {
      const o = this.ctx.createOscillator(); o.type = 'sine'; o.frequency.value = bassF
      const g = this.ctx.createGain(); g.gain.setValueAtTime(0, t + bt)
      g.gain.linearRampToValueAtTime(.16, t + bt + .02)
      g.gain.exponentialRampToValueAtTime(.001, t + bt + .9)
      o.connect(g); g.connect(this.musicBus); o.start(t + bt); o.stop(t + bt + 1)
    }
    // sparse melody
    const melody = [69, 72, 74, 72, 69, 67, 65, 67]
    if (idx % 2 === 0) {
      const n = melody[(idx / 2) % melody.length]
      const f = 440 * Math.pow(2, (n - 69) / 12)
      const o = this.ctx.createOscillator(); o.type = 'triangle'; o.frequency.value = f
      const g = this.ctx.createGain(); g.gain.setValueAtTime(0, t + 1.2)
      g.gain.linearRampToValueAtTime(.055, t + 1.22)
      g.gain.exponentialRampToValueAtTime(.001, t + 2.9)
      o.connect(g); g.connect(this.musicBus); o.start(t + 1.2); o.stop(t + 3)
    }
    // brush
    const src = this.ctx.createBufferSource(); src.buffer = this.noiseBuf
    const bp = this.ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 5000; bp.Q.value = .8
    const g = this.ctx.createGain(); g.gain.setValueAtTime(.012, t)
    g.gain.exponentialRampToValueAtTime(.001, t + .25)
    src.connect(bp); bp.connect(g); g.connect(this.musicBus)
    src.start(t); src.stop(t + .3)
  }
  setEnabled(on) {
    this.enabled = on
    if (this.master) this.master.gain.setTargetAtTime(on ? .55 : 0, this.ctx.currentTime, .05)
  }
  setMusic(on) {
    this.musicOn = on
    if (this.musicBus) this.musicBus.gain.setTargetAtTime(on ? .16 : 0, this.ctx.currentTime, .1)
  }
  startEngine() {
    if (!this.ctx || this.engineNodes) return
    const o = this.ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.value = 48
    const o2 = this.ctx.createOscillator(); o2.type = 'square'; o2.frequency.value = 24
    const lp = this.ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 240; lp.Q.value = 2
    const g = this.ctx.createGain(); g.gain.value = 0
    const g2 = this.ctx.createGain(); g2.gain.value = .25
    o.connect(lp); o2.connect(g2); g2.connect(lp); lp.connect(g); g.connect(this.sfxBus)
    o.start(); o2.start()
    this.engineNodes = { o, o2, g, lp }
  }
  updateEngine(speed, throttle, inCar) {
    if (!this.ctx || !this.engineNodes) return
    const n = this.engineNodes
    const t = this.ctx.currentTime
    const s = Math.abs(speed)
    n.o.frequency.setTargetAtTime(42 + s * 2.4, t, .08)
    n.o2.frequency.setTargetAtTime(21 + s * 1.2, t, .08)
    n.lp.frequency.setTargetAtTime(180 + s * 9, t, .1)
    n.g.gain.setTargetAtTime(inCar ? .055 + Math.min(.09, s * .004) : 0, t, .12)
  }
  stopEngine() {
    if (!this.engineNodes) return
    const { o, o2, g } = this.engineNodes
    g.gain.setTargetAtTime(0, this.ctx.currentTime, .1)
    setTimeout(() => { try { o.stop(); o2.stop() } catch {} }, 500)
    this.engineNodes = null
  }
  blip(freq = 300, dur = .05, type = 'square', vol = .1) {
    if (!this.ctx) return
    const t = this.ctx.currentTime
    const o = this.ctx.createOscillator(); o.type = type; o.frequency.value = freq
    const g = this.ctx.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(.001, t + dur)
    o.connect(g); g.connect(this.sfxBus); o.start(t); o.stop(t + dur)
  }
  click() { this.blip(620, .04, 'sine', .05) }
  gunshot() {
    if (!this.ctx) return
    const t = this.ctx.currentTime
    const src = this.ctx.createBufferSource(); src.buffer = this.noiseBuf
    const bp = this.ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 900; bp.Q.value = .6
    const g = this.ctx.createGain(); g.gain.setValueAtTime(.6, t); g.gain.exponentialRampToValueAtTime(.001, t + .22)
    src.connect(bp); bp.connect(g); g.connect(this.sfxBus); src.start(t); src.stop(t + .25)
    const o = this.ctx.createOscillator(); o.type = 'sine'; o.frequency.setValueAtTime(120, t); o.frequency.exponentialRampToValueAtTime(40, t + .15)
    const og = this.ctx.createGain(); og.gain.setValueAtTime(.35, t); og.gain.exponentialRampToValueAtTime(.001, t + .18)
    o.connect(og); og.connect(this.sfxBus); o.start(t); o.stop(t + .2)
  }
  horn() {
    if (!this.ctx) return
    const t = this.ctx.currentTime
    for (const f of [330, 415]) {
      const o = this.ctx.createOscillator(); o.type = 'square'; o.frequency.value = f
      const g = this.ctx.createGain(); g.gain.setValueAtTime(.09, t); g.gain.setValueAtTime(.09, t + .3); g.gain.exponentialRampToValueAtTime(.001, t + .42)
      o.connect(g); g.connect(this.sfxBus); o.start(t); o.stop(t + .45)
    }
  }
  cash() {
    if (!this.ctx) return
    const t = this.ctx.currentTime
    ;[1046, 1318, 1568].forEach((f, i) => {
      const o = this.ctx.createOscillator(); o.type = 'triangle'; o.frequency.value = f
      const g = this.ctx.createGain(); g.gain.setValueAtTime(0, t + i * .07)
      g.gain.linearRampToValueAtTime(.08, t + i * .07 + .01)
      g.gain.exponentialRampToValueAtTime(.001, t + i * .07 + .3)
      o.connect(g); g.connect(this.sfxBus); o.start(t + i * .07); o.stop(t + i * .07 + .32)
    })
  }
  sting(success = true) {
    if (!this.ctx) return
    const t = this.ctx.currentTime
    const notes = success ? [62, 65, 69, 74] : [62, 58, 55, 50]
    notes.forEach((n, i) => {
      const f = 440 * Math.pow(2, (n - 69) / 12)
      const o = this.ctx.createOscillator(); o.type = 'triangle'; o.frequency.value = f
      const g = this.ctx.createGain(); g.gain.setValueAtTime(0, t + i * .12)
      g.gain.linearRampToValueAtTime(.1, t + i * .12 + .03)
      g.gain.exponentialRampToValueAtTime(.001, t + i * .12 + 1.2)
      o.connect(g); g.connect(this.sfxBus); o.start(t + i * .12); o.stop(t + i * .12 + 1.3)
    })
  }
  impact() {
    if (!this.ctx) return
    const t = this.ctx.currentTime
    const o = this.ctx.createOscillator(); o.type = 'sine'; o.frequency.setValueAtTime(90, t); o.frequency.exponentialRampToValueAtTime(30, t + .25)
    const g = this.ctx.createGain(); g.gain.setValueAtTime(.4, t); g.gain.exponentialRampToValueAtTime(.001, t + .3)
    o.connect(g); g.connect(this.sfxBus); o.start(t); o.stop(t + .32)
    this.blip(160, .12, 'square', .08)
  }
  siren(on) {
    if (!this.ctx) return
    if (on && !this.sirenNodes) {
      const o = this.ctx.createOscillator(); o.type = 'sine'; o.frequency.value = 700
      const lfo = this.ctx.createOscillator(); lfo.type = 'sine'; lfo.frequency.value = .5
      const lg = this.ctx.createGain(); lg.gain.value = 180
      lfo.connect(lg); lg.connect(o.frequency)
      const g = this.ctx.createGain(); g.gain.value = .028
      o.connect(g); g.connect(this.sfxBus); o.start(); lfo.start()
      this.sirenNodes = { o, lfo, g }
    } else if (!on && this.sirenNodes) {
      const s = this.sirenNodes; this.sirenNodes = null
      s.g.gain.setTargetAtTime(0, this.ctx.currentTime, .2)
      setTimeout(() => { try { s.o.stop(); s.lfo.stop() } catch {} }, 600)
    }
  }
}
