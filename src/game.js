import * as THREE from 'three'
import {
  CHAPTERS,
  DISTRICTS,
  DISTRICT_BY_ID,
  RACKETS,
  RACKETS_BY_DISTRICT,
  SAFEHOUSE,
  rankFor,
} from './data.js'

const TAU = Math.PI * 2
const PI = Math.PI

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v))
}

function damp(current, target, lambda, dt) {
  return current + (target - current) * (1 - Math.exp(-lambda * dt))
}

function lerpAngle(a, b, t) {
  let d = ((b - a + PI) % TAU + TAU) % TAU - PI
  return a + d * t
}

function distance2D(ax, az, bx, bz) {
  const dx = ax - bx
  const dz = az - bz
  return Math.sqrt(dx * dx + dz * dz)
}

function fmt(n) {
  return new Intl.NumberFormat('en-US').format(Math.floor(n))
}

export class Game {
  constructor({ scene, camera, renderer, world, ui, audio, qualityHandler }) {
    this.scene = scene
    this.camera = camera
    this.renderer = renderer
    this.world = world
    this.ui = ui
    this.audio = audio
    this.qualityHandler = qualityHandler

    this.state = {
      money: 2500,
      respect: 0,
      heat: 0,
      health: 100,
      crew: 0,
      chapterIndex: 0,
      mode: 'intro',
      inCar: false,
      wanted: false,
    }

    this.player = null
    this.playerHeading = PI / 2
    this.playerCar = null
    this.currentCar = null
    this.cars = world.vehicles
    this.enemies = []
    this.attackers = []
    this.cops = []
    this.effects = []
    this.claimProgress = 0
    this.actionLabel = 'ACTION'
    this.actionAvailable = false
    this.actionReady = false
    this.interaction = null
    this.driveSpeed = 0
    this.lastCrime = 0
    this.timeSinceDamage = 10
    this.shootCooldown = 0
    this.copSpawnTimer = 4
    this.incomeTimer = 0
    this.incomeNotify = 0
    this.tutorialTimer = 16
    this.attackTimer = 130
    this.rivalAttack = null
    this.victoryTimer = -1
    this.elapsed = 0
    this.cameraShake = 0
    this.camYaw = -PI / 2
    this.camPitch = 0.34
    this.camDist = 11.4
    this.camOrbit = 0
    this.dragging = false
    this.dragStart = { x: 0, y: 0 }
    this.lastDragAt = 0
    this.tiltEnabled = false
    this.tiltSteer = 0
    this.tiltBaseline = null
    this.tiltRaw = 0
    this.qualityHigh = true
    this.hornCooldown = 0
    this.ambientTicker = 0

    this.input = {
      x: 0,
      y: 0,
      action: false,
      actionPressed: false,
      fire: false,
      sprint: false,
      keys: new Set(),
    }

    this.createPlayer()
    this.createPlayerCar()
    this.spawnGuards()
    this.bindControls()
    this.bindUI()
    this.setIntroCamera(0)
    this.ui.setTilt(false)
    this.ui.setSound(true)
    this.ui.setQuality(true)

    window.addEventListener('resize', () => this.onResize())
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && this.state.mode === 'playing') this.pause()
    })
  }

  // ---------------------------------------------------------------- setup

  createPlayer() {
    const group = new THREE.Group()
    const suit = new THREE.MeshStandardMaterial({ color: 0x101116, roughness: 0.62, metalness: 0.15 })
    const shirt = new THREE.MeshStandardMaterial({ color: 0xe8e1d1, roughness: 0.78 })
    const tie = new THREE.MeshStandardMaterial({ color: 0x7a1519, roughness: 0.55 })
    const skin = new THREE.MeshStandardMaterial({ color: 0xb98564, roughness: 0.8 })
    const hatMat = new THREE.MeshStandardMaterial({ color: 0x0c0d12, roughness: 0.68 })
    const shoe = new THREE.MeshStandardMaterial({ color: 0x090a0d, roughness: 0.45, metalness: 0.25 })

    const body = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.78, 0.34), suit)
    body.position.y = 1.08
    group.add(body)
    const shirtFront = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.55, 0.02), shirt)
    shirtFront.position.set(0, 1.1, 0.18)
    group.add(shirtFront)
    const tieMesh = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.4, 0.02), tie)
    tieMesh.position.set(0, 1.08, 0.195)
    group.add(tieMesh)

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.21, 10, 10), skin)
    head.position.y = 1.66
    group.add(head)
    const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.035, 12), hatMat)
    brim.position.y = 1.82
    group.add(brim)
    const hat = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.25, 0.24, 10), hatMat)
    hat.position.y = 1.92
    group.add(hat)
    const band = new THREE.Mesh(
      new THREE.CylinderGeometry(0.252, 0.252, 0.04, 10),
      new THREE.MeshStandardMaterial({ color: 0x3a2520, roughness: 0.7 }),
    )
    band.position.y = 1.85
    group.add(band)

    const armGeo = new THREE.BoxGeometry(0.17, 0.62, 0.2)
    const leftArm = new THREE.Group()
    leftArm.position.set(-0.39, 1.4, 0)
    const leftArmMesh = new THREE.Mesh(armGeo, suit)
    leftArmMesh.position.y = -0.28
    leftArm.add(leftArmMesh)
    const leftHand = new THREE.Mesh(new THREE.SphereGeometry(0.09, 7, 7), skin)
    leftHand.position.y = -0.61
    leftArm.add(leftHand)
    group.add(leftArm)

    const rightArm = new THREE.Group()
    rightArm.position.set(0.39, 1.4, 0)
    const rightArmMesh = new THREE.Mesh(armGeo, suit)
    rightArmMesh.position.y = -0.28
    rightArm.add(rightArmMesh)
    const rightHand = new THREE.Mesh(new THREE.SphereGeometry(0.09, 7, 7), skin)
    rightHand.position.y = -0.61
    rightArm.add(rightHand)
    const gun = new THREE.Mesh(
      new THREE.BoxGeometry(0.09, 0.1, 0.34),
      new THREE.MeshStandardMaterial({ color: 0x18191d, metalness: 0.85, roughness: 0.26 }),
    )
    gun.position.set(0.02, -0.62, 0.2)
    rightArm.add(gun)
    group.add(rightArm)

    const legGeo = new THREE.BoxGeometry(0.2, 0.68, 0.24)
    const leftLeg = new THREE.Group()
    leftLeg.position.set(-0.16, 0.7, 0)
    const leftLegMesh = new THREE.Mesh(legGeo, suit)
    leftLegMesh.position.y = -0.33
    leftLeg.add(leftLegMesh)
    const leftShoe = new THREE.Mesh(new THREE.BoxGeometry(0.23, 0.14, 0.38), shoe)
    leftShoe.position.set(0, -0.68, 0.06)
    leftLeg.add(leftShoe)
    group.add(leftLeg)

    const rightLeg = new THREE.Group()
    rightLeg.position.set(0.16, 0.7, 0)
    const rightLegMesh = new THREE.Mesh(legGeo, suit)
    rightLegMesh.position.y = -0.33
    rightLeg.add(rightLegMesh)
    const rightShoe = new THREE.Mesh(new THREE.BoxGeometry(0.23, 0.14, 0.38), shoe)
    rightShoe.position.set(0, -0.68, 0.06)
    rightLeg.add(rightShoe)
    group.add(rightLeg)

    const shadow = new THREE.Mesh(
      new THREE.CircleGeometry(0.6, 16),
      new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.38, depthWrite: false }),
    )
    shadow.rotation.x = -PI / 2
    shadow.position.y = 0.02
    shadow.scale.set(1, 0.8, 1)
    group.add(shadow)

    group.position.set(SAFEHOUSE.spawn[0], 0.28, SAFEHOUSE.spawn[1])
    group.rotation.y = PI / 2
    group.userData = { leftArm, rightArm, leftLeg, rightLeg, body, gun }
    this.scene.add(group)
    this.player = group

    this.playerLight = new THREE.PointLight(0xffd7b8, 6, 7.5, 2)
    this.playerLight.position.set(group.position.x, 2.6, group.position.z)
    this.scene.add(this.playerLight)
  }

  createPlayerCar() {
    const car = this.world.makeCar(0x2a151a, { name: 'EMPEROR', trim: 0xb28a43 })
    car.position.set(-50, 0, -108)
    car.rotation.y = 0
    this.scene.add(car)
    this.playerCar = this.world.registerVehicle(car, {
      name: 'EMPEROR',
      ai: false,
      kind: 'player',
      color: 0x2a151a,
    })
    this.playerCar.isPlayerCar = true
  }

  spawnGuards() {
    let districtIndex = 0
    for (const district of DISTRICTS) {
      for (const def of RACKETS_BY_DISTRICT[district.id]) {
        const racket = this.world.racketById.get(def.id)
        const count = 1 + (districtIndex % 2)
        const dx = def.marker[0] - def.shop[0]
        const dz = def.marker[1] - def.shop[1]
        const dl = Math.max(0.001, Math.hypot(dx, dz))
        const ox = dx / dl
        const oz = dz / dl
        const tx = -oz
        const tz = ox
        for (let i = 0; i < count; i++) {
          const spread = count === 1 ? 0 : (i === 0 ? -1.4 : 1.4)
          const x = def.marker[0] + ox * (1.4 + i * 1.5) + tx * spread
          const z = def.marker[1] + oz * (1.4 + i * 1.5) + tz * spread
          const enemy = this.spawnEnemy(x, z, racket, false)
          racket.guards.push(enemy)
        }
      }
      districtIndex++
    }
  }

  createEnemyMesh(kind = 'guard') {
    const group = new THREE.Group()
    const coatColor = kind === 'cop' ? 0x1c2b45 : kind === 'attacker' ? 0x311116 : 0x2a1216
    const coat = new THREE.Mesh(
      new THREE.BoxGeometry(0.58, 0.8, 0.32),
      new THREE.MeshStandardMaterial({ color: coatColor, roughness: 0.8, metalness: 0.1 }),
    )
    coat.position.y = 1.06
    group.add(coat)
    const shirt = new THREE.Mesh(
      new THREE.BoxGeometry(0.2, 0.52, 0.02),
      new THREE.MeshStandardMaterial({ color: kind === 'cop' ? 0xbfc8d4 : 0xc9bfae, roughness: 0.8 }),
    )
    shirt.position.set(0, 1.08, 0.17)
    group.add(shirt)
    const tie = new THREE.Mesh(
      new THREE.BoxGeometry(0.06, 0.36, 0.02),
      new THREE.MeshStandardMaterial({ color: 0x6d1115, roughness: 0.6 }),
    )
    tie.position.set(0, 1.05, 0.185)
    group.add(tie)
    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.2, 8, 8),
      new THREE.MeshStandardMaterial({ color: 0xa77454, roughness: 0.8 }),
    )
    head.position.y = 1.62
    group.add(head)
    const hat = new THREE.Mesh(
      new THREE.CylinderGeometry(0.25, 0.25, 0.05, 8),
      new THREE.MeshStandardMaterial({ color: 0x0d0e12, roughness: 0.7 }),
    )
    hat.position.y = 1.79
    group.add(hat)
    const legs = new THREE.Mesh(
      new THREE.BoxGeometry(0.4, 0.65, 0.26),
      new THREE.MeshStandardMaterial({ color: 0x0d0e12, roughness: 0.8 }),
    )
    legs.position.y = 0.36
    group.add(legs)
    const armL = new THREE.Mesh(
      new THREE.BoxGeometry(0.16, 0.62, 0.19),
      new THREE.MeshStandardMaterial({ color: coatColor, roughness: 0.8 }),
    )
    armL.position.set(-0.38, 1.18, 0.02)
    armL.rotation.z = 0.1
    group.add(armL)
    const armR = armL.clone()
    armR.position.x = 0.38
    armR.rotation.z = -0.1
    group.add(armR)
    const gun = new THREE.Mesh(
      new THREE.BoxGeometry(0.08, 0.1, 0.36),
      new THREE.MeshStandardMaterial({ color: 0x16171a, metalness: 0.8, roughness: 0.25 }),
    )
    gun.position.set(0.36, 1.0, 0.26)
    group.add(gun)
    const mark = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.15, 0),
      new THREE.MeshBasicMaterial({ color: kind === 'attacker' ? 0xff7a4d : 0xff4e4e, toneMapped: false }),
    )
    mark.position.y = 2.2
    group.add(mark)
    group.userData.mark = mark
    const shadow = new THREE.Mesh(
      new THREE.CircleGeometry(0.48, 12),
      new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.34, depthWrite: false }),
    )
    shadow.rotation.x = -PI / 2
    shadow.position.y = 0.02
    group.add(shadow)
    return group
  }

  spawnEnemy(x, z, racket, attacker = false) {
    const group = this.createEnemyMesh(attacker ? 'attacker' : 'guard')
    group.position.set(x, 0.28, z)
    this.scene.add(group)
    const enemy = {
      group,
      hp: 62,
      maxHp: 62,
      racket,
      home: new THREE.Vector3(x, 0.28, z),
      mode: 'idle',
      fireTimer: 0.8 + Math.random() * 1.5,
      dead: false,
      deadTimer: 0,
      attacker,
      phase: Math.random() * TAU,
      alerted: false,
    }
    this.enemies.push(enemy)
    if (attacker) this.attackers.push(enemy)
    return enemy
  }

  bindUI() {
    this.ui.bind({
      start: () => this.start(),
      tilt: () => this.toggleTilt(),
      pause: () => this.pause(),
      resume: () => this.resume(),
      empire: () => this.openEmpire(),
      closeEmpire: () => this.closeEmpire(),
      sound: () => this.toggleSound(),
      quality: () => this.toggleQuality(),
      restart: () => window.location.reload(),
      hire: () => this.hireCrew(),
      respawn: () => this.respawn(),
      keepPlaying: () => this.keepPlaying(),
    })
  }

  bindControls() {
    const canvas = this.renderer.domElement
    const stick = this.ui.el.stick
    const knob = this.ui.el.stickKnob
    const actionBtn = this.ui.el.actionBtn
    const fireBtn = this.ui.el.fireBtn
    const sprintBtn = this.ui.el.sprintBtn

    const setStickFromEvent = (e) => {
      const rect = stick.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      let dx = e.clientX - cx
      let dy = e.clientY - cy
      const max = rect.width * 0.37
      const len = Math.hypot(dx, dy)
      if (len > max) {
        dx = (dx / len) * max
        dy = (dy / len) * max
      }
      this.input.x = dx / max
      this.input.y = -dy / max
      this.ui.setStick(this.input.x, this.input.y, true)
    }

    stick.addEventListener('pointerdown', (e) => {
      e.preventDefault()
      e.stopPropagation()
      stick.setPointerCapture(e.pointerId)
      this.stickPointer = e.pointerId
      setStickFromEvent(e)
      this.ui.hideTutorial()
    })
    stick.addEventListener('pointermove', (e) => {
      if (this.stickPointer !== e.pointerId) return
      e.preventDefault()
      setStickFromEvent(e)
    })
    const releaseStick = (e) => {
      if (this.stickPointer !== e.pointerId) return
      this.stickPointer = null
      this.input.x = 0
      this.input.y = 0
      this.ui.setStick(0, 0, false)
    }
    stick.addEventListener('pointerup', releaseStick)
    stick.addEventListener('pointercancel', releaseStick)
    stick.addEventListener('lostpointercapture', releaseStick)

    const pressAction = (e) => {
      e.preventDefault()
      e.stopPropagation()
      this.input.action = true
      this.input.actionPressed = true
      actionBtn.classList.add('pressed')
      this.ui.hideTutorial()
    }
    const releaseAction = () => {
      this.input.action = false
      actionBtn.classList.remove('pressed')
    }
    actionBtn.addEventListener('pointerdown', pressAction)
    actionBtn.addEventListener('pointerup', releaseAction)
    actionBtn.addEventListener('pointercancel', releaseAction)
    actionBtn.addEventListener('lostpointercapture', releaseAction)

    const pressFire = (e) => {
      e.preventDefault()
      e.stopPropagation()
      this.input.fire = true
      if (this.state.inCar) this.horn()
      this.ui.hideTutorial()
    }
    const releaseFire = () => {
      this.input.fire = false
    }
    fireBtn.addEventListener('pointerdown', pressFire)
    fireBtn.addEventListener('pointerup', releaseFire)
    fireBtn.addEventListener('pointercancel', releaseFire)
    fireBtn.addEventListener('lostpointercapture', releaseFire)

    const pressSprint = (e) => {
      e.preventDefault()
      e.stopPropagation()
      this.input.sprint = true
      sprintBtn.classList.add('active')
    }
    const releaseSprint = () => {
      this.input.sprint = false
      sprintBtn.classList.remove('active')
    }
    sprintBtn.addEventListener('pointerdown', pressSprint)
    sprintBtn.addEventListener('pointerup', releaseSprint)
    sprintBtn.addEventListener('pointercancel', releaseSprint)
    sprintBtn.addEventListener('lostpointercapture', releaseSprint)

    // Camera drag.
    canvas.addEventListener('pointerdown', (e) => {
      if (e.target !== canvas) return
      this.dragging = true
      this.dragPointer = e.pointerId
      this.dragStart.x = e.clientX
      this.dragStart.y = e.clientY
      this.lastDragAt = this.elapsed
      canvas.setPointerCapture(e.pointerId)
    })
    canvas.addEventListener('pointermove', (e) => {
      if (!this.dragging || this.dragPointer !== e.pointerId) return
      const dx = e.clientX - this.dragStart.x
      const dy = e.clientY - this.dragStart.y
      this.dragStart.x = e.clientX
      this.dragStart.y = e.clientY
      this.lastDragAt = this.elapsed
      if (this.state.inCar) {
        this.camOrbit -= dx * 0.005
        this.camOrbit = clamp(this.camOrbit, -1.5, 1.5)
      } else {
        this.camYaw -= dx * 0.0055
        this.camPitch = clamp(this.camPitch + dy * 0.0035, 0.08, 0.82)
      }
    })
    const endDrag = (e) => {
      if (this.dragPointer !== e.pointerId) return
      this.dragging = false
      this.dragPointer = null
    }
    canvas.addEventListener('pointerup', endDrag)
    canvas.addEventListener('pointercancel', endDrag)
    canvas.addEventListener('lostpointercapture', endDrag)
    canvas.addEventListener('contextmenu', (e) => e.preventDefault())

    window.addEventListener('keydown', (e) => {
      const key = e.key.toLowerCase()
      if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' '].includes(key)) e.preventDefault()
      if (e.repeat) return
      this.input.keys.add(key)
      if (key === 'e') {
        this.input.action = true
        this.input.actionPressed = true
        this.ui.hideTutorial()
      }
      if (key === 'f' || key === ' ') {
        this.input.fire = true
        if (this.state.inCar) this.horn()
      }
      if (key === 'shift') this.input.sprint = true
      if (key === 'escape') {
        if (this.state.mode === 'playing') this.pause()
        else if (this.state.mode === 'paused') this.resume()
        else if (this.state.mode === 'empire') this.closeEmpire()
      }
      if (key === 'm' || key === 'tab') {
        e.preventDefault()
        if (this.state.mode === 'playing' || this.state.mode === 'paused') this.openEmpire()
        else if (this.state.mode === 'empire') this.closeEmpire()
      }
    })
    window.addEventListener('keyup', (e) => {
      const key = e.key.toLowerCase()
      this.input.keys.delete(key)
      if (key === 'e') this.input.action = false
      if (key === 'f' || key === ' ') this.input.fire = false
      if (key === 'shift') this.input.sprint = false
    })
    window.addEventListener('blur', () => {
      this.input.keys.clear()
      this.input.action = false
      this.input.fire = false
      this.input.sprint = false
      this.input.x = 0
      this.input.y = 0
      this.ui.setStick(0, 0, false)
    })
  }

  onResize() {
    // Camera projection is handled by main; the UI map is resolution independent.
  }

  // ---------------------------------------------------------------- state

  get ownedCount() {
    return this.world.rackets.filter((r) => r.owned).length
  }

  get controlledDistricts() {
    return DISTRICTS.filter((d) => this.districtOwned(d.id) === RACKETS_BY_DISTRICT[d.id].length).length
  }

  get incomePerMinute() {
    const base = this.world.rackets.reduce((sum, r) => sum + (r.owned ? r.base * 15 : 0), 0)
    return Math.floor(base * (1 + this.state.crew * 0.12))
  }

  get crewCost() {
    return 2000 + this.state.crew * 750
  }

  isOwned(id) {
    return !!this.world.racketById.get(id)?.owned
  }

  districtOwned(id) {
    return RACKETS_BY_DISTRICT[id].filter((r) => this.isOwned(r.id)).length
  }

  setIntroCamera(time) {
    const a = 0.45 + time * 0.035
    const radius = 205
    this.camera.position.set(Math.cos(a) * radius, 58 + Math.sin(time * 0.24) * 5, Math.sin(a) * radius)
    this.camera.lookAt(0, 24, 0)
  }

  start() {
    if (this.state.mode !== 'intro') return
    this.state.mode = 'playing'
    this.ui.enterGame()
    this.audio.start()
    this.cameraShake = 0

    // Cut straight to the street while the title card fades. A long camera
    // flight from the skyline passes through half the city's buildings.
    const pitch = this.camPitch
    const dist = this.camDist * Math.cos(pitch)
    const fx = this.player.position.x
    const fz = this.player.position.z
    this.camera.position.set(
      fx + Math.sin(this.camYaw) * dist,
      this.player.position.y + 2.7 + Math.sin(pitch) * 7.4,
      fz + Math.cos(this.camYaw) * dist,
    )
    this.camera.lookAt(
      fx - Math.sin(this.camYaw) * 3.2,
      this.player.position.y + 1.7,
      fz - Math.cos(this.camYaw) * 3.2,
    )

    this.ui.toast('THE CITY IS YOURS TO TAKE')
    this.ui.event('1987 · The Vanzetti hold Little Italy.', 'info')
    window.setTimeout(() => this.ui.event("Objective: take Bella's Diner across the street.", 'good'), 1300)
    window.setTimeout(() => this.ui.toast('FOLLOW THE GOLD LIGHT'), 2400)
    window.setTimeout(() => this.ui.hideTutorial(), 18000)
    this.ui.update(this, true)
  }

  pause() {
    if (this.state.mode !== 'playing') return
    this.state.mode = 'paused'
    this.resetInput()
    this.audio.setEngine(0, false)
    this.ui.renderEmpire(this)
    this.ui.openModal('pause')
  }

  resume() {
    if (this.state.mode !== 'paused' && this.state.mode !== 'empire') return
    this.ui.closeModals()
    this.state.mode = 'playing'
    this.audio.start()
  }

  openEmpire() {
    if (this.state.mode !== 'playing' && this.state.mode !== 'paused') return
    this.state.mode = 'empire'
    this.resetInput()
    this.audio.setEngine(0, false)
    this.ui.renderEmpire(this)
    this.ui.openModal('empire')
  }

  closeEmpire() {
    if (this.state.mode !== 'empire') return
    this.ui.closeModals()
    this.state.mode = 'playing'
  }

  resetInput() {
    this.input.x = 0
    this.input.y = 0
    this.input.action = false
    this.input.actionPressed = false
    this.input.fire = false
    this.input.sprint = false
    this.input.keys.clear()
    this.ui.setStick(0, 0, false)
  }

  toggleSound() {
    this.audio.start()
    this.audio.setEnabled(!this.audio.enabled)
    this.ui.setSound(this.audio.enabled)
  }

  toggleQuality() {
    this.qualityHigh = !this.qualityHigh
    this.ui.setQuality(this.qualityHigh)
    this.qualityHandler?.(this.qualityHigh)
    this.ui.toast(this.qualityHigh ? 'CINEMATIC LIGHTING ON' : 'PERFORMANCE MODE ON', '', 1800)
  }

  async toggleTilt() {
    if (this.tiltEnabled) {
      this.tiltEnabled = false
      this.tiltSteer = 0
      this.ui.setTilt(false)
      this.ui.toast('TILT STEERING OFF', '', 1800)
      return
    }
    if (!window.DeviceOrientationEvent) {
      this.ui.toast('MOTION SENSORS NOT AVAILABLE', 'bad')
      return
    }
    try {
      if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        const result = await DeviceOrientationEvent.requestPermission()
        if (result !== 'granted') throw new Error('denied')
      }
      if (!this.tiltHandler) {
        this.tiltHandler = (e) => {
          const angle = (screen.orientation && screen.orientation.angle) || window.orientation || 0
          const raw = Math.abs(angle) % 180 === 90 ? e.beta : e.gamma
          if (raw === null || raw === undefined) return
          this.tiltRaw = raw
          if (this.tiltBaseline === null) this.tiltBaseline = raw
          this.tiltSteer = clamp((raw - this.tiltBaseline) / 17, -1, 1)
        }
        window.addEventListener('deviceorientation', this.tiltHandler)
      }
      this.tiltEnabled = true
      this.tiltBaseline = null
      this.ui.setTilt(true)
      this.ui.toast('TILT STEERING ENABLED', 'good', 2200)
    } catch {
      this.ui.toast('MOTION ACCESS DENIED — USE THE STICK', 'bad', 2800)
      this.ui.setTilt(false)
    }
  }

  hireCrew() {
    const cost = this.crewCost
    if (this.state.crew >= 8) {
      this.ui.toast('THE FAMILY IS AT FULL STRENGTH', 'bad')
      return
    }
    if (this.state.money < cost) {
      this.ui.toast('NOT ENOUGH LIQUID CAPITAL', 'bad')
      return
    }
    this.state.money -= cost
    this.state.crew += 1
    this.audio.cash()
    this.ui.toast(`ASSOCIATE #${this.state.crew} JOINED THE FAMILY`, 'good', 2600)
    this.ui.event(`A new associate is on the payroll. Income +12%.`, 'good')
    this.ui.renderEmpire(this)
    this.ui.update(this, true)
  }

  // ---------------------------------------------------------------- interaction

  aliveGuards(racket) {
    return racket.guards.filter((g) => !g.dead)
  }

  findInteraction() {
    if (this.state.inCar) return { type: 'drive' }
    const p = this.player.position
    let best = null
    let bestDist = Infinity

    for (const racket of this.world.rackets) {
      if (racket.owned) continue
      const d = distance2D(p.x, p.z, racket.pos.x, racket.pos.z)
      if (d < 7.2 && d < bestDist) {
        best = { type: 'racket', racket, dist: d }
        bestDist = d
      }
    }
    if (best) return best

    for (const v of this.cars) {
      if (v.kind === 'police' || v.group === this.currentCar?.group) continue
      const d = distance2D(p.x, p.z, v.group.position.x, v.group.position.z)
      if (d < 7.5 && d < bestDist) {
        best = { type: 'car', vehicle: v, dist: d }
        bestDist = d
      }
    }
    if (best) return best

    const ds = distance2D(p.x, p.z, SAFEHOUSE.marker[0], SAFEHOUSE.marker[1])
    if (ds < 7.5) return { type: 'safehouse', dist: ds }

    return null
  }

  updateInteraction() {
    this.interaction = this.findInteraction()
    if (this.state.inCar) {
      this.actionLabel = 'EXIT'
      this.actionAvailable = true
      this.actionReady = true
      this.ui.setInteraction(null)
      return
    }

    if (!this.interaction) {
      this.actionLabel = 'ACTION'
      this.actionAvailable = false
      this.actionReady = false
      this.ui.setInteraction(null)
      return
    }

    if (this.interaction.type === 'racket') {
      const { racket } = this.interaction
      const guards = this.aliveGuards(racket).length
      if (guards > 0) {
        this.actionLabel = 'ENGAGE'
        this.actionAvailable = true
        this.actionReady = false
        this.ui.setInteraction({
          kicker: `RIVAL RACKET · ${guards} ENFORCER${guards > 1 ? 'S' : ''}`,
          title: racket.name,
          sub: 'Tap action or fire to take out the guards',
        })
      } else {
        this.actionLabel = 'TAKE OVER'
        this.actionAvailable = true
        this.actionReady = true
        this.ui.setInteraction({
          kicker: 'RACKET CLEARED',
          title: racket.name,
          sub: 'Hold the action button to take over',
        })
      }
    } else if (this.interaction.type === 'car') {
      const v = this.interaction.vehicle
      this.actionLabel = 'DRIVE'
      this.actionAvailable = true
      this.actionReady = true
      this.ui.setInteraction({
        kicker: v.kind === 'player' ? 'YOUR VEHICLE' : 'VEHICLE',
        title: v.name,
        sub: 'Tap to get behind the wheel',
      })
    } else if (this.interaction.type === 'safehouse') {
      const needs = this.state.heat > 0.2 || this.state.health < 99
      this.actionLabel = needs ? 'LAY LOW' : 'EMPIRE'
      this.actionAvailable = true
      this.actionReady = true
      this.ui.setInteraction({
        kicker: 'SAFEHOUSE · CASA NOSTRA',
        title: 'The Family',
        sub: needs ? 'Tap to heal & clear heat · $500' : 'Tap to open the family ledger',
      })
    }
  }

  handleAction(dt) {
    const inter = this.interaction
    if (!inter) {
      this.claimProgress = Math.max(0, this.claimProgress - dt * 2.5)
      return
    }

    if (this.input.actionPressed) {
      this.input.actionPressed = false
      if (inter.type === 'drive') {
        this.exitCar()
        return
      }
      if (inter.type === 'car') {
        this.enterCar(inter.vehicle)
        return
      }
      if (inter.type === 'safehouse') {
        this.useSafehouse()
        return
      }
      if (inter.type === 'racket') {
        const guards = this.aliveGuards(inter.racket).length
        if (guards > 0) {
          this.shoot()
          return
        }
      }
    }

    if (inter.type === 'racket') {
      const guards = this.aliveGuards(inter.racket).length
      if (guards === 0 && this.input.action) {
        this.claimProgress = Math.min(1, this.claimProgress + dt / 1.35)
        if (this.claimProgress >= 1) {
          this.claimRacket(inter.racket)
          this.claimProgress = 0
        }
      } else {
        this.claimProgress = Math.max(0, this.claimProgress - dt * 2.5)
      }
    } else {
      this.claimProgress = Math.max(0, this.claimProgress - dt * 2.5)
    }
  }

  useSafehouse() {
    const needs = this.state.heat > 0.2 || this.state.health < 99
    if (!needs) {
      this.openEmpire()
      return
    }
    if (this.state.money < 500) {
      this.ui.toast('YOU CANNOT AFFORD TO LAY LOW', 'bad')
      return
    }
    this.state.money -= 500
    this.state.heat = 0
    this.state.health = 100
    this.timeSinceDamage = 10
    this.removeCops()
    this.audio.cash()
    this.ui.toast('YOU LAID LOW · HEAT CLEARED', 'good')
    this.ui.event('Bribes paid. Wounds patched. The heat is off.', 'good')
    this.ui.update(this, true)
  }

  claimRacket(racket) {
    if (racket.owned) return
    racket.owned = true
    this.world.setRacketState(racket, 'owned')
    const wasControlled = this.districtOwned(racket.district) === RACKETS_BY_DISTRICT[racket.district].length
    const reward = 700 + racket.base * 20
    this.state.money += reward
    this.state.respect += 30
    this.state.heat = Math.min(5, this.state.heat + 0.35)
    this.lastCrime = 0
    this.audio.claim()
    this.ui.toast(`${racket.name.toUpperCase()} IS YOURS · +$${fmt(reward)}`, 'good', 3400)
    this.ui.event(`${racket.name} is paying tribute. +$${fmt(reward)}`, 'cash')
    this.ui.update(this, true)
    this.world.spawnImpact(new THREE.Vector3(racket.pos.x, 2, racket.pos.z), 0xe9c46f, 20)
    this.cameraShake = 0.28

    if (!wasControlled && this.districtOwned(racket.district) === RACKETS_BY_DISTRICT[racket.district].length) {
      const district = DISTRICT_BY_ID[racket.district]
      const bonus = 1500 + RACKETS_BY_DISTRICT[racket.district].length * 300
      this.state.money += bonus
      this.state.respect += 55
      this.ui.toast(`${district.name.toUpperCase()} IS FAMILY TERRITORY · +$${fmt(bonus)}`, 'good', 3800)
      this.ui.event(`The ${district.rival} surrender ${district.name}.`, 'good')
      this.audio.chapter()
    }
    this.ui.hideTutorial()
  }

  // ---------------------------------------------------------------- vehicles

  enterCar(vehicle) {
    if (!vehicle || this.state.inCar) return
    this.currentCar = vehicle
    this.state.inCar = true
    vehicle.ai = false
    vehicle.speed = 0
    this.driveSpeed = 0
    this.player.visible = false
    this.player.position.set(vehicle.group.position.x, 0.28, vehicle.group.position.z)
    this.playerHeading = vehicle.group.rotation.y
    this.camOrbit = 0
    this.ui.driveHud.classList.remove('hidden')
    this.ui.toast(vehicle.kind === 'player' ? 'THE EMPEROR IS YOURS' : `YOU TOOK THE ${vehicle.name}`, '', 1800)
    this.ui.hideTutorial()
    this.audio.start()
  }

  exitCar() {
    if (!this.state.inCar || !this.currentCar) return
    const car = this.currentCar
    const heading = car.group.rotation.y
    const sideX = Math.cos(heading) * 3
    const sideZ = -Math.sin(heading) * 3
    const candidates = [
      [car.group.position.x + sideX, car.group.position.z + sideZ],
      [car.group.position.x - sideX, car.group.position.z - sideZ],
      [car.group.position.x - Math.sin(heading) * 4, car.group.position.z - Math.cos(heading) * 4],
    ]
    let placed = false
    for (const [x, z] of candidates) {
      if (!this.world.collideCircle(x, z, 0.55)) {
        this.player.position.set(x, 0.28, z)
        placed = true
        break
      }
    }
    if (!placed) this.player.position.set(car.group.position.x + 3, 0.28, car.group.position.z)
    this.player.visible = true
    this.playerHeading = heading
    this.camYaw = heading + PI
    this.state.inCar = false
    this.currentCar = null
    this.driveSpeed = 0
    car.speed = 0
    this.ui.driveHud.classList.add('hidden')
    this.audio.setEngine(0, false)
    this.ui.setInteraction(null)
  }

  updateDriving(dt) {
    const car = this.currentCar
    if (!car) return
    let throttle = this.input.y
    const keys = this.input.keys
    if (keys.has('w') || keys.has('arrowup')) throttle = 1
    if (keys.has('s') || keys.has('arrowdown')) throttle = -1

    const speedBefore = car.speed
    if (throttle > 0.06) car.speed += throttle * 19 * dt
    else if (throttle < -0.06) car.speed += throttle * 12 * dt
    else car.speed *= 1 - 1.35 * dt
    car.speed = clamp(car.speed, -11, 37)
    if (Math.abs(car.speed) < 0.04) car.speed = 0

    let steer = this.input.x
    if (this.tiltEnabled && Math.abs(this.input.x) < 0.06) steer = this.tiltSteer
    else if (this.tiltEnabled) steer = this.input.x * 0.45 + this.tiltSteer * 0.55
    if (keys.has('a') || keys.has('arrowleft')) steer = -1
    if (keys.has('d') || keys.has('arrowright')) steer = 1

    const grip = Math.min(1, Math.abs(car.speed) / 4)
    car.heading = car.group.rotation.y
    car.heading += steer * (1.35 + 0.7 * Math.min(Math.abs(car.speed) / 18, 1)) * dt * grip * (car.speed >= 0 ? 1 : -1)
    car.group.rotation.y = car.heading

    const fx = Math.sin(car.heading)
    const fz = Math.cos(car.heading)
    const move = car.speed * dt
    const nx = car.group.position.x + fx * move
    const nz = car.group.position.z + fz * move
    const hit = this.world.collideCircle(nx, nz, 1.65)
    if (hit) {
      if (Math.abs(car.speed) > 16) {
        this.cameraShake = Math.min(0.7, Math.abs(car.speed) * 0.016)
        this.damagePlayer(Math.min(9, Math.abs(car.speed) * 0.18), true)
      }
      car.speed *= -0.14
      this.audio.hit()
    } else {
      car.group.position.x = nx
      car.group.position.z = nz
    }

    this.driveSpeed = car.speed
    this.player.position.set(car.group.position.x, 0.28, car.group.position.z)
    this.playerHeading = car.heading
    this.audio.setEngine(car.speed, true)

    if (this.input.fire) {
      this.horn()
    }
    this.hornCooldown = Math.max(0, this.hornCooldown - dt)

    // Bounce pedestrians back a little when close to the car.
    if (Math.abs(car.speed) > 4) {
      for (const ped of this.world.peds) {
        const d = distance2D(car.group.position.x, car.group.position.z, ped.group.position.x, ped.group.position.z)
        if (d < 3.2) {
          ped.dir *= -1
          this.world.panic = Math.max(this.world.panic, 3)
        }
      }
    }
  }

  horn() {
    if (this.hornCooldown > 0) return
    this.hornCooldown = 0.45
    this.audio.tone(220, 0.22, 'square', 0.08, 60)
    window.setTimeout(() => this.audio.tone(180, 0.18, 'square', 0.06, -30), 80)
  }

  // ---------------------------------------------------------------- movement

  movePlayer(dt) {
    const keys = this.input.keys
    let ix = this.input.x
    let iy = this.input.y
    if (keys.has('a') || keys.has('arrowleft')) ix -= 1
    if (keys.has('d') || keys.has('arrowright')) ix += 1
    if (keys.has('w') || keys.has('arrowup')) iy += 1
    if (keys.has('s') || keys.has('arrowdown')) iy -= 1
    const len = Math.hypot(ix, iy)
    if (len > 1) {
      ix /= len
      iy /= len
    }

    const moving = Math.hypot(ix, iy) > 0.12
    const sprint = this.input.sprint || keys.has('shift')
    const speed = sprint ? 12.2 : 7.2
    let walkPhase = this.player.userData.walkPhase || 0

    if (moving) {
      const fx = -Math.sin(this.camYaw)
      const fz = -Math.cos(this.camYaw)
      const rx = Math.cos(this.camYaw)
      const rz = -Math.sin(this.camYaw)
      let dx = fx * iy + rx * ix
      let dz = fz * iy + rz * ix
      const dl = Math.hypot(dx, dz)
      dx /= dl
      dz /= dl
      const step = speed * dt
      const px = this.player.position.x
      const pz = this.player.position.z
      if (!this.world.collideCircle(px + dx * step, pz, 0.5)) this.player.position.x += dx * step
      if (!this.world.collideCircle(this.player.position.x, pz + dz * step, 0.5)) this.player.position.z += dz * step

      const targetHeading = Math.atan2(dx, dz)
      this.playerHeading = lerpAngle(this.playerHeading, targetHeading, 1 - Math.exp(-14 * dt))
      this.player.rotation.y = this.playerHeading

      walkPhase += dt * (sprint ? 13 : 9)
      const swing = Math.sin(walkPhase) * (sprint ? 0.8 : 0.55)
      this.player.userData.leftLeg.rotation.x = swing
      this.player.userData.rightLeg.rotation.x = -swing
      this.player.userData.leftArm.rotation.x = -swing * 0.7
      this.player.userData.rightArm.rotation.x = swing * 0.45
      this.player.position.y = 0.28 + Math.abs(Math.sin(walkPhase)) * 0.035
      if (this.elapsed - this.lastDragAt > 2.4 && Math.abs(ix) < 0.25) {
        this.camYaw = lerpAngle(this.camYaw, this.playerHeading + PI, 1 - Math.exp(-0.55 * dt))
      }
    } else {
      walkPhase = 0
      this.player.userData.leftLeg.rotation.x = damp(this.player.userData.leftLeg.rotation.x, 0, 10, dt)
      this.player.userData.rightLeg.rotation.x = damp(this.player.userData.rightLeg.rotation.x, 0, 10, dt)
      this.player.userData.leftArm.rotation.x = damp(this.player.userData.leftArm.rotation.x, 0, 10, dt)
      this.player.userData.rightArm.rotation.x = damp(this.player.userData.rightArm.rotation.x, 0, 10, dt)
      this.player.position.y = damp(this.player.position.y, 0.28, 12, dt)
    }
    this.player.userData.walkPhase = walkPhase
    this.playerHeading = this.player.rotation.y
  }

  // ---------------------------------------------------------------- combat

  nearestTarget(maxDist = 30) {
    let best = null
    let bestD = maxDist
    const px = this.player.position.x
    const pz = this.player.position.z
    for (const enemy of this.enemies) {
      if (enemy.dead) continue
      const d = distance2D(px, pz, enemy.group.position.x, enemy.group.position.z)
      if (d < bestD) {
        bestD = d
        best = enemy
      }
    }
    return best
  }

  shoot() {
    if (this.state.inCar || this.state.mode !== 'playing') return
    if (this.shootCooldown > 0) return
    this.shootCooldown = 0.23
    this.audio.gunshot()
    this.cameraShake = Math.max(this.cameraShake, 0.08)
    this.world.panic = 4
    this.state.heat = Math.min(5, this.state.heat + 0.2)
    this.lastCrime = 0

    const muzzle = new THREE.Vector3(this.player.position.x, 1.35, this.player.position.z)
    const forward = new THREE.Vector3(Math.sin(this.playerHeading), 0, Math.cos(this.playerHeading))
    muzzle.add(forward.clone().multiplyScalar(0.45))
    muzzle.x += Math.cos(this.playerHeading) * 0.25

    const target = this.nearestTarget(31)
    let end
    if (target) {
      const tp = target.group.position
      end = new THREE.Vector3(tp.x, 1.1, tp.z)
      const dir = end.clone().sub(muzzle).normalize()
      this.playerHeading = Math.atan2(dir.x, dir.z)
      this.player.rotation.y = this.playerHeading
      this.spawnTracer(muzzle, end, 0xffd59a)
      if (Math.random() < 0.88) {
        target.hp -= 40
        target.alerted = true
        target.mode = 'chase'
        this.world.spawnImpact(end, 0xffb05c, 6)
        this.audio.hit()
        if (target.hp <= 0) this.killEnemy(target)
      } else {
        this.world.spawnImpact(end.clone().add(new THREE.Vector3(0, 0.4, 0)), 0x9a8c76, 4)
      }
    } else {
      end = muzzle.clone().add(forward.clone().multiplyScalar(24))
      this.spawnTracer(muzzle, end, 0xffd59a)
    }

    const flash = new THREE.Sprite(new THREE.SpriteMaterial({
      map: this.world.glowTexture,
      color: 0xffd8a0,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }))
    flash.scale.set(1.1, 1.1, 1)
    flash.position.copy(muzzle)
    this.scene.add(flash)
    this.effects.push({ object: flash, life: 0.09, max: 0.09, fade: true, type: 'flash' })
    this.ui.hideTutorial()
  }

  spawnTracer(from, to, color) {
    const geo = new THREE.BufferGeometry().setFromPoints([from, to])
    const mat = new THREE.LineBasicMaterial({
      color,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    const line = new THREE.Line(geo, mat)
    this.scene.add(line)
    this.effects.push({ object: line, life: 0.11, max: 0.11, fade: true, type: 'tracer' })
  }

  killEnemy(enemy) {
    if (enemy.dead) return
    enemy.dead = true
    enemy.deadTimer = 0
    enemy.mode = 'dead'
    enemy.group.userData.mark.visible = false
    const reward = 45 + Math.floor(Math.random() * 40)
    this.state.money += reward
    this.state.respect += 8
    this.state.heat = Math.min(5, this.state.heat + 0.55)
    this.lastCrime = 0
    this.audio.cash()
    this.world.spawnImpact(new THREE.Vector3(enemy.group.position.x, 1.2, enemy.group.position.z), 0xff8b6a, 12)
    this.ui.event(`Enforcer down. +$${reward}`, 'bad')

    if (enemy.racket && !enemy.racket.owned && !enemy.attacker) {
      if (this.aliveGuards(enemy.racket).length === 0) {
        this.world.setRacketState(enemy.racket, 'cleared')
        this.ui.toast('THE GUARDS ARE DOWN · MOVE IN', 'good', 3000)
        this.ui.event(`${enemy.racket.name} is unprotected.`, 'info')
      }
    }
    if (enemy.attacker) {
      const remaining = this.attackers.filter((a) => !a.dead).length
      if (remaining === 0 && this.rivalAttack) {
        this.resolveRivalAttack()
      }
    }
  }

  damagePlayer(amount, fromCar = false) {
    if (this.state.mode !== 'playing') return
    this.state.health -= amount
    this.timeSinceDamage = 0
    this.cameraShake = Math.max(this.cameraShake, 0.16)
    this.ui.damageFlash()
    this.audio.hit()
    if (this.state.health <= 0) {
      this.state.health = 0
      this.die()
    }
  }

  die() {
    this.state.mode = 'dead'
    this.resetInput()
    this.audio.setEngine(0, false)
    if (this.state.inCar) this.exitCar()
    const cost = Math.min(Math.floor(this.state.money * 0.18), 4500)
    this.state.money = Math.max(0, this.state.money - cost)
    this.deathCost = cost
    this.ui.setDeathCost(cost)
    this.ui.openModal('death')
    this.ui.update(this, true)
  }

  respawn() {
    this.ui.closeModals()
    this.state.mode = 'playing'
    this.state.health = 100
    this.state.heat = 0
    this.timeSinceDamage = 10
    this.removeCops()
    this.player.visible = true
    this.player.position.set(SAFEHOUSE.spawn[0], 0.28, SAFEHOUSE.spawn[1])
    this.playerHeading = PI / 2
    this.camYaw = -PI / 2
    this.camPitch = 0.34
    this.player.rotation.y = PI / 2
    this.resetInput()
    this.ui.update(this, true)
    this.ui.toast('BACK ON YOUR FEET', 'good')
  }

  updateEnemies(dt) {
    const p = this.player.position
    for (const enemy of this.enemies) {
      if (enemy.dead) {
        enemy.deadTimer += dt
        enemy.group.rotation.z = Math.min(PI / 2, enemy.deadTimer * 4)
        enemy.group.position.y = Math.max(0.12, 0.28 - enemy.deadTimer * 0.2)
        if (enemy.deadTimer > 1.6 && enemy.group.parent) {
          this.scene.remove(enemy.group)
          enemy.group.parent = null
        }
        continue
      }

      const e = enemy.group.position
      const dist = distance2D(e.x, e.z, p.x, p.z)
      const racketDist = enemy.racket ? distance2D(e.x, e.z, enemy.racket.pos.x, enemy.racket.pos.z) : 0
      if (!enemy.alerted && dist < 22) enemy.alerted = true
      if (!enemy.alerted && enemy.attacker && dist < 60) enemy.alerted = true

      if (enemy.alerted && dist < 44) {
        enemy.mode = 'chase'
        const dx = p.x - e.x
        const dz = p.z - e.z
        const dl = Math.max(0.001, Math.hypot(dx, dz))
        if (dist > 2.5) {
          const speed = 3.4
          const nx = e.x + (dx / dl) * speed * dt
          const nz = e.z + (dz / dl) * speed * dt
          if (!this.world.collideCircle(nx, e.z, 0.38)) e.x = nx
          if (!this.world.collideCircle(e.x, nz, 0.38)) e.z = nz
        }
        enemy.group.rotation.y = Math.atan2(dx, dz)
        enemy.fireTimer -= dt
        if (dist < 19 && enemy.fireTimer <= 0) {
          enemy.fireTimer = 1.3 + Math.random() * 1.2
          const from = new THREE.Vector3(e.x, 1.35, e.z)
          const to = new THREE.Vector3(p.x + (Math.random() - 0.5) * 0.6, 1.1, p.z + (Math.random() - 0.5) * 0.6)
          this.spawnTracer(from, to, 0xff6a5a)
          this.audio.enemyShot()
          if (Math.random() < 0.55) {
            this.damagePlayer(this.state.inCar ? 4 : 7 + Math.random() * 3)
          }
          this.world.spawnImpact(to, 0xff6a5a, 3)
        }
      } else {
        enemy.mode = 'idle'
        const a = this.elapsed * 0.45 + enemy.phase
        const hx = enemy.home.x + Math.cos(a) * 1.1
        const hz = enemy.home.z + Math.sin(a) * 1.1
        if (!this.world.collideCircle(hx, hz, 0.35)) {
          e.x = damp(e.x, hx, 1.4, dt)
          e.z = damp(e.z, hz, 1.4, dt)
        }
        enemy.group.rotation.y = a + PI / 2
        if (dist > 55 && racketDist > 50) {
          enemy.alerted = false
        }
      }
      if (enemy.group.userData.mark) {
        enemy.group.userData.mark.rotation.y += dt * 2.5
        enemy.group.userData.mark.position.y = 2.2 + Math.sin(this.elapsed * 3 + enemy.phase) * 0.08
      }
    }
  }

  // ---------------------------------------------------------------- police

  updateHeat(dt) {
    this.lastCrime += dt
    if (this.lastCrime > 10 && this.state.heat > 0) {
      this.state.heat = Math.max(0, this.state.heat - dt * 0.085)
    }
    const stars = Math.floor(this.state.heat)
    const wanted = stars >= 2
    if (wanted && !this.state.wanted) {
      this.state.wanted = true
      this.ui.event('POLICE ALERT · cruisers are moving in.', 'bad')
    }
    if (!wanted && this.state.wanted) {
      this.state.wanted = false
      this.removeCops()
      this.ui.event('The heat died down. The cops backed off.', 'good')
      this.ui.toast('HEAT CLEARED', 'good', 2200)
    }

    if (wanted) {
      this.copSpawnTimer -= dt
      const desired = Math.min(3, stars - 1)
      if (this.cops.length < desired && this.copSpawnTimer <= 0) {
        this.spawnCop()
        this.copSpawnTimer = 6
      }
    }
  }

  spawnCop() {
    const angle = Math.random() * TAU
    let x = this.player.position.x + Math.cos(angle) * 70
    let z = this.player.position.z + Math.sin(angle) * 70
    for (let i = 0; i < 12; i++) {
      if (!this.world.collideCircle(x, z, 2.4)) break
      x = this.player.position.x + Math.cos(angle + i) * (60 + i * 4)
      z = this.player.position.z + Math.sin(angle + i) * (60 + i * 4)
    }
    const car = this.world.makeCar(0x10141b, { police: true, name: 'POLICE CRUISER' })
    car.position.set(x, 0, z)
    car.rotation.y = Math.atan2(this.player.position.x - x, this.player.position.z - z)
    this.scene.add(car)
    const cop = {
      group: car,
      heading: car.rotation.y,
      speed: 0,
      cooldown: 0,
      siren: 0,
      lightPhase: 0,
    }
    this.cops.push(cop)
    this.audio.siren()
  }

  removeCops() {
    for (const cop of this.cops) {
      this.scene.remove(cop.group)
    }
    this.cops = []
  }

  updateCops(dt) {
    for (let i = this.cops.length - 1; i >= 0; i--) {
      const cop = this.cops[i]
      const c = cop.group.position
      const p = this.player.position
      const dx = p.x - c.x
      const dz = p.z - c.z
      const dist = Math.hypot(dx, dz)
      if (dist > 190) {
        this.scene.remove(cop.group)
        this.cops.splice(i, 1)
        continue
      }

      const targetHeading = Math.atan2(dx, dz)
      cop.heading = lerpAngle(cop.heading, targetHeading, 1 - Math.exp(-2.2 * dt))
      cop.group.rotation.y = cop.heading
      const speedTarget = dist > 10 ? 23 : 11
      cop.speed = damp(cop.speed, speedTarget, 1.8, dt)
      const nx = c.x + Math.sin(cop.heading) * cop.speed * dt
      const nz = c.z + Math.cos(cop.heading) * cop.speed * dt
      if (!this.world.collideCircle(nx, nz, 1.7)) {
        c.x = nx
        c.z = nz
      } else {
        const sx = c.x + Math.sin(cop.heading + 1.2) * cop.speed * dt
        const sz = c.z + Math.cos(cop.heading + 1.2) * cop.speed * dt
        if (!this.world.collideCircle(sx, sz, 1.7)) {
          c.x = sx
          c.z = sz
        }
        cop.speed *= 0.6
      }

      cop.cooldown -= dt
      if (dist < 5.4 && cop.cooldown <= 0) {
        cop.cooldown = 1.3
        this.damagePlayer(this.state.inCar ? 5 : 9)
        this.cameraShake = 0.22
        if (this.state.inCar && this.currentCar) this.currentCar.speed *= 0.72
      }

      cop.siren -= dt
      if (cop.siren <= 0 && dist < 80) {
        cop.siren = 5.2
        this.audio.siren()
      }

      const lights = cop.group.userData.policeLights
      if (lights) {
        const pulse = Math.sin(this.elapsed * 12) > 0
        lights[0].material.color.setHex(pulse ? 0xff2b2b : 0x4a0b0b)
        lights[1].material.color.setHex(pulse ? 0x0f1b52 : 0x3b8dff)
      }
    }
  }

  // ---------------------------------------------------------------- simulation

  updateIncome(dt) {
    this.incomeTimer += dt
    this.incomeNotify += dt
    if (this.incomeTimer >= 4) {
      this.incomeTimer -= 4
      const total = this.world.rackets.reduce((sum, r) => sum + (r.owned ? r.base : 0), 0)
      const inc = total * (1 + this.state.crew * 0.12)
      if (inc > 0) {
        this.state.money += inc
        if (this.incomeNotify > 18) {
          this.incomeNotify = 0
          this.ui.event(`Tribute collected: +$${fmt(inc * 4)}/min.`, 'cash')
        }
      }
    }
  }

  updateChapters(dt) {
    if (this.victoryTimer >= 0) {
      this.victoryTimer -= dt
      if (this.victoryTimer <= 0) {
        this.victoryTimer = -1
        this.showVictory()
      }
      return
    }
    if (this.state.chapterIndex >= CHAPTERS.length) return
    const chapter = CHAPTERS[this.state.chapterIndex]
    if (chapter.progress(this) >= chapter.goal) {
      this.completeChapter(chapter)
    }
  }

  completeChapter(chapter) {
    this.state.money += chapter.reward
    this.state.respect += chapter.respect
    this.state.chapterIndex += 1
    this.audio.chapter()
    this.ui.showChapter(chapter)
    this.ui.toast(`CHAPTER COMPLETE · +$${fmt(chapter.reward)}`, 'good', 3600)
    this.ui.event(`${chapter.title} complete. The family grows stronger.`, 'good')
    this.cameraShake = 0.2
    if (this.state.chapterIndex >= CHAPTERS.length) {
      this.victoryTimer = 4.2
    }
    this.ui.update(this, true)
  }

  showVictory() {
    if (this.state.mode !== 'playing') return
    this.state.mode = 'victory'
    this.resetInput()
    this.audio.setEngine(0, false)
    this.ui.setVictory(this)
    this.ui.openModal('victory')
    this.audio.chapter()
  }

  keepPlaying() {
    this.ui.closeModals()
    this.state.mode = 'playing'
    this.state.chapterIndex = CHAPTERS.length
  }

  updateRivalAttack(dt) {
    if (!this.state.wanted && this.ownedCount > 0) {
      this.attackTimer -= dt
    }
    if (!this.rivalAttack && this.attackTimer <= 0 && this.ownedCount > 0) {
      const owned = this.world.rackets.filter((r) => r.owned)
      const target = owned[Math.floor(Math.random() * owned.length)]
      this.rivalAttack = { racket: target, timeLeft: 65 }
      target.underAttack = true
      this.attackers = []
      const district = DISTRICT_BY_ID[target.district]
      for (let i = 0; i < 2; i++) {
        const a = i * 2.4 + Math.random()
        const enemy = this.spawnEnemy(
          target.pos.x + Math.cos(a) * 7,
          target.pos.z + Math.sin(a) * 7,
          target,
          true,
        )
        enemy.alerted = true
        enemy.home.set(target.pos.x + Math.cos(a) * 5, 0.28, target.pos.z + Math.sin(a) * 5)
      }
      this.ui.toast(`${target.name.toUpperCase()} IS UNDER ATTACK`, 'bad', 4200)
      this.ui.event(`${district.rival} enforcers are hitting ${target.name}. Defend it.`, 'bad')
      this.audio.siren()
    }

    if (this.rivalAttack) {
      this.rivalAttack.timeLeft -= dt
      const alive = this.attackers.filter((a) => !a.dead).length
      if (alive === 0) {
        this.resolveRivalAttack()
      } else if (this.rivalAttack.timeLeft <= 0) {
        const racket = this.rivalAttack.racket
        racket.owned = false
        racket.underAttack = false
        this.world.setRacketState(racket, 'rival')
        this.ui.toast(`${racket.name.toUpperCase()} HAS FALLEN`, 'bad', 4000)
        this.ui.event(`You lost ${racket.name}. The rival family moved back in.`, 'bad')
        this.rivalAttack = null
        this.attackTimer = 150
        this.state.respect = Math.max(0, this.state.respect - 30)
        this.audio.chapter()
      }
    }
  }

  resolveRivalAttack() {
    if (!this.rivalAttack) return
    const racket = this.rivalAttack.racket
    racket.underAttack = false
    const reward = 900
    this.state.money += reward
    this.state.respect += 35
    this.ui.toast('RACKET DEFENDED · +$900', 'good', 3200)
    this.ui.event(`You held ${racket.name}. The family remembers.`, 'good')
    this.audio.cash()
    this.attackers = []
    this.rivalAttack = null
    this.attackTimer = 170
  }

  // ---------------------------------------------------------------- update loop

  update(dt) {
    dt = Math.min(dt, 0.05)
    this.elapsed += dt

    if (this.state.mode === 'intro') {
      this.setIntroCamera(this.elapsed)
      this.world.update(dt, this.player.position, this.camera)
      this.world.updateEffects(dt)
      this.updateEffects(dt)
      return
    }

    if (this.state.mode !== 'playing') {
      this.world.update(dt * 0.15, this.player.position, this.camera)
      this.world.updateEffects(dt)
      this.updateEffects(dt)
      return
    }

    this.shootCooldown = Math.max(0, this.shootCooldown - dt)
    this.timeSinceDamage += dt
    if (this.timeSinceDamage > 6 && this.state.health < 100) {
      this.state.health = Math.min(100, this.state.health + dt * 2.6)
    }

    this.updateInteraction()
    this.handleAction(dt)

    if (this.state.inCar) {
      this.updateDriving(dt)
    } else {
      this.movePlayer(dt)
      if (this.input.fire) this.shoot()
    }

    this.updateEnemies(dt)
    this.updateHeat(dt)
    this.updateCops(dt)
    this.updateIncome(dt)
    this.updateRivalAttack(dt)
    this.updateChapters(dt)
    if (this.playerLight) {
      this.playerLight.position.set(this.player.position.x, 2.6, this.player.position.z)
      this.playerLight.intensity = this.state.inCar ? 4 : 6
    }
    this.updateCamera(dt)
    this.world.update(dt, this.player.position, this.camera)
    this.world.updateEffects(dt)
    this.updateEffects(dt)

    if (this.tutorialTimer > 0) {
      this.tutorialTimer -= dt
      if (this.tutorialTimer <= 0) this.ui.hideTutorial()
    }

    this.ui.update(this)
    this.ui.actionProgress = this.claimProgress
  }

  updateEffects(dt) {
    for (let i = this.effects.length - 1; i >= 0; i--) {
      const fx = this.effects[i]
      fx.life -= dt
      if (fx.fade) fx.object.material.opacity = Math.max(0, fx.life / fx.max)
      if (fx.life <= 0) {
        this.scene.remove(fx.object)
        if (fx.object.geometry) fx.object.geometry.dispose()
        if (fx.object.material) fx.object.material.dispose()
        this.effects.splice(i, 1)
      }
    }
  }

  updateCamera(dt) {
    const focus = this.player.position
    let desiredX
    let desiredY
    let desiredZ
    let lookX
    let lookY
    let lookZ

    if (this.state.inCar && this.currentCar) {
      const car = this.currentCar
      const heading = car.heading
      const behind = heading + PI + this.camOrbit
      const dist = 10.6
      const fx = Math.sin(heading)
      const fz = Math.cos(heading)
      desiredX = car.group.position.x + Math.sin(behind) * dist
      desiredY = 4.6 + Math.abs(car.speed) * 0.014
      desiredZ = car.group.position.z + Math.cos(behind) * dist
      lookX = car.group.position.x + fx * 4.5
      lookY = 1.35
      lookZ = car.group.position.z + fz * 4.5
      this.camOrbit = damp(this.camOrbit, 0, 1.1, dt)
      this.camYaw = heading + PI
    } else {
      const pitch = this.camPitch
      const dist = this.camDist * Math.cos(pitch)
      desiredX = focus.x + Math.sin(this.camYaw) * dist
      desiredY = focus.y + 2.7 + Math.sin(pitch) * 7.4
      desiredZ = focus.z + Math.cos(this.camYaw) * dist
      lookX = focus.x - Math.sin(this.camYaw) * 3.2
      lookY = focus.y + 1.7
      lookZ = focus.z - Math.cos(this.camYaw) * 3.2
    }

    // Keep the camera out of buildings.
    const ox = focus.x
    const oz = focus.z
    const dx = desiredX - ox
    const dz = desiredZ - oz
    const dist2D = Math.hypot(dx, dz)
    if (dist2D > 0.1) {
      let safe = dist2D
      for (let t = 1.8; t <= dist2D; t += 0.45) {
        if (this.world.collideCircle(ox + (dx / dist2D) * t, oz + (dz / dist2D) * t, 0.35)) {
          safe = Math.max(1.6, t - 0.65)
          break
        }
      }
      if (safe < dist2D) {
        desiredX = ox + (dx / dist2D) * safe
        desiredZ = oz + (dz / dist2D) * safe
        desiredY = Math.max(desiredY - (dist2D - safe) * 0.18, 2.2)
      }
    }

    const lambda = this.state.mode === 'playing' && this.elapsed < 4 ? 2.2 : 5.8
    this.camera.position.x = damp(this.camera.position.x, desiredX, lambda, dt)
    this.camera.position.y = damp(this.camera.position.y, desiredY, lambda, dt)
    this.camera.position.z = damp(this.camera.position.z, desiredZ, lambda, dt)

    if (this.cameraShake > 0.001) {
      this.camera.position.x += (Math.random() - 0.5) * this.cameraShake
      this.camera.position.y += (Math.random() - 0.5) * this.cameraShake * 0.6
      this.camera.position.z += (Math.random() - 0.5) * this.cameraShake
      this.cameraShake = damp(this.cameraShake, 0, 9, dt)
    }
    this.camera.lookAt(lookX, lookY, lookZ)
  }
}
