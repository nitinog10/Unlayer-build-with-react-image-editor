import { useState, type CSSProperties } from 'react';

import {
  PALETTES,
  CHARACTER_PRESETS,
  RADIO_STATIONS,
  paletteById,
  type Character,
  type CharacterPreset,
  type RadioStation,
} from '../data';
import LicensePlate from './LicensePlate';
import Palm from './Palm';
import Wanted from './Wanted';

interface HeroProps {
  onEnter: (character?: Character, image?: string) => void;
}

const STEPS = [
  {
    no: '01',
    title: 'Select Your Resident',
    body: 'Start from one of our Leonida resident archetypes or drop in any portrait from your device. 100% private, processed in-browser.',
    tag: 'Input',
  },
  {
    no: '02',
    title: 'Grade in Photo Mode',
    body: 'Crop to cinematic proportions, apply retro color grading, add stickers, text overlays, and hand-drawn accents inside React Image Editor.',
    tag: 'Unlayer Engine',
  },
  {
    no: '03',
    title: 'Generate Loading Card',
    body: 'Your artwork is composited into an authentic GTA intro screen complete with wanted rating, satirical hustle, and animated loading bar.',
    tag: '2X PNG Export',
  },
];

const FEATURES = [
  {
    icon: '⚡',
    badge: 'Powered by Unlayer',
    title: 'Full Photo Mode Suite',
    description:
      'Integrated React Image Editor provides deep creative control: precision aspect cropping, filters, bespoke stickers, typography, and freehand drawing.',
  },
  {
    icon: '🌴',
    badge: 'Art Direction',
    title: 'Atmospheric Color LUTs',
    description:
      'Curated duotone scrims and sun-flared washes calibrated to recreate the sun-drenched golden hour and humid neon twilight of Leonida.',
  },
  {
    icon: '★',
    badge: 'Diegetic HUD',
    title: '5-Star Wanted Rating',
    description:
      'Badge your character with authentic Wanted stars, satirical Vice City hustles (Repo Man, Gator Wrangler, Crypto Bro), and custom stamped Florida plates.',
  },
  {
    icon: '💾',
    badge: 'Zero-Cloud Privacy',
    title: 'Lossless 2X Canvas Export',
    description:
      'High-resolution client-side flattening. Copy directly to your clipboard or download ready-to-share PNGs with prefilled #BuiltWithImageEditor tags.',
  },
];

const DISTRICT_SHOWCASE = [
  {
    district: 'Vice Beach',
    title: 'Ocean Drive Sunset',
    desc: 'Art deco neon hotels, supercar cruisers, and warm magenta glow.',
    image: '/samples/1005.jpg',
    paletteId: 'sunset',
    wanted: 3,
    hustle: 'Influencer',
  },
  {
    district: 'Leonida Keys',
    title: 'Midnight Channel',
    desc: 'Mangrove smuggling runs, salt air, and electric turquoise shadows.',
    image: '/samples/1011.jpg',
    paletteId: 'midnight',
    wanted: 4,
    hustle: 'Off the grid',
  },
  {
    district: 'Little Cuba',
    title: 'Calle Ocho Heat',
    desc: 'Classic convertibles, espresso bars, and high-voltage street hustle.',
    image: '/samples/1027.jpg',
    paletteId: 'neon',
    wanted: 5,
    hustle: 'Repo Man',
  },
];

export default function Hero({ onEnter }: HeroProps) {
  const [selectedPreset, setSelectedPreset] = useState<CharacterPreset>(
    CHARACTER_PRESETS[0]
  );
  const [activePaletteId, setActivePaletteId] = useState<string>(
    CHARACTER_PRESETS[0].paletteId
  );
  const [activeStation, setActiveStation] = useState<RadioStation>(
    RADIO_STATIONS[0]
  );

  const activePalette = paletteById(activePaletteId);

  const handleLaunchWithPreset = (preset: CharacterPreset) => {
    onEnter(
      {
        name: preset.name,
        hustle: preset.hustle,
        district: preset.district,
        wanted: preset.wanted,
        paletteId: activePaletteId,
      },
      preset.image
    );
  };

  return (
    <div className="landing">
      {/* Top sticky navigation */}
      <nav className="lnav">
        <div className="lnav-left">
          <div className="lnav-brand">
            <span className="lnav-vi">VI</span>
            <div className="lnav-titles">
              <span className="lnav-name">VICE CITY</span>
              <span className="lnav-sub">LOADING SCREEN STUDIO</span>
            </div>
          </div>
          <span className="lnav-badge">LEONIDA EDITION</span>
        </div>

        {/* Diegetic Leonida Telemetry HUD */}
        <div className="lnav-telemetry readout" aria-hidden="true">
          <span className="pulse-dot" />
          <span>VICE BEACH · 84°F DUSK · 21:42 EST</span>
        </div>

        <div className="lnav-nav">
          <a href="#features" className="lnav-link">
            Features
          </a>
          <a href="#radio" className="lnav-link">
            Radio
          </a>
          <a href="#gallery" className="lnav-link">
            Gallery
          </a>
          <a href="#pipeline" className="lnav-link">
            Pipeline
          </a>
          <button
            className="btn btn--primary lnav-cta"
            onClick={() => handleLaunchWithPreset(selectedPreset)}
          >
            <span>Launch Studio →</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-copy">
          <div className="reveal reveal--1">
            <div className="hero-kicker-pill">
              <span className="kicker-star">★</span>
              <span className="kicker-text">GRAND THEFT AUTO VI ART ENGINE</span>
              <span className="kicker-rule" />
              <span className="kicker-tag">#BuiltWithImageEditor</span>
            </div>
          </div>

          <h1 className="hero-title">
            <span className="reveal reveal--2">
              <span className="hero-title-vice">Vice City</span>
            </span>
            <span className="reveal reveal--3">
              <span className="hero-title-studio">Loading Screen Studio</span>
            </span>
          </h1>

          <div className="reveal reveal--4">
            <p className="hero-lede">
              Every Grand Theft Auto opens on a hand-painted loading screen.
              Transform your portraits into iconic Rockstar-style key art: grade
              with the Unlayer React Image Editor, badge your dossier with
              wanted stars, and export high-DPI intro cards ready for the strip.
            </p>
          </div>

          {/* Interactive Archetype Picker */}
          <div className="hero-archetypes">
            <div className="archetype-label">
              <span className="archetype-icon">⚡</span>
              <span>SELECT RESIDENT ARCHETYPE TO PREVIEW:</span>
            </div>
            <div className="archetype-buttons">
              {CHARACTER_PRESETS.map((preset) => {
                const isActive = selectedPreset.id === preset.id;
                return (
                  <button
                    key={preset.id}
                    className={`archetype-btn ${isActive ? 'archetype-btn--active' : ''}`}
                    onClick={() => {
                      setSelectedPreset(preset);
                      setActivePaletteId(preset.paletteId);
                    }}
                  >
                    <span className="archetype-btn-name">{preset.name}</span>
                    <span className="archetype-btn-vibe">{preset.vibe}</span>
                  </button>
                );
              })}
            </div>
            <div className="archetype-quote">
              <span className="quote-mark">“</span>
              <span>{selectedPreset.tagline}</span>
              <span className="quote-hustle">— {selectedPreset.hustle}</span>
            </div>
          </div>

          {/* Hero CTAs */}
          <div className="hero-actions">
            <button
              className="btn btn--primary hero-cta"
              onClick={() => handleLaunchWithPreset(selectedPreset)}
            >
              <span>Enter Photo Mode with {selectedPreset.name}</span>
            </button>
            <button
              className="btn btn--ghost hero-cta-secondary"
              onClick={() => onEnter()}
            >
              <span>Upload Custom Photo</span>
            </button>
          </div>

          <div className="hero-badges">
            <span className="hero-badge">🔒 100% Client-Side Privacy</span>
            <span className="hero-badge">🎨 Unlayer Canvas Engine</span>
            <span className="hero-badge">📷 2X High-DPI PNG</span>
          </div>
        </div>

        {/* Hero Interactive Visual */}
        <div className="hero-visual">
          <div
            className="retro-sun"
            style={{
              background: `radial-gradient(circle, ${activePalette.accent} 0%, ${activePalette.glow} 48%, #ff3568 100%)`,
            }}
            aria-hidden="true"
          />

          {/* The Live Interactive Loading Card */}
          <div
            className="card card--preview"
            style={{ '--accent': activePalette.accent } as CSSProperties}
          >
            <img
              className="card-photo"
              src={selectedPreset.image}
              alt={selectedPreset.name}
            />
            <div
              className="card-wash"
              style={{ backgroundImage: activePalette.wash }}
            />
            <div
              className="card-scrim"
              style={{ backgroundImage: activePalette.scrim }}
            />

            <div className="card-top">
              <Wanted value={selectedPreset.wanted} className="card-wanted" />
              <div className="card-logo">
                <span className="card-logo-vi">VI</span>
                <span className="card-logo-sub">Leonida</span>
              </div>
            </div>

            <div className="card-bottom">
              <p className="card-hustle">{selectedPreset.hustle}</p>
              <h2 className="card-name">{selectedPreset.name}</h2>
              <div className="card-meta">
                <span className="card-district">{selectedPreset.district}</span>
                <span className="card-rule" />
              </div>
              <div className="card-loader">
                <div className="card-bar">
                  <span className="card-bar-fill" style={{ width: '84%' }} />
                </div>
                <span className="card-pct">Loading 84%</span>
              </div>
            </div>
          </div>

          {/* Florida License Plate */}
          <LicensePlate className="hero-plate" />

          {/* Interactive Palette Controls Directly Below Card */}
          <div className="palette-dock">
            <span className="palette-dock-title">ATMOSPHERIC GRADE:</span>
            <div className="palette-dock-chips">
              {PALETTES.map((p) => {
                const isSelected = activePaletteId === p.id;
                return (
                  <button
                    key={p.id}
                    className={`palette-chip ${isSelected ? 'palette-chip--active' : ''}`}
                    onClick={() => setActivePaletteId(p.id)}
                    title={p.name}
                  >
                    <span
                      className="palette-chip-swatch"
                      style={{ background: p.accent }}
                    />
                    <span className="palette-chip-name">{p.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <Palm className="hero-palm hero-palm--left" />
        <Palm className="hero-palm hero-palm--right" />
      </header>

      {/* GTA Vice City Diegetic Radio Banner */}
      <section className="radio-strip" id="radio" aria-label="Leonida Radio">
        <div className="radio-shell">
          <div className="radio-hud">
            <span className="radio-live-tag">
              <span className="pulse-dot-red" />
              LEONIDA BROADCAST
            </span>
            <div className="radio-equalizer" aria-hidden="true">
              <span className="eq-bar eq-bar--1" />
              <span className="eq-bar eq-bar--2" />
              <span className="eq-bar eq-bar--3" />
              <span className="eq-bar eq-bar--4" />
              <span className="eq-bar eq-bar--5" />
            </div>
          </div>

          <div className="radio-stations">
            {RADIO_STATIONS.map((station) => {
              const isCurrent = activeStation.id === station.id;
              return (
                <button
                  key={station.id}
                  className={`radio-station-btn ${isCurrent ? 'radio-station-btn--active' : ''}`}
                  onClick={() => setActiveStation(station)}
                >
                  <span className="station-dial">{station.dial}</span>
                  <span className="station-name">{station.name}</span>
                </button>
              );
            })}
          </div>

          <div className="radio-ticker">
            <span className="radio-now-playing">NOW PLAYING:</span>
            <span className="radio-track">“{activeStation.track}”</span>
            <span className="radio-by">by</span>
            <span className="radio-artist">{activeStation.artist}</span>
            <span className="radio-genre">[{activeStation.genre}]</span>
          </div>
        </div>
      </section>

      {/* Feature Showcase Grid ("The Grand Theft Auto Treatment") */}
      <section className="features-section" id="features">
        <div className="features-shell">
          <div className="section-header">
            <span className="section-kicker readout">THE ROCKSTAR ART DIRECTION</span>
            <h2 className="section-title">The Grand Theft Auto Treatment</h2>
            <p className="section-subtitle">
              Built on Unlayer's React Image Editor to deliver a faithful homage
              to the cinematic loading art of Vice City.
            </p>
          </div>

          <div className="features-grid">
            {FEATURES.map((feat) => (
              <div className="feature-card hud" key={feat.title}>
                <div className="feature-card-top">
                  <span className="feature-icon">{feat.icon}</span>
                  <span className="feature-badge">{feat.badge}</span>
                </div>
                <h3 className="feature-title">{feat.title}</h3>
                <p className="feature-desc">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* District Showcase Gallery */}
      <section className="gallery-section" id="gallery">
        <div className="gallery-shell">
          <div className="section-header">
            <span className="section-kicker readout">LEONIDA ARCHIVES</span>
            <h2 className="section-title">From Ocean Drive to the Keys</h2>
            <p className="section-subtitle">
              Explore how color washes and character dossiers shape the iconic
              aesthetic across Leonida's distinct territories.
            </p>
          </div>

          <div className="gallery-grid">
            {DISTRICT_SHOWCASE.map((item) => {
              const pal = paletteById(item.paletteId);
              return (
                <div
                  className="gallery-card"
                  key={item.title}
                  style={{ '--accent': pal.accent } as CSSProperties}
                >
                  <div className="gallery-card-preview">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="gallery-img"
                    />
                    <div
                      className="gallery-wash"
                      style={{ backgroundImage: pal.wash }}
                    />
                    <div
                      className="gallery-scrim"
                      style={{ backgroundImage: pal.scrim }}
                    />
                    <div className="gallery-badge-district">{item.district}</div>
                    <Wanted value={item.wanted} className="gallery-wanted" />
                  </div>
                  <div className="gallery-card-info">
                    <div className="gallery-hustle-tag">{item.hustle}</div>
                    <h3 className="gallery-item-title">{item.title}</h3>
                    <p className="gallery-item-desc">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3-Step Pipeline */}
      <section className="steps" id="pipeline" aria-labelledby="steps-title">
        <div className="section-header">
          <span className="section-kicker readout">WORKFLOW PIPELINE</span>
          <h2 className="steps-title" id="steps-title">
            Three Steps to the Strip
          </h2>
          <p className="section-subtitle">
            From raw camera roll to certified Vice City intro screen in seconds.
          </p>
        </div>

        <ol className="steps-list">
          {STEPS.map((s) => (
            <li className="step hud" key={s.title}>
              <div className="step-header">
                <span className="step-no">{s.no}</span>
                <span className="step-tag">{s.tag}</span>
              </div>
              <div className="step-body">
                <h3 className="step-title">{s.title}</h3>
                <p className="step-text">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Final Cinematic Call to Action Banner */}
      <section className="final-cta">
        <div className="final-cta-shell">
          <div className="final-cta-box hud">
            <span className="final-cta-kicker readout">
              ★ NO PLUGINS · NO SIGN-UPS · 100% IN BROWSER
            </span>
            <h2 className="final-cta-title">Ready to Enter Leonida?</h2>
            <p className="final-cta-lede">
              Drop in your photo and create your personalized GTA Vice City
              loading screen.
            </p>
            <div className="final-cta-actions">
              <button
                className="btn btn--primary final-cta-btn"
                onClick={() => handleLaunchWithPreset(selectedPreset)}
              >
                <span>Launch Photo Mode Studio →</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Classy Footer */}
      <footer className="lfoot">
        <div className="lfoot-shell">
          <div className="lfoot-brand">
            <span className="lnav-vi">VI</span>
            <span className="lfoot-title">Vice City · Loading Screen Studio</span>
          </div>

          <p className="lfoot-lede">
            Built with <strong>React Image Editor</strong> by Unlayer for the{' '}
            <strong>#BuiltWithImageEditor</strong> challenge.
          </p>

          <div className="lfoot-links">
            <a
              href="https://github.com/nitinog10/Unlayer-build-with-react-image-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="lfoot-link"
            >
              GitHub Repository
            </a>
            <span className="lfoot-divider">•</span>
            <a
              href="https://github.com/unlayer/react-image-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="lfoot-link"
            >
              Unlayer React Image Editor
            </a>
            <span className="lfoot-divider">•</span>
            <a
              href="https://unlayer.com"
              target="_blank"
              rel="noopener noreferrer"
              className="lfoot-link"
            >
              Unlayer Official
            </a>
          </div>

          <p className="lfoot-fine">
            A fan-made creative homage to Grand Theft Auto: Vice City and GTA VI.
            Not affiliated with, endorsed by, or connected to Rockstar Games,
            Take-Two Interactive, or any of their subsidiaries. All trademarks
            belong to their respective owners.
          </p>
        </div>
      </footer>
    </div>
  );
}
