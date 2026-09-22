# Claude Code prompt — Build "Vice City Yourself" (GTA VI × React Image Editor)

Paste everything below into Claude Code. Best if you also drop `VICE_CITY_YOURSELF_build_spec.md` into the project folder so it has full context.

---

## Your mission
Build and ship a polished, deployable web app called **Vice City Yourself** for Unlayer's "Build with React Image Editor" challenge (GTA VI-inspired). Treat this as a top-3 winning entry. Judging is on **creativity, visual execution, meaningful use of Unlayer's React Image Editor, overall experience, and presentation** — technical complexity is explicitly NOT rewarded. A focused, gorgeous micro-experience with the editor as its beating heart wins.

**Concept — "Put yourself in GTA VI":** a short arrive-in-Leonida experience where a user creates their own GTA VI character and customizes a personal loading-screen / cover-art poster **live inside the React Image Editor**, then exports a shareable card.

## Step 0 — Design first, using the frontend-design skill (before any app code)
Invoke your **frontend-design skill** (Skill tool) and follow it. Deliver a compact design plan first:
- A color token system (4–6 named hex values), a type system (1–2 deliberately chosen typefaces + roles), a layout concept with ASCII wireframes for each screen, and the principles that make THIS page distinctive.
- Review the plan against the brief and against generic AI-design tells, and revise anything that reads as a default. AVOID: cream+terracotta serif looks; near-black + a single acid accent; SaaS card kits (identical rounded cards + one shadow on everything); ALL-CAPS tracked eyebrows above headings; meta strings joined with middle dots; monospace data labels; and "→" appended to buttons.
- Caution: "neon vaporwave Miami" is itself becoming a template. Take a *specific, considered* stance on Vice City — commit to a real point of view (e.g. sun-bleached tropical noir, or humid-night arcade glow) rather than a generic synthwave gradient preset. Spend your boldness on ONE hero moment; keep everything else quiet and disciplined.
- Show me the design plan, then build.

## Step 1 — Confirm the React Image Editor API before wiring it (~30 min)
The editor is the core requirement, so build to the real API — don't guess:
- Repo: https://github.com/unlayer/react-image-editor
- Docs: https://docs.unlayer.com/builder/latest/images/image-editor
- Live demo (inspect its source for real usage): https://react-image-editor-example.vercel.app/

Confirm and report: (a) exact package name + component import + required props, (b) how to set the initial/source image, (c) how to read the exported result, (d) how to inject custom stickers/frames. Then build.

## The experience (4 screens + 1 optional)
1. **Welcome to Leonida (hero):** the single memorable moment. One orchestrated page-load reveal (not fade-up on every section). A clear primary action to enter. Optional muted synthwave loop with a toggle.
2. **Create your resident:** user uploads/picks a photo, enters a name, picks a funny "hustle" (Influencer, Repo Man, Crypto Guy, Gator Wrangler, Yacht Realtor, Meme Trader) and a district (Vice Beach, Little Cuba, Port Gellhorn…).
3. **The editor (core):** auto-compose a GTA-style poster with the photo already placed (hidden canvas: background scene + cropped photo + frame → one base image), then open React Image Editor on it. Expose only filters, frames, text, stickers, crop, drawing. Load a **custom Vice City sticker + frame pack** (this is the differentiator) and a signature "Vice grade" filter preset.
4. **Reveal & share:** show the exported card big; actions: Download, Copy, Share with `#BuiltWithImageEditor` prefilled.
5. **(optional) Leonida Wall:** a community gallery of created cards. If you add persistence, use Supabase; otherwise seed a few and append in session state. Never let this block the core.

## Tech
Vite + React (TypeScript optional) + Tailwind · `react-image-editor` for the core · deploy-ready for Vercel · clean build, no console errors, responsive to mobile.

## Hard requirements (don't skip)
- React Image Editor must be a **core, meaningful, interactive** part, and the user must edit at least one visual with it.
- Use ONLY original or properly-licensed assets (AI-generated is fine). **No Rockstar/Take-Two logos, fonts, screenshots, or leaked material.** Keep `ASSETS_CREDITS.md` logging each asset's source/license. Design your own app wordmark — do not imitate the GTA logo.
- Write a clear **README**: what it is, the idea, how the editor is used, screenshots/GIF, run instructions, tech, credits, and an "unofficial fan project, not affiliated with Rockstar" line.
- Quality floor: visible keyboard focus, `prefers-reduced-motion` respected, accessible color contrast, fast load.

## How to work
- Build real files, run the dev server, and self-critique by taking screenshots and comparing against the design plan; iterate until it looks intentional and cohesive, not templated.
- Keep interface copy plain, active, sentence case; buttons say what they do ("Download card", not "Submit"). Empty/error states give direction.
- Order: design plan → editor API spike → app skeleton (4 screens wired) → editor integration + custom assets → hero + art-direction polish → share/export → README + screenshots → final QA. Commit as you go.

## Definition of done
A deployed, mobile-responsive app where I can enter Leonida, create a resident, meaningfully customize my poster in the React Image Editor (custom Vice City stickers/frames + a filter), and export/download a shareable card — all under one cohesive, distinctive art direction, with a clean public repo + README, ready to submit.
