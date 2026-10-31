import * as THREE from '../vendor/three.module.js';
import { World, DISTRICTS, CITY } from './world.js';
import { SoundEngine } from './audio.js';

const SAVE_KEY = 'omerta-empire-v1';
const RANKS = [
  { name: 'ASSOCIATE', at: 0 },
  { name: 'SOLDIER', at: 300 },
  { name: 'CAPO', at: 900 },
  { name: 'UNDERBOSS', at: 2000 },
  { name: 'DON', at: 4000 },
];
const TARGET_NAMES = ['Sal “The Butcher” Morelli', 'Eddie Nine-Fingers', 'Donna Carbone', 'Mickey the Fish', 'Rocco “Two Suits”', 'Frankie the Whisper', 'Tino Brass Knuckles', 'Vera the Widow'];
const PLACES = ['the Vesuvio Grand', 'the old cannery', 'Pier 9', 'the Blue Note', 'the Palm Court', 'the Continental'];
const MISSION_LINES = {
  shakedown: ['Vinnie', 'The books say this place is late. Make them remember the family’s generosity.'],
  hit: ['Vinnie', 'A problem with a name. Put him in the ground before he becomes a bigger problem.'],
  delivery: ['Vinnie', 'The crate goes where I say, when I say. Don’t open it. Don’t lose it.'],
  takeover: ['Vinnie', 'That crew has forgotten who owns this city. Go remind them.'],
};

function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
function lerpAngle(a, b, t) {
  let d = ((b - a + Math.PI) % (Math.PI * 2)) - Math.PI;
  if (d < -Math.PI) d += Math.PI * 2;
  return a + d * t;
}
function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }
function dist2(ax, az, bx, bz) { return Math.hypot(ax - bx, az - bz); }

function defaultState() {
  return {
    cash: 2500,
    respect: 0,
    crew: 0,
    heat: 0,
    rackets: {},
    districts: Object.fromEntries(DISTRICTS.map(d => [d.id, { control: d.id === 'little-italy' ? 14 : 0, controlled: false }])),
    kills: 0,
    earned: 0,
    missions: 0,
    won: false,
    settings: { sound: true, tilt: false, invert: false },
    pos: null,
    played: 0,
  };
}

export class Game {
  constructor() {
    this.canvas = document.getElementById('scene');
    this.el = {};
    for (const id of [
      'hud', 'cash', 'income', 'district-name', 'wanted', 'clock', 'objective', 'objective-kind', 'objective-district',
      'objective-title', 'objective-desc', 'objective-distance', 'objective-timer', 'health-fill', 'health-text',
      'crew-chip', 'crew-count', 'dialogue', 'dialogue-speaker', 'dialogue-text', 'context', 'context-label',
      'mission-banner', 'banner-kicker', 'banner-title', 'banner-sub', 'toasts', 'subtitle', 'joystick', 'joy-knob',
      'sprint-btn', 'fire-btn', 'action-btn', 'action-label', 'ammo-text', 'tilt-chip', 'splash', 'start-btn',
      'continue-btn', 'how-btn', 'splash-settings-btn', 'tilt-splash-btn', 'empire-panel', 'empire-worth',
      'empire-income', 'empire-crew', 'empire-rank', 'district-list', 'hire-btn', 'aside-crew', 'aside-bonus',
      'empire-advice', 'close-empire-btn', 'how-panel', 'settings-panel', 'sound-toggle', 'tilt-toggle',
      'invert-toggle', 'reset-btn', 'death-screen', 'death-sub', 'death-timer', 'ending', 'end-worth', 'end-rackets',
      'end-kills', 'end-time', 'keep-playing-btn', 'rotate-hint', 'boot-error', 'settings-btn', 'empire-btn', 'minimap',
      'speed-lines', 'damage-flash',
    ]) this.el[id] = document.getElementById(id);
    this.phase = 'splash';
    this.paused = false;
    this.started = false;
    this.clock = new THREE.Clock();
    this.time = 0;
    this.actors = [];
    this.effects = [];
    this.pickups = [];
    this.racketCooldowns = {};
    this.input = { joyX: 0, joyY: 0, fire: false, sprint: false, keys: new Set() };
    this.cameraDrag = null;
    this.pointers = new Map();
    this.camDist = 38;
    this.camHeight = 29;
    this.camYaw = 0;
    this.camManual = 0;
    this.camPos = new THREE.Vector3();
    this.camLook = new THREE.Vector3();
    this.shake = 0;
    this.ammo = 12;
    this.reloadT = 0;
    this.fireCd = 0;
    this.lastDamage = -100;
    this.lastShot = -100;
    this.lastCrime = -100;
    this.heatStars = 0;
    this.lastCopSpawn = 0;
    this.nextMissionAt = 0;
    this.mission = null;
    this.deathAt = 0;
    this.endingAt = 0;
    this.hudAcc = 0;
    this.mapAcc = 0;
    this.saveAcc = 0;
    this.screenTime = 0;
    this.tiltEnabled = false;
    this.tiltPermission = false;
    this.tiltNeutral = null;
    this.tiltValue = 0;
    this.touch = { moveId: null, baseX: 0, baseY: 0, pointerStart: null, pinch: null };
    this.hasSave = !!localStorage.getItem(SAVE_KEY);
    this.state = this.load();
    this.sound = new SoundEngine();
    this.sound.enabled = this.state.settings.sound;
    this.hitmarker = document.createElement('div');
    this.hitmarker.className = 'hitmarker';
    this.hitmarker.innerHTML = '<i></i><i></i><i></i><i></i>';
    document.body.appendChild(this.hitmarker);
  }

  async init() {
    // Deliberately wait for the display font: neon signs are painted to canvas.
    try { await document.fonts.ready; } catch (_) { /* no-op */ }
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
    this.renderer.setSize(window.innerWidth, window.innerHeight, false);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.58;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(47, window.innerWidth / window.innerHeight, 0.2, 1500);
    this.camera.position.set(220, 120, 260);
    this.world = new World(this.scene, this.renderer);
    this.buildPlayer();
    this.buildPlayerRing();
    this.renderObjective();
    this.applySettings();
    this.bindUI();
    this.bindInput();
    this.updateSplashCopy();
    this.updateHud(true);
    this.resize();
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('orientationchange', () => { this.resize(); this.tiltNeutral = null; });
    setInterval(() => this.save(), 12000);
    this.renderer.setAnimationLoop(() => this.frame());
    if (this.hasSave && this.state.settings.tilt) {
      // Do not request permission automatically; iOS requires a user gesture.
      this.setTiltVisual(false);
    }
    // remove the boot veil
    document.body.classList.add('ready');
  }

  load() {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (!raw) return defaultState();
      const s = JSON.parse(raw);
      const d = defaultState();
      return {
        ...d,
        ...s,
        settings: { ...d.settings, ...(s.settings || {}) },
        districts: { ...d.districts, ...(s.districts || {}) },
        rackets: s.rackets || {},
        pos: s.pos || null,
      };
    } catch (_) { return defaultState(); }
  }

  save() {
    if (!this.started) return;
    const s = this.state;
    s.pos = this.player ? { x: this.player.group.position.x, z: this.player.group.position.z } : null;
    s.heat = this.heat;
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(s)); } catch (_) { /* storage may be unavailable */ }
  }

  updateSplashCopy() {
    if (this.hasSave) {
      this.el['continue-btn'].classList.remove('hidden');
      this.el['start-btn'].textContent = 'NEW EMPIRE';
    } else {
      this.el['continue-btn'].classList.add('hidden');
      this.el['start-btn'].textContent = 'TAKE THE CITY';
    }
  }

  /* ---------------------------- player setup ---------------------------- */

  buildPlayer() {
    const spawn = this.world.safehouse || { x: -254, z: -254 };
    // Stand in the avenue just south of the Casa Moretti corner, facing the city.
    let x = spawn.x + 13, z = spawn.z - 4;
    if (this.state.pos && !this.world.collideCircle({ x: this.state.pos.x, z: this.state.pos.z }, 0.6)) {
      x = this.state.pos.x; z = this.state.pos.z;
    }
    const group = this.world.makePerson({
      outfit: ['#17191f', '#2b303a', '#0b0c0f'], skin: '#d5a17d', hat: '#111216', scale: 1.04, seed: 4242,
    });
    group.position.set(x, this.world.getGroundY(x, z), z);
    group.rotation.y = Math.PI;
    this.scene.add(group);
    this.player = {
      group, heading: Math.PI, speed: 0, health: 100, maxHealth: 100,
      inCar: false, car: null, carSpeed: 0, carHeading: 0, walkTime: 0,
      lastDamage: -100, dead: false,
    };
    this.camPos.copy(group.position).add(new THREE.Vector3(0, 38, 50));
    const starter = this.world.makeCar('#a63232');
    starter.position.set(x + 6.5, 0.02, z - 22);
    starter.rotation.y = Math.PI;
    starter.userData.parked = true;
    this.scene.add(starter);
    this.world.parkedCars.push(starter);
    const parked = this.world.makeCar('#2f4f6e');
    parked.position.set(x - 5.5, 0.02, z - 34);
    parked.rotation.y = Math.PI;
    parked.userData.parked = true;
    this.scene.add(parked);
    this.world.parkedCars.push(parked);
    this.playerLight = new THREE.PointLight('#ffd4a4', 22, 11, 2);
    this.playerLight.position.set(0, 3.1, 0.7);
    group.add(this.playerLight);
    this.camLook.copy(group.position);
    this.heat = this.state.heat || 0;
  }

  buildPlayerRing() {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(1.05, 0.035, 6, 42),
      new THREE.MeshBasicMaterial({ color: '#e2bf7b', transparent: true, opacity: 0.42, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }),
    );
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.05;
    this.scene.add(ring);
    this.playerRing = ring;
  }

  /* -------------------------------- UI --------------------------------- */

  bindUI() {
    const on = (id, ev, fn) => { const e = this.el[id]; if (e) e.addEventListener(ev, fn); };
    on('start-btn', 'click', () => {
      if (this.hasSave && this.el['start-btn'].dataset.confirm !== '1') {
        this.el['start-btn'].dataset.confirm = '1';
        this.el['start-btn'].textContent = 'TAP AGAIN TO BURN LEDGER';
        clearTimeout(this._startConfirmT);
        this._startConfirmT = setTimeout(() => { this.el['start-btn'].dataset.confirm = ''; this.el['start-btn'].textContent = 'NEW EMPIRE'; }, 3200);
        return;
      }
      if (this.hasSave) {
        localStorage.removeItem(SAVE_KEY);
        this.state = defaultState();
        this.hasSave = false;
        this.resetRuntimeForNewGame();
      }
      this.startGame();
    });
    on('continue-btn', 'click', () => this.startGame());
    on('how-btn', 'click', () => this.openPanel('how-panel'));
    on('splash-settings-btn', 'click', () => this.openPanel('settings-panel'));
    on('settings-btn', 'click', () => this.openPanel('settings-panel'));
    on('empire-btn', 'click', () => this.openEmpire());
    on('close-empire-btn', 'click', () => this.closePanel('empire-panel'));
    on('hire-btn', 'click', () => this.hireCrew());
    on('keep-playing-btn', 'click', () => { this.el.ending.classList.add('hidden'); this.paused = false; this.phase = 'playing'; });
    on('sound-toggle', 'click', () => this.toggleSound());
    on('tilt-toggle', 'click', () => this.toggleTilt());
    on('invert-toggle', 'click', () => { this.state.settings.invert = !this.state.settings.invert; this.applySettings(); this.save(); });
    on('reset-btn', 'click', () => this.resetGame());
    document.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', () => this.closePanel(b.dataset.close)));
    this.el['district-list'].addEventListener('click', e => {
      const buy = e.target.closest('[data-buy]');
      if (buy) return this.buyRacket(buy.dataset.buy);
      const take = e.target.closest('[data-takeover]');
      if (take) return this.planTakeover(take.dataset.takeover);
      const contract = e.target.closest('[data-contract]');
      if (contract) return this.startContractIn(contract.dataset.contract);
    });
    // splash tilt control
    this.el['tilt-splash-btn'].addEventListener('click', () => this.toggleTilt());

    on('fire-btn', 'pointerdown', e => { e.preventDefault(); this.input.fire = true; this.el['fire-btn'].classList.add('is-active'); });
    const stopFire = () => { this.input.fire = false; this.el['fire-btn'].classList.remove('is-active'); };
    on('fire-btn', 'pointerup', stopFire); on('fire-btn', 'pointercancel', stopFire); on('fire-btn', 'pointerleave', stopFire);
    on('sprint-btn', 'pointerdown', e => { e.preventDefault(); this.input.sprint = true; this.el['sprint-btn'].classList.add('is-active'); });
    const stopSprint = () => { this.input.sprint = false; this.el['sprint-btn'].classList.remove('is-active'); };
    on('sprint-btn', 'pointerup', stopSprint); on('sprint-btn', 'pointercancel', stopSprint); on('sprint-btn', 'pointerleave', stopSprint);
    on('action-btn', 'pointerdown', e => { e.preventDefault(); this.actionQueued = true; });
    this.el['action-btn'].addEventListener('contextmenu', e => e.preventDefault());
    this.el['fire-btn'].addEventListener('contextmenu', e => e.preventDefault());

    if (this.state.settings.sound) {
      const unlock = () => { this.sound.init(); window.removeEventListener('pointerdown', unlock); };
      window.addEventListener('pointerdown', unlock, { once: true });
    }
  }

  openPanel(id) {
    if (this.phase === 'splash') {
      this.el[id].classList.remove('hidden');
      return;
    }
    this.paused = true;
    this.el[id].classList.remove('hidden');
    if (id === 'settings-panel') this.renderSettings();
  }

  closePanel(id) {
    this.el[id].classList.add('hidden');
    if (this.phase !== 'splash' && !this.anyPanelOpen()) this.paused = false;
  }

  anyPanelOpen() {
    return ['empire-panel', 'how-panel', 'settings-panel'].some(id => !this.el[id].classList.contains('hidden'));
  }

  closeAllPanels() {
    for (const id of ['empire-panel', 'how-panel', 'settings-panel']) this.el[id].classList.add('hidden');
    if (this.phase === 'playing') this.paused = false;
  }

  resetRuntimeForNewGame() {
    const p = this.player;
    if (!p) return;
    const safe = this.world.safehouse || { x: -254, z: -254 };
    if (p.inCar) this.exitCar();
    p.group.position.set(safe.x + 13, this.world.getGroundY(safe.x + 13, safe.z - 4), safe.z - 4);
    p.heading = Math.PI;
    p.group.rotation.y = Math.PI;
    p.health = p.maxHealth;
    p.dead = false;
    p.group.rotation.z = 0;
    p.group.visible = true;
    this.heat = 0;
    this.ammo = 12;
    if (this.mission && this.mission.marker) this.world.removeMarker(this.mission.marker);
    this.mission = null;
    for (const a of this.actors) { this.scene.remove(a.group); if (a.bar) this.scene.remove(a.bar); }
    this.actors = [];
    for (const d of DISTRICTS) {
      const hq = this.world.hqs[d.id];
      if (hq && hq.marker) hq.marker.visible = true;
    }
    this.nextMissionAt = this.time + 2.2;
    this.renderObjective();
  }

  startGame() {
    this.started = true;
    this.phase = 'playing';
    this.paused = false;
    this.hasSave = true;
    this.sound.init().then(() => { this.sound.setEnabled(this.state.settings.sound); });
    this.el.splash.classList.add('gone');
    this.el.hud.classList.remove('hidden');
    if (this.state.settings.tilt) this.enableTilt(true, true);
    this.camYaw = 0;
    this.nextMissionAt = this.time + 2.2;
    this.save();
    setTimeout(() => {
      this.say('VINNIE “THE GHOST”', 'Welcome home, boss. The city’s been getting ideas while you were away. Follow the gold light — we’ll start with the bakery.', 6200);
    }, 800);
    setTimeout(() => this.toast('Follow the gold beam · tap ACTION when you arrive', 'gold'), 1600);
    if (this.state.won) this.toast('Your empire is already legend. Keep the streets warm.', 'gold');
  }

  renderSettings() {
    this.el['sound-toggle'].setAttribute('aria-pressed', String(!!this.state.settings.sound));
    this.el['tilt-toggle'].setAttribute('aria-pressed', String(!!this.state.settings.tilt));
    this.el['invert-toggle'].setAttribute('aria-pressed', String(!!this.state.settings.invert));
  }

  toggleSound() {
    this.state.settings.sound = !this.state.settings.sound;
    this.sound.setEnabled(this.state.settings.sound);
    if (this.state.settings.sound) this.sound.init();
    this.renderSettings(); this.applySettings(); this.save();
  }

  applySettings() {
    this.el['sound-toggle']?.setAttribute('aria-pressed', String(!!this.state.settings.sound));
    this.el['tilt-toggle']?.setAttribute('aria-pressed', String(!!this.state.settings.tilt));
    this.el['invert-toggle']?.setAttribute('aria-pressed', String(!!this.state.settings.invert));
    this.setTiltVisual(!!this.state.settings.tilt);
    if (!this.state.settings.tilt) this.stopTilt();
  }

  setTiltVisual(on) {
    this.el['tilt-splash-btn'].classList.toggle('on', on);
    this.el['tilt-splash-btn'].setAttribute('aria-pressed', String(on));
    this.el['tilt-chip'].classList.toggle('hidden', !(on && this.started));
  }

  async toggleTilt() {
    const next = !this.state.settings.tilt;
    if (next) {
      const ok = await this.enableTilt(false, false);
      if (!ok) {
        this.toast('Motion permission was not granted. The touch stick still works.', 'bad');
        return;
      }
    } else {
      this.stopTilt();
    }
    this.state.settings.tilt = next;
    this.applySettings();
    this.save();
    this.toast(next ? 'Tilt steering enabled — tilt to steer while driving' : 'Tilt steering off', next ? 'good' : '');
  }

  async enableTilt(quiet = false, fromStart = false) {
    if (!('DeviceOrientationEvent' in window)) {
      if (!quiet) this.toast('This device does not report motion.', 'bad');
      return false;
    }
    try {
      if (typeof DeviceMotionEvent !== 'undefined' && typeof DeviceMotionEvent.requestPermission === 'function') {
        const res = await DeviceMotionEvent.requestPermission();
        if (res !== 'granted') return false;
      }
    } catch (_) { return false; }
    this.tiltPermission = true;
    this.tiltEnabled = true;
    this.tiltNeutral = null;
    if (!this._tiltBound) {
      this._tiltBound = (ev) => this.handleTilt(ev);
      window.addEventListener('deviceorientation', this._tiltBound, true);
    }
    if (!quiet) this.toast('Tilt ready — hold the wheel steady', 'good');
    return true;
  }

  stopTilt() {
    this.tiltEnabled = false;
    this.tiltValue = 0;
    this.el['tilt-chip'].classList.add('hidden');
  }

  handleTilt(ev) {
    if (!this.tiltEnabled) return;
    const angle = (screen.orientation && screen.orientation.angle) || window.orientation || 0;
    const abs = Math.abs(Number(angle));
    const raw = abs === 90 ? ev.beta : ev.gamma;
    if (raw == null) return;
    if (this.tiltNeutral == null) this.tiltNeutral = raw;
    this.tiltNeutral += (raw - this.tiltNeutral) * 0.002;
    let v = (raw - this.tiltNeutral) / 22;
    if (this.state.settings.invert) v *= -1;
    this.tiltValue = clamp(v, -1, 1);
  }

  resetGame() {
    if (this.el['reset-btn'].dataset.confirm !== '1') {
      this.el['reset-btn'].dataset.confirm = '1';
      this.el['reset-btn'].querySelector('i').textContent = 'CONFIRM';
      return;
    }
    localStorage.removeItem(SAVE_KEY);
    location.reload();
  }

  /* ------------------------------- input -------------------------------- */

  bindInput() {
    const joy = this.el.joystick;
    const knob = this.el['joy-knob'];
    const max = 46;
    const setKnob = (x, y) => { knob.style.transform = `translate(${x}px, ${y}px)`; };
    joy.addEventListener('pointerdown', e => {
      e.preventDefault(); e.stopPropagation();
      this.touch.moveId = e.pointerId;
      joy.setPointerCapture(e.pointerId);
      const r = joy.getBoundingClientRect();
      this.touch.baseX = r.left + r.width / 2;
      this.touch.baseY = r.top + r.height / 2;
      const dx = clamp(e.clientX - this.touch.baseX, -max, max);
      const dy = clamp(e.clientY - this.touch.baseY, -max, max);
      const len = Math.hypot(dx, dy) || 1;
      const k = Math.min(1, max / len);
      const nx = dx * k, ny = dy * k;
      this.input.joyX = nx / max; this.input.joyY = ny / max;
      setKnob(nx, ny);
    });
    joy.addEventListener('pointermove', e => {
      if (e.pointerId !== this.touch.moveId) return;
      e.preventDefault();
      const dx = clamp(e.clientX - this.touch.baseX, -max, max);
      const dy = clamp(e.clientY - this.touch.baseY, -max, max);
      let nx = dx, ny = dy;
      const len = Math.hypot(dx, dy);
      if (len > max) { nx = dx / len * max; ny = dy / len * max; }
      this.input.joyX = nx / max; this.input.joyY = ny / max;
      setKnob(nx, ny);
    });
    const endJoy = e => {
      if (e.pointerId !== this.touch.moveId) return;
      this.touch.moveId = null; this.input.joyX = 0; this.input.joyY = 0; setKnob(0, 0);
    };
    joy.addEventListener('pointerup', endJoy); joy.addEventListener('pointercancel', endJoy);

    // canvas camera swipes + pinch
    this.canvas.addEventListener('pointerdown', e => {
      if (this.phase === 'splash') return;
      this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (this.pointers.size === 1) {
        this.cameraDrag = { id: e.pointerId, x: e.clientX, y: e.clientY, moved: 0 };
      } else if (this.pointers.size === 2) {
        const p = [...this.pointers.values()];
        this.touch.pinch = { d: Math.hypot(p[0].x - p[1].x, p[0].y - p[1].y), dist: this.camDist };
        this.cameraDrag = null;
      }
      this.canvas.setPointerCapture(e.pointerId);
    });
    this.canvas.addEventListener('pointermove', e => {
      if (!this.pointers.has(e.pointerId)) return;
      this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (this.pointers.size === 2 && this.touch.pinch) {
        const p = [...this.pointers.values()];
        const d = Math.hypot(p[0].x - p[1].x, p[0].y - p[1].y);
        this.camDist = clamp(this.touch.pinch.dist + (this.touch.pinch.d - d) * 0.09, 19, 48);
        return;
      }
      if (this.cameraDrag && this.cameraDrag.id === e.pointerId) {
        const dx = e.clientX - this.cameraDrag.x;
        this.cameraDrag.moved += Math.abs(dx);
        if (this.cameraDrag.moved > 5) {
          this.camYaw -= dx * 0.006;
          this.camManual = 2.6;
          this.cameraDrag.x = e.clientX;
        }
      }
    });
    const endPointer = e => {
      this.pointers.delete(e.pointerId);
      if (this.cameraDrag && this.cameraDrag.id === e.pointerId) this.cameraDrag = null;
      if (this.pointers.size < 2) this.touch.pinch = null;
    };
    this.canvas.addEventListener('pointerup', endPointer);
    this.canvas.addEventListener('pointercancel', endPointer);
    this.canvas.addEventListener('wheel', e => { e.preventDefault(); this.camDist = clamp(this.camDist + e.deltaY * 0.02, 19, 48); }, { passive: false });
    this.canvas.addEventListener('contextmenu', e => e.preventDefault());

    window.addEventListener('keydown', e => {
      if (e.repeat) return;
      this.input.keys.add(e.code);
      if (e.code === 'Space') { e.preventDefault(); this.input.fire = true; }
      if (e.code === 'KeyE') this.actionQueued = true;
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') this.input.sprint = true;
      if (e.code === 'Tab') { e.preventDefault(); if (this.phase === 'playing') this.openEmpire(); }
      if (e.code === 'Escape') this.closeAllPanels();
    });
    window.addEventListener('keyup', e => {
      this.input.keys.delete(e.code);
      if (e.code === 'Space') this.input.fire = false;
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') this.input.sprint = false;
    });
    window.addEventListener('blur', () => { this.input.fire = false; this.input.sprint = false; this.input.keys.clear(); });
  }

  get moveVector() {
    let x = this.input.joyX, y = this.input.joyY;
    const k = this.input.keys;
    if (k.has('KeyA') || k.has('ArrowLeft')) x -= 1;
    if (k.has('KeyD') || k.has('ArrowRight')) x += 1;
    if (k.has('KeyW') || k.has('ArrowUp')) y -= 1;
    if (k.has('KeyS') || k.has('ArrowDown')) y += 1;
    const len = Math.hypot(x, y);
    if (len > 1) { x /= len; y /= len; }
    if (len < 0.13) return { x: 0, y: 0, mag: 0 };
    return { x, y, mag: Math.min(1, len) };
  }

  resize() {
    if (!this.renderer) return;
    const w = window.innerWidth, h = window.innerHeight;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    const portrait = h > w;
    this.el['rotate-hint'].classList.toggle('hidden', !(portrait && this.phase === 'playing' && w < 500 && this.time > 30));
  }

  /* ------------------------------- helpers ------------------------------ */

  get rank() {
    let r = RANKS[0];
    for (const rank of RANKS) if (this.state.respect >= rank.at) r = rank;
    return r;
  }

  get incomePerMin() {
    let base = 0;
    for (const r of this.world.rackets) if (this.state.rackets[r.id]) base += r.income;
    return Math.round(base * (1 + this.state.crew * 0.08));
  }

  get netWorth() {
    let v = this.state.cash;
    for (const r of this.world.rackets) if (this.state.rackets[r.id]) v += r.cost * 1.4;
    return Math.round(v);
  }

  addCash(n, opts = {}) {
    this.state.cash = Math.max(0, this.state.cash + n);
    if (n > 0) this.state.earned += n;
    if (opts.float !== false) this.floatText(`${n >= 0 ? '+' : '-'}${money(Math.abs(n))}`, n >= 0 ? '#e2bf7b' : '#ff7b6b');
    if (opts.sound !== false) this.sound.cash();
    this.updateHud(true);
  }

  addRespect(n) {
    this.state.respect += n;
    if (n > 0) this.floatText(`+${n} RESPECT`, '#b7dcc2');
  }

  toast(text, kind = '', ms = 3400) {
    const div = document.createElement('div');
    div.className = `toast ${kind}`;
    div.textContent = text;
    this.el.toasts.appendChild(div);
    setTimeout(() => {
      div.classList.add('out');
      setTimeout(() => div.remove(), 380);
    }, ms);
  }

  floatText(text, color = '#e2bf7b', worldPos = null) {
    const div = document.createElement('div');
    div.className = 'float-text';
    div.textContent = text;
    div.style.color = color;
    let x = window.innerWidth / 2, y = window.innerHeight * 0.52;
    if (worldPos) {
      const v = worldPos.clone(); v.y += 2.2; v.project(this.camera);
      x = (v.x + 1) / 2 * window.innerWidth;
      y = (-v.y + 1) / 2 * window.innerHeight;
    }
    div.style.left = `${x}px`; div.style.top = `${y}px`;
    document.body.appendChild(div);
    setTimeout(() => div.remove(), 1400);
  }

  say(speaker, text, ms = 5000) {
    this.el['dialogue-speaker'].textContent = speaker;
    this.el['dialogue-text'].textContent = text;
    this.el.dialogue.classList.remove('hidden');
    this.el.dialogue.classList.remove('show');
    void this.el.dialogue.offsetWidth;
    this.el.dialogue.classList.add('show');
    clearTimeout(this._dialogueT);
    this._dialogueT = setTimeout(() => {
      this.el.dialogue.classList.add('hidden');
      this.el.dialogue.classList.remove('show');
    }, ms);
  }

  banner(kicker, title, sub, bad = false) {
    const b = this.el['mission-banner'];
    this.el['banner-kicker'].textContent = kicker;
    this.el['banner-title'].textContent = title;
    this.el['banner-sub'].textContent = sub;
    b.classList.remove('hidden', 'out');
    b.style.setProperty('--banner-accent', bad ? '#c94a3c' : '#d6b371');
    clearTimeout(this._bannerT);
    this._bannerT = setTimeout(() => {
      b.classList.add('out');
      setTimeout(() => b.classList.add('hidden'), 500);
    }, 3400);
  }

  hitMarker() {
    this.hitmarker.classList.remove('on');
    void this.hitmarker.offsetWidth;
    this.hitmarker.classList.add('on');
  }

  /* -------------------------------- loop -------------------------------- */

  frame() {
    const dt = Math.min(this.clock.getDelta(), 0.05);
    if (this.player && this.world) this.world.shadowFocus = this.player.group.position;
    if (this.phase === 'splash') {
      this.world.update(dt);
      this.updateSplashCamera(dt);
      this.renderer.render(this.scene, this.camera);
      return;
    }
    if (this.phase === 'ending') {
      this.world.update(dt);
      this.updateSplashCamera(dt);
      this.renderer.render(this.scene, this.camera);
      return;
    }
    if (this.paused) {
      this.renderer.render(this.scene, this.camera);
      return;
    }
    this.time += dt;
    this.state.played = (this.state.played || 0) + dt;
    this.world.update(dt);
    this.updateEffects(dt);
    this.updatePickups(dt);
    if (this.phase === 'dead') {
      this.updateDeath(dt);
      this.updateCamera(dt);
    } else {
      this.updatePlayer(dt);
      this.updateActors(dt);
      this.updateMissions(dt);
      this.updateCops(dt);
      this.updateCamera(dt);
      this.updateInteraction();
      if (this.actionQueued) { this.doAction(); this.actionQueued = false; }
      if (this.input.fire) this.tryShoot();
      this.updateHealthRegen(dt);
      if (this.endingAt && this.time >= this.endingAt) this.triggerEnding();
    }
    this.hudAcc += dt; this.mapAcc += dt; this.saveAcc += dt;
    if (this.hudAcc > 0.1) { this.updateHud(); this.hudAcc = 0; }
    if (this.mapAcc > 0.22) { this.drawMinimap(); this.mapAcc = 0; }
    if (this.saveAcc > 10) { this.save(); this.saveAcc = 0; }
    this.renderer.render(this.scene, this.camera);
  }

  updateSplashCamera(dt) {
    this.splashAngle = (this.splashAngle || 1.05) + dt * 0.018;
    const a = this.splashAngle;
    this.camera.position.set(Math.sin(a) * 285, 118 + Math.sin(a * 0.7) * 14, Math.cos(a) * 285);
    this.camera.lookAt(0, 24, 18);
  }

  /* ------------------------------- player ------------------------------- */

  updatePlayer(dt) {
    const p = this.player;
    if (p.inCar) this.updateDriving(dt);
    else this.updateOnFoot(dt);

    if (this.reloadT > 0) {
      this.reloadT -= dt;
      if (this.reloadT <= 0) {
        this.ammo = 12;
        this.el['ammo-text'].textContent = '12';
        document.querySelector('.ammo-ring')?.classList.remove('reloading');
      }
    }
    if (this.fireCd > 0) this.fireCd -= dt;

    if (this.playerRing) {
      this.playerRing.visible = !p.inCar && !p.dead;
      if (!p.inCar) {
        this.playerRing.position.set(p.group.position.x, this.world.getGroundY(p.group.position.x, p.group.position.z) + 0.05, p.group.position.z);
        this.playerRing.rotation.z += dt * 0.5;
      }
    }
    this.el['vitals']?.classList.toggle('hidden', false);
  }

  updateOnFoot(dt) {
    const p = this.player;
    const m = this.moveVector;
    const fwd = -m.y, strafe = m.x;
    const wx = -Math.sin(this.camYaw) * fwd + Math.cos(this.camYaw) * strafe;
    const wz = -Math.cos(this.camYaw) * fwd - Math.sin(this.camYaw) * strafe;
    const moving = Math.hypot(wx, wz) > 0.1;
    const sprint = this.input.sprint && m.mag > 0.2;
    const targetSpeed = moving ? (sprint ? 12.2 : 6.6) * Math.min(1, m.mag * 1.35) : 0;
    p.speed += (targetSpeed - p.speed) * Math.min(1, dt * 12);
    if (moving) {
      const desired = Math.atan2(wx, wz);
      p.heading = lerpAngle(p.heading, desired, Math.min(1, dt * 13));
      p.group.rotation.y = p.heading;
    }
    if (p.speed > 0.05) {
      p.group.position.x += Math.sin(p.heading) * p.speed * dt;
      p.group.position.z += Math.cos(p.heading) * p.speed * dt;
      this.world.resolveCircle(p.group.position, 0.56);
    }
    p.walkTime += dt * (2.2 + p.speed * 0.9);
    const walk = moving ? Math.sin(p.walkTime * 4.4) : 0;
    const amp = clamp(p.speed / 8, 0, 1);
    p.group.userData.legL.rotation.x = walk * 0.55 * amp;
    p.group.userData.legR.rotation.x = -walk * 0.55 * amp;
    p.group.position.y = this.world.getGroundY(p.group.position.x, p.group.position.z) + Math.abs(walk) * 0.035 * amp;
    p.group.rotation.z = 0;
    this.sound.setEngine(false);
    this.el['speed-lines'].classList.remove('on');
    this.el['tilt-chip'].classList.add('hidden');
  }

  updateDriving(dt) {
    const p = this.player, car = p.car;
    if (!car) { p.inCar = false; return; }
    const m = this.moveVector;
    let throttle = -m.y;
    const keys = this.input.keys;
    if (keys.has('KeyW') || keys.has('ArrowUp')) throttle = 1;
    if (keys.has('KeyS') || keys.has('ArrowDown')) throttle = -1;
    let steer = m.x;
    if (keys.has('KeyA') || keys.has('ArrowLeft')) steer = -1;
    if (keys.has('KeyD') || keys.has('ArrowRight')) steer = 1;
    if (this.tiltEnabled && Math.abs(this.tiltValue) > 0.06) steer += this.tiltValue * 0.9;
    steer = clamp(steer, -1, 1);
    const handbrake = this.input.sprint;

    if (throttle > 0.1) p.carSpeed += 22 * throttle * dt;
    else if (throttle < -0.1) p.carSpeed += (p.carSpeed > 2 ? 38 : 13) * throttle * dt;
    p.carSpeed -= p.carSpeed * (handbrake ? 4.2 : 0.62) * dt;
    p.carSpeed = clamp(p.carSpeed, -12, 37);
    if (Math.abs(p.carSpeed) < 0.05) p.carSpeed = 0;
    const turn = clamp(Math.abs(p.carSpeed) / 10, 0, 1) * (handbrake ? 2.4 : 1.75) * (p.carSpeed < -1 ? -1 : 1);
    if (Math.abs(p.carSpeed) > 0.4) p.carHeading += steer * turn * dt;
    const nx = car.position.x + Math.sin(p.carHeading) * p.carSpeed * dt;
    const nz = car.position.z + Math.cos(p.carHeading) * p.carSpeed * dt;
    const probe = { x: nx, z: nz };
    if (this.world.collideCircle(probe, 1.45)) {
      this.world.resolveCircle(probe, 1.45);
      const hard = Math.abs(p.carSpeed) > 12;
      if (hard) {
        this.sound.crash(); this.shake = Math.max(this.shake, 0.8);
        if (Math.abs(p.carSpeed) > 22) this.damagePlayer(3, 'crash');
        this.addFlash(new THREE.Vector3(nx, 1.2, nz), '#ffd08a', 2.4, 0.12);
      }
      p.carSpeed *= -0.18;
    }
    car.position.set(probe.x, 0.02, probe.z);
    car.rotation.y = p.carHeading;
    if (car.userData.body) car.userData.body.rotation.z = -steer * Math.min(0.065, Math.abs(p.carSpeed) / 520);
    p.group.position.set(car.position.x, 0, car.position.z);
    p.group.visible = false;
    p.heading = p.carHeading;
    this.playerRing.visible = false;

    this.sound.setEngine(true, p.carSpeed, 37);
    this.el['speed-lines'].classList.toggle('on', Math.abs(p.carSpeed) > 24);
    this.el['tilt-chip'].classList.toggle('hidden', !this.tiltEnabled);
    if (this.input.fire) this.tryShoot();
  }

  updateHealthRegen(dt) {
    const p = this.player;
    if (p.dead) return;
    if (this.time - this.lastDamage > 7 && p.health < p.maxHealth) {
      p.health = Math.min(p.maxHealth, p.health + 3.2 * dt);
    }
  }

  /* ------------------------------- camera ------------------------------- */

  updateCamera(dt) {
    const p = this.player;
    const focus = p.inCar && p.car ? p.car.position : p.group.position;
    if (p.inCar && this.camManual <= 0) {
      if (Math.abs(p.carSpeed) > 2) {
        const behind = p.carHeading + Math.PI;
        this.camYaw = lerpAngle(this.camYaw, behind, Math.min(1, dt * 1.15));
      }
    }
    if (this.camManual > 0) this.camManual -= dt;
    const driving = p.inCar;
    let dist = driving ? this.camDist + 7 : this.camDist;
    const height = driving ? this.camHeight + 5 : this.camHeight;
    const lookAhead = driving ? 8.5 : 4.2;
    const fx = Math.sin(p.heading) * lookAhead, fz = Math.cos(p.heading) * lookAhead;
    const look = this._lookTarget || (this._lookTarget = new THREE.Vector3());
    look.set(focus.x + fx, focus.y + 1.35, focus.z + fz);
    this.camLook.lerp(look, Math.min(1, dt * 7));
    const desired = this._camDesired || (this._camDesired = new THREE.Vector3());
    const targetGround = driving ? 0 : this.world.getGroundY(focus.x, focus.z);
    desired.set(focus.x + Math.sin(this.camYaw) * dist, targetGround + height, focus.z + Math.cos(this.camYaw) * dist);
    // Keep the lens out of the masonry.
    let steps = 0;
    while (this.world.collideCircle({ x: desired.x, z: desired.z }, 1.4) && steps < 6) {
      dist *= 0.82;
      desired.set(focus.x + Math.sin(this.camYaw) * dist, targetGround + height, focus.z + Math.cos(this.camYaw) * dist);
      steps++;
    }
    this.camPos.lerp(desired, Math.min(1, dt * 5.6));
    const cam = this.camera;
    cam.position.copy(this.camPos);
    if (this.shake > 0.01) {
      const s = this.shake;
      cam.position.x += (Math.random() - 0.5) * s;
      cam.position.y += (Math.random() - 0.5) * s * 0.7;
      cam.position.z += (Math.random() - 0.5) * s;
      this.shake *= Math.pow(0.02, dt);
    }
    cam.lookAt(this.camLook);
    const fov = driving ? (this.camera.aspect < 0.85 ? 68 : 52) + clamp(Math.abs(p.carSpeed) / 37, 0, 1) * 7 : (this.camera.aspect < 0.85 ? 62 : 47);
    cam.fov += (fov - cam.fov) * Math.min(1, dt * 3);
    cam.updateProjectionMatrix();
  }

  /* ------------------------------ interaction --------------------------- */

  getInteraction() {
    const p = this.player;
    if (!p || p.dead) return null;
    if (p.inCar) return { type: 'exit', label: 'Leave the vehicle', short: 'EXIT' };
    const px = p.group.position.x, pz = p.group.position.z;
    if (this.mission) {
      const t = this.mission.target;
      if (dist2(px, pz, t.x, t.z) < 8) {
        if (this.mission.stage === 'travel') {
          const labels = {
            shakedown: ['Collect the tribute', 'COLLECT'],
            hit: ['Spring the ambush', 'AMBUSH'],
            delivery: ['Take the crate', 'TAKE'],
            takeover: ['Storm the headquarters', 'STORM'],
          };
          const l = labels[this.mission.type] || ['Take the job', 'START'];
          return { type: 'mission', label: l[0], short: l[1] };
        }
        if (this.mission.stage === 'deliver') return { type: 'deliver', label: 'Hand over the crate', short: 'DELIVER' };
      }
    }
    if (this.world.safehouse && dist2(px, pz, this.world.safehouse.x, this.world.safehouse.z) < 7) {
      return { type: 'rest', label: 'Rest, heal and save', short: 'REST' };
    }
    const owned = this.world.rackets.find(r => this.state.rackets[r.id] && dist2(px, pz, r.x, r.z) < 7);
    if (owned) {
      const ready = (this.time - (this.racketCooldowns[owned.id] || -999)) > 45;
      return { type: 'collect', label: ready ? `Collect tribute at ${owned.name}` : 'Tribute already collected', short: ready ? 'COLLECT' : 'WAIT', disabled: !ready, racket: owned };
    }
    const car = this.world.nearestCar(px, pz, 6.2);
    if (car) return { type: 'enter', label: 'Get in the car', short: 'DRIVE', car };
    return null;
  }

  updateInteraction() {
    const i = this.getInteraction();
    this.interaction = i;
    const el = this.el;
    if (!i) {
      el.context.classList.add('hidden');
      el['action-btn'].classList.remove('ready');
      el['action-label'].textContent = 'USE';
      return;
    }
    el.context.classList.remove('hidden');
    el.context.classList.toggle('actionable', !i.disabled);
    el['context-label'].textContent = i.label;
    el['action-btn'].classList.toggle('ready', !i.disabled);
    el['action-label'].textContent = i.short || 'USE';
  }

  doAction() {
    const i = this.interaction;
    if (!i || i.disabled) return;
    this.sound.click();
    switch (i.type) {
      case 'exit': this.exitCar(); break;
      case 'enter': this.enterCar(i.car); break;
      case 'rest':
        this.player.health = this.player.maxHealth;
        this.save();
        this.toast('The doctor patched you up. Ledger saved.', 'good');
        this.addFlash(this.player.group.position.clone().setY(1.4), '#7fd3a0', 2.2, 0.3);
        break;
      case 'collect': {
        const amt = Math.max(140, i.racket.income * 2);
        this.racketCooldowns[i.racket.id] = this.time;
        this.addCash(amt);
        this.addRespect(8);
        this.toast(`Tribute collected from ${i.racket.name}`, 'gold');
        break;
      }
      case 'mission': this.beginMissionAction(); break;
      case 'deliver': this.finishDelivery(); break;
    }
  }

  enterCar(car) {
    const p = this.player;
    p.car = car;
    p.inCar = true;
    p.carSpeed = Math.min(8, Math.abs(p.carSpeed));
    p.carHeading = car.rotation.y;
    p.group.visible = false;
    this.playerRing.visible = false;
    const parked = this.world.parkedCars.indexOf(car);
    if (parked >= 0) this.world.parkedCars.splice(parked, 1);
    if (car.userData.traffic) car.userData.traffic.stolen = true;
    this.camManual = 0;
    this.toast('Engine running. The city is yours.', '');
  }

  exitCar() {
    const p = this.player;
    if (!p.car) return;
    const car = p.car;
    p.carSpeed = 0;
    const rx = Math.cos(p.carHeading), rz = -Math.sin(p.carHeading);
    let pos = { x: car.position.x + rx * 3, z: car.position.z + rz * 3 };
    if (this.world.collideCircle(pos, 0.65)) pos = { x: car.position.x - rx * 3, z: car.position.z - rz * 3 };
    this.world.resolveCircle(pos, 0.65);
    p.group.position.set(pos.x, this.world.getGroundY(pos.x, pos.z), pos.z);
    p.group.visible = true;
    p.inCar = false;
    p.car = null;
    p.heading = p.carHeading;
    p.group.rotation.y = p.heading;
    p.group.userData.legL.rotation.x = 0;
    p.group.userData.legR.rotation.x = 0;
    if (!this.world.parkedCars.includes(car)) this.world.parkedCars.push(car);
    car.userData.body.rotation.z = 0;
    this.sound.setEngine(false);
    this.el['speed-lines'].classList.remove('on');
    this.el['tilt-chip'].classList.add('hidden');
    this.camManual = 0;
  }

  /* -------------------------------- combat ------------------------------ */

  findTarget(maxDist = 32) {
    let best = null, bd = maxDist * maxDist;
    for (const a of this.actors) {
      if (a.dead || a.kind === 'bodyguard') continue;
      const d = a.group.position.distanceToSquared(this.player.group.position);
      if (d < bd) { bd = d; best = a; }
    }
    return best;
  }

  tryShoot() {
    if (this.phase !== 'playing' || this.player.dead) return;
    if (this.reloadT > 0 || this.fireCd > 0) return;
    if (this.ammo <= 0) {
      this.startReload();
      return;
    }
    const p = this.player;
    const car = p.inCar;
    this.ammo--;
    this.fireCd = 0.19;
    this.el['ammo-text'].textContent = String(this.ammo);
    this.lastShot = this.time;
    this.shake = Math.max(this.shake, car ? 0.26 : 0.16);
    this.sound.shot(car);
    this.world.panic(p.group.position.x, p.group.position.z, 6);
    this.crime(0.045);
    let from;
    if (car) from = new THREE.Vector3(p.car.position.x + Math.sin(p.carHeading) * 1.4, 1.1, p.car.position.z + Math.cos(p.carHeading) * 1.4);
    else from = new THREE.Vector3(p.group.position.x, 1.45, p.group.position.z);
    const target = this.findTarget(34);
    const to = new THREE.Vector3();
    if (target) {
      to.set(target.group.position.x, 1.2, target.group.position.z);
      this.damageActor(target, 26 + Math.random() * 14);
    } else {
      const h = p.inCar ? p.carHeading : p.heading;
      to.set(from.x + Math.sin(h) * 34, 1.2 + (Math.random() - 0.5), from.z + Math.cos(h) * 34);
    }
    this.addTracer(from, to, '#ffe1a5');
    this.addFlash(from, '#ffd17a', 1.7, 0.055);
    if (this.ammo <= 0) this.startReload();
  }

  startReload() {
    if (this.reloadT > 0) return;
    this.reloadT = 1.25;
    this.sound.reload();
    document.querySelector('.ammo-ring')?.classList.add('reloading');
  }

  crime(amount) {
    this.heat = clamp(this.heat + amount, 0, 5);
    this.lastCrime = this.time;
  }

  damagePlayer(amount, cause = 'bullet') {
    const p = this.player;
    if (p.dead) return;
    p.health = Math.max(0, p.health - amount);
    this.lastDamage = this.time;
    this.shake = Math.max(this.shake, 0.38);
    this.el['damage-flash'].classList.add('on');
    clearTimeout(this._dmgT);
    this._dmgT = setTimeout(() => this.el['damage-flash'].classList.remove('on'), 80);
    this.sound.hurt();
    if (p.health <= 0) this.die(cause);
  }

  startReloadAndReset() { this.ammo = 12; document.querySelector('.ammo-ring')?.classList.remove('reloading'); }

  /* -------------------------------- actors ------------------------------ */

  spawnActor(x, z, kind, opts = {}) {
    const palettes = {
      guard: [['#3b2629', '#57353b', '#1a1012'], '#c49170', '#211315'],
      target: [['#d6d0c1', '#b8ae9a', '#2c2822'], '#d5a17d', '#33302a'],
      cop: [['#172b4b', '#24446f', '#0b1420'], '#c99b7b', '#111b2d'],
      bodyguard: [['#1f2229', '#30343e', '#0b0c0f'], '#c79a78', '#14161b'],
    };
    const pal = palettes[kind] || palettes.guard;
    const group = this.world.makePerson({ outfit: pal[0], skin: pal[1], hat: pal[2], scale: 0.98 + Math.random() * 0.06 });
    group.position.set(x, this.world.getGroundY(x, z), z);
    this.scene.add(group);
    const health = opts.health || (kind === 'target' ? 135 : kind === 'bodyguard' ? 110 : kind === 'cop' ? 70 : 58);
    const a = {
      group, kind, name: opts.name || (kind === 'target' ? TARGET_NAMES[Math.floor(Math.random() * TARGET_NAMES.length)] : ''),
      health, maxHealth: health, speed: kind === 'target' ? 5.6 : kind === 'cop' ? 6.4 : kind === 'bodyguard' ? 6.2 : 4.9,
      damage: kind === 'target' ? 8 : kind === 'cop' ? 6 : kind === 'bodyguard' ? 14 : 5,
      fireTimer: 0.8 + Math.random() * 1.4, dead: false, deadT: 0, phase: Math.random() * 6.28,
      mission: opts.mission || null, isBoss: kind === 'target', retreat: false,
    };
    // health bar
    const bar = new THREE.Group();
    const bg = new THREE.Mesh(new THREE.PlaneGeometry(1.55, 0.17), new THREE.MeshBasicMaterial({ color: '#070708', transparent: true, opacity: 0.7, depthWrite: false, toneMapped: false }));
    const fill = new THREE.Mesh(new THREE.PlaneGeometry(1.45, 0.085), new THREE.MeshBasicMaterial({ color: kind === 'cop' ? '#6a9ad8' : kind === 'bodyguard' ? '#7fd3a0' : '#d45d4c', depthWrite: false, toneMapped: false }));
    fill.position.z = 0.01; fill.position.x = 0;
    bar.add(bg, fill);
    bar.visible = false;
    this.scene.add(bar);
    a.bar = bar; a.fill = fill;
    this.actors.push(a);
    if (kind === 'cop') this.sound.enemyShot();
    return a;
  }

  updateActors(dt) {
    const p = this.player;
    const px = p.group.position.x, pz = p.group.position.z;
    for (let i = this.actors.length - 1; i >= 0; i--) {
      const a = this.actors[i];
      const g = a.group;
      if (a.dead) {
        a.deadT += dt;
        g.rotation.z = Math.min(Math.PI / 2, a.deadT * 4.5);
        g.position.y = this.world.getGroundY(g.position.x, g.position.z) + Math.min(-0.25, -a.deadT * 0.06);
        if (a.bar) a.bar.visible = false;
        if (a.deadT > 3.2) {
          this.scene.remove(g); if (a.bar) this.scene.remove(a.bar);
          this.actors.splice(i, 1);
        }
        continue;
      }
      const d = Math.hypot(g.position.x - px, g.position.z - pz);
      let moveX = 0, moveZ = 0;
      let face = Math.atan2(px - g.position.x, pz - g.position.z);
      if (a.kind === 'bodyguard') {
        let hostile = null, hd = 30;
        for (const o of this.actors) {
          if (o.dead || o.kind === 'bodyguard') continue;
          const dd = o.group.position.distanceToSquared(g.position);
          if (dd < hd * hd) { hd = Math.sqrt(dd); hostile = o; }
        }
        if (d > 5.2) { moveX = (px - g.position.x) / d; moveZ = (pz - g.position.z) / d; }
        else if (d < 2.6) { moveX = -(px - g.position.x) / (d || 1); moveZ = -(pz - g.position.z) / (d || 1); }
        if (hostile) {
          face = Math.atan2(hostile.group.position.x - g.position.x, hostile.group.position.z - g.position.z);
          a.fireTimer -= dt;
          if (a.fireTimer <= 0 && hd < 30) {
            a.fireTimer = 0.9 + Math.random() * 0.9;
            const from = new THREE.Vector3(g.position.x, 1.45, g.position.z);
            const to = new THREE.Vector3(hostile.group.position.x, 1.2, hostile.group.position.z);
            this.addTracer(from, to, '#9fe2b8');
            this.damageActor(hostile, 11 + Math.random() * 7);
            this.sound.enemyShot();
          }
        }
      } else {
        // hostiles
        if (a.kind === 'target' && d < 16) {
          moveX = (g.position.x - px) / (d || 1); moveZ = (g.position.z - pz) / (d || 1);
        } else if (d > 15) {
          moveX = (px - g.position.x) / (d || 1); moveZ = (pz - g.position.z) / (d || 1);
        } else if (d < 7) {
          moveX = (g.position.x - px) / (d || 1) * 0.55; moveZ = (g.position.z - pz) / (d || 1) * 0.55;
        } else {
          moveX = Math.cos(a.phase + this.time * 0.6) * 0.35;
          moveZ = Math.sin(a.phase + this.time * 0.6) * 0.35;
        }
        if (d < 34) {
          a.fireTimer -= dt;
          if (a.fireTimer <= 0) {
            a.fireTimer = (a.kind === 'target' ? 0.9 : 1.25) + Math.random() * 1.4;
            const from = new THREE.Vector3(g.position.x, 1.45, g.position.z);
            const to = new THREE.Vector3(px, 1.25, pz);
            this.addTracer(from, to, '#ff9b7a');
            this.sound.enemyShot();
            if (Math.random() < 0.78) this.damagePlayer(a.damage + Math.random() * 3, 'bullet');
            this.world.panic(px, pz, 4);
          }
        }
      }
      const sp = a.kind === 'bodyguard' && d > 5.2 ? 7.2 : a.speed;
      if (moveX || moveZ) {
        const len = Math.hypot(moveX, moveZ) || 1;
        g.position.x += (moveX / len) * sp * dt;
        g.position.z += (moveZ / len) * sp * dt;
        this.world.resolveCircle(g.position, 0.5);
        g.position.y = this.world.getGroundY(g.position.x, g.position.z) + Math.abs(Math.sin(this.time * 9 + a.phase)) * 0.04;
        const swing = Math.sin(this.time * 9 + a.phase) * 0.55;
        g.userData.legL.rotation.x = swing;
        g.userData.legR.rotation.x = -swing;
      } else {
        g.userData.legL.rotation.x += (0 - g.userData.legL.rotation.x) * Math.min(1, dt * 8);
        g.userData.legR.rotation.x += (0 - g.userData.legR.rotation.x) * Math.min(1, dt * 8);
      }
      g.rotation.y = lerpAngle(g.rotation.y, face, Math.min(1, dt * 8));
      // health bar billboard
      if (a.bar) {
        const ratio = clamp(a.health / a.maxHealth, 0, 1);
        a.bar.visible = ratio < 0.999 || a.kind === 'target';
        a.bar.position.set(g.position.x, g.position.y + 2.55, g.position.z);
        a.bar.quaternion.copy(this.camera.quaternion);
        a.fill.scale.x = ratio;
        a.fill.position.x = -(1 - ratio) * 0.725;
        const col = ratio > 0.55 ? '#7fbf82' : ratio > 0.25 ? '#d6b04c' : '#d34c3d';
        a.fill.material.color.set(col);
      }
    }
    this.maintainBodyguards(dt);
  }

  maintainBodyguards() {
    if (this.player.dead || !this.started) return;
    const wanted = Math.min(3, this.state.crew);
    const current = this.actors.filter(a => a.kind === 'bodyguard' && !a.dead).length;
    if (current >= wanted) return;
    if (this.time < (this.bodyguardAt || 0)) return;
    this.bodyguardAt = this.time + 4.5;
    for (let i = current; i < wanted; i++) {
      const ang = Math.random() * Math.PI * 2;
      const x = this.player.group.position.x + Math.cos(ang) * 3.2;
      const z = this.player.group.position.z + Math.sin(ang) * 3.2;
      const b = this.spawnActor(x, z, 'bodyguard');
      b.fireTimer = 1.2;
    }
  }

  damageActor(a, amount) {
    if (!a || a.dead) return;
    a.health -= amount;
    this.addFlash(a.group.position.clone().setY(1.5), '#ff8a72', 0.9, 0.09);
    this.hitMarker();
    this.sound.hit();
    if (a.health <= 0) this.killActor(a);
  }

  killActor(a) {
    if (!a || a.dead) return;
    a.dead = true; a.deadT = 0; a.health = 0;
    a.group.userData.legL.rotation.x = 0; a.group.userData.legR.rotation.x = 0;
    if (a.bar) a.bar.visible = false;
    this.world.panic(a.group.position.x, a.group.position.z, 5);
    if (a.kind === 'bodyguard') {
      this.toast('One of your soldiers went down.', 'bad');
    } else {
      this.state.kills++;
      this.addRespect(6);
      this.crime(a.kind === 'cop' ? 0.28 : 0.18);
      const drop = a.kind === 'target' ? 300 : a.kind === 'cop' ? 90 : 60 + Math.floor(Math.random() * 60);
      this.spawnPickup(a.group.position.x, a.group.position.z, drop);
      if (a.kind === 'cop') this.toast('You dropped a cop. This will cost you.', 'bad');
      if (a.isBoss && this.mission && this.mission.targetActor === a) {
        this.mission.targetKilled = true;
        this.completeMission();
      } else if (this.mission && this.mission.type === 'takeover' && this.mission.stage === 'combat') {
        const alive = this.actors.filter(x => !x.dead && x.mission === this.mission && x.kind === 'guard').length;
        if (alive === 0) this.completeMission();
      }
    }
  }

  /* ------------------------------ effects ------------------------------- */

  addTracer(from, to, color = '#ffe0a0') {
    const geo = new THREE.BufferGeometry().setFromPoints([from.clone(), to.clone()]);
    const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false });
    const line = new THREE.Line(geo, mat);
    line.frustumCulled = false;
    this.scene.add(line);
    this.effects.push({ obj: line, life: 0.09, max: 0.09, type: 'fade' });
  }

  addFlash(pos, color, scale = 1.4, ttl = 0.08) {
    const mat = new THREE.SpriteMaterial({ map: this.world.glowTex, color, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false });
    const sp = new THREE.Sprite(mat);
    sp.position.copy(pos); sp.scale.set(scale * 2.2, scale * 2.2, 1);
    this.scene.add(sp);
    this.effects.push({ obj: sp, life: ttl, max: ttl, type: 'flash' });
  }

  addExplosion(pos, color = '#ffb35e') {
    const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false });
    const sphere = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 1), mat);
    sphere.position.copy(pos);
    this.scene.add(sphere);
    this.effects.push({ obj: sphere, life: 0.55, max: 0.55, type: 'explode' });
    for (let i = 0; i < 7; i++) {
      const p = pos.clone().add(new THREE.Vector3((Math.random() - 0.5) * 2, Math.random() * 2, (Math.random() - 0.5) * 2));
      this.addFlash(p, i % 2 ? '#ffcf7a' : '#e75b32', 0.7 + Math.random(), 0.25 + Math.random() * 0.3);
    }
    this.shake = Math.max(this.shake, 1.1);
    this.sound.explosion();
  }

  updateEffects(dt) {
    for (let i = this.effects.length - 1; i >= 0; i--) {
      const e = this.effects[i];
      e.life -= dt;
      const t = clamp(e.life / e.max, 0, 1);
      if (e.type === 'fade') e.obj.material.opacity = t * 0.9;
      if (e.type === 'flash') { e.obj.material.opacity = t; e.obj.scale.multiplyScalar(1 + dt * 3); }
      if (e.type === 'explode') { e.obj.scale.setScalar(1 + (1 - t) * 8); e.obj.material.opacity = t * 0.85; }
      if (e.life <= 0) {
        this.scene.remove(e.obj);
        if (e.obj.material) e.obj.material.dispose();
        if (e.obj.geometry) e.obj.geometry.dispose();
        this.effects.splice(i, 1);
      }
    }
  }

  spawnPickup(x, z, amount) {
    const group = new THREE.Group();
    const spr = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.world.glowTex, color: '#e8c276', transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }));
    spr.scale.set(2.2, 2.2, 1); group.add(spr);
    const coin = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.08, 12), new THREE.MeshStandardMaterial({ color: '#e8c276', metalness: 0.8, roughness: 0.25, emissive: '#6b4b15', emissiveIntensity: 0.6 }));
    coin.rotation.x = Math.PI / 2; coin.position.y = 0.7; group.add(coin);
    group.position.set(x, this.world.getGroundY(x, z) + 0.2, z);
    this.scene.add(group);
    this.pickups.push({ group, coin, amount, life: 22 });
  }

  updatePickups(dt) {
    for (let i = this.pickups.length - 1; i >= 0; i--) {
      const p = this.pickups[i];
      p.life -= dt; p.coin.rotation.z += dt * 2.2; p.group.position.y += Math.sin(this.time * 3 + i) * 0.001;
      const d = p.group.position.distanceTo(this.player.group.position);
      if (d < 3.1) {
        this.addCash(p.amount);
        this.toast(`Recovered ${money(p.amount)}`, 'gold');
        this.scene.remove(p.group); this.pickups.splice(i, 1);
        continue;
      }
      if (p.life <= 0) { this.scene.remove(p.group); this.pickups.splice(i, 1); }
    }
  }

  /* -------------------------------- police ------------------------------ */

  updateCops(dt) {
    if (this.phase !== 'playing') return;
    if (this.time - this.lastCrime > 9) this.heat = Math.max(0, this.heat - 0.06 * dt);
    const stars = Math.floor(this.heat + 0.0001);
    if (stars > this.heatStars) {
      if (stars > 0) this.toast(`POLICE HEAT  ${'★'.repeat(Math.min(5, stars))}`, 'bad', 2600);
      this.heatStars = stars;
    } else if (stars < this.heatStars) {
      this.heatStars = stars;
    }
    const cops = this.actors.filter(a => a.kind === 'cop' && !a.dead).length;
    const cap = Math.min(7, Math.floor(this.heat * 1.6));
    if (this.heat >= 0.95 && cops < cap && this.time - this.lastCopSpawn > 2.4) {
      this.lastCopSpawn = this.time;
      const ang = Math.random() * Math.PI * 2;
      const r = 58 + Math.random() * 42;
      const pos = { x: this.player.group.position.x + Math.cos(ang) * r, z: this.player.group.position.z + Math.sin(ang) * r };
      this.world.resolveCircle(pos, 1);
      this.spawnActor(pos.x, pos.z, 'cop');
      if (cops === 0) this.sound.setSiren(true);
    }
    if (this.heat < 0.05) {
      const before = this.actors.length;
      this.actors = this.actors.filter(a => {
        if (a.kind === 'cop' && !a.dead) { this.scene.remove(a.group); if (a.bar) this.scene.remove(a.bar); return false; }
        return true;
      });
      if (this.actors.length < before) this.toast('You lost the tail. Lie low for a while.', 'good');
      this.sound.setSiren(false);
    }
  }

  /* -------------------------------- mission ----------------------------- */

  updateMissions(dt) {
    if (!this.mission) {
      if (this.started && !this.player.dead && this.time >= this.nextMissionAt) this.startNextMission();
      return;
    }
    const m = this.mission;
    if (m.timer != null) {
      m.timer -= dt;
      if (m.timer <= 0) { this.failMission('The drop window closed. The cargo is gone.'); return; }
    }
    if (m.type === 'hit' && m.targetActor && !m.targetActor.dead) {
      m.target.x = m.targetActor.group.position.x;
      m.target.z = m.targetActor.group.position.z;
      if (m.marker) m.marker.position.set(m.target.x, this.world.getGroundY(m.target.x, m.target.z), m.target.z);
    }
  }

  startNextMission(forcedType = null, forcedDistrict = null) {
    if (this.mission) return;
    let district;
    if (forcedDistrict) district = DISTRICTS.find(d => d.id === forcedDistrict);
    else {
      const open = DISTRICTS.filter(d => !this.state.districts[d.id].controlled);
      const pool = open.length ? open : DISTRICTS;
      const weights = pool.map(d => 1 + (100 - this.state.districts[d.id].control) / 35);
      let r = Math.random() * weights.reduce((a, b) => a + b, 0);
      district = pool[0];
      for (let i = 0; i < pool.length; i++) { r -= weights[i]; if (r <= 0) { district = pool[i]; break; } }
    }
    let type = forcedType;
    if (!type) {
      if (this.state.missions === 0) type = 'shakedown';
      else {
        const roll = Math.random();
        const canTake = !this.state.districts[district.id].controlled;
        if (canTake && roll < 0.22) type = 'takeover';
        else if (roll < 0.5) type = 'hit';
        else if (roll < 0.72) type = 'delivery';
        else type = 'shakedown';
      }
    }
    if (this.state.missions === 0 && !forcedDistrict) {
      district = DISTRICTS[0];
      type = 'shakedown';
    }
    if (type === 'takeover' && this.state.districts[district.id].controlled) type = 'hit';
    const rackets = this.world.rackets.filter(r => r.districtId === district.id);
    const pickupRacket = rackets[Math.floor(Math.random() * rackets.length)] || { name: 'the family drop', x: district.x, z: district.z };
    const hq = this.world.hqs[district.id] || { x: district.x, z: district.z, name: district.rival };
    const dIdx = DISTRICTS.indexOf(district);
    let target, title, desc, place = PLACES[dIdx % PLACES.length], payout, respect, control, heat, markerColor = '#e2bf7b';
    let targetName = TARGET_NAMES[Math.floor(Math.random() * TARGET_NAMES.length)];

    if (type === 'shakedown') {
      target = { x: pickupRacket.x, z: pickupRacket.z };
      title = 'The Weekly Tribute';
      desc = `Collect from ${pickupRacket.name} in ${district.name}. Make it polite.`;
      payout = 820 + dIdx * 100;
      respect = 28; control = 6; heat = 0.55;
    } else if (type === 'hit') {
      target = { x: hq.x, z: hq.z };
      title = 'A Message, Signed in Blood';
      desc = `${targetName} is hiding at ${place}. Make sure everyone hears the news.`;
      payout = 1420 + dIdx * 130;
      respect = 55; control = 8; heat = 1.15;
    } else if (type === 'delivery') {
      target = { x: pickupRacket.x, z: pickupRacket.z };
      const blocks = this.world.blocks.filter(b => b.district.id !== district.id);
      const block = blocks[Math.floor(Math.random() * blocks.length)] || this.world.blocks[0];
      const drop = { x: block.x + 35, z: block.z + 35 };
      const dropDistrict = this.world.getDistrictAt(drop.x, drop.z);
      title = 'Cargo of Consequence';
      desc = `Take the crate from ${pickupRacket.name} to ${dropDistrict.name}. Do not open it.`;
      payout = 1240 + dIdx * 120;
      respect = 42; control = 6; heat = 0.65;
      this.pendingDrop = { x: drop.x, z: drop.z };
      place = dropDistrict.name;
    } else {
      target = { x: hq.x, z: hq.z };
      title = `Taking ${district.name}`;
      desc = `Break ${district.rival} at their headquarters. Leave no one standing.`;
      payout = 2150 + dIdx * 180;
      respect = 90; control = 30; heat = 1.35; markerColor = '#d4553f';
    }

    if (this.marker) this.world.removeMarker(this.marker);
    const marker = this.world.createMarker(markerColor);
    marker.position.set(target.x, this.world.getGroundY(target.x, target.z), target.z);
    this.mission = {
      type, districtId: district.id, title, desc, target, marker, place, targetName,
      payout, respect, control, heat, stage: 'travel', timer: null, targetActor: null,
      dropoff: type === 'delivery' ? this.pendingDrop : null, markerColor,
    };
    this.renderObjective();
    const line = MISSION_LINES[type] || MISSION_LINES.shakedown;
    this.say((line[0] || 'Vinnie').toUpperCase(), line[1], 5200);
    this.toast(`New contract · ${district.name}`, 'gold');
    this.save();
  }

  renderObjective() {
    const m = this.mission;
    if (!m) {
      this.el['objective-kind'].textContent = 'THE STREET';
      this.el['objective-district'].textContent = 'PORT VESUVIO';
      this.el['objective-title'].textContent = 'The city is quiet';
      this.el['objective-desc'].textContent = 'Open EMPIRE to buy rackets and plan your next move.';
      this.el['objective-distance'].textContent = '—';
      this.el['objective-timer'].classList.add('hidden');
      return;
    }
    const d = DISTRICTS.find(x => x.id === m.districtId) || DISTRICTS[0];
    this.el['objective-kind'].textContent = m.type.toUpperCase();
    this.el['objective-district'].textContent = d.short;
    this.el['objective-title'].textContent = m.title;
    this.el['objective-desc'].textContent = m.desc;
    if (m.timer != null) this.el['objective-timer'].classList.remove('hidden'); else this.el['objective-timer'].classList.add('hidden');
  }

  beginMissionAction() {
    const m = this.mission;
    if (!m || m.stage !== 'travel') return;
    if (m.type === 'shakedown') {
      this.addCash(m.payout); this.addRespect(m.respect); this.crime(m.heat);
      this.addControl(m.control);
      this.completeMission();
      return;
    }
    if (m.type === 'delivery') {
      m.stage = 'deliver';
      m.target = { x: m.dropoff.x, z: m.dropoff.z };
      m.timer = 95;
      m.marker.position.set(m.target.x, this.world.getGroundY(m.target.x, m.target.z), m.target.z);
      m.desc = `Deliver the crate to ${m.place}. The clock is running.`;
      this.renderObjective();
      this.say('VINNIE “THE GHOST”', 'Clock starts now. Keep the crate dry and the cops guessing.', 4500);
      this.toast('Crate secured · 95 seconds to deliver', 'gold');
      return;
    }
    // fight contracts
    const guards = m.type === 'takeover' ? 4 : 2;
    const spot = this.safeSpawnNear(m.target.x, m.target.z, m.type === 'takeover' ? 7 : 5);
    if (m.type === 'hit') {
      const boss = this.spawnActor(spot.x, spot.z, 'target', { mission: m, name: m.targetName });
      m.targetActor = boss;
      m.marker.visible = false;
      m.desc = `Put ${m.targetName} in the ground. His friends will object.`;
    } else {
      m.desc = `Clear out ${DISTRICTS.find(d => d.id === m.districtId)?.rival || 'the rival crew'}.`;
    }
    for (let i = 0; i < guards; i++) {
      const s = this.safeSpawnNear(m.target.x, m.target.z, 10);
      this.spawnActor(s.x, s.z, 'guard', { mission: m });
    }
    m.stage = 'combat';
    this.renderObjective();
    this.say('VINNIE “THE GHOST”', m.type === 'hit' ? 'He’s right there. Don’t monologue, boss.' : 'They made their choice. Make an example.', 4500);
  }

  safeSpawnNear(x, z, r) {
    for (let i = 0; i < 14; i++) {
      const a = Math.random() * Math.PI * 2, d = 2 + Math.random() * r;
      const p = { x: x + Math.cos(a) * d, z: z + Math.sin(a) * d };
      if (!this.world.collideCircle(p, 0.7)) return p;
    }
    return { x: x + 2, z: z + 2 };
  }

  finishDelivery() {
    const m = this.mission;
    if (!m || m.stage !== 'deliver') return;
    this.addCash(m.payout); this.addRespect(m.respect); this.crime(m.heat); this.addControl(m.control);
    this.completeMission();
  }

  completeMission() {
    const m = this.mission;
    if (!m) return;
    if (m.completed) return;
    m.completed = true;
    if (m.type !== 'shakedown' && m.type !== 'delivery') {
      this.addCash(m.payout);
      this.addRespect(m.respect);
      this.addControl(m.control);
      this.crime(m.heat);
    }
    this.state.missions++;
    this.banner('CONTRACT COMPLETE', m.title, `+${money(m.payout)} · +${m.respect} RESPECT`, false);
    this.sound.missionDone();
    this.toast(`The family pays. ${money(m.payout)} in the ledger.`, 'good');
    if (m.marker) this.world.removeMarker(m.marker);
    this.retireMissionActors(m);
    this.mission = null;
    this.nextMissionAt = this.time + 5.5;
    this.renderObjective();
    this.save();
  }

  failMission(reason, quiet = false) {
    const m = this.mission;
    if (!m) return;
    if (m.marker) this.world.removeMarker(m.marker);
    this.retireMissionActors(m);
    this.mission = null;
    this.nextMissionAt = this.time + 6;
    if (!quiet) {
      this.banner('CONTRACT FAILED', 'The city remembers', reason, true);
      this.sound.missionFail();
      this.toast(reason, 'bad');
    }
    this.renderObjective();
  }

  retireMissionActors(m) {
    for (const a of this.actors) {
      if (a.mission === m && !a.dead) {
        this.scene.remove(a.group);
        if (a.bar) this.scene.remove(a.bar);
        a.dead = true; a.deadT = 99;
      }
    }
    this.actors = this.actors.filter(a => !(a.mission === m && a.deadT >= 99));
  }

  addControl(amount) {
    // The contract belongs to its district. Control is applied by the caller's mission.
    if (!this.mission) return;
    const id = this.mission.districtId;
    const d = this.state.districts[id];
    if (!d) return;
    d.control = clamp(d.control + amount, 0, 100);
    this.checkDistrictControl(id);
  }

  checkDistrictControl(id) {
    const d = this.state.districts[id];
    if (!d) return;
    if (d.control >= 100 && !d.controlled) {
      d.controlled = true;
      d.control = 100;
      const info = DISTRICTS.find(x => x.id === id);
      this.toast(`${info.name.toUpperCase()} IS UNDER FAMILY CONTROL`, 'gold', 5000);
      this.banner('A NEW TERRITORY', info.name, 'The family owns these streets now.', false);
      const hq = this.world.hqs[id];
      if (hq && hq.marker) {
        hq.marker.traverse(o => { if (o.material && o.material.color) o.material.color.set('#e2bf7b'); });
      }
      this.sound.missionDone();
      const all = DISTRICTS.every(x => this.state.districts[x.id].controlled);
      if (all && !this.state.won) {
        this.state.won = true;
        this.endingAt = this.time + 3;
        this.save();
      }
    }
  }

  /* -------------------------------- death ------------------------------- */

  die(cause) {
    const p = this.player;
    if (p.dead) return;
    p.dead = true;
    this.phase = 'dead';
    this.deathAt = this.time;
    if (p.inCar) {
      p.carSpeed = 0;
      p.inCar = false;
      p.group.visible = true;
      p.group.position.set(p.car.position.x + 1.5, 0.3, p.car.position.z);
      p.car = null;
    }
    p.group.rotation.z = Math.PI / 2;
    p.group.position.y = this.world.getGroundY(p.group.position.x, p.group.position.z) + 0.15;
    p.health = 0;
    this.sound.setEngine(false);
    this.sound.setSiren(false);
    this.heat = 0;
    this.crime(0);
    const penalty = Math.round(this.state.cash * 0.1);
    this.state.cash = Math.max(0, this.state.cash - penalty);
    for (const a of this.actors) { this.scene.remove(a.group); if (a.bar) this.scene.remove(a.bar); }
    this.actors = [];
    this.failMission('You were killed.', true);
    this.el['death-sub'].textContent = cause === 'crash'
      ? 'The steering wheel did what the Falcone crew could not.'
      : `${TARGET_NAMES[Math.floor(Math.random() * TARGET_NAMES.length)]} sends his regards.`;
    this.el['death-screen'].classList.remove('hidden');
    this.el['death-timer'].textContent = '4';
    this.renderObjective();
    this.sound.missionFail();
    this.save();
  }

  updateDeath(dt) {
    const remaining = Math.max(0, 4 - (this.time - this.deathAt));
    this.el['death-timer'].textContent = String(Math.ceil(remaining));
    if (remaining <= 0) this.respawn();
  }

  respawn() {
    const p = this.player;
    const safe = this.world.safehouse || { x: -254, z: -254 };
    const pos = { x: safe.x + 13, z: safe.z - 4 };
    this.world.resolveCircle(pos, 0.7);
    p.group.position.set(pos.x, this.world.getGroundY(pos.x, pos.z), pos.z);
    p.heading = Math.PI;
    p.group.rotation.y = Math.PI;
    p.group.rotation.z = 0;
    p.group.visible = true;
    p.dead = false;
    p.health = p.maxHealth;
    p.inCar = false;
    p.car = null;
    p.speed = 0;
    p.carSpeed = 0;
    this.ammo = 12;
    this.reloadT = 0;
    this.el['death-screen'].classList.add('hidden');
    this.phase = 'playing';
    this.heat = 0;
    this.crime(0);
    this.lastDamage = this.time;
    this.nextMissionAt = this.time + 2.5;
    this.camYaw = 0;
    this.camPos.set(pos.x, 38, pos.z + 50);
    this.camLook.set(pos.x, 0, pos.z);
    this.toast('The family pulled you out of the gutter. Ten percent poorer.', 'bad', 4200);
    if (this.hasSave) this.save();
  }

  /* --------------------------------- HUD -------------------------------- */

  updateHud(force = false) {
    if (!this.player || !this.world) return;
    const s = this.state;
    this.el.cash.textContent = money(s.cash);
    const inc = this.incomePerMin;
    this.el.income.textContent = `+${money(inc)} / min`;
    const p = this.player;
    const pos = p.inCar && p.car ? p.car.position : p.group.position;
    const district = this.world.getDistrictAt(pos.x, pos.z);
    this.el['district-name'].textContent = district.name.toUpperCase();
    const hour = Math.floor(this.world.timeOfDay) % 24;
    const minute = Math.floor((this.world.timeOfDay % 1) * 60);
    this.el.clock.textContent = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
    const stars = this.el.wanted.children;
    const whole = Math.floor(this.heat);
    for (let i = 0; i < stars.length; i++) {
      stars[i].classList.toggle('lit', i < whole);
      stars[i].classList.toggle('pulse', i === whole && this.heat - whole > 0.03);
    }
    const hp = clamp(p.health / p.maxHealth, 0, 1);
    this.el['health-fill'].style.width = `${hp * 100}%`;
    this.el['health-fill'].classList.toggle('low', hp < 0.3);
    this.el['health-text'].textContent = String(Math.max(0, Math.ceil(p.health)));
    this.el['crew-chip'].classList.toggle('hidden', s.crew === 0);
    this.el['crew-count'].textContent = String(s.crew);
    this.el['ammo-text'].textContent = this.reloadT > 0 ? '··' : String(this.ammo);
    this.el['tilt-chip'].classList.toggle('hidden', !(this.tiltEnabled && p.inCar));
    if (this.mission) {
      const m = this.mission;
      const d = dist2(pos.x, pos.z, m.target.x, m.target.z);
      this.el['objective-distance'].textContent = m.stage === 'combat' ? 'IN COMBAT' : `${Math.round(d)} m`;
      if (m.timer != null) {
        this.el['objective-timer'].classList.remove('hidden');
        this.el['objective-timer'].textContent = `${Math.max(0, Math.ceil(m.timer))}s`;
        this.el['objective-timer'].classList.toggle('low', m.timer < 20);
      } else {
        this.el['objective-timer'].classList.add('hidden');
      }
    } else {
      this.el['objective-distance'].textContent = '—';
      this.el['objective-timer'].classList.add('hidden');
    }
  }

  drawMinimap() {
    const cv = this.el.minimap;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    const W = cv.width, R = W / 2;
    const scale = W / 770;
    const toX = x => R + x * scale;
    const toY = z => R + z * scale;
    ctx.clearRect(0, 0, W, W);
    ctx.save();
    ctx.beginPath(); ctx.arc(R, R, R - 3, 0, Math.PI * 2); ctx.clip();
    ctx.fillStyle = '#0c0f14'; ctx.fillRect(0, 0, W, W);
    // blocks
    for (const b of this.world.blocks) {
      ctx.fillStyle = b.district.color + (b.park ? '2e' : '24');
      const x = toX(b.x - 38), y = toY(b.z - 38), w = 76 * scale;
      ctx.fillRect(x, y, w, w);
    }
    // roads
    ctx.strokeStyle = '#252831'; ctx.lineWidth = 20 * scale;
    for (const r of this.world.roads) {
      ctx.beginPath(); ctx.moveTo(toX(r), 0); ctx.lineTo(toX(r), W); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, toY(r)); ctx.lineTo(W, toY(r)); ctx.stroke();
    }
    ctx.strokeStyle = 'rgba(214,179,113,.12)'; ctx.lineWidth = 1;
    for (const r of this.world.roads) {
      ctx.beginPath(); ctx.moveTo(toX(r), 0); ctx.lineTo(toX(r), W); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, toY(r)); ctx.lineTo(W, toY(r)); ctx.stroke();
    }
    // rackets
    for (const r of this.world.rackets) {
      const owned = this.state.rackets[r.id];
      ctx.beginPath();
      ctx.arc(toX(r.x), toY(r.z), owned ? 4.5 : 3, 0, Math.PI * 2);
      ctx.fillStyle = owned ? '#e2bf7b' : 'rgba(233,223,202,.22)';
      ctx.fill();
      if (owned) { ctx.strokeStyle = 'rgba(226,191,123,.25)'; ctx.lineWidth = 4; ctx.stroke(); }
    }
    // safehouse
    if (this.world.safehouse) {
      ctx.fillStyle = '#74b38b';
      ctx.fillRect(toX(this.world.safehouse.x) - 3, toY(this.world.safehouse.z) - 3, 6, 6);
    }
    // hostiles
    for (const a of this.actors) {
      if (a.dead) continue;
      if (a.kind === 'cop') continue;
      ctx.beginPath(); ctx.arc(toX(a.group.position.x), toY(a.group.position.z), a.kind === 'target' ? 5 : 3.4, 0, Math.PI * 2);
      ctx.fillStyle = a.kind === 'target' ? '#f0a35c' : '#d4553f'; ctx.fill();
    }
    for (const a of this.actors) {
      if (a.dead || a.kind !== 'cop') continue;
      ctx.beginPath(); ctx.arc(toX(a.group.position.x), toY(a.group.position.z), 4, 0, Math.PI * 2);
      ctx.fillStyle = '#6a9ad8'; ctx.fill();
    }
    // mission
    if (this.mission) {
      const t = this.mission.target;
      const pulse = 1 + Math.sin(this.time * 4) * 0.35;
      ctx.beginPath(); ctx.arc(toX(t.x), toY(t.z), 8 * pulse, 0, Math.PI * 2);
      ctx.strokeStyle = '#f2d9a2'; ctx.lineWidth = 2.5; ctx.stroke();
      ctx.beginPath(); ctx.arc(toX(t.x), toY(t.z), 3, 0, Math.PI * 2); ctx.fillStyle = '#f2d9a2'; ctx.fill();
    }
    // player
    const p = this.player;
    const pos = p.inCar && p.car ? p.car.position : p.group.position;
    const h = p.inCar ? p.carHeading : p.heading;
    ctx.save();
    ctx.translate(toX(pos.x), toY(pos.z));
    ctx.rotate(Math.PI - h);
    ctx.beginPath(); ctx.moveTo(0, -8); ctx.lineTo(5.5, 6); ctx.lineTo(0, 3); ctx.lineTo(-5.5, 6); ctx.closePath();
    ctx.fillStyle = '#fff4d6'; ctx.shadowColor = '#fff4d6'; ctx.shadowBlur = 10; ctx.fill();
    ctx.restore();
    // north
    ctx.fillStyle = 'rgba(233,223,202,.44)'; ctx.font = '600 13px "Barlow Condensed", sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('N', R, 17);
    ctx.restore();
    ctx.strokeStyle = 'rgba(214,179,113,.26)'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(R, R, R - 4, 0, Math.PI * 2); ctx.stroke();
  }

  /* -------------------------------- empire ------------------------------ */

  openEmpire() {
    if (this.phase === 'splash') return;
    this.renderEmpire();
    this.paused = true;
    this.el['empire-panel'].classList.remove('hidden');
    this.sound.click();
  }

  renderEmpire() {
    const s = this.state;
    this.el['empire-worth'].textContent = money(this.netWorth);
    this.el['empire-income'].textContent = money(this.incomePerMin);
    this.el['empire-crew'].textContent = `${s.crew} / 6`;
    this.el['empire-rank'].textContent = this.rank.name;
    this.el['aside-crew'].textContent = String(s.crew);
    this.el['aside-bonus'].textContent = `+${s.crew * 8}%`;
    const hireCost = 2000 + s.crew * 750;
    this.el['hire-btn'].textContent = s.crew >= 6 ? 'CREW AT FULL STRENGTH' : `HIRE SOLDIER · ${money(hireCost)}`;
    this.el['hire-btn'].disabled = s.crew >= 6 || s.cash < hireCost;
    let html = '';
    let weakest = DISTRICTS[0], weakestVal = 101;
    for (const d of DISTRICTS) {
      const ds = s.districts[d.id] || { control: 0, controlled: false };
      if (ds.control < weakestVal) { weakest = d; weakestVal = ds.control; }
      const rs = this.world.rackets.filter(r => r.districtId === d.id);
      const ownedCount = rs.filter(r => s.rackets[r.id]).length;
      const rows = rs.map(r => {
        if (s.rackets[r.id]) return `<div class="racket-row"><span class="rname">${r.name}</span><span class="rincome">+${money(r.income)}/min</span><span class="owned">OWNED</span></div>`;
        const can = s.cash >= r.cost;
        return `<div class="racket-row"><span class="rname">${r.name}</span><span class="rincome">+${money(r.income)}/min</span><button class="rbtn" data-buy="${r.id}" ${can ? '' : 'disabled'}>BUY ${money(r.cost)}</button></div>`;
      }).join('');
      html += `
        <article class="district-card ${ds.controlled ? 'controlled' : ''}" style="--dc:${d.color}">
          <div class="district-head"><h3>${d.name}</h3><span class="tag">${ds.controlled ? 'FAMILY' : ownedCount + ' / ' + rs.length + ' RACKETS'}</span></div>
          <p class="district-blurb">${d.blurb}</p>
          <div class="control-line"><div class="control-track"><div class="control-fill" style="width:${ds.control}%"></div></div><span class="control-num">${Math.round(ds.control)}%</span></div>
          ${rows}
          <div class="card-actions">
            <button data-contract="${d.id}" ${ds.controlled ? 'disabled' : ''}>FIND WORK</button>
            <button class="takeover" data-takeover="${d.id}" ${ds.controlled ? 'disabled' : ''}>${ds.controlled ? 'CONTROLLED' : 'PLAN TAKEOVER'}</button>
          </div>
        </article>`;
    }
    this.el['district-list'].innerHTML = html;
    this.el['empire-advice'].textContent = weakestVal < 100
      ? `${weakest.name} is only ${Math.round(weakestVal)}% yours. ${weakest.blurb} Buy a racket, then break their headquarters.`
      : 'Every district answers to you. Keep the rackets earning and the soldiers loyal.';
  }

  buyRacket(id) {
    const r = this.world.rackets.find(x => x.id === id);
    if (!r || this.state.rackets[id]) return;
    if (this.state.cash < r.cost) { this.toast('Not enough cash. The family does not extend credit.', 'bad'); return; }
    this.state.cash -= r.cost;
    this.state.rackets[id] = true;
    const d = this.state.districts[r.districtId];
    d.control = clamp(d.control + 8, 0, 100);
    this.addRespect(15);
    this.sound.confirm();
    this.toast(`${r.name} is now a family asset. +${money(r.income)}/min`, 'good', 4200);
    this.checkDistrictControl(r.districtId);
    this.renderEmpire();
    this.updateHud(true);
    this.save();
  }

  hireCrew() {
    const s = this.state;
    const cost = 2000 + s.crew * 750;
    if (s.crew >= 6) { this.toast('No more soldiers will fit in the car.', 'bad'); return; }
    if (s.cash < cost) { this.toast('You cannot afford another soldier.', 'bad'); return; }
    s.cash -= cost;
    s.crew++;
    this.sound.confirm();
    this.toast('A new soldier kisses the ring. He will follow you into the street.', 'good', 4200);
    this.renderEmpire();
    this.updateHud(true);
    this.save();
  }

  planTakeover(districtId) {
    const d = this.state.districts[districtId];
    if (!d || d.controlled) return;
    if (this.mission) this.failMission('The old contract is dead. This one matters more.', true);
    this.closePanel('empire-panel');
    this.nextMissionAt = 0;
    this.startNextMission('takeover', districtId);
    this.toast('Takeover planned. Follow the red beam.', 'bad', 4200);
  }

  startContractIn(districtId) {
    if (this.mission) this.failMission('The old contract is dead.', true);
    this.closePanel('empire-panel');
    this.nextMissionAt = 0;
    this.startNextMission(null, districtId);
  }

  /* -------------------------------- ending ------------------------------ */

  triggerEnding() {
    if (this.phase === 'ending') return;
    this.phase = 'ending';
    this.endingAt = 0;
    this.sound.setSiren(false);
    this.sound.setEngine(false);
    this.el.ending.classList.remove('hidden');
    this.el['end-worth'].textContent = money(this.netWorth);
    this.el['end-rackets'].textContent = String(Object.keys(this.state.rackets).length);
    this.el['end-kills'].textContent = String(this.state.kills);
    this.el['end-time'].textContent = formatTime(this.state.played || 0);
    this.sound.missionDone();
    this.save();
  }
}

function formatTime(sec) {
  const m = Math.floor(sec / 60), s = Math.floor(sec % 60);
  return `${m}:${String(s).padStart(2, '0')}`;
}

/* --------------------------------- boot --------------------------------- */
const game = new Game();
window.game = game;
game.init().catch(err => {
  console.error(err);
  const box = document.getElementById('boot-error');
  if (box) {
    box.classList.remove('hidden');
    box.innerHTML = `<div><strong style="color:#d6b371;font-size:20px;letter-spacing:.15em">PORT VESUVIO IS CLOSED</strong><br><br>WebGL could not start on this device.<br><small>${String(err.message || err).replace(/[<>]/g, '')}</small></div>`;
  }
});
