import * as THREE from '../vendor/three.module.js';
import { mergeGeometries } from '../vendor/BufferGeometryUtils.js';

/* ------------------------------------------------------------------ */
/*  PORT VESUVIO — procedural city, traffic, citizens, props           */
/* ------------------------------------------------------------------ */

export const CITY = { grid: 7, pitch: 96, block: 76, road: 20, half: 336, edge: 378 };

export const DISTRICTS = [
  { id: 'little-italy', name: 'Little Italy', short: 'L. ITALY', color: '#b8453a', x: -192, z: -168, style: 'stucco', rival: 'The Falcone Crew', blurb: 'Family bakeries, old debts and older grudges.', rackets: ['Nonna’s Bakery', 'The Red Door Club'] },
  { id: 'old-quarter', name: 'Old Quarter', short: 'OLD QTR', color: '#b08a3e', x: 0, z: -168, style: 'brick', rival: 'The Marchetti Syndicate', blurb: 'Cobbled alleys where every wall has heard a secret.', rackets: ['Casa del Caffè', 'San Marco Pawn'] },
  { id: 'eastgate', name: 'Eastgate', short: 'EASTGATE', color: '#5d7f9e', x: 192, z: -168, style: 'concrete', rival: 'The Vipers', blurb: 'Brutalist towers, cheap muscle and fast money.', rackets: ['Eastgate Auto Body', 'The Blue Note'] },
  { id: 'docks', name: 'The Docks', short: 'DOCKS', color: '#4c6b62', x: -192, z: 168, style: 'industrial', rival: 'Doyle’s Dockers', blurb: 'Whatever the customs men miss, the family moves.', rackets: ['Pier 9 Warehouse', 'Customs & Cargo'] },
  { id: 'downtown', name: 'Downtown', short: 'DOWNTOWN', color: '#8b5e83', x: 0, z: 168, style: 'glass', rival: 'The Bianchi Family', blurb: 'Bright lights, dirty ledgers, the city’s beating heart.', rackets: ['Vesuvio Grand Casino', 'The Continental Hotel'] },
  { id: 'heights', name: 'The Heights', short: 'HEIGHTS', color: '#7b8f4b', x: 192, z: 168, style: 'deco', rival: 'The Serpents', blurb: 'Old money above, hungry wolves below.', rackets: ['Palm Court Pharmacy', 'The Ivory Rooms'] },
];

const STYLE = {
  brick:      { base: '#7d4639', trim: '#2a2222', roof: '#292628', glass: '#1b2630', lit: '#ffbd73', ac: 0.24 },
  stucco:     { base: '#b08760', trim: '#33291f', roof: '#2b2928', glass: '#202b34', lit: '#ffc780', ac: 0.3 },
  concrete:   { base: '#7a7f86', trim: '#25282c', roof: '#2b2e31', glass: '#1c2b38', lit: '#ffd28f', ac: 0.4 },
  glass:      { base: '#405a6c', trim: '#1c2228', roof: '#242a30', glass: '#182a38', lit: '#ffdba4', ac: 0.5 },
  industrial: { base: '#59615b', trim: '#202321', roof: '#242725', glass: '#18262a', lit: '#ffbb6d', ac: 0.2 },
  deco:       { base: '#a99574', trim: '#2d2922', roof: '#2c2a26', glass: '#1d2731', lit: '#ffcf8a', ac: 0.34 },
};

const NEON = ['#ff4f7a', '#ffb84d', '#4de0d0', '#ff6b3d', '#b07bff', '#ffe079'];
const SIGN_NAMES = ['HOTEL', 'BAR', 'CAFÉ', 'PAWN', 'LIQUOR', 'JAZZ', 'CIGARS', 'DINER', 'MOTEL', 'GARAGE'];
const CAR_COLORS = ['#a63232', '#2f4f6e', '#c7b48b', '#28312c', '#6d2c3f', '#b8b9b2', '#59412f', '#3c6b68'];
const OUTFITS = [
  ['#272a30', '#3c3f47', '#14161a'], ['#5c4a3a', '#7a654f', '#2a211a'],
  ['#384a58', '#4f6574', '#1b242b'], ['#6b3038', '#844650', '#2b1519'],
  ['#3f4636', '#586046', '#20241a'], ['#5d566c', '#736c84', '#282430'],
];
const SKINS = ['#d5a17d', '#b97e5a', '#8d6045', '#e0b491', '#6f4a36'];
const HAT_COLORS = ['#1b1c20', '#332a24', '#2a2d36', '#4b3c2b'];

/* -------------------------------- utils -------------------------------- */

export function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const randOf = (rng, arr) => arr[Math.floor(rng() * arr.length) % arr.length];
const clampNum = (v, a, b) => Math.max(a, Math.min(b, v));

function colored(geo, hex) {
  const c = new THREE.Color(hex);
  const n = geo.attributes.position.count;
  const a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { a[i * 3] = c.r; a[i * 3 + 1] = c.g; a[i * 3 + 2] = c.b; }
  geo.setAttribute('color', new THREE.BufferAttribute(a, 3));
  return geo;
}

function box(w, h, d, x, y, z, color, rx = 0, ry = 0, rz = 0) {
  const g = new THREE.BoxGeometry(w, h, d);
  if (rx || ry || rz) {
    if (rx) g.rotateX(rx);
    if (ry) g.rotateY(ry);
    if (rz) g.rotateZ(rz);
  }
  g.translate(x, y, z);
  return color ? colored(g, color) : g;
}

function cyl(rt, rb, h, seg, x, y, z, color, rx = 0, ry = 0, rz = 0) {
  const g = new THREE.CylinderGeometry(rt, rb, h, seg);
  if (rx) g.rotateX(rx);
  if (ry) g.rotateY(ry);
  if (rz) g.rotateZ(rz);
  g.translate(x, y, z);
  return colored(g, color);
}

/* --------------------------- texture factories -------------------------- */

function canvasTex(w, h, draw, srgb = true) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const ctx = c.getContext('2d');
  draw(ctx, w, h);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

function facadeTextures(style, seed) {
  const rng = mulberry32(seed * 7717 + 13);
  const s = STYLE[style];
  const map = canvasTex(256, 256, (ctx, w, h) => {
    ctx.fillStyle = s.base; ctx.fillRect(0, 0, w, h);
    // masonry / concrete texture
    for (let i = 0; i < 180; i++) {
      ctx.fillStyle = `rgba(0,0,0,${0.02 + rng() * 0.07})`;
      ctx.fillRect(rng() * w, rng() * h, 2 + rng() * 14, 1 + rng() * 7);
    }
    ctx.fillStyle = 'rgba(0,0,0,.16)';
    for (let f = 0; f < 4; f++) ctx.fillRect(0, f * 64 + 51, w, 4);
    ctx.fillStyle = s.trim;
    ctx.fillRect(0, 246, w, 10);
    for (let f = 0; f < 4; f++) {
      for (let b = 0; b < 4; b++) {
        const x = 20 + b * 58, y = 17 + f * 64;
        const lit = rng() < s.ac * 1.15;
        ctx.fillStyle = '#0b0e12'; ctx.fillRect(x - 4, y - 4, 44, 30);
        ctx.fillStyle = lit ? s.lit : s.glass;
        ctx.globalAlpha = lit ? 0.92 : 0.78;
        ctx.fillRect(x, y, 36, 22);
        ctx.globalAlpha = 1;
        ctx.fillStyle = 'rgba(255,255,255,.1)'; ctx.fillRect(x + 2, y + 2, 12, 3);
        ctx.fillStyle = 'rgba(0,0,0,.35)'; ctx.fillRect(x + 17, y, 2, 22);
      }
    }
  });
  const emissiveMap = canvasTex(256, 256, (ctx, w, h) => {
    ctx.fillStyle = '#000'; ctx.fillRect(0, 0, w, h);
    const rng2 = mulberry32(seed * 991 + 3);
    for (let f = 0; f < 4; f++) {
      for (let b = 0; b < 4; b++) {
        if (rng2() < s.ac) {
          const x = 20 + b * 58, y = 17 + f * 64;
          const g = ctx.createLinearGradient(x, y, x, y + 22);
          g.addColorStop(0, s.lit); g.addColorStop(1, '#7d4a1c');
          ctx.fillStyle = g; ctx.fillRect(x, y, 36, 22);
        }
      }
    }
  });
  return { map, emissiveMap };
}

function signTexture(text, color, sub = '') {
  return canvasTex(512, 160, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(5,5,8,.72)';
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = color; ctx.lineWidth = 5;
    ctx.strokeRect(9, 9, w - 18, h - 18);
    ctx.font = '900 70px Cinzel, Georgia, serif';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.shadowColor = color; ctx.shadowBlur = 26;
    ctx.fillStyle = color; ctx.fillText(text, w / 2, sub ? 66 : h / 2 + 3);
    if (sub) {
      ctx.shadowBlur = 10; ctx.font = '600 30px "Barlow Condensed", sans-serif';
      ctx.fillStyle = '#f4e9d0'; ctx.fillText(sub, w / 2, 120);
    }
  });
}

function glowTexture() {
  return canvasTex(128, 128, (ctx, w, h) => {
    const g = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.18, 'rgba(255,236,190,.8)');
    g.addColorStop(0.5, 'rgba(255,190,100,.2)');
    g.addColorStop(1, 'rgba(255,160,60,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
  }, false);
}

function shadowTexture() {
  return canvasTex(128, 128, (ctx, w, h) => {
    const g = ctx.createRadialGradient(w / 2, h / 2, 2, w / 2, h / 2, w / 2);
    g.addColorStop(0, 'rgba(0,0,0,.62)');
    g.addColorStop(0.55, 'rgba(0,0,0,.26)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
  }, false);
}

function asphaltTexture() {
  const t = canvasTex(256, 256, (ctx, w, h) => {
    ctx.fillStyle = '#4a4c55'; ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 3200; i++) {
      const v = Math.random();
      ctx.fillStyle = v > 0.5 ? `rgba(225,220,205,${0.02 + Math.random() * 0.06})` : `rgba(0,0,0,${0.02 + Math.random() * 0.1})`;
      ctx.fillRect(Math.random() * w, Math.random() * h, 1 + Math.random() * 2.4, 1 + Math.random() * 2.4);
    }
    ctx.strokeStyle = 'rgba(0,0,0,.2)'; ctx.lineWidth = 1;
    for (let i = 0; i < 5; i++) {
      ctx.beginPath(); ctx.moveTo(Math.random() * w, Math.random() * h);
      for (let s = 0; s < 4; s++) ctx.lineTo(Math.random() * w, Math.random() * h);
      ctx.stroke();
    }
    // faded tar seams
    ctx.strokeStyle = 'rgba(15,14,18,.3)'; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(0, 42); ctx.bezierCurveTo(70, 38, 150, 52, 256, 44); ctx.stroke();
  });
  t.repeat.set(90, 90);
  return t;
}

function pavementTexture() {
  const t = canvasTex(256, 256, (ctx, w, h) => {
    ctx.fillStyle = '#a39d92'; ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 1500; i++) {
      ctx.fillStyle = Math.random() > 0.5 ? 'rgba(255,255,255,.045)' : 'rgba(0,0,0,.05)';
      ctx.fillRect(Math.random() * w, Math.random() * h, 1 + Math.random() * 3, 1 + Math.random() * 3);
    }
    ctx.strokeStyle = 'rgba(40,37,33,.32)'; ctx.lineWidth = 2;
    for (let i = 0; i <= 4; i++) {
      ctx.beginPath(); ctx.moveTo(i * 64, 0); ctx.lineTo(i * 64, h); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, i * 64); ctx.lineTo(w, i * 64); ctx.stroke();
    }
    ctx.strokeStyle = 'rgba(20,18,16,.22)'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(0, 126); ctx.lineTo(52, 128); ctx.lineTo(96, 150); ctx.stroke();
  });
  t.repeat.set(7, 7);
  return t;
}

/* ------------------------------ model builders --------------------------- */

function carGeometry() {
  const body = mergeGeometries([
    box(4.35, 0.62, 1.98, 0, 0.74, 0),
    box(1.15, 0.24, 1.82, 0, 1.06, 1.44),
    box(0.9, 0.2, 1.82, 0, 1.06, -1.52),
    box(2.25, 0.5, 1.86, 0, 1.3, -0.16),
    box(1.98, 0.12, 1.7, 0, 1.56, -0.16),
    box(0.16, 0.5, 1.95, -2.1, 0.74, 0),
    box(0.16, 0.5, 1.95, 2.1, 0.74, 0),
  ]);
  const glass = mergeGeometries([
    box(2.12, 0.37, 1.72, 0, 1.34, -0.12),
    box(2.18, 0.3, 1.58, 0, 1.37, -0.1),
  ]);
  const wheels = mergeGeometries([
    cyl(0.35, 0.35, 0.28, 10, -0.97, 0.37, 1.33, '#0c0d0f', 0, 0, Math.PI / 2),
    cyl(0.35, 0.35, 0.28, 10, 0.97, 0.37, 1.33, '#0c0d0f', 0, 0, Math.PI / 2),
    cyl(0.35, 0.35, 0.28, 10, -0.97, 0.37, -1.33, '#0c0d0f', 0, 0, Math.PI / 2),
    cyl(0.35, 0.35, 0.28, 10, 0.97, 0.37, -1.33, '#0c0d0f', 0, 0, Math.PI / 2),
  ]);
  return { body, glass, wheels };
}

function personGeometry(outfit, skin, hat) {
  const body = mergeGeometries([
    box(0.72, 0.92, 0.4, 0, 1.28, 0, outfit[0]),
    box(0.78, 0.3, 0.46, 0, 0.83, 0, outfit[0]),
    box(0.18, 0.82, 0.2, -0.45, 1.26, 0, outfit[1], 0, 0, 0.06),
    box(0.18, 0.82, 0.2, 0.45, 1.26, 0, outfit[1], 0, 0, -0.06),
    sphereColored(0.23, skin, 0, 1.89, 0),
    cyl(0.36, 0.36, 0.05, 14, 0, 2.09, 0, hat),
    cyl(0.24, 0.27, 0.22, 12, 0, 2.2, 0, hat),
    box(0.08, 0.06, 0.05, 0, 1.87, 0.22, skin),
  ]);
  const legL = mergeGeometries([
    box(0.24, 0.68, 0.26, -0.17, 0.36, 0, outfit[2]),
    box(0.27, 0.2, 0.38, -0.17, 0.1, 0.06, '#141416'),
  ]);
  const legR = mergeGeometries([
    box(0.24, 0.68, 0.26, 0.17, 0.36, 0, outfit[2]),
    box(0.27, 0.2, 0.38, 0.17, 0.1, 0.06, '#141416'),
  ]);
  return { body, legL, legR };
}

function sphereColored(radius, color, x, y, z) {
  const g = new THREE.SphereGeometry(radius, 12, 10);
  g.translate(x, y, z);
  return colored(g, color);
}

function scaleUV(geo, su, sv) {
  const uv = geo.attributes.uv;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * su, uv.getY(i) * sv);
  uv.needsUpdate = true;
  return geo;
}

/* ================================= WORLD ================================= */

export class World {
  constructor(scene, renderer) {
    this.scene = scene;
    this.renderer = renderer;
    this.rng = mulberry32(1979);
    this.colliders = [];
    this.blocks = [];
    this.blockBuildings = new Map();
    this.parkedCars = [];
    this.traffic = [];
    this.peds = [];
    this.markers = [];
    this.rackets = [];
    this.hqs = {};
    this.shadows = [];
    this.facadeMats = [];
    this.lampMats = [];
    this.time = 0;
    this.alertPoint = new THREE.Vector3();
    this.alertUntil = 0;
    this.buildAssets();
    this.buildShadowPool();
    this.buildSky();
    this.buildLights();
    this.buildGround();
    this.buildCity();
    this.buildRackets();
    this.buildTraffic();
    this.buildPeds();
    this.timeOfDay = 17.55;
    this.applyEnvironment();
  }

  /* ------------------------------- assets ------------------------------- */

  buildAssets() {
    const geo = carGeometry();
    this.carGeo = geo;
    this.carMats = {};
    for (const hex of CAR_COLORS) {
      this.carMats[hex] = new THREE.MeshStandardMaterial({ color: hex, roughness: 0.38, metalness: 0.5 });
    }
    this.glassMat = new THREE.MeshStandardMaterial({ color: '#0d141b', roughness: 0.15, metalness: 0.75 });
    this.wheelMat = new THREE.MeshStandardMaterial({ color: '#0b0c0e', roughness: 0.95 });
    this.headMat = new THREE.MeshBasicMaterial({ color: '#fff4cd', toneMapped: false });
    this.tailMat = new THREE.MeshBasicMaterial({ color: '#ff2d22', toneMapped: false });
    this.headGeo = mergeGeometries([
      box(0.42, 0.15, 0.06, -0.62, 0.82, 2.16),
      box(0.42, 0.15, 0.06, 0.62, 0.82, 2.16),
    ]);
    this.tailGeo = mergeGeometries([
      box(0.38, 0.14, 0.06, -0.64, 0.84, -2.16),
      box(0.38, 0.14, 0.06, 0.64, 0.84, -2.16),
    ]);
    this.personMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.78, metalness: 0.02 });
    this.personGeo = new Map();
    this.shadowTex = shadowTexture();
    this.shadowMat = new THREE.MeshBasicMaterial({ map: this.shadowTex, transparent: true, depthWrite: false, opacity: 0.75 });
    this.glowTex = glowTexture();
    this.markerGlowGeo = new THREE.TorusGeometry(2.9, 0.08, 6, 40);

    this.concreteMat = new THREE.MeshStandardMaterial({ color: '#8a867f', roughness: 0.94 });
    this.sidewalkTex = pavementTexture();
    this.sidewalkMat = new THREE.MeshStandardMaterial({ map: this.sidewalkTex, color: '#e8e3d8', roughness: 0.93 });
    this.asphaltTex = asphaltTexture();
    this.parkMat = new THREE.MeshStandardMaterial({ color: '#31452f', roughness: 1 });
    this.roofMat = new THREE.MeshStandardMaterial({ color: '#2b2b2d', roughness: 0.9 });
    this.trimMat = new THREE.MeshStandardMaterial({ color: '#1d1e20', roughness: 0.8 });
    this.metalMat = new THREE.MeshStandardMaterial({ color: '#383d41', roughness: 0.55, metalness: 0.6 });
    this.lampMat = new THREE.MeshStandardMaterial({ color: '#ffdca0', emissive: '#ffb45e', emissiveIntensity: 1.4, roughness: 0.4 });
    this.lampMats.push(this.lampMat);
    this.trunkMat = new THREE.MeshStandardMaterial({ color: '#3c2c20', roughness: 1 });
    this.leafMat = new THREE.MeshStandardMaterial({ color: '#2e4a31', roughness: 1, flatShading: true });
    this.laneMat = new THREE.MeshBasicMaterial({ color: '#c9bd9a', toneMapped: false });
    this.crossMat = new THREE.MeshBasicMaterial({ color: '#d5d0be', toneMapped: false });
    this.signBackMat = new THREE.MeshStandardMaterial({ color: '#111114', roughness: 0.7 });
  }

  facet(style, seed) {
    const tex = facadeTextures(style, seed);
    const s = STYLE[style];
    const mat = new THREE.MeshStandardMaterial({
      map: tex.map, emissiveMap: tex.emissiveMap, emissive: new THREE.Color('#ffb469'),
      emissiveIntensity: 0.25, roughness: style === 'glass' ? 0.3 : 0.82,
      metalness: style === 'glass' ? 0.5 : 0.08,
    });
    this.facadeMats.push(mat);
    return mat;
  }

  /* -------------------------------- sky --------------------------------- */

  buildSky() {
    const uniforms = {
      topColor: { value: new THREE.Color('#171a36') },
      horizonColor: { value: new THREE.Color('#b65c42') },
      bottomColor: { value: new THREE.Color('#241a22') },
      sunColor: { value: new THREE.Color('#ffc172') },
      sunDir: { value: new THREE.Vector3(0.4, 0.16, -0.9).normalize() },
      night: { value: 0.35 },
    };
    this.skyUniforms = uniforms;
    const mat = new THREE.ShaderMaterial({
      uniforms, side: THREE.BackSide, depthWrite: false,
      vertexShader: `varying vec3 vWorld; void main(){ vWorld = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: `
        uniform vec3 topColor, horizonColor, bottomColor, sunColor, sunDir;
        uniform float night;
        varying vec3 vWorld;
        float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
        void main(){
          vec3 d = normalize(vWorld);
          float h = d.y;
          vec3 col = mix(horizonColor, topColor, smoothstep(-0.02, 0.62, h));
          col = mix(bottomColor, col, smoothstep(-0.22, 0.0, h));
          float sun = pow(max(dot(d, sunDir), 0.0), 180.0);
          float glow = pow(max(dot(d, sunDir), 0.0), 6.0);
          col += sunColor * sun * 1.6 + sunColor * glow * 0.10;
          vec2 sp = floor(d.xz / max(0.006, 0.02 * (1.0 - max(h,0.0))) * 8.0);
          float star = step(0.9972, hash(sp)) * smoothstep(0.02, 0.3, h) * night;
          col += vec3(0.9, 0.92, 1.0) * star * 0.8;
          gl_FragColor = vec4(col, 1.0);
        }`,
    });
    this.sky = new THREE.Mesh(new THREE.SphereGeometry(900, 32, 20), mat);
    this.sky.frustumCulled = false;
    this.scene.add(this.sky);
    this.scene.fog = new THREE.FogExp2(0x5a3f3c, 0.00115);

    // Soft sky reflection for paint, glass and wet asphalt.
    const env = canvasTex(512, 256, (ctx, w, h) => {
      const g = ctx.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, '#101426');
      g.addColorStop(0.34, '#2f3d5c');
      g.addColorStop(0.48, '#8f655a');
      g.addColorStop(0.53, '#ffbe7d');
      g.addColorStop(0.60, '#7b4d45');
      g.addColorStop(1, '#121218');
      ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
      const glow = ctx.createRadialGradient(w * 0.78, h * 0.5, 2, w * 0.78, h * 0.5, 110);
      glow.addColorStop(0, 'rgba(255,226,176,.95)');
      glow.addColorStop(0.25, 'rgba(255,176,104,.5)');
      glow.addColorStop(1, 'rgba(255,150,80,0)');
      ctx.fillStyle = glow; ctx.fillRect(0, 0, w, h);
    });
    env.mapping = THREE.EquirectangularReflectionMapping;
    this.scene.environment = env;
    this.scene.environmentIntensity = 0.85;
  }

  buildLights() {
    this.hemi = new THREE.HemisphereLight('#a9b9d8', '#3a2b25', 1.7);
    this.scene.add(this.hemi);
    this.sun = new THREE.DirectionalLight('#ffc18a', 2.7);
    this.sun.position.set(-160, 190, 120);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    this.sun.shadow.camera.left = -120;
    this.sun.shadow.camera.right = 120;
    this.sun.shadow.camera.top = 120;
    this.sun.shadow.camera.bottom = -120;
    this.sun.shadow.camera.near = 40;
    this.sun.shadow.camera.far = 700;
    this.sun.shadow.bias = -0.0004;
    this.sun.shadow.normalBias = 0.55;
    this.scene.add(this.sun);
    this.scene.add(this.sun.target);
    this.fill = new THREE.DirectionalLight('#6585bd', 1.1);
    this.fill.position.set(120, 90, 160);
    this.scene.add(this.fill);
  }

  /* ------------------------------- ground -------------------------------- */

  buildGround() {
    const sea = new THREE.Mesh(new THREE.PlaneGeometry(1600, 1600), new THREE.MeshStandardMaterial({ color: '#071318', roughness: 0.18, metalness: 0.7 }));
    sea.rotation.x = -Math.PI / 2; sea.position.y = -0.72; this.scene.add(sea);

    const ground = new THREE.Mesh(new THREE.PlaneGeometry(CITY.edge * 2, CITY.edge * 2), new THREE.MeshStandardMaterial({ map: this.asphaltTex, roughness: 0.86, metalness: 0.08 }));
    ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; this.scene.add(ground);

    // wet-road patches catch the sunset
    for (let i = 0; i < 14; i++) {
      const p = new THREE.Mesh(new THREE.PlaneGeometry(28 + Math.random() * 42, 8 + Math.random() * 16), new THREE.MeshStandardMaterial({ color: '#2b2e38', roughness: 0.12, metalness: 0.8, transparent: true, opacity: 0.5 }));
      p.rotation.x = -Math.PI / 2;
      p.position.set((Math.random() - 0.5) * 620, 0.012, (Math.random() - 0.5) * 620);
      this.scene.add(p);
    }
    // a few hand-placed puddles down the opening avenue
    for (const [x, z, w, l, a] of [[-240, -282, 12, 26, 0], [-238, -250, 15, 20, 0.2], [-235, -212, 10, 22, -0.15]]) {
      const p = new THREE.Mesh(new THREE.PlaneGeometry(w, l), new THREE.MeshStandardMaterial({ color: '#4a5060', roughness: 0.18, metalness: 0.75, transparent: true, opacity: 0.3 }));
      p.rotation.x = -Math.PI / 2; p.rotation.z = a;
      p.position.set(x, 0.014, z);
      this.scene.add(p);
    }

    // seawall and piers
    const wallMat = new THREE.MeshStandardMaterial({ color: '#3b3a38', roughness: 0.9 });
    for (const side of [-1, 1]) {
      const wallH = new THREE.Mesh(new THREE.BoxGeometry(CITY.edge * 2 + 8, 1.4, 2), wallMat);
      wallH.position.set(0, 0.1, side * (CITY.edge + 1)); this.scene.add(wallH);
      const wallV = new THREE.Mesh(new THREE.BoxGeometry(2, 1.4, CITY.edge * 2 + 8), wallMat);
      wallV.position.set(side * (CITY.edge + 1), 0.1, 0); this.scene.add(wallV);
    }
    const pierMat = new THREE.MeshStandardMaterial({ color: '#4a4741', roughness: 0.95 });
    for (let i = 0; i < 4; i++) {
      const pier = new THREE.Mesh(new THREE.BoxGeometry(26, 0.7, 64), pierMat);
      pier.position.set(-300 + i * 74, -0.12, CITY.edge + 30);
      this.scene.add(pier);
      for (let k = 0; k < 3; k++) {
        const c = new THREE.Mesh(new THREE.BoxGeometry(4.2, 2.7, 8.4), new THREE.MeshStandardMaterial({ color: randOf(this.rng, ['#7c3a2f', '#2f545c', '#6d6138']), roughness: 0.85 }));
        c.position.set(pier.position.x + (this.rng() - 0.5) * 18, 1.7, CITY.edge + 12 + k * 16);
        c.rotation.y = (this.rng() - 0.5) * 0.18;
        this.scene.add(c);
      }
    }
  }

  /* -------------------------------- city --------------------------------- */

  buildCity() {
    const blockGeo = new THREE.BoxGeometry(CITY.block, 0.34, CITY.block);
    const platforms = new THREE.InstancedMesh(blockGeo, this.sidewalkMat, CITY.grid * CITY.grid);
    const dummy = new THREE.Object3D();
    let pi = 0;
    const roofTrim = [];
    const baseTrims = [];
    const acUnits = [];
    const antennas = [];
    const towers = [];

    for (let i = 0; i < CITY.grid; i++) {
      for (let j = 0; j < CITY.grid; j++) {
        const cx = (i - 3) * CITY.pitch;
        const cz = (j - 3) * CITY.pitch;
        const district = this.getDistrictAt(cx, cz);
        const key = `${i},${j}`;
        const park = this.rng() < 0.075 && !(i === 0 && j === 0);
        const block = { i, j, x: cx, z: cz, district, park, buildings: [] };
        this.blocks.push(block);
        dummy.position.set(cx, 0.17, cz);
        dummy.rotation.set(0, 0, 0);
        dummy.scale.set(1, 1, 1);
        dummy.updateMatrix();
        platforms.setMatrixAt(pi++, dummy.matrix);

        if (park) {
          const grass = new THREE.Mesh(new THREE.BoxGeometry(68, 0.12, 68), this.parkMat);
          grass.position.set(cx, 0.34, cz); this.scene.add(grass);
          for (let t = 0; t < 5; t++) {
            const tx = cx + (this.rng() - 0.5) * 54, tz = cz + (this.rng() - 0.5) * 54;
            this.addTree(tx, tz, 0.7 + this.rng() * 0.6);
          }
          this.blockBuildings.set(key, []);
          continue;
        }

        const style = district.style;
        const cells = [[-18, -18], [18, -18], [-18, 18], [18, 18]];
        const mega = this.rng() < (style === 'glass' ? 0.34 : 0.12);
        const count = mega ? 1 : 3 + Math.floor(this.rng() * 2);
        const used = [];
        for (let c = 0; c < (mega ? 1 : 4); c++) {
          if (!mega && c >= count) break;
          if (!mega && this.rng() < 0.12) continue;
          let w, d, bx, bz, h;
          if (mega) {
            w = 46 + this.rng() * 12; d = 46 + this.rng() * 12; bx = cx; bz = cz;
          } else {
            const [ox, oz] = cells[c];
            w = (style === 'industrial' ? 28 : 23) + this.rng() * 9;
            d = (style === 'industrial' ? 30 : 23) + this.rng() * 9;
            bx = cx + ox + (this.rng() - 0.5) * 4;
            bz = cz + oz + (this.rng() - 0.5) * 4;
            for (const u of used) {
              if (Math.abs(bx - u.x) < (w + u.w) / 2 + 1 && Math.abs(bz - u.z) < (d + u.d) / 2 + 1) { w *= 0.82; d *= 0.82; }
            }
          }
          used.push({ x: bx, z: bz, w, d });
          h = this.heightFor(style);
          const b = this.addBuilding(bx, bz, w, d, h, style);
          block.buildings.push(b);
          this.colliders.push({ minX: bx - w / 2, maxX: bx + w / 2, minZ: bz - d / 2, maxZ: bz + d / 2, h });
          // dark plinth grounds the facade at street level
          baseTrims.push(
            { x: bx, y: 0.54, z: bz - d / 2 - 0.18, sx: w + 0.5, sy: 0.4, sz: 0.42 },
            { x: bx, y: 0.54, z: bz + d / 2 + 0.18, sx: w + 0.5, sy: 0.4, sz: 0.42 },
            { x: bx - w / 2 - 0.18, y: 0.54, z: bz, sx: 0.42, sy: 0.4, sz: d + 0.5 },
            { x: bx + w / 2 + 0.18, y: 0.54, z: bz, sx: 0.42, sy: 0.4, sz: d + 0.5 },
          );
          // roof furniture data
          const top = 0.34 + h;
          const rw = w + 0.5, rd = d + 0.5;
          roofTrim.push(
            { x: bx, y: top + 0.32, z: bz - rd / 2, sx: rw, sy: 0.65, sz: 0.55 },
            { x: bx, y: top + 0.32, z: bz + rd / 2, sx: rw, sy: 0.65, sz: 0.55 },
            { x: bx - rw / 2, y: top + 0.32, z: bz, sx: 0.55, sy: 0.65, sz: rd },
            { x: bx + rw / 2, y: top + 0.32, z: bz, sx: 0.55, sy: 0.65, sz: rd },
          );
          const acs = Math.floor(this.rng() * 3);
          for (let a = 0; a < acs; a++) {
            const ax = bx + (this.rng() - 0.5) * (w - 8), az = bz + (this.rng() - 0.5) * (d - 8);
            acUnits.push({ x: ax, y: top + 0.6, z: az, sx: 2 + this.rng() * 2.2, sy: 0.9 + this.rng() * 0.5, sz: 2 + this.rng() * 2.2 });
          }
          if (this.rng() < 0.24) antennas.push({ x: bx + (this.rng() - 0.5) * w * 0.5, y: top + 2.8 + this.rng() * 3, z: bz + (this.rng() - 0.5) * d * 0.5, h: 4 + this.rng() * 5 });
          if (this.rng() < 0.13) towers.push({ x: bx + (this.rng() - 0.5) * w * 0.5, y: top + 2.3, z: bz + (this.rng() - 0.5) * d * 0.5, r: 1.6 + this.rng() * 1.2 });

          if (!mega && this.rng() < 0.46) {
            const outward = Math.abs(bx - block.x) > Math.abs(bz - block.z);
            const side = outward ? (bx > block.x ? 2 : 3) : (bz > block.z ? 0 : 1);
            this.addBuildingSign(b, side, SIGN_NAMES[Math.floor(this.rng() * SIGN_NAMES.length)], randOf(this.rng, NEON));
          }
        }
        this.blockBuildings.set(key, block.buildings);
        if (this.rng() < 0.4) {
          for (let t = 0; t < 2; t++) this.addTree(cx + (this.rng() - 0.5) * 64, cz + (this.rng() - 0.5) * 64, 0.55 + this.rng() * 0.5);
        }
      }
    }
    platforms.instanceMatrix.needsUpdate = true;
    platforms.receiveShadow = true;
    this.scene.add(platforms);

    this.instanceBoxes(roofTrim, this.trimMat);
    this.instanceBoxes(baseTrims, this.trimMat);
    this.instanceBoxes(acUnits, this.metalMat);
    const antGeo = new THREE.CylinderGeometry(0.06, 0.06, 1, 5);
    const antMesh = new THREE.InstancedMesh(antGeo, this.metalMat, antennas.length);
    antennas.forEach((a, idx) => {
      dummy.position.set(a.x, a.y, a.z); dummy.scale.set(1, a.h, 1); dummy.rotation.set(0, 0, 0); dummy.updateMatrix(); antMesh.setMatrixAt(idx, dummy.matrix);
    });
    antMesh.instanceMatrix.needsUpdate = true; this.scene.add(antMesh);
    const towerBody = new THREE.CylinderGeometry(1, 1, 1, 8);
    const towerMesh = new THREE.InstancedMesh(towerBody, new THREE.MeshStandardMaterial({ color: '#4b3e32', roughness: 0.9 }), towers.length);
    const roofCone = new THREE.ConeGeometry(1.1, 0.8, 8);
    const coneMesh = new THREE.InstancedMesh(roofCone, this.trimMat, towers.length);
    towers.forEach((t, idx) => {
      dummy.position.set(t.x, t.y, t.z); dummy.scale.set(t.r, 3.2, t.r); dummy.rotation.set(0, 0, 0); dummy.updateMatrix(); towerMesh.setMatrixAt(idx, dummy.matrix);
      dummy.position.set(t.x, t.y + 2.0, t.z); dummy.scale.set(t.r, 1, t.r); dummy.updateMatrix(); coneMesh.setMatrixAt(idx, dummy.matrix);
    });
    towerMesh.instanceMatrix.needsUpdate = true; coneMesh.instanceMatrix.needsUpdate = true;
    this.scene.add(towerMesh, coneMesh);

    this.buildRoadMarkings();
    this.buildStreetLights();
    this.buildStreetDetail();
    this.buildSpawnDressing();
  }

  buildSpawnDressing() {
    const propMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.82, metalness: 0.15 });
    const benchGeo = mergeGeometries([
      box(2.3, 0.14, 0.62, 0, 0.56, 0, '#75512f'),
      box(2.3, 0.62, 0.09, 0, 0.9, -0.28, '#75512f'),
      box(0.11, 0.56, 0.54, -0.92, 0.28, 0, '#23262a'),
      box(0.11, 0.56, 0.54, 0.92, 0.28, 0, '#23262a'),
    ]);
    const binGeo = mergeGeometries([
      cyl(0.34, 0.38, 0.9, 10, 0, 0.45, 0, '#2d3a33'),
      cyl(0.37, 0.34, 0.1, 10, 0, 0.94, 0, '#1c2520'),
    ]);
    const hydrantGeo = mergeGeometries([
      cyl(0.17, 0.21, 0.62, 8, 0, 0.31, 0, '#a5372c'),
      sphereColored(0.19, '#a5372c', 0, 0.64, 0),
      cyl(0.07, 0.07, 0.42, 6, 0, 0.48, 0, '#8d2c23', 0, 0, Math.PI / 2),
    ]);
    const bollardGeo = cyl(0.12, 0.16, 0.95, 8, 0, 0.47, 0, '#24262a');
    const benchMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85 });

    const props = [
      ['bench', -252.6, -266, Math.PI / 2],
      ['bench', -227.4, -288, -Math.PI / 2],
      ['bench', -227.4, -306, -Math.PI / 2],
      ['bin', -252.4, -296, 0],
      ['bin', -227.6, -264, 0],
      ['bin', -252.4, -312, 0],
      ['hydrant', -252.4, -258.5, 0],
      ['hydrant', -227.6, -322, 0],
      ['bollard', -252.4, -252.4, 0],
      ['bollard', -255.6, -252.4, 0],
      ['bollard', -228.6, -252.4, 0],
      ['bollard', -225.6, -252.4, 0],
    ];
    const geos = { bench: benchGeo, bin: binGeo, hydrant: hydrantGeo, bollard: bollardGeo };
    for (const [kind, x, z, ry] of props) {
      if (this.collideCircle({ x, z }, 0.9)) continue;
      const m = new THREE.Mesh(geos[kind], kind === 'bench' ? benchMat : propMat);
      m.position.set(x, this.getGroundY(x, z), z);
      m.rotation.y = ry;
      m.castShadow = true;
      m.receiveShadow = true;
      this.scene.add(m);
    }
    for (const [x, z] of [[-252.5, -284], [-227.5, -316], [-252.5, -316], [-227.5, -272]]) {
      if (!this.collideCircle({ x, z }, 1.1)) this.addTree(x, z, 0.9 + this.rng() * 0.25);
    }
  }

  buildStreetDetail() {
    const awnings = [], shops = [], doors = [], planters = [];
    const awnColors = ['#7c3038', '#2f5b4c', '#8f6a3a', '#443550', '#69392a', '#9a3f3f'];
    const shopColors = ['#ffcf8a', '#ffb45f', '#ffe2ac', '#ff9d5c', '#8fd8cf', '#f6c57a'];
    const half = 38;
    for (const block of this.blocks) {
      if (block.park) continue;
      for (const b of block.buildings) {
        const faces = [];
        if ((b.x - b.w / 2) - (block.x - half) < 13) faces.push([-1, 0, b.d]);
        if ((block.x + half) - (b.x + b.w / 2) < 13) faces.push([1, 0, b.d]);
        if ((b.z - b.d / 2) - (block.z - half) < 13) faces.push([0, -1, b.w]);
        if ((block.z + half) - (b.z + b.d / 2) < 13) faces.push([0, 1, b.w]);
        for (const [nx, nz, len] of faces) {
          const count = clampNum(Math.floor(len / 11), 1, 3);
          const tx = nz, tz = -nx;
          for (let k = 0; k < count; k++) {
            const off = count === 1 ? 0 : (k - (count - 1) / 2) * Math.min(9, len / count);
            const cx = b.x + nx * (Math.abs(nx) ? b.w / 2 : b.d / 2) + tx * off;
            const cz = b.z + nz * (Math.abs(nz) ? b.d / 2 : b.w / 2) + tz * off;
            const rot = Math.atan2(nx, nz);
            const ww = 2.5 + this.rng() * 0.9;
            const shopColor = shopColors[Math.floor(this.rng() * shopColors.length)];
            const doorOff = (this.rng() < 0.5 ? -1 : 1) * (ww / 2 + 0.85);
            shops.push({ x: cx + nx * 0.14, y: 1.85, z: cz + nz * 0.14, sx: ww, sy: 1.75, sz: 0.12, ry: rot, color: shopColor });
            doors.push({ x: cx + tx * doorOff + nx * 0.12, y: 1.56, z: cz + tz * doorOff + nz * 0.12, sx: 1.12, sy: 2.42, sz: 0.1, ry: rot });
            const awnColor = awnColors[Math.floor(this.rng() * awnColors.length)];
            awnings.push({ x: cx + nx * 0.95, y: 3.28, z: cz + nz * 0.95, sx: ww + 1.5, sy: 0.16, sz: 1.75, ry: rot, color: awnColor });
            awnings.push({ x: cx + nx * 1.82, y: 3.08, z: cz + nz * 1.82, sx: ww + 1.5, sy: 0.34, sz: 0.12, ry: rot, color: awnColor });
            if (this.rng() < 0.34) {
              planters.push({ x: cx + tx * (doorOff > 0 ? doorOff - 1.2 : doorOff + 1.2) + nx * 0.7, y: 0.7, z: cz + tz * (doorOff > 0 ? doorOff - 1.2 : doorOff + 1.2) + nz * 0.7, sx: 0.85, sy: 0.72, sz: 0.85, ry: rot });
            }
          }
        }
      }
    }
    this.instanceColoredBoxes(awnings, new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.86, side: THREE.DoubleSide }));
    this.instanceColoredBoxes(shops, new THREE.MeshBasicMaterial({ color: '#ffffff', toneMapped: false }));
    this.instanceBoxes(doors, new THREE.MeshStandardMaterial({ color: '#171310', roughness: 0.9 }));
    this.instanceBoxes(planters, new THREE.MeshStandardMaterial({ color: '#4a3a2c', roughness: 0.95 }));
    this.shopLights = shopColors.length;
  }

  instanceColoredBoxes(list, mat) {
    if (!list.length) return;
    const mesh = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), mat, list.length);
    const dummy = new THREE.Object3D();
    const col = new THREE.Color();
    list.forEach((o, i) => {
      dummy.position.set(o.x, o.y, o.z);
      dummy.scale.set(o.sx, o.sy, o.sz);
      dummy.rotation.set(0, o.ry || 0, 0);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
      col.set(o.color || '#ffffff');
      mesh.setColorAt(i, col);
    });
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    this.scene.add(mesh);
  }

  heightFor(style) {
    const r = this.rng();
    switch (style) {
      case 'glass': return 26 + r * 40;
      case 'concrete': return 18 + r * 26;
      case 'deco': return 17 + r * 30;
      case 'industrial': return 8 + r * 12;
      case 'brick': return 12 + r * 18;
      default: return 10 + r * 16;
    }
  }

  addBuilding(x, z, w, d, h, style) {
    const mat = this.facet(style, Math.floor(this.rng() * 7) + 1);
    const geo = new THREE.BoxGeometry(w, h, d);
    scaleUV(geo, Math.max(0.6, w / 13), Math.max(0.6, h / 15));
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, 0.34 + h / 2, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    this.scene.add(mesh);
    return { x, z, w, d, h, mesh, style };
  }

  addBuildingSign(b, side, text, color) {
    const normals = [[0, 0, 1], [0, 0, -1], [1, 0, 0], [-1, 0, 0]];
    const [nx, nz] = normals[side];
    const y = 3.2;
    const x = b.x + nx * (b.w / 2 + 0.18);
    const z = b.z + nz * (b.d / 2 + 0.18);
    const rot = Math.atan2(nx, nz);
    const tex = signTexture(text, color);
    this.addSignMesh(x, y, z, rot, tex, 7.6, 2.38, color);
  }

  addSignMesh(x, y, z, rot, tex, w, h, color, glow = false) {
    const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, toneMapped: false, side: THREE.DoubleSide, depthWrite: false });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
    mesh.position.set(x, y, z); mesh.rotation.y = rot;
    this.scene.add(mesh);
    const back = new THREE.Mesh(new THREE.BoxGeometry(0.24, h + 0.35, w + 0.35), this.signBackMat);
    back.position.set(x - Math.sin(rot) * 0.18, y, z - Math.cos(rot) * 0.18);
    back.rotation.y = rot + Math.PI / 2;
    this.scene.add(back);
    if (glow) {
      const sm = new THREE.SpriteMaterial({ map: this.glowTex, color, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.6 });
      const sp = new THREE.Sprite(sm);
      sp.position.set(x + Math.sin(rot) * 0.4, y, z + Math.cos(rot) * 0.4);
      sp.scale.set(w * 1.7, h * 2.4, 1);
      this.scene.add(sp);
    }
    return mesh;
  }

  instanceBoxes(list, mat) {
    if (!list.length) return;
    const mesh = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), mat, list.length);
    const dummy = new THREE.Object3D();
    list.forEach((o, i) => {
      dummy.position.set(o.x, o.y, o.z);
      dummy.scale.set(o.sx, o.sy, o.sz);
      dummy.rotation.set(o.rx || 0, o.ry || 0, o.rz || 0);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    });
    mesh.instanceMatrix.needsUpdate = true;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    this.scene.add(mesh);
  }

  addTree(x, z, s) {
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.18 * s, 0.24 * s, 2.6 * s, 6), this.trunkMat);
    trunk.position.set(x, 1.3 * s + 0.3, z);
    trunk.castShadow = true;
    this.scene.add(trunk);
    const crown = new THREE.Mesh(new THREE.IcosahedronGeometry(1.8 * s, 0), this.leafMat);
    crown.position.set(x, 3.5 * s + 0.3, z);
    crown.rotation.set(this.rng(), this.rng(), this.rng());
    crown.castShadow = true;
    this.scene.add(crown);
  }

  buildRoadMarkings() {
    const dummy = new THREE.Object3D();
    const roads = [];
    for (let k = 0; k < 8; k++) roads.push(-336 + k * 96);
    const dashes = [];
    for (const r of roads) {
      for (let p = -330; p <= 330; p += 13) {
        dashes.push({ x: r, z: p, ry: 0 });
        dashes.push({ x: p, z: r, ry: Math.PI / 2 });
      }
    }
    const dashMesh = new THREE.InstancedMesh(new THREE.BoxGeometry(0.24, 0.025, 5.4), this.laneMat, dashes.length);
    dashes.forEach((d, i) => {
      dummy.position.set(d.x, 0.05, d.z); dummy.rotation.set(0, d.ry, 0); dummy.scale.set(1, 1, 1); dummy.updateMatrix(); dashMesh.setMatrixAt(i, dummy.matrix);
    });
    dashMesh.instanceMatrix.needsUpdate = true; this.scene.add(dashMesh);

    const crosses = [];
    for (const r of roads) {
      for (const s of roads) {
        if (Math.abs(r) > 340 || Math.abs(s) > 340) continue;
        for (let k = -2; k <= 2; k++) {
          crosses.push({ x: r + k * 2.1, z: s + 10.7, w: 1.1, d: 3.4 });
          crosses.push({ x: r + k * 2.1, z: s - 10.7, w: 1.1, d: 3.4 });
          crosses.push({ x: r + 10.7, z: s + k * 2.1, w: 3.4, d: 1.1 });
          crosses.push({ x: r - 10.7, z: s + k * 2.1, w: 3.4, d: 1.1 });
        }
      }
    }
    const crossMesh = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 0.026, 1), this.crossMat, crosses.length);
    crosses.forEach((c, i) => {
      dummy.position.set(c.x, 0.052, c.z); dummy.rotation.set(0, 0, 0); dummy.scale.set(c.w, 1, c.d); dummy.updateMatrix(); crossMesh.setMatrixAt(i, dummy.matrix);
    });
    crossMesh.instanceMatrix.needsUpdate = true; this.scene.add(crossMesh);
    this.roads = roads;
  }

  buildStreetLights() {
    const dummy = new THREE.Object3D();
    const lamps = [];
    for (const b of this.blocks) {
      for (const [ox, oz] of [[-37, -37], [37, 37], [-37, 37], [37, -37], [-37, 0], [37, 0], [0, -37], [0, 37]]) {
        lamps.push({ x: b.x + ox, z: b.z + oz });
      }
    }
    const poleMesh = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.09, 0.14, 6.4, 6), this.metalMat, lamps.length);
    const lampMesh = new THREE.InstancedMesh(new THREE.SphereGeometry(0.34, 8, 6), this.lampMat, lamps.length);
    lamps.forEach((l, i) => {
      dummy.position.set(l.x, 3.2, l.z); dummy.rotation.set(0, 0, 0); dummy.scale.set(1, 1, 1); dummy.updateMatrix(); poleMesh.setMatrixAt(i, dummy.matrix);
      dummy.position.set(l.x, 6.6, l.z); dummy.updateMatrix(); lampMesh.setMatrixAt(i, dummy.matrix);
    });
    poleMesh.instanceMatrix.needsUpdate = true; lampMesh.instanceMatrix.needsUpdate = true;
    poleMesh.castShadow = true;
    this.scene.add(poleMesh, lampMesh);
    const pos = new Float32Array(lamps.length * 3);
    lamps.forEach((l, i) => { pos[i * 3] = l.x; pos[i * 3 + 1] = 6.6; pos[i * 3 + 2] = l.z; });
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const pMat = new THREE.PointsMaterial({ map: this.glowTex, color: '#ffbd72', size: 6.5, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.8, sizeAttenuation: true });
    this.lampPoints = new THREE.Points(g, pMat);
    this.lampPoints.frustumCulled = false;
    this.scene.add(this.lampPoints);

    // warm pools on the pavement beneath each lamp
    const poolGeo = new THREE.PlaneGeometry(8, 8);
    const poolMat = new THREE.MeshBasicMaterial({ map: this.glowTex, color: '#ffb765', transparent: true, opacity: 0.26, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false });
    const pools = new THREE.InstancedMesh(poolGeo, poolMat, lamps.length);
    lamps.forEach((l, i) => {
      dummy.position.set(l.x, this.getGroundY(l.x, l.z) + 0.045, l.z);
      dummy.rotation.set(-Math.PI / 2, 0, 0);
      dummy.scale.set(1, 1, 1);
      dummy.updateMatrix();
      pools.setMatrixAt(i, dummy.matrix);
    });
    pools.instanceMatrix.needsUpdate = true;
    pools.frustumCulled = false;
    this.lampPools = pools;
    this.scene.add(pools);
  }

  /* ------------------------------- rackets ------------------------------ */

  districtBlocks(districtId) {
    return this.blocks.filter(b => b.district.id === districtId && b.buildings.length);
  }

  racketSpot(block, index, name, color) {
    const b = block.buildings[index % block.buildings.length];
    const dx = b.x - block.x, dz = b.z - block.z;
    let side;
    if (Math.abs(dx) > Math.abs(dz)) side = dx > 0 ? 'east' : 'west';
    else side = dz > 0 ? 'south' : 'north';
    let nx = 0, nz = 0, mx = 0, mz = 0;
    if (side === 'east') { nx = 1; mx = block.x + 35; mz = b.z; }
    if (side === 'west') { nx = -1; mx = block.x - 35; mz = b.z; }
    if (side === 'north') { nz = -1; mz = block.z - 35; mx = b.x; }
    if (side === 'south') { nz = 1; mz = block.z + 35; mx = b.x; }
    const sx = b.x + nx * (b.w / 2 + 0.2), sz = b.z + nz * (b.d / 2 + 0.2);
    const rot = Math.atan2(nx, nz);
    const tex = signTexture(name.toUpperCase(), color, 'EST. 1961');
    const sign = this.addSignMesh(sx, 4.0, sz, rot, tex, 9.4, 2.9, color, true);
    const awning = new THREE.Mesh(new THREE.BoxGeometry(Math.abs(nx) ? 1.6 : 7, 0.26, Math.abs(nx) ? 7 : 1.6), new THREE.MeshStandardMaterial({ color, roughness: 0.8, emissive: color, emissiveIntensity: 0.16 }));
    awning.position.set(sx + nx * 0.8, 2.7, sz + nz * 0.8);
    this.scene.add(awning);
    const marker = this.createMarker(color);
    marker.position.set(mx, this.getGroundY(mx, mz), mz);
    marker.userData.kind = 'racket';
    return { x: mx, z: mz, sign, marker, awning };
  }

  buildRackets() {
    let n = 0;
    for (const d of DISTRICTS) {
      const blocks = this.districtBlocks(d.id);
      if (!blocks.length) continue;
      const baseCost = [1300, 1700, 2100, 2600, 3200, 3900][DISTRICTS.indexOf(d)];
      const baseInc = [110, 135, 170, 210, 260, 320][DISTRICTS.indexOf(d)];
      d.rackets.forEach((name, idx) => {
        const block = blocks[(idx * 3 + 1) % blocks.length];
        const spot = this.racketSpot(block, idx + n, name, d.color);
        this.rackets.push({
          id: `${d.id}-${idx}`, districtId: d.id, name, x: spot.x, z: spot.z,
          cost: baseCost + idx * 450, income: baseInc + idx * 35,
          marker: spot.marker, sign: spot.sign,
        });
        n++;
      });
    }

    // rival headquarters
    for (const d of DISTRICTS) {
      const blocks = this.districtBlocks(d.id);
      const block = blocks[(blocks.length - 1 + 6) % blocks.length] || blocks[0];
      if (!block) continue;
      const b = block.buildings[0];
      const side = b.z > block.z ? 'south' : 'north';
      const mz = block.z + (side === 'south' ? 35 : -35);
      const marker = this.createMarker('#c33c3c');
      marker.position.set(b.x, this.getGroundY(b.x, mz), mz);
      marker.userData.kind = 'hq';
      const rot = side === 'south' ? 0 : Math.PI;
      const tex = signTexture(d.rival.toUpperCase(), '#c33c3c', 'TERRITORY');
      this.addSignMesh(b.x, 6.2, b.z + (side === 'south' ? b.d / 2 + 0.22 : -b.d / 2 - 0.22), rot, tex, 10, 3.1, '#c33c3c', true);
      this.hqs[d.id] = { districtId: d.id, x: b.x, z: mz, marker, name: d.rival };
    }

    // Casa Moretti — the player's safehouse, on the open corner of the first block
    const safeBlock = this.blocks.find(b => b.i === 0 && b.j === 0) || this.blocks[0];
    const sx = safeBlock.x + 34, sz = safeBlock.z + 34;
    const safe = this.createMarker('#69b38c');
    safe.position.set(sx, this.getGroundY(sx, sz), sz);
    safe.userData.kind = 'safehouse';
    this.safehouse = { x: sx, z: sz, marker: safe };

    // A little corner social club: canopy, neon blade sign and warm doorway.
    const corner = new THREE.Group();
    corner.position.set(safeBlock.x + 36, 0.34, safeBlock.z + 36);
    corner.rotation.y = Math.PI / 4;
    const canopyMat = new THREE.MeshStandardMaterial({ color: '#263d34', roughness: 0.82, metalness: 0.08 });
    const trimMat = new THREE.MeshStandardMaterial({ color: '#c9a86a', roughness: 0.45, metalness: 0.5 });
    const canopy = new THREE.Mesh(new THREE.BoxGeometry(6.4, 0.22, 3.0), canopyMat);
    canopy.position.set(0, 3.35, -0.6);
    corner.add(canopy);
    const trim = new THREE.Mesh(new THREE.BoxGeometry(6.5, 0.09, 0.16), trimMat);
    trim.position.set(0, 3.28, -2.06); corner.add(trim);
    for (const px of [-2.95, 2.95]) {
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 3.3, 6), trimMat);
      post.position.set(px, 1.65, -1.9); corner.add(post);
      const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), new THREE.MeshBasicMaterial({ color: '#ffd89b', toneMapped: false }));
      lamp.position.set(px, 2.95, -1.9); corner.add(lamp);
    }
    const light = new THREE.PointLight('#ffc27c', 14, 16, 2);
    light.position.set(0, 3.0, 0.4); corner.add(light);
    for (const px of [-1.9, 1.9]) {
      const planter = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.72, 0.8), new THREE.MeshStandardMaterial({ color: '#3f3025', roughness: 0.95 }));
      planter.position.set(px, 0.36, -1.18); corner.add(planter);
      const bush = new THREE.Mesh(new THREE.IcosahedronGeometry(0.52, 0), this.leafMat);
      bush.position.set(px, 0.98, -1.18); corner.add(bush);
    }
    this.scene.add(corner);
    const safeTex = signTexture('CASA MORETTI', '#69b38c', 'FAMILY ONLY');
    this.addSignMesh(safeBlock.x + 35.5, 4.75, safeBlock.z + 35.5, Math.PI / 4, safeTex, 4.6, 1.55, '#69b38c', true);
  }

  createMarker(color) {
    const g = new THREE.Group();
    const beam = new THREE.Mesh(
      new THREE.CylinderGeometry(1.25, 1.25, 30, 10, 1, true),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.10, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, depthWrite: false, toneMapped: false }),
    );
    beam.position.y = 15; g.add(beam);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(2.7, 0.09, 6, 48), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }));
    ring.rotation.x = Math.PI / 2; ring.position.y = 0.16; g.add(ring);
    const icon = new THREE.Mesh(new THREE.OctahedronGeometry(0.42, 0), new THREE.MeshBasicMaterial({ color, toneMapped: false }));
    icon.position.y = 2.7; g.add(icon);
    this.scene.add(g);
    this.markers.push({ group: g, beam, ring, icon, phase: Math.random() * 6.28, color });
    return g;
  }

  removeMarker(marker) {
    const i = this.markers.findIndex(m => m.group === marker);
    if (i >= 0) this.markers.splice(i, 1);
    this.scene.remove(marker);
  }

  /* ------------------------------- traffic ------------------------------ */

  makeCar(color) {
    const g = new THREE.Group();
    const body = new THREE.Mesh(this.carGeo.body, this.carMats[color] || this.carMats[CAR_COLORS[0]]);
    const glass = new THREE.Mesh(this.carGeo.glass, this.glassMat);
    const wheels = new THREE.Mesh(this.carGeo.wheels, this.wheelMat);
    const head = new THREE.Mesh(this.headGeo, this.headMat);
    const tail = new THREE.Mesh(this.tailGeo, this.tailMat);
    body.castShadow = true; glass.castShadow = true; wheels.castShadow = true;
    g.add(body, glass, wheels, head, tail);
    g.userData = { kind: 'car', color, body, wheels };
    this.registerShadow(g, 4.8, 2.8);
    return g;
  }

  buildTraffic() {
    const roads = this.roads.filter(r => Math.abs(r) < 330);
    let id = 0;
    for (let k = 0; k < 16; k++) {
      const axis = k % 2 === 0 ? 'z' : 'x';
      const road = roads[(k * 3) % roads.length];
      const dir = this.rng() < 0.5 ? 1 : -1;
      const car = this.makeCar(randOf(this.rng, CAR_COLORS));
      const pos = -330 + this.rng() * 660;
      const lane = road - dir * 4.2;
      let x, z, rot;
      if (axis === 'z') { x = lane; z = pos; rot = dir > 0 ? 0 : Math.PI; }
      else { x = pos; z = lane; rot = dir > 0 ? Math.PI / 2 : -Math.PI / 2; }
      car.position.set(x, 0.02, z); car.rotation.y = rot;
      this.scene.add(car);
      const traffic = { id: id++, group: car, axis, road, dir, lane, pos, speed: 9 + this.rng() * 8, stolen: false };
      car.userData.traffic = traffic;
      this.traffic.push(traffic);
    }

    // hand-placed traffic so the opening avenue never feels empty
    for (const [z, dir] of [[-206, 1], [-274, -1], [-158, 1], [-312, -1]]) {
      const car = this.makeCar(randOf(this.rng, CAR_COLORS));
      const lane = -240 - dir * 4.2;
      car.position.set(lane, 0.02, z);
      car.rotation.y = dir > 0 ? 0 : Math.PI;
      this.scene.add(car);
      const traffic = { id: id++, group: car, axis: 'z', road: -240, dir, lane, pos: z, speed: 8 + this.rng() * 4, stolen: false };
      car.userData.traffic = traffic;
      this.traffic.push(traffic);
    }

    // parked cars along the sidewalks
    const spots = [];
    for (const b of this.blocks) {
      if (this.rng() > 0.42) continue;
      const side = Math.floor(this.rng() * 4);
      let x = b.x, z = b.z, rot = 0;
      if (side === 0) { z = b.z - 42; rot = Math.PI / 2; }
      if (side === 1) { z = b.z + 42; rot = Math.PI / 2; }
      if (side === 2) { x = b.x - 42; rot = 0; }
      if (side === 3) { x = b.x + 42; rot = 0; }
      x += (this.rng() - 0.5) * 18; z += (this.rng() - 0.5) * 18;
      if (spots.some(s => Math.hypot(s.x - x, s.z - z) < 12)) continue;
      spots.push({ x, z });
      const car = this.makeCar(randOf(this.rng, CAR_COLORS));
      car.position.set(x, 0.02, z); car.rotation.y = rot;
      car.userData.parked = true;
      this.scene.add(car);
      this.parkedCars.push(car);
    }
  }

  buildPeds() {
    const spawnArea = [
      { b: this.blocks.find(b => b.i === 0 && b.j === 0), ts: [0.14, 0.2, 0.27, 0.34] },
      { b: this.blocks.find(b => b.i === 1 && b.j === 0), ts: [0.78, 0.85, 0.92, 0.97] },
    ];
    for (let i = 0; i < 26; i++) {
      const b = this.blocks[Math.floor(this.rng() * this.blocks.length)];
      const person = this.makePerson();
      const half = 39.5;
      const ped = {
        group: person, block: b, half,
        t: this.rng(), speed: 0.018 + this.rng() * 0.02,
        dir: this.rng() < 0.5 ? 1 : -1, phase: this.rng() * 6.28,
        speedScale: 0.9 + this.rng() * 0.2,
      };
      this.peds.push(ped);
      this.scene.add(person);
    }
    for (const group of spawnArea) {
      if (!group.b) continue;
      for (const t of group.ts) {
        const person = this.makePerson();
        this.peds.push({
          group: person, block: group.b, half: 39.5, t,
          speed: 0.012 + this.rng() * 0.012,
          dir: this.rng() < 0.5 ? 1 : -1, phase: this.rng() * 6.28,
          speedScale: 0.86 + this.rng() * 0.2,
        });
        this.scene.add(person);
      }
    }
    this.pedGroup = new THREE.Group();
  }

  makePerson(opts = {}) {
    const rng = mulberry32(opts.seed || Math.floor(this.rng() * 1e9));
    const outfit = opts.outfit || OUTFITS[Math.floor(rng() * OUTFITS.length)];
    const skin = opts.skin || SKINS[Math.floor(rng() * SKINS.length)];
    const hat = opts.hat || HAT_COLORS[Math.floor(rng() * HAT_COLORS.length)];
    const key = outfit.join('') + skin + hat;
    if (!this.personGeo.has(key)) this.personGeo.set(key, personGeometry(outfit, skin, hat));
    const p = this.personGeo.get(key);
    const g = new THREE.Group();
    const body = new THREE.Mesh(p.body, this.personMat);
    const legL = new THREE.Group(); const legR = new THREE.Group();
    const lMesh = new THREE.Mesh(p.legL, this.personMat); const rMesh = new THREE.Mesh(p.legR, this.personMat);
    lMesh.position.y = -0.72; rMesh.position.y = -0.72;
    legL.position.y = 0.72; legR.position.y = 0.72;
    legL.add(lMesh); legR.add(rMesh);
    body.castShadow = true; lMesh.castShadow = true; rMesh.castShadow = true;
    g.add(body, legL, legR);
    g.userData = { kind: 'person', legL, legR, body };
    g.scale.setScalar(opts.scale || 1);
    this.registerShadow(g, 1.25, 1.25);
    return g;
  }

  buildShadowPool() {
    this.shadowMesh = new THREE.InstancedMesh(new THREE.PlaneGeometry(1, 1), this.shadowMat, 120);
    this.shadowMesh.geometry.rotateX(-Math.PI / 2);
    this.shadowMesh.frustumCulled = false;
    this.shadowMesh.renderOrder = 1;
    this.scene.add(this.shadowMesh);
  }

  registerShadow(obj, w, d) {
    this.shadows.push({ obj, w, d });
  }

  /* ------------------------------ location ------------------------------ */

  getDistrictAt(x, z) {
    const east = x > 48, west = x < -48;
    if (z < 0) return DISTRICTS[east ? 2 : west ? 0 : 1];
    return DISTRICTS[east ? 5 : west ? 3 : 4];
  }

  getGroundY(x, z) {
    const i = Math.round(x / CITY.pitch + 3);
    const j = Math.round(z / CITY.pitch + 3);
    if (i < 0 || i > 6 || j < 0 || j > 6) return 0;
    const cx = (i - 3) * CITY.pitch, cz = (j - 3) * CITY.pitch;
    return Math.abs(x - cx) < 38 && Math.abs(z - cz) < 38 ? 0.34 : 0;
  }

  resolveCircle(pos, radius) {
    for (const c of this.colliders) {
      if (pos.x + radius < c.minX || pos.x - radius > c.maxX || pos.z + radius < c.minZ || pos.z - radius > c.maxZ) continue;
      const dxL = pos.x - c.minX, dxR = c.maxX - pos.x;
      const dzL = pos.z - c.minZ, dzR = c.maxZ - pos.z;
      const m = Math.min(dxL, dxR, dzL, dzR);
      if (m === dxL) pos.x = c.minX - radius;
      else if (m === dxR) pos.x = c.maxX + radius;
      else if (m === dzL) pos.z = c.minZ - radius;
      else pos.z = c.maxZ + radius;
    }
    const lim = CITY.edge - 8;
    pos.x = Math.max(-lim, Math.min(lim, pos.x));
    pos.z = Math.max(-lim, Math.min(lim, pos.z));
  }

  collideCircle(pos, radius) {
    for (const c of this.colliders) {
      if (pos.x + radius > c.minX && pos.x - radius < c.maxX && pos.z + radius > c.minZ && pos.z - radius < c.maxZ) return true;
    }
    return false;
  }

  panic(x, z, seconds = 6) {
    this.alertPoint.set(x, 0, z);
    this.alertUntil = this.time + seconds;
  }

  /* ------------------------------- update ------------------------------- */

  applyEnvironment() {
    const hour = ((this.timeOfDay % 24) + 24) % 24;
    const keys = [
      { h: 0, top: '#070a17', hor: '#17182b', bot: '#08080d', sun: '#46527e', sunI: 0.2, hemi: 0.38, night: 1 },
      { h: 5.2, top: '#101229', hor: '#61364a', bot: '#100d18', sun: '#8c668c', sunI: 0.3, hemi: 0.5, night: 0.9 },
      { h: 6.8, top: '#31527a', hor: '#e09a72', bot: '#3b2c2f', sun: '#ffc994', sunI: 1.1, hemi: 0.85, night: 0.28 },
      { h: 11.5, top: '#3a6b98', hor: '#cdd8d4', bot: '#6b6d6a', sun: '#fff1d6', sunI: 1.8, hemi: 1.15, night: 0 },
      { h: 16.5, top: '#3e5c82', hor: '#e5b17d', bot: '#5f4c45', sun: '#ffd39d', sunI: 1.7, hemi: 1.0, night: 0.08 },
      { h: 18.8, top: '#23254c', hor: '#d16e50', bot: '#492c31', sun: '#ffb16b', sunI: 1.55, hemi: 0.8, night: 0.36 },
      { h: 20.6, top: '#0d1027', hor: '#5b2f47', bot: '#1c121c', sun: '#a86d76', sunI: 0.45, hemi: 0.5, night: 0.86 },
      { h: 24, top: '#070a17', hor: '#17182b', bot: '#08080d', sun: '#46527e', sunI: 0.2, hemi: 0.38, night: 1 },
    ];
    let a = keys[0], b = keys[1];
    for (let i = 0; i < keys.length - 1; i++) {
      if (hour >= keys[i].h && hour <= keys[i + 1].h) { a = keys[i]; b = keys[i + 1]; break; }
    }
    const t = (hour - a.h) / Math.max(0.001, b.h - a.h);
    const C = (k) => new THREE.Color(a[k]).lerp(new THREE.Color(b[k]), t);
    const top = C('top'), hor = C('hor'), bot = C('bot'), sunC = C('sun');
    const sunI = a.sunI + (b.sunI - a.sunI) * t;
    const hemi = a.hemi + (b.hemi - a.hemi) * t;
    const night = a.night + (b.night - a.night) * t;
    const u = this.skyUniforms;
    u.topColor.value.copy(top); u.horizonColor.value.copy(hor); u.bottomColor.value.copy(bot);
    u.sunColor.value.copy(sunC); u.night.value = night;
    const ang = ((hour - 5.4) / 12.4) * Math.PI;
    const sx = Math.cos(ang) * 300, sy = Math.sin(ang) * 240, sz = 150;
    const focus = this.shadowFocus || { x: 0, z: 0 };
    this.sun.position.set(focus.x + sx, Math.max(88, sy), focus.z + sz);
    this.sun.target.position.set(focus.x, 0, focus.z);
    this.sun.target.updateMatrixWorld();
    this.sun.color.copy(sunC); this.sun.intensity = sunI * 1.75;
    this.fill.intensity = 0.9 + night * 0.9;
    this.hemi.intensity = hemi * 2.0;
    this.scene.fog.color.copy(hor).multiplyScalar(0.9);
    const win = 0.25 + night * 2.2;
    for (const m of this.facadeMats) m.emissiveIntensity = win;
    this.lampMat.emissiveIntensity = 0.4 + night * 1.8;
    if (this.lampPoints) this.lampPoints.material.opacity = 0.22 + night * 0.75;
    if (this.lampPools) this.lampPools.material.opacity = 0.1 + night * 0.45;
    u.sunDir.value.set(sx, Math.max(30, sy), sz).normalize();
    this.night = night;
  }

  update(dt) {
    this.time += dt;
    this.timeOfDay += dt * (1 / 120);
    if (this.timeOfDay >= 24) this.timeOfDay -= 24;
    this.applyEnvironment();

    for (const m of this.markers) {
      m.ring.scale.setScalar(1 + Math.sin(this.time * 2.2 + m.phase) * 0.13);
      m.ring.rotation.z += dt * 0.7;
      m.icon.position.y = 2.7 + Math.sin(this.time * 2 + m.phase) * 0.18;
      m.icon.rotation.y += dt * 1.6;
      m.beam.material.opacity = 0.07 + Math.sin(this.time * 1.4 + m.phase) * 0.025;
    }

    // traffic
    for (const c of this.traffic) {
      if (c.stolen) continue;
      c.pos += c.speed * c.dir * dt;
      if (c.pos > 338) c.pos = -338;
      if (c.pos < -338) c.pos = 338;
      if (c.axis === 'z') c.group.position.set(c.lane, 0.02, c.pos);
      else c.group.position.set(c.pos, 0.02, c.lane);
    }

    // pedestrians
    const scared = this.time < this.alertUntil;
    for (const p of this.peds) {
      const g = p.group;
      if (scared && g.position.distanceToSquared(this.alertPoint) < 22 * 22) {
        const dx = g.position.x - this.alertPoint.x, dz = g.position.z - this.alertPoint.z;
        const len = Math.hypot(dx, dz) || 1;
        g.position.x += (dx / len) * 5.4 * dt;
        g.position.z += (dz / len) * 5.4 * dt;
        g.rotation.y = Math.atan2(dx, dz);
        p.running = 1;
      } else {
        p.t += p.speed * p.dir * dt;
        const pos = perimeterPoint(p.t, p.block.x, p.block.z, p.half);
        g.position.set(pos.x, 0.34, pos.z);
        const facing = Math.atan2(pos.tx * p.dir, pos.tz * p.dir);
        g.rotation.y = facing;
        p.running = 0;
      }
      g.position.y = 0.34 + Math.abs(Math.sin(this.time * (p.running ? 12 : 6) + p.phase)) * 0.035;
      const swing = Math.sin(this.time * (p.running ? 13 : 6.4) + p.phase) * (p.running ? 0.8 : 0.42);
      g.userData.legL.rotation.x = swing;
      g.userData.legR.rotation.x = -swing;
      g.rotation.z = p.running ? 0.06 : 0;
    }

    // blob shadows
    let si = 0;
    const dummy = this._shadowDummy || (this._shadowDummy = new THREE.Object3D());
    for (const s of this.shadows) {
      const o = s.obj;
      if (!o || !o.parent || !o.visible) continue;
      dummy.position.set(o.position.x, this.getGroundY(o.position.x, o.position.z) + 0.045, o.position.z);
      dummy.rotation.set(0, o.rotation.y, 0);
      dummy.scale.set(s.w, 1, s.d);
      dummy.updateMatrix();
      this.shadowMesh.setMatrixAt(si++, dummy.matrix);
      if (si >= 120) break;
    }
    for (let i = si; i < 120; i++) { dummy.scale.set(0, 0, 0); dummy.updateMatrix(); this.shadowMesh.setMatrixAt(i, dummy.matrix); }
    this.shadowMesh.instanceMatrix.needsUpdate = true;
  }

  nearestCar(x, z, maxDist = 8) {
    let best = null, bd = maxDist * maxDist;
    for (const car of this.parkedCars) {
      const d = (car.position.x - x) ** 2 + (car.position.z - z) ** 2;
      if (d < bd) { bd = d; best = car; }
    }
    for (const t of this.traffic) {
      if (t.stolen) continue;
      const d = (t.group.position.x - x) ** 2 + (t.group.position.z - z) ** 2;
      if (d < bd) { bd = d; best = t.group; }
    }
    return best;
  }
}

export function perimeterPoint(t, cx, cz, half) {
  t = ((t % 1) + 1) % 1;
  const s = Math.floor(t * 4);
  const u = (t * 4) % 1;
  const a = -half + u * half * 2;
  if (s === 0) return { x: cx + a, z: cz + half, tx: 1, tz: 0 };
  if (s === 1) return { x: cx + half, z: cz + a, tx: 0, tz: 1 };
  if (s === 2) return { x: cx - a, z: cz - half, tx: -1, tz: 0 };
  return { x: cx - half, z: cz - a, tx: 0, tz: -1 };
}

