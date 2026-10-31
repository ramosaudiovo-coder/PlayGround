import * as THREE from 'three'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js'
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js'
import { createCity } from './city.js'
import { Player } from './player.js'
import { PlayerCar, createCarMesh } from './vehicles.js'
import { Population } from './traffic.js'
import { Input } from './input.js'
import { UI } from './ui.js'
import { AudioEngine } from './audio.js'
import { Missions } from './missions.js'
import { clamp, damp, angleLerp, dist2, rand } from './utils.js'

const SAVE_KEY = 'larossa.save.v1'
const isMobile = matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0

const GradeShader = {
  uniforms: { tDiffuse: { value: null }, time: { value: 0 }, strength: { value: 1 } },
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
  fragmentShader: `varying vec2 vUv; uniform sampler2D tDiffuse; uniform float time; uniform float strength;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      float l = dot(c.rgb, vec3(.299,.587,.114));
      c.rgb = mix(c.rgb, c.rgb * vec3(.9,.98,1.1), (1.0-l)*.32);
      c.rgb = mix(c.rgb, c.rgb * vec3(1.08,1.01,.9), l*.22);
      float d = distance(vUv, vec2(.5));
      c.rgb *= mix(.62, 1.0, smoothstep(.92,.28,d));
      float n = fract(sin(dot(vUv*vec2(1234.0,5678.0)+time,vec2(12.9898,78.233)))*43758.5453);
      c.rgb += (n-.5)*.016;
      gl_FragColor = c;
    }`
}

class Game {
  constructor() {
    this.state = 'boot'
    this.quality = true
    this.money = 0
    this.heat = 0
    this.heatCooldown = 0
    this.sessionTime = 0
    this.paused = false
    this.shake = 0
    this.frame = 0
    this.lastDistrict = ''
    this.carHitCooldown = 0
    this.cameraSnap = true
    this.camYaw = 0
    this.camPitch = .27
    this.orbitYaw = 0
    this.orbitPitch = 0
    this.lastLookAt = new THREE.Vector3()
    this.carOrbit = 0
    this.carOrbitPitch = 0
    this.lookIdle = 0
    this.storyComplete = false
    this.playerCar = null
    this.save = this.loadSave()
    this.money = this.save.money || 0
    this.storyComplete = !!this.save.storyComplete
    this.quality = this.save.quality !== false
  }

  async init() {
    const setLoad = (p, text) => {
      document.getElementById('loadFill').style.width = p + '%'
      if (text) document.getElementById('loadStatus').textContent = text
    }
    setLoad(12, 'Waking the city…')
    await new Promise(r => setTimeout(r, 60))
    this.setupRenderer()
    setLoad(30, 'Pouring the streets…')
    await new Promise(r => setTimeout(r, 40))
    this.setupScene()
    setLoad(48, 'Lighting the neon…')
    await new Promise(r => setTimeout(r, 40))
    this.world = createCity(this.scene, this.renderer)
    setLoad(66, 'Filling the harbor…')
    await new Promise(r => setTimeout(r, 40))
    this.player = new Player(this.scene, this.world, 6, -44.5)
    this.player.heading = Math.PI
    this.population = new Population(this.scene, this.world, {
      onCrime: () => this.addWanted(1),
      onPoliceShoot: (dt) => { this.player.damage(dt * 12); this.shake = Math.max(this.shake, .18) },
      onPoliceHit: () => { this.shake = Math.max(this.shake, .22) }
    })
    setLoad(80, 'Hiring the band…')
    await new Promise(r => setTimeout(r, 40))
    this.input = new Input()
    this.ui = new UI(this.world, this.input)
    this.audio = new AudioEngine()
    this.setupMissions()
    this.setupPost()
    this.setupLights()
    this.bindUI()
    this.ui.setMoney(this.money)
    this.ui.setWanted(0)
    this.ui.setHealth(100)
    this.ui.setClock(23 * 60 + 40)
    this.ui.el.loading.classList.add('hidden')
    this.ui.el.title.classList.remove('hidden')
    if (this.storyComplete) {
      const b = document.getElementById('btnFree')
      b.disabled = false
      b.innerHTML = 'FREE ROAM'
    }
    this.state = 'title'
    this.ui.setCinematic(true)
    setLoad(100, 'Ready')
    this.applySettings()
    this.clock = new THREE.Clock()
    this.loop()
  }

  setupRenderer() {
    const canvas = document.getElementById('game')
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance', stencil: false })
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, isMobile ? 1.4 : 1.8))
    this.renderer.setSize(innerWidth, innerHeight)
    this.renderer.outputColorSpace = THREE.SRGBColorSpace
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    this.renderer.toneMappingExposure = 1.22
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.camera = new THREE.PerspectiveCamera(55, innerWidth / innerHeight, .1, 1100)
    this.camera.position.set(0, 40, 120)
  }

  setupScene() {
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0x070a12)
    this.scene.fog = new THREE.FogExp2(0x0a0e18, .0062)
  }

  setupLights() {
    const hemi = new THREE.HemisphereLight(0x6f86ad, 0x2a1e18, 1.35)
    this.scene.add(hemi)
    const ambient = new THREE.AmbientLight(0x2a3550, .55)
    this.scene.add(ambient)
    const moon = new THREE.DirectionalLight(0xb8c8e8, 1.65)
    moon.position.set(-90, 150, -80)
    moon.castShadow = true
    moon.shadow.mapSize.set(isMobile ? 1024 : 2048, isMobile ? 1024 : 2048)
    moon.shadow.camera.left = -190; moon.shadow.camera.right = 190
    moon.shadow.camera.top = 190; moon.shadow.camera.bottom = -190
    moon.shadow.camera.near = 1; moon.shadow.camera.far = 420
    moon.shadow.bias = -.0006
    moon.shadow.normalBias = .04
    this.scene.add(moon)
    this.moon = moon
    const rim = new THREE.DirectionalLight(0xff8c4a, .42)
    rim.position.set(120, 28, 140)
    this.scene.add(rim)
    const fill = new THREE.PointLight(0xffa45c, 20, 160, 2)
    fill.position.set(0, 22, 0)
    this.scene.add(fill)
    this.scene.environment = this.makeEnv()
    this.scene.environmentIntensity = .45
  }

  makeEnv() {
    const faces = []
    for (let i = 0; i < 6; i++) {
      const c = document.createElement('canvas'); c.width = 64; c.height = 64
      const ctx = c.getContext('2d')
      const g = ctx.createLinearGradient(0, 0, 0, 64)
      g.addColorStop(0, '#0a0f1a')
      g.addColorStop(.48, '#2a2230')
      g.addColorStop(.62, '#6b3a24')
      g.addColorStop(.72, '#1a1214')
      g.addColorStop(1, '#06070a')
      ctx.fillStyle = g; ctx.fillRect(0, 0, 64, 64)
      if (i === 1) { ctx.fillStyle = 'rgba(255,225,170,.7)'; ctx.beginPath(); ctx.arc(20, 22, 5, 0, Math.PI * 2); ctx.fill() }
      faces.push(c)
    }
    const cube = new THREE.CubeTexture(faces)
    cube.needsUpdate = true
    cube.colorSpace = THREE.SRGBColorSpace
    const pmrem = new THREE.PMREMGenerator(this.renderer)
    const rt = pmrem.fromCubemap(cube)
    pmrem.dispose()
    return rt.texture
  }

  setupPost() {
    this.composer = new EffectComposer(this.renderer)
    this.composer.setPixelRatio(this.renderer.getPixelRatio())
    this.composer.setSize(innerWidth, innerHeight)
    this.renderPass = new RenderPass(this.scene, this.camera)
    this.bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), .72, .62, .78)
    this.outputPass = new OutputPass()
    this.grade = new ShaderPass(GradeShader)
    this.composer.addPass(this.renderPass)
    this.composer.addPass(this.bloom)
    this.composer.addPass(this.outputPass)
    this.composer.addPass(this.grade)
  }

  setupMissions() {
    this.missions = new Missions({
      scene: this.scene, world: this.world, player: this.player, ui: this.ui,
      population: this.population, audio: this.audio,
      callbacks: {
        addMoney: (v) => { this.money += v; this.ui.setMoney(this.money); this.saveGame() },
        getMoney: () => this.money,
        getTime: () => this.formatTime(this.sessionTime),
        onMissionStart: () => { this.ui.setWanted(this.heat) },
        onMissionComplete: () => this.saveGame(),
        onStoryComplete: () => {
          this.storyComplete = true; this.saveGame(); this.state = 'ending'; this.input.enabled = false
          const b = document.getElementById('btnFree'); b.disabled = false; b.innerHTML = 'FREE ROAM'
        },
        onFreeRoam: () => {
          this.state = 'playing'; this.input.enabled = true; this.paused = false
          this.ui.setObjective('The city is yours', 'Call the phone for work')
          this.ui.showToast('FREE ROAM — THE CITY IS YOURS', 3.5)
        },
        addWanted: (n) => this.addWanted(n),
        damagePlayer: (v) => { this.player.damage(v); if (v > 4) this.ui.damageFlash(); this.shake = Math.max(this.shake, .12) },
        onImpact: (v) => { this.shake = Math.max(this.shake, v * .022); this.audio?.impact() },
        onRetry: () => this.retry(),
        onFail: () => { this.state = 'fail'; this.input.enabled = false },
        forceExitCar: () => this.exitCar(true)
      }
    })
  }

  bindUI() {
    const click = (id, fn) => document.getElementById(id).addEventListener('click', (e) => { e.preventDefault(); this.audio?.unlock(); this.audio?.click(); fn() })
    click('btnStory', () => this.startStory())
    click('btnFree', () => this.startFreeRoam())
    click('btnSettingsTitle', () => this.openSettings('title'))
    click('btnSettingsPause', () => this.openSettings('pause'))
    click('btnSettingsBack', () => this.closeSettings())
    click('btnPause', () => this.openPause())
    click('btnResume', () => this.closePause())
    click('btnRestart', () => { this.closePause(); this.retry() })
    click('btnQuit', () => this.quitToTitle())
    click('btnPhone', () => this.openPhone())
    click('btnPhoneClose', () => this.closePhone())
    click('btnFailQuit', () => this.quitToTitle())
    document.getElementById('btnTilt').addEventListener('click', async (e) => {
      e.preventDefault()
      const t = document.getElementById('btnTilt')
      if (this.input.tiltEnabled) {
        this.input.disableTilt(); t.classList.remove('on'); t.setAttribute('aria-pressed', 'false')
        this.ui.setTiltBadge(false); this.ui.motionNote('Tilt steering off. The joystick still steers.', false)
        this.save.tilt = false; this.saveGame()
      } else {
        const ok = await this.input.enableTilt()
        if (ok) {
          t.classList.add('on'); t.setAttribute('aria-pressed', 'true')
          this.ui.setTiltBadge(true); this.ui.motionNote('Tilt active. Hold the device level and tap this note to recalibrate.', false)
          this.save.tilt = true; this.saveGame()
        } else {
          t.classList.remove('on'); t.setAttribute('aria-pressed', 'false')
          const reason = this.input.motionState === 'denied' ? 'Motion permission was denied. Enable it in browser settings, or keep using the joystick.' : 'Motion sensors are not available on this device. The joystick still steers.'
          this.ui.motionNote(reason)
        }
      }
    })
    click('btnAudio', () => {
      const b = document.getElementById('btnAudio')
      const on = !b.classList.contains('on')
      b.classList.toggle('on', on); b.setAttribute('aria-pressed', String(on))
      this.audio.setEnabled(on); this.audio.setMusic(on)
      this.save.audio = on; this.saveGame()
    })
    click('btnQuality', () => {
      const b = document.getElementById('btnQuality')
      this.quality = !b.classList.contains('on')
      b.classList.toggle('on', this.quality); b.setAttribute('aria-pressed', String(this.quality))
      this.applyQuality()
      this.save.quality = this.quality; this.saveGame()
    })
    click('btnLefty', () => {
      const b = document.getElementById('btnLefty')
      const on = !b.classList.contains('on')
      b.classList.toggle('on', on); b.setAttribute('aria-pressed', String(on))
      this.input.setLefty(on); this.save.lefty = on; this.saveGame()
    })
    window.addEventListener('pointerdown', () => { this.audio.unlock() }, { once: true })
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Escape') {
        if (!this.ui.el.pause.classList.contains('hidden')) this.closePause()
        else if (!this.ui.el.settings.classList.contains('hidden')) this.closeSettings()
        else if (!this.ui.el.phone.classList.contains('hidden')) this.closePhone()
        else if (this.state === 'playing') this.openPause()
      }
      if (e.code === 'KeyP' && this.state === 'playing') this.openPause()
    })
    window.addEventListener('resize', () => this.resize())
    document.addEventListener('visibilitychange', () => { if (document.hidden && this.state === 'playing') this.openPause() })
  }

  applySettings() {
    this.input.setLefty(!!this.save.lefty)
    const lefty = document.getElementById('btnLefty')
    lefty.classList.toggle('on', !!this.save.lefty); lefty.setAttribute('aria-pressed', String(!!this.save.lefty))
    if (this.save.audio === false) {
      const b = document.getElementById('btnAudio'); b.classList.remove('on'); b.setAttribute('aria-pressed', 'false')
      this.audio.setEnabled(false); this.audio.setMusic(false)
    }
    const q = document.getElementById('btnQuality'); q.classList.toggle('on', this.quality); q.setAttribute('aria-pressed', String(this.quality))
    this.applyQuality()
    if (this.save.tilt) {
      const b = document.getElementById('btnTilt'); b.classList.add('on'); b.setAttribute('aria-pressed', 'true')
      this.ui.setTiltBadge(true)
      this.pendingTilt = true
    }
  }

  tryEnableSavedTilt() {
    if (!this.save.tilt || this.input.tiltEnabled) return
    this.input.enableTilt().then(ok => {
      const b = document.getElementById('btnTilt')
      if (ok) {
        b.classList.add('on'); b.setAttribute('aria-pressed', 'true')
        this.ui.setTiltBadge(true)
      } else {
        b.classList.remove('on'); b.setAttribute('aria-pressed', 'false')
        this.ui.setTiltBadge(false)
      }
    })
  }

  applyQuality() {
    this.renderer.setPixelRatio(this.quality ? Math.min(devicePixelRatio, isMobile ? 1.4 : 1.8) : 1)
    this.composer?.setPixelRatio(this.renderer.getPixelRatio())
    this.composer?.setSize(innerWidth, innerHeight)
    this.renderer.setSize(innerWidth, innerHeight)
    if (this.bloom) this.bloom.enabled = this.quality
  }

  loadSave() {
    try { return JSON.parse(localStorage.getItem(SAVE_KEY)) || {} } catch { return {} }
  }
  saveGame() {
    this.save = { ...this.save, money: this.money, storyComplete: this.storyComplete, quality: this.quality }
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(this.save)) } catch {}
  }
  formatTime(t) {
    const m = Math.floor(t / 60), s = Math.floor(t % 60)
    return `${m}:${String(s).padStart(2, '0')}`
  }

  // ---------- flow ----------
  startStory() {
    this.audio.unlock()
    this.audio.sting(true)
    this.tryEnableSavedTilt()
    this.ui.el.title.classList.add('hidden')
    this.ui.el.hud.classList.remove('hidden')
    this.ui.setCinematic(false)
    this.state = 'playing'
    this.paused = false
    this.input.enabled = true
    this.heat = 0; this.ui.setWanted(0); this.population.setWanted(0, this.player.pos)
    this.clearPlayerCar()
    this.player.health = 100; this.player.dead = false
    this.player.pos.set(6, 0, -44.5); this.player.vel.set(0, 0, 0); this.player.heading = Math.PI
    this.player.inCar = false; this.player.group.visible = true; this.player.group.position.copy(this.player.pos)
    this.camYaw = 0; this.camPitch = .27
    this.ui.setHealth(100); this.ui.setCarMode(false); this.ui.setMoney(this.money)
    this.missions.startStory()
    this.ui.setObjective('Collect the envelope from Sal', 'Sal’s Butcher · Little Italy')
    this.ui.showToast('CHAPTER I — THE RUNNER', 3)
    this.cameraSnap = true
    this.saveGame()
    setTimeout(() => {
      if (this.state !== 'playing' || this.missions.storyStep !== 1) return
      this.ui.say([{ who: 'DON MORETTI', text: 'Nico. Sal has an envelope with my name on it. Bring it here before the rain gets worse.' }])
    }, 1800)
  }

  startFreeRoam() {
    if (!this.storyComplete) { this.ui.showToast('FINISH THE STORY FIRST'); return }
    this.audio.unlock()
    this.tryEnableSavedTilt()
    this.ui.el.title.classList.add('hidden')
    this.ui.el.hud.classList.remove('hidden')
    this.ui.setCinematic(false)
    this.state = 'playing'
    this.paused = false
    this.input.enabled = true
    this.heat = 0; this.ui.setWanted(0); this.population.setWanted(0, this.player.pos)
    this.clearPlayerCar()
    this.player.health = 100; this.player.dead = false
    this.player.pos.set(6, 0, -44.5); this.player.heading = Math.PI
    this.player.inCar = false; this.player.group.visible = true
    this.camYaw = 0; this.camPitch = .27
    this.ui.setHealth(100); this.ui.setCarMode(false); this.ui.setMoney(this.money)
    this.missions.mode = 'free'; this.missions.storyComplete = true; this.missions.active = false
    this.ui.setObjective('The city is yours', 'Call the phone for work')
    this.ui.showToast('FREE ROAM — CALL THE PHONE FOR WORK', 3.5)
    this.cameraSnap = true
  }

  quitToTitle() {
    this.paused = false
    this.state = 'title'
    this.input.enabled = false
    this.ui.el.pause.classList.add('hidden')
    this.ui.el.settings.classList.add('hidden')
    this.ui.el.phone.classList.add('hidden')
    this.ui.el.fail.classList.add('hidden')
    this.ui.el.ending.classList.add('hidden')
    this.ui.el.missionCard.classList.add('hidden')
    this.ui.el.hud.classList.add('hidden')
    this.ui.el.title.classList.remove('hidden')
    this.ui.setCinematic(true)
    this.missions.cleanup()
    this.heat = 0; this.population.setWanted(0, this.player.pos); this.ui.setWanted(0)
    if (this.player.inCar) this.exitCar(true)
    this.ui.clearDialogue(); this.ui.setInteract(null)
    this.saveGame()
  }

  openPause() {
    if (this.state !== 'playing') return
    this.paused = true; this.input.enabled = false
    this.ui.el.pause.classList.remove('hidden')
  }
  closePause() {
    this.ui.el.pause.classList.add('hidden')
    this.paused = false; this.input.enabled = true
  }
  openSettings(from) {
    this.settingsFrom = from
    this.ui.el.settings.classList.remove('hidden')
    if (from === 'title') this.ui.el.title.classList.add('hidden')
    if (from === 'pause') this.ui.el.pause.classList.add('hidden')
    this.paused = true; this.input.enabled = false
    this.ui.motionNote(this.input.tiltEnabled ? 'Tilt active. Hold the device level and tap this note to recalibrate.' : 'Tilt steering is off. Enable it here, then steer by tilting in a car.', !this.input.tiltEnabled)
  }
  closeSettings() {
    this.ui.el.settings.classList.add('hidden')
    if (this.settingsFrom === 'title') { this.ui.el.title.classList.remove('hidden'); this.state = 'title' }
    else if (this.settingsFrom === 'pause') { this.ui.el.pause.classList.remove('hidden') }
    else { this.paused = false; this.input.enabled = true }
  }
  openPhone() {
    if (this.state !== 'playing') return
    this.paused = true; this.input.enabled = false
    this.ui.openPhone(this.missions.getJobs(), (job) => {
      this.paused = false; this.input.enabled = true
      this.missions.startJob(job)
    })
  }
  closePhone() {
    this.ui.closePhone()
    if (this.state === 'playing') { this.paused = false; this.input.enabled = true }
  }

  // ---------- cars ----------
  clearPlayerCar() {
    if (this.playerCar) {
      this.scene.remove(this.playerCar.mesh.group)
      this.playerCar = null
    }
    this.player.inCar = false; this.player.car = null
  }
  findNearbyCar() {
    if (this.player.inCar) return null
    if (this.playerCar && this.playerCar.health > 0) {
      const d = dist2(this.player.pos.x, this.player.pos.z, this.playerCar.pos.x, this.playerCar.pos.z)
      if (d < 4.5) return { current: true, car: this.playerCar }
    }
    const parked = this.population.nearestParked(this.player.pos, 4.5)
    return parked ? { current: false, parked } : null
  }
  enterCar(data) {
    if (!data) return
    let car
    if (data.current) car = data.car
    else {
      const p = data.parked
      if (p.taken) return
      p.taken = true; p.mesh.group.visible = false
      car = new PlayerCar(this.scene, this.world, p.pos.x, p.pos.z, p.heading, p.color)
    }
    if (car.health <= 0) { this.ui.showToast('THAT RIDE IS WRECKED'); return }
    this.playerCar = car
    this.player.inCar = true; this.player.car = car
    this.player.pos.copy(car.pos); this.player.heading = car.heading
    this.player.group.visible = false
    this.carOrbit = 0; this.carOrbitPitch = 0
    this.ui.setCarMode(true); this.ui.setActLabel('EXIT'); this.ui.setInteract(null)
    this.audio.startEngine()
    this.cameraSnap = true
    this.ui.showToast('ENGINE STARTED', 1.2)
  }
  exitCar(force = false) {
    if (!this.player.inCar || !this.playerCar) return
    const car = this.playerCar
    car.speed = 0
    const right = new THREE.Vector3(Math.cos(car.heading), 0, -Math.sin(car.heading))
    let p = new THREE.Vector3(car.pos.x + right.x * 2.2, 0, car.pos.z + right.z * 2.2)
    this.world.resolveCircle(p, .5)
    if (this.world.collideCircle(p.x, p.z, .5)) p = new THREE.Vector3(car.pos.x - right.x * 2.2, 0, car.pos.z - right.z * 2.2)
    this.player.pos.copy(p); this.player.vel.set(0, 0, 0)
    this.player.heading = car.heading
    this.camYaw = car.heading + Math.PI
    this.player.inCar = false; this.player.car = null
    this.player.group.visible = true; this.player.group.position.copy(p)
    this.ui.setCarMode(false); this.ui.setActLabel('ACT')
    this.audio.stopEngine()
    this.cameraSnap = true
    if (!force) this.ui.showToast('ON FOOT', 1)
  }
  forceExitCar() { this.exitCar(true) }

  // ---------- wanted ----------
  addWanted(n) {
    if (this.state !== 'playing') return
    const before = this.heat
    this.heat = clamp(this.heat + n, 0, 5)
    this.heatCooldown = 24
    this.population.setWanted(this.heat, this.player.pos)
    this.ui.setWanted(this.heat)
    if (this.heat > before) {
      this.ui.showToast(this.heat >= 4 ? 'THE WHOLE CITY IS LOOKING' : 'WANTED LEVEL ' + this.heat, 2)
      this.audio.sting(false)
    }
  }
  updateHeat(dt) {
    if (this.heat <= 0) { this.audio.siren(false); return }
    this.heatCooldown -= dt
    if (this.heatCooldown <= 0) {
      const nearCop = this.population.police.some(p => !p.dead && dist2(p.pos.x, p.pos.z, this.player.pos.x, this.player.pos.z) < 45)
      if (!nearCop) {
        this.heat--
        this.population.setWanted(this.heat, this.player.pos)
        this.ui.setWanted(this.heat)
        this.heatCooldown = 15
        if (this.heat === 0) this.ui.showToast('HEAT LOST — KEEP MOVING', 2.5)
      } else this.heatCooldown = 4
    }
    const copNear = this.population.police.some(p => !p.dead && dist2(p.pos.x, p.pos.z, this.player.pos.x, this.player.pos.z) < 80)
    this.audio.siren(this.heat > 0 && copNear)
  }

  // ---------- shooting ----------
  aimTarget(origin, dir) {
    const targets = [...this.missions.getAimTargets()]
    for (const c of this.population.police) if (!c.dead) targets.push({ pos: c.pos, radius: 1.5, kind: 'police' })
    let best = null, bestScore = -1
    for (const t of targets) {
      const to = new THREE.Vector3(t.pos.x - origin.x, 0, t.pos.z - origin.z)
      const d = to.length()
      if (d < .5 || d > 38) continue
      to.normalize()
      const dot = to.dot(dir)
      if (dot < .82) continue
      const score = dot - d * .004 + (t.kind === 'enemy' ? .2 : 0)
      if (score > bestScore) { bestScore = score; best = { ...t, point: new THREE.Vector3(t.pos.x, 1.1, t.pos.z) } }
    }
    return best
  }

  handleShooting(dt) {
    const aiming = !this.player.inCar && this.input.aiming
    this.ui.setReticle(aiming)
    if (!aiming) return
    if (!this.input.fire) return
    const origin = this.player.muzzleWorld()
    const camDir = new THREE.Vector3(-Math.sin(this.camYaw), 0, -Math.cos(this.camYaw)).normalize()
    const auto = this.aimTarget(origin, camDir)
    let dir = camDir
    if (auto) dir = new THREE.Vector3(auto.pos.x - origin.x, 0, auto.pos.z - origin.z).normalize()
    const mHit = this.missions.shootableHit(origin, dir, 42)
    const pHit = this.population.shootableHit(origin, dir, 42)
    let hit = null
    if (mHit && pHit) hit = mHit.point.distanceTo(origin) < pHit.point.distanceTo(origin) ? mHit : pHit
    else hit = mHit || pHit
    const point = hit ? hit.point : origin.clone().addScaledVector(dir, 38)
    if (this.player.shoot(point)) {
      this.audio.gunshot()
      this.population.alertGunshot()
      this.shake = Math.max(this.shake, .16)
      if (hit) {
        if (hit.kind === 'enemy' || hit.kind === 'chase') {
          this.missions.applyHit(hit, 40)
        } else if (hit.kind === 'police') {
          hit.obj.health -= 45
          if (hit.obj.health <= 0) { hit.obj.dead = true; hit.obj.mesh.group.rotation.z = .14; this.addWanted(1) }
          else this.addWanted(1)
        } else if (hit.kind === 'ped') {
          hit.obj.knock(); this.addWanted(1)
        } else if (hit.kind === 'traffic') {
          hit.obj.speed *= .2
          this.audio.blip(200, .1, 'square', .05)
        }
      }
    }
  }

  // ---------- car collisions ----------
  handleCarCollisions(dt) {
    if (!this.player.inCar || !this.playerCar) return
    this.carHitCooldown = Math.max(0, this.carHitCooldown - dt)
    const car = this.playerCar
    for (const c of this.population.traffic) {
      const d = dist2(car.pos.x, car.pos.z, c.pos.x, c.pos.z)
      if (d < 2.6 && this.carHitCooldown <= 0) {
        this.carHitCooldown = .8
        car.damage(4); this.shake = Math.max(this.shake, .28)
        this.audio.impact()
        c.speed *= .3
      }
    }
    for (const p of this.population.parked) {
      if (p.taken) continue
      const d = dist2(car.pos.x, car.pos.z, p.pos.x, p.pos.z)
      if (d < 2.6 && this.carHitCooldown <= 0) {
        this.carHitCooldown = .8
        car.damage(4); this.shake = Math.max(this.shake, .3)
        this.audio.impact()
      }
    }
    if (car.health <= 0 && !this.carDestroyed) {
      this.carDestroyed = true
      this.ui.showToast('YOUR RIDE IS WRECKED', 2.5)
      this.exitCar(true)
      setTimeout(() => { this.carDestroyed = false }, 2000)
    }
  }

  // ---------- interaction ----------
  updateInteract() {
    const prompt = this.missions.getInteractPrompt(this.player.pos)
    const near = this.findNearbyCar()
    if (prompt) {
      this.ui.setInteract(prompt.text)
      this.ui.setActLabel(this.player.inCar ? 'USE' : 'ACT')
    } else if (this.player.inCar) {
      this.ui.setInteract(null)
      this.ui.setActLabel('EXIT')
    } else if (near) {
      this.ui.setInteract(near.current ? 'Drive your car' : 'Get in the car')
      this.ui.setActLabel('DRIVE')
    } else {
      this.ui.setInteract(null)
      this.ui.setActLabel('ACT')
    }
    if (this.input.consumeAct()) {
      if (prompt) this.missions.interact()
      else if (this.player.inCar) this.exitCar()
      else if (near) this.enterCar(near)
    }
  }

  // ---------- retry ----------
  retry() {
    this.ui.el.fail.classList.add('hidden')
    this.ui.el.pause.classList.add('hidden')
    this.state = 'playing'
    this.paused = false; this.input.enabled = true
    this.player.health = 100; this.player.dead = false
    this.ui.setHealth(100)
    this.heat = 0; this.population.setWanted(0, this.player.pos); this.ui.setWanted(0); this.audio.siren(false)
    if (this.player.inCar) this.exitCar(true)
    if (this.missions.storyComplete || (this.missions.mode === 'free' && !this.missions.storyStep)) {
      this.clearPlayerCar()
      this.player.pos.set(6, 0, -44.5); this.player.heading = Math.PI; this.player.vel.set(0, 0, 0)
      this.camYaw = 0; this.camPitch = .27
      this.ui.setObjective('The city is yours', 'Call the phone for work')
      this.ui.showToast('THE CITY FORGIVES — FOR A PRICE', 2.5)
      this.money = Math.max(0, this.money - 50); this.ui.setMoney(this.money); this.saveGame()
      return
    }
    const step = this.missions.storyStep || 1
    this.missions.cleanup()
    this.clearPlayerCar()
    this.ui.clearDialogue()
    if (step === 1) {
      this.player.pos.set(6, 0, -44.5); this.player.heading = Math.PI
      this.camYaw = 0
      this.missions.startMission1()
    } else if (step === 2) {
      this.player.pos.set(84, 0, -14); this.player.heading = Math.PI / 2
      this.camYaw = -Math.PI / 2
      this.missions.startMission2()
      this.spawnAndEnterCar(78, -18, Math.PI / 2)
    } else {
      this.player.pos.set(0, 0, 120); this.player.heading = Math.PI
      this.camYaw = 0
      this.missions.startMission3()
      this.spawnAndEnterCar(8, 120, Math.PI)
    }
    this.ui.showToast('BACK TO THE JOB', 2)
  }

  spawnAndEnterCar(x, z, heading) {
    const car = new PlayerCar(this.scene, this.world, x, z, heading, 0x3a2c26)
    this.playerCar = car
    this.player.pos.copy(car.pos); this.player.heading = heading
    this.player.inCar = true; this.player.car = car; this.player.group.visible = false
    this.ui.setCarMode(true); this.ui.setActLabel('EXIT')
    this.audio.startEngine()
    this.cameraSnap = true
  }

  gameOver() {
    if (this.state !== 'playing') return
    this.state = 'fail'; this.input.enabled = false
    this.audio.sting(false)
    this.ui.showFail('WASTED', 'The city always wins. But it lets you try again.', () => this.retry())
  }

  // ---------- update ----------
  update(dt) {
    this.sessionTime += dt
    this.ui.tickClock(dt)
    const p = this.player.pos
    const dist = this.ui.districtFor(p.z)
    if (dist !== this.lastDistrict) { this.lastDistrict = dist; this.ui.setDistrict(dist) }
    this.world.update(dt, this.sessionTime)
    this.population.update(dt, p, this.playerCar, this.player.inCar, this.sessionTime)
    this.handleCarCollisions(dt)
    this.handleShooting(dt)
    this.updateHeat(dt)
    this.updateInteract()
    this.missions.update(dt, this.sessionTime)
    if (this.player.health <= 0 && !this.player.dead) this.player.dead = true
    if (this.player.dead) this.gameOver()
    this.audio.updateEngine(this.playerCar?.speed || 0, this.input.move.y, this.player.inCar)
    // HUD
    this.ui.setHealth(this.player.health)
    if (this.player.inCar && this.playerCar) {
      this.ui.setCarHealth(this.playerCar.health)
      this.ui.drawSpeedo(this.playerCar.speedKmh)
      this.ui.el.speedNum.textContent = Math.round(this.playerCar.speedKmh)
    }
    if (this.missions.waypoint) {
      const d = dist2(p.x, p.z, this.missions.waypoint.x, this.missions.waypoint.z)
      this.ui.updateChip(d)
      this.ui.el.chip.classList.remove('hidden')
    } else this.ui.el.chip.classList.add('hidden')
    this.frame++
    if (this.frame % 2 === 0) {
      const cars = [this.missions.targetCar, ...this.missions.chaseCars]
      this.ui.updateMinimap(this.player, this.playerCar, this.population, this.missions.waypoint, cars)
    }
  }

  updatePlayer(dt) {
    if (this.player.inCar && this.playerCar) {
      this.playerCar.update(dt, this.input, this.input.tiltEnabled, this.input.tilt)
      this.player.pos.copy(this.playerCar.pos)
      this.player.heading = this.playerCar.heading
      this.player.group.position.copy(this.playerCar.pos)
      this.player.health = Math.max(0, this.player.health - 0)
    } else {
      this.player.update(dt, this.input, this.camYaw, this.input.aiming, this.sessionTime)
    }
  }

  updateCamera(dt) {
    const t = this.sessionTime
    if (this.state === 'title') {
      const a = t * .045
      const desired = new THREE.Vector3(Math.sin(a) * 218, 88 + Math.sin(t * .12) * 7, Math.cos(a) * 218)
      this.camera.position.lerp(desired, 1 - Math.exp(-1.5 * dt))
      const look = new THREE.Vector3(0, 5, 0)
      this.lastLookAt.lerp(look, 1 - Math.exp(-2 * dt))
      this.camera.lookAt(this.lastLookAt)
      this.camera.fov = damp(this.camera.fov, 46, 2, dt)
      this.camera.updateProjectionMatrix()
      return
    }
    let desired, look, fov
    if (this.player.inCar && this.playerCar) {
      const car = this.playerCar
      const lookInput = this.input.consumeLook()
      if (lookInput.x || lookInput.y) { this.carOrbit -= lookInput.x * .004; this.carOrbitPitch = clamp(this.carOrbitPitch + lookInput.y * .0025, -.15, .45); this.lookIdle = 0 }
      this.lookIdle += dt
      if (this.lookIdle > 1.6) { this.carOrbit = damp(this.carOrbit, 0, 2.2, dt); this.carOrbitPitch = damp(this.carOrbitPitch, 0, 2.2, dt) }
      const yaw = car.heading + Math.PI + this.carOrbit
      const pitch = clamp(.24 + this.carOrbitPitch, -.05, .6)
      const speed = Math.abs(car.speed)
      const dist = 9.3 + speed * .08
      const horiz = Math.cos(pitch) * dist
      const y = 1.2 + Math.sin(pitch) * dist
      const forward = new THREE.Vector3(Math.sin(car.heading), 0, Math.cos(car.heading))
      desired = new THREE.Vector3(car.pos.x + Math.sin(yaw) * horiz, y, car.pos.z + Math.cos(yaw) * horiz)
      look = new THREE.Vector3(car.pos.x + forward.x * 4.5, 1.3, car.pos.z + forward.z * 4.5)
      fov = 58 + speed * .28
    } else {
      const lookInput = this.input.consumeLook()
      if (lookInput.x || lookInput.y) {
        this.camYaw -= lookInput.x * .0046
        this.camPitch = clamp(this.camPitch + lookInput.y * .0035, -.12, .72)
      }
      const aim = this.input.aiming
      const yaw = this.camYaw
      const pitch = aim ? .12 : this.camPitch
      const dist = aim ? 3.1 : 5.7
      const horiz = Math.cos(pitch) * dist
      const y = 1.35 + Math.sin(pitch) * dist
      const forward = new THREE.Vector3(-Math.sin(yaw), 0, -Math.cos(yaw))
      const right = new THREE.Vector3(-forward.z, 0, forward.x)
      const shoulder = aim ? .55 : 0
      desired = new THREE.Vector3(
        this.player.pos.x + Math.sin(yaw) * horiz + right.x * shoulder,
        y,
        this.player.pos.z + Math.cos(yaw) * horiz + right.z * shoulder
      )
      look = new THREE.Vector3(
        this.player.pos.x + forward.x * (aim ? 10 : 2.4) + right.x * shoulder,
        1.5,
        this.player.pos.z + forward.z * (aim ? 10 : 2.4) + right.z * shoulder
      )
      fov = aim ? 42 : 55
    }
    // camera collision with buildings
    const target = look.clone()
    for (let s = 1; s >= .25; s -= .08) {
      const px = target.x + (desired.x - target.x) * s
      const pz = target.z + (desired.z - target.z) * s
      const py = target.y + (desired.y - target.y) * s
      let inside = false
      for (const c of this.world.colliders) {
        if (px > c.minX && px < c.maxX && pz > c.minZ && pz < c.maxZ && py < c.h + .3) { inside = true; break }
      }
      if (!inside) { desired.set(px, py, pz); break }
    }
    const lerp = this.cameraSnap ? 1 : 1 - Math.exp(-9 * dt)
    this.camera.position.lerp(desired, lerp)
    this.lastLookAt.lerp(look, this.cameraSnap ? 1 : 1 - Math.exp(-12 * dt))
    this.cameraSnap = false
    this.camera.fov = damp(this.camera.fov, fov, 6, dt)
    this.camera.updateProjectionMatrix()
    // shake
    this.shake = Math.max(0, this.shake - dt * 1.8)
    const sh = this.shake * .4
    this.camera.position.x += rand(-sh, sh)
    this.camera.position.y += rand(-sh, sh) * .5
    this.camera.lookAt(this.lastLookAt)
    if (!this.player.inCar) {
      const cd = Math.hypot(this.camera.position.x - this.player.pos.x, this.camera.position.z - this.player.pos.z)
      this.player.group.visible = cd > 2.4
    }
  }

  resize() {
    this.camera.aspect = innerWidth / innerHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(innerWidth, innerHeight)
    this.composer.setSize(innerWidth, innerHeight)
    this.composer.setPixelRatio(this.renderer.getPixelRatio())
  }

  loop() {
    requestAnimationFrame(() => this.loop())
    const dt = Math.min(.05, this.clock.getDelta())
    const t = this.clock.elapsedTime
    if (this.grade) this.grade.uniforms.time.value = t
    if (this.state === 'title') {
      this.world.update(dt, t)
      this.population.update(dt, this.player.pos, null, false, t)
      this.updateCamera(dt)
      this.render(dt)
      return
    }
    if (this.state === 'fail') {
      this.world.update(dt, t)
      this.updateCamera(dt)
      this.render(dt)
      return
    }
    const overlay = !this.ui.el.pause.classList.contains('hidden') || !this.ui.el.settings.classList.contains('hidden') ||
      !this.ui.el.phone.classList.contains('hidden') || !this.ui.el.ending.classList.contains('hidden') ||
      !this.ui.el.missionCard.classList.contains('hidden')
    this.input.enabled = !overlay && this.state === 'playing'
    if (!this.paused) {
      this.input.update()
      this.updatePlayer(dt)
      this.update(dt)
      this.updateCamera(dt)
      if (this.state === 'playing') this.ui.setCinematic(false)
    } else {
      this.world.update(dt, t)
      this.updateCamera(dt)
    }
    this.render(dt)
  }

  render(dt) {
    if (this.quality) this.composer.render(dt)
    else this.renderer.render(this.scene, this.camera)
  }
}

const game = new Game()
window.__larossa = game
game.init().catch(err => {
  console.error(err)
  const s = document.getElementById('loadStatus')
  if (s) s.textContent = 'The city failed to load: ' + err.message
})
