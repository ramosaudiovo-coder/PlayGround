export class AudioEngine {
  constructor() {
    this.ctx = null
    this.master = null
    this.musicGain = null
    this.sfxGain = null
    this.engine = null
    this.engineGain = null
    this.enabled = true
    this.started = false
  }

  async start() {
    if (this.started) {
      await this.ctx?.resume()
      return
    }
    const Ctx = window.AudioContext || window.webkitAudioContext
    if (!Ctx) return
    this.ctx = new Ctx()
    this.started = true
    this.master = this.ctx.createGain()
    this.master.gain.value = this.enabled ? 0.55 : 0
    this.master.connect(this.ctx.destination)

    this.musicGain = this.ctx.createGain()
    this.musicGain.gain.value = 0.16
    this.musicGain.connect(this.master)

    this.sfxGain = this.ctx.createGain()
    this.sfxGain.gain.value = 0.7
    this.sfxGain.connect(this.master)

    this.startMusic()
    this.startEngine()
    await this.ctx.resume()
  }

  startMusic() {
    const ctx = this.ctx
    const filter = ctx.createBiquadFilter()
    filter.type = 'lowpass'
    filter.frequency.value = 520
    filter.Q.value = 0.8
    filter.connect(this.musicGain)

    const progression = [
      [55, 65.41, 82.41, 110],
      [49, 58.27, 73.42, 98],
      [43.65, 55, 65.41, 87.31],
      [41.2, 49, 61.74, 82.41],
    ]
    const drones = []
    progression[0].forEach((freq, i) => {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = i === 0 ? 'triangle' : 'sine'
      osc.frequency.value = freq
      osc.detune.value = (i - 1.5) * 5
      gain.gain.value = i === 0 ? 0.22 : 0.08
      osc.connect(gain)
      gain.connect(filter)
      osc.start()
      drones.push({ osc, gain })
    })

    let step = 0
    const advance = () => {
      if (!this.started) return
      step = (step + 1) % progression.length
      const chord = progression[step]
      drones.forEach((d, i) => {
        const t = ctx.currentTime
        d.osc.frequency.cancelScheduledValues(t)
        d.osc.frequency.linearRampToValueAtTime(chord[i], t + 2.8)
      })
      window.setTimeout(advance, 7600)
    }
    window.setTimeout(advance, 7600)

    // Slow noir pulse.
    const pulseGain = ctx.createGain()
    pulseGain.gain.value = 0.0001
    pulseGain.connect(this.musicGain)
    const pulse = ctx.createOscillator()
    pulse.type = 'sine'
    pulse.frequency.value = 46
    pulse.connect(pulseGain)
    pulse.start()
    const beat = () => {
      if (!this.started) return
      const t = ctx.currentTime
      pulseGain.gain.cancelScheduledValues(t)
      pulseGain.gain.setValueAtTime(0.0001, t)
      pulseGain.gain.exponentialRampToValueAtTime(0.22, t + 0.04)
      pulseGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.55)
      window.setTimeout(beat, 1600)
    }
    beat()

    // Rain hiss.
    const len = ctx.sampleRate * 2
    const buffer = ctx.createBuffer(1, len, ctx.sampleRate)
    const data = buffer.getChannelData(0)
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1
    const noise = ctx.createBufferSource()
    noise.buffer = buffer
    noise.loop = true
    const noiseFilter = ctx.createBiquadFilter()
    noiseFilter.type = 'highpass'
    noiseFilter.frequency.value = 1800
    const noiseGain = ctx.createGain()
    noiseGain.gain.value = 0.026
    noise.connect(noiseFilter)
    noiseFilter.connect(noiseGain)
    noiseGain.connect(this.master)
    noise.start()
  }

  startEngine() {
    const ctx = this.ctx
    const osc = ctx.createOscillator()
    const osc2 = ctx.createOscillator()
    const filter = ctx.createBiquadFilter()
    const gain = ctx.createGain()
    osc.type = 'sawtooth'
    osc2.type = 'square'
    osc.frequency.value = 55
    osc2.frequency.value = 28
    filter.type = 'lowpass'
    filter.frequency.value = 210
    filter.Q.value = 2.5
    gain.gain.value = 0.0001
    osc.connect(filter)
    osc2.connect(filter)
    filter.connect(gain)
    gain.connect(this.sfxGain)
    osc.start()
    osc2.start()
    this.engine = { osc, osc2, filter }
    this.engineGain = gain
  }

  setEngine(speed, active) {
    if (!this.engine || !this.ctx) return
    const t = this.ctx.currentTime
    const s = Math.min(Math.abs(speed) / 34, 1)
    this.engine.osc.frequency.setTargetAtTime(45 + s * 130, t, 0.08)
    this.engine.osc2.frequency.setTargetAtTime(23 + s * 62, t, 0.08)
    this.engine.filter.frequency.setTargetAtTime(180 + s * 520, t, 0.08)
    this.engineGain.gain.setTargetAtTime(active ? 0.06 + s * 0.07 : 0.0001, t, 0.14)
  }

  setEnabled(enabled) {
    this.enabled = enabled
    if (!this.master || !this.ctx) return
    this.master.gain.setTargetAtTime(enabled ? 0.55 : 0, this.ctx.currentTime, 0.12)
  }

  noiseBurst(duration = 0.12, gain = 0.5, filterFreq = 1200) {
    if (!this.ctx || !this.enabled) return
    const ctx = this.ctx
    const len = Math.max(1, Math.floor(ctx.sampleRate * duration))
    const buffer = ctx.createBuffer(1, len, ctx.sampleRate)
    const data = buffer.getChannelData(0)
    for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / len)
    const src = ctx.createBufferSource()
    src.buffer = buffer
    const filter = ctx.createBiquadFilter()
    filter.type = 'bandpass'
    filter.frequency.value = filterFreq
    filter.Q.value = 0.7
    const g = ctx.createGain()
    g.gain.value = gain
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration)
    src.connect(filter)
    filter.connect(g)
    g.connect(this.sfxGain)
    src.start()
  }

  tone(freq, duration = 0.18, type = 'sine', gain = 0.14, slide = 0) {
    if (!this.ctx || !this.enabled) return
    const ctx = this.ctx
    const t = ctx.currentTime
    const osc = ctx.createOscillator()
    const g = ctx.createGain()
    osc.type = type
    osc.frequency.setValueAtTime(freq, t)
    if (slide) osc.frequency.exponentialRampToValueAtTime(Math.max(30, freq + slide), t + duration)
    g.gain.setValueAtTime(gain, t)
    g.gain.exponentialRampToValueAtTime(0.0001, t + duration)
    osc.connect(g)
    g.connect(this.sfxGain)
    osc.start()
    osc.stop(t + duration + 0.02)
  }

  gunshot() {
    if (!this.ctx || !this.enabled) return
    this.noiseBurst(0.09, 0.55, 900)
    this.tone(95, 0.12, 'sine', 0.2, -50)
  }

  enemyShot() {
    if (!this.ctx || !this.enabled) return
    this.noiseBurst(0.06, 0.18, 1400)
    this.tone(160, 0.08, 'square', 0.05, -60)
  }

  cash() {
    if (!this.ctx || !this.enabled) return
    this.tone(880, 0.08, 'sine', 0.09)
    window.setTimeout(() => this.tone(1320, 0.12, 'sine', 0.07), 55)
  }

  claim() {
    if (!this.ctx || !this.enabled) return
    this.tone(220, 0.5, 'triangle', 0.08, 110)
    window.setTimeout(() => this.tone(330, 0.5, 'sine', 0.06, 165), 70)
    window.setTimeout(() => this.tone(440, 0.7, 'sine', 0.04, 220), 150)
    this.noiseBurst(0.35, 0.12, 400)
  }

  chapter() {
    if (!this.ctx || !this.enabled) return
    ;[261.6, 329.6, 392, 523.2].forEach((f, i) => {
      window.setTimeout(() => this.tone(f, 0.9, 'sine', 0.055), i * 110)
    })
  }

  hit() {
    if (!this.ctx || !this.enabled) return
    this.noiseBurst(0.07, 0.18, 260)
  }

  ui() {
    this.tone(420, 0.06, 'sine', 0.035)
  }

  siren() {
    if (!this.ctx || !this.enabled) return
    const t = this.ctx.currentTime
    const osc = this.ctx.createOscillator()
    const g = this.ctx.createGain()
    osc.type = 'sine'
    osc.frequency.setValueAtTime(640, t)
    osc.frequency.linearRampToValueAtTime(880, t + 0.6)
    osc.frequency.linearRampToValueAtTime(640, t + 1.2)
    g.gain.setValueAtTime(0.03, t)
    g.gain.exponentialRampToValueAtTime(0.0001, t + 1.2)
    osc.connect(g)
    g.connect(this.sfxGain)
    osc.start()
    osc.stop(t + 1.22)
  }
}
