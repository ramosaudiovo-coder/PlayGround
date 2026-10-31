import { clamp } from './utils.js'

const $ = (id) => document.getElementById(id)

export class UI {
  constructor(world, input) {
    this.world = world
    this.input = input
    this.el = {
      loading: $('loading'), loadFill: $('loadFill'), loadStatus: $('loadStatus'),
      title: $('title'), hud: $('hud'), money: $('money'), wanted: $('wanted'),
      objective: $('objective'), objSub: $('objSub'), district: $('district'),
      minimap: $('minimap'), healthFill: $('healthFill'), speedo: $('speedo'),
      speedoCanvas: $('speedoCanvas'), speedNum: $('speedNum'), carHealth: $('carHealth'),
      dialogue: $('dialogue'), dlgWho: $('dlgWho'), dlgText: $('dlgText'), dlgInitial: $('dlgInitial'),
      interact: $('interactPrompt'), interactText: $('interactText'), toast: $('toast'),
      chip: $('objectiveChip'), chipDist: $('chipDist'),
      missionCard: $('missionCard'), mcKicker: $('mcKicker'), mcTitle: $('mcTitle'), mcText: $('mcText'), mcGo: $('mcGo'),
      pause: $('pause'), settings: $('settings'), phone: $('phone'), jobList: $('jobList'),
      phoneFoot: $('phoneFoot'), phoneTime: $('phoneTime'), clock: $('clock'),
      fail: $('fail'), failTitle: $('failTitle'), failText: $('failText'),
      ending: $('ending'), endCash: $('endCash'), endTime: $('endTime'),
      damageFlash: $('damageFlash'), tiltBadge: $('tiltBadge'), cine: $('cine-bars')
    }
    this.money = 0
    this.dialogueQueue = []
    this.dialogueDone = null
    this.typing = null
    this.fullText = ''
    this.charIndex = 0
    this.minimapCtx = this.el.minimap.getContext('2d')
    this.speedCtx = this.el.speedoCanvas.getContext('2d')
    this.mapBase = this.buildMapBase()
    this.mapScale = 2
    this.buildWanted()
    this.bindDialogue()
    this.clockMinutes = 23 * 60 + 40
    this.clockAcc = 0
    this.tiltNote = $('motionNote')
  }

  buildWanted() {
    this.stars = [...this.el.wanted.querySelectorAll('i')]
  }

  bindDialogue() {
    this.el.dialogue.addEventListener('pointerdown', (e) => {
      e.preventDefault(); e.stopPropagation()
      if (this.typing) { this.finishTyping(); return }
      this.advanceDialogue()
    })
    const mo = $('motionNote')
    mo.addEventListener('click', () => { this.input.calibrateTilt(); this.motionNote('Level the device, then release. Tilt is recalibrated.', false) })
  }

  buildMapBase() {
    const size = 680, scale = 2
    const { c, ctx } = (() => {
      const c = document.createElement('canvas'); c.width = size; c.height = size
      return { c, ctx: c.getContext('2d') }
    })()
    ctx.fillStyle = '#0a0b0f'; ctx.fillRect(0, 0, size, size)
    // city blocks
    for (const b of this.world.mapBlocks) {
      const x = (b.x + 170) * scale, y = (b.z + 170) * scale
      const s = 52 * scale
      let fill = '#191a20'
      if (b.type === 'park') fill = '#1c2b1c'
      else if (b.type === 'church') fill = '#2a241d'
      else if (b.type === 'club') fill = '#301a1e'
      else if (b.type.includes('warehouse') || b.type === 'yard') fill = '#24241f'
      ctx.fillStyle = fill
      ctx.fillRect(x - s / 2, y - s / 2, s, s)
      ctx.strokeStyle = 'rgba(214,178,106,.12)'; ctx.lineWidth = 1
      ctx.strokeRect(x - s / 2, y - s / 2, s, s)
    }
    // roads
    ctx.strokeStyle = '#35363d'; ctx.lineWidth = 16 * scale
    ctx.lineCap = 'butt'
    for (const r of this.world.roads) {
      const p = (r + 170) * scale
      ctx.beginPath(); ctx.moveTo(0, p); ctx.lineTo(size, p); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(p, 0); ctx.lineTo(p, size); ctx.stroke()
    }
    ctx.strokeStyle = 'rgba(214,178,106,.28)'; ctx.lineWidth = 1
    for (const r of this.world.roads) {
      const p = (r + 170) * scale
      ctx.setLineDash([5, 9])
      ctx.beginPath(); ctx.moveTo(0, p); ctx.lineTo(size, p); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(p, 0); ctx.lineTo(p, size); ctx.stroke()
    }
    ctx.setLineDash([])
    // landmarks
    const marks = [
      [this.world.landmarks.club, '#d6b26a'],
      [this.world.landmarks.butcher, '#d6b26a'],
      [this.world.landmarks.church, '#d6b26a'],
      [this.world.landmarks.docks, '#d6b26a']
    ]
    for (const [m, col] of marks) {
      if (!m) continue
      const x = (m.x + 170) * scale, y = (m.z + 170) * scale
      ctx.fillStyle = col; ctx.beginPath(); ctx.arc(x, y, 2.4, 0, Math.PI * 2); ctx.fill()
    }
    // border
    ctx.strokeStyle = 'rgba(214,178,106,.35)'; ctx.lineWidth = 2
    ctx.strokeRect(1, 1, size - 2, size - 2)
    return c
  }

  setMoney(v) {
    this.money = v
    this.el.money.textContent = Math.round(v).toLocaleString('en-US')
  }
  setObjective(text, sub = '') {
    this.el.objective.textContent = text
    this.el.objSub.textContent = sub
    this.el.objSub.style.display = sub ? '' : 'none'
  }
  setHealth(v) {
    this.el.healthFill.style.width = clamp(v, 0, 100) + '%'
    this.el.healthFill.style.background = v < 30 ? 'linear-gradient(90deg,#a51f17,#d45a40)' : 'linear-gradient(90deg,#8e2f28,#d6b26a)'
  }
  setCarHealth(v) {
    this.el.carHealth.firstElementChild.style.width = clamp(v, 0, 100) + '%'
    this.el.carHealth.firstElementChild.style.background = v < 30 ? '#c0392f' : '#d6b26a'
  }
  setWanted(n) {
    this.stars.forEach((s, i) => {
      s.classList.toggle('on', i < n)
      s.classList.toggle('hot', i < n && n >= 4)
    })
  }
  setDistrict(name) { this.el.district.textContent = name }
  setClock(minutes) {
    const h = Math.floor(minutes / 60) % 24, m = Math.floor(minutes % 60)
    const txt = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
    this.el.clock.textContent = txt
    this.el.phoneTime.textContent = txt
  }
  tickClock(dt) {
    this.clockAcc += dt
    if (this.clockAcc > 12) {
      this.clockAcc = 0
      this.clockMinutes = (this.clockMinutes + 1) % 1440
      this.setClock(this.clockMinutes)
    }
  }

  showToast(text, dur = 2.4) {
    this.el.toast.textContent = text
    this.el.toast.classList.remove('hidden')
    clearTimeout(this._toastTimer)
    this._toastTimer = setTimeout(() => this.el.toast.classList.add('hidden'), dur * 1000)
  }

  setInteract(text) {
    if (!text) { this.el.interact.classList.add('hidden'); return }
    this.el.interactText.textContent = text
    this.el.interact.classList.remove('hidden')
  }
  setActLabel(text) {
    const b = document.getElementById('btnAct')
    if (b.textContent !== text) b.textContent = text
  }
  setReticle(on) { document.getElementById('reticle').classList.toggle('hidden', !on) }

  say(lines, onDone) {
    this.dialogueQueue = Array.isArray(lines) ? [...lines] : [lines]
    this.dialogueDone = onDone || null
    this.el.dialogue.classList.remove('hidden')
    this.el.hud.classList.add('dialogue-open')
    this.showLine()
  }
  showLine() {
    const line = this.dialogueQueue.shift()
    if (!line) { this.endDialogue(); return }
    this.el.dlgWho.textContent = line.who || 'LAROSSA'
    this.el.dlgInitial.textContent = (line.who || 'L')[0]
    this.fullText = line.text
    this.charIndex = 0
    this.el.dlgText.textContent = ''
    clearInterval(this.typing)
    this.typing = setInterval(() => {
      this.charIndex++
      this.el.dlgText.textContent = this.fullText.slice(0, this.charIndex)
      if (this.charIndex >= this.fullText.length) this.finishTyping()
    }, 16)
  }
  finishTyping() {
    clearInterval(this.typing)
    this.typing = null
    this.charIndex = this.fullText.length
    this.el.dlgText.textContent = this.fullText
  }
  advanceDialogue() {
    if (this.dialogueQueue.length) this.showLine()
    else this.endDialogue()
  }
  endDialogue() {
    clearInterval(this.typing); this.typing = null
    this.el.dialogue.classList.add('hidden')
    this.el.hud.classList.remove('dialogue-open')
    const d = this.dialogueDone; this.dialogueDone = null
    if (d) d()
  }
  clearDialogue() {
    clearInterval(this.typing); this.typing = null
    this.dialogueQueue = []; this.dialogueDone = null
    this.el.dialogue.classList.add('hidden')
    this.el.hud.classList.remove('dialogue-open')
  }

  showMissionCard(kicker, title, text, onStart, btn = 'START') {
    this.el.mcKicker.textContent = kicker
    this.el.mcTitle.textContent = title
    this.el.mcText.innerHTML = text
    this.el.mcGo.textContent = btn
    this.el.missionCard.classList.remove('hidden')
    this.el.mcGo.onclick = () => { this.el.missionCard.classList.add('hidden'); onStart?.() }
  }
  hideMissionCard() { this.el.missionCard.classList.add('hidden') }

  showFail(title, text, onRetry) {
    this.el.failTitle.textContent = title
    this.el.failText.textContent = text
    this.el.fail.classList.remove('hidden')
    $('btnRetry').onclick = () => { this.el.fail.classList.add('hidden'); onRetry?.() }
  }

  showEnding(stats, onContinue) {
    this.el.endCash.textContent = '$' + Math.round(stats.cash).toLocaleString('en-US')
    this.el.endTime.textContent = stats.time
    this.el.ending.classList.remove('hidden')
    $('btnFreeRoam').onclick = () => { this.el.ending.classList.add('hidden'); onContinue?.() }
  }

  setCarMode(inCar) {
    document.querySelectorAll('.car-only').forEach(e => e.classList.toggle('hidden', !inCar))
    ;['btnAim', 'btnFire', 'btnRun', 'btnPhone'].forEach(id => $(id).classList.toggle('hidden', inCar))
    this.el.speedo.classList.toggle('hidden', !inCar)
    if (!inCar) this.input.aiming = false
  }

  damageFlash() {
    this.el.damageFlash.style.opacity = '.85'
    setTimeout(() => { this.el.damageFlash.style.opacity = '0' }, 160)
  }

  setCinematic(on) { this.el.cine.classList.toggle('on', on) }

  updateChip(dist) {
    this.el.chipDist.textContent = Math.round(dist) + ' m'
  }

  openPhone(jobs, onJob) {
    this.el.jobList.innerHTML = ''
    if (!jobs.length) {
      this.el.jobList.innerHTML = '<div class="job locked">No work yet.<small>Finish the story to open the city.</small></div>'
      this.el.phoneFoot.textContent = 'NO SIGNAL'
    } else {
      this.el.phoneFoot.textContent = 'THE DON SEES EVERYTHING'
      for (const j of jobs) {
        const b = document.createElement('button')
        b.className = 'job' + (j.locked ? ' locked' : '')
        b.innerHTML = `<div>${j.title}<small>${j.desc}</small></div><em>${j.reward}</em>`
        if (!j.locked) b.onclick = () => { this.el.phone.classList.add('hidden'); onJob?.(j) }
        this.el.jobList.appendChild(b)
      }
    }
    this.el.phone.classList.remove('hidden')
  }
  closePhone() { this.el.phone.classList.add('hidden') }

  motionNote(text, error = true) {
    this.tiltNote.textContent = text
    this.tiltNote.classList.remove('hidden')
    this.tiltNote.style.color = error ? 'var(--gold)' : 'rgba(239,227,200,.55)'
  }

  setTiltBadge(on) { this.el.tiltBadge.classList.toggle('hidden', !on) }

  updateMinimap(player, playerCar, population, objective, missionCars = []) {
    const ctx = this.minimapCtx
    const W = 180, H = 180, R = 90
    const pos = playerCar ? playerCar.pos : player.pos
    const heading = playerCar ? playerCar.heading : player.heading
    ctx.save()
    ctx.clearRect(0, 0, W, H)
    ctx.beginPath(); ctx.arc(R, R, R - 1, 0, Math.PI * 2); ctx.clip()
    ctx.fillStyle = '#08090d'; ctx.fillRect(0, 0, W, H)
    // base map centered
    const viewMeters = 118
    const srcSize = viewMeters * this.mapScale
    const sx = (pos.x + 170) * this.mapScale - srcSize / 2
    const sy = (pos.z + 170) * this.mapScale - srcSize / 2
    ctx.drawImage(this.mapBase, sx, sy, srcSize, srcSize, 0, 0, W, H)
    const toMap = (x, z) => {
      const px = ((x - pos.x) / viewMeters + .5) * W
      const py = ((z - pos.z) / viewMeters + .5) * H
      return [px, py]
    }
    // traffic
    ctx.fillStyle = 'rgba(180,180,190,.55)'
    for (const c of population.traffic) {
      const [x, y] = toMap(c.pos.x, c.pos.z)
      ctx.fillRect(x - 1, y - 1, 2, 2)
    }
    // parked
    ctx.fillStyle = 'rgba(214,178,106,.35)'
    for (const c of population.parked) {
      if (c.taken) continue
      const [x, y] = toMap(c.pos.x, c.pos.z)
      ctx.fillRect(x - 1, y - 1, 2, 2)
    }
    // mission cars
    for (const c of missionCars) {
      if (!c) continue
      const [x, y] = toMap(c.pos.x, c.pos.z)
      ctx.fillStyle = '#f0d493'; ctx.beginPath(); ctx.arc(x, y, 2.6, 0, Math.PI * 2); ctx.fill()
    }
    // police
    for (const c of population.police) {
      if (c.dead) continue
      const [x, y] = toMap(c.pos.x, c.pos.z)
      ctx.fillStyle = '#d94a3f'; ctx.beginPath(); ctx.arc(x, y, 2.2, 0, Math.PI * 2); ctx.fill()
    }
    // objective
    if (objective) {
      const [ox, oy] = toMap(objective.x, objective.z)
      const dx = ox - R, dy = oy - R, d = Math.hypot(dx, dy)
      let x = ox, y = oy
      if (d > R - 9) { x = R + dx / d * (R - 9); y = R + dy / d * (R - 9) }
      ctx.save()
      ctx.translate(x, y); ctx.rotate(Math.PI / 4)
      ctx.fillStyle = '#f0d493'; ctx.fillRect(-3.4, -3.4, 6.8, 6.8)
      ctx.strokeStyle = 'rgba(0,0,0,.6)'; ctx.lineWidth = 1; ctx.strokeRect(-3.4, -3.4, 6.8, 6.8)
      ctx.restore()
    }
    // player arrow
    ctx.save()
    ctx.translate(R, R); ctx.rotate(-heading + Math.PI)
    ctx.fillStyle = '#f7ecd2'
    ctx.beginPath(); ctx.moveTo(0, -6.5); ctx.lineTo(4.4, 5); ctx.lineTo(0, 2.6); ctx.lineTo(-4.4, 5); ctx.closePath(); ctx.fill()
    ctx.restore()
    // sweep ring
    ctx.strokeStyle = 'rgba(214,178,106,.18)'; ctx.lineWidth = 1
    ctx.beginPath(); ctx.arc(R, R, R - 4, 0, Math.PI * 2); ctx.stroke()
    ctx.restore()
  }

  drawSpeedo(kmh, max = 120) {
    const ctx = this.speedCtx
    const W = 190, H = 110
    ctx.clearRect(0, 0, W, H)
    const cx = W / 2, cy = 88, r = 64
    ctx.lineCap = 'round'
    ctx.strokeStyle = 'rgba(239,227,200,.12)'; ctx.lineWidth = 3
    ctx.beginPath(); ctx.arc(cx, cy, r, Math.PI * .86, Math.PI * .14, false); ctx.stroke()
    const t = clamp(kmh / max, 0, 1)
    ctx.strokeStyle = t > .8 ? '#c0392f' : '#d6b26a'; ctx.lineWidth = 3
    ctx.beginPath(); ctx.arc(cx, cy, r, Math.PI * .86, Math.PI * .86 + Math.PI * 1.28 * t, false); ctx.stroke()
    // ticks
    for (let i = 0; i <= 12; i++) {
      const a = Math.PI * .86 + Math.PI * 1.28 * (i / 12)
      const x1 = cx + Math.cos(a) * (r - 8), y1 = cy + Math.sin(a) * (r - 8)
      const x2 = cx + Math.cos(a) * (r - 2), y2 = cy + Math.sin(a) * (r - 2)
      ctx.strokeStyle = i % 3 === 0 ? 'rgba(214,178,106,.7)' : 'rgba(239,227,200,.25)'
      ctx.lineWidth = i % 3 === 0 ? 1.6 : .8
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke()
    }
    // needle
    const a = Math.PI * .86 + Math.PI * 1.28 * t
    ctx.strokeStyle = '#f0d493'; ctx.lineWidth = 1.6
    ctx.beginPath(); ctx.moveTo(cx + Math.cos(a) * 12, cy + Math.sin(a) * 12)
    ctx.lineTo(cx + Math.cos(a) * (r - 14), cy + Math.sin(a) * (r - 14)); ctx.stroke()
    ctx.fillStyle = '#d6b26a'; ctx.beginPath(); ctx.arc(cx, cy, 2.6, 0, Math.PI * 2); ctx.fill()
  }

  districtFor(z) {
    if (z < -100) return 'NORTH QUARTER'
    if (z > 100) return 'HARBOR DISTRICT'
    if (z > 30) return 'LITTLE ITALY'
    if (z < -30) return 'GRAND AVENUE'
    return 'OLD QUARTER'
  }
}
