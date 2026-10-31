import { clamp } from './utils.js'

export class Input {
  constructor() {
    this.move = { x: 0, y: 0 }
    this.look = { x: 0, y: 0 }
    this.aiming = false
    this.fire = false
    this.sprint = false
    this.brake = false
    this.touchFire = false
    this.touchSprint = false
    this.touchBrake = false
    this.horn = false
    this.actQueued = false
    this.hornQueued = false
    this.tilt = 0
    this.tiltEnabled = false
    this.tiltNeutral = null
    this.lefty = false
    this.enabled = true
    this.isTouch = matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0
    this.keys = new Set()
    this.joyPointer = null
    this.lookPointer = null
    this.joyOrigin = { x: 0, y: 0 }
    this.joyRadius = 58
    this.lastLook = { x: 0, y: 0 }
    this.onTiltChange = null
    this.onAimChange = null
    this.motionState = 'off'

    this.canvas = document.getElementById('game')
    this.joyEl = document.getElementById('joystick')
    this.knob = document.getElementById('stickKnob')
    this.base = document.getElementById('stickBase')
    this.btnAim = document.getElementById('btnAim')
    this.btnFire = document.getElementById('btnFire')
    this.btnRun = document.getElementById('btnRun')
    this.btnAct = document.getElementById('btnAct')
    this.btnBrake = document.getElementById('btnBrake')
    this.btnHorn = document.getElementById('btnHorn')
    this.hud = document.getElementById('hud')

    this.bindButtons()
    this.bindCanvas()
    this.bindKeys()
    window.addEventListener('blur', () => this.releaseAll())
    document.addEventListener('visibilitychange', () => { if (document.hidden) this.releaseAll() })
  }

  releaseAll() {
    this.move.x = this.move.y = 0
    this.fire = this.sprint = this.brake = false
    this.touchFire = this.touchSprint = this.touchBrake = false
    this.joyPointer = null
    this.joyEl.classList.add('hidden')
  }

  setLefty(v) {
    this.lefty = v
    document.body.classList.toggle('lefty', v)
  }

  bindButtons() {
    const hold = (el, on, off) => {
      el.addEventListener('pointerdown', (e) => {
        e.preventDefault(); e.stopPropagation()
        try { el.setPointerCapture?.(e.pointerId) } catch {}
        el.classList.add('pressed'); on()
      })
      const end = (e) => { e.preventDefault(); el.classList.remove('pressed'); off?.() }
      el.addEventListener('pointerup', end)
      el.addEventListener('pointercancel', end)
      el.addEventListener('lostpointercapture', () => { el.classList.remove('pressed'); off?.() })
      el.addEventListener('contextmenu', e => e.preventDefault())
    }
    hold(this.btnFire, () => { this.touchFire = true; this.fire = true }, () => { this.touchFire = false; this.fire = false })
    hold(this.btnRun, () => { this.touchSprint = true; this.sprint = true }, () => { this.touchSprint = false; this.sprint = false })
    hold(this.btnBrake, () => { this.touchBrake = true; this.brake = true }, () => { this.touchBrake = false; this.brake = false })
    this.btnAct.addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); this.actQueued = true; this.btnAct.classList.add('pressed') })
    this.btnAct.addEventListener('pointerup', () => this.btnAct.classList.remove('pressed'))
    this.btnAct.addEventListener('pointercancel', () => this.btnAct.classList.remove('pressed'))
    this.btnHorn.addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); this.hornQueued = true; this.btnHorn.classList.add('pressed') })
    this.btnHorn.addEventListener('pointerup', () => this.btnHorn.classList.remove('pressed'))
    this.btnAim.addEventListener('pointerdown', (e) => {
      e.preventDefault(); e.stopPropagation()
      this.aiming = !this.aiming
      this.btnAim.classList.toggle('pressed', this.aiming)
      this.onAimChange?.(this.aiming)
    })
  }

  bindCanvas() {
    const c = this.canvas
    c.addEventListener('pointerdown', (e) => {
      if (!this.enabled) return
      if (e.pointerType === 'mouse') {
        this.lookPointer = e.pointerId
        this.lastLook = { x: e.clientX, y: e.clientY }
        try { c.setPointerCapture?.(e.pointerId) } catch {}
        return
      }
      const leftZone = this.lefty ? e.clientX > innerWidth * .54 : e.clientX < innerWidth * .54
      if (leftZone && e.clientY > innerHeight * .28) this.startJoystick(e)
      else { this.lookPointer = e.pointerId; this.lastLook = { x: e.clientX, y: e.clientY } }
    })
    c.addEventListener('pointermove', (e) => {
      if (e.pointerId === this.joyPointer) this.moveJoystick(e)
      else if (e.pointerId === this.lookPointer) {
        const dx = e.clientX - this.lastLook.x, dy = e.clientY - this.lastLook.y
        this.look.x += dx; this.look.y += dy
        this.lastLook = { x: e.clientX, y: e.clientY }
      }
    })
    const end = (e) => {
      if (e.pointerId === this.joyPointer) this.endJoystick()
      if (e.pointerId === this.lookPointer) this.lookPointer = null
    }
    c.addEventListener('pointerup', end)
    c.addEventListener('pointercancel', end)
    c.addEventListener('pointerleave', end)
    c.addEventListener('contextmenu', e => e.preventDefault())
    // mouse wheel zoom? no
  }

  startJoystick(e) {
    this.joyPointer = e.pointerId
    this.joyOrigin = { x: e.clientX, y: e.clientY }
    this.joyRadius = Math.min(64, innerWidth * .075)
    this.joyEl.style.left = e.clientX + 'px'
    this.joyEl.style.top = e.clientY + 'px'
    this.joyEl.style.width = this.joyEl.style.height = (this.joyRadius * 2.3) + 'px'
    this.joyEl.style.margin = `${-this.joyRadius * 1.15}px 0 0 ${-this.joyRadius * 1.15}px`
    this.joyEl.classList.remove('hidden')
    this.move.x = this.move.y = 0
    try { this.canvas.setPointerCapture?.(e.pointerId) } catch {}
  }

  moveJoystick(e) {
    const dx = e.clientX - this.joyOrigin.x, dy = e.clientY - this.joyOrigin.y
    const max = this.joyRadius
    const len = Math.hypot(dx, dy)
    const k = len > max ? max / len : 1
    const x = dx * k, y = dy * k
    this.move.x = clamp(x / max, -1, 1)
    this.move.y = clamp(-y / max, -1, 1)
    const kk = this.joyEl.clientWidth / 2.3
    this.knob.style.transform = `translate(${x}px,${y}px)`
  }

  endJoystick() {
    this.joyPointer = null
    this.move.x = this.move.y = 0
    this.joyEl.classList.add('hidden')
    this.knob.style.transform = 'translate(0,0)'
  }

  bindKeys() {
    window.addEventListener('keydown', (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return
      this.keys.add(e.code)
      if (e.code === 'KeyE') this.actQueued = true
      if (e.code === 'KeyF') { this.aiming = !this.aiming; this.btnAim.classList.toggle('pressed', this.aiming); this.onAimChange?.(this.aiming) }
      if (e.code === 'KeyH') this.hornQueued = true
      if (e.code === 'Space') e.preventDefault()
    })
    window.addEventListener('keyup', (e) => this.keys.delete(e.code))
  }

  update() {
    if (this.enabled && this.joyPointer === null) {
      let x = 0, y = 0
      if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) x -= 1
      if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) x += 1
      if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) y += 1
      if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) y -= 1
      if (x || y) { const l = Math.hypot(x, y); this.move.x = x / l; this.move.y = y / l }
      else { this.move.x = this.move.y = 0 }
      this.fire = this.touchFire || this.keys.has('Space')
      this.sprint = this.touchSprint || this.keys.has('ShiftLeft') || this.keys.has('ShiftRight')
      this.brake = this.touchBrake || (this.keys.has('Space') && !this.aiming)
    }
  }

  consumeLook() {
    const l = { x: this.look.x, y: this.look.y }
    this.look.x = this.look.y = 0
    return l
  }
  consumeAct() { const v = this.actQueued; this.actQueued = false; return v }
  consumeHorn() { const v = this.hornQueued; this.hornQueued = false; return v }

  async enableTilt() {
    if (typeof DeviceOrientationEvent === 'undefined') { this.motionState = 'unsupported'; return false }
    try {
      if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        const res = await DeviceOrientationEvent.requestPermission()
        if (res !== 'granted') { this.motionState = 'denied'; return false }
      }
      if (!this._motionHandler) {
        this._motionHandler = (e) => {
          if (e.gamma == null && e.beta == null) return
          const angle = screen.orientation?.angle ?? window.orientation ?? 0
          let v
          if (Math.abs(angle) === 90) v = e.beta ?? 0
          else v = e.gamma ?? 0
          if (this.tiltNeutral == null) this.tiltNeutral = v
          let d = v - this.tiltNeutral
          if (Math.abs(angle) === 90) d = -d * Math.sign(angle)
          this.tilt = clamp(d / 26, -1, 1)
          this.motionState = 'active'
          this.onTiltChange?.(this.tilt, this.motionState)
        }
        window.addEventListener('deviceorientation', this._motionHandler, true)
      }
      this.tiltEnabled = true
      this.motionState = 'active'
      this.tiltNeutral = null
      return true
    } catch (err) {
      this.motionState = 'denied'
      return false
    }
  }

  disableTilt() {
    this.tiltEnabled = false
    this.tilt = 0
    this.motionState = 'off'
    if (this._motionHandler) window.removeEventListener('deviceorientation', this._motionHandler, true)
    this._motionHandler = null
    this.onTiltChange?.(0, 'off')
  }

  calibrateTilt() { this.tiltNeutral = null; this.tilt = 0 }
}
