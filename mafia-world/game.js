(() => {
  'use strict';

  // ------------------------------------------------------------------
  // Constants / config
  // ------------------------------------------------------------------
  const GRID_W = 20;
  const GRID_H = 16;
  const CANVAS_W = 600;
  const CANVAS_H = 800;

  const TERRAIN = {
    city:   { color: '#5b6575', passable: true,  name: 'Urban' },
    suburb: { color: '#4a7c59', passable: true,  name: 'Suburb' },
    ind:    { color: '#7a858a', passable: true,  name: 'Industrial' },
    docks:  { color: '#3d5a6e', passable: true,  name: 'Docks' },
    park:   { color: '#6fb07f', passable: true,  name: 'Park' },
    water:  { color: '#2f5d7a', passable: false, name: 'Water' },
  };

  const FACTIONS = [
    { id: 'player',  name: 'Your Family', color: '#b3402e' },
    { id: 'vitti',   name: "Vitti Family",   color: '#c9a227' },
    { id: 'scarface',name: "Scarface Outfit", color: '#6ec6ff' },
    { id: 'northside',name: 'North Side Syndicate', color: '#a855f7' },
  ];

  const PREFIXES = ['North', 'South', 'East', 'West', 'Central', 'Old', 'New'];
  const SUFFIXES = {
    city:   ['Downtown', 'Financial', 'Midtown', 'Civic Center'],
    suburb: ['Hillside', 'Residential', 'Suburbia', 'Gardens'],
    ind:    ['Industrial Zone', 'Warehouse District', 'Factory Row'],
    docks:  ['The Docks', 'Harbor', 'Shipyard'],
    park:   ['City Park', 'Botanical Gardens', 'Greenway'],
    water:  ['Harbor Waters', 'The Basin', 'Bay'],
  };

  // ------------------------------------------------------------------
  // DOM refs
  // ------------------------------------------------------------------
  const canvas = document.getElementById('worldCanvas');
  const ctx = canvas.getContext('2d');
  const touchLayer = document.getElementById('touchLayer');
  const tiltBadge = document.getElementById('tiltBadge');

  const els = {
    valMoney: document.getElementById('valMoney'),
    valRespect: document.getElementById('valRespect'),
    valHeat: document.getElementById('valHeat'),
    valCrew: document.getElementById('valCrew'),
    distName: document.getElementById('distName'),
    distOwner: document.getElementById('distOwner'),
    distControl: document.getElementById('distControl'),
    distActions: document.getElementById('distActions'),
    storyMission: document.getElementById('storyMission'),
    storyObjective: document.getElementById('storyObjective'),
    storyActions: document.getElementById('storyActions'),
    logList: document.getElementById('logList'),
    btnTilt: document.getElementById('btnTilt'),
    tiltBadge,
    mTiltState: document.getElementById('mTiltState'),
    screens: { splash: document.getElementById('splash'), game: document.getElementById('game') },
    modals: { menu: document.getElementById('modalMenu'), ios: document.getElementById('iosPerm') },
  };

  // ------------------------------------------------------------------
  // Game state
  // ------------------------------------------------------------------
  let G = {
    turn: 0,
    money: 1200,
    respect: 0,
    heat: 0,
    crew: 2,
    rivalTilesTaken: 0,
    playerX: 5,
    playerY: 5,
    selectedX: 5,
    selectedY: 5,
    tiltEnabled: false,
    tiltWatchId: null,
    lastTiltMove: 0,
    lastIncome: 0,
    lastLog: 0,
    currentMission: 0,
    tiles: [],          // [y][x]
    log: [],
    missionCompleted: false,
  };

  // ------------------------------------------------------------------
  // World generation
  // ------------------------------------------------------------------
  function rand(min, max) { return Math.random() * (max - min) + min; }
  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  function generateWorld() {
    const tiles = [];
    const used = new Set();
    for (let y = 0; y < GRID_H; y++) {
      tiles[y] = [];
      for (let x = 0; x < GRID_W; x++) {
        const r = Math.random();
        let t;
        if (r < 0.05) t = 'water';
        else if (r < 0.20) t = 'park';
        else if (r < 0.42) t = 'city';
        else if (r < 0.60) t = 'suburb';
        else if (r < 0.80) t = 'ind';
        else t = 'docks';

        const fx = FACTIONS[Math.floor(Math.random() * FACTIONS.length)];
        const owner = Math.random() < 0.15 ? 'neutral' : fx.id;
        const control = owner === 'player' ? 100 : (owner === 'neutral' ? 0 : Math.floor(rand(40, 95)));

        tiles[y][x] = {
          x, y, terrain: t, owner, control,
          name: pick(PREFIXES) + ' ' + pick(SUFFIXES[t]),
          income: terrainIncome(t),
        };
      }
    }
    // Start tile is neutral & owned by player
    tiles[G.playerY][G.playerX].owner = 'player';
    tiles[G.playerY][G.playerX].control = 100;
    return tiles;
  }

  function terrainIncome(t) {
    switch (t) {
      case 'docks': return 90;
      case 'city': return 70;
      case 'ind': return 60;
      case 'suburb': return 40;
      case 'park': return 20;
      default: return 10;
    }
  }

  function tileAt(x, y) {
    if (x < 0 || x >= GRID_W || y < 0 || y >= GRID_H) return null;
    return G.tiles[y][x];
  }

  function controlledByPlayer() {
    let n = 0;
    for (const row of G.tiles) for (const t of row) if (t.owner === 'player') n++;
    return n;
  }

  // ------------------------------------------------------------------
  // Logging / UI helpers
  // ------------------------------------------------------------------
  function log(msg, cls = '') {
    const t = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    G.log.unshift({ t, msg, cls });
    if (G.log.length > 60) G.log.pop();
    renderLog();
  }

  function fmtMoney(n) { return '$' + n.toLocaleString(); }

  function setScreen(name) {
    Object.values(els.screens).forEach(s => s.classList.remove('active'));
    Object.values(els.screens).forEach(s => s.classList.add('hidden'));
    els.screens[name].classList.remove('hidden');
    els.screens[name].classList.add('active');
  }

  function showModal(name) {
    els.modals[name].classList.remove('hidden');
  }
  function hideModal(name) {
    els.modals[name].classList.add('hidden');
  }

  // ------------------------------------------------------------------
  // Missions / story
  // ------------------------------------------------------------------
  const MISSIONS = [
    { id: 'm1', title: 'Made Man', desc: 'Claim your first turf and show the neighborhood who runs it.',
      type: 'takeover', target: 1,
      reward: { money: 500, respect: 10, crew: 1 } },
    { id: 'm2', title: 'Protection Racket', desc: 'Start extorting the businesses you control.',
      type: 'respect', target: 25,
      reward: { money: 800, respect: 15, crew: 1 } },
    { id: 'm3', title: 'Rival Crew', desc: "Muscle into a district held by the Vitti Family.",
      type: 'takeover_rival', target: 1,
      reward: { money: 1200, respect: 25, crew: 2 } },
    { id: 'm4', title: 'Heat on the Street', desc: 'Reach 40 respect without getting burned.',
      type: 'respect', target: 40,
      reward: { money: 1500, respect: 30, crew: 2 } },
    { id: 'm5', title: 'Don of the City', desc: 'Control half the map.',
      type: 'takeover', target: Math.floor(GRID_W * GRID_H * 0.5),
      reward: { money: 5000, respect: 100, crew: 5 } },
  ];

  function currentMissionObj() {
    return MISSIONS[G.currentMission];
  }

  function missionProgress() {
    const m = currentMissionObj();
    if (!m) return { done: true, cur: 0, tgt: 0, txt: 'Story complete' };
    let cur = 0;
    switch (m.type) {
      case 'takeover': cur = controlledByPlayer(); break;
      case 'takeover_rival': cur = G.rivalTilesTaken; break;
      case 'respect': cur = G.respect; break;
      case 'crew': cur = G.crew; break;
    }
    return { done: cur >= m.target, cur: Math.min(cur, m.target), tgt: m.target, txt: cur + ' / ' + m.target };
  }

  function completeMission() {
    const m = currentMissionObj();
    const r = m.reward;
    G.money += r.money;
    G.respect += r.respect;
    G.crew += r.crew;
    log(`Mission complete: ${m.title}. +${fmtMoney(r.money)} +${r.respect} Respect +${r.crew} Crew`, 'ok');
    G.missionCompleted = true;
    if (G.currentMission + 1 < MISSIONS.length) G.currentMission++;
    G.missionCompleted = false;
    render();
    renderSidebar();
    renderStory();
  }

  // ------------------------------------------------------------------
  // Core actions
  // ------------------------------------------------------------------
  function canAfford(cost) { return G.money >= cost && G.crew >= (cost.crew || 0); }

  function changeMoney(d) { G.money = Math.max(0, G.money + d); }
  function changeRespect(d) { G.respect = Math.max(0, G.respect + d); }
  function changeHeat(d) { G.heat = Math.min(100, Math.max(0, G.heat + d)); }
  function changeCrew(d) { G.crew = Math.max(0, G.crew + d); }

  function moveTo(x, y) {
    const t = tileAt(x, y);
    if (!t || !TERRAIN[t.terrain].passable) return false;
    const dx = Math.abs(x - G.playerX);
    const dy = Math.abs(y - G.playerY);
    if ((dx === 1 && dy === 0) || (dx === 0 && dy === 1)) {
      G.playerX = x; G.playerY = y;
      G.selectedX = x; G.selectedY = y;
      G.turn++;
      log('Moved to ' + t.name);
      maybeIncome();
      render();
      renderSidebar();
      renderStory();
      return true;
    }
    return false;
  }

  function maybeIncome() {
    const now = Date.now();
    if (now - G.lastIncome < 6000) return;
    G.lastIncome = now;
    let income = 0;
    for (const row of G.tiles) for (const t of row) if (t.owner === 'player') income += t.income;
    if (income > 0) {
      G.money += income;
      log('Income: ' + fmtMoney(income));
    }
    // heat decay
    if (G.heat > 0) G.heat = Math.max(0, G.heat - 1);
  }

  function takeOverTile(t) {
    if (t.owner === 'player') { log('Already yours.'); return; }
    const cost = 150 + (t.control * 2);
    const crewCost = 1 + Math.floor(t.control / 40);
    if (G.money < cost) { log('Not enough money (' + fmtMoney(cost) + ' needed).'); return; }
    if (G.crew < crewCost) { log('Not enough crew (' + crewCost + ' needed).'); return; }
    G.money -= cost;
    G.crew -= crewCost;
    G.heat = Math.min(100, G.heat + 15);
    G.respect += 5;
    const wasRival = t.owner !== 'player' && t.owner !== 'neutral';
    t.owner = 'player';
    t.control = 100;
    if (wasRival) G.rivalTilesTaken++;
    log('Took over ' + t.name + ' - ' + fmtMoney(cost) + ', ' + crewCost + ' crew, +heat');
    render();
    renderSidebar();
    renderStory();
  }

  function collectTile(t) {
    if (t.owner !== 'player') { log('Not your turf.'); return; }
    const amt = Math.floor(t.income * 1.5);
    G.money += amt;
    log('Collected ' + fmtMoney(amt) + ' from ' + t.name);
    renderSidebar();
  }

  function extortTile(t) {
    if (t.owner !== 'player') { log('You do not control this district.'); return; }
    const amt = Math.floor(t.income * 0.6);
    G.money += amt;
    G.heat = Math.min(100, G.heat + 10);
    G.respect += 2;
    log('Extorted ' + t.name + ' for ' + fmtMoney(amt) + ' (+heat)');
    renderSidebar();
    renderStory();
  }

  function recruit() {
    const cost = 300;
    if (G.money < cost) { log('Not enough money to recruit.'); return; }
    G.money -= cost;
    G.crew += 1;
    log('Recruited new crew member (' + fmtMoney(cost) + ')');
    renderSidebar();
    renderStory();
  }

  // ------------------------------------------------------------------
  // Rendering
  // ------------------------------------------------------------------
  function drawTile(tx, ty, t, w, h) {
    const base = TERRAIN[t.terrain];
    ctx.fillStyle = base.color;
    ctx.fillRect(tx, ty, w, h);

    // subtle grid line
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.lineWidth = 1;
    ctx.strokeRect(tx, ty, w, h);

    // owner tint overlay
    if (t.owner === 'player') {
      ctx.fillStyle = 'rgba(179, 64, 46, 0.42)';
    } else if (t.owner === 'neutral') {
      ctx.fillStyle = 'rgba(90, 90, 90, 0.22)';
    } else {
      const f = FACTIONS.find(x => x.id === t.owner);
      ctx.fillStyle = f ? (f.color + '44') : 'rgba(120,120,120,0.3)';
    }
    ctx.fillRect(tx, ty, w, h);

    // control bar for player tiles
    if (t.owner === 'player') {
      const pw = (t.control / 100) * (w - 4);
      ctx.fillStyle = '#f4c542';
      ctx.fillRect(tx + 2, ty + h - 6, pw, 4);
    }

    // terrain label (small, only on bigger tiles)
    if (w > 24) {
      ctx.fillStyle = 'rgba(0,0,0,0.35)';
      ctx.font = 'bold 11px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(t.owner === 'player' ? '● ' : '', tx + w / 2, ty + h / 2 + 4);
    }
  }

  function render() {
    const rect = canvas.getBoundingClientRect();
    const scaleX = CANVAS_W / rect.width;
    const scaleY = CANVAS_H / rect.height;
    // We render to internal canvas size; CSS stretches it.
    ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);

    const w = CANVAS_W / GRID_W;
    const h = CANVAS_H / GRID_H;

    for (let y = 0; y < GRID_H; y++) {
      for (let x = 0; x < GRID_W; x++) {
        drawTile(x * w, y * h, G.tiles[y][x], w, h);
      }
    }

    // selection highlight
    if (G.selectedX >= 0) {
      ctx.strokeStyle = '#f4c542';
      ctx.lineWidth = 3;
      ctx.strokeRect(G.selectedX * w + 1, G.selectedY * h + 1, w - 2, h - 2);
    }

    // player marker
    const px = G.playerX * w + w / 2;
    const py = G.playerY * h + h / 2;
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(px, py, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#b3402e';
    ctx.lineWidth = 2;
    ctx.stroke();
    // fedora brim hint
    ctx.fillStyle = '#b3402e';
    ctx.fillRect(px - 9, py - 3, 18, 3);

    renderHUD();
  }

  function renderHUD() {
    els.valMoney.textContent = fmtMoney(G.money);
    els.valRespect.textContent = G.respect;
    const heatEl = els.valHeat;
    heatEl.textContent = G.heat;
    heatEl.className = G.heat > 60 ? 'hot' : (G.heat > 30 ? '' : 'cool');
    els.valCrew.textContent = G.crew;
    tiltBadge.textContent = 'TILT: ' + (G.tiltEnabled ? 'ON' : 'OFF');
    tiltBadge.style.color = G.tiltEnabled ? '#6ec6ff' : '#f4c542';
  }

  function renderSidebar() {
    const t = tileAt(G.selectedX, G.selectedY);
    if (!t) return;
    els.distName.textContent = t.name;
    els.distOwner.textContent = (t.owner === 'player' ? 'Your Family' : (t.owner === 'neutral' ? 'Neutral' : t.owner)) + '  •  Control ' + t.control + '%';
    const f = FACTIONS.find(x => x.id === t.owner);
    els.distOwner.style.color = f ? f.color : '#c9a227';
    els.distControl.textContent = TERRAIN[t.terrain].name + '  •  Income ' + fmtMoney(t.income) + '/turn  •  ' + (TERRAIN[t.terrain].passable ? 'Accessible' : 'Blocked');

    const acts = els.distActions;
    acts.innerHTML = '';
    const add = (label, cls, fn) => {
      const b = document.createElement('button');
      b.className = 'btn ' + (cls || 'btn-primary');
      b.textContent = label;
      b.addEventListener('click', (e) => { e.stopPropagation(); fn(); });
      acts.appendChild(b);
    };

    if (t.owner === 'neutral') {
      add('Take Over District', 'btn-primary', () => takeOverTile(t));
    } else if (t.owner === 'player') {
      add('Collect Income', '', () => collectTile(t));
      add('Extort', 'btn-outline', () => extortTile(t));
      add('Recruit Crew', 'btn-outline', () => recruit());
    } else {
      add('Extort Rival', 'btn-outline', () => extortTile(t));
      add('Strong-arm', 'btn-outline', () => {
        if (G.crew < 2) { log('Need 2 crew.'); return; }
        G.crew -= 2;
        G.heat = Math.min(100, G.heat + 20);
        const stolen = Math.floor(t.income * 0.9);
        G.money += stolen;
        G.respect += 5;
        t.control = Math.max(0, t.control - 25);
        log('Strong-armed ' + t.name + ' - stole ' + fmtMoney(stolen));
        renderSidebar(); renderStory();
      });
    }

    // quick actions bottom right
    const qa = document.getElementById('quickActions');
    qa.innerHTML = '';
    if (t.owner === 'neutral') {
      const b = document.createElement('button');
      b.className = 'btn btn-primary';
      b.textContent = 'Take Over';
      b.addEventListener('click', () => takeOverTile(t));
      qa.appendChild(b);
    } else if (t.owner === 'player') {
      const b = document.createElement('button');
      b.className = 'btn btn-outline';
      b.textContent = 'Collect';
      b.addEventListener('click', () => collectTile(t));
      qa.appendChild(b);
    }
  }

  function renderLog() {
    const list = els.logList;
    list.innerHTML = '';
    G.log.slice(0, 14).forEach(e => {
      const d = document.createElement('div');
      d.className = 'entry' + (e.cls ? ' ' + e.cls : '');
      d.textContent = e.t + '  ' + e.msg;
      list.appendChild(d);
    });
    list.scrollTop = 0;
  }

  function renderStory() {
    const m = currentMissionObj();
    const p = missionProgress();
    if (!m) {
      els.storyMission.textContent = 'Story complete - you run the city.';
      els.storyObjective.textContent = '';
      els.storyActions.innerHTML = '';
      return;
    }
    els.storyMission.textContent = m.title + ' — ' + m.desc;
    els.storyObjective.textContent = p.txt;
    els.storyActions.innerHTML = '';
    if (p.done) {
      const b = document.createElement('button');
      b.className = 'btn btn-primary';
      b.textContent = 'Claim Reward';
      b.addEventListener('click', completeMission);
      els.storyActions.appendChild(b);
    } else {
      const hint = document.createElement('div');
      hint.className = 'muted';
      hint.style.fontSize = '12px';
      hint.textContent = 'Keep going...';
      els.storyActions.appendChild(hint);
    }
  }

  // ------------------------------------------------------------------
  // Input: tap / d-pad
  // ------------------------------------------------------------------
  function coordFromEvent(ev) {
    const rect = canvas.getBoundingClientRect();
    const clientX = ev.touches ? ev.touches[0].clientX : ev.clientX;
    const clientY = ev.touches ? ev.touches[0].clientY : ev.clientY;
    const x = Math.floor(((clientX - rect.left) * CANVAS_W / rect.width) / (CANVAS_W / GRID_W));
    const y = Math.floor(((clientY - rect.top) * CANVAS_H / rect.height) / (CANVAS_H / GRID_H));
    return { x, y };
  }

  canvas.addEventListener('touchstart', (ev) => {
    ev.preventDefault();
    const { x, y } = coordFromEvent(ev);
    const t = tileAt(x, y);
    if (!t) return;
    // if selected tile is same, just select; otherwise try move
    if (x === G.selectedX && y === G.selectedY) {
      render();
      renderSidebar();
      return;
    }
    moveTo(x, y);
  }, { passive: false });

  canvas.addEventListener('mousedown', (ev) => {
    const { x, y } = coordFromEvent(ev);
    const t = tileAt(x, y);
    if (!t) return;
    if (x === G.selectedX && y === G.selectedY) { render(); renderSidebar(); return; }
    moveTo(x, y);
  });

  // D-pad
  document.querySelectorAll('.dpad-btn').forEach(btn => {
    btn.addEventListener('touchstart', (ev) => { ev.preventDefault(); G._lastTouch = Date.now(); handleDpad(btn.dataset.dir); });
    btn.addEventListener('click', (ev) => {
      if (Date.now() - (G._lastTouch || 0) < 600) return;
      ev.preventDefault(); handleDpad(btn.dataset.dir);
    });
  });

  function handleDpad(dir) {
    if (dir === 'center') { renderSidebar(); return; }
    const map = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] };
    const m = map[dir];
    moveTo(G.playerX + m[0], G.playerY + m[1]);
  }

  // ------------------------------------------------------------------
  // Tilt / accelerometer
  // ------------------------------------------------------------------
  function supportsMotionPermission() {
    return typeof DeviceMotionEvent !== 'undefined' && typeof DeviceMotionEvent.requestPermission === 'function';
  }

  function enableTilt() {
    if (G.tiltEnabled) return;
    if (supportsMotionPermission()) {
      showModal('ios');
      return;
    }
    startTilt();
  }

  function startTilt() {
    G.tiltEnabled = true;
    els.btnTilt.textContent = 'Disable Tilt';
    els.mTiltState.textContent = 'On';
    try {
      window.addEventListener('devicemotion', onTilt);
    } catch (e) { console.warn(e); }
    log('Tilt control enabled');
  }

  function disableTilt() {
    if (!G.tiltEnabled) return;
    G.tiltEnabled = false;
    els.btnTilt.textContent = 'Enable Tilt';
    els.mTiltState.textContent = 'Off';
    window.removeEventListener('devicemotion', onTilt);
    log('Tilt control disabled');
  }

  function onTilt(ev) {
    if (!G.tiltEnabled) return;
    const now = Date.now();
    if (now - G.lastTiltMove < 700) return;
    const a = ev.accelerationIncludingGravity || ev.acceleration || { x: 0, y: 0, z: 0 };
    // Phone held portrait: gravity.x = tilt left/right, gravity.y = tilt forward/back
    let moved = false;
    if (a.x > 0.7) moved = moveTo(G.playerX + 1, G.playerY);
    else if (a.x < -0.7) moved = moveTo(G.playerX - 1, G.playerY);
    else if (a.y > 0.7) moved = moveTo(G.playerX, G.playerY + 1);
    else if (a.y < -0.7) moved = moveTo(G.playerX, G.playerY - 1);
    if (moved) G.lastTiltMove = now;
  }

  // ------------------------------------------------------------------
  // Save / load
  // ------------------------------------------------------------------
  function saveGame() {
    const payload = {
      turn: G.turn, money: G.money, respect: G.respect, heat: G.heat, crew: G.crew,
      playerX: G.playerX, playerY: G.playerY, selectedX: G.selectedX, selectedY: G.selectedY,
      currentMission: G.currentMission, tiles: G.tiles, tiltEnabled: G.tiltEnabled,
    };
    localStorage.setItem('mafia_world_save', JSON.stringify(payload));
    log('Game saved.');
  }

  function loadGame() {
    const raw = localStorage.getItem('mafia_world_save');
    if (!raw) { log('No save found.'); return; }
    try {
      const p = JSON.parse(raw);
      Object.assign(G, p);
      // rebuild tile objects (JSON loses methods, we have none - fine)
      render();
      renderSidebar();
      renderStory();
      renderHUD();
      log('Game loaded.');
    } catch (e) {
      log('Save corrupted.');
    }
  }

  // ------------------------------------------------------------------
  // Init / wiring
  // ------------------------------------------------------------------
  function init() {
    G.tiles = generateWorld();
    render();
    renderSidebar();
    renderStory();
    renderHUD();

    document.getElementById('btnNewGame').addEventListener('click', () => {
      G.tiles = generateWorld();
      G.turn = 0; G.money = 1200; G.respect = 0; G.heat = 0; G.crew = 2;
      G.playerX = 5; G.playerY = 5; G.selectedX = 5; G.selectedY = 5;
      G.currentMission = 0; G.log = [];
      localStorage.removeItem('mafia_world_save');
      render(); renderSidebar(); renderStory(); renderHUD();
      setScreen('game');
      log('New game started.');
    });

    document.getElementById('btnLoadGame').addEventListener('click', () => {
      loadGame();
      setScreen('game');
    });

    document.getElementById('btnTilt').addEventListener('click', () => {
      G.tiltEnabled ? disableTilt() : enableTilt();
    });

    // menu
    document.getElementById('btnMenu').addEventListener('click', () => showModal('menu'));
    document.getElementById('mClose').addEventListener('click', () => hideModal('menu'));
    document.getElementById('mSave').addEventListener('click', () => { saveGame(); hideModal('menu'); });
    document.getElementById('mLoad').addEventListener('click', () => { loadGame(); hideModal('menu'); });
    document.getElementById('mReset').addEventListener('click', () => {
      document.getElementById('btnNewGame').click();
      hideModal('menu');
    });
    document.getElementById('mTiltToggle').addEventListener('click', () => {
      G.tiltEnabled ? disableTilt() : enableTilt();
      hideModal('menu');
    });

    // iOS permission modal
    document.getElementById('iosAllow').addEventListener('click', async () => {
      hideModal('ios');
      try {
        const perm = await DeviceMotionEvent.requestPermission();
        if (perm === 'granted') startTilt();
        else log('Motion permission denied.');
      } catch (e) {
        log('Motion permission error.');
      }
    });
    document.getElementById('iosSkip').addEventListener('click', () => hideModal('ios'));

    // loop
    setInterval(() => {
      maybeIncome();
      renderHUD();
      renderStory();
    }, 1000);

    render();
  }

  // kick off on splash -> game
  init();
  setScreen('splash');
})();
