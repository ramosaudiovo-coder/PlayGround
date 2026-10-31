export const CITY = {
  blockStep: 100,
  blockSize: 80,
  blockInner: 68,
  roadWidth: 20,
  min: -250,
  max: 250,
}

export const DISTRICTS = [
  {
    id: 'little-italy',
    name: 'Little Italy',
    short: 'LITTLE ITALY',
    color: '#d6b168',
    rival: 'The Vanzetti',
    center: [22, -132],
    blurb: 'The old neighborhood. Loyalty is the only currency that never inflates.',
  },
  {
    id: 'crown-heights',
    name: 'Crown Heights',
    short: 'CROWN HEIGHTS',
    color: '#b8a7ff',
    rival: 'The Falcone',
    center: [-48, -200],
    blurb: 'Old money, new blood. The penthouses watch every move you make.',
  },
  {
    id: 'neon-row',
    name: 'Neon Row',
    short: 'NEON ROW',
    color: '#ff5d9e',
    rival: 'The Okada',
    center: [-166, -34],
    blurb: 'Sin sells by the hour. The neon never quite goes out.',
  },
  {
    id: 'docks',
    name: 'The Docks',
    short: 'THE DOCKS',
    color: '#55d6d0',
    rival: 'The Marchetti',
    center: [196, -46],
    blurb: 'Everything enters the city here. Everything has a price.',
  },
  {
    id: 'old-quarter',
    name: 'Old Quarter',
    short: 'OLD QUARTER',
    color: '#e08a5b',
    rival: 'The Greco',
    center: [-48, 200],
    blurb: 'Cobblestones and confessionals. Old sins leave deep roots.',
  },
]

const sideVector = {
  north: [0, -35],
  south: [0, 35],
  west: [-35, 0],
  east: [35, 0],
}

function racket(def) {
  const [bx, bz] = def.block
  const [ox, oz] = sideVector[def.side]
  return {
    ...def,
    marker: [bx + ox, bz + oz],
    shop: [bx + ox * 0.78, bz + oz * 0.78],
    blockCenter: [bx, bz],
  }
}

export const RACKETS = [
  racket({ id: 'bellas', name: "Bella's Diner", kind: 'DINER', district: 'little-italy', block: [0, -100], side: 'west', sign: 'BELLA’S', color: '#ffbe63', base: 22 }),
  racket({ id: 'romano', name: 'Romano Tailors', kind: 'TAILOR', district: 'little-italy', block: [100, -100], side: 'west', sign: 'ROMANO', color: '#f6d18b', base: 18 }),
  racket({ id: 'stmarco', name: 'St. Marco Social Club', kind: 'SOCIAL CLUB', district: 'little-italy', block: [0, -200], side: 'south', sign: 'ST. MARCO', color: '#e2a95b', base: 28 }),
  racket({ id: 'crownhotel', name: 'The Crown Hotel', kind: 'HOTEL', district: 'crown-heights', block: [0, -200], side: 'north', sign: 'CROWN', color: '#c2b1ff', base: 34 }),
  racket({ id: 'highline', name: 'Highline Garage', kind: 'GARAGE', district: 'crown-heights', block: [-100, -200], side: 'south', sign: 'HIGHLINE', color: '#9b8cff', base: 24 }),
  racket({ id: 'pulse', name: 'Pulse Nightclub', kind: 'NIGHTCLUB', district: 'neon-row', block: [-200, -100], side: 'east', sign: 'PULSE', color: '#ff5d9e', base: 38 }),
  racket({ id: 'velvet', name: 'The Velvet Room', kind: 'LOUNGE', district: 'neon-row', block: [-200, 0], side: 'east', sign: 'VELVET', color: '#ff78c8', base: 30 }),
  racket({ id: 'lucky', name: 'Lucky Dragon Casino', kind: 'CASINO', district: 'neon-row', block: [-100, 0], side: 'west', sign: 'LUCKY DRAGON', color: '#ffcb5e', base: 42 }),
  racket({ id: 'pier9', name: 'Pier 9 Warehouse', kind: 'WAREHOUSE', district: 'docks', block: [200, -100], side: 'west', sign: 'PIER 9', color: '#55d6d0', base: 32 }),
  racket({ id: 'rusty', name: 'The Rusty Anchor', kind: 'TAVERN', district: 'docks', block: [200, 0], side: 'west', sign: 'RUSTY ANCHOR', color: '#7ce8e0', base: 22 }),
  racket({ id: 'moretti', name: 'Moretti Bakery', kind: 'BAKERY', district: 'old-quarter', block: [-100, 200], side: 'east', sign: 'MORETTI', color: '#f0a168', base: 20 }),
  racket({ id: 'crypt', name: 'The Crypt', kind: 'BAR', district: 'old-quarter', block: [0, 200], side: 'west', sign: 'THE CRYPT', color: '#df8254', base: 26 }),
]

export const SAFEHOUSE = {
  block: [-100, -100],
  side: 'east',
  marker: [-65, -100],
  shop: [-72.5, -100],
  car: [-50, -108],
  spawn: [-42, -100],
}

export const CHAPTERS = [
  {
    id: 1,
    label: 'CHAPTER I',
    title: 'A Seat at the Table',
    desc: 'Take over your first racket. Follow the gold light.',
    reward: 1000,
    respect: 25,
    goal: 1,
    progress: (s) => s.ownedCount,
  },
  {
    id: 2,
    label: 'CHAPTER II',
    title: 'Blood & Concrete',
    desc: 'Control Little Italy. Three rackets, one neighborhood.',
    reward: 2500,
    respect: 60,
    goal: 3,
    progress: (s) => s.districtOwned('little-italy'),
  },
  {
    id: 3,
    label: 'CHAPTER III',
    title: 'The Long Game',
    desc: 'Hold three boroughs at once. Make the families kneel.',
    reward: 6000,
    respect: 150,
    goal: 3,
    progress: (s) => s.controlledDistricts,
  },
  {
    id: 4,
    label: 'CHAPTER IV',
    title: 'Crown of Ashes',
    desc: 'Take every racket in the city. Leave nothing for the vultures.',
    reward: 15000,
    respect: 400,
    goal: 5,
    progress: (s) => s.controlledDistricts,
  },
]

export const RANKS = [
  { name: 'ASSOCIATE', min: 0 },
  { name: 'SOLDIER', min: 150 },
  { name: 'CAPO', min: 400 },
  { name: 'UNDERBOSS', min: 800 },
  { name: 'DON', min: 1400 },
]

export function rankFor(respect) {
  let rank = RANKS[0]
  for (const r of RANKS) if (respect >= r.min) rank = r
  return rank
}

export function nextRank(respect) {
  return RANKS.find((r) => r.min > respect) || null
}

export const DISTRICT_BY_ID = Object.fromEntries(DISTRICTS.map((d) => [d.id, d]))
export const RACKETS_BY_DISTRICT = Object.fromEntries(
  DISTRICTS.map((d) => [d.id, RACKETS.filter((r) => r.district === d.id)]),
)

export const NEON_WORDS = [
  'HOTEL', 'BAR', 'LIQUOR', 'PAWN', '24 HRS', 'CINEMA', 'NOODLES', 'JAZZ',
  'MOTEL', 'TAXI', 'DINER', 'CLUB', 'GOLD', 'VICE', 'ROOMS', 'CAFÉ',
]
