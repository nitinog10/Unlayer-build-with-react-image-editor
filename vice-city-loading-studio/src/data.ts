export interface Palette {
  id: string;
  name: string;
  /** Gradient scrim laid over the portrait on the card (bottom → top). */
  scrim: string;
  /** Warm/cool wash multiplied over the photo to sell the "grade". */
  wash: string;
  /** Accent used for the name, rule, and glow. */
  accent: string;
  /** Second glow color for the ambient light behind the card. */
  glow: string;
}

export const PALETTES: Palette[] = [
  {
    id: 'sunset',
    name: 'Sunset Strip',
    scrim:
      'linear-gradient(0deg, #0b0714 6%, rgba(11,7,20,0.55) 34%, rgba(255,53,104,0.28) 66%, rgba(255,138,61,0.14) 100%)',
    wash: 'linear-gradient(160deg, rgba(255,138,61,0.22), rgba(255,53,104,0.14))',
    accent: '#ff8a3d',
    glow: '#ff3568',
  },
  {
    id: 'midnight',
    name: 'Midnight Keys',
    scrim:
      'linear-gradient(0deg, #060512 6%, rgba(6,5,18,0.55) 34%, rgba(91,140,255,0.24) 66%, rgba(63,214,192,0.14) 100%)',
    wash: 'linear-gradient(160deg, rgba(63,214,192,0.16), rgba(91,140,255,0.18))',
    accent: '#3fd6c0',
    glow: '#5b8cff',
  },
  {
    id: 'neon',
    name: 'Neon Boulevard',
    scrim:
      'linear-gradient(0deg, #0a0518 6%, rgba(10,5,24,0.55) 34%, rgba(255,53,104,0.26) 64%, rgba(63,214,192,0.16) 100%)',
    wash: 'linear-gradient(160deg, rgba(255,53,104,0.2), rgba(63,214,192,0.14))',
    accent: '#ff3568',
    glow: '#3fd6c0',
  },
  {
    id: 'gold',
    name: 'Ocean Gold',
    scrim:
      'linear-gradient(0deg, #0d0b06 6%, rgba(13,11,6,0.55) 34%, rgba(255,194,75,0.26) 64%, rgba(255,138,61,0.16) 100%)',
    wash: 'linear-gradient(160deg, rgba(255,194,75,0.22), rgba(255,122,61,0.16))',
    accent: '#ffc24b',
    glow: '#ff8a3d',
  },
];

export const DISTRICTS = [
  'Vice City',
  'Leonida Keys',
  'Port Gellhorn',
  'Grassrivers',
  'Ambrosia',
  'Little Cuba',
] as const;

/** The funny "what do you do around here" tag under the name. */
export const HUSTLES = [
  'Influencer',
  'Repo Man',
  'Crypto Guy',
  'Gator Wrangler',
  'Yacht Realtor',
  'Meme Trader',
  'Off the grid',
] as const;

export const SAMPLES = [
  '/samples/1005.jpg',
  '/samples/1011.jpg',
  '/samples/1027.jpg',
];

export interface Character {
  name: string;
  hustle: (typeof HUSTLES)[number];
  district: (typeof DISTRICTS)[number];
  wanted: number;
  paletteId: string;
}

export interface CharacterPreset extends Character {
  id: string;
  image: string;
  tagline: string;
  vibe: string;
}

export const CHARACTER_PRESETS: CharacterPreset[] = [
  {
    id: 'lucia',
    name: 'Lucia Caminos',
    hustle: 'Repo Man',
    district: 'Vice City',
    wanted: 3,
    paletteId: 'sunset',
    image: '/samples/1005.jpg',
    tagline: 'The only way out is straight through.',
    vibe: 'Downtown Syndicate',
  },
  {
    id: 'jason',
    name: 'Jason Duval',
    hustle: 'Off the grid',
    district: 'Leonida Keys',
    wanted: 4,
    paletteId: 'midnight',
    image: '/samples/1011.jpg',
    tagline: 'Trust nobody until the sirens stop.',
    vibe: 'Keys Smuggler',
  },
  {
    id: 'tommy',
    name: 'Tommy V.',
    hustle: 'Yacht Realtor',
    district: 'Little Cuba',
    wanted: 5,
    paletteId: 'neon',
    image: '/samples/1027.jpg',
    tagline: 'I built this town brick by neon brick.',
    vibe: 'Vice Legend',
  },
];

export interface RadioStation {
  id: string;
  name: string;
  dial: string;
  genre: string;
  track: string;
  artist: string;
}

export const RADIO_STATIONS: RadioStation[] = [
  {
    id: 'flash',
    name: 'Flash FM',
    dial: '105.6',
    genre: 'Synthwave & 80s Pop',
    track: 'Out of Touch',
    artist: 'Hall & Oates',
  },
  {
    id: 'wave',
    name: 'Wave 103',
    dial: '103.2',
    genre: 'New Wave & Post-Punk',
    track: 'Two Tribes',
    artist: 'Frankie Goes to Hollywood',
  },
  {
    id: 'fever',
    name: 'Fever 105',
    dial: '105.2',
    genre: 'Disco, Soul & Funk',
    track: 'Summer Madness',
    artist: 'Kool & The Gang',
  },
  {
    id: 'vrock',
    name: 'V-Rock',
    dial: '98.3',
    genre: 'Heavy Metal & Hard Rock',
    track: 'Bark at the Moon',
    artist: 'Ozzy Osbourne',
  },
];

export const DEFAULT_CHARACTER: Character = {
  name: 'Lucia Caminos',
  hustle: 'Repo Man',
  district: 'Vice City',
  wanted: 3,
  paletteId: 'sunset',
};

export const paletteById = (id: string): Palette =>
  PALETTES.find((p) => p.id === id) ?? PALETTES[0];

