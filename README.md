# Vice City · Loading Screen Studio

A creative showcase featuring a Grand Theft Auto VI–inspired loading screen studio, built alongside the official React Image Editor source library by Unlayer.

![Vice City Loading Screen Studio](./vice-city-loading-studio/docs/hero.png)

## What I Built

I built **Vice City Loading Screen Studio** — a cinematic, in-browser GTA loading screen generator and "Photo Mode" suite. It allows users to upload any image, manipulate it using a robust photo editor, and drop it seamlessly into a styled, animated Grand Theft Auto loading screen layout complete with diegetic UI elements like a Wanted Level, authentic License Plates, and satirical Leonida resident hustles (e.g., Repo Man, Crypto Guy).

**Key Features:**
- **Photo Mode Engine**: Client-side cropping, filtering, custom text overlays, sticker placement, frames, and freehand drawing.
- **Cinematic Visuals**: Duotone LUT color washes that capture the Miami golden hour and neon dusk lighting, paired with sleek glassmorphic UI elements and micro-animations.
- **100% Client-Side Privacy**: Zero server uploads; images are processed entirely in-memory and exported in lossless high resolution.

## Why I Built It

This project was built for the **#BuiltWithImageEditor challenge** to showcase the immense flexibility of modern web tools. I wanted to demonstrate how a seemingly standard utility component — an image editor — could be fully themed and integrated into a highly immersive, narrative-driven experience. The iconic aesthetic of GTA loading screens (the neon, the saturation, the pulp-cover vibe) served as the perfect playground to push the limits of client-side canvas manipulation and UI design.

## How React Image Editor Was Brought In

Integrating `@unlayer/react-image-editor` was the core enabler of the "Photo Mode" experience. Here’s how I brought it in:

1. **Seamless Integration**: Instead of building a complex canvas-based editing suite from scratch, I dropped the React Image Editor into a dedicated `Studio.tsx` component. This instantly gave me out-of-the-box features like cropping, color adjustments, drawing, and sticker placement.
2. **Headless & Styled Approach**: I wrapped the editor in a custom diegetic "HUD" that fits the overarching theme. The editor's controls fade seamlessly into the "camera UI" aesthetic, while the actual photo is manipulated directly within the editor's canvas.
3. **Data Export & Composition**: Once the user finishes editing, the React Image Editor exports a `dataUrl`. I then take this baked image and pass it into a custom `LoadingCard.tsx` React component. There, the image is layered behind custom CSS gradients (for that cinematic color grade), SVGs, and dynamic typography to create the final "loading screen" artifact.

By leveraging the React Image Editor, I could focus entirely on the *experience* and the *art direction* rather than reinventing image processing math.

---

## Workspace Projects

| Project | Description | Path |
| :--- | :--- | :--- |
| 🌴 **[Vice City Loading Screen Studio](./vice-city-loading-studio)** | The main application. A cinematic, in-browser GTA loading screen generator built with `@unlayer/react-image-editor`. | [`./vice-city-loading-studio`](./vice-city-loading-studio) |
| 🎨 **[React Image Editor](./react-image-editor)** | The official React wrapper and headless image editing library by Unlayer. | [`./react-image-editor`](./react-image-editor) |

## Quick Start

```bash
# Navigate to the studio application
cd vice-city-loading-studio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [`http://localhost:5173`](http://localhost:5173) in your browser to experience the studio!

---

## License & Attribution

- Built with [React Image Editor](https://github.com/unlayer/react-image-editor) by **Unlayer** for the **#BuiltWithImageEditor** initiative.
- Inspired by *Grand Theft Auto: Vice City* and *Grand Theft Auto VI*. Non-commercial fan tribute not affiliated with Rockstar Games or Take-Two Interactive.
