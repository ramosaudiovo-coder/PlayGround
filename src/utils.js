import * as THREE from 'three'

export const TAU = Math.PI * 2
export const clamp = (v, a, b) => Math.max(a, Math.min(b, v))
export const lerp = (a, b, t) => a + (b - a) * t
export const damp = (a, b, lambda, dt) => lerp(a, b, 1 - Math.exp(-lambda * dt))
export const rand = (a = 0, b = 1) => a + Math.random() * (b - a)
export const randInt = (a, b) => Math.floor(rand(a, b + 1))
export const choice = (arr) => arr[Math.floor(Math.random() * arr.length)]
export const dist2 = (ax, az, bx, bz) => Math.hypot(ax - bx, az - bz)
export const smoothstep = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t) }
export const angleLerp = (a, b, t) => {
  let d = ((b - a + Math.PI) % TAU + TAU) % TAU - Math.PI
  return a + d * t
}

export function makeCanvas(w, h) {
  const c = document.createElement('canvas')
  c.width = w; c.height = h
  return { c, ctx: c.getContext('2d') }
}

export function canvasTexture(c, repeatX = 1, repeatY = 1) {
  const t = new THREE.CanvasTexture(c)
  t.wrapS = t.wrapT = THREE.RepeatWrapping
  t.repeat.set(repeatX, repeatY)
  t.anisotropy = 4
  t.colorSpace = THREE.SRGBColorSpace
  return t
}

export function radialTexture(inner = 'rgba(255,255,255,1)', outer = 'rgba(255,255,255,0)', size = 128) {
  const { c, ctx } = makeCanvas(size, size)
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  g.addColorStop(0, inner); g.addColorStop(.35, inner); g.addColorStop(1, outer)
  ctx.fillStyle = g; ctx.fillRect(0, 0, size, size)
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace
  return t
}

export function asphaltTexture() {
  const { c, ctx } = makeCanvas(256, 256)
  ctx.fillStyle = '#15161b'; ctx.fillRect(0, 0, 256, 256)
  for (let i = 0; i < 6000; i++) {
    const v = Math.random()
    ctx.fillStyle = v > .5 ? `rgba(255,255,255,${rand(.01, .05)})` : `rgba(0,0,0,${rand(.05, .2)})`
    ctx.fillRect(Math.random() * 256, Math.random() * 256, rand(1, 2.2), rand(1, 2.2))
  }
  for (let i = 0; i < 9; i++) {
    ctx.strokeStyle = `rgba(0,0,0,${rand(.1, .3)})`; ctx.lineWidth = rand(.5, 1.5)
    ctx.beginPath(); let x = Math.random() * 256, y = Math.random() * 256
    ctx.moveTo(x, y)
    for (let k = 0; k < 4; k++) { x += rand(-30, 30); y += rand(10, 40); ctx.lineTo(x, y) }
    ctx.stroke()
  }
  const t = canvasTexture(c, 5, 5); return t
}

export function sidewalkTexture() {
  const { c, ctx } = makeCanvas(256, 256)
  ctx.fillStyle = '#23242b'; ctx.fillRect(0, 0, 256, 256)
  ctx.strokeStyle = 'rgba(0,0,0,.45)'; ctx.lineWidth = 2
  for (let i = 0; i <= 256; i += 64) {
    ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, 256); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(256, i); ctx.stroke()
  }
  for (let i = 0; i < 1600; i++) {
    ctx.fillStyle = Math.random() > .5 ? 'rgba(255,255,255,.025)' : 'rgba(0,0,0,.08)'
    ctx.fillRect(Math.random() * 256, Math.random() * 256, rand(1, 3), rand(1, 3))
  }
  return canvasTexture(c, 4, 4)
}

function seeded(seed) {
  let s = seed >>> 0
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296 }
}

const FACADE_COLORS = [
  ['#3a2b25', '#241a18'], ['#33323a', '#1d1c23'], ['#4a3528', '#2a1d16'],
  ['#2d3438', '#191f22'], ['#463b2f', '#28211a'], ['#3b2c33', '#22181d'],
  ['#4a4238', '#2a241d'], ['#29303c', '#171b22']
]

export function facadeTexture(variant = 0) {
  const R = seeded(9173 + variant * 733)
  const { c, ctx } = makeCanvas(256, 384)
  const [base, dark] = FACADE_COLORS[variant % FACADE_COLORS.length]
  const g = ctx.createLinearGradient(0, 0, 0, 384)
  g.addColorStop(0, base); g.addColorStop(1, dark)
  ctx.fillStyle = g; ctx.fillRect(0, 0, 256, 384)
  // brick / stone noise
  for (let i = 0; i < 2600; i++) {
    ctx.fillStyle = R() > .5 ? `rgba(255,255,255,${R() * .035})` : `rgba(0,0,0,${R() * .13})`
    ctx.fillRect(R() * 256, R() * 384, R() * 3 + 1, R() * 2 + 1)
  }
  // pilasters
  ctx.fillStyle = 'rgba(0,0,0,.28)'
  ctx.fillRect(0, 0, 8, 384); ctx.fillRect(248, 0, 8, 384)
  ctx.fillStyle = 'rgba(255,255,255,.045)'
  ctx.fillRect(8, 0, 3, 384); ctx.fillRect(245, 0, 3, 384)
  // floor bands
  const rows = 6, cols = 4
  const cellW = 256 / cols, cellH = 384 / rows
  for (let r = 0; r < rows; r++) {
    ctx.fillStyle = 'rgba(0,0,0,.22)'
    ctx.fillRect(0, r * cellH + cellH - 5, 256, 5)
    for (let col = 0; col < cols; col++) {
      const x = col * cellW + 20, y = r * cellH + 20, w = cellW - 40, h = cellH - 46
      // frame
      ctx.fillStyle = 'rgba(10,8,7,.9)'
      ctx.fillRect(x - 4, y - 4, w + 8, h + 8)
      const lit = R() < .5
      if (lit) {
        const warm = R() < .78
        const gg = ctx.createLinearGradient(x, y, x, y + h)
        if (warm) { gg.addColorStop(0, 'rgba(255,214,140,.95)'); gg.addColorStop(1, 'rgba(190,120,55,.55)') }
        else { gg.addColorStop(0, 'rgba(150,190,210,.7)'); gg.addColorStop(1, 'rgba(60,95,120,.4)') }
        ctx.fillStyle = gg; ctx.fillRect(x, y, w, h)
        // curtains / silhouettes
        if (R() < .45) {
          ctx.fillStyle = 'rgba(20,12,8,.5)'
          ctx.fillRect(x, y, w, h * rand(.15, .45))
          ctx.fillRect(x + w * rand(.1, .7), y, w * rand(.12, .3), h)
        }
        if (R() < .22) { // figure
          ctx.fillStyle = 'rgba(12,8,6,.7)'
          ctx.beginPath(); ctx.arc(x + w * .55, y + h * .5, 5, 0, TAU); ctx.fill()
          ctx.fillRect(x + w * .55 - 6, y + h * .58, 12, h * .4)
        }
      } else {
        const gg = ctx.createLinearGradient(x, y, x, y + h)
        gg.addColorStop(0, 'rgba(18,26,34,.95)'); gg.addColorStop(1, 'rgba(8,12,18,.95)')
        ctx.fillStyle = gg; ctx.fillRect(x, y, w, h)
        ctx.fillStyle = 'rgba(120,150,170,.07)'
        ctx.fillRect(x + w * .1, y, w * .16, h)
      }
      // mullions
      ctx.fillStyle = 'rgba(8,6,5,.75)'
      ctx.fillRect(x + w / 2 - 1.5, y, 3, h)
      ctx.fillRect(x, y + h * .5 - 1.5, w, 3)
      // sill
      ctx.fillStyle = 'rgba(255,255,255,.07)'
      ctx.fillRect(x - 5, y + h + 4, w + 10, 3)
    }
  }
  return canvasTexture(c, 1, 1)
}

export function shopfrontTexture(variant = 0) {
  const R = seeded(5521 + variant * 191)
  const { c, ctx } = makeCanvas(512, 128)
  ctx.fillStyle = '#191419'; ctx.fillRect(0, 0, 512, 128)
  ctx.fillStyle = '#0b0a0e'; ctx.fillRect(0, 0, 512, 14)
  // big shop windows + door
  for (let i = 0; i < 5; i++) {
    if (i === 2) continue
    const x = 10 + i * 100, y = 22, w = 84, h = 82
    const lit = R() < .85
    const gg = ctx.createLinearGradient(0, y, 0, y + h)
    gg.addColorStop(0, lit ? 'rgba(255,206,130,.9)' : 'rgba(30,40,50,.9)')
    gg.addColorStop(1, lit ? 'rgba(160,92,40,.55)' : 'rgba(8,12,18,.95)')
    ctx.fillStyle = gg; ctx.fillRect(x, y, w, h)
    ctx.strokeStyle = 'rgba(6,5,4,.9)'; ctx.lineWidth = 4; ctx.strokeRect(x, y, w, h)
    ctx.fillStyle = 'rgba(20,10,6,.55)'
    ctx.fillRect(x, y + h * .55, w, h * .45)
    ctx.fillStyle = 'rgba(255,230,180,.25)'
    ctx.fillRect(x + 6, y + 6, w * .3, h * .5)
  }
  // door
  ctx.fillStyle = '#2b1d14'; ctx.fillRect(222, 26, 68, 86)
  ctx.fillStyle = 'rgba(255,210,140,.6)'; ctx.fillRect(234, 34, 44, 38)
  ctx.fillStyle = '#c9a35a'; ctx.beginPath(); ctx.arc(276, 78, 3, 0, TAU); ctx.fill()
  return canvasTexture(c, 1, 1)
}

export function signTexture(text, color = '#ffcf87', bg = 'rgba(10,7,6,.9)', vertical = false, font = 'bold') {
  const W = vertical ? 128 : 512, H = vertical ? 512 : 128
  const { c, ctx } = makeCanvas(W, H)
  ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H)
  ctx.strokeStyle = 'rgba(214,178,106,.5)'; ctx.lineWidth = 5; ctx.strokeRect(4, 4, W - 8, H - 8)
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
  ctx.shadowColor = color; ctx.shadowBlur = 26
  ctx.fillStyle = color
  if (vertical) {
    const chars = text.split('')
    const step = (H - 60) / chars.length
    ctx.font = `${font} 64px Georgia, serif`
    chars.forEach((ch, i) => ctx.fillText(ch, W / 2, 42 + step * (i + .5)))
  } else {
    let size = 64
    ctx.font = `${font} ${size}px Georgia, serif`
    while (ctx.measureText(text).width > W - 50 && size > 22) { size -= 4; ctx.font = `${font} ${size}px Georgia, serif` }
    ctx.fillText(text, W / 2, H / 2 + 4)
  }
  ctx.shadowBlur = 0
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace
  return t
}

export function awningTexture(color = '#7d2b26') {
  const { c, ctx } = makeCanvas(256, 64)
  ctx.fillStyle = color; ctx.fillRect(0, 0, 256, 64)
  for (let i = 0; i < 256; i += 32) {
    ctx.fillStyle = 'rgba(235,220,190,.82)'; ctx.fillRect(i, 0, 16, 64)
  }
  ctx.fillStyle = 'rgba(0,0,0,.18)'; ctx.fillRect(0, 52, 256, 12)
  return canvasTexture(c, 2, 1)
}

export function makeTextSprite(text, color = '#f0d493', size = 64) {
  const { c, ctx } = makeCanvas(512, 128)
  ctx.font = `italic ${size}px Georgia, serif`
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
  ctx.shadowColor = color; ctx.shadowBlur = 22
  ctx.fillStyle = color; ctx.fillText(text, 256, 64)
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace
  const m = new THREE.SpriteMaterial({ map: t, transparent: true, depthWrite: false, toneMapped: false })
  const s = new THREE.Sprite(m); s.scale.set(8, 2, 1)
  return s
}

export function disposeObject(obj) {
  obj.traverse(o => {
    if (o.geometry) o.geometry.dispose()
    if (o.material) {
      const mats = Array.isArray(o.material) ? o.material : [o.material]
      mats.forEach(m => { if (m.map) m.map.dispose(); m.dispose() })
    }
  })
  obj.removeFromParent()
}

export function setShadow(obj, cast = true, receive = false) {
  obj.traverse(o => { if (o.isMesh) { o.castShadow = cast; o.receiveShadow = receive } })
  return obj
}
