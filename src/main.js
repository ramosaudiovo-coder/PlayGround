import './style.css'
import * as THREE from 'three'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js'
import { World } from './world.js'
import { Game } from './game.js'
import { UI } from './ui.js'
import { AudioEngine } from './audio.js'

const canvas = document.getElementById('scene')
const boot = document.getElementById('boot')
const error = document.getElementById('webglError')

let renderer
try {
  renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: false,
    powerPreference: 'high-performance',
    stencil: false,
  })
} catch (err) {
  boot?.classList.add('hidden')
  error?.classList.remove('hidden')
  throw err
}

const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.6)
renderer.setPixelRatio(pixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight, false)
renderer.outputColorSpace = THREE.SRGBColorSpace
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1.02
renderer.shadowMap.enabled = false

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(52, window.innerWidth / window.innerHeight, 0.1, 2000)
camera.position.set(150, 58, 150)
camera.lookAt(0, 24, 0)

const composer = new EffectComposer(renderer)
composer.setPixelRatio(Math.min(pixelRatio, 1.4))
composer.setSize(window.innerWidth, window.innerHeight)
composer.addPass(new RenderPass(scene, camera))
const bloom = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  0.42,
  0.55,
  0.86,
)
composer.addPass(bloom)
composer.addPass(new OutputPass())

let qualityHigh = true
function setQuality(high) {
  qualityHigh = high
  bloom.enabled = high
  const ratio = high ? Math.min(pixelRatio, 1.4) : Math.min(pixelRatio, 1)
  composer.setPixelRatio(ratio)
  renderer.setPixelRatio(high ? pixelRatio : Math.min(pixelRatio, 1))
  composer.setSize(window.innerWidth, window.innerHeight)
  renderer.setSize(window.innerWidth, window.innerHeight, false)
}

const ui = new UI()
const audio = new AudioEngine()

let world
let game

try {
  world = new World(scene, renderer)
  game = new Game({
    scene,
    camera,
    renderer,
    world,
    ui,
    audio,
    qualityHandler: setQuality,
  })
  window.__OMERTA__ = { game, world, scene, camera, renderer, composer }
} catch (err) {
  console.error(err)
  boot?.classList.add('hidden')
  error?.classList.remove('hidden')
  throw err
}

function resize() {
  const width = window.innerWidth
  const height = window.innerHeight
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height, false)
  composer.setSize(width, height)
}
window.addEventListener('resize', resize)
window.addEventListener('orientationchange', () => window.setTimeout(resize, 180))

const clock = new THREE.Clock()
let started = false
let frames = 0

function animate() {
  requestAnimationFrame(animate)
  const dt = Math.min(clock.getDelta(), 0.05)
  game.update(dt)
  composer.render()
  frames++

  if (!started) {
    started = true
    window.setTimeout(() => {
      ui.hideBoot()
      if (window.innerWidth < 500 && window.innerHeight > window.innerWidth) {
        // Keep the portrait composition; the game is designed for both orientations.
      }
    }, 420)
  }
}

animate()
