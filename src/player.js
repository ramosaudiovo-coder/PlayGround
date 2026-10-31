import * as THREE from 'three'
import { clamp, damp, angleLerp, rand, radialTexture, setShadow } from './utils.js'

const coatMat = new THREE.MeshStandardMaterial({ color: 0x343a46, roughness: .82, metalness: .08 })
const coatDark = new THREE.MeshStandardMaterial({ color: 0x191b20, roughness: .92 })
const skinMat = new THREE.MeshStandardMaterial({ color: 0x9b7355, roughness: .75 })
const hatMat = new THREE.MeshStandardMaterial({ color: 0x1b1a1d, roughness: .8 })
const shirtMat = new THREE.MeshStandardMaterial({ color: 0xcfc2a4, roughness: .85 })
const gunMat = new THREE.MeshStandardMaterial({ color: 0x2a2c30, roughness: .35, metalness: .85 })
const flashTex = radialTexture('rgba(255,230,160,1)', 'rgba(255,120,40,0)', 64)

export class Player {
  constructor(scene, world, x, z) {
    this.scene = scene; this.world = world
    this.pos = new THREE.Vector3(x, 0, z)
    this.vel = new THREE.Vector3()
    this.heading = Math.PI
    this.health = 100
    this.maxHealth = 100
    this.lastDamage = -20
    this.radius = .42
    this.inCar = false
    this.aiming = false
    this.walkPhase = 0
    this.fireCooldown = 0
    this.dead = false
    this.tracers = []
    this.shake = 0
    this.build()
  }
  build() {
    const g = new THREE.Group()
    this.group = g
    // legs
    this.legs = []
    for (const s of [-1, 1]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(.17, .74, .2), coatDark)
      leg.geometry.translate(0, -.37, 0)
      leg.position.set(s * .12, .8, 0); g.add(leg); this.legs.push(leg)
      const shoe = new THREE.Mesh(new THREE.BoxGeometry(.19, .12, .34), new THREE.MeshStandardMaterial({ color: 0x0c0b0c, roughness: .6 }))
      shoe.position.set(0, -.72, .06); leg.add(shoe)
    }
    // torso / coat
    const torso = new THREE.Mesh(new THREE.CylinderGeometry(.24, .33, .82, 8), coatMat)
    torso.position.y = 1.2; g.add(torso)
    const chest = new THREE.Mesh(new THREE.BoxGeometry(.38, .5, .24), shirtMat)
    chest.position.set(0, 1.36, .15); g.add(chest)
    const lapelL = new THREE.Mesh(new THREE.BoxGeometry(.13, .5, .05), coatMat)
    lapelL.position.set(-.13, 1.34, .27); lapelL.rotation.z = .25; g.add(lapelL)
    const lapelR = lapelL.clone(); lapelR.position.x = .13; lapelR.rotation.z = -.25; g.add(lapelR)
    const tie = new THREE.Mesh(new THREE.BoxGeometry(.06, .34, .03), new THREE.MeshStandardMaterial({ color: 0x5d1e20, roughness: .7 }))
    tie.position.set(0, 1.3, .3); g.add(tie)
    // coat tails
    const tails = new THREE.Mesh(new THREE.BoxGeometry(.56, .58, .16), coatMat)
    tails.position.set(0, .84, -.16); tails.rotation.x = .12; g.add(tails)
    // head
    this.head = new THREE.Mesh(new THREE.SphereGeometry(.18, 12, 10), skinMat)
    this.head.position.y = 1.78; g.add(this.head)
    const brim = new THREE.Mesh(new THREE.CylinderGeometry(.3, .3, .04, 14), hatMat)
    brim.position.y = 1.9; g.add(brim)
    const crown = new THREE.Mesh(new THREE.CylinderGeometry(.19, .22, .22, 12), hatMat)
    crown.position.y = 2.01; g.add(crown)
    const band = new THREE.Mesh(new THREE.CylinderGeometry(.222, .222, .05, 12), new THREE.MeshStandardMaterial({ color: 0x5d4a2a, roughness: .5, metalness: .3 }))
    band.position.y = 1.94; g.add(band)
    // scarf
    const scarf = new THREE.Mesh(new THREE.TorusGeometry(.2, .06, 6, 14), new THREE.MeshStandardMaterial({ color: 0x6b2326, roughness: .9 }))
    scarf.rotation.x = Math.PI / 2; scarf.position.y = 1.6; g.add(scarf)
    // arms
    this.arms = []
    for (const s of [-1, 1]) {
      const arm = new THREE.Group()
      arm.position.set(s * .31, 1.5, 0)
      const upper = new THREE.Mesh(new THREE.CylinderGeometry(.075, .09, .55, 7), coatMat)
      upper.geometry.translate(0, -.275, 0); arm.add(upper)
      const hand = new THREE.Mesh(new THREE.SphereGeometry(.075, 8, 6), skinMat)
      hand.position.y = -.58; arm.add(hand)
      g.add(arm); this.arms.push(arm)
    }
    // pistol in right hand
    this.gun = new THREE.Group()
    const slide = new THREE.Mesh(new THREE.BoxGeometry(.07, .1, .36), gunMat); slide.position.set(0, 0, .16); this.gun.add(slide)
    const grip = new THREE.Mesh(new THREE.BoxGeometry(.065, .2, .1), new THREE.MeshStandardMaterial({ color: 0x3a2417, roughness: .8 })); grip.position.set(0, -.12, .04); grip.rotation.x = .2; this.gun.add(grip)
    this.gun.position.set(0, -.58, .06); this.gun.visible = false
    this.arms[1].add(this.gun)
    // muzzle flash
    this.flash = new THREE.Sprite(new THREE.SpriteMaterial({ map: flashTex, color: 0xffd08a, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }))
    this.flash.scale.set(1.1, 1.1, 1); this.flash.position.set(0, -.58, .4); this.flash.visible = false
    this.arms[1].add(this.flash)
    // muzzle light
    this.muzzleLight = new THREE.PointLight(0xffb060, 0, 8, 2)
    this.muzzleLight.position.set(0, 1.3, .5); g.add(this.muzzleLight)
    this.heroLight = new THREE.PointLight(0xffb878, 1.7, 6, 2)
    this.heroLight.position.set(0, 1.45, 1.35); g.add(this.heroLight)
    setShadow(g, true, false)
    g.position.copy(this.pos)
    this.scene.add(g)
  }

  get forward() { return new THREE.Vector3(Math.sin(this.heading), 0, Math.cos(this.heading)) }
  get speed() { return Math.hypot(this.vel.x, this.vel.z) }

  update(dt, input, cameraYaw, aiming, time) {
    if (this.inCar) { this.group.visible = false; return }
    this.group.visible = true
    this.aiming = aiming
    this.fireCooldown = Math.max(0, this.fireCooldown - dt)
    const fwd = new THREE.Vector3(-Math.sin(cameraYaw), 0, -Math.cos(cameraYaw))
    const right = new THREE.Vector3(-fwd.z, 0, fwd.x)
    let mx = input.move.x, my = input.move.y
    const mag = Math.min(1, Math.hypot(mx, my))
    const move = new THREE.Vector3()
    if (mag > .08) move.copy(fwd).multiplyScalar(my).addScaledVector(right, mx).normalize()
    const sprint = input.sprint && !this.aiming && my > .2
    const targetSpeed = mag > .08 ? (this.aiming ? 2.1 : sprint ? 6.4 : 3.5) : 0
    const accel = mag > .08 ? 16 : 12
    this.vel.x = damp(this.vel.x, move.x * targetSpeed, accel, dt)
    this.vel.z = damp(this.vel.z, move.z * targetSpeed, accel, dt)
    const next = new THREE.Vector3(this.pos.x + this.vel.x * dt, 0, this.pos.z + this.vel.z * dt)
    this.world.resolveCircle(next, this.radius)
    next.x = clamp(next.x, -174, 174)
    next.z = clamp(next.z, -174, 181)
    this.pos.copy(next)
    const sp = this.speed
    if (sp > .15) {
      const targetHeading = Math.atan2(this.vel.x, this.vel.z)
      this.heading = angleLerp(this.heading, targetHeading, Math.min(1, dt * (this.aiming ? 16 : 10)))
    }
    if (this.aiming) {
      const aimHeading = Math.atan2(-Math.sin(cameraYaw), -Math.cos(cameraYaw))
      this.heading = angleLerp(this.heading, aimHeading, Math.min(1, dt * 14))
    }
    // animation
    this.walkPhase += dt * (sp > .2 ? sp * 2.1 : 2)
    const walk = sp > .15 ? Math.sin(this.walkPhase) * clamp(sp / 4, .3, 1.15) : Math.sin(time * 1.6) * .035
    this.legs[0].rotation.x = walk * .85
    this.legs[1].rotation.x = -walk * .85
    this.arms[0].rotation.x = -walk * .6
    this.arms[1].rotation.x = this.aiming ? -1.45 : walk * .6
    this.arms[1].rotation.z = this.aiming ? -.08 : 0
    this.arms[0].rotation.z = this.aiming ? -.25 : 0
    this.gun.visible = this.aiming
    // body lean
    this.group.rotation.z = clamp(-this.vel.x * .012, -.08, .08)
    this.group.position.set(this.pos.x, 0, this.pos.z)
    this.group.rotation.y = this.heading
    // health regen
    if (time - this.lastDamage > 7 && this.health < this.maxHealth && !this.dead) {
      this.health = Math.min(this.maxHealth, this.health + 9 * dt)
    }
    this.muzzleLight.intensity = Math.max(0, this.muzzleLight.intensity - dt * 180)
    if (this.muzzleLight.intensity <= 0) this.flash.visible = false
    // tracers
    for (let i = this.tracers.length - 1; i >= 0; i--) {
      const t = this.tracers[i]
      t.life -= dt
      t.mat.opacity = clamp(t.life / .09, 0, 1) * .85
      if (t.life <= 0) { this.scene.remove(t.line); t.line.geometry.dispose(); t.mat.dispose(); this.tracers.splice(i, 1) }
    }
  }

  muzzleWorld() {
    const v = new THREE.Vector3(0, -.58, .45)
    this.arms[1].localToWorld(v)
    return v
  }

  shoot(targetPoint) {
    if (this.fireCooldown > 0) return false
    this.fireCooldown = .3
    const from = this.muzzleWorld()
    const dir = targetPoint.clone().sub(from).normalize()
    const to = from.clone().addScaledVector(dir, 30)
    const geo = new THREE.BufferGeometry().setFromPoints([from, to])
    const mat = new THREE.LineBasicMaterial({ color: 0xffd08a, transparent: true, opacity: .85 })
    const line = new THREE.Line(geo, mat)
    this.scene.add(line)
    this.tracers.push({ line, mat, life: .09 })
    this.flash.visible = true
    this.flash.material.rotation = rand(0, Math.PI * 2)
    this.muzzleLight.intensity = 26
    this.shake = .12
    return true
  }

  damage(v) {
    if (this.dead) return
    this.health = clamp(this.health - v, 0, this.maxHealth)
    this.lastDamage = performance.now() / 1000
    if (this.health <= 0) this.dead = true
  }
}
