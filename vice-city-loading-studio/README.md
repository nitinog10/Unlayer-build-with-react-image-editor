# Vice City · Loading Screen Studio

> **Transform your photos into authentic Grand Theft Auto loading screens with a full in-browser Photo Mode suite powered by Unlayer’s React Image Editor.**

[![React 19](https://img.shields.io/badge/React-19.x-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.x-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646cff?style=flat-square&logo=vite)](https://vite.dev/)
[![Unlayer](https://img.shields.io/badge/Powered%20By-React%20Image%20Editor-ff3568?style=flat-square)](https://github.com/unlayer/react-image-editor)
[![Challenge](https://img.shields.io/badge/Challenge-%23BuiltWithImageEditor-ff8a3d?style=flat-square)](https://github.com/unlayer/react-image-editor)
[![Privacy](https://img.shields.io/badge/Privacy-100%25%20Client--Side-3fd6c0?style=flat-square)](#client-side-privacy-architecture)
[![License](https://img.shields.io/badge/License-MIT-f0e7d6?style=flat-square)](LICENSE)

![Vice City Loading Screen Studio](docs/hero.png)

---

## Table of Contents

- [1. The Grand Theft Auto Experience & Vision](#1-the-grand-theft-auto-experience--vision)
  - [The Heritage of the GTA Loading Screen](#the-heritage-of-the-gta-loading-screen)
  - [The Visual Formula: 80s Pulp Meets Modern Leonida](#the-visual-formula-80s-pulp-meets-modern-leonida)
  - [The Diegetic Atmosphere: Radio Stations & Humid Dusk](#the-diegetic-atmosphere-radio-stations--humid-dusk)
- [2. Anatomy of an Authentic Loading Card](#2-anatomy-of-an-authentic-loading-card)
  - [The Hand-Painted Character Cutout](#the-hand-painted-character-cutout)
  - [Atmospheric Duotone Scrim & Color Wash](#atmospheric-duotone-scrim--color-wash)
  - [The Five-Star Wanted System](#the-five-star-wanted-system)
  - [Satirical Leonida District & Hustle Archetypes](#satirical-leonida-district--hustle-archetypes)
  - [The Paced Loading Bar](#the-paced-loading-bar)
  - [Embossed Florida License Plate](#embossed-florida-license-plate)
- [3. Photo Mode Engine: Powered by React Image Editor](#3-photo-mode-engine-powered-by-react-image-editor)
  - [Why Unlayer React Image Editor?](#why-unlayer-react-image-editor)
  - [Tool Selection & Customization](#tool-selection--customization)
  - [Dark HUD Theme Integration](#dark-hud-theme-integration)
  - [Canvas Serialization & Continuous Re-Editing Loop](#canvas-serialization--continuous-re-editing-loop)
  - [Integration Code Walkthrough](#integration-code-walkthrough)
- [4. The 3-Stage User Journey](#4-the-3-stage-user-journey)
- [5. Technical Architecture](#5-technical-architecture)
  - [Component Tree](#component-tree)
  - [Client-Side Privacy Architecture](#client-side-privacy-architecture)
  - [High-DPI Lossless Export Pipeline](#high-dpi-lossless-export-pipeline)
- [6. Getting Started Locally](#6-getting-started-locally)
- [7. Production Build & Deployment](#7-production-build--deployment)
- [8. Credits & Legal Disclaimer](#8-credits--legal-disclaimer)

---

## 1. The Grand Theft Auto Experience & Vision

### The Heritage of the GTA Loading Screen
Since **Grand Theft Auto: Vice City (2002)**, Rockstar Games has defined open-world game intros with signature hand-painted loading screens. Accompanied by synth basslines and radio frequencies, these loading screens are not just waiting intervals—they are an artistic prologue that introduces the underworld, the satirical characters, and the sun-bleached atmosphere of the city before you ever take control of the wheel.

With **Grand Theft Auto VI** returning players to the state of **Leonida** and the neon streets of Vice City, the aesthetic evolves into a blend of high-contrast graphic novel realism, golden hour lens flares, and cultural satire.

**Vice City · Loading Screen Studio** translates this iconic gaming experience into an interactive web application. It turns any personal portrait, selfie, or resident snapshot into a certified, hand-painted Grand Theft Auto loading card.

---

### The Visual Formula: 80s Pulp Meets Modern Leonida
Every loading card produced in the studio follows three strict artistic rules:
1. **Cool Cockpit vs. Warm Art**: The application interface acts as a disciplined, teal-navy camera cockpit HUD (`#070b10` to `#16303b`), contrasting against the hyper-saturated, sun-flared warmth of the central card artifact.
2. **Duotone Wash Multipliers**: Portraits are graded with color washes (Sunset Strip, Midnight Keys, Neon Boulevard, Ocean Gold) that mimic vintage 35mm film stock exposed to tropical humidity and neon signage.
3. **Diegetic Graphic Design**: Every on-screen badge—from the bold roman numeral `VI` and the distress-textured font to the police Wanted stars—feels like an in-universe artifact pulled directly from the game's intro reel.

---

### The Diegetic Atmosphere: Radio Stations & Humid Dusk
Music and radio satire are the lifeblood of Grand Theft Auto. The studio features an integrated **Leonida Broadcast Network** tuner with animated audio visualizer bars, allowing users to tune between legendary Vice City frequencies:

| Station | Dial | Curated Genre | Signature Track |
| :--- | :--- | :--- | :--- |
| **Flash FM** | `105.6` | 80s Synthwave & Pop | *Out of Touch* — Hall & Oates |
| **Wave 103** | `103.2` | New Wave & Post-Punk | *Two Tribes* — Frankie Goes to Hollywood |
| **Fever 105** | `105.2` | Disco, Soul & Funk | *Summer Madness* — Kool & The Gang |
| **V-Rock** | `98.3` | Hard Rock & Heavy Metal | *Bark at the Moon* — Ozzy Osbourne |

---

## 2. Anatomy of an Authentic Loading Card

```
┌─────────────────────────────────────────────────────────────┐
│ ★ ★ ★ ☆ ☆   (Wanted Level)                 VI Leonida       │
│                                                             │
│                                                             │
│                    [ CHARACTER PORTRAIT ]                   │
│               Graded with Duotone Wash & Scrim               │
│                                                             │
│                                                             │
│ Repo Man                                  (Satirical Hustle)│
│ LUCIA CAMINOS                             (Display Typography)
│ Vice City ───────────────────────         (District Tag)    │
│ █ █ █ █ █ █ █ █ █ █ █ █ ░ ░ ░   Loading 84% (Paced Loader)  │
└─────────────────────────────────────────────────────────────┘
```

### The Hand-Painted Character Cutout
The focal point of every card is a dramatic portrait. Inside the studio's **Photo Mode**, users crop their image to a 4:5 vertical poster ratio, apply filters to heighten contrast, and use brush tools or stickers to capture the comic-book rim-lighting characteristic of Rockstar key art.

### Atmospheric Duotone Scrim & Color Wash
To ensure legibility of overlay typography and unify disparate photos into a coherent artistic style, the studio applies two gradient layers over the photo:
- **Atmospheric Scrim**: A steep bottom-to-top gradient (`linear-gradient(0deg, #0b0714 6%, ... 100%)`) that fades out the lower half of the image into deep midnight obsidian, creating a solid bed for the character's name and district.
- **Color Grade Wash**: A dynamic diagonal color tint (`mix-blend-mode: color` or overlay) that infuses the highlights with warm tangerine, flamingo pink, turquoise, or golden hour amber.

### The Five-Star Wanted System
A reactive police dispatch rating from **1 to 5 stars**:
- **1–2 Stars**: Local city infraction (traffic citations, disorderly conduct).
- **3 Stars**: Vice City Police Department squad car pursuit and road blocks.
- **4 Stars**: VCPD SWAT tactical response and air support.
- **5 Stars**: Federal Bureau of Investigation, military mobilization, and maximum Leonida manhunt.

### Satirical Leonida District & Hustle Archetypes
True to GTA’s satirical mirror of American culture, residents can be stamped with authentic Leonida occupations and territories:
- **Hustles**: `Repo Man`, `Crypto Guy`, `Gator Wrangler`, `Yacht Realtor`, `Meme Trader`, `Influencer`, `Off the grid`.
- **Districts**: `Vice City`, `Leonida Keys`, `Port Gellhorn`, `Grassrivers`, `Ambrosia`, `Little Cuba`.

### The Paced Loading Bar
An animated progress bar built with cubic-bezier easing (`(1 - Math.pow(1 - t, 3)) * 100`) that mimics authentic open-world loading: it fills quickly to ~75%, deliberates around 84%, and lands at 100% just as the player prepares to jump into the action.

### Embossed Florida License Plate
A companion diegetic graphic featuring embossed stamped lettering, registration bolts, and a Florida-style palm sunrise graphic stamped with the state jurisdiction `LEONIDA // VICE-CITY`.

---

## 3. Photo Mode Engine: Powered by React Image Editor

The core editing suite is powered by [`@unlayer/react-image-editor`](https://github.com/unlayer/react-image-editor), Unlayer's headless-capable image editing solution for React applications.

```
                          ┌────────────────────────┐
                          │   Input User Photo     │
                          │ (Sample or Drag & Drop)│
                          └───────────┬────────────┘
                                      │
                                      ▼
                      ┌───────────────────────────────┐
                      │  Unlayer React Image Editor   │
                      │ ───────────────────────────── │
                      │  • Precision Aspect Cropping  │
                      │  • Contrast & Tint Filters    │
                      │  • Custom Stickers & Stamps   │
                      │  • Text & Headline Overlays   │
                      │  • Freehand Signature Drawing │
                      └───────────────┬───────────────┘
                                      │
                       editorRef.current.getImage()
                                      │
                                      ▼
                      ┌───────────────────────────────┐
                      │    GTA Card Compositor        │
                      │ ───────────────────────────── │
                      │  • Duotone Scrim & Wash       │
                      │  • 5-Star Wanted Rating       │
                      │  • Dynamic Loading Bar        │
                      │  • License Plate Stamping     │
                      └───────────────┬───────────────┘
                                      │
                                      ▼
                      ┌───────────────────────────────┐
                      │       Lossless Export         │
                      │  • High-DPI 2X PNG Download   │
                      │  • One-Click Clipboard Copy   │
                      │  • Native Web Share API       │
                      └───────────────────────────────┘
```

### Why Unlayer React Image Editor?
1. **Lightweight & High Performance**: Loads asynchronously in the browser with minimal overhead, maintaining 60 FPS canvas interactions.
2. **Modular Tool Surface**: Easily enable or disable granular tools (`crop`, `filter`, `text`, `stickers`, `frame`, `draw`, `resize`, `shapes`) using simple options flags.
3. **Native Dark Theme**: Seamlessly blends into the dark gulf-dusk aesthetic of the application HUD via `options={{ theme: 'dark' }}`.
4. **Clean API Contract**: Exposes direct references (`editorRef.current.editor.getImage()`) to retrieve base64 data URLs without needing intermediate cloud uploads.

### Tool Selection & Customization
To keep the UI focused on portrait art creation and avoid cluttered utility panels, the studio configures the editor to expose only portrait-relevant tools:

```ts
const editorOptions = {
  theme: 'dark',
  features: {
    imageEditor: {
      tools: {
        crop: true,      // 4:5 vertical framing
        filter: true,    // Contrast, saturation, retro grain
        text: true,      // Custom graffiti / tags
        stickers: true,  // Overlays and badges
        frame: true,     // Border and vignette frames
        draw: true,      // Freehand pen accents
        resize: false,   // Disabled to maintain aspect ratio
        shapes: false,   // Disabled to prevent non-diegetic clutter
      },
    },
  },
};
```

### Dark HUD Theme Integration
The editor is styled using the `dark` theme, matching the deep navy background (`#0c1620`) and hot magenta/gold accents of the studio. `onLoad`, `onLoadError`, and `onError` handlers are connected to a diegetic telemetry status HUD that provides user feedback in real time.

### Canvas Serialization & Continuous Re-Editing Loop
When a user finishes editing in Photo Mode, clicking **Generate Card** calls `getImage()`. This flattens the canvas into a data URL and feeds it directly into the `LoadingCard` compositor.

If the user wants to make adjustments, clicking **Re-edit photo** swaps the flattened image back into the editor's base state, allowing continuous non-destructive refinement without losing previous edits.

### Integration Code Walkthrough

```tsx
import { useRef, useState } from 'react';
import ImageEditor, { ImageEditorRef } from '@unlayer/react-image-editor';

export default function Studio({ image, onGenerate }: StudioProps) {
  const editorRef = useRef<ImageEditorRef>(null);
  const [ready, setReady] = useState(false);

  const handleGenerate = () => {
    // 1. Grab the current canvas state directly from the editor instance
    const dataUrl = editorRef.current?.editor?.getImage();
    if (dataUrl) {
      onGenerate(dataUrl);
    }
  };

  return (
    <div className="studio-canvas hud">
      <ImageEditor
        ref={editorRef}
        image={image}
        minHeight={580}
        options={{
          theme: 'dark',
          features: {
            imageEditor: {
              tools: {
                crop: true,
                filter: true,
                text: true,
                stickers: true,
                frame: true,
                draw: true,
                resize: false,
                shapes: false,
              },
            },
          },
        }}
        onLoad={() => setReady(true)}
        onSave={(result) => onGenerate(result.dataUrl)}
        onLoadError={() => console.error('Image load failed')}
        onError={(err) => console.error(err)}
      />
    </div>
  );
}
```

---

## 4. The 3-Stage User Journey

```
┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐
│     STAGE 1     │  ──▶  │     STAGE 2     │  ──▶  │     STAGE 3     │
│   Title Screen  │       │   Photo Mode    │       │  Loading Screen │
│  & Archetypes   │       │ (React Editor)  │       │   & 2X Export   │
└─────────────────┘       └─────────────────┘       └─────────────────┘
```

1. **Stage 1: Title Screen & Live Archetypes (`Hero.tsx`)**
   - High-impact neon title with live Leonida telemetry.
   - Interactive character archetype picker (`Lucia Caminos`, `Jason Duval`, `Tommy V.`).
   - Live color palette swatches that immediately re-theme the hero preview card.
   - Radio station tuner with animated frequency visualizers.
2. **Stage 2: Photo Mode Studio (`Studio.tsx`)**
   - The resident photo is loaded into the Unlayer React Image Editor.
   - Users crop to portrait proportions, apply lighting filters, and add custom tags.
   - Accompanying dossier panel allows fine-tuning character name, occupation, district, wanted stars, and color grade.
3. **Stage 3: Loading Screen Card (`LoadingCard.tsx`)**
   - The edited canvas is composited into an authentic GTA intro screen.
   - The loading bar eases smoothly to 100%.
   - Instant 2X high-DPI PNG download, one-click clipboard copying, or native social sharing with prefilled `#BuiltWithImageEditor` tag.

---

## 5. Technical Architecture

### Component Tree

```
src/
├── App.tsx                     # Top-level state coordinator (Stage: intro | studio | card)
├── data.ts                     # Color palettes, character presets, radio stations, districts
├── styles.css                  # Pure Vanilla CSS design system (tokens, HUD, cards, glassmorphism)
└── components/
    ├── Hero.tsx                # Classy landing page, interactive preview, radio bar, feature grid
    ├── Studio.tsx              # Unlayer React Image Editor wrapper + character dossier panel
    ├── LoadingCard.tsx         # Card compositor, loading bar physics, 2X PNG export engine
    ├── Wanted.tsx              # SVG 5-star wanted rating component
    ├── LicensePlate.tsx        # Diegetic embossed Florida license plate component
    └── Palm.tsx                # SVG silhouette palm trees
```

### Client-Side Privacy Architecture
- **Zero Cloud Uploads**: User photos are processed entirely inside the browser using standard `FileReader` and HTML5 `<canvas>` APIs.
- **No Remote Telemetry**: Photos never leave the client device, making the tool safe for personal photos, selfies, and private portraits.
- **Local Samples**: Bundled sample images ensure that canvas export is never tainted by CORS issues.

### High-DPI Lossless Export Pipeline
Exporting is handled via [`html-to-image`](https://github.com/bubkoo/html-to-image) configured with `pixelRatio: 2` and `cacheBust: true`. This produces crisp, print-quality PNG cards ready for social media or desktop wallpapers:

```ts
const render = async (): Promise<Blob | null> => {
  if (!cardRef.current) return null;
  return toBlob(cardRef.current, {
    pixelRatio: 2,
    cacheBust: true,
    backgroundColor: '#0c1620',
  });
};
```

---

## 6. Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or later recommended)
- `npm` or `pnpm`

### Installation & Development

```bash
# 1. Navigate to the project directory
cd vice-city-loading-studio

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Open `http://localhost:5173` in your browser.

### Linting & Formatting

```bash
# Run oxlint for instant static code analysis
npm run lint
```

---

## 7. Production Build & Deployment

### Building for Production

```bash
# Typecheck and compile production bundle to dist/
npm run build

# Preview the production build locally
npm run preview
```

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

The repository includes a static SPA structure that works seamlessly with **Vercel**, **Netlify**, **Cloudflare Pages**, or **GitHub Pages**.

---

## 8. Credits & Legal Disclaimer

- **React Image Editor**: Created and maintained by [Unlayer](https://github.com/unlayer/react-image-editor).
- **Challenge**: Built for the **#BuiltWithImageEditor** creative showcase.
- **Artistic Tribute**: This project is a non-commercial, fan-made artistic tribute inspired by *Grand Theft Auto: Vice City* and *Grand Theft Auto VI*. It is not affiliated with, endorsed by, sponsored by, or connected to **Rockstar Games**, **Take-Two Interactive**, or any of their subsidiaries. All trademarks, character names, and logos belong to their respective owners.
