import * as THREE from 'three'
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js'
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js'
import {
  TAU, rand, randInt, choice, clamp, makeCanvas, canvasTexture, radialTexture,
  facadeTexture, shopfrontTexture, signTexture, awningTexture, asphaltTexture,
  sidewalkTexture
} from './utils.js'

export const CITY = {
  N: 5, PITCH: 68, ROAD: 16, BLOCK: 52, HALF: 170, WATER_Z: 188,
  roads: [-170, -102, -34, 34, 102, 170],
  centers: [-136, -68, 0, 68, 136]
}

const SPECIAL = {
  '2,1': 'club',
  '1,3': 'church',
  '3,3': 'park',
  '0,2': 'butcher',
  '2,4': 'warehouseA',
  '3,4': 'warehouseB',
  '1,4': 'yard',
  '4,0': 'parking'
}

const NEON_WORDS = ['HOTEL', 'BAR', 'LIQUOR', 'CAFE', 'PAWN', 'JAZZ', 'CLUB', 'DINER', 'MOTEL', 'CIGARS', 'BANK', 'ROXY']
const SHOP_COLORS = ['#7d2b26', '#28503a', '#7a5a24', '#3b2c50', '#62331f']

let signCache = new Map()
function cachedSign(text, color, vertical) {
  const key = text + color + vertical
  if (!signCache.has(key)) signCache.set(key, signTexture(text, color, 'rgba(9,7,6,.94)', vertical))
  return signCache.get(key)
}

export function createCity(scene, renderer) {
  const group = new THREE.Group()
  group.name = 'city'
  scene.add(group)
  const m4 = new THREE.Matrix4()
  const colliders = []
  const landmarks = {}
  const mapBlocks = []
  const neon = []
  const updateFns = []
  let waterMesh = null

  const facadeMats = []
  for (let i = 0; i < 8; i++) {
    const tex = facadeTexture(i)
    facadeMats.push(new THREE.MeshStandardMaterial({
      map: tex, emissiveMap: tex, emissive: 0xffb06a, emissiveIntensity: 1.05,
      roughness: .9, metalness: .04, color: 0xffffff
    }))
  }
  const roofMat = new THREE.MeshStandardMaterial({ color: 0x191a1f, roughness: .95, metalness: .05 })
  const darkMetal = new THREE.MeshStandardMaterial({ color: 0x1b1d22, roughness: .7, metalness: .55 })
  const brassMat = new THREE.MeshStandardMaterial({ color: 0x9a7a3d, roughness: .35, metalness: .8 })
  const stoneMat = new THREE.MeshStandardMaterial({ color: 0x5b554b, roughness: .9 })
  const stoneDark = new THREE.MeshStandardMaterial({ color: 0x39362f, roughness: .95 })
  const sidewalkMat = new THREE.MeshStandardMaterial({ map: sidewalkTexture(), color: 0xbcbcc8, roughness: .92, metalness: .02 })
  const asphaltMat = new THREE.MeshStandardMaterial({ map: asphaltTexture(), color: 0x8e909c, roughness: .38, metalness: .28 })
  const lineMat = new THREE.MeshBasicMaterial({ color: 0xb39a5c, toneMapped: false })
  const glowTex = radialTexture('rgba(255,214,150,.9)', 'rgba(255,180,90,0)', 128)

  // ---------- sky ----------
  const skyGeo = new THREE.SphereGeometry(700, 32, 20)
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: {
      top: { value: new THREE.Color(0x04060d) },
      mid: { value: new THREE.Color(0x141827) },
      horizon: { value: new THREE.Color(0x5b3226) },
      low: { value: new THREE.Color(0x0b0b10) }
    },
    vertexShader: `varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: `varying vec3 vP; uniform vec3 top, mid, horizon, low;
      void main(){ float h = normalize(vP).y;
        vec3 c = mix(horizon, mid, smoothstep(-0.02, 0.28, h));
        c = mix(c, top, smoothstep(0.2, 0.85, h));
        c = mix(low, c, smoothstep(-0.22, -0.01, h));
        float glow = pow(max(0.0, 1.0 - abs(h - 0.015) * 5.0), 3.0);
        c += vec3(0.12, 0.055, 0.02) * glow;
        gl_FragColor = vec4(c, 1.0); }`
  })
  const sky = new THREE.Mesh(skyGeo, skyMat)
  sky.renderOrder = -10
  group.add(sky)

  // stars
  const starPos = []
  for (let i = 0; i < 900; i++) {
    const a = rand(0, TAU), y = rand(.12, .96), r = Math.sqrt(1 - y * y)
    starPos.push(Math.cos(a) * r * 660, y * 660, Math.sin(a) * r * 660)
  }
  const starGeo = new THREE.BufferGeometry()
  starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPos, 3))
  const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xbcc8dd, size: 1.6, sizeAttenuation: false, transparent: true, opacity: .55, fog: false, depthWrite: false }))
  group.add(stars)

  // moon
  const moonTex = radialTexture('rgba(255,244,214,1)', 'rgba(255,220,160,0)', 128)
  const moonGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: moonTex, transparent: true, opacity: .5, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }))
  moonGlow.scale.set(180, 180, 1)
  moonGlow.position.set(-210, 190, -420)
  group.add(moonGlow)
  const moon = new THREE.Mesh(new THREE.CircleGeometry(17, 48), new THREE.MeshBasicMaterial({ color: 0xf3e6c4, fog: false }))
  moon.position.set(-210, 190, -421)
  moon.lookAt(0, 0, 0)
  group.add(moon)

  // ---------- ground / roads ----------
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(760, 760), new THREE.MeshStandardMaterial({ color: 0x0a0b0e, roughness: .9, metalness: .1 }))
  ground.rotation.x = -Math.PI / 2
  ground.position.y = -0.08
  ground.receiveShadow = true
  group.add(ground)

  const roadGeo = new THREE.PlaneGeometry(1, 1)
  const roadTiles = []
  const ROAD_SPAN = CITY.HALF * 2 + 20
  for (const r of CITY.roads) {
    // horizontal (east-west) road at z = r
    const g1 = roadGeo.clone(); g1.scale(ROAD_SPAN, CITY.ROAD, 1); g1.rotateX(-Math.PI / 2); g1.translate(0, 0.015, r)
    roadTiles.push(g1)
    // vertical (north-south) road at x = r
    const g2 = roadGeo.clone(); g2.scale(CITY.ROAD, ROAD_SPAN, 1); g2.rotateX(-Math.PI / 2); g2.translate(r, 0.016, 0)
    roadTiles.push(g2)
  }
  const roadMesh = new THREE.Mesh(mergeGeometries(roadTiles), asphaltMat)
  roadMesh.receiveShadow = true
  group.add(roadMesh)

  // lane dashes
  const dashGeos = []
  const dashBase = new THREE.PlaneGeometry(.22, 2.6); dashBase.rotateX(-Math.PI / 2)
  for (const r of CITY.roads) {
    for (let t = -CITY.HALF; t < CITY.HALF; t += 7) {
      // horizontal road dashes
      let g = dashBase.clone(); g.translate(t, .03, r); dashGeos.push(g)
      g = dashBase.clone(); g.rotateY(Math.PI / 2); g.translate(r, .03, t); dashGeos.push(g)
    }
  }
  const dashes = new THREE.Mesh(mergeGeometries(dashGeos), lineMat)
  group.add(dashes)

  // crosswalk stripes at each intersection
  const crossGeos = []
  for (const rx of CITY.roads) for (const rz of CITY.roads) {
    for (let k = -2; k <= 2; k++) {
      let g = new THREE.PlaneGeometry(1.1, 5.2); g.rotateX(-Math.PI / 2); g.translate(rx + k * 2.1, .028, rz - CITY.ROAD / 2 - 3.2); crossGeos.push(g)
      g = new THREE.PlaneGeometry(1.1, 5.2); g.rotateX(-Math.PI / 2); g.translate(rx + k * 2.1, .028, rz + CITY.ROAD / 2 + 3.2); crossGeos.push(g)
    }
  }
  const crosswalks = new THREE.Mesh(mergeGeometries(crossGeos), new THREE.MeshBasicMaterial({ color: 0xa9a291, transparent: true, opacity: .5 }))
  group.add(crosswalks)

  // ---------- sidewalks / blocks ----------
  const blockMeshes = []
  for (let i = 0; i < CITY.N; i++) for (let j = 0; j < CITY.N; j++) {
    const cx = CITY.centers[i], cz = CITY.centers[j]
    const key = `${i},${j}`
    const type = SPECIAL[key] || 'block'
    mapBlocks.push({ i, j, x: cx, z: cz, type })
    if (type === 'park') { buildPark(cx, cz); continue }
    if (type === 'church') { buildChurch(cx, cz); continue }
    if (type === 'club') { buildClub(cx, cz); continue }
    if (type === 'warehouseA' || type === 'warehouseB' || type === 'yard') { buildDocks(cx, cz, type); continue }
    if (type === 'parking') { buildParking(cx, cz); continue }
    if (type === 'butcher') { buildButcher(cx, cz); continue }
    buildBlock(cx, cz, i, j)
  }

  // sidewalk slab under all blocks (except handled? all)
  const sideGeo = new THREE.BoxGeometry(CITY.BLOCK, .3, CITY.BLOCK)
  const sideMesh = new THREE.InstancedMesh(sideGeo, sidewalkMat, CITY.N * CITY.N)
  let si = 0
  for (let i = 0; i < CITY.N; i++) for (let j = 0; j < CITY.N; j++) {
    m4.makeTranslation(CITY.centers[i], .06, CITY.centers[j])
    sideMesh.setMatrixAt(si++, m4)
  }
  sideMesh.receiveShadow = true
  group.add(sideMesh)

  // curbs
  const curbGeos = []
  for (let i = 0; i < CITY.N; i++) for (let j = 0; j < CITY.N; j++) {
    const cx = CITY.centers[i], cz = CITY.centers[j], h = CITY.BLOCK / 2
    let g = new THREE.BoxGeometry(CITY.BLOCK + .4, .34, .5); g.translate(cx, .1, cz - h); curbGeos.push(g)
    g = new THREE.BoxGeometry(CITY.BLOCK + .4, .34, .5); g.translate(cx, .1, cz + h); curbGeos.push(g)
    g = new THREE.BoxGeometry(.5, .34, CITY.BLOCK + .4); g.translate(cx - h, .1, cz); curbGeos.push(g)
    g = new THREE.BoxGeometry(.5, .34, CITY.BLOCK + .4); g.translate(cx + h, .1, cz); curbGeos.push(g)
  }
  const curbs = new THREE.Mesh(mergeGeometries(curbGeos), new THREE.MeshStandardMaterial({ color: 0x2c2d34, roughness: .85 }))
  curbs.receiveShadow = true
  group.add(curbs)

  // ---------- street lamps ----------
  const poleGeos = [], bulbPositions = []
  for (const rx of CITY.roads) for (const rz of CITY.roads) {
    for (const [ox, oz] of [[-1, -1], [1, 1]]) {
      const x = rx + ox * (CITY.ROAD / 2 + 1.4), z = rz + oz * (CITY.ROAD / 2 + 1.4)
      let pole = new THREE.CylinderGeometry(.09, .14, 6.6, 6); pole.translate(x, 3.3, z); poleGeos.push(pole)
      let arm = new THREE.BoxGeometry(.1, .1, 1.9); arm.rotateY(ox > 0 ? -Math.PI / 4 : Math.PI / 4); arm.translate(x + ox * .65, 6.55, z + oz * .65); poleGeos.push(arm)
      bulbPositions.push(x + ox * 1.25, 6.42, z + oz * 1.25)
    }
  }
  const poles = new THREE.Mesh(mergeGeometries(poleGeos), darkMetal)
  poles.castShadow = true
  group.add(poles)
  const bulbGeo = new THREE.SphereGeometry(.2, 8, 6)
  const bulbMat = new THREE.MeshBasicMaterial({ color: 0xffd9a0, toneMapped: false })
  const bulbMesh = new THREE.InstancedMesh(bulbGeo, bulbMat, bulbPositions.length / 3)
  for (let i = 0; i < bulbPositions.length / 3; i++) {
    m4.makeTranslation(bulbPositions[i * 3], bulbPositions[i * 3 + 1], bulbPositions[i * 3 + 2])
    bulbMesh.setMatrixAt(i, m4)
  }
  group.add(bulbMesh)
  const glowGeo = new THREE.BufferGeometry()
  glowGeo.setAttribute('position', new THREE.Float32BufferAttribute(bulbPositions, 3))
  const glowPoints = new THREE.Points(glowGeo, new THREE.PointsMaterial({ map: glowTex, color: 0xffc887, size: 5.5, transparent: true, opacity: .65, blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true }))
  group.add(glowPoints)
  // warm pools of light on the street under each lamp
  const poolGeos = []
  const poolBase = new THREE.PlaneGeometry(11, 11); poolBase.rotateX(-Math.PI / 2)
  for (let i = 0; i < bulbPositions.length / 3; i++) {
    const g = poolBase.clone()
    g.translate(bulbPositions[i * 3], .045, bulbPositions[i * 3 + 2])
    poolGeos.push(g)
  }
  const poolMat = new THREE.MeshBasicMaterial({ map: radialTexture('rgba(255,185,110,.75)', 'rgba(255,130,50,0)', 128), color: 0xffb06a, transparent: true, opacity: .38, blending: THREE.AdditiveBlending, depthWrite: false })
  group.add(new THREE.Mesh(mergeGeometries(poolGeos), poolMat))

  // a handful of real lights
  const lightSpots = [
    [0, -50, 0xffb168, 42], [-68, 50, 0xffa860, 34], [0, 132, 0xffb877, 40],
    [68, 68, 0xffaa66, 26], [102, 34, 0xffc07a, 24], [-68, -34, 0xffb168, 30],
    [68, -34, 0xffb168, 30], [0, 68, 0xffb168, 30], [-136, 34, 0xffb168, 28]
  ]
  for (const [x, z, color, dist] of lightSpots) {
    const l = new THREE.PointLight(color, 46, dist, 2)
    l.position.set(x, 7, z)
    group.add(l)
  }

  // ---------- puddles ----------
  const puddleMat = new THREE.MeshStandardMaterial({ color: 0x0a1018, roughness: .06, metalness: 1, transparent: true, opacity: .72, envMapIntensity: 2 })
  for (let i = 0; i < 42; i++) {
    const onH = Math.random() < .5
    const r = choice(CITY.roads) + rand(-5.5, 5.5)
    const t = rand(-CITY.HALF + 6, CITY.HALF - 6)
    const p = new THREE.Mesh(new THREE.CircleGeometry(rand(.8, 2.6), 14), puddleMat)
    p.rotation.x = -Math.PI / 2
    p.scale.z = rand(.5, 1)
    p.position.set(onH ? t : r, .035, onH ? r : t)
    group.add(p)
  }

  // ---------- harbor ----------
  buildHarbor()

  // ---------- distant skyline ----------
  buildSkyline()

  // ---------- rain ----------
  const rainCount = 1300
  const rainGeo = new THREE.BufferGeometry()
  const rainPos = new Float32Array(rainCount * 6)
  const rainData = []
  for (let i = 0; i < rainCount; i++) {
    const x = rand(-200, 200), y = rand(0, 55), z = rand(-200, 220)
    rainData.push({ x, y, z, v: rand(24, 38) })
    rainPos[i * 6] = x; rainPos[i * 6 + 1] = y; rainPos[i * 6 + 2] = z
    rainPos[i * 6 + 3] = x + .12; rainPos[i * 6 + 4] = y - rand(.7, 1.5); rainPos[i * 6 + 5] = z + .05
  }
  rainGeo.setAttribute('position', new THREE.BufferAttribute(rainPos, 3))
  const rain = new THREE.LineSegments(rainGeo, new THREE.LineBasicMaterial({ color: 0x9fb4cc, transparent: true, opacity: .16, depthWrite: false }))
  group.add(rain)
  updateFns.push((dt) => {
    const p = rainGeo.attributes.position.array
    for (let i = 0; i < rainCount; i++) {
      const d = rainData[i]
      d.y -= d.v * dt
      if (d.y < -1) { d.y = rand(38, 60); d.x = rand(-200, 200); d.z = rand(-200, 220) }
      p[i * 6] = d.x; p[i * 6 + 1] = d.y; p[i * 6 + 2] = d.z
      p[i * 6 + 3] = d.x + .18; p[i * 6 + 4] = d.y - 1.3; p[i * 6 + 5] = d.z + .08
    }
    rainGeo.attributes.position.needsUpdate = true
  })

  // neon flicker
  updateFns.push((dt, t) => {
    for (const n of neon) {
      const f = .82 + Math.sin(t * n.speed + n.phase) * .1 + (Math.sin(t * 17 + n.phase) > .96 ? -.35 : 0)
      n.mat.opacity = clamp(f, .4, 1)
    }
  })

  function addCollider(x, z, w, d, h = 20) {
    colliders.push({ minX: x - w / 2, maxX: x + w / 2, minZ: z - d / 2, maxZ: z + d / 2, h })
  }

  // ---------- builders ----------
  function buildBlock(cx, cz, bi, bj) {
    const R = seeded(1337 + bi * 71 + bj * 977)
    const kind = R()
    const layouts = []
    if (kind < .16) layouts.push({ w: rand(30, 38), d: rand(30, 38), h: rand(30, 46), x: 0, z: 0 })
    else if (kind < .46) {
      const alongX = R() < .5
      const a = rand(18, 22), b = rand(18, 22)
      if (alongX) { layouts.push({ w: a, d: 40, h: rand(16, 34), x: -11, z: 0 }, { w: b, d: 40, h: rand(14, 30), x: 11, z: 0 }) }
      else { layouts.push({ w: 40, d: a, h: rand(16, 34), x: 0, z: -11 }, { w: 40, d: b, h: rand(14, 30), x: 0, z: 11 }) }
    } else {
      const hs = [rand(12, 26), rand(14, 32), rand(11, 24), rand(16, 36)]
      layouts.push(
        { w: 19, d: 19, h: hs[0], x: -11, z: -11 }, { w: 19, d: 19, h: hs[1], x: 11, z: -11 },
        { w: 19, d: 19, h: hs[2], x: -11, z: 11 }, { w: 19, d: 19, h: hs[3], x: 11, z: 11 }
      )
    }
    let signCount = 0
    for (const L of layouts) {
      const x = cx + L.x, z = cz + L.z
      addBuilding(x, z, L.w, L.d, L.h, R)
      // outward face for storefront
      const ox = Math.abs(L.x) > 2 ? Math.sign(L.x) : (R() < .5 ? -1 : 1)
      const oz = Math.abs(L.z) > 2 ? Math.sign(L.z) : (R() < .5 ? -1 : 1)
      const useX = Math.abs(L.x) > Math.abs(L.z) || (Math.abs(L.x) === Math.abs(L.z) && R() < .5)
      const face = useX ? { axis: 'x', sign: ox, width: L.d } : { axis: 'z', sign: oz, width: L.w }
      if (signCount < 2 && R() < .72) { addStorefront(x, z, L.w, L.d, face); signCount++ }
      if (signCount < 2 && R() < .55) addStorefront(x, z, L.w, L.d, { axis: useX ? 'z' : 'x', sign: useX ? oz : ox, width: useX ? L.w : L.d })
      if (signCount < 2) { signCount++ }
    }
    // rooftop neon on the tallest
    if (R() < .5) {
      const tallest = layouts.reduce((a, b) => a.h > b.h ? a : b)
      addRoofSign(cx + tallest.x, cz + tallest.z, tallest)
    }
  }

  function addBuilding(x, z, w, d, h, R) {
    const variant = Math.floor(R() * 8)
    const geo = new THREE.BoxGeometry(w, h, d)
    scaleBoxUVs(geo, w, h, d)
    const mat = facadeMats[variant]
    const mesh = new THREE.Mesh(geo, [mat, mat, roofMat, roofMat, mat, mat])
    mesh.position.set(x, h / 2 + .2, z)
    mesh.castShadow = true
    mesh.receiveShadow = true
    group.add(mesh)
    addCollider(x, z, w, d, h)
    // cornice
    const cor = new THREE.Mesh(new THREE.BoxGeometry(w + .7, .55, d + .7), roofMat)
    cor.position.set(x, h + .25, z); cor.castShadow = true; group.add(cor)
    // roof clutter
    if (h > 18) {
      const tank = new THREE.Group()
      const body = new THREE.Mesh(new THREE.CylinderGeometry(1.9, 2.1, 2.6, 12), new THREE.MeshStandardMaterial({ color: 0x3b2e24, roughness: .9 }))
      body.position.y = 3.2; tank.add(body)
      const cone = new THREE.Mesh(new THREE.ConeGeometry(2.2, .9, 12), darkMetal); cone.position.y = 4.95; tank.add(cone)
      for (let k = 0; k < 4; k++) {
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(.08, .08, 2.1, 5), darkMetal)
        leg.position.set(Math.cos(k / 4 * TAU) * 1.4, 1.05, Math.sin(k / 4 * TAU) * 1.4); tank.add(leg)
      }
      tank.position.set(x + rand(-w / 4, w / 4), h + .5, z + rand(-d / 4, d / 4))
      group.add(tank)
    }
    if (h > 26) {
      const ant = new THREE.Mesh(new THREE.CylinderGeometry(.06, .06, 6, 4), darkMetal)
      ant.position.set(x, h + 3.2, z); group.add(ant)
      const dot = new THREE.Mesh(new THREE.SphereGeometry(.14, 6, 4), new THREE.MeshBasicMaterial({ color: 0xd14b3f, toneMapped: false }))
      dot.position.set(x, h + 6.2, z); group.add(dot)
    }
  }

  function scaleBoxUVs(geo, w, h, d) {
    const uv = geo.attributes.uv
    const sizes = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]]
    for (let i = 0; i < uv.count; i++) {
      const f = Math.floor(i / 4)
      uv.setXY(i, uv.getX(i) * Math.max(1, Math.round(sizes[f][0] / 9)), uv.getY(i) * Math.max(1, Math.round(sizes[f][1] / 13)))
    }
    uv.needsUpdate = true
  }

  function addStorefront(x, z, w, d, face) {
    const isZ = face.axis === 'z'
    const faceW = isZ ? w : d
    const sw = Math.min(faceW * .72, 11)
    const y = 2.25
    const off = (isZ ? d : w) / 2 + .04
    const px = x + (isZ ? 0 : face.sign * off)
    const pz = z + (isZ ? face.sign * off : 0)
    const rot = isZ ? (face.sign > 0 ? 0 : Math.PI) : (face.sign > 0 ? Math.PI / 2 : -Math.PI / 2)
    const shopTex = shopfrontTexture(randInt(0, 3))
    const mat = new THREE.MeshStandardMaterial({ map: shopTex, emissiveMap: shopTex, emissive: 0xffb266, emissiveIntensity: 1.1, roughness: .6, metalness: .1 })
    const panel = new THREE.Mesh(new THREE.PlaneGeometry(sw, 3.6), mat)
    panel.position.set(px, y, pz); panel.rotation.y = rot; group.add(panel)
    // awning
    const aw = new THREE.Mesh(new THREE.BoxGeometry(sw + .6, .14, 1.7), new THREE.MeshStandardMaterial({ map: awningTexture(choice(SHOP_COLORS)), roughness: .85 }))
    aw.position.set(px + (isZ ? 0 : face.sign * .85), 4.35, pz + (isZ ? face.sign * .85 : 0))
    aw.rotation.y = rot; aw.rotation.x = isZ ? face.sign * .12 : 0; aw.rotation.z = isZ ? 0 : -face.sign * .12
    aw.castShadow = true; group.add(aw)
    // sign
    if (Math.random() < .72) {
      const text = choice(NEON_WORDS)
      const vertical = Math.random() < .22
      addNeon(text, px + (isZ ? 0 : face.sign * .25), vertical ? 8.2 : 5.3, pz + (isZ ? face.sign * .25 : 0), rot, vertical, choice(['#ffcf87', '#ff8d6a', '#8fd3c7', '#f3e0b0']))
    }
  }

  function addNeon(text, x, y, z, rot, vertical, color = '#ffcf87', scale = 1) {
    const tex = cachedSign(text, color, vertical)
    const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, toneMapped: false, side: THREE.DoubleSide, opacity: .95 })
    const w = vertical ? 1.25 : 5.2, h = vertical ? 5.2 : 1.3
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w * scale, h * scale), mat)
    m.position.set(x, y, z); m.rotation.y = rot
    group.add(m)
    neon.push({ mat, phase: rand(0, TAU), speed: rand(1.5, 5) })
    return m
  }

  function addRoofSign(x, z, L) {
    const text = choice(['MORETTI', 'LAROSSA', 'HOTEL', 'ROXY', 'JAZZ'])
    const tex = cachedSign(text, '#ffd18f', false)
    const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, toneMapped: false, side: THREE.DoubleSide })
    const m = new THREE.Mesh(new THREE.PlaneGeometry(10, 2.5), mat)
    m.position.set(x, L.h + 4.2, z); m.rotation.y = choice([0, Math.PI, Math.PI / 2, -Math.PI / 2])
    group.add(m)
    const frame = new THREE.Mesh(new THREE.BoxGeometry(10.4, .12, .12), darkMetal)
    frame.position.copy(m.position); frame.position.y -= 1.4; frame.rotation.y = m.rotation.y; group.add(frame)
    for (const s of [-1, 1]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(.12, 3, .12), darkMetal)
      leg.position.copy(m.position); leg.position.y -= 1.6; leg.position.x += Math.cos(m.rotation.y) * 4 * s; leg.position.z -= Math.sin(m.rotation.y) * 4 * s
      group.add(leg)
    }
    neon.push({ mat, phase: rand(0, TAU), speed: rand(2, 4) })
  }

  function buildClub(cx, cz) {
    const w = 36, d = 28, h = 13
    addBuilding(cx, cz - 2, w, d, h, () => .2)
    // marquee
    const mx = cx, mz = cz + d / 2 - 1
    const marq = new THREE.Mesh(new RoundedBoxGeometry(14, 2.4, 1.2, 3, .2), new THREE.MeshStandardMaterial({ color: 0x211216, roughness: .5, metalness: .3 }))
    marq.position.set(mx, 6.2, mz); marq.castShadow = true; group.add(marq)
    addNeon('MORETTI’S', mx, 6.25, mz + .66, 0, false, '#ffd28a', 1.35)
    addNeon('CLUB', cx - w / 2 - .4, 9.5, cz - 2, -Math.PI / 2, true, '#ff9d72', 1.0)
    // canopy + bulbs
    const canopy = new THREE.Mesh(new THREE.BoxGeometry(12, .25, 4.4), new THREE.MeshStandardMaterial({ color: 0x2a161a, roughness: .6 }))
    canopy.position.set(cx, 4.6, cz + d / 2 + 1.6); canopy.castShadow = true; group.add(canopy)
    const bulbGeos = []
    for (let i = 0; i < 14; i++) {
      const b = new THREE.SphereGeometry(.09, 6, 5)
      b.translate(cx - 5.6 + i * .86, 4.45, cz + d / 2 + 3.7); bulbGeos.push(b)
    }
    group.add(new THREE.Mesh(mergeGeometries(bulbGeos), new THREE.MeshBasicMaterial({ color: 0xffe0a8, toneMapped: false })))
    // carpet
    const carpet = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 9), new THREE.MeshStandardMaterial({ color: 0x5c1a1c, roughness: 1 }))
    carpet.rotation.x = -Math.PI / 2; carpet.position.set(cx, .235, cz + d / 2 + 5); group.add(carpet)
    // stanchions
    for (const s of [-1, 1]) {
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(.05, .07, 1.1, 6), brassMat)
      pole.position.set(cx + s * 2.3, .75, cz + d / 2 + 7); group.add(pole)
      const ball = new THREE.Mesh(new THREE.SphereGeometry(.12, 8, 6), brassMat); ball.position.set(cx + s * 2.3, 1.35, cz + d / 2 + 7); group.add(ball)
    }
    // warm interior spill
    const spill = new THREE.PointLight(0xffb067, 26, 26, 2); spill.position.set(cx, 5, cz + d / 2 + 2); group.add(spill)
    landmarks.club = { x: cx, z: cz, door: { x: cx, z: cz + d / 2 + 5.5 }, name: 'Moretti’s Social Club' }
  }

  function buildButcher(cx, cz) {
    const w = 38, d = 30, h = 14
    addBuilding(cx, cz, w, d, h, () => .6)
    addNeon('SAL’S MEATS', cx + w / 2 + .5, 5.6, cz, Math.PI / 2, false, '#ff9b7a', 1.1)
    const aw = new THREE.Mesh(new THREE.BoxGeometry(1.8, .14, 9), new THREE.MeshStandardMaterial({ map: awningTexture('#6f2a22'), roughness: .9 }))
    aw.position.set(cx + w / 2 + .9, 4.1, cz); aw.rotation.z = .12; aw.castShadow = true; group.add(aw)
    const door = new THREE.Mesh(new THREE.BoxGeometry(.15, 2.8, 2), new THREE.MeshStandardMaterial({ color: 0x24150e, roughness: .8 }))
    door.position.set(cx + w / 2 + .02, 1.55, cz); group.add(door)
    landmarks.butcher = { x: cx, z: cz, door: { x: cx + w / 2 + 2.2, z: cz }, name: 'Sal’s Butcher Shop' }
  }

  function buildChurch(cx, cz) {
    // plaza
    const plaza = new THREE.Mesh(new THREE.BoxGeometry(CITY.BLOCK - 2, .12, CITY.BLOCK - 2), new THREE.MeshStandardMaterial({ color: 0x26242a, roughness: .9 }))
    plaza.position.set(cx, .19, cz); plaza.receiveShadow = true; group.add(plaza)
    // nave
    const naveW = 20, naveD = 30, naveH = 12
    const nave = new THREE.Mesh(new THREE.BoxGeometry(naveW, naveH, naveD), facadeMats[6])
    scaleBoxUVs(nave.geometry, naveW, naveH, naveD)
    nave.position.set(cx, naveH / 2 + .25, cz + 2); nave.castShadow = true; group.add(nave)
    addCollider(cx, cz + 2, naveW, naveD, naveH)
    // roof
    const roofL = new THREE.Mesh(new THREE.BoxGeometry(12.4, .5, naveD + 1), stoneDark)
    roofL.position.set(cx - 5.2, naveH + 2.1, cz + 2); roofL.rotation.z = .58; group.add(roofL)
    const roofR = roofL.clone(); roofR.position.x = cx + 5.2; roofR.rotation.z = -.58; group.add(roofR)
    // tower
    const tw = 7.5, th = 26
    const tower = new THREE.Mesh(new THREE.BoxGeometry(tw, th, tw), stoneMat)
    tower.position.set(cx, th / 2 + .25, cz - 17); tower.castShadow = true; group.add(tower)
    addCollider(cx, cz - 17, tw, tw, th)
    const spire = new THREE.Mesh(new THREE.ConeGeometry(5.6, 9, 4), new THREE.MeshStandardMaterial({ color: 0x2c2b2e, roughness: .8 }))
    spire.position.set(cx, th + 4.6, cz - 17); spire.rotation.y = Math.PI / 4; group.add(spire)
    // cross
    const crossMat = new THREE.MeshBasicMaterial({ color: 0xffd9a0, toneMapped: false })
    const c1 = new THREE.Mesh(new THREE.BoxGeometry(.16, 2.2, .16), crossMat); c1.position.set(cx, th + 10, cz - 17); group.add(c1)
    const c2 = new THREE.Mesh(new THREE.BoxGeometry(1.2, .16, .16), crossMat); c2.position.set(cx, th + 10.4, cz - 17); group.add(c2)
    // clock
    const clock = new THREE.Mesh(new THREE.CircleGeometry(1.35, 24), new THREE.MeshStandardMaterial({ color: 0xd8cba9, emissive: 0xffcf87, emissiveIntensity: .7 }))
    clock.position.set(cx, th - 3, cz - 17 - tw / 2 - .03); clock.rotation.y = Math.PI; group.add(clock)
    // tall windows
    const winMat = new THREE.MeshBasicMaterial({ color: 0xffb873, toneMapped: false })
    for (let i = -2; i <= 2; i++) {
      for (const s of [-1, 1]) {
        const wnd = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 6), winMat)
        wnd.position.set(cx + s * (naveW / 2 + .03), 6, cz + 2 + i * 4.5)
        wnd.rotation.y = s * Math.PI / 2
        group.add(wnd)
      }
    }
    const door = new THREE.Mesh(new THREE.BoxGeometry(3.4, 5, .3), new THREE.MeshStandardMaterial({ color: 0x2a1a11, roughness: .75 }))
    door.position.set(cx, 2.75, cz - 17 - tw / 2 - .1); door.rotation.y = Math.PI; group.add(door)
    const arch = new THREE.Mesh(new THREE.CircleGeometry(1.7, 20, 0, Math.PI), new THREE.MeshStandardMaterial({ color: 0x2a1a11 }))
    arch.position.set(cx, 5.25, cz - 17 - tw / 2 - .12); arch.rotation.y = Math.PI; group.add(arch)
    const l = new THREE.PointLight(0xffa766, 30, 30, 2); l.position.set(cx, 6, cz - 10); group.add(l)
    // graveyard stones
    for (let i = 0; i < 9; i++) {
      const st = new THREE.Mesh(new THREE.BoxGeometry(rand(.5, .9), rand(.7, 1.4), .22), stoneMat)
      st.position.set(cx - 19 + i * 4.4, .7, cz + 18 + rand(-1, 1)); st.rotation.y = rand(-.2, .2); st.castShadow = true; group.add(st)
    }
    landmarks.church = { x: cx, z: cz, door: { x: cx, z: cz - 17 - tw / 2 - .6 }, name: 'San Michele Church' }
  }

  function buildPark(cx, cz) {
    const grass = new THREE.Mesh(new THREE.BoxGeometry(CITY.BLOCK - 2, .18, CITY.BLOCK - 2), new THREE.MeshStandardMaterial({ color: 0x1f2a1d, roughness: 1 }))
    grass.position.set(cx, .2, cz); grass.receiveShadow = true; group.add(grass)
    // paths
    const pathMat = new THREE.MeshStandardMaterial({ color: 0x3a3632, roughness: .95 })
    let path = new THREE.Mesh(new THREE.BoxGeometry(CITY.BLOCK - 2, .04, 4), pathMat); path.position.set(cx, .31, cz); group.add(path)
    path = new THREE.Mesh(new THREE.BoxGeometry(4, .04, CITY.BLOCK - 2), pathMat); path.position.set(cx, .31, cz); group.add(path)
    // fountain
    const basin = new THREE.Mesh(new THREE.CylinderGeometry(4.2, 4.5, .8, 24), stoneMat); basin.position.set(cx, .6, cz); group.add(basin)
    const water = new THREE.Mesh(new THREE.CylinderGeometry(3.8, 3.8, .2, 24), new THREE.MeshStandardMaterial({ color: 0x16303a, roughness: .1, metalness: .8, emissive: 0x0a1a22 })); water.position.set(cx, 1, cz); group.add(water)
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(.35, .5, 2.4, 10), stoneMat); stem.position.set(cx, 1.8, cz); group.add(stem)
    const top = new THREE.Mesh(new THREE.CylinderGeometry(1.4, .5, .4, 14), stoneMat); top.position.set(cx, 3.1, cz); group.add(top)
    // trees
    const trunkGeo = new THREE.CylinderGeometry(.18, .3, 3.4, 6)
    const canopyGeo = new THREE.IcosahedronGeometry(2.3, 1)
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x2b2119, roughness: 1 })
    const leafMat = new THREE.MeshStandardMaterial({ color: 0x1c2e20, roughness: 1 })
    const positions = []
    for (let k = 0; k < 26; k++) {
      const x = cx + rand(-22, 22), z = cz + rand(-22, 22)
      if (Math.abs(x - cx) < 6 || Math.abs(z - cz) < 6) continue
      positions.push([x, z])
    }
    const trunks = new THREE.InstancedMesh(trunkGeo, trunkMat, positions.length)
    const canopies = new THREE.InstancedMesh(canopyGeo, leafMat, positions.length)
    positions.forEach(([x, z], k) => {
      m4.makeTranslation(x, 1.9, z); trunks.setMatrixAt(k, m4)
      const s = rand(.75, 1.25)
      m4.compose(new THREE.Vector3(x, 4.1, z), new THREE.Quaternion(), new THREE.Vector3(s, s * rand(.9, 1.2), s))
      canopies.setMatrixAt(k, m4)
    })
    trunks.castShadow = true; canopies.castShadow = true
    group.add(trunks, canopies)
    // benches
    for (let k = 0; k < 6; k++) {
      const a = k / 6 * TAU
      const bx = cx + Math.cos(a) * 9, bz = cz + Math.sin(a) * 9
      const bench = new THREE.Group()
      const seat = new THREE.Mesh(new THREE.BoxGeometry(2.2, .14, .6), new THREE.MeshStandardMaterial({ color: 0x4a3523, roughness: .9 }))
      seat.position.y = .65; bench.add(seat)
      const back = new THREE.Mesh(new THREE.BoxGeometry(2.2, .6, .12), new THREE.MeshStandardMaterial({ color: 0x4a3523, roughness: .9 }))
      back.position.set(0, .95, -.26); bench.add(back)
      for (const s of [-1, 1]) { const leg = new THREE.Mesh(new THREE.BoxGeometry(.12, .65, .55), darkMetal); leg.position.set(s * .9, .33, 0); bench.add(leg) }
      bench.position.set(bx, .25, bz); bench.rotation.y = -a; group.add(bench)
    }
    const l = new THREE.PointLight(0xffb573, 18, 24, 2); l.position.set(cx, 5, cz); group.add(l)
  }

  function buildDocks(cx, cz, type) {
    if (type === 'yard') {
      // open container yard
      const yard = new THREE.Mesh(new THREE.BoxGeometry(CITY.BLOCK - 2, .1, CITY.BLOCK - 2), new THREE.MeshStandardMaterial({ color: 0x2a2b2e, roughness: .95 }))
      yard.position.set(cx, .2, cz); group.add(yard)
      const colors = [0x5a2b22, 0x25414a, 0x4a4423, 0x3a2c46]
      for (let i = 0; i < 9; i++) {
        const w = rand(6, 10), d = rand(2.5, 3), h = rand(2.4, 3)
        const x = cx + rand(-18, 18), z = cz + rand(-18, 18)
        const c = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshStandardMaterial({ color: choice(colors), roughness: .8, metalness: .3 }))
        c.position.set(x, h / 2 + .25, z); c.rotation.y = Math.random() < .5 ? 0 : Math.PI / 2; c.castShadow = true; group.add(c)
        addCollider(x, z, c.rotation.y ? d : w, c.rotation.y ? w : d, h)
      }
      return
    }
    const isA = type === 'warehouseA'
    const w = 40, d = 30, h = isA ? 12 : 10
    const wallTex = corrugatedTexture()
    const wallMat = new THREE.MeshStandardMaterial({ map: wallTex, color: isA ? 0x6b655c : 0x555f62, roughness: .8, metalness: .25 })
    const wh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), wallMat)
    wh.position.set(cx, h / 2 + .2, cz); wh.castShadow = true; wh.receiveShadow = true; group.add(wh)
    addCollider(cx, cz, w, d, h)
    // roof
    const roof = new THREE.Mesh(new THREE.BoxGeometry(w + 1, .4, d + 1), new THREE.MeshStandardMaterial({ color: 0x30343a, roughness: .8, metalness: .4 }))
    roof.position.set(cx, h + .4, cz); group.add(roof)
    // big doors facing north
    for (let k = -1; k <= 1; k++) {
      const door = new THREE.Mesh(new THREE.PlaneGeometry(6, 6.5), new THREE.MeshStandardMaterial({ color: 0x2b2e33, roughness: .7, metalness: .5 }))
      door.position.set(cx + k * 9, 3.4, cz - d / 2 - .03); door.rotation.y = Math.PI; group.add(door)
      const strip = new THREE.Mesh(new THREE.PlaneGeometry(6, .18), new THREE.MeshBasicMaterial({ color: 0xd6b26a, toneMapped: false }))
      strip.position.set(cx + k * 9, 6.8, cz - d / 2 - .05); strip.rotation.y = Math.PI; group.add(strip)
    }
    // signage
    addNeon(isA ? 'MORETTI FREIGHT' : 'PIER 9', cx, h - 1.6, cz - d / 2 - .1, Math.PI, false, '#e8c37f', .9)
    // crates
    for (let i = 0; i < 8; i++) {
      const cw = rand(1.4, 2.2)
      const c = new THREE.Mesh(new THREE.BoxGeometry(cw, cw, cw), new THREE.MeshStandardMaterial({ color: 0x4a3826, roughness: .95 }))
      c.position.set(cx + rand(-w / 2 + 2, w / 2 - 2), cw / 2 + .3, cz - d / 2 - rand(2, 7)); c.castShadow = true; group.add(c)
    }
    if (isA) landmarks.docks = { x: cx, z: cz, door: { x: cx, z: cz - d / 2 - 3 }, name: 'Moretti Freight Pier' }
  }

  function buildParking(cx, cz) {
    const lot = new THREE.Mesh(new THREE.BoxGeometry(CITY.BLOCK - 2, .1, CITY.BLOCK - 2), new THREE.MeshStandardMaterial({ color: 0x1d1e23, roughness: .95 }))
    lot.position.set(cx, .2, cz); group.add(lot)
    const lineGeos = []
    for (let i = -2; i <= 2; i++) {
      const g = new THREE.PlaneGeometry(.12, 8); g.rotateX(-Math.PI / 2); g.translate(cx + i * 5, .27, cz + 8); lineGeos.push(g)
    }
    group.add(new THREE.Mesh(mergeGeometries(lineGeos), new THREE.MeshBasicMaterial({ color: 0x8e8466, transparent: true, opacity: .4 })))
  }

  function corrugatedTexture() {
    const { c, ctx } = makeCanvas(128, 128)
    ctx.fillStyle = '#8a857c'; ctx.fillRect(0, 0, 128, 128)
    for (let x = 0; x < 128; x += 8) {
      ctx.fillStyle = 'rgba(255,255,255,.08)'; ctx.fillRect(x, 0, 2, 128)
      ctx.fillStyle = 'rgba(0,0,0,.18)'; ctx.fillRect(x + 4, 0, 2, 128)
    }
    for (let i = 0; i < 300; i++) { ctx.fillStyle = `rgba(40,25,15,${rand(.02, .12)})`; ctx.fillRect(rand(0, 128), rand(0, 128), rand(1, 6), rand(1, 8)) }
    return canvasTexture(c, 4, 2)
  }

  function buildHarbor() {
    // promenade
    const prom = new THREE.Mesh(new THREE.BoxGeometry(360, .5, 18), new THREE.MeshStandardMaterial({ color: 0x2c2b2d, roughness: .9 }))
    prom.position.set(0, .05, 179); prom.receiveShadow = true; group.add(prom)
    // quay wall
    const wall = new THREE.Mesh(new THREE.BoxGeometry(380, 2.6, 2), new THREE.MeshStandardMaterial({ color: 0x35322c, roughness: .95 }))
    wall.position.set(0, -.9, 188); group.add(wall)
    // railing
    const posts = [], rails = []
    for (let x = -175; x <= 175; x += 6) {
      const p = new THREE.CylinderGeometry(.05, .05, 1.1, 5); p.translate(x, .8, 186.6); posts.push(p)
    }
    for (const y of [.65, 1.2]) { const r = new THREE.BoxGeometry(352, .06, .06); r.translate(0, y, 186.6); rails.push(r) }
    group.add(new THREE.Mesh(mergeGeometries([...posts, ...rails]), darkMetal))
    // water
    const waterTex = waterNormalTexture()
    const waterMat = new THREE.MeshStandardMaterial({ color: 0x07131c, roughness: .16, metalness: .9, envMapIntensity: 1.6, bumpMap: waterTex, bumpScale: .35 })
    const water = new THREE.Mesh(new THREE.PlaneGeometry(760, 300, 40, 40), waterMat)
    water.rotation.x = -Math.PI / 2; water.position.set(0, -.55, 338); group.add(water)
    waterMesh = water
    updateFns.push((dt) => { waterTex.offset.x += dt * .012; waterTex.offset.y += dt * .006 })
    // piers
    for (const px of [-46, 44]) {
      const pier = new THREE.Mesh(new THREE.BoxGeometry(10, .5, 46), new THREE.MeshStandardMaterial({ color: 0x3b2d20, roughness: .95 }))
      pier.position.set(px, .1, 208); pier.receiveShadow = true; group.add(pier)
      for (let z = 190; z < 230; z += 4) {
        const b = new THREE.Mesh(new THREE.BoxGeometry(10.2, .16, .3), new THREE.MeshStandardMaterial({ color: 0x241a12, roughness: 1 }))
        b.position.set(px, .37, z); group.add(b)
      }
      // bollards
      for (const z of [192, 204, 216, 228]) {
        for (const s of [-1, 1]) {
          const bol = new THREE.Mesh(new THREE.CylinderGeometry(.22, .28, .8, 8), darkMetal)
          bol.position.set(px + s * 4.6, .55, z); group.add(bol)
        }
      }
    }
    // boats
    for (const [bx, bz, rot, color] of [[-46, 236, 0, 0x3c241c], [44, 240, 0, 0x1f3439], [12, 220, Math.PI / 2, 0x2b2f3a]]) {
      const boat = new THREE.Group()
      const hull = new THREE.Mesh(new THREE.BoxGeometry(3.4, 1.5, 9), new THREE.MeshStandardMaterial({ color, roughness: .6, metalness: .2 }))
      hull.position.y = .2; boat.add(hull)
      const bow = new THREE.Mesh(new THREE.ConeGeometry(2.2, 3, 4), new THREE.MeshStandardMaterial({ color, roughness: .6 }))
      bow.rotation.x = Math.PI / 2; bow.rotation.y = Math.PI / 4; bow.position.set(0, .2, -5.8); boat.add(bow)
      const cab = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.6, 2.6), new THREE.MeshStandardMaterial({ color: 0x3e3a33, roughness: .8 }))
      cab.position.set(0, 1.6, 1.6); boat.add(cab)
      const light = new THREE.Mesh(new THREE.SphereGeometry(.16, 6, 4), new THREE.MeshBasicMaterial({ color: 0xffd9a0, toneMapped: false }))
      light.position.set(0, 2.5, .4); boat.add(light)
      boat.position.set(bx, .3, bz); boat.rotation.y = rot; group.add(boat)
    }
    // cranes
    for (const [cx, cz] of [[-92, 202], [96, 206]]) {
      const crane = new THREE.Group()
      const base = new THREE.Mesh(new THREE.BoxGeometry(3, 1.4, 3), darkMetal); base.position.y = .8; crane.add(base)
      const tower = new THREE.Mesh(new THREE.BoxGeometry(1.2, 24, 1.2), new THREE.MeshStandardMaterial({ color: 0x6b4c22, roughness: .8, metalness: .5 })); tower.position.y = 12; crane.add(tower)
      const arm = new THREE.Mesh(new THREE.BoxGeometry(22, .7, .7), new THREE.MeshStandardMaterial({ color: 0x6b4c22, roughness: .8, metalness: .5 })); arm.position.set(7, 24, 0); crane.add(arm)
      const cable = new THREE.Mesh(new THREE.CylinderGeometry(.03, .03, 8, 4), darkMetal); cable.position.set(16, 20, 0); crane.add(cable)
      const hook = new THREE.Mesh(new THREE.BoxGeometry(1.4, 1, 1.4), darkMetal); hook.position.set(16, 15.8, 0); crane.add(hook)
      const warn = new THREE.Mesh(new THREE.SphereGeometry(.22, 6, 4), new THREE.MeshBasicMaterial({ color: 0xd5483c, toneMapped: false })); warn.position.set(0, 24.8, 0); crane.add(warn)
      crane.position.set(cx, 0, cz); group.add(crane)
    }
    // bollards + lamps along promenade
    for (let x = -150; x <= 150; x += 25) {
      const lamp = new THREE.Mesh(new THREE.CylinderGeometry(.07, .1, 4.4, 5), darkMetal)
      lamp.position.set(x, 2.3, 181); group.add(lamp)
      const bulb = new THREE.Mesh(new THREE.SphereGeometry(.17, 6, 4), new THREE.MeshBasicMaterial({ color: 0xffd9a0, toneMapped: false }))
      bulb.position.set(x, 4.55, 181); group.add(bulb)
    }
  }

  function buildSkyline() {
    const mats = facadeMats
    for (let i = 0; i < 48; i++) {
      const a = i / 48 * TAU
      const r = rand(235, 320)
      const x = Math.cos(a) * r, z = Math.sin(a) * r * .9
      if (z > 190) continue
      const w = rand(14, 34), d = rand(14, 34), h = rand(18, 64)
      const geo = new THREE.BoxGeometry(w, h, d)
      scaleBoxUVs(geo, w, h, d)
      const m = new THREE.Mesh(geo, mats[Math.floor(rand(0, 8))])
      m.position.set(x, h / 2, z); m.rotation.y = rand(0, TAU); group.add(m)
    }
    // bridge silhouette to the south
    const bridge = new THREE.Group()
    const deck = new THREE.Mesh(new THREE.BoxGeometry(360, 2, 7), darkMetal); deck.position.set(0, 12, 0); bridge.add(deck)
    for (const tx of [-64, 64]) {
      const tower = new THREE.Mesh(new THREE.BoxGeometry(3, 58, 3), new THREE.MeshStandardMaterial({ color: 0x3a3027, roughness: .9 })); tower.position.set(tx, 29, 0); bridge.add(tower)
      const cross = new THREE.Mesh(new THREE.BoxGeometry(3, 2, 8), darkMetal); cross.position.set(tx, 46, 0); bridge.add(cross)
    }
    const cableMat = new THREE.LineBasicMaterial({ color: 0x8a6a3c, transparent: true, opacity: .5 })
    for (let k = -6; k <= 6; k++) {
      const x = k * 26
      const pts = [new THREE.Vector3(x, 13, 0), new THREE.Vector3(x * .55, 44 - Math.abs(k) * 2.6, 0)]
      bridge.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), cableMat))
    }
    bridge.position.set(0, 0, 300)
    group.add(bridge)
    // bridge lights
    const lp = []
    for (let x = -170; x <= 170; x += 12) lp.push(x, 14, 300)
    const bg = new THREE.BufferGeometry(); bg.setAttribute('position', new THREE.Float32BufferAttribute(lp, 3))
    group.add(new THREE.Points(bg, new THREE.PointsMaterial({ map: glowTex, color: 0xffc77a, size: 2.4, transparent: true, opacity: .8, blending: THREE.AdditiveBlending, depthWrite: false })))
  }

  // props: hydrants, bins, crates, benches
  function addProps() {
    const hydrantMat = new THREE.MeshStandardMaterial({ color: 0x7d2a22, roughness: .7, metalness: .2 })
    const binMat = new THREE.MeshStandardMaterial({ color: 0x2a2f2c, roughness: .9, metalness: .3 })
    const crateMat = new THREE.MeshStandardMaterial({ color: 0x4a3826, roughness: .95 })
    const R = seeded(4242)
    for (let n = 0; n < 44; n++) {
      const bi = randInt(0, 4), bj = randInt(0, 4)
      if (SPECIAL[`${bi},${bj}`]) continue
      const cx = CITY.centers[bi], cz = CITY.centers[bj]
      const side = randInt(0, 3)
      const t = rand(-22, 22)
      let x, z
      if (side === 0) { x = cx + t; z = cz - 24 }
      else if (side === 1) { x = cx + t; z = cz + 24 }
      else if (side === 2) { x = cx - 24; z = cz + t }
      else { x = cx + 24; z = cz + t }
      const kind = R()
      if (kind < .3) {
        const g = new THREE.Group()
        const b = new THREE.Mesh(new THREE.CylinderGeometry(.28, .34, .8, 8), hydrantMat); b.position.y = .55; g.add(b)
        const cap = new THREE.Mesh(new THREE.SphereGeometry(.28, 8, 6), hydrantMat); cap.position.y = 1; g.add(cap)
        const arm = new THREE.Mesh(new THREE.BoxGeometry(.8, .16, .16), hydrantMat); arm.position.y = .7; g.add(arm)
        g.position.set(x, 0, z); group.add(g)
      } else if (kind < .6) {
        const bin = new THREE.Mesh(new THREE.CylinderGeometry(.32, .28, .9, 8), binMat); bin.position.set(x, .7, z); bin.castShadow = true; group.add(bin)
      } else if (kind < .82) {
        const c = new THREE.Mesh(new THREE.BoxGeometry(.7, .7, .7), crateMat); c.position.set(x, .55, z); c.rotation.y = rand(0, 1); c.castShadow = true; group.add(c)
      } else {
        const bench = new THREE.Group()
        const seat = new THREE.Mesh(new THREE.BoxGeometry(2, .12, .55), crateMat); seat.position.y = .62; bench.add(seat)
        for (const s of [-1, 1]) { const leg = new THREE.Mesh(new THREE.BoxGeometry(.1, .6, .5), darkMetal); leg.position.set(s * .8, .3, 0); bench.add(leg) }
        bench.position.set(x, 0, z); bench.rotation.y = rand(0, TAU); group.add(bench)
      }
    }
  }
  addProps()

  // ---------- landmarks anchors ----------
  if (!landmarks.club) landmarks.club = { x: 0, z: -68, door: { x: 0, z: -52 } }
  if (!landmarks.butcher) landmarks.butcher = { x: -136, z: 0, door: { x: -114, z: 0 } }
  if (!landmarks.church) landmarks.church = { x: -68, z: 68, door: { x: -68, z: 46.5 } }
  if (!landmarks.docks) landmarks.docks = { x: 0, z: 136, door: { x: 0, z: 118 } }
  landmarks.tailStart = { x: 100, z: 0 }
  landmarks.tailEnd = { x: -100, z: 100 }
  landmarks.parking = { x: 136, z: -136 }

  // ---------- collisions helpers ----------
  function collideCircle(x, z, radius) {
    for (const c of colliders) {
      if (x + radius > c.minX && x - radius < c.maxX && z + radius > c.minZ && z - radius < c.maxZ) return c
    }
    return null
  }
  function resolveCircle(pos, radius) {
    let hit = null
    for (const c of colliders) {
      if (pos.x + radius > c.minX && pos.x - radius < c.maxX && pos.z + radius > c.minZ && pos.z - radius < c.maxZ) {
        const dxL = pos.x + radius - c.minX, dxR = c.maxX - (pos.x - radius)
        const dzT = pos.z + radius - c.minZ, dzB = c.maxZ - (pos.z - radius)
        const m = Math.min(dxL, dxR, dzT, dzB)
        if (m === dxL) pos.x = c.minX - radius
        else if (m === dxR) pos.x = c.maxX + radius
        else if (m === dzT) pos.z = c.minZ - radius
        else pos.z = c.maxZ + radius
        hit = c
      }
    }
    return hit
  }
  function isOnRoad(x, z, pad = 0) {
    for (const r of CITY.roads) {
      if (Math.abs(x - r) < CITY.ROAD / 2 + pad || Math.abs(z - r) < CITY.ROAD / 2 + pad) return true
    }
    return false
  }

  return {
    group, colliders, landmarks, mapBlocks, roads: CITY.roads, centers: CITY.centers,
    sky, moonGlow, stars, water: waterMesh, neon,
    update(dt, t) { for (const f of updateFns) f(dt, t) },
    collideCircle, resolveCircle, isOnRoad,
    bounds: { min: -CITY.HALF + 2, max: CITY.HALF - 2 }
  }
}

function waterNormalTexture() {
  const { c, ctx } = makeCanvas(256, 256)
  ctx.fillStyle = '#8080ff'; ctx.fillRect(0, 0, 256, 256)
  for (let i = 0; i < 500; i++) {
    const x = Math.random() * 256, y = Math.random() * 256, w = rand(10, 60), h = rand(1, 4)
    const g = ctx.createLinearGradient(x, y, x + w, y)
    g.addColorStop(0, 'rgba(128,128,255,1)'); g.addColorStop(.5, `rgba(${randInt(90, 170)},${randInt(90, 170)},255,1)`); g.addColorStop(1, 'rgba(128,128,255,1)')
    ctx.fillStyle = g; ctx.fillRect(x, y, w, h)
  }
  const t = new THREE.CanvasTexture(c)
  t.wrapS = t.wrapT = THREE.RepeatWrapping
  t.repeat.set(8, 4)
  return t
}

function seeded(seed) {
  let s = seed >>> 0
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296 }
}
