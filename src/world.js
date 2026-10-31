import * as THREE from 'three'
import {
  CITY,
  DISTRICTS,
  RACKETS,
  SAFEHOUSE,
  NEON_WORDS,
} from './data.js'

const TAU = Math.PI * 2

function mulberry32(seed) {
  let a = seed >>> 0
  return function random() {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v))
}

function canvasTexture(canvas, repeat = false) {
  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 4
  if (repeat) {
    tex.wrapS = THREE.RepeatWrapping
    tex.wrapT = THREE.RepeatWrapping
  }
  return tex
}

function makeStorefrontTexture(tint) {
  const c = document.createElement('canvas')
  c.width = 256
  c.height = 128
  const ctx = c.getContext('2d')
  const base = new THREE.Color(tint)
  const warm = base.clone().multiplyScalar(0.5).getStyle()
  const deep = base.clone().multiplyScalar(0.16).getStyle()

  ctx.fillStyle = '#08070a'
  ctx.fillRect(0, 0, 256, 128)

  const glow = ctx.createLinearGradient(0, 8, 0, 120)
  glow.addColorStop(0, warm)
  glow.addColorStop(0.55, base.clone().multiplyScalar(0.3).getStyle())
  glow.addColorStop(1, deep)
  ctx.fillStyle = glow
  ctx.fillRect(5, 5, 246, 118)

  // Back-wall paneling and a long counter.
  ctx.fillStyle = 'rgba(8,6,7,.35)'
  for (let x = 18; x < 246; x += 34) ctx.fillRect(x, 6, 2, 78)
  ctx.fillStyle = 'rgba(6,5,6,.72)'
  ctx.fillRect(5, 84, 246, 39)
  ctx.fillStyle = 'rgba(255,226,180,.12)'
  ctx.fillRect(5, 82, 246, 2)

  // Counter stools.
  for (let x = 26; x < 240; x += 38) {
    ctx.fillStyle = 'rgba(10,8,8,.8)'
    ctx.fillRect(x, 96, 4, 26)
    ctx.beginPath()
    ctx.arc(x + 2, 94, 7, 0, Math.PI * 2)
    ctx.fill()
  }

  // Pendant lamps and a couple of patron silhouettes.
  for (const lx of [58, 150, 210]) {
    ctx.fillStyle = 'rgba(255,222,168,.85)'
    ctx.beginPath()
    ctx.arc(lx, 24, 4, 0, Math.PI * 2)
    ctx.fill()
    ctx.fillStyle = 'rgba(255,196,120,.12)'
    ctx.beginPath()
    ctx.arc(lx, 24, 14, 0, Math.PI * 2)
    ctx.fill()
    ctx.fillStyle = 'rgba(6,5,6,.8)'
    ctx.fillRect(lx - 0.7, 4, 1.4, 17)
  }
  for (const [px, s] of [[96, 0.9], [182, 0.78]]) {
    ctx.fillStyle = 'rgba(6,5,6,.82)'
    ctx.beginPath()
    ctx.arc(px, 62, 8 * s, 0, Math.PI * 2)
    ctx.fill()
    ctx.fillRect(px - 8 * s, 70, 16 * s, 22)
  }

  // Window frame and mullions.
  ctx.fillStyle = '#050508'
  ctx.fillRect(0, 0, 256, 5)
  ctx.fillRect(0, 123, 256, 5)
  ctx.fillRect(0, 0, 5, 128)
  ctx.fillRect(251, 0, 5, 128)
  ctx.fillRect(125, 0, 6, 128)
  ctx.fillRect(62, 0, 2, 128)
  ctx.fillRect(189, 0, 2, 128)

  return canvasTexture(c)
}

function makeFacade(seed, base, lit, cool = false) {
  const rng = mulberry32(seed)
  const W = 256
  const H = 512
  const c = document.createElement('canvas')
  c.width = W
  c.height = H
  const ctx = c.getContext('2d')

  const e = document.createElement('canvas')
  e.width = W
  e.height = H
  const ex = e.getContext('2d')
  ex.fillStyle = '#000000'
  ex.fillRect(0, 0, W, H)

  // Masonry base with a cool sky reflection up top and grime near the street.
  ctx.fillStyle = base
  ctx.fillRect(0, 0, W, H)
  const grad = ctx.createLinearGradient(0, 0, 0, H)
  grad.addColorStop(0, 'rgba(112,136,178,.09)')
  grad.addColorStop(0.42, 'rgba(0,0,0,0)')
  grad.addColorStop(0.78, 'rgba(0,0,0,.16)')
  grad.addColorStop(1, 'rgba(0,0,0,.36)')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, W, H)

  const cols = 10
  const rows = 26
  const marginX = 9
  const marginY = 7
  const cw = (W - marginX * 2) / cols
  const ch = (H - marginY * 2) / rows

  // Pilasters and cornice bands give the facades some architectural rhythm.
  ctx.fillStyle = 'rgba(0,0,0,.2)'
  ctx.fillRect(0, 0, W, 3)
  ctx.fillRect(0, H - 4, W, 4)
  for (let col = 0; col <= cols; col += 2) {
    const px = marginX + col * cw - 2
    ctx.fillStyle = 'rgba(255,255,255,.025)'
    ctx.fillRect(px, 0, 1.5, H)
    ctx.fillStyle = 'rgba(0,0,0,.18)'
    ctx.fillRect(px + 1.5, 0, 1.5, H)
  }

  for (let row = 0; row < rows; row++) {
    const floorY = marginY + row * ch
    // Floor slab shadow.
    ctx.fillStyle = 'rgba(0,0,0,.34)'
    ctx.fillRect(0, floorY + ch - 2, W, 2)
    ctx.fillStyle = 'rgba(255,255,255,.035)'
    ctx.fillRect(0, floorY + ch - 3, W, 1)

    const streetLevel = row >= rows - 4
    for (let col = 0; col < cols; col++) {
      const wx = marginX + col * cw + cw * 0.15
      const wy = floorY + ch * 0.2
      const ww = cw * 0.7
      const wh = ch * 0.56

      // Recessed frame.
      ctx.fillStyle = 'rgba(4,7,12,.88)'
      ctx.fillRect(wx - 1.5, wy - 1.5, ww + 3, wh + 3)
      const glass = ctx.createLinearGradient(0, wy, 0, wy + wh)
      glass.addColorStop(0, cool ? 'rgba(52,76,102,.9)' : 'rgba(38,46,60,.92)')
      glass.addColorStop(0.55, 'rgba(16,22,32,.94)')
      glass.addColorStop(1, 'rgba(6,10,16,.96)')
      ctx.fillStyle = glass
      ctx.fillRect(wx, wy, ww, wh)

      const litChance = streetLevel ? 0.38 : 0.14
      if (rng() < litChance) {
        const warm = rng() > 0.24
        const tone = warm ? lit : cool ? '#7fb0d4' : '#93a9bd'
        ex.globalAlpha = 0.28 + rng() * 0.42
        ex.fillStyle = tone
        ex.fillRect(wx, wy, ww, wh)
        ex.globalAlpha = 1
        // Curtains / blinds break up the lit rectangles.
        ex.fillStyle = 'rgba(0,0,0,.34)'
        const blind = rng()
        if (blind > 0.62) {
          ex.fillRect(wx, wy, ww, wh * (0.18 + rng() * 0.35))
        } else if (blind > 0.3) {
          ex.fillRect(wx + ww * (0.5 + rng() * 0.24), wy, ww * 0.12, wh)
        }
        // Warm the glass in the albedo too so daylight/street light reads.
        ctx.fillStyle = warm ? 'rgba(126,88,52,.4)' : 'rgba(56,78,98,.42)'
        ctx.fillRect(wx, wy, ww, wh)
      }

      // Mullion and sill.
      ctx.fillStyle = 'rgba(2,4,8,.62)'
      ctx.fillRect(wx + ww * 0.5 - 0.6, wy, 1.2, wh)
      ctx.fillStyle = 'rgba(255,255,255,.055)'
      ctx.fillRect(wx - 2, wy + wh + 1, ww + 4, 1)
    }
  }

  // Fire escapes / grime streaks.
  for (let i = 0; i < 22; i++) {
    ctx.fillStyle = `rgba(0,0,0,${0.025 + rng() * 0.075})`
    ctx.fillRect(rng() * W, 0, 1 + rng() * 2.5, H)
  }
  for (let i = 0; i < 5; i++) {
    const x = rng() * W
    ctx.fillStyle = 'rgba(10,12,16,.22)'
    ctx.fillRect(x, H * (0.55 + rng() * 0.3), 2 + rng() * 4, H * 0.4)
  }

  const map = canvasTexture(c, true)
  const emissiveMap = canvasTexture(e, true)
  return { map, emissiveMap }
}

function tileBoxUVs(geo, w, h, d, tileW = 13, tileH = 42) {
  const uv = geo.attributes.uv
  const uX = Math.max(0.55, w / tileW)
  const uZ = Math.max(0.55, d / tileW)
  const vY = Math.max(0.55, h / tileH)
  const faces = [
    [uZ, vY],
    [uZ, vY],
    [uX, uZ],
    [uX, uZ],
    [uX, vY],
    [uX, vY],
  ]
  for (let f = 0; f < 6; f++) {
    const [su, sv] = faces[f]
    for (let i = 0; i < 4; i++) {
      const idx = f * 4 + i
      uv.setXY(idx, uv.getX(idx) * su, uv.getY(idx) * sv)
    }
  }
  uv.needsUpdate = true
  return geo
}

function makeSidewalkTexture() {
  const c = document.createElement('canvas')
  c.width = 128
  c.height = 128
  const ctx = c.getContext('2d')
  ctx.fillStyle = '#292a2e'
  ctx.fillRect(0, 0, 128, 128)
  ctx.strokeStyle = 'rgba(0,0,0,.35)'
  ctx.lineWidth = 2
  for (let i = 0; i <= 128; i += 32) {
    ctx.beginPath()
    ctx.moveTo(i, 0)
    ctx.lineTo(i, 128)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(0, i)
    ctx.lineTo(128, i)
    ctx.stroke()
  }
  for (let i = 0; i < 80; i++) {
    ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.022})`
    ctx.fillRect(Math.random() * 128, Math.random() * 128, 2, 2)
  }
  return canvasTexture(c, true)
}

function makeGlowTexture() {
  const c = document.createElement('canvas')
  c.width = 128
  c.height = 128
  const ctx = c.getContext('2d')
  const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64)
  grad.addColorStop(0, 'rgba(255,255,255,1)')
  grad.addColorStop(0.16, 'rgba(255,255,255,.88)')
  grad.addColorStop(0.42, 'rgba(255,255,255,.22)')
  grad.addColorStop(1, 'rgba(255,255,255,0)')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, 128, 128)
  return canvasTexture(c)
}

function makeSignTexture(text, sub = '', color = '#ffffff') {
  const c = document.createElement('canvas')
  c.width = 512
  c.height = 160
  const ctx = c.getContext('2d')
  ctx.clearRect(0, 0, 512, 160)
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.shadowColor = color
  ctx.shadowBlur = 26
  ctx.fillStyle = color
  ctx.font = '700 56px "Arial Narrow", Arial, sans-serif'
  ctx.fillText(text, 256, sub ? 66 : 80)
  if (sub) {
    ctx.shadowBlur = 12
    ctx.globalAlpha = 0.7
    ctx.font = '400 20px Arial, sans-serif'
    ctx.fillText(sub, 256, 120)
  }
  return canvasTexture(c)
}

function makeBillboardTexture(text, color) {
  const c = document.createElement('canvas')
  c.width = 512
  c.height = 256
  const ctx = c.getContext('2d')
  ctx.fillStyle = '#07080c'
  ctx.fillRect(0, 0, 512, 256)
  ctx.strokeStyle = color
  ctx.globalAlpha = 0.55
  ctx.lineWidth = 5
  ctx.strokeRect(10, 10, 492, 236)
  ctx.globalAlpha = 1
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.shadowColor = color
  ctx.shadowBlur = 24
  ctx.fillStyle = color
  ctx.font = '700 78px "Arial Narrow", Arial, sans-serif'
  ctx.fillText(text, 256, 120)
  ctx.shadowBlur = 8
  ctx.font = '400 22px Arial, sans-serif'
  ctx.fillStyle = 'rgba(255,255,255,.6)'
  ctx.fillText('THE CITY NEVER SLEEPS', 256, 194)
  return canvasTexture(c)
}

export class World {
  constructor(scene, renderer) {
    this.scene = scene
    this.renderer = renderer
    this.rng = mulberry32(1987)
    this.colliders = []
    this.rackets = []
    this.racketById = new Map()
    this.vehicles = []
    this.peds = []
    this.ambientEffects = []
    this.panic = 0
    this.time = 0
    this.quality = true

    this.glowTexture = makeGlowTexture()
    this.sidewalkTexture = makeSidewalkTexture()
    this.facadeTextures = []
    this.facadeMaterials = []
    this.distantMaterials = []

    this.buildMaterials()
    this.buildEnvironment()
    this.buildSky()
    this.buildGround()
    this.buildCity()
    this.buildSafehouse()
    this.buildRackets()
    this.buildWaterfront()
    this.buildTraffic()
    this.buildPedestrians()
    this.buildRain()
    this.buildDistantSkyline()
  }

  buildMaterials() {
    const palettes = [
      ['#20222a', '#ffc27c'],
      ['#25201f', '#ffd39a'],
      ['#181e29', '#8ec6e9'],
      ['#282528', '#ffb86d'],
      ['#1b2022', '#f4c883'],
      ['#24202a', '#9ebce7'],
      ['#2a231d', '#ffce8e'],
      ['#171a21', '#a7c5df'],
    ]
    palettes.forEach(([base, lit], i) => {
      const { map, emissiveMap } = makeFacade(1987 + i * 53, base, lit, i === 2 || i === 5 || i === 7)
      const mat = new THREE.MeshStandardMaterial({
        map,
        emissiveMap,
        emissive: 0xffffff,
        emissiveIntensity: 0.62,
        roughness: 0.76,
        metalness: 0.18,
        envMapIntensity: 0.4,
      })
      this.facadeTextures.push(map)
      this.facadeMaterials.push(mat)
      const distant = new THREE.MeshStandardMaterial({
        map,
        emissiveMap,
        emissive: 0xffffff,
        emissiveIntensity: 0.2,
        roughness: 0.92,
        metalness: 0.08,
        color: 0x4a505c,
      })
      this.distantMaterials.push(distant)
    })
    this.roofMat = new THREE.MeshStandardMaterial({
      color: 0x14151a,
      roughness: 0.94,
      metalness: 0.12,
    })
    this.roofMatDistant = new THREE.MeshStandardMaterial({
      color: 0x191b22,
      roughness: 0.96,
      metalness: 0.05,
    })

    this.asphaltMat = new THREE.MeshStandardMaterial({
      color: 0x0d0f14,
      roughness: 0.4,
      metalness: 0.55,
      envMapIntensity: 0.75,
    })
    this.sidewalkMat = new THREE.MeshStandardMaterial({
      map: this.sidewalkTexture,
      color: 0x77736b,
      roughness: 0.88,
      metalness: 0.05,
      envMapIntensity: 0.22,
    })
    this.curbMat = new THREE.MeshStandardMaterial({ color: 0x3d3d40, roughness: 0.82 })
    this.darkMetal = new THREE.MeshStandardMaterial({ color: 0x181b20, roughness: 0.46, metalness: 0.8 })
    this.windowDark = new THREE.MeshStandardMaterial({ color: 0x080d15, roughness: 0.16, metalness: 0.85, envMapIntensity: 1.2 })
    this.lampMat = new THREE.MeshStandardMaterial({ color: 0xffc98e, emissive: 0xffa852, emissiveIntensity: 2.4, toneMapped: false })
    this.whiteLine = new THREE.MeshBasicMaterial({ color: 0xa9a89c, transparent: true, opacity: 0.55 })
    this.yellowLine = new THREE.MeshBasicMaterial({ color: 0xb89349, transparent: true, opacity: 0.5 })
    this.grassMat = new THREE.MeshStandardMaterial({ color: 0x16271d, roughness: 0.95 })
    this.waterMat = new THREE.MeshStandardMaterial({
      color: 0x06111b,
      roughness: 0.15,
      metalness: 0.92,
      envMapIntensity: 1.3,
    })
  }

  buildEnvironment() {
    const c = document.createElement('canvas')
    c.width = 512
    c.height = 256
    const ctx = c.getContext('2d')
    const grad = ctx.createLinearGradient(0, 0, 0, 256)
    grad.addColorStop(0, '#050714')
    grad.addColorStop(0.38, '#14172c')
    grad.addColorStop(0.53, '#633b4b')
    grad.addColorStop(0.61, '#d2754e')
    grad.addColorStop(0.7, '#2b1d25')
    grad.addColorStop(1, '#05070b')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, 512, 256)
    const sun = ctx.createRadialGradient(360, 152, 0, 360, 152, 90)
    sun.addColorStop(0, 'rgba(255,197,128,.9)')
    sun.addColorStop(0.3, 'rgba(255,135,80,.4)')
    sun.addColorStop(1, 'rgba(255,90,60,0)')
    ctx.fillStyle = sun
    ctx.fillRect(0, 0, 512, 256)
    const tex = canvasTexture(c)
    tex.mapping = THREE.EquirectangularReflectionMapping
    const pmrem = new THREE.PMREMGenerator(this.renderer)
    this.envMap = pmrem.fromEquirectangular(tex).texture
    this.scene.environment = this.envMap
    this.scene.environmentIntensity = 0.5
    pmrem.dispose()

    this.scene.fog = new THREE.FogExp2(0x0a0e19, 0.0021)

    const hemi = new THREE.HemisphereLight(0x93a7d6, 0x2a211c, 0.95)
    this.scene.add(hemi)
    const ambient = new THREE.AmbientLight(0x46536e, 0.55)
    this.scene.add(ambient)

    const key = new THREE.DirectionalLight(0xffb27a, 1.5)
    key.position.set(-180, 190, -240)
    this.scene.add(key)

    const fill = new THREE.DirectionalLight(0x6f86ff, 1.15)
    fill.position.set(220, 90, 160)
    this.scene.add(fill)

    const neonA = new THREE.PointLight(0xff4e91, 55, 80, 2)
    neonA.position.set(-175, 12, -95)
    this.scene.add(neonA)
    const neonB = new THREE.PointLight(0x46d9df, 48, 70, 2)
    neonB.position.set(190, 10, -90)
    this.scene.add(neonB)
    const neonC = new THREE.PointLight(0xffb15e, 30, 55, 2)
    neonC.position.set(0, 9, -105)
    this.scene.add(neonC)
    const neonD = new THREE.PointLight(0xff8b58, 36, 65, 2)
    neonD.position.set(-52, 8, 200)
    this.scene.add(neonD)
    const neonE = new THREE.PointLight(0x9b8cff, 40, 70, 2)
    neonE.position.set(-48, 9, -200)
    this.scene.add(neonE)
    this.neonLights = [neonA, neonB, neonC, neonD, neonE]
  }

  buildSky() {
    const uniforms = {
      topColor: { value: new THREE.Color(0x050713) },
      midColor: { value: new THREE.Color(0x2a1f39) },
      horizonColor: { value: new THREE.Color(0xc46f50) },
      lowColor: { value: new THREE.Color(0x120f18) },
      sunDir: { value: new THREE.Vector3(-0.52, 0.11, -0.84).normalize() },
    }
    const mat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      uniforms,
      vertexShader: `
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vDir;
        uniform vec3 topColor;
        uniform vec3 midColor;
        uniform vec3 horizonColor;
        uniform vec3 lowColor;
        uniform vec3 sunDir;

        float hash(vec3 p) {
          p = fract(p * 0.3183099 + 0.1);
          p *= 17.0;
          return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
        }

        void main() {
          vec3 dir = normalize(vDir);
          float h = dir.y;
          vec3 col = mix(lowColor, horizonColor, smoothstep(-0.12, 0.06, h));
          col = mix(col, midColor, smoothstep(0.02, 0.34, h));
          col = mix(col, topColor, smoothstep(0.28, 0.92, h));

          float sun = max(dot(dir, normalize(sunDir)), 0.0);
          col += vec3(1.0, 0.47, 0.22) * pow(sun, 260.0) * 1.6;
          col += vec3(1.0, 0.30, 0.12) * pow(sun, 9.0) * 0.16;

          float stars = step(0.99955, hash(floor(dir * 760.0)));
          stars *= smoothstep(0.1, 0.38, h);
          col += vec3(0.8, 0.85, 1.0) * stars * 0.85;

          float haze = smoothstep(0.0, 0.12, h) * smoothstep(0.28, 0.05, h);
          col += vec3(0.18, 0.09, 0.07) * haze * 0.4;

          gl_FragColor = vec4(col, 1.0);
        }
      `,
    })
    const sky = new THREE.Mesh(new THREE.SphereGeometry(900, 40, 24), mat)
    sky.frustumCulled = false
    this.scene.add(sky)
    this.sky = sky
  }

  buildGround() {
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(1200, 1200), this.asphaltMat)
    ground.rotation.x = -Math.PI / 2
    ground.position.y = -0.02
    this.scene.add(ground)

    this.sidewalkTexture.repeat.set(3, 3)

    const roadCenters = [-250, -150, -50, 50, 150, 250]
    const dashGeo = new THREE.BoxGeometry(0.16, 0.018, 3.1)
    const dashCount = roadCenters.length * 2 * 65
    const dashes = new THREE.InstancedMesh(dashGeo, this.yellowLine, dashCount)
    const dummy = new THREE.Object3D()
    let di = 0
    for (const road of roadCenters) {
      for (let i = -31; i <= 31; i++) {
        dummy.position.set(road, 0.025, i * 9.4)
        dummy.rotation.set(0, 0, 0)
        dummy.updateMatrix()
        dashes.setMatrixAt(di++, dummy.matrix)

        dummy.position.set(i * 9.4, 0.025, road)
        dummy.rotation.set(0, Math.PI / 2, 0)
        dummy.updateMatrix()
        dashes.setMatrixAt(di++, dummy.matrix)
      }
    }
    dashes.count = di
    this.scene.add(dashes)

    const crossGeo = new THREE.BoxGeometry(0.34, 0.02, 2.7)
    const cross = new THREE.InstancedMesh(crossGeo, this.whiteLine, 36 * 8)
    let ci = 0
    for (const x of roadCenters) {
      for (const z of roadCenters) {
        if (Math.abs(x) > 250 || Math.abs(z) > 250) continue
        for (let k = 0; k < 4; k++) {
          dummy.position.set(x - 7.5 + k * 2.2, 0.03, z + 11.6)
          dummy.rotation.set(0, Math.PI / 2, 0)
          dummy.updateMatrix()
          cross.setMatrixAt(ci++, dummy.matrix)
          dummy.position.set(x + 7.5 - k * 2.2, 0.03, z - 11.6)
          dummy.updateMatrix()
          cross.setMatrixAt(ci++, dummy.matrix)
        }
      }
    }
    cross.count = ci
    this.scene.add(cross)

    const blockPositions = []
    for (let ix = -2; ix <= 2; ix++) {
      for (let iz = -2; iz <= 2; iz++) {
        blockPositions.push([ix * CITY.blockStep, iz * CITY.blockStep])
      }
    }
    this.blockPositions = blockPositions

    for (const [x, z] of blockPositions) {
      const plate = new THREE.Mesh(new THREE.BoxGeometry(80, 0.34, 80), this.sidewalkMat)
      plate.position.set(x, 0.17, z)
      this.scene.add(plate)
      const curb = new THREE.Mesh(new THREE.BoxGeometry(81.4, 0.19, 81.4), this.curbMat)
      curb.position.set(x, 0.07, z)
      this.scene.add(curb)
    }

    // Wet patches on the asphalt.
    const puddleMat = new THREE.MeshStandardMaterial({
      color: 0x0b1520,
      roughness: 0.08,
      metalness: 0.95,
      transparent: true,
      opacity: 0.52,
      envMapIntensity: 1.6,
      depthWrite: false,
    })
    for (let i = 0; i < 34; i++) {
      const road = roadCenters[Math.floor(this.rng() * roadCenters.length)]
      const horizontal = this.rng() > 0.5
      const puddle = new THREE.Mesh(new THREE.CircleGeometry(1, 12), puddleMat)
      puddle.rotation.x = -Math.PI / 2
      puddle.scale.set(1.5 + this.rng() * 5, 1 + this.rng() * 2.2, 1)
      puddle.position.set(
        horizontal ? -280 + this.rng() * 560 : road + (this.rng() - 0.5) * 13,
        0.04,
        horizontal ? road + (this.rng() - 0.5) * 13 : -280 + this.rng() * 560,
      )
      this.scene.add(puddle)
    }

    this.addStreetLamps()
  }

  addStreetLamps() {
    const positions = []
    for (const [x, z] of this.blockPositions) {
      positions.push([x - 35, z - 35], [x + 35, z - 35], [x - 35, z + 35], [x + 35, z + 35])
    }
    const poleGeo = new THREE.CylinderGeometry(0.055, 0.085, 5.3, 5)
    const orbGeo = new THREE.SphereGeometry(0.16, 7, 7)
    const poles = new THREE.InstancedMesh(poleGeo, this.darkMetal, positions.length)
    const orbs = new THREE.InstancedMesh(orbGeo, this.lampMat, positions.length)
    const dummy = new THREE.Object3D()
    const glowPositions = []
    positions.forEach(([x, z], i) => {
      dummy.position.set(x, 2.65, z)
      dummy.rotation.set(0, 0, 0)
      dummy.updateMatrix()
      poles.setMatrixAt(i, dummy.matrix)
      dummy.position.set(x, 5.32, z)
      dummy.updateMatrix()
      orbs.setMatrixAt(i, dummy.matrix)
      glowPositions.push(x, 5.32, z)
    })
    this.scene.add(poles)
    this.scene.add(orbs)

    const glowGeo = new THREE.BufferGeometry()
    glowGeo.setAttribute('position', new THREE.Float32BufferAttribute(glowPositions, 3))
    const glowMat = new THREE.PointsMaterial({
      map: this.glowTexture,
      color: 0xffb86d,
      size: 4.8,
      transparent: true,
      opacity: 0.44,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    })
    this.scene.add(new THREE.Points(glowGeo, glowMat))
  }

  isReserved(x, z) {
    for (const r of RACKETS) {
      const dx = x - r.shop[0]
      const dz = z - r.shop[1]
      if (Math.abs(dx) < 12 && Math.abs(dz) < 12) return true
    }
    const dx = x - SAFEHOUSE.shop[0]
    const dz = z - SAFEHOUSE.shop[1]
    return Math.abs(dx) < 13 && Math.abs(dz) < 13
  }

  buildCity() {
    const parkBlocks = new Set(['100,100', '-200,-200'])
    const specialBlocks = new Set(['0,0', '-100,-100'])
    for (const [bx, bz] of this.blockPositions) {
      const key = `${bx},${bz}`
      if (specialBlocks.has(key)) continue
      if (parkBlocks.has(key)) {
        this.buildPark(bx, bz)
        continue
      }
      this.buildBlock(bx, bz)
    }

    this.buildCrownTower()
    this.buildParkingLot(-100, 100)
    this.addRooftopBillboards()
  }

  buildBlock(bx, bz) {
    const rng = this.rng
    const centerDist = Math.hypot(bx, bz)
    const downtown = clamp(1 - centerDist / 280, 0, 1)
    const near = Math.abs(bx) < 160 && Math.abs(bz) < 160
    const layout = near
      ? rng() > 0.35 ? [2, 2] : [2, 3]
      : rng() > 0.45 ? [3, 3] : [2, 2]
    const [cols, rows] = layout
    const cellW = 68 / cols
    const cellD = 68 / rows

    for (let cx = 0; cx < cols; cx++) {
      for (let cz = 0; cz < rows; cz++) {
        if (rng() < 0.06) continue
        const px = bx - 34 + cellW * (cx + 0.5) + (rng() - 0.5) * 3
        const pz = bz - 34 + cellD * (cz + 0.5) + (rng() - 0.5) * 3
        if (this.isReserved(px, pz)) continue

        const w = cellW - 4.5 - rng() * 5
        const d = cellD - 4.5 - rng() * 5
        if (w < 10 || d < 10) continue

        let h = 11 + rng() * 18 + downtown * (24 + rng() * 40)
        if (rng() > 0.88) h += 12 + rng() * 22
        if (rng() > 0.96) h += 28
        const mat = this.facadeMaterials[Math.floor(rng() * this.facadeMaterials.length)]
        this.addBuilding(px, pz, w, d, h, mat)
      }
    }
  }

  addBuilding(x, z, w, d, h, mat, options = {}) {
    const group = new THREE.Group()
    group.position.set(x, 0, z)

    const facadeSides = [mat, mat, this.roofMat, this.roofMat, mat, mat]
    const boxGeo = tileBoxUVs(new THREE.BoxGeometry(1, 1, 1), w, h, d)
    const box = new THREE.Mesh(boxGeo, facadeSides)
    box.scale.set(w, h, d)
    box.position.y = h / 2 + 0.32
    group.add(box)

    const parapetMat = this.curbMat
    const parapet = new THREE.Mesh(new THREE.BoxGeometry(w + 0.55, 0.65, d + 0.55), parapetMat)
    parapet.position.y = h + 0.62
    group.add(parapet)

    if (h > 42 && this.rng() > 0.25) {
      const sw = w * (0.58 + this.rng() * 0.18)
      const sd = d * (0.58 + this.rng() * 0.18)
      const sh = h * (0.12 + this.rng() * 0.2)
      const setbackGeo = tileBoxUVs(new THREE.BoxGeometry(1, 1, 1), sw, sh, sd)
      const setback = new THREE.Mesh(setbackGeo, [mat, mat, this.roofMat, this.roofMat, mat, mat])
      setback.scale.set(sw, sh, sd)
      setback.position.y = h + sh / 2 + 0.4
      group.add(setback)
      if (h > 72 && this.rng() > 0.3) {
        const tw = sw * 0.55
        const th = sh * 0.55
        const td = sd * 0.55
        const topGeo = tileBoxUVs(new THREE.BoxGeometry(1, 1, 1), tw, th, td)
        const top = new THREE.Mesh(topGeo, [mat, mat, this.roofMat, this.roofMat, mat, mat])
        top.scale.set(tw, th, td)
        top.position.y = h + sh + sh * 0.275 + 0.4
        group.add(top)
      }
    }

    const roofY = h + 1
    if (this.rng() > 0.55) {
      const tank = new THREE.Mesh(
        new THREE.CylinderGeometry(1.6, 1.6, 3.4, 8),
        new THREE.MeshStandardMaterial({ color: 0x3a3028, roughness: 0.9 }),
      )
      tank.position.set((this.rng() - 0.5) * w * 0.45, roofY + 1.7, (this.rng() - 0.5) * d * 0.45)
      group.add(tank)
    }
    if (this.rng() > 0.68) {
      const antenna = new THREE.Mesh(
        new THREE.CylinderGeometry(0.06, 0.06, 7 + this.rng() * 9, 4),
        this.darkMetal,
      )
      antenna.position.set((this.rng() - 0.5) * w * 0.4, roofY + 5, (this.rng() - 0.5) * d * 0.4)
      group.add(antenna)
      const light = new THREE.Mesh(
        new THREE.SphereGeometry(0.16, 6, 6),
        new THREE.MeshBasicMaterial({ color: 0xff5c4f, toneMapped: false }),
      )
      light.position.copy(antenna.position)
      light.position.y += 5
      group.add(light)
    }
    if (this.rng() > 0.72) {
      const ac = new THREE.Mesh(new THREE.BoxGeometry(2.2, 1, 2.2), this.darkMetal)
      ac.position.set((this.rng() - 0.5) * w * 0.5, roofY + 0.5, (this.rng() - 0.5) * d * 0.5)
      group.add(ac)
    }

    if (h > 32 && this.rng() > 0.7) {
      const words = NEON_WORDS
      const colors = ['#ff5d9e', '#55d6d0', '#ffcb5e', '#b18cff', '#ff8b58']
      const word = words[Math.floor(this.rng() * words.length)]
      const color = colors[Math.floor(this.rng() * colors.length)]
      const signW = Math.min(w * 0.72, 13)
      const tex = makeBillboardTexture(word, color)
      const board = new THREE.Mesh(
        new THREE.PlaneGeometry(signW, signW * 0.48),
        new THREE.MeshBasicMaterial({ map: tex, transparent: true, toneMapped: false, side: THREE.DoubleSide }),
      )
      board.position.set(0, h + 3.2, d / 2 + 0.15)
      group.add(board)
      const frame = new THREE.Mesh(new THREE.BoxGeometry(signW + 1, signW * 0.48 + 1, 0.3), this.darkMetal)
      frame.position.set(0, h + 3.2, d / 2 - 0.1)
      group.add(frame)
      const glow = new THREE.Sprite(new THREE.SpriteMaterial({
        map: this.glowTexture,
        color,
        transparent: true,
        opacity: 0.18,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }))
      glow.scale.set(signW * 1.8, signW * 0.9, 1)
      glow.position.set(0, h + 3.2, d / 2 + 0.5)
      group.add(glow)
    }

    // Ground-floor warm spill.
    if (this.rng() > 0.55) {
      const spill = new THREE.Mesh(
        new THREE.PlaneGeometry(w * 0.7, 2.4),
        new THREE.MeshBasicMaterial({
          color: 0xffae65,
          transparent: true,
          opacity: 0.06,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
        }),
      )
      spill.rotation.x = -Math.PI / 2
      spill.position.set(0, 0.36, d / 2 + 1.3)
      group.add(spill)
    }

    this.scene.add(group)
    this.colliders.push({ x, z, hw: w / 2 + 0.3, hd: d / 2 + 0.3 })
    return group
  }

  buildCrownTower() {
    const x = 0
    const z = 0
    const group = new THREE.Group()
    group.position.set(x, 0, z)
    const mat = this.facadeMaterials[2]
    const crownSides = [mat, mat, this.roofMat, this.roofMat, mat, mat]
    const base = new THREE.Mesh(tileBoxUVs(new THREE.BoxGeometry(44, 44, 44), 44, 44, 44), crownSides)
    base.position.y = 22.3
    group.add(base)
    const mid = new THREE.Mesh(tileBoxUVs(new THREE.BoxGeometry(34, 72, 34), 34, 72, 34), crownSides)
    mid.position.y = 80.3
    group.add(mid)
    const top = new THREE.Mesh(tileBoxUVs(new THREE.BoxGeometry(24, 28, 24), 24, 28, 24), crownSides)
    top.position.y = 130.3
    group.add(top)
    const crownMat = new THREE.MeshStandardMaterial({
      color: 0x8e6a2d,
      emissive: 0xffc35c,
      emissiveIntensity: 1.4,
      metalness: 0.85,
      roughness: 0.26,
    })
    const crown = new THREE.Mesh(new THREE.CylinderGeometry(3.2, 9.2, 12, 8), crownMat)
    crown.position.y = 150.4
    group.add(crown)
    const spire = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.5, 26, 6), crownMat)
    spire.position.y = 169.4
    group.add(spire)
    const beacon = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 8, 8),
      new THREE.MeshBasicMaterial({ color: 0xff6a5a, toneMapped: false }),
    )
    beacon.position.y = 182.5
    group.add(beacon)
    this.scene.add(group)
    this.colliders.push({ x, z, hw: 22.5, hd: 22.5 })

    const sign = this.makeBillboard('CROWN', '#e6c26f')
    const signMesh = new THREE.Mesh(new THREE.PlaneGeometry(18, 9), sign)
    signMesh.position.set(0, 106, 17.3)
    this.scene.add(signMesh)
    const sign2 = signMesh.clone()
    sign2.position.set(0, 106, -17.3)
    sign2.rotation.y = Math.PI
    this.scene.add(sign2)

    // Plaza lights.
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * TAU
      const lamp = new THREE.Mesh(
        new THREE.SphereGeometry(0.18, 6, 6),
        new THREE.MeshBasicMaterial({ color: 0xffd58a, toneMapped: false }),
      )
      lamp.position.set(Math.cos(a) * 29, 4.8, Math.sin(a) * 29)
      this.scene.add(lamp)
    }
  }

  buildPark(bx, bz) {
    const rng = this.rng
    const grass = new THREE.Mesh(new THREE.BoxGeometry(70, 0.1, 70), this.grassMat)
    grass.position.set(bx, 0.4, bz)
    this.scene.add(grass)

    const pathMat = new THREE.MeshStandardMaterial({ color: 0x34322f, roughness: 0.9 })
    const pathA = new THREE.Mesh(new THREE.BoxGeometry(7, 0.05, 70), pathMat)
    pathA.position.set(bx, 0.47, bz)
    this.scene.add(pathA)
    const pathB = new THREE.Mesh(new THREE.BoxGeometry(70, 0.05, 7), pathMat)
    pathB.position.set(bx, 0.47, bz)
    this.scene.add(pathB)

    const fountain = new THREE.Mesh(
      new THREE.CylinderGeometry(5.2, 5.6, 0.8, 20),
      new THREE.MeshStandardMaterial({ color: 0x3f4348, roughness: 0.7, metalness: 0.3 }),
    )
    fountain.position.set(bx, 0.6, bz)
    this.scene.add(fountain)
    const water = new THREE.Mesh(
      new THREE.CylinderGeometry(4.4, 4.4, 0.2, 20),
      new THREE.MeshStandardMaterial({
        color: 0x173444,
        roughness: 0.1,
        metalness: 0.8,
        emissive: 0x0b1a24,
        emissiveIntensity: 0.7,
      }),
    )
    water.position.set(bx, 1.02, bz)
    this.scene.add(water)
    const plume = new THREE.Mesh(
      new THREE.CylinderGeometry(0.1, 0.25, 5, 6),
      new THREE.MeshBasicMaterial({ color: 0x8fc3d8, transparent: true, opacity: 0.16, depthWrite: false }),
    )
    plume.position.set(bx, 3.4, bz)
    this.scene.add(plume)
    this.colliders.push({ x: bx, z: bz, hw: 6, hd: 6 })

    const trunkGeo = new THREE.CylinderGeometry(0.3, 0.46, 3.8, 5)
    const foliageGeo = new THREE.IcosahedronGeometry(2.5, 0)
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x2b2119, roughness: 1 })
    const foliageMat = new THREE.MeshStandardMaterial({ color: 0x1c3a26, roughness: 0.95 })
    const positions = []
    for (let i = 0; i < 18; i++) {
      const a = rng() * TAU
      const r = 10 + rng() * 25
      const px = bx + Math.cos(a) * r
      const pz = bz + Math.sin(a) * r
      if (Math.abs(px - bx) < 5 || Math.abs(pz - bz) < 5) continue
      positions.push([px, pz])
    }
    const trunks = new THREE.InstancedMesh(trunkGeo, trunkMat, positions.length)
    const foliage = new THREE.InstancedMesh(foliageGeo, foliageMat, positions.length)
    const dummy = new THREE.Object3D()
    positions.forEach(([px, pz], i) => {
      dummy.position.set(px, 2.2, pz)
      dummy.rotation.set(0, rng() * TAU, 0)
      dummy.scale.setScalar(0.9 + rng() * 0.5)
      dummy.updateMatrix()
      trunks.setMatrixAt(i, dummy.matrix)
      dummy.position.set(px, 5.1, pz)
      dummy.updateMatrix()
      foliage.setMatrixAt(i, dummy.matrix)
    })
    this.scene.add(trunks)
    this.scene.add(foliage)
  }

  buildParkingLot(bx, bz) {
    const lot = new THREE.Mesh(new THREE.BoxGeometry(68, 0.08, 68), this.asphaltMat)
    lot.position.set(bx, 0.42, bz)
    this.scene.add(lot)
    const lineMat = new THREE.MeshBasicMaterial({ color: 0x8a877d, transparent: true, opacity: 0.28 })
    for (let i = -3; i <= 3; i++) {
      const line = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.02, 8), lineMat)
      line.position.set(bx + i * 9, 0.48, bz - 20)
      this.scene.add(line)
    }
    for (let i = 0; i < 3; i++) {
      const car = this.makeCar([0x1c252b, 0x30242a, 0x22242b][i], { name: 'PARKED COUPE' })
      car.position.set(bx - 13 + i * 12, 0, bz - 19)
      car.rotation.y = Math.PI
      this.scene.add(car)
      this.registerVehicle(car, { name: 'COUPE', ai: false, kind: 'parked' })
    }
  }

  addRooftopBillboards() {
    const defs = [
      [-148, -47, 35, 'VICE', '#ff5d9e'],
      [156, -155, 42, 'LUCKY', '#ffcb5e'],
      [-55, 156, 38, 'DINER', '#e59a58'],
      [200, 54, 34, 'PIER 9', '#55d6d0'],
    ]
    for (const [x, z, y, word, color] of defs) {
      const tex = makeBillboardTexture(word, color)
      const plane = new THREE.Mesh(
        new THREE.PlaneGeometry(14, 7),
        new THREE.MeshBasicMaterial({ map: tex, transparent: true, toneMapped: false }),
      )
      plane.position.set(x, y, z)
      plane.rotation.y = Math.PI / 2
      this.scene.add(plane)
      const frame = new THREE.Mesh(new THREE.BoxGeometry(15, 8, 0.4), this.darkMetal)
      frame.position.set(x - 0.3, y, z)
      frame.rotation.y = Math.PI / 2
      this.scene.add(frame)
    }
  }

  makeBillboard(text, color) {
    return new THREE.MeshBasicMaterial({
      map: makeBillboardTexture(text, color),
      transparent: true,
      toneMapped: false,
      side: THREE.DoubleSide,
    })
  }

  buildSafehouse() {
    const [sx, sz] = SAFEHOUSE.shop
    const group = new THREE.Group()
    group.position.set(sx, 0, sz)
    group.rotation.y = Math.PI / 2

    const body = new THREE.Mesh(
      tileBoxUVs(new THREE.BoxGeometry(16, 13, 12), 16, 13, 12),
      [this.facadeMaterials[0], this.facadeMaterials[0], this.roofMat, this.roofMat, this.facadeMaterials[0], this.facadeMaterials[0]],
    )
    body.position.y = 6.82
    group.add(body)

    const stone = new THREE.Mesh(
      new THREE.BoxGeometry(16.5, 4.6, 12.5),
      new THREE.MeshStandardMaterial({ color: 0x3c302a, roughness: 0.88 }),
    )
    stone.position.y = 2.6
    group.add(stone)

    const door = new THREE.Mesh(
      new THREE.BoxGeometry(2.8, 3.6, 0.18),
      new THREE.MeshStandardMaterial({ color: 0x1b100b, roughness: 0.5, metalness: 0.2 }),
    )
    door.position.set(0, 2.15, 6.36)
    group.add(door)
    const doorGlow = new THREE.Mesh(
      new THREE.PlaneGeometry(4.4, 0.45),
      new THREE.MeshBasicMaterial({ color: 0xffb664, transparent: true, opacity: 0.8, toneMapped: false }),
    )
    doorGlow.position.set(0, 4.15, 6.4)
    group.add(doorGlow)

    const signTex = makeSignTexture('SAFEHOUSE', 'FAMILY ONLY', '#e7c16d')
    const sign = new THREE.Mesh(
      new THREE.PlaneGeometry(7.6, 2.4),
      new THREE.MeshBasicMaterial({
        map: signTex,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        toneMapped: false,
      }),
    )
    sign.position.set(0, 8.6, 6.15)
    group.add(sign)

    const awning = new THREE.Mesh(
      new THREE.BoxGeometry(10, 0.22, 2.2),
      new THREE.MeshStandardMaterial({ color: 0x3c0f12, roughness: 0.65 }),
    )
    awning.position.set(0, 4.9, 7)
    group.add(awning)

    const glow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: this.glowTexture,
      color: 0xffb05c,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }))
    glow.scale.set(5, 5, 1)
    glow.position.set(0, 3, 7)
    group.add(glow)

    this.scene.add(group)
    this.colliders.push({ x: sx, z: sz, hw: 6.6, hd: 8.6 })
    this.safehouseGroup = group

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(2.4, 0.08, 8, 32),
      new THREE.MeshBasicMaterial({ color: 0xe7c16d, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false }),
    )
    ring.rotation.x = -Math.PI / 2
    ring.position.set(SAFEHOUSE.marker[0], 0.5, SAFEHOUSE.marker[1])
    this.scene.add(ring)
    this.safehouseRing = ring
  }

  buildRackets() {
    for (const def of RACKETS) {
      const group = new THREE.Group()
      const [sx, sz] = def.shop
      const rotation = def.side === 'west' ? -Math.PI / 2 : def.side === 'east' ? Math.PI / 2 : def.side === 'north' ? Math.PI : 0
      group.position.set(sx, 0, sz)
      group.rotation.y = rotation

      const bodyMat = this.facadeMaterials[Math.floor(this.rng() * this.facadeMaterials.length)]
      const body = new THREE.Mesh(
        tileBoxUVs(new THREE.BoxGeometry(15, 10, 10), 15, 10, 10),
        [bodyMat, bodyMat, this.roofMat, this.roofMat, bodyMat, bodyMat],
      )
      body.position.y = 5.3
      group.add(body)

      const base = new THREE.Mesh(
        new THREE.BoxGeometry(15.4, 3.6, 10.4),
        new THREE.MeshStandardMaterial({ color: 0x201a18, roughness: 0.82 }),
      )
      base.position.y = 2.1
      group.add(base)

      const door = new THREE.Mesh(
        new THREE.BoxGeometry(2.6, 3.2, 0.2),
        new THREE.MeshStandardMaterial({ color: 0x0c0d10, roughness: 0.4, metalness: 0.4 }),
      )
      door.position.set(-3.4, 1.9, 5.32)
      group.add(door)

      const winGlass = new THREE.Mesh(
        new THREE.PlaneGeometry(7.8, 2.4),
        new THREE.MeshBasicMaterial({ map: makeStorefrontTexture(def.color) }),
      )
      winGlass.position.set(1.9, 2.05, 5.33)
      group.add(winGlass)

      const awning = new THREE.Mesh(
        new THREE.BoxGeometry(10.6, 0.18, 2),
        new THREE.MeshStandardMaterial({
          color: 0x1c1310,
          emissive: def.color,
          emissiveIntensity: 0.035,
          roughness: 0.6,
        }),
      )
      awning.position.set(1.5, 4.3, 6)
      group.add(awning)

      const signMat = new THREE.MeshBasicMaterial({
        map: makeSignTexture(def.sign, def.kind, '#ffffff'),
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        toneMapped: false,
        color: new THREE.Color(def.color),
      })
      const sign = new THREE.Mesh(new THREE.PlaneGeometry(10.8, 3.4), signMat)
      sign.position.set(1.4, 7.2, 5.16)
      group.add(sign)

      const underGlow = new THREE.Mesh(
        new THREE.PlaneGeometry(13, 7),
        new THREE.MeshBasicMaterial({
          map: this.glowTexture,
          color: def.color,
          transparent: true,
          opacity: 0.22,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        }),
      )
      underGlow.rotation.x = -Math.PI / 2
      underGlow.position.set(0, 0.43, 6.8)
      group.add(underGlow)

      this.scene.add(group)
      this.colliders.push({
        x: sx,
        z: sz,
        hw: def.side === 'east' || def.side === 'west' ? 5.6 : 8.2,
        hd: def.side === 'east' || def.side === 'west' ? 8.2 : 5.6,
      })

      const marker = new THREE.Group()
      marker.position.set(def.marker[0], 0, def.marker[1])
      const color = new THREE.Color(0xc33d3d)
      const beamMat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.035,
        side: THREE.DoubleSide,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
      const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.42, 7, 10, 1, true), beamMat)
      beam.position.y = 3.5
      marker.add(beam)

      const ringMat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.45, 0.045, 8, 40), ringMat)
      ring.rotation.x = -Math.PI / 2
      ring.position.y = 0.55
      marker.add(ring)

      const disc = new THREE.Mesh(
        new THREE.CircleGeometry(1.85, 24),
        new THREE.MeshBasicMaterial({
          color,
          transparent: true,
          opacity: 0.055,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        }),
      )
      disc.rotation.x = -Math.PI / 2
      disc.position.y = 0.46
      marker.add(disc)

      const diamondMat = new THREE.MeshBasicMaterial({ color, toneMapped: false })
      const diamond = new THREE.Mesh(new THREE.OctahedronGeometry(0.34, 0), diamondMat)
      diamond.position.y = 2.6
      marker.add(diamond)

      const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
        map: this.glowTexture,
        color,
        transparent: true,
        opacity: 0.3,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }))
      sprite.scale.set(2.3, 2.3, 1)
      sprite.position.y = 2.6
      marker.add(sprite)

      this.scene.add(marker)
      const racket = {
        ...def,
        def,
        group,
        marker,
        pos: marker.position,
        beam,
        beamMat,
        ring,
        ringMat,
        diamond,
        diamondMat,
        sprite,
        signMat,
        underGlow,
        owned: false,
        state: 'rival',
        guards: [],
        underAttack: false,
      }
      this.rackets.push(racket)
      this.racketById.set(def.id, racket)
    }
  }

  setRacketState(racket, state) {
    const colors = {
      rival: 0xc33d3d,
      cleared: 0xd6d0c2,
      owned: 0xe0b85d,
    }
    const color = new THREE.Color(colors[state] || colors.rival)
    racket.beamMat.color.copy(color)
    racket.ringMat.color.copy(color)
    racket.diamondMat.color.copy(color)
    racket.sprite.material.color.copy(color)
    racket.signMat.color.copy(state === 'owned' ? new THREE.Color(0xf1cf86) : new THREE.Color(racket.color))
    racket.underGlow.material.color.copy(color)
    racket.state = state
    racket.owned = state === 'owned'
  }

  buildWaterfront() {
    const water = new THREE.Mesh(new THREE.PlaneGeometry(720, 1600), this.waterMat)
    water.rotation.x = -Math.PI / 2
    water.position.set(640, -0.55, 0)
    this.scene.add(water)

    const shore = new THREE.Mesh(new THREE.BoxGeometry(3, 2.2, 900), this.curbMat)
    shore.position.set(280, 0.55, 0)
    this.scene.add(shore)

    const promenade = new THREE.Mesh(new THREE.BoxGeometry(32, 0.3, 900), this.sidewalkMat)
    promenade.position.set(264, 0.18, 0)
    this.scene.add(promenade)

    const pierMat = new THREE.MeshStandardMaterial({ color: 0x2a2119, roughness: 0.92 })
    for (const z of [-180, -60, 60, 180]) {
      const pier = new THREE.Mesh(new THREE.BoxGeometry(58, 1.1, 11), pierMat)
      pier.position.set(310, 0.3, z)
      this.scene.add(pier)
      for (let i = 0; i < 5; i++) {
        const post = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.34, 4, 5), this.darkMetal)
        post.position.set(288 + i * 12, -1.4, z + 5.3)
        this.scene.add(post)
      }
    }

    // Cranes.
    for (const z of [-180, 30, 170]) {
      const crane = new THREE.Group()
      crane.position.set(294, 0, z)
      const towerMat = new THREE.MeshStandardMaterial({ color: 0x3b2a1e, roughness: 0.7, metalness: 0.5 })
      const tower = new THREE.Mesh(new THREE.BoxGeometry(1.6, 24, 1.6), towerMat)
      tower.position.y = 12
      crane.add(tower)
      const arm = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.2, 30), towerMat)
      arm.position.set(0, 24, 8)
      arm.rotation.x = -0.12
      crane.add(arm)
      const light = new THREE.Mesh(
        new THREE.SphereGeometry(0.25, 6, 6),
        new THREE.MeshBasicMaterial({ color: 0xff5d4d, toneMapped: false }),
      )
      light.position.set(0, 25.5, -6)
      crane.add(light)
      this.scene.add(crane)
    }

    // Freighter silhouette.
    const ship = new THREE.Group()
    ship.position.set(455, -0.4, -120)
    const hull = new THREE.Mesh(
      new THREE.BoxGeometry(86, 9, 20),
      new THREE.MeshStandardMaterial({ color: 0x131820, roughness: 0.8, metalness: 0.4 }),
    )
    hull.position.y = 4
    ship.add(hull)
    const bridge = new THREE.Mesh(
      new THREE.BoxGeometry(15, 16, 16),
      new THREE.MeshStandardMaterial({ color: 0x222a32, roughness: 0.7 }),
    )
    bridge.position.set(-28, 14, 0)
    ship.add(bridge)
    for (let i = 0; i < 8; i++) {
      const container = new THREE.Mesh(
        new THREE.BoxGeometry(7, 3.2, 7),
        new THREE.MeshStandardMaterial({
          color: [0x52221f, 0x1f3c4a, 0x3c3922, 0x2f2a33][i % 4],
          roughness: 0.85,
        }),
      )
      container.position.set(-2 + (i % 4) * 8, 10 + Math.floor(i / 4) * 3.4, -4 + (i % 2) * 8)
      ship.add(container)
    }
    this.scene.add(ship)

    const shipLight = new THREE.PointLight(0xffc27c, 30, 50, 2)
    shipLight.position.set(430, 14, -115)
    this.scene.add(shipLight)
  }

  makeCar(color = 0x2b1d20, options = {}) {
    const group = new THREE.Group()
    const bodyMat = new THREE.MeshStandardMaterial({
      color,
      metalness: 0.78,
      roughness: 0.24,
      envMapIntensity: 1.5,
    })
    const lowerMat = new THREE.MeshStandardMaterial({ color: 0x111216, metalness: 0.7, roughness: 0.42 })
    const chromeMat = new THREE.MeshStandardMaterial({ color: 0xb8b6ae, metalness: 0.95, roughness: 0.18 })

    const body = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.56, 4.25), bodyMat)
    body.position.y = 0.66
    group.add(body)
    const lower = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.3, 4.32), lowerMat)
    lower.position.y = 0.38
    group.add(lower)
    const hood = new THREE.Mesh(new THREE.BoxGeometry(1.78, 0.18, 1.1), bodyMat)
    hood.position.set(0, 0.98, 1.42)
    group.add(hood)
    const trunk = new THREE.Mesh(new THREE.BoxGeometry(1.78, 0.16, 0.9), bodyMat)
    trunk.position.set(0, 0.97, -1.55)
    group.add(trunk)
    const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.62, 0.58, 2.0), this.windowDark)
    cabin.position.set(0, 1.17, -0.2)
    group.add(cabin)
    const roof = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.1, 1.55), bodyMat)
    roof.position.set(0, 1.48, -0.25)
    group.add(roof)
    const stripe = new THREE.Mesh(
      new THREE.BoxGeometry(0.07, 0.03, 3.4),
      new THREE.MeshStandardMaterial({ color: options.trim || 0x8e6a33, metalness: 0.8, roughness: 0.3 }),
    )
    stripe.position.set(0.91, 0.76, 0)
    group.add(stripe)
    const stripe2 = stripe.clone()
    stripe2.position.x = -0.91
    group.add(stripe2)

    const bumperF = new THREE.Mesh(new THREE.BoxGeometry(2.03, 0.18, 0.18), chromeMat)
    bumperF.position.set(0, 0.45, 2.16)
    group.add(bumperF)
    const bumperB = bumperF.clone()
    bumperB.position.z = -2.16
    group.add(bumperB)

    const wheelGeo = new THREE.CylinderGeometry(0.37, 0.37, 0.24, 12)
    const wheelMat = new THREE.MeshStandardMaterial({ color: 0x090a0c, roughness: 0.85 })
    for (const wx of [-0.98, 0.98]) {
      for (const wz of [-1.35, 1.35]) {
        const wheel = new THREE.Mesh(wheelGeo, wheelMat)
        wheel.rotation.z = Math.PI / 2
        wheel.position.set(wx, 0.4, wz)
        group.add(wheel)
        const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.26, 8), chromeMat)
        hub.rotation.z = Math.PI / 2
        hub.position.set(wx, 0.4, wz)
        group.add(hub)
      }
    }

    const headMat = new THREE.MeshBasicMaterial({ color: 0xffe1b0, toneMapped: false })
    const tailMat = new THREE.MeshBasicMaterial({ color: 0xff3d35, toneMapped: false })
    for (const hx of [-0.61, 0.61]) {
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.15, 0.06), headMat)
      head.position.set(hx, 0.73, 2.15)
      group.add(head)
      const tail = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.12, 0.05), tailMat)
      tail.position.set(hx, 0.7, -2.15)
      group.add(tail)

      const glow = new THREE.Sprite(new THREE.SpriteMaterial({
        map: this.glowTexture,
        color: 0xffd9a0,
        transparent: true,
        opacity: 0.38,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }))
      glow.scale.set(1.2, 1.2, 1)
      glow.position.set(hx, 0.73, 2.25)
      group.add(glow)
    }

    const shadow = new THREE.Mesh(
      new THREE.CircleGeometry(1.45, 16),
      new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.45, depthWrite: false }),
    )
    shadow.rotation.x = -Math.PI / 2
    shadow.scale.set(1.1, 1.9, 1)
    shadow.position.y = 0.06
    group.add(shadow)

    if (options.police) {
      const barBase = new THREE.Mesh(new THREE.BoxGeometry(1.25, 0.12, 0.35), lowerMat)
      barBase.position.set(0, 1.58, -0.25)
      group.add(barBase)
      const red = new THREE.Mesh(
        new THREE.BoxGeometry(0.5, 0.18, 0.25),
        new THREE.MeshBasicMaterial({ color: 0xff2b2b, toneMapped: false }),
      )
      red.position.set(-0.35, 1.68, -0.25)
      group.add(red)
      const blue = new THREE.Mesh(
        new THREE.BoxGeometry(0.5, 0.18, 0.25),
        new THREE.MeshBasicMaterial({ color: 0x3b8dff, toneMapped: false }),
      )
      blue.position.set(0.35, 1.68, -0.25)
      group.add(blue)
      group.userData.policeLights = [red, blue]
    }

    group.userData.bodyMat = bodyMat
    return group
  }

  registerVehicle(group, options = {}) {
    const vehicle = {
      group,
      heading: group.rotation.y,
      speed: 0,
      ai: options.ai ?? false,
      axis: options.axis || 'z',
      dir: options.dir || 1,
      lane: options.lane || 0,
      kind: options.kind || 'traffic',
      name: options.name || 'CITY SEDAN',
      color: options.color || 0x2b1d20,
    }
    this.vehicles.push(vehicle)
    return vehicle
  }

  buildTraffic() {
    const roadCenters = [-250, -150, -50, 50, 150, 250]
    const colors = [0x1f242c, 0x2a1d1d, 0x2b2b24, 0x1d2b2d, 0x30282a, 0x22252d, 0x3b2e22, 0x1a1a20]
    const dummy = new THREE.Object3D()
    for (let i = 0; i < 18; i++) {
      const axis = this.rng() > 0.5 ? 'x' : 'z'
      const dir = this.rng() > 0.5 ? 1 : -1
      const lane = roadCenters[Math.floor(this.rng() * roadCenters.length)] + dir * 4.2
      const pos = -300 + this.rng() * 600
      const car = this.makeCar(colors[i % colors.length], { name: 'CITY SEDAN' })
      const group = car
      if (axis === 'x') {
        group.position.set(pos, 0, lane)
        group.rotation.y = dir > 0 ? Math.PI / 2 : -Math.PI / 2
      } else {
        group.position.set(lane, 0, pos)
        group.rotation.y = dir > 0 ? 0 : Math.PI
      }
      this.scene.add(group)
      this.registerVehicle(group, {
        ai: true,
        axis,
        dir,
        lane,
        speed: 6 + this.rng() * 6,
        name: 'CITY SEDAN',
        kind: 'traffic',
        color: colors[i % colors.length],
      })
    }

    // A few curbside cars.
    const parked = [
      [-45, -170, Math.PI],
      [45, 170, 0],
      [-145, 45, -Math.PI / 2],
      [185, 45, Math.PI / 2],
      [-45, 45, Math.PI / 2],
    ]
    for (const [x, z, rot] of parked) {
      const car = this.makeCar(colors[Math.floor(this.rng() * colors.length)], { name: 'PARKED SEDAN' })
      car.position.set(x, 0, z)
      car.rotation.y = rot
      this.scene.add(car)
      this.registerVehicle(car, { ai: false, kind: 'parked', name: 'PARKED SEDAN' })
    }
  }

  makePedestrian() {
    const group = new THREE.Group()
    const coatColors = [0x1b1c22, 0x2a2220, 0x1d2429, 0x33251f, 0x242028, 0x2f2e29]
    const skinColors = [0xc59575, 0x8f6249, 0xe0b28c, 0x6b4937, 0xb67d5d]
    const coat = new THREE.Mesh(
      new THREE.BoxGeometry(0.5, 0.9, 0.3),
      new THREE.MeshStandardMaterial({ color: coatColors[Math.floor(this.rng() * coatColors.length)], roughness: 0.9 }),
    )
    coat.position.y = 0.92
    group.add(coat)
    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.18, 8, 8),
      new THREE.MeshStandardMaterial({ color: skinColors[Math.floor(this.rng() * skinColors.length)], roughness: 0.8 }),
    )
    head.position.y = 1.52
    group.add(head)
    const hat = new THREE.Mesh(
      new THREE.CylinderGeometry(0.24, 0.24, 0.05, 8),
      new THREE.MeshStandardMaterial({ color: 0x141418, roughness: 0.8 }),
    )
    hat.position.y = 1.64
    group.add(hat)
    const legs = new THREE.Mesh(
      new THREE.BoxGeometry(0.36, 0.48, 0.24),
      new THREE.MeshStandardMaterial({ color: 0x141519, roughness: 0.9 }),
    )
    legs.position.y = 0.36
    group.add(legs)
    const shadow = new THREE.Mesh(
      new THREE.CircleGeometry(0.42, 10),
      new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.28, depthWrite: false }),
    )
    shadow.rotation.x = -Math.PI / 2
    shadow.position.y = 0.02
    group.add(shadow)
    return group
  }

  buildPedestrians() {
    const blocks = this.blockPositions.filter(([x, z]) => !(x === 0 && z === 0))
    for (let i = 0; i < 30; i++) {
      const [bx, bz] = blocks[Math.floor(this.rng() * blocks.length)]
      const group = this.makePedestrian()
      group.scale.setScalar(0.92 + this.rng() * 0.16)
      this.scene.add(group)
      this.peds.push({
        group,
        bx,
        bz,
        t: this.rng(),
        speed: 0.012 + this.rng() * 0.012,
        dir: this.rng() > 0.5 ? 1 : -1,
        phase: this.rng() * TAU,
      })
    }
  }

  perimeterPoint(bx, bz, t) {
    const half = 34.5
    const side = Math.floor(t * 4) % 4
    const local = (t * 4) % 1
    let x
    let z
    if (side === 0) {
      x = bx - half + local * half * 2
      z = bz - half
    } else if (side === 1) {
      x = bx + half
      z = bz - half + local * half * 2
    } else if (side === 2) {
      x = bx + half - local * half * 2
      z = bz + half
    } else {
      x = bx - half
      z = bz + half - local * half * 2
    }
    return [x, z, side]
  }

  updatePedestrians(dt) {
    const panic = this.panic > 0
    if (this.panic > 0) this.panic -= dt
    for (const ped of this.peds) {
      ped.t = (ped.t + ped.speed * dt * ped.dir * (panic ? 2.6 : 1) + 1) % 1
      const [x, z, side] = this.perimeterPoint(ped.bx, ped.bz, ped.t)
      ped.group.position.set(x, 0.25 + Math.sin(this.time * 8 + ped.phase) * 0.025, z)
      const angle = side === 0 ? Math.PI / 2 : side === 1 ? Math.PI : side === 2 ? -Math.PI / 2 : 0
      ped.group.rotation.y = angle + (ped.dir < 0 ? Math.PI : 0)
    }
  }

  updateTraffic(dt) {
    for (const v of this.vehicles) {
      if (!v.ai) continue
      v.group.position[v.axis] += v.speed * v.dir * dt
      if (v.group.position[v.axis] > 310) v.group.position[v.axis] = -310
      if (v.group.position[v.axis] < -310) v.group.position[v.axis] = 310
      if (v.axis === 'x') {
        v.group.rotation.y = v.dir > 0 ? Math.PI / 2 : -Math.PI / 2
      } else {
        v.group.rotation.y = v.dir > 0 ? 0 : Math.PI
      }
    }
  }

  updatePoliceLights(time) {
    for (const v of this.vehicles) {
      const lights = v.group.userData.policeLights
      if (!lights) continue
      const pulse = Math.sin(time * 10) > 0
      lights[0].material.color.setHex(pulse ? 0xff2b2b : 0x4a0b0b)
      lights[1].material.color.setHex(pulse ? 0x0f1b52 : 0x3b8dff)
    }
  }

  buildRain() {
    const count = 900
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (this.rng() - 0.5) * 150
      positions[i * 3 + 1] = this.rng() * 38
      positions[i * 3 + 2] = (this.rng() - 0.5) * 150
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const mat = new THREE.PointsMaterial({
      color: 0x9fb7d4,
      size: 0.09,
      transparent: true,
      opacity: 0.38,
      depthWrite: false,
      sizeAttenuation: true,
    })
    const rain = new THREE.Points(geo, mat)
    rain.frustumCulled = false
    this.scene.add(rain)
    this.rain = rain
  }

  updateRain(dt, focus) {
    if (!this.rain) return
    const pos = this.rain.geometry.attributes.position
    for (let i = 0; i < pos.count; i++) {
      let y = pos.getY(i) - dt * 30
      if (y < 0) y = 36 + Math.random() * 6
      pos.setY(i, y)
      pos.setX(i, pos.getX(i) + dt * 2.2)
      if (pos.getX(i) > 75) pos.setX(i, -75)
    }
    pos.needsUpdate = true
    this.rain.position.set(focus.x, 0, focus.z)
  }

  buildDistantSkyline() {
    for (let i = 0; i < 54; i++) {
      const angle = (i / 54) * TAU + this.rng() * 0.08
      const radius = 330 + this.rng() * 170
      const x = Math.cos(angle) * radius
      const z = Math.sin(angle) * radius
      const w = 18 + this.rng() * 28
      const d = 18 + this.rng() * 28
      const h = 24 + this.rng() * 95
      const mat = this.distantMaterials[Math.floor(this.rng() * this.distantMaterials.length)]
      const box = new THREE.Mesh(
        tileBoxUVs(new THREE.BoxGeometry(w, h, d), w, h, d, 16, 48),
        [mat, mat, this.roofMatDistant, this.roofMatDistant, mat, mat],
      )
      box.position.set(x, h / 2, z)
      this.scene.add(box)
    }
  }

  update(dt, focus, camera) {
    this.time += dt
    this.updateTraffic(dt)
    this.updatePedestrians(dt)
    this.updateRain(dt, focus)
    this.updatePoliceLights(this.time)

    for (const racket of this.rackets) {
      const pulse = 1 + Math.sin(this.time * 2.4 + racket.marker.position.x * 0.08) * 0.08
      const dist = Math.hypot(focus.x - racket.pos.x, focus.z - racket.pos.z)
      racket.beamMat.opacity = dist < 16 ? 0.015 : 0.05
      racket.ring.scale.setScalar(pulse)
      racket.diamond.rotation.y += dt * 1.2
      racket.diamond.position.y = 2.6 + Math.sin(this.time * 2 + racket.marker.position.z) * 0.12
      racket.sprite.material.opacity = 0.22 + Math.sin(this.time * 2.2 + racket.marker.position.x) * 0.08
    }
    if (this.safehouseRing) {
      this.safehouseRing.rotation.z += dt * 0.35
      this.safehouseRing.scale.setScalar(1 + Math.sin(this.time * 2.5) * 0.05)
    }
    this.neonLights.forEach((light, i) => {
      light.intensity = (i === 0 ? 90 : i === 1 ? 70 : 45) * (0.86 + Math.sin(this.time * (1.8 + i * 0.7) + i) * 0.14)
    })
  }

  collideCircle(x, z, radius = 0.5) {
    if (x < -292 || x > 292 || z < -292 || z > 292) return true
    for (const c of this.colliders) {
      const nx = clamp(x, c.x - c.hw, c.x + c.hw)
      const nz = clamp(z, c.z - c.hd, c.z + c.hd)
      const dx = x - nx
      const dz = z - nz
      if (dx * dx + dz * dz < radius * radius) return true
    }
    return false
  }

  collideAABB(x, z, hw, hd) {
    for (const c of this.colliders) {
      if (Math.abs(x - c.x) < hw + c.hw && Math.abs(z - c.z) < hd + c.hd) return c
    }
    return null
  }

  getDistrictAt(x, z) {
    let best = DISTRICTS[0]
    let bestDist = Infinity
    for (const d of DISTRICTS) {
      const dx = x - d.center[0]
      const dz = z - d.center[1]
      const dist = dx * dx + dz * dz
      if (dist < bestDist) {
        bestDist = dist
        best = d
      }
    }
    return best
  }

  spawnImpact(pos, color = 0xffc27c, count = 8) {
    const geo = new THREE.BufferGeometry()
    const positions = new Float32Array(count * 3)
    const velocities = []
    for (let i = 0; i < count; i++) {
      positions[i * 3] = pos.x
      positions[i * 3 + 1] = pos.y
      positions[i * 3 + 2] = pos.z
      velocities.push(new THREE.Vector3(
        (Math.random() - 0.5) * 6,
        Math.random() * 4 + 1,
        (Math.random() - 0.5) * 6,
      ))
    }
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const mat = new THREE.PointsMaterial({
      color,
      size: 0.12,
      transparent: true,
      opacity: 1,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
    const points = new THREE.Points(geo, mat)
    this.scene.add(points)
    this.ambientEffects.push({ points, velocities, life: 0.55, max: 0.55 })
  }

  updateEffects(dt) {
    for (let i = this.ambientEffects.length - 1; i >= 0; i--) {
      const fx = this.ambientEffects[i]
      fx.life -= dt
      const pos = fx.points.geometry.attributes.position
      for (let p = 0; p < pos.count; p++) {
        const v = fx.velocities[p]
        pos.setXYZ(p, pos.getX(p) + v.x * dt, pos.getY(p) + v.y * dt, pos.getZ(p) + v.z * dt)
        v.y -= 9 * dt
      }
      pos.needsUpdate = true
      fx.points.material.opacity = Math.max(0, fx.life / fx.max)
      if (fx.life <= 0) {
        this.scene.remove(fx.points)
        fx.points.geometry.dispose()
        fx.points.material.dispose()
        this.ambientEffects.splice(i, 1)
      }
    }
  }
}
