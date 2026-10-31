import * as THREE from 'three'
import { createCarMesh, TrafficCar, Pedestrian, PoliceCar } from './vehicles.js'
import { CITY } from './city.js'
import { rand, randInt, clamp } from './utils.js'

export class Population {
  constructor(scene, world, callbacks = {}) {
    this.scene = scene
    this.world = world
    this.callbacks = callbacks
    this.traffic = []
    this.peds = []
    this.parked = []
    this.police = []
    this.gunshotTimer = 0
    this.wanted = 0
    this.spawnTimer = 0
    this.spawnTraffic()
    this.spawnPeds()
    this.spawnParked()
  }

  spawnTraffic() {
    const roads = this.world.roads
    for (let i = 0; i < 18; i++) {
      const onX = Math.random() < .5
      const r = roads[randInt(0, roads.length - 1)]
      const t = rand(-CITY.HALF + 14, CITY.HALF - 14)
      const dir = onX ? (Math.random() < .5 ? 'x+' : 'x-') : (Math.random() < .5 ? 'z+' : 'z-')
      const lane = 3.4
      let x, z
      if (onX) { x = t; z = r + (dir === 'x+' ? -lane : lane) }
      else { x = r + (dir === 'z+' ? lane : -lane); z = t }
      const car = new TrafficCar(this.scene, this.world, x, z, dir, [0x3a2c26, 0x232b32, 0x3c3a30, 0x2a222a][i % 4])
      this.traffic.push(car)
    }
  }

  spawnPeds() {
    for (let i = 0; i < 62; i++) {
      const bi = randInt(0, 4), bj = randInt(0, 4)
      const cx = CITY.centers[bi], cz = CITY.centers[bj]
      const p = new Pedestrian(this.scene, this.world, cx + 24, cz + rand(-22, 22), { x: cx, z: cz }, rand(0, 192))
      p.onHit = () => this.callbacks.onCrime?.('hit')
      this.peds.push(p)
    }
  }

  spawnParked() {
    const roads = this.world.roads
    let tries = 0
    while (this.parked.length < 12 && tries++ < 200) {
      const onX = Math.random() < .5
      const r = roads[randInt(0, roads.length - 1)]
      const t = rand(-CITY.HALF + 12, CITY.HALF - 12)
      const nearCross = roads.some(rr => Math.abs(rr - t) < 11)
      if (nearCross) continue
      const side = Math.random() < .5 ? 1 : -1
      let x, z, heading
      if (onX) { x = t; z = r + side * 6.1; heading = side > 0 ? -Math.PI / 2 : Math.PI / 2 }
      else { x = r + side * 6.1; z = t; heading = side > 0 ? Math.PI : 0 }
      if (this.world.colliders.some(c => x > c.minX - 2 && x < c.maxX + 2 && z > c.minZ - 2 && z < c.maxZ + 2)) continue
      const color = [0x4c1f1c, 0x1f2a34, 0x3a3326, 0x2c2c30, 0x513c24, 0x253a32][this.parked.length % 6]
      const mesh = createCarMesh(color, false, { beams: false })
      mesh.group.position.set(x, 0, z)
      mesh.group.rotation.y = heading
      this.scene.add(mesh.group)
      this.parked.push({ mesh, pos: new THREE.Vector3(x, 0, z), heading, color, taken: false })
    }
    // a guaranteed ride outside Moretti's
    this.addParkedCar(20, -40.2, -Math.PI / 2, 0x4c1f1c)
    this.addParkedCar(-120, 4, Math.PI / 2, 0x253a32)
    this.addParkedCar(6, 120, Math.PI, 0x3a2c26)
  }

  addParkedCar(x, z, heading, color) {
    const mesh = createCarMesh(color, false, { beams: false })
    mesh.group.position.set(x, 0, z)
    mesh.group.rotation.y = heading
    this.scene.add(mesh.group)
    this.parked.push({ mesh, pos: new THREE.Vector3(x, 0, z), heading, color, taken: false })
  }

  nearestParked(pos, radius = 4.2) {
    let best = null, bd = radius
    for (const p of this.parked) {
      if (p.taken) continue
      const d = Math.hypot(p.pos.x - pos.x, p.pos.z - pos.z)
      if (d < bd) { bd = d; best = p }
    }
    return best
  }

  update(dt, playerPos, playerCar, playerInCar, time) {
    this.gunshotTimer = Math.max(0, this.gunshotTimer - dt)
    const gunshot = this.gunshotTimer > 0
    for (const c of this.traffic) c.update(dt, playerPos, playerCar)
    for (const p of this.peds) p.update(dt, playerPos, gunshot, playerCar)
    // police
    const target = playerCar ? playerCar.pos : playerPos
    for (const c of this.police) {
      c.update(dt, target, time)
      const d = Math.hypot(c.pos.x - target.x, c.pos.z - target.z)
      if (d < 3.2) {
        if (playerCar && Math.abs(playerCar.speed) > 3) {
          playerCar.damage(dt * 14)
          if (this.callbacks.onPoliceHit) this.callbacks.onPoliceHit()
        } else if (!playerInCar) {
          if (this.callbacks.onPoliceShoot) this.callbacks.onPoliceShoot(dt)
        }
      }
    }
    // keep police spawning while wanted
    this.spawnTimer -= dt
    if (this.wanted > 0 && this.police.filter(p => !p.dead).length < this.wanted && this.spawnTimer <= 0) {
      this.spawnPolice(target)
      this.spawnTimer = 3.5
    }
  }

  spawnPolice(target) {
    const roads = this.world.roads
    for (let tries = 0; tries < 30; tries++) {
      const onX = Math.random() < .5
      const r = roads[randInt(0, roads.length - 1)]
      const t = rand(-CITY.HALF + 10, CITY.HALF - 10)
      const x = onX ? t : r + 3.4
      const z = onX ? r - 3.4 : t
      const d = Math.hypot(x - target.x, z - target.z)
      if (d < 55 || d > 140) continue
      const car = new PoliceCar(this.scene, this.world, x, z)
      car.heading = Math.atan2(target.x - x, target.z - z)
      this.police.push(car)
      return car
    }
    return null
  }

  setWanted(n, target) {
    n = clamp(n, 0, 5)
    this.wanted = n
    if (n === 0) {
      for (const p of this.police) this.scene.remove(p.mesh.group)
      this.police = []
    } else {
      while (this.police.filter(p => !p.dead).length < n) {
        if (!this.spawnPolice(target)) break
      }
      while (this.police.filter(p => !p.dead).length > n) {
        const p = this.police.find(p => !p.dead)
        if (!p) break
        this.scene.remove(p.mesh.group)
        this.police.splice(this.police.indexOf(p), 1)
      }
    }
  }

  alertGunshot() { this.gunshotTimer = 4 }

  shootableHit(origin, dir, maxDist) {
    let best = null, bestD = maxDist
    const test = (obj, pos, radius, kind) => {
      const to = new THREE.Vector3(pos.x - origin.x, 0, pos.z - origin.z)
      const along = to.dot(dir)
      if (along < 0 || along > maxDist) return
      const perp = Math.abs(to.x * dir.z - to.z * dir.x)
      if (perp < radius && along < bestD) { bestD = along; best = { obj, kind, point: new THREE.Vector3(origin.x + dir.x * along, 1.1, origin.z + dir.z * along) } }
    }
    for (const c of this.police) if (!c.dead) test(c, c.pos, 1.5, 'police')
    for (const c of this.traffic) test(c, c.pos, 1.4, 'traffic')
    for (const p of this.peds) if (!p.removed && p.down <= 0) test(p, p.pos, .55, 'ped')
    return best
  }

  policeAt(pos, radius = 3) {
    return this.police.find(p => !p.dead && Math.hypot(p.pos.x - pos.x, p.pos.z - pos.z) < radius)
  }
}
