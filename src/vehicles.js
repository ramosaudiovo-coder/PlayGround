import * as THREE from 'three'
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js'
import { clamp, rand, radialTexture, setShadow } from './utils.js'

const CAR_COLORS = [0x4c1f1c, 0x1f2a34, 0x3a3326, 0x2c2c30, 0x513c24, 0x253a32, 0x5a5148, 0x33202a]
const glassMat = new THREE.MeshStandardMaterial({ color: 0x070c12, roughness: .12, metalness: .9, envMapIntensity: 1.4 })
const tireMat = new THREE.MeshStandardMaterial({ color: 0x0a0a0b, roughness: .95 })
const chromeMat = new THREE.MeshStandardMaterial({ color: 0x9c9484, roughness: .22, metalness: .95 })
const tailMat = new THREE.MeshStandardMaterial({ color: 0x4a0f0d, emissive: 0xd8322a, emissiveIntensity: .8, roughness: .4 })
const headMat = new THREE.MeshBasicMaterial({ color: 0xffe2b0, toneMapped: false })
const beamMat = new THREE.MeshBasicMaterial({ color: 0xffd9a0, transparent: true, opacity: .055, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide })
const smokeTex = radialTexture('rgba(150,150,150,.6)', 'rgba(80,80,80,0)', 64)

export function createCarMesh(color = 0x4c1f1c, police = false, opts = {}) {
  const g = new THREE.Group()
  const bodyMat = new THREE.MeshStandardMaterial({ color, roughness: .34, metalness: .55, envMapIntensity: 1.4 })
  const body = new THREE.Mesh(new RoundedBoxGeometry(1.9, .58, 4.35, 3, .13), bodyMat)
  body.position.y = .62; body.castShadow = true; g.add(body)
  const lower = new THREE.Mesh(new RoundedBoxGeometry(1.78, .28, 4.5, 2, .08), bodyMat)
  lower.position.y = .38; lower.castShadow = true; g.add(lower)
  // cabin
  const cabin = new THREE.Mesh(new RoundedBoxGeometry(1.58, .5, 1.95, 3, .12), bodyMat)
  cabin.position.set(0, 1.06, -.2); cabin.castShadow = true; g.add(cabin)
  const glass = new THREE.Mesh(new RoundedBoxGeometry(1.6, .34, 1.72, 2, .06), glassMat)
  glass.position.set(0, 1.16, -.18); g.add(glass)
  const roof = new THREE.Mesh(new RoundedBoxGeometry(1.62, .12, 1.86, 2, .05), bodyMat)
  roof.position.set(0, 1.36, -.2); g.add(roof)
  // hood ornament
  const orn = new THREE.Mesh(new THREE.SphereGeometry(.055, 8, 6), chromeMat)
  orn.position.set(0, .95, 1.78); g.add(orn)
  // bumpers / grille
  for (const z of [2.28, -2.28]) {
    const b = new THREE.Mesh(new THREE.BoxGeometry(1.92, .12, .14), chromeMat)
    b.position.set(0, .47, z); g.add(b)
  }
  const grille = new THREE.Mesh(new THREE.BoxGeometry(.85, .34, .06), chromeMat)
  grille.position.set(0, .67, 2.2); g.add(grille)
  for (let i = -3; i <= 3; i++) {
    const bar = new THREE.Mesh(new THREE.BoxGeometry(.035, .3, .07), new THREE.MeshStandardMaterial({ color: 0x1a1713, roughness: .5, metalness: .6 }))
    bar.position.set(i * .11, .67, 2.24); g.add(bar)
  }
  // running boards + fenders
  for (const s of [-1, 1]) {
    const rb = new THREE.Mesh(new THREE.BoxGeometry(.16, .09, 1.7), chromeMat)
    rb.position.set(s * 1.0, .4, -.05); g.add(rb)
    for (const z of [1.42, -1.42]) {
      const fender = new THREE.Mesh(new RoundedBoxGeometry(.34, .26, 1.05, 2, .08), bodyMat)
      fender.position.set(s * .94, .62, z); g.add(fender)
    }
  }
  // wheels
  const wheels = []
  const wheelGeo = new THREE.CylinderGeometry(.37, .37, .24, 14)
  wheelGeo.rotateZ(Math.PI / 2)
  const hubGeo = new THREE.CylinderGeometry(.17, .17, .26, 10)
  hubGeo.rotateZ(Math.PI / 2)
  for (const sx of [-1, 1]) for (const sz of [1.42, -1.42]) {
    const w = new THREE.Mesh(wheelGeo, tireMat)
    w.position.set(sx * .94, .37, sz); w.castShadow = true; g.add(w)
    const hub = new THREE.Mesh(hubGeo, chromeMat)
    hub.position.set(sx * .955, .37, sz); g.add(hub)
    wheels.push(w)
  }
  // lights
  const heads = []
  for (const s of [-1, 1]) {
    const h = new THREE.Mesh(new THREE.SphereGeometry(.14, 10, 8), headMat)
    h.scale.z = .55; h.position.set(s * .63, .74, 2.19); g.add(h); heads.push(h)
    const ring = new THREE.Mesh(new THREE.TorusGeometry(.16, .025, 6, 14), chromeMat)
    ring.position.set(s * .63, .74, 2.21); g.add(ring)
    const tail = new THREE.Mesh(new THREE.SphereGeometry(.09, 8, 6), tailMat)
    tail.scale.z = .5; tail.position.set(s * .66, .7, -2.2); g.add(tail)
  }
  // spare wheel
  const spare = new THREE.Mesh(new THREE.CylinderGeometry(.36, .36, .2, 12), tireMat)
  spare.rotation.x = Math.PI / 2; spare.position.set(0, .7, -2.38); g.add(spare)
  const spareHub = new THREE.Mesh(new THREE.CylinderGeometry(.15, .15, .22, 8), chromeMat)
  spareHub.rotation.x = Math.PI / 2; spareHub.position.set(0, .7, -2.4); g.add(spareHub)
  const beams = []
  // light bar
  let barRed = null, barBlue = null
  if (police) {
    const base = new THREE.Mesh(new THREE.BoxGeometry(1.05, .12, .3), new THREE.MeshStandardMaterial({ color: 0x111214, roughness: .6 }))
    base.position.set(0, 1.46, -.15); g.add(base)
    barRed = new THREE.Mesh(new THREE.BoxGeometry(.46, .14, .24), new THREE.MeshBasicMaterial({ color: 0xff2a1e, toneMapped: false }))
    barRed.position.set(-.27, 1.56, -.15); g.add(barRed)
    barBlue = new THREE.Mesh(new THREE.BoxGeometry(.46, .14, .24), new THREE.MeshBasicMaterial({ color: 0x2d6bff, toneMapped: false }))
    barBlue.position.set(.27, 1.56, -.15); g.add(barBlue)
    // livery stripe
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(1.92, .2, 1.7), new THREE.MeshStandardMaterial({ color: 0x111214, roughness: .4, metalness: .4 }))
    stripe.position.set(0, .74, -.1); g.add(stripe)
  }
  setShadow(g, true, false)
  return { group: g, wheels, heads, beams, barRed, barBlue, bodyMat }
}

export class PlayerCar {
  constructor(scene, world, x, z, heading = 0, color = 0x4c1f1c) {
    this.scene = scene; this.world = world
    this.pos = new THREE.Vector3(x, 0, z)
    this.heading = heading
    this.speed = 0
    this.steer = 0
    this.health = 100
    this.maxHealth = 100
    this.radius = 1.35
    this.color = color
    this.mesh = createCarMesh(color)
    this.mesh.group.position.copy(this.pos)
    this.mesh.group.rotation.y = heading
    scene.add(this.mesh.group)
    this.isPlayer = true
    this.wheelSpin = 0
    this.hitCooldown = 0
    this.smoke = new THREE.Sprite(new THREE.SpriteMaterial({ map: smokeTex, transparent: true, opacity: 0, depthWrite: false, color: 0x2a2a2a }))
    this.smoke.scale.set(3.5, 3.5, 1); this.smoke.position.set(0, 1.6, 1.5); this.smoke.visible = false
    this.mesh.group.add(this.smoke)
    this.headlight = new THREE.SpotLight(0xffd6a0, 95, 46, .58, .72, 1.5)
    this.headlight.position.set(0, .9, 2.2)
    this.headlight.target.position.set(0, .05, 26)
    this.mesh.group.add(this.headlight, this.headlight.target)
    this.carLight = new THREE.PointLight(0xffc090, 5.5, 9, 2)
    this.carLight.position.set(0, 3.1, -1)
    this.mesh.group.add(this.carLight)
  }
  get forward() { return new THREE.Vector3(Math.sin(this.heading), 0, Math.cos(this.heading)) }
  get speedKmh() { return Math.abs(this.speed) * 3.6 }
  update(dt, input, tiltEnabled, tilt) {
    const throttle = input.move.y
    let steer = input.move.x
    if (tiltEnabled) steer = tilt
    this.steer = steer
    const accel = 12.5, brakePow = 22, maxF = 30, maxR = -9
    if (input.brake) {
      this.speed = Math.abs(this.speed) < 1.2 ? 0 : this.speed - Math.sign(this.speed) * brakePow * dt
    } else if (throttle > .08) {
      this.speed += accel * throttle * dt
    } else if (throttle < -.08) {
      this.speed += accel * .75 * throttle * dt
    } else {
      this.speed *= Math.exp(-1.1 * dt)
      if (Math.abs(this.speed) < .12) this.speed = 0
    }
    this.speed = clamp(this.speed, maxR, maxF)
    // steering
    const grip = clamp(Math.abs(this.speed) / 4.5, 0, 1) * (1 - clamp(Math.abs(this.speed) / 95, 0, .55))
    this.heading += steer * 1.75 * grip * dt * Math.sign(this.speed || 1)
    // integrate
    const f = this.forward
    const nx = this.pos.x + f.x * this.speed * dt
    const nz = this.pos.z + f.z * this.speed * dt
    const test = new THREE.Vector3(nx, 0, nz)
    let hit = null
    for (const c of this.world.colliders) {
      if (test.x + 1.15 > c.minX && test.x - 1.15 < c.maxX && test.z + 1.15 > c.minZ && test.z - 1.15 < c.maxZ) { hit = c; break }
    }
    if (hit) {
      const impact = Math.abs(this.speed)
      this.world.resolveCircle(test, 1.15)
      this.pos.x = test.x; this.pos.z = test.z
      this.speed *= -.22
      if (impact > 7) { this.health -= impact * .9; this.hitCooldown = .5 }
      if (this.onImpact) this.onImpact(impact)
    } else {
      this.pos.x = nx; this.pos.z = nz
    }
    // bounds / water
    this.pos.x = clamp(this.pos.x, -178, 178)
    if (this.pos.z > 181) { this.pos.z = 181; this.speed *= -.2 }
    if (this.pos.z < -178) { this.pos.z = -178; this.speed *= -.2 }
    this.pos.y = 0
    this.mesh.group.position.copy(this.pos)
    this.mesh.group.rotation.y = this.heading
    // wheels
    this.wheelSpin += this.speed * dt / .37
    for (const w of this.mesh.wheels) w.rotation.x = this.wheelSpin
    // lean
    const targetRoll = -steer * clamp(this.speed / 30, 0, 1) * .06
    this.mesh.group.rotation.z += (targetRoll - this.mesh.group.rotation.z) * Math.min(1, dt * 7)
    // brake lights
    tailMat.emissiveIntensity = input.brake || (throttle < 0) ? 2.6 : .8
    // smoke
    if (this.health < 55) {
      this.smoke.visible = true
      this.smoke.material.opacity = clamp((55 - this.health) / 60, 0, .7)
      this.smoke.scale.setScalar(3.2 + Math.sin(performance.now() * .004) * .3)
    } else this.smoke.visible = false
    this.hitCooldown = Math.max(0, this.hitCooldown - dt)
    if (this.health < 0) this.health = 0
  }
  damage(v) { this.health = clamp(this.health - v, 0, this.maxHealth) }
  get destroyed() { return this.health <= 0 }
}

// ---------------- traffic ----------------
export class TrafficCar {
  constructor(scene, world, x, z, dir, color) {
    this.world = world
    this.mesh = createCarMesh(color, false, { beams: false })
    this.mesh.group.position.set(x, 0, z)
    scene.add(this.mesh.group)
    this.pos = new THREE.Vector3(x, 0, z)
    this.dir = dir // 'x+' 'x-' 'z+' 'z-'
    this.speed = rand(7, 11)
    this.baseSpeed = this.speed
    this.heading = this.dirHeading(dir)
    this.target = null
    this.radius = 1.25
    this.wheelSpin = 0
    this.pickNext()
    this.stuck = 0
  }
  dirHeading(d) {
    return d === 'x+' ? Math.PI / 2 : d === 'x-' ? -Math.PI / 2 : d === 'z+' ? 0 : Math.PI
  }
  pickNext() {
    const roads = this.world.roads
    const p = this.pos
    let ni, nj
    if (this.dir[0] === 'x') {
      const zr = roads.reduce((a, r) => Math.abs(r - p.z) < Math.abs(a - p.z) ? r : a, roads[0])
      ni = nearestIndex(roads, p.x) + (this.dir[1] === '+' ? 1 : -1)
      ni = clamp(ni, 0, roads.length - 1)
      nj = roads.indexOf(zr)
    } else {
      const xr = roads.reduce((a, r) => Math.abs(r - p.x) < Math.abs(a - p.x) ? r : a, roads[0])
      nj = nearestIndex(roads, p.z) + (this.dir[1] === '+' ? 1 : -1)
      nj = clamp(nj, 0, roads.length - 1)
      ni = roads.indexOf(xr)
    }
    if (ni === nearestIndex(roads, p.x) && nj === nearestIndex(roads, p.z)) {
      ni = clamp(nearestIndex(roads, p.x) + (Math.random() < .5 ? 1 : -1), 0, roads.length - 1)
    }
    // lane offset to the right of travel direction
    const tx = roads[ni], tz = roads[nj]
    const dx = Math.sign(tx - p.x), dz = Math.sign(tz - p.z)
    const right = { x: -dz, z: dx }
    this.target = new THREE.Vector3(tx + right.x * 3.4, 0, tz + right.z * 3.4)
  }
  update(dt, player, playerCar) {
    if (!this.target) return
    const to = new THREE.Vector3(this.target.x - this.pos.x, 0, this.target.z - this.pos.z)
    const d = to.length()
    if (d < 3) {
      const roads = this.world.roads
      const prevDir = this.dir
      const options = ['x+', 'x-', 'z+', 'z-'].filter(o => o !== reverseDir(prevDir))
      this.dir = options[Math.floor(Math.random() * options.length)]
      this.pickNext()
      if (!this.target || this.target.distanceTo(this.pos) < 4) { this.dir = prevDir; this.pickNext() }
    }
    // steer toward target
    const desired = Math.atan2(to.x, to.z)
    let diff = ((desired - this.heading + Math.PI * 3) % (Math.PI * 2)) - Math.PI
    this.heading += clamp(diff, -.9 * dt * 4, .9 * dt * 4)
    // slow for player
    let sp = this.baseSpeed
    const pp = playerCar ? playerCar.pos : player
    if (pp) {
      const f = new THREE.Vector3(Math.sin(this.heading), 0, Math.cos(this.heading))
      const rel = new THREE.Vector3(pp.x - this.pos.x, 0, pp.z - this.pos.z)
      const ahead = rel.dot(f)
      if (ahead > 0 && ahead < 9 && Math.abs(rel.x * f.z - rel.z * f.x) < 2.4) sp = Math.max(0, (ahead - 3) * 2.4)
    }
    this.speed += (sp - this.speed) * Math.min(1, dt * 2.2)
    this.pos.x += Math.sin(this.heading) * this.speed * dt
    this.pos.z += Math.cos(this.heading) * this.speed * dt
    this.pos.x = clamp(this.pos.x, -175, 175)
    this.pos.z = clamp(this.pos.z, -175, 179)
    this.mesh.group.position.copy(this.pos)
    this.mesh.group.rotation.y = this.heading
    this.wheelSpin += this.speed * dt / .37
    for (const w of this.mesh.wheels) w.rotation.x = this.wheelSpin
  }
}
function reverseDir(d) { return d === 'x+' ? 'x-' : d === 'x-' ? 'x+' : d === 'z+' ? 'z-' : 'z+' }
function nearestIndex(arr, v) { let bi = 0; for (let i = 1; i < arr.length; i++) if (Math.abs(arr[i] - v) < Math.abs(arr[bi] - v)) bi = i; return bi }

// ---------------- pedestrians ----------------
const COAT_COLORS = [0x2a2c31, 0x33251f, 0x1f2a30, 0x3a3025, 0x26222b, 0x43382a]
const SKIN = [0x8b6a4f, 0x6e4f39, 0xa47c5d, 0x5b4030]
const HAT_COLORS = [0x1c1a1a, 0x2c221a, 0x34302a, 0x1d2430]

export class Pedestrian {
  constructor(scene, world, x, z, blockCenter, phase = 0) {
    this.scene = scene; this.world = world
    this.group = new THREE.Group()
    const coat = new THREE.MeshStandardMaterial({ color: COAT_COLORS[Math.floor(Math.random() * COAT_COLORS.length)], roughness: .9 })
    const skin = new THREE.MeshStandardMaterial({ color: SKIN[Math.floor(Math.random() * SKIN.length)], roughness: .8 })
    const hatM = new THREE.MeshStandardMaterial({ color: HAT_COLORS[Math.floor(Math.random() * HAT_COLORS.length)], roughness: .85 })
    const pants = new THREE.MeshStandardMaterial({ color: 0x191a1e, roughness: .95 })
    const torso = new THREE.Mesh(new THREE.CylinderGeometry(.22, .3, .8, 8), coat)
    torso.position.y = 1.12; torso.castShadow = true; this.group.add(torso)
    const hips = new THREE.Mesh(new THREE.CylinderGeometry(.26, .24, .25, 8), pants); hips.position.y = .72; this.group.add(hips)
    this.head = new THREE.Mesh(new THREE.SphereGeometry(.17, 10, 8), skin); this.head.position.y = 1.66; this.group.add(this.head)
    const brim = new THREE.Mesh(new THREE.CylinderGeometry(.28, .28, .035, 12), hatM); brim.position.y = 1.77; this.group.add(brim)
    const crown = new THREE.Mesh(new THREE.CylinderGeometry(.18, .2, .18, 10), hatM); crown.position.y = 1.86; this.group.add(crown)
    this.legs = []
    for (const s of [-1, 1]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(.15, .62, .17), pants)
      leg.geometry.translate(0, -.31, 0)
      leg.position.set(s * .11, .62, 0); this.group.add(leg); this.legs.push(leg)
    }
    this.arms = []
    for (const s of [-1, 1]) {
      const arm = new THREE.Mesh(new THREE.CylinderGeometry(.065, .075, .58, 6), coat)
      arm.geometry.translate(0, -.29, 0)
      arm.position.set(s * .3, 1.42, 0); this.group.add(arm); this.arms.push(arm)
    }
    this.group.position.set(x, 0, z)
    scene.add(this.group)
    this.center = blockCenter
    this.t = phase
    this.dir = Math.random() < .5 ? 1 : -1
    this.speed = rand(.9, 1.6)
    this.baseSpeed = this.speed
    this.radius = .4
    this.phase = rand(0, 10)
    this.flee = 0
    this.down = 0
    this.removed = false
    this.setPerimeter()
  }
  setPerimeter() {
    const half = 24
    const per = half * 8
    let t = this.t % per
    const side = Math.floor(t / (half * 2))
    const u = (t % (half * 2)) / (half * 2)
    if (side === 0) this.pos = new THREE.Vector3(this.center.x - half + u * half * 2, 0, this.center.z - half)
    else if (side === 1) this.pos = new THREE.Vector3(this.center.x + half, 0, this.center.z - half + u * half * 2)
    else if (side === 2) this.pos = new THREE.Vector3(this.center.x + half - u * half * 2, 0, this.center.z + half)
    else this.pos = new THREE.Vector3(this.center.x - half, 0, this.center.z + half - u * half * 2)
    this.heading = side === 0 ? Math.PI / 2 : side === 1 ? 0 : side === 2 ? -Math.PI / 2 : Math.PI
  }
  update(dt, playerPos, gunshot, car) {
    if (this.removed) return
    if (this.down > 0) {
      this.down -= dt
      this.group.rotation.z = Math.min(Math.PI / 2, this.group.rotation.z + dt * 4)
      this.group.position.y = Math.max(-.2, this.group.position.y - dt * 1.2)
      if (this.down <= 0) { this.removed = true; this.group.visible = false }
      return
    }
    if (gunshot) {
      const d = this.pos.distanceTo(playerPos)
      if (d < 26) this.flee = 5
    }
    if (this.flee > 0) {
      this.flee -= dt
      this.speed = 4.4
      const away = new THREE.Vector3(this.pos.x - playerPos.x, 0, this.pos.z - playerPos.z).normalize()
      this.pos.x += away.x * this.speed * dt
      this.pos.z += away.z * this.speed * dt
      this.heading = Math.atan2(away.x, away.z)
      this.world.resolveCircle(this.pos, .4)
      this.pos.x = clamp(this.pos.x, -174, 174)
      this.pos.z = clamp(this.pos.z, -174, 180)
    } else {
      this.speed += (this.baseSpeed - this.speed) * Math.min(1, dt * 2)
      const per = 24 * 8
      this.t += this.dir * this.speed * dt
      if (this.t > per) this.t -= per
      if (this.t < 0) this.t += per
      this.setPerimeter()
    }
    // car hit
    if (car && Math.abs(car.speed) > 5) {
      const d = Math.hypot(car.pos.x - this.pos.x, car.pos.z - this.pos.z)
      if (d < 2.1) { this.knock(); if (this.onHit) this.onHit() }
    }
    this.group.position.set(this.pos.x, 0, this.pos.z)
    this.group.rotation.y = this.heading
    const walk = this.speed > .2 ? Math.sin(performance.now() * .008 + this.phase) * (this.speed > 3 ? .8 : .45) : 0
    this.legs[0].rotation.x = walk; this.legs[1].rotation.x = -walk
    this.arms[0].rotation.x = -walk * .7; this.arms[1].rotation.x = walk * .7
  }
  knock() {
    if (this.down > 0) return
    this.down = 6; this.flee = 0
  }
}

export class PoliceCar {
  constructor(scene, world, x, z, color = 0x111318) {
    this.world = world
    this.mesh = createCarMesh(color, true, { beams: false })
    this.mesh.group.position.set(x, 0, z)
    scene.add(this.mesh.group)
    this.pos = new THREE.Vector3(x, 0, z)
    this.heading = 0
    this.speed = 0
    this.health = 90
    this.radius = 1.3
    this.wheelSpin = 0
    this.flash = 0
    this.dead = false
  }
  update(dt, target, time) {
    if (this.dead) {
      this.speed *= .9
      this.mesh.group.position.copy(this.pos)
      return
    }
    const to = new THREE.Vector3(target.x - this.pos.x, 0, target.z - this.pos.z)
    const d = to.length()
    const desired = Math.atan2(to.x, to.z)
    let diff = ((desired - this.heading + Math.PI * 3) % (Math.PI * 2)) - Math.PI
    this.heading += clamp(diff, -2.2 * dt, 2.2 * dt)
    const want = d < 8 ? 6 : 20
    this.speed += (want - this.speed) * Math.min(1, dt * 1.8)
    this.pos.x += Math.sin(this.heading) * this.speed * dt
    this.pos.z += Math.cos(this.heading) * this.speed * dt
    this.pos.x = clamp(this.pos.x, -175, 175)
    this.pos.z = clamp(this.pos.z, -175, 179)
    this.world.resolveCircle(this.pos, 1.15)
    this.mesh.group.position.copy(this.pos)
    this.mesh.group.rotation.y = this.heading
    this.wheelSpin += this.speed * dt / .37
    for (const w of this.mesh.wheels) w.rotation.x = this.wheelSpin
    this.flash = Math.floor(time * 8) % 2
    if (this.mesh.barRed) this.mesh.barRed.material.color.setHex(this.flash ? 0xff2a1e : 0x3a0d0a)
    if (this.mesh.barBlue) this.mesh.barBlue.material.color.setHex(this.flash ? 0x0e1c55 : 0x2d6bff)
  }
}
