import * as THREE from 'three'
import { createCarMesh } from './vehicles.js'
import { clamp, rand, dist2, radialTexture } from './utils.js'

const glowTex = radialTexture('rgba(255,220,150,.9)', 'rgba(255,170,60,0)', 96)

class Enemy {
  constructor(scene, world, x, z) {
    this.scene = scene; this.world = world
    this.pos = new THREE.Vector3(x, 0, z)
    this.health = 100
    this.dead = false
    this.downTimer = 0
    this.cooldown = rand(1, 2.5)
    this.radius = .55
    this.heading = 0
    this.hitFlash = 0
    this.group = new THREE.Group()
    const coat = new THREE.MeshStandardMaterial({ color: 0x1e1f24, roughness: .9 })
    const skin = new THREE.MeshStandardMaterial({ color: 0x8b6650, roughness: .8 })
    const hat = new THREE.MeshStandardMaterial({ color: 0x141416, roughness: .8 })
    const body = new THREE.Mesh(new THREE.CylinderGeometry(.26, .32, .95, 8), coat)
    body.position.y = 1.15; body.castShadow = true; this.group.add(body)
    const head = new THREE.Mesh(new THREE.SphereGeometry(.18, 10, 8), skin); head.position.y = 1.76; this.group.add(head)
    const brim = new THREE.Mesh(new THREE.CylinderGeometry(.3, .3, .04, 12), hat); brim.position.y = 1.9; this.group.add(brim)
    const crown = new THREE.Mesh(new THREE.CylinderGeometry(.19, .21, .2, 10), hat); crown.position.y = 2; this.group.add(crown)
    this.legs = []
    for (const s of [-1, 1]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(.17, .7, .2), new THREE.MeshStandardMaterial({ color: 0x111216, roughness: .9 }))
      leg.geometry.translate(0, -.35, 0); leg.position.set(s * .12, .7, 0); this.group.add(leg); this.legs.push(leg)
    }
    this.arms = []
    for (const s of [-1, 1]) {
      const arm = new THREE.Mesh(new THREE.CylinderGeometry(.07, .08, .55, 6), coat)
      arm.geometry.translate(0, -.27, 0); arm.position.set(s * .31, 1.5, 0); this.group.add(arm); this.arms.push(arm)
    }
    const gun = new THREE.Mesh(new THREE.BoxGeometry(.07, .1, .4), new THREE.MeshStandardMaterial({ color: 0x26282c, metalness: .8, roughness: .3 }))
    gun.position.set(0, -.55, .25); this.arms[1].add(gun)
    this.flash = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: 0xffc070, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }))
    this.flash.scale.set(.8, .8, 1); this.flash.position.set(0, -.55, .55); this.flash.visible = false
    this.arms[1].add(this.flash)
    this.group.position.copy(this.pos)
    scene.add(this.group)
    this.walk = rand(0, 6)
  }
  update(dt, player, playerPos, time, onShoot) {
    this.flash.visible = false
    if (this.dead) {
      this.downTimer -= dt
      this.group.rotation.z = Math.min(Math.PI / 2, this.group.rotation.z + dt * 5)
      this.group.position.y = Math.max(-.35, this.group.position.y - dt * 1.5)
      if (this.downTimer <= 0) this.group.visible = false
      return
    }
    this.hitFlash = Math.max(0, this.hitFlash - dt)
    const to = new THREE.Vector3(playerPos.x - this.pos.x, 0, playerPos.z - this.pos.z)
    const d = to.length()
    if (d > .01) this.heading = Math.atan2(to.x, to.z)
    // move to range
    if (d > 16) {
      this.pos.x += (to.x / d) * 2.2 * dt
      this.pos.z += (to.z / d) * 2.2 * dt
      this.walk += dt * 7
    } else if (d < 7) {
      this.pos.x -= (to.x / d) * 1.6 * dt
      this.pos.z -= (to.z / d) * 1.6 * dt
      this.walk += dt * 6
    }
    this.world.resolveCircle(this.pos, .45)
    this.pos.x = clamp(this.pos.x, -170, 170)
    this.pos.z = clamp(this.pos.z, -170, 180)
    this.group.position.set(this.pos.x, 0, this.pos.z)
    this.group.rotation.y = this.heading
    const walk = Math.sin(this.walk) * .45
    this.legs[0].rotation.x = walk; this.legs[1].rotation.x = -walk
    this.arms[0].rotation.x = -walk * .5
    this.arms[1].rotation.x = -1.35
    // shoot
    this.cooldown -= dt
    if (this.cooldown <= 0 && d < 34 && !player.dead) {
      this.cooldown = rand(1.6, 2.9)
      this.flash.visible = true
      this.arms[1].rotation.x = -1.5
      const from = new THREE.Vector3(this.pos.x, 1.35, this.pos.z)
      onShoot?.(from, playerPos)
    }
  }
  hit(v) {
    if (this.dead) return false
    this.health -= v
    this.hitFlash = .15
    if (this.health <= 0) {
      this.dead = true; this.downTimer = 5
      return true
    }
    return false
  }
}

class ScriptedCar {
  constructor(scene, world, x, z, heading, route) {
    this.scene = scene; this.world = world
    this.pos = new THREE.Vector3(x, 0, z)
    this.heading = heading
    this.speed = 0
    this.route = route
    this.index = 0
    this.stopped = false
    this.mesh = createCarMesh(0x203028)
    this.mesh.group.position.copy(this.pos)
    this.mesh.group.rotation.y = heading
    scene.add(this.mesh.group)
    this.wheelSpin = 0
  }
  update(dt) {
    if (this.stopped) return
    const target = this.route[this.index]
    if (!target) { this.stopped = true; this.speed = 0; return }
    const to = new THREE.Vector3(target.x - this.pos.x, 0, target.z - this.pos.z)
    const d = to.length()
    if (d < 4) {
      this.index++
      if (this.index >= this.route.length) { this.stopped = true; this.speed = 0 }
      return
    }
    const desired = Math.atan2(to.x, to.z)
    let diff = ((desired - this.heading + Math.PI * 3) % (Math.PI * 2)) - Math.PI
    this.heading += clamp(diff, -1.6 * dt, 1.6 * dt)
    const want = this.index === this.route.length - 1 ? 8 : 11.5
    this.speed += (want - this.speed) * Math.min(1, dt * 2)
    this.pos.x += Math.sin(this.heading) * this.speed * dt
    this.pos.z += Math.cos(this.heading) * this.speed * dt
    this.world.resolveCircle(this.pos, 1.1)
    this.mesh.group.position.copy(this.pos)
    this.mesh.group.rotation.y = this.heading
    this.wheelSpin += this.speed * dt / .37
    for (const w of this.mesh.wheels) w.rotation.x = this.wheelSpin
  }
  remove() { this.scene.remove(this.mesh.group) }
}

class ChaseCar {
  constructor(scene, world, x, z) {
    this.scene = scene; this.world = world
    this.pos = new THREE.Vector3(x, 0, z)
    this.heading = 0
    this.speed = 0
    this.health = 80
    this.dead = false
    this.cooldown = 1.2
    this.radius = 1.4
    this.mesh = createCarMesh(0x141417)
    this.mesh.group.position.copy(this.pos)
    scene.add(this.mesh.group)
    this.wheelSpin = 0
  }
  update(dt, target, time, onShoot) {
    if (this.dead) { this.speed *= .9; return }
    const to = new THREE.Vector3(target.x - this.pos.x, 0, target.z - this.pos.z)
    const d = to.length()
    const desired = Math.atan2(to.x, to.z)
    let diff = ((desired - this.heading + Math.PI * 3) % (Math.PI * 2)) - Math.PI
    this.heading += clamp(diff, -2.4 * dt, 2.4 * dt)
    const want = d < 7 ? 5 : 22
    this.speed += (want - this.speed) * Math.min(1, dt * 1.6)
    this.pos.x += Math.sin(this.heading) * this.speed * dt
    this.pos.z += Math.cos(this.heading) * this.speed * dt
    this.pos.x = clamp(this.pos.x, -174, 174)
    this.pos.z = clamp(this.pos.z, -174, 179)
    this.world.resolveCircle(this.pos, 1.2)
    this.mesh.group.position.copy(this.pos)
    this.mesh.group.rotation.y = this.heading
    this.wheelSpin += this.speed * dt / .37
    for (const w of this.mesh.wheels) w.rotation.x = this.wheelSpin
    this.cooldown -= dt
    if (this.cooldown <= 0 && d < 38) {
      this.cooldown = rand(1.8, 2.8)
      onShoot?.(new THREE.Vector3(this.pos.x, 1.2, this.pos.z), target)
    }
  }
  hit(v) {
    if (this.dead) return false
    this.health -= v
    if (this.health <= 0) {
      this.dead = true
      this.mesh.group.rotation.z = .12
      return true
    }
    return false
  }
  remove() { this.scene.remove(this.mesh.group) }
}

export class Missions {
  constructor({ scene, world, player, ui, population, audio, callbacks }) {
    this.scene = scene; this.world = world; this.player = player; this.ui = ui
    this.population = population; this.audio = audio; this.callbacks = callbacks
    this.mode = 'story'
    this.storyStep = 0
    this.active = false
    this.step = ''
    this.waypoint = null
    this.objective = ''
    this.timer = 0
    this.failTimer = 0
    this.progress = 0
    this.suspicion = 0
    this.missionCars = []
    this.enemies = []
    this.chaseCars = []
    this.targetCar = null
    this.job = null
    this.marker = this.makeMarker()
    this.tracers = []
    this.lastPrompt = null
    this.shotCount = 0
    this.storyComplete = false
    this.timeInCity = 0
    this.damageCooldown = 0
  }

  makeMarker() {
    const g = new THREE.Group()
    const beamMat = new THREE.MeshBasicMaterial({ color: 0xf0cf8c, transparent: true, opacity: .13, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide })
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 55, 16, 1, true), beamMat)
    beam.position.y = 27.5; g.add(beam)
    const ring = new THREE.Mesh(new THREE.RingGeometry(1.2, 2.2, 32), new THREE.MeshBasicMaterial({ color: 0xf0cf8c, transparent: true, opacity: .55, side: THREE.DoubleSide, depthWrite: false }))
    ring.rotation.x = -Math.PI / 2; ring.position.y = .12; g.add(ring)
    const gem = new THREE.Mesh(new THREE.OctahedronGeometry(.65), new THREE.MeshBasicMaterial({ color: 0xffe4a6, toneMapped: false }))
    gem.position.y = 3.4; g.add(gem)
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: 0xffd28a, transparent: true, opacity: .8, blending: THREE.AdditiveBlending, depthWrite: false }))
    sprite.scale.set(4, 4, 1); sprite.position.y = 3.4; g.add(sprite)
    g.visible = false
    this.scene.add(g)
    this.markerGem = gem; this.markerSprite = sprite
    return g
  }

  setWaypoint(x, z, label = '') {
    this.waypoint = x == null ? null : { x, z, label }
    if (this.waypoint) {
      this.marker.position.set(x, 0, z)
      this.marker.visible = true
    } else this.marker.visible = false
  }

  addMoney(v) { this.callbacks.addMoney?.(v) }

  startStory() {
    this.mode = 'story'
    this.storyComplete = false
    this.storyStep = 0
    this.startMission1()
  }

  showChapter(kicker, title, text, onStart) {
    this.ui.showMissionCard(kicker, title, text, onStart, 'START')
  }

  // ---------------- MISSION I ----------------
  startMission1() {
    this.cleanup()
    this.active = true
    this.storyStep = 1
    this.step = 'toButcher'
    this.objective = 'Collect the envelope from Sal'
    this.ui.setObjective(this.objective, 'Sal’s Butcher · Little Italy')
    this.ui.showToast('CHAPTER I — THE RUNNER')
    this.setWaypoint(this.world.landmarks.butcher.door.x, this.world.landmarks.butcher.door.z)
    this.player.health = 100
    this.callbacks.onMissionStart?.(1)
  }

  // ---------------- MISSION II ----------------
  startMission2() {
    this.cleanup()
    this.active = true
    this.storyStep = 2
    this.step = 'toTarget'
    this.objective = 'Find the Bianchi car'
    this.ui.setObjective(this.objective, 'East side · Grand Avenue')
    const ts = this.world.landmarks.tailStart
    this.setWaypoint(ts.x, ts.z)
    const car = new ScriptedCar(this.scene, this.world, ts.x, ts.z, Math.PI / 2, [
      { x: 102, z: 34 }, { x: 102, z: 102 }, { x: 34, z: 102 }, { x: 34, z: 34 },
      { x: -34, z: 34 }, { x: -34, z: 102 }, { x: -102, z: 102 }
    ])
    this.targetCar = car
    this.missionCars.push(car)
    this.ui.showToast('CHAPTER II — THE TAIL')
    this.callbacks.onMissionStart?.(2)
  }

  // ---------------- MISSION III ----------------
  startMission3() {
    this.cleanup()
    this.active = true
    this.storyStep = 3
    this.step = 'pickup'
    this.objective = 'Pick up the shipment'
    this.ui.setObjective(this.objective, 'Moretti Freight · Harbor District')
    const d = this.world.landmarks.docks.door
    this.setWaypoint(d.x, d.z)
    this.timer = 0
    this.ui.showToast('CHAPTER III — THE SHIPMENT')
    this.callbacks.onMissionStart?.(3)
  }

  cleanup() {
    this.active = false
    this.waypoint = null
    this.marker.visible = false
    for (const c of this.missionCars) c.remove?.()
    for (const c of this.chaseCars) c.remove?.()
    for (const e of this.enemies) { this.scene.remove(e.group) }
    this.missionCars = []; this.chaseCars = []; this.enemies = []; this.targetCar = null
    this.timer = 0; this.failTimer = 0; this.progress = 0; this.suspicion = 0
    for (const t of this.tracers) { this.scene.remove(t.line); t.line.geometry.dispose(); t.mat.dispose() }
    this.tracers = []
    this.ui.clearDialogue()
    this.ui.setInteract(null)
  }

  getInteractPrompt(pos) {
    if (!this.active) return null
    const p = this.player.inCar ? this.player.pos : pos
    const near = (x, z, r = 5) => dist2(p.x, p.z, x, z) < r
    if (this.step === 'toButcher' && near(this.world.landmarks.butcher.door.x, this.world.landmarks.butcher.door.z, 5.5)) return { text: 'Collect envelope', action: () => this.butcherTalk() }
    if (this.step === 'toClub' && near(this.world.landmarks.club.door.x, this.world.landmarks.club.door.z, 6)) return { text: 'Deliver envelope', action: () => this.donTalk() }
    if (this.step === 'confront' && this.targetCar && near(this.targetCar.pos.x, this.targetCar.pos.z, 6)) return { text: 'Confront driver', action: () => this.confrontTalk() }
    if (this.step === 'pickup' && near(this.world.landmarks.docks.door.x, this.world.landmarks.docks.door.z, 6)) return { text: 'Load the crate', action: () => this.pickupCrate() }
    if (this.job && this.job.step === 'pickup' && this.waypoint && near(this.waypoint.x, this.waypoint.z, 5)) return { text: 'Pick up package', action: () => this.jobPickup() }
    if (this.job && this.job.step === 'dropoff' && this.waypoint && near(this.waypoint.x, this.waypoint.z, 5)) return { text: 'Drop the package', action: () => this.jobDropoff() }
    if (this.job && this.job.step === 'shake' && this.waypoint && near(this.waypoint.x, this.waypoint.z, 5)) return { text: 'Make a scene', action: () => this.jobShake() }
    return null
  }

  interact() {
    const prompt = this.getInteractPrompt(this.player.pos)
    if (prompt) { prompt.action(); return true }
    return false
  }

  butcherTalk() {
    this.ui.setInteract(null)
    this.ui.say([
      { who: 'SAL', text: 'You’re late. The Don’s money doesn’t like waiting.' },
      { who: 'NICO', text: 'The traffic on Grand is a nightmare, Sal.' },
      { who: 'SAL', text: 'Envelope. Don’t open it. Don’t even look at it.' }
    ], () => {
      this.step = 'toClub'
      this.objective = 'Return the envelope to Moretti’s'
      this.ui.setObjective(this.objective, 'Old Quarter · Moretti’s Social Club')
      this.setWaypoint(this.world.landmarks.club.door.x, this.world.landmarks.club.door.z)
      this.ui.showToast('ENVELOPE COLLECTED')
      this.audio?.blip(500, .08, 'triangle', .08)
    })
  }

  donTalk() {
    this.ui.setInteract(null)
    this.ui.say([
      { who: 'DON MORETTI', text: 'Two hundred. On time. Maybe there’s hope for you yet, Nico.' },
      { who: 'DON MORETTI', text: 'The Bianchi family is moving product through the east side. I want to know where.' },
      { who: 'NICO', text: 'And if they don’t feel like sharing?' },
      { who: 'DON MORETTI', text: 'Then make them feel like it. Take the car.' }
    ], () => {
      this.completeMission(250, 'CHAPTER II', 'The Tail', 'A Bianchi car has been seen idling near the east pier. Follow it. Do not get made.')
    })
  }

  confrontTalk() {
    this.ui.setInteract(null)
    this.ui.say([
      { who: 'BIANCHI DRIVER', text: 'You’ve got nerve, following me through half the city.' },
      { who: 'NICO', text: 'The Don wants to know where the shipment lands.' },
      { who: 'BIANCHI DRIVER', text: 'The pier. Midnight. And tell Moretti his time is running out.' }
    ], () => {
      this.completeMission(400, 'CHAPTER III', 'The Shipment', 'Midnight at Moretti Freight. One crate. The Bianchi will not let it leave the docks quietly.')
    })
  }

  pickupCrate() {
    this.ui.setInteract(null)
    this.ui.say([
      { who: 'NICO', text: 'One crate. Heavy as a coffin.' },
      { who: 'DON MORETTI', text: 'Get it to San Michele. The priest owes me a favor.' },
      { who: 'DON MORETTI', text: 'And Nico — the Bianchi know. Drive fast.' }
    ], () => {
      this.step = 'deliver'
      this.timer = 100
      this.objective = 'Deliver the crate to San Michele'
      this.ui.setObjective(this.objective, 'Time: 1:40')
      const ch = this.world.landmarks.church.door
      this.setWaypoint(ch.x, ch.z)
      this.spawnChasers()
      this.callbacks.onMissionStage?.(3, 'deliver')
    })
  }

  spawnChasers() {
    const p = this.player.pos
    for (let i = 0; i < 2; i++) {
      const c = new ChaseCar(this.scene, this.world, p.x + (i ? 18 : -18), p.z + 16)
      c.heading = Math.atan2(p.x - c.pos.x, p.z - c.pos.z)
      this.chaseCars.push(c)
    }
  }

  completeMission(reward, nextKicker, nextTitle, nextText) {
    this.active = false
    this.setWaypoint(null)
    this.ui.setInteract(null)
    this.addMoney(reward)
    this.audio?.cash(); this.audio?.sting(true)
    this.ui.showToast('MISSION COMPLETE  +$' + reward)
    this.cleanup()
    this.callbacks.onMissionComplete?.(this.storyStep, reward)
    if (this.storyStep >= 3) return
    const nextStep = this.storyStep + 1
    setTimeout(() => {
      if (this.mode !== 'story') return
      this.showChapter(nextKicker, nextTitle, nextText, () => {
        if (nextStep === 2) this.startMission2()
        else this.startMission3()
      })
    }, 1600)
  }

  finishStory() {
    this.active = false
    this.storyComplete = true
    this.mode = 'free'
    this.cleanup()
    this.callbacks.onStoryComplete?.()
  }

  // ---------------- FREE ROAM ----------------
  getJobs() {
    if (!this.storyComplete) return []
    return [
      { id: 'courier', title: 'Courier Run', desc: 'Move a package across the city. No questions.', reward: '$180' },
      { id: 'shake', title: 'Shakedown', desc: 'Remind a business owner who runs this city.', reward: '$240' }
    ]
  }

  startJob(job) {
    this.cleanup()
    this.mode = 'free'
    this.active = true
    this.job = { type: job.id, step: job.id === 'shake' ? 'shake' : 'pickup' }
    const pts = [
      { x: -136, z: -68 }, { x: 102, z: -68 }, { x: -34, z: 102 }, { x: 136, z: 34 }, { x: -102, z: 136 }, { x: 34, z: -102 }
    ]
    const p = pts[Math.floor(Math.random() * pts.length)]
    this.job.pickup = p
    this.setWaypoint(p.x, p.z)
    this.objective = job.id === 'courier' ? 'Pick up the package' : 'Find the shop'
    this.ui.setObjective(this.objective, job.id === 'courier' ? 'Courier Run' : 'Shakedown')
    this.ui.showToast('JOB ACCEPTED — ' + job.title.toUpperCase())
  }

  jobPickup() {
    if (!this.job) return
    this.ui.setInteract(null)
    this.job.step = 'dropoff'
    const pts = [{ x: 0, z: -68 }, { x: -68, z: 68 }, { x: 136, z: 136 }, { x: -136, z: 34 }, { x: 68, z: -136 }]
    const p = pts[Math.floor(Math.random() * pts.length)]
    this.job.drop = p
    this.setWaypoint(p.x, p.z)
    this.objective = 'Deliver the package'
    this.ui.setObjective(this.objective, 'Courier Run · $180')
    this.ui.showToast('PACKAGE SECURED')
  }
  jobDropoff() {
    this.ui.setInteract(null)
    this.addMoney(180); this.audio?.cash()
    this.ui.showToast('DELIVERY COMPLETE  +$180')
    this.endJob()
  }
  jobShake() {
    this.ui.setInteract(null)
    this.addMoney(240); this.audio?.cash()
    this.callbacks.addWanted?.(1)
    this.ui.showToast('THE MESSAGE LANDED  +$240')
    this.ui.say([{ who: 'SHOPKEEPER', text: 'Alright! Alright. Tell the Don he’ll have his envelope by Friday.' }])
    this.endJob()
  }
  endJob() {
    this.job = null
    this.active = false
    this.setWaypoint(null)
    this.ui.setObjective('The city is yours', 'Call the phone for work')
  }

  // ---------------- combat ----------------
  getAimTargets() {
    const out = []
    for (const e of this.enemies) if (!e.dead) out.push({ pos: e.pos, radius: .7, kind: 'enemy' })
    for (const c of this.chaseCars) if (!c.dead) out.push({ pos: c.pos, radius: 1.6, kind: 'chase' })
    return out
  }

  shootableHit(origin, dir, maxDist) {
    let best = null, bestD = maxDist
    const test = (obj, pos, radius, kind) => {
      const to = new THREE.Vector3(pos.x - origin.x, 0, pos.z - origin.z)
      const along = to.dot(dir)
      if (along < 0 || along > maxDist) return
      const perp = Math.abs(to.x * dir.z - to.z * dir.x)
      if (perp < radius && along < bestD) {
        bestD = along
        best = { obj, kind, point: new THREE.Vector3(origin.x + dir.x * along, 1.15, origin.z + dir.z * along) }
      }
    }
    for (const e of this.enemies) if (!e.dead) test(e, e.pos, .65, 'enemy')
    for (const c of this.chaseCars) if (!c.dead) test(c, c.pos, 1.55, 'chase')
    return best
  }

  applyHit(hit, damage) {
    if (!hit) return false
    if (hit.kind === 'enemy') {
      const died = hit.obj.hit(damage)
      if (died) {
        this.audio?.blip(180, .18, 'sawtooth', .1)
        const alive = this.enemies.filter(e => !e.dead).length
        if (this.step === 'shootout') {
          this.objective = `Take out the Bianchi crew (${4 - alive}/4)`
          this.ui.setObjective(this.objective, 'San Michele Church')
          if (alive === 0) this.finale()
        }
      }
      return true
    }
    if (hit.kind === 'chase') {
      hit.obj.hit(damage)
      return true
    }
    return false
  }

  spawnShootout() {
    this.step = 'shootout'
    this.objective = 'Take out the Bianchi crew (0/4)'
    this.ui.setObjective(this.objective, 'San Michele Church')
    const d = this.world.landmarks.church.door
    const spots = [[-11, -1], [11, -1], [-5, 4], [5, 4]]
    for (const [dx, dz] of spots) {
      const e = new Enemy(this.scene, this.world, d.x + dx, d.z + dz)
      this.enemies.push(e)
    }
    this.ui.say([
      { who: 'BIANCHI SOLDIER', text: 'End of the line, Moretti dog.' },
      { who: 'NICO', text: 'You first.' }
    ])
    this.callbacks.onMissionStage?.(3, 'shootout')
  }

  finale() {
    this.step = 'finale'
    this.ui.setObjective('The city is yours', '')
    this.audio?.sting(true)
    setTimeout(() => {
      this.ui.say([
        { who: 'DON MORETTI', text: 'The crate is safe. The Bianchi are finished. You did good, Nico.' },
        { who: 'DON MORETTI', text: 'This city is a hungry thing. Feed it, and it will love you.' },
        { who: 'NICO', text: 'And if I want more than the scraps?' },
        { who: 'DON MORETTI', text: 'Then come and take them. That’s the business.' }
      ], () => {
        this.finishStory()
        this.ui.showEnding({ cash: this.callbacks.getMoney?.() ?? 0, time: this.callbacks.getTime?.() ?? '0:00' }, () => {
          this.callbacks.onFreeRoam?.()
          this.ui.showToast('FREE ROAM UNLOCKED — CALL THE PHONE FOR WORK', 4)
        })
      })
    }, 1200)
  }

  fail(title, text) {
    if (this.ui.el.fail.classList.contains('hidden') === false) return
    this.active = false
    this.ui.setInteract(null)
    this.callbacks.onFail?.()
    this.ui.showFail(title, text, () => this.callbacks.onRetry?.())
  }

  // ---------------- per-frame ----------------
  update(dt, time) {
    this.timeInCity = time
    this.damageCooldown = Math.max(0, this.damageCooldown - dt)
    // marker animation
    if (this.marker.visible) {
      this.markerGem.rotation.y += dt * 1.8
      this.markerGem.position.y = 3.4 + Math.sin(time * 2.4) * .25
      this.markerSprite.material.opacity = .55 + Math.sin(time * 3) * .18
    }
    // tracers
    for (let i = this.tracers.length - 1; i >= 0; i--) {
      const t = this.tracers[i]
      t.life -= dt
      t.mat.opacity = clamp(t.life / .12, 0, 1) * .8
      if (t.life <= 0) { this.scene.remove(t.line); t.line.geometry.dispose(); t.mat.dispose(); this.tracers.splice(i, 1) }
    }
    // enemies
    for (const e of this.enemies) {
      e.update(dt, this.player, this.player.pos, time, (from) => this.enemyShoot(from))
    }
    // chasers
    const target = this.player.inCar ? this.player.pos : this.player.pos
    for (const c of this.chaseCars) {
      c.update(dt, target, time, (from) => this.enemyShoot(from))
      if (!c.dead && this.player.inCar && this.player.car && dist2(c.pos.x, c.pos.z, this.player.pos.x, this.player.pos.z) < 4) {
        if (this.damageCooldown <= 0) {
          this.player.car.damage(4)
          this.damageCooldown = .5
          this.callbacks.onImpact?.(5)
        }
      }
    }
    if (!this.active) return
    const p = this.player.pos
    const near = (x, z, r = 5) => dist2(p.x, p.z, x, z) < r

    if (this.step === 'toButcher') {
      if (near(this.world.landmarks.butcher.door.x, this.world.landmarks.butcher.door.z, 5.5)) {
        this.ui.setObjective('Collect the envelope', 'Press ACT at the butcher shop')
        this.setWaypoint(this.world.landmarks.butcher.door.x, this.world.landmarks.butcher.door.z)
      }
    } else if (this.step === 'toClub') {
      if (near(this.world.landmarks.club.door.x, this.world.landmarks.club.door.z, 6)) {
        this.ui.setObjective('Deliver the envelope', 'Press ACT at Moretti’s')
      }
    } else if (this.step === 'toTarget') {
      if (this.targetCar && near(this.targetCar.pos.x, this.targetCar.pos.z, 7)) {
        this.ui.setObjective('Get ready to follow', 'Stay close, but not too close')
        this.ui.say([{ who: 'NICO', text: 'There’s the Bianchi car. Let’s see where you’re going.' }], () => {
          this.step = 'tail'
          this.setWaypoint(null)
          this.ui.setObjective('Tail the Bianchi car', 'Distance 0 m')
        })
      }
    } else if (this.step === 'tail') {
      this.targetCar?.update(dt)
      const d = this.targetCar ? dist2(p.x, p.z, this.targetCar.pos.x, this.targetCar.pos.z) : 0
      if (this.targetCar) {
        this.waypoint = { x: this.targetCar.pos.x, z: this.targetCar.pos.z, label: 'target' }
        this.marker.position.set(this.waypoint.x, 0, this.waypoint.z)
        this.marker.visible = true
      }
      if (d > 58) {
        this.failTimer += dt
        this.ui.setObjective('Tail the Bianchi car', `They’re getting away — ${Math.ceil(5 - this.failTimer)}s`)
        if (this.failTimer > 5) { this.fail('LOST THEM', 'The Bianchi car slipped into traffic.'); return }
      } else {
        this.failTimer = Math.max(0, this.failTimer - dt * 1.5)
        this.ui.setObjective('Tail the Bianchi car', `Distance ${Math.round(d)} m`)
      }
      if (d < 6.5) {
        this.suspicion += dt
        if (this.suspicion > 1.4) this.ui.setObjective('Don’t get made', 'Back off — they can see you')
      } else this.suspicion = Math.max(0, this.suspicion - dt)
      if (this.targetCar?.stopped) {
        this.step = 'confront'
        this.setWaypoint(this.targetCar.pos.x, this.targetCar.pos.z)
        this.ui.setObjective('Confront the driver', 'Press ACT near the car')
      }
    } else if (this.step === 'pickup') {
      if (near(this.world.landmarks.docks.door.x, this.world.landmarks.docks.door.z, 6)) {
        this.ui.setObjective('Load the crate', 'Press ACT at the loading bay')
      }
    } else if (this.step === 'deliver') {
      this.timer -= dt
      const m = Math.floor(Math.max(0, this.timer) / 60), s = Math.floor(Math.max(0, this.timer) % 60)
      this.ui.setObjective('Deliver the crate to San Michele', `Time: ${m}:${String(s).padStart(2, '0')}`)
      if (this.timer <= 0) { this.fail('TOO LATE', 'The Bianchi moved the shipment while you were sightseeing.'); return }
      if (near(this.world.landmarks.church.door.x, this.world.landmarks.church.door.z, 8)) {
        this.setWaypoint(null)
        for (const c of this.chaseCars) c.remove()
        this.chaseCars = []
        this.spawnShootout()
        if (this.player.inCar) this.callbacks.forceExitCar?.()
      }
    } else if (this.step === 'shootout') {
      const alive = this.enemies.filter(e => !e.dead).length
      if (alive === 0) this.finale()
    }
  }

  enemyShoot(from) {
    const to = new THREE.Vector3(this.player.pos.x, 1.2, this.player.pos.z)
    const geo = new THREE.BufferGeometry().setFromPoints([from, to])
    const mat = new THREE.LineBasicMaterial({ color: 0xff9b62, transparent: true, opacity: .8 })
    const line = new THREE.Line(geo, mat)
    this.scene.add(line)
    this.tracers.push({ line, mat, life: .12 })
    this.audio?.gunshot()
    const d = from.distanceTo(to)
    const dmg = d < 16 ? 9 : 5
    if (this.player.inCar && this.player.car) this.player.car.damage(dmg * .7)
    else this.callbacks.damagePlayer?.(dmg)
    this.callbacks.onImpact?.(2)
  }
}
