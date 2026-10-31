import {
  CHAPTERS,
  DISTRICTS,
  DISTRICT_BY_ID,
  RACKETS_BY_DISTRICT,
  SAFEHOUSE,
  rankFor,
  nextRank,
} from './data.js'

const $ = (id) => document.getElementById(id)
const fmt = new Intl.NumberFormat('en-US')

function money(n) {
  return '$' + fmt.format(Math.max(0, Math.floor(n)))
}

function shortMoney(n) {
  if (n >= 1000000) return '$' + (n / 1000000).toFixed(1) + 'M'
  if (n >= 10000) return '$' + (n / 1000).toFixed(1) + 'K'
  return money(n)
}

export class UI {
  constructor() {
    this.el = {
      boot: $('boot'),
      intro: $('intro'),
      hud: $('hud'),
      startBtn: $('startBtn'),
      introTiltBtn: $('introTiltBtn'),
      introTiltState: $('introTiltState'),
      rankName: $('rankName'),
      respectValue: $('respectValue'),
      moneyValue: $('moneyValue'),
      heatStars: $('heatStars'),
      districtName: $('districtName'),
      districtFill: $('districtFill'),
      districtCount: $('districtCount'),
      districtStatus: $('districtStatus'),
      minimap: $('minimap'),
      minimapLabel: $('minimapLabel'),
      chapterLabel: $('chapterLabel'),
      objectiveTitle: $('objectiveTitle'),
      objectiveDesc: $('objectiveDesc'),
      objectiveReward: $('objectiveReward'),
      objectiveFill: $('objectiveFill'),
      objectiveCount: $('objectiveCount'),
      eventFeed: $('eventFeed'),
      healthValue: $('healthValue'),
      healthFill: $('healthFill'),
      contextPrompt: $('contextPrompt'),
      contextKicker: $('contextKicker'),
      contextTitle: $('contextTitle'),
      contextSub: $('contextSub'),
      actionBtn: $('actionBtn'),
      actionLabel: $('actionLabel'),
      actionProgress: $('actionProgress'),
      fireBtn: $('fireBtn'),
      sprintBtn: $('sprintBtn'),
      stick: $('stick'),
      stickKnob: $('stickKnob'),
      driveHud: $('driveHud'),
      speedValue: $('speedValue'),
      gearValue: $('gearValue'),
      carName: $('carName'),
      driveTilt: $('driveTilt'),
      tutorial: $('tutorial'),
      toasts: $('toasts'),
      chapterFlash: $('chapterFlash'),
      chapterFlashTitle: $('chapterFlashTitle'),
      chapterFlashReward: $('chapterFlashReward'),
      wantedBanner: $('wantedBanner'),
      pauseModal: $('pauseModal'),
      empireModal: $('empireModal'),
      deathModal: $('deathModal'),
      victoryModal: $('victoryModal'),
      pauseDistrict: $('pauseDistrict'),
      pauseTiltBtn: $('pauseTiltBtn'),
      soundBtn: $('soundBtn'),
      qualityBtn: $('qualityBtn'),
      empireMoney: $('empireMoney'),
      empireIncome: $('empireIncome'),
      empireCrew: $('empireCrew'),
      districtList: $('districtList'),
      territoryCanvas: $('territoryCanvas'),
      territoryCopy: $('territoryCopy'),
      empireRank: $('empireRank'),
      rankFill: $('rankFill'),
      rankNext: $('rankNext'),
      hireBtn: $('hireBtn'),
      hireCost: $('hireCost'),
      deathCost: $('deathCost'),
      victoryMoney: $('victoryMoney'),
      victoryRespect: $('victoryRespect'),
      damage: null,
    }

    this.minimapCtx = this.el.minimap.getContext('2d')
    this.territoryCtx = this.el.territoryCanvas.getContext('2d')
    this.lastHud = 0
    this.lastMap = 0
    this.toastTimers = []
    this.interaction = null

    const dmg = document.createElement('div')
    dmg.className = 'damage-vignette'
    document.getElementById('game').appendChild(dmg)
    this.el.damage = dmg
  }

  bind(handlers) {
    this.el.startBtn.addEventListener('click', () => handlers.start?.())
    this.el.introTiltBtn.addEventListener('click', () => handlers.tilt?.())
    this.el.pauseTiltBtn.addEventListener('click', () => handlers.tilt?.())
    $('pauseBtn').addEventListener('click', () => handlers.pause?.())
    $('resumeBtn').addEventListener('click', () => handlers.resume?.())
    $('pauseEmpireBtn').addEventListener('click', () => handlers.empire?.())
    $('empireBtn').addEventListener('click', () => handlers.empire?.())
    $('empireClose').addEventListener('click', () => handlers.closeEmpire?.())
    $('soundBtn').addEventListener('click', () => handlers.sound?.())
    $('qualityBtn').addEventListener('click', () => handlers.quality?.())
    $('restartBtn').addEventListener('click', () => handlers.restart?.())
    $('hireBtn').addEventListener('click', () => handlers.hire?.())
    $('respawnBtn').addEventListener('click', () => handlers.respawn?.())
    $('keepPlayingBtn').addEventListener('click', () => handlers.keepPlaying?.())
  }

  hideBoot() {
    this.el.boot.classList.add('out')
    window.setTimeout(() => this.el.boot.classList.add('hidden'), 800)
  }

  enterGame() {
    this.el.intro.classList.add('leaving')
    window.setTimeout(() => this.el.intro.classList.add('hidden'), 950)
    this.el.hud.classList.remove('hidden')
    requestAnimationFrame(() => this.el.hud.classList.add('visible'))
  }

  showHud() {
    this.el.hud.classList.remove('hidden')
    this.el.hud.classList.add('visible')
  }

  setTilt(on, supported = true) {
    this.el.introTiltBtn.classList.toggle('on', on)
    this.el.introTiltState.textContent = on ? 'ON' : 'OFF'
    this.el.pauseTiltBtn.classList.toggle('on', on)
    this.el.pauseTiltBtn.querySelector('span').textContent = on ? 'ON' : 'OFF'
    this.el.driveTilt.textContent = supported ? (on ? 'TILT STEERING ON' : 'TILT STEERING OFF') : 'TILT UNAVAILABLE'
  }

  setSound(on) {
    this.el.soundBtn.classList.toggle('on', on)
    this.el.soundBtn.querySelector('span').textContent = on ? 'ON' : 'OFF'
  }

  setQuality(on) {
    this.el.qualityBtn.classList.toggle('on', on)
    this.el.qualityBtn.querySelector('span').textContent = on ? 'HIGH' : 'LOW'
  }

  update(game, force = false) {
    const now = performance.now()
    if (!force && now - this.lastHud < 80) return
    this.lastHud = now
    const s = game.state

    this.el.moneyValue.textContent = fmt.format(Math.floor(s.money))
    this.el.respectValue.textContent = fmt.format(Math.floor(s.respect))
    this.el.rankName.textContent = rankFor(s.respect).name

    const stars = Math.min(5, Math.floor(s.heat))
    ;[...this.el.heatStars.children].forEach((star, i) => {
      star.classList.toggle('on', i < stars)
      star.classList.toggle('hot', i < stars && stars >= 3)
    })
    this.el.wantedBanner.classList.toggle('hidden', stars < 2)

    this.el.healthValue.textContent = Math.max(0, Math.ceil(s.health))
    this.el.healthFill.style.width = Math.max(0, s.health) + '%'
    this.el.healthFill.classList.toggle('low', s.health < 30)

    const district = game.world.getDistrictAt(game.player.position.x, game.player.position.z)
    const total = RACKETS_BY_DISTRICT[district.id].length
    const owned = game.districtOwned(district.id)
    const pct = total ? owned / total : 0
    this.el.districtName.textContent = district.short
    this.el.minimapLabel.textContent = district.short
    this.el.districtFill.style.width = Math.round(pct * 100) + '%'
    this.el.districtCount.textContent = `${owned} / ${total} RACKETS`
    this.el.districtStatus.textContent = pct >= 1 ? 'FAMILY CONTROL' : `${district.rival.toUpperCase()} ${Math.round((1 - pct) * 100)}%`
    this.el.pauseDistrict.textContent = `${district.short} · ${Math.round(pct * 100)}%`

    const chapter = CHAPTERS[Math.min(s.chapterIndex, CHAPTERS.length - 1)]
    this.el.chapterLabel.textContent = chapter.label
    this.el.objectiveTitle.textContent = chapter.title
    this.el.objectiveDesc.textContent = chapter.desc
    this.el.objectiveReward.textContent = money(chapter.reward)
    const progress = Math.min(chapter.goal, chapter.progress(game))
    this.el.objectiveFill.style.width = Math.round((progress / chapter.goal) * 100) + '%'
    this.el.objectiveCount.textContent = `${progress} / ${chapter.goal}`

    this.el.speedValue.textContent = Math.round(Math.abs(game.driveSpeed) * 2.1)
    this.el.gearValue.textContent = game.driveSpeed < -0.5 ? 'R' : 'D'
    this.el.driveHud.classList.toggle('hidden', !s.inCar)
    this.el.fireBtn.querySelector('span').textContent = s.inCar ? 'HORN' : 'FIRE'
    this.el.fireBtn.classList.toggle('dim', s.inCar)
    this.el.sprintBtn.classList.toggle('hidden', s.inCar)
    this.el.actionLabel.textContent = game.actionLabel || 'ENTER'
    this.el.actionBtn.classList.toggle('dim', !game.actionAvailable)
    this.el.actionBtn.classList.toggle('ready', !!game.actionReady)
    this.el.actionBtn.style.setProperty('--p', game.claimProgress.toFixed(3))

    if (game.actionProgress !== undefined) {
      this.el.actionBtn.style.setProperty('--p', game.claimProgress.toFixed(3))
    }

    if (now - this.lastMap > 130) {
      this.lastMap = now
      this.drawMinimap(game)
    }
  }

  setInteraction(info) {
    if (!info) {
      this.el.contextPrompt.classList.add('hidden')
      return
    }
    this.el.contextPrompt.classList.remove('hidden')
    this.el.contextKicker.textContent = info.kicker || ''
    this.el.contextTitle.textContent = info.title || ''
    this.el.contextSub.textContent = info.sub || ''
  }

  toast(text, type = '', duration = 2600) {
    const node = document.createElement('div')
    node.className = 'toast ' + type
    node.innerHTML = `<i></i><b>${text}</b>`
    this.el.toasts.appendChild(node)
    while (this.el.toasts.children.length > 3) this.el.toasts.firstElementChild.remove()
    const timer = window.setTimeout(() => {
      node.classList.add('out')
      window.setTimeout(() => node.remove(), 500)
    }, duration)
    this.toastTimers.push(timer)
  }

  event(text, type = '') {
    const node = document.createElement('div')
    node.className = 'event-line ' + type
    node.innerHTML = `<i></i><span>${text}</span>`
    this.el.eventFeed.prepend(node)
    while (this.el.eventFeed.children.length > 4) this.el.eventFeed.lastElementChild.remove()
    window.setTimeout(() => {
      node.classList.add('fade')
      window.setTimeout(() => node.remove(), 900)
    }, 5200)
  }

  hideTutorial() {
    this.el.tutorial.classList.add('out')
  }

  showChapter(chapter) {
    this.el.chapterFlashTitle.textContent = chapter.title
    this.el.chapterFlashReward.textContent = `${money(chapter.reward)} · RESPECT +${chapter.respect}`
    this.el.chapterFlash.classList.remove('hidden', 'out')
    window.setTimeout(() => this.el.chapterFlash.classList.add('out'), 2500)
    window.setTimeout(() => this.el.chapterFlash.classList.add('hidden'), 3300)
  }

  damageFlash() {
    this.el.damage.classList.remove('active')
    void this.el.damage.offsetWidth
    this.el.damage.classList.add('active')
  }

  openModal(name) {
    this.closeModals(false)
    const map = {
      pause: this.el.pauseModal,
      empire: this.el.empireModal,
      death: this.el.deathModal,
      victory: this.el.victoryModal,
    }
    map[name]?.classList.remove('hidden')
  }

  closeModals(all = true) {
    for (const el of [this.el.pauseModal, this.el.empireModal, this.el.deathModal, this.el.victoryModal]) {
      if (el) el.classList.add('hidden')
    }
  }

  renderEmpire(game) {
    const s = game.state
    this.el.empireMoney.textContent = shortMoney(s.money)
    this.el.empireIncome.textContent = money(game.incomePerMinute)
    this.el.empireIncome.innerHTML = money(game.incomePerMinute) + '<small>/MIN</small>'
    this.el.empireCrew.innerHTML = `${s.crew}<small>/8</small>`
    const rank = rankFor(s.respect)
    const next = nextRank(s.respect)
    this.el.empireRank.textContent = rank.name
    if (next) {
      const pct = Math.max(0, Math.min(1, (s.respect - rank.min) / (next.min - rank.min)))
      this.el.rankFill.style.width = Math.round(pct * 100) + '%'
      this.el.rankNext.textContent = `${next.min - s.respect} RESPECT TO ${next.name}`
    } else {
      this.el.rankFill.style.width = '100%'
      this.el.rankNext.textContent = 'THE CITY ANSWERS TO YOU'
    }
    const cost = game.crewCost
    this.el.hireCost.textContent = money(cost)
    this.el.hireBtn.disabled = s.crew >= 8 || s.money < cost

    const current = game.world.getDistrictAt(game.player.position.x, game.player.position.z)
    this.el.districtList.innerHTML = DISTRICTS.map((d) => {
      const total = RACKETS_BY_DISTRICT[d.id].length
      const owned = game.districtOwned(d.id)
      const controlled = owned === total
      const rackets = RACKETS_BY_DISTRICT[d.id]
        .map((r) => `<span class="dc-racket ${game.isOwned(r.id) ? 'owned' : ''}"><i></i>${r.name}</span>`)
        .join('')
      return `
        <article class="district-card ${d.id === current.id ? 'current' : ''} ${controlled ? 'controlled' : ''}">
          <div class="dc-head">
            <b>${d.name}</b>
            <span class="${controlled ? 'held' : ''}">${controlled ? 'FAMILY CONTROL' : `${owned} / ${total}`}</span>
          </div>
          <div class="dc-bar"><i style="width:${Math.round((owned / total) * 100)}%"></i></div>
          <div class="dc-rackets">${rackets}</div>
          <div class="dc-rival">${controlled ? 'TRIBUTE FLOWING' : `${d.rival.toUpperCase()} HOLDS ${total - owned} RACKET${total - owned === 1 ? '' : 'S'}`}</div>
        </article>`
    }).join('')

    this.el.territoryCopy.textContent = `${game.controlledDistricts} of 5 boroughs under family control. ${game.ownedCount} rackets paying tribute.`
    this.drawTerritory(game)
  }

  drawMinimap(game) {
    const ctx = this.minimapCtx
    const size = 320
    const c = size / 2
    const scale = 140 / 300
    ctx.clearRect(0, 0, size, size)

    ctx.save()
    ctx.beginPath()
    ctx.arc(c, c, c - 2, 0, Math.PI * 2)
    ctx.clip()
    ctx.fillStyle = '#07090f'
    ctx.fillRect(0, 0, size, size)

    // Water.
    ctx.fillStyle = '#07141d'
    ctx.fillRect(c + 280 * scale, 0, size, size)

    // Districts.
    for (const d of DISTRICTS) {
      const owned = game.districtOwned(d.id) / RACKETS_BY_DISTRICT[d.id].length
      ctx.beginPath()
      ctx.arc(c + d.center[0] * scale, c + d.center[1] * scale, 50, 0, Math.PI * 2)
      ctx.fillStyle = d.color + Math.round(8 + owned * 26).toString(16).padStart(2, '0')
      ctx.fill()
    }

    // Road grid.
    ctx.strokeStyle = 'rgba(150,148,136,.12)'
    ctx.lineWidth = 5
    for (const r of [-250, -150, -50, 50, 150, 250]) {
      ctx.beginPath()
      ctx.moveTo(c + r * scale, 0)
      ctx.lineTo(c + r * scale, size)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(0, c + r * scale)
      ctx.lineTo(size, c + r * scale)
      ctx.stroke()
    }

    // City blocks.
    ctx.fillStyle = 'rgba(35,39,48,.8)'
    for (let ix = -2; ix <= 2; ix++) {
      for (let iz = -2; iz <= 2; iz++) {
        const x = c + ix * 100 * scale
        const z = c + iz * 100 * scale
        ctx.fillRect(x - 40 * scale, z - 40 * scale, 80 * scale, 80 * scale)
      }
    }

    // Rackets.
    for (const r of game.world.rackets) {
      const x = c + r.pos.x * scale
      const z = c + r.pos.z * scale
      ctx.save()
      ctx.translate(x, z)
      ctx.rotate(Math.PI / 4)
      ctx.fillStyle = r.owned ? '#e8c36f' : r.underAttack ? '#ff7a5c' : '#c44545'
      ctx.strokeStyle = 'rgba(255,242,214,.55)'
      ctx.lineWidth = 1
      ctx.shadowColor = ctx.fillStyle
      ctx.shadowBlur = 9
      const s = r.owned ? 6.5 : 5
      ctx.fillRect(-s, -s, s * 2, s * 2)
      ctx.shadowBlur = 0
      ctx.strokeRect(-s, -s, s * 2, s * 2)
      ctx.restore()
    }

    // Safehouse.
    const shx = c + SAFEHOUSE.marker[0] * scale
    const shz = c + SAFEHOUSE.marker[1] * scale
    ctx.save()
    ctx.translate(shx, shz)
    ctx.fillStyle = '#fff2cf'
    ctx.shadowColor = '#e8c36f'
    ctx.shadowBlur = 12
    ctx.beginPath()
    ctx.arc(0, 0, 6, 0, Math.PI * 2)
    ctx.fill()
    ctx.shadowBlur = 0
    ctx.fillStyle = '#0a0b10'
    ctx.font = '700 8px Arial'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText('H', 0, 0.5)
    ctx.restore()
    ctx.shadowBlur = 0

    // Police.
    for (const cop of game.cops || []) {
      ctx.beginPath()
      ctx.arc(c + cop.group.position.x * scale, c + cop.group.position.z * scale, 3, 0, Math.PI * 2)
      ctx.fillStyle = '#65d6ff'
      ctx.fill()
    }

    // Player.
    const px = c + game.player.position.x * scale
    const pz = c + game.player.position.z * scale
    ctx.save()
    ctx.translate(px, pz)
    ctx.rotate(Math.PI - game.playerHeading)
    ctx.beginPath()
    ctx.moveTo(0, -8)
    ctx.lineTo(5.5, 6)
    ctx.lineTo(0, 3)
    ctx.lineTo(-5.5, 6)
    ctx.closePath()
    ctx.fillStyle = '#fff2cf'
    ctx.shadowColor = '#e8c36f'
    ctx.shadowBlur = 10
    ctx.fill()
    ctx.restore()

    ctx.restore()

    // Ring ticks.
    ctx.strokeStyle = 'rgba(216,179,107,.25)'
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.arc(c, c, c - 6, 0, Math.PI * 2)
    ctx.stroke()
  }

  drawTerritory(game) {
    const ctx = this.territoryCtx
    const W = this.el.territoryCanvas.width
    const H = this.el.territoryCanvas.height
    const scale = W / 640
    const ox = W / 2
    const oz = H / 2
    const X = (x) => ox + x * scale
    const Z = (z) => oz + z * scale
    ctx.clearRect(0, 0, W, H)
    ctx.fillStyle = '#06070b'
    ctx.fillRect(0, 0, W, H)

    // Water.
    const water = ctx.createLinearGradient(X(280), 0, W, 0)
    water.addColorStop(0, '#0a1a25')
    water.addColorStop(1, '#040a10')
    ctx.fillStyle = water
    ctx.fillRect(X(280), 0, W - X(280), H)
    ctx.strokeStyle = 'rgba(85,214,208,.16)'
    ctx.lineWidth = 1
    for (let z = -300; z <= 300; z += 40) {
      ctx.beginPath()
      ctx.moveTo(X(290), Z(z))
      ctx.lineTo(W, Z(z + 10))
      ctx.stroke()
    }

    // District fields.
    for (const d of DISTRICTS) {
      const total = RACKETS_BY_DISTRICT[d.id].length
      const owned = game.districtOwned(d.id)
      const control = owned / total
      ctx.beginPath()
      ctx.arc(X(d.center[0]), Z(d.center[1]), 175 * scale, 0, Math.PI * 2)
      ctx.fillStyle = d.color + Math.round(10 + control * 28).toString(16).padStart(2, '0')
      ctx.fill()
      ctx.strokeStyle = d.color + '35'
      ctx.lineWidth = 1.5
      ctx.stroke()
    }

    // Road grid.
    ctx.strokeStyle = 'rgba(115,118,124,.28)'
    ctx.lineWidth = 22 * scale
    for (const r of [-250, -150, -50, 50, 150, 250]) {
      ctx.beginPath()
      ctx.moveTo(X(r), 0)
      ctx.lineTo(X(r), H)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(0, Z(r))
      ctx.lineTo(W, Z(r))
      ctx.stroke()
    }

    // Blocks.
    ctx.fillStyle = 'rgba(23,26,33,.92)'
    for (let ix = -2; ix <= 2; ix++) {
      for (let iz = -2; iz <= 2; iz++) {
        ctx.fillRect(X(ix * 100) - 40 * scale, Z(iz * 100) - 40 * scale, 80 * scale, 80 * scale)
      }
    }

    // District labels.
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    for (const d of DISTRICTS) {
      const total = RACKETS_BY_DISTRICT[d.id].length
      const owned = game.districtOwned(d.id)
      ctx.font = '600 16px "Arial Narrow", Arial, sans-serif'
      ctx.fillStyle = 'rgba(240,232,216,.82)'
      ctx.fillText(d.short, X(d.center[0]), Z(d.center[1]) - 10)
      ctx.font = '500 11px Arial, sans-serif'
      ctx.fillStyle = d.color
      ctx.fillText(`${owned}/${total} RACKETS`, X(d.center[0]), Z(d.center[1]) + 10)
    }

    // Rackets.
    for (const r of game.world.rackets) {
      const x = X(r.pos.x)
      const z = Z(r.pos.z)
      ctx.save()
      ctx.translate(x, z)
      ctx.rotate(Math.PI / 4)
      ctx.fillStyle = r.owned ? '#e8c36f' : '#c44545'
      ctx.shadowColor = ctx.fillStyle
      ctx.shadowBlur = 9
      ctx.fillRect(-4, -4, 8, 8)
      ctx.restore()
    }
    ctx.shadowBlur = 0

    // Player.
    const px = X(game.player.position.x)
    const pz = Z(game.player.position.z)
    ctx.beginPath()
    ctx.arc(px, pz, 5, 0, Math.PI * 2)
    ctx.fillStyle = '#fff6df'
    ctx.shadowColor = '#e8c36f'
    ctx.shadowBlur = 12
    ctx.fill()
    ctx.shadowBlur = 0

    // Frame.
    ctx.strokeStyle = 'rgba(216,179,107,.18)'
    ctx.strokeRect(0.5, 0.5, W - 1, H - 1)
  }

  setDeathCost(amount) {
    this.el.deathCost.textContent = money(amount)
  }

  setVictory(game) {
    this.el.victoryMoney.textContent = shortMoney(game.state.money)
    this.el.victoryRespect.textContent = fmt.format(Math.floor(game.state.respect))
  }

  setStick(x, y, active) {
    this.el.stick.classList.toggle('active', active)
    this.el.stickKnob.style.transform = `translate(${x * 33}px, ${y * 33}px)`
  }
}
