import type { CSSProperties } from 'react';

import { PALETTES, SAMPLES } from '../data';
import LicensePlate from './LicensePlate';
import Palm from './Palm';
import Wanted from './Wanted';

const STEPS = [
  {
    title: 'Pick your shot',
    body: 'Start from a bundled resident or upload your own photo. It never leaves your browser.',
  },
  {
    title: 'Edit in Photo Mode',
    body: 'Crop, color-grade, and add stickers, frames, text, or freehand drawing — right in the React Image Editor.',
  },
  {
    title: 'Get your card',
    body: 'Your shot drops into a Vice City loading screen. Download it, copy it, or share it in a tap.',
  },
];

const TOOLS = ['Crop', 'Color grade', 'Stickers', 'Frames', 'Text', 'Draw'];

export default function Hero({ onEnter }: { onEnter: () => void }) {
  const preview = PALETTES[0];

  return (
    <div className="landing">
      <nav className="lnav">
        <div className="lnav-brand">
          <span className="lnav-vi">VI</span>
          <span className="lnav-name">Vice City · Loading Screen Studio</span>
        </div>
        <button className="btn btn--primary lnav-cta" onClick={onEnter}>
          <span>Enter Photo Mode</span>
        </button>
      </nav>

      <header className="hero">
        <video
          src="/bg-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
        />
        <div className="hero-copy">


          <h1 className="hero-title">
            <span className="reveal reveal--2">
              <span className="hero-title-vice">Vice City&nbsp;</span>
            </span>
            <span className="reveal reveal--3">
              <span className="hero-title-studio">Loading Screen Studio</span>
            </span>
          </h1>

          <div className="reveal reveal--4">
            <p className="hero-lede">
              Every Grand Theft Auto opens on a hand-painted loading screen.
              Make yours: drop in a photo, grade it in Photo Mode, and walk away
              with a card pulled straight from the intro reel.
            </p>
          </div>

          <div className="hero-actions">
            <button className="btn btn--primary hero-cta" onClick={onEnter}>
              <span>Enter Photo Mode</span>
            </button>
            <p className="hero-note">
              Powered by React Image Editor · #BuiltWithImageEditor
            </p>
          </div>
        </div>

        <div className="hero-visual">
          <div className="retro-sun" aria-hidden="true" />
          <div
            className="card card--preview"
            style={{ '--accent': preview.accent } as CSSProperties}
          >
            <img className="card-photo" src={SAMPLES[0]} alt="" />
            <div className="card-wash" style={{ backgroundImage: preview.wash }} />
            <div
              className="card-scrim"
              style={{ backgroundImage: preview.scrim }}
            />
            <div className="card-top">
              <Wanted value={3} className="card-wanted" />
              <div className="card-logo">
                <span className="card-logo-vi">VI</span>
                <span className="card-logo-sub">Leonida</span>
              </div>
            </div>
            <div className="card-bottom">
              <p className="card-hustle">Repo Man</p>
              <h2 className="card-name">Lucia Caminos</h2>
              <div className="card-meta">
                <span className="card-district">Vice City</span>
                <span className="card-rule" />
              </div>
              <div className="card-loader">
                <div className="card-bar">
                  <span className="card-bar-fill" style={{ width: '78%' }} />
                </div>
                <span className="card-pct">Loading 78%</span>
              </div>
            </div>
          </div>
          <LicensePlate className="hero-plate" />
        </div>

        <Palm className="hero-palm hero-palm--left" />
        <Palm className="hero-palm hero-palm--right" />
      </header>

      <section className="steps" aria-labelledby="steps-title">
        <h2 className="steps-title" id="steps-title">
          Three steps to the strip
        </h2>
        <ol className="steps-list">
          {STEPS.map((s, i) => (
            <li className="step" key={s.title}>
              <span className="step-no">{i + 1}</span>
              <div className="step-body">
                <h3 className="step-title">{s.title}</h3>
                <p className="step-text">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...TOOLS, ...TOOLS, ...TOOLS, ...TOOLS].map((t, i) => (
            <span className="marquee-item" key={i}>
              <span className="marquee-star">★</span>
              {t}
            </span>
          ))}
        </div>
      </div>

      <footer className="lfoot">
        <p className="lfoot-lede">
          Built for the <strong>#BuiltWithImageEditor</strong> challenge — a
          fan-made tribute to the Vice City aesthetic.
        </p>
        <button className="btn btn--primary" onClick={onEnter}>
          <span>Make your loading screen</span>
        </button>
        <p className="lfoot-fine">
          Powered by Unlayer’s React Image Editor. Not affiliated with, endorsed
          by, or connected to Rockstar Games or Take-Two.
        </p>
      </footer>
    </div>
  );
}
