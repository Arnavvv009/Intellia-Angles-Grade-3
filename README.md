# Intellia Angles

Grade 2/3 Geometry module — **Angles**: Right Angle, and comparing angles as
bigger or smaller than a Right Angle. Built as a structural clone of the
Intellia 3D Shapes module (same architecture, layout, styling, gamification,
and audio pipeline) with all-new content for the Angles topic.

## Run locally

```bash
npm install
npm run dev
```

## Audio narration

This module uses the same three-tier ElevenLabs narration pipeline as the
reference project (static MP3 → live ElevenLabs API → Web Speech API fallback).

Your ElevenLabs API key is already set in `.env.local` (gitignored, never
committed). To pre-generate static MP3 files for instant, zero-latency
playback — matching how the original module ships its audio — run:

```bash
node scripts/generate_audio.js
```

This reads every narrated line from `src/utils/narration.js` and all 100
questions/hints/explanations from `src/data/questionBank.js`, generates one
MP3 per unique line, saves them to `public/assets/audio/`, and rewrites
`src/utils/audioMap.js` automatically. Until you run it, narration will fall
back to a live ElevenLabs API call at runtime (requires network access from
the browser running the app).

Run `node scripts/clean_audio.js` afterwards any time you edit narration
text, to remove orphaned MP3 files that are no longer referenced.

## What's new vs. the 3D Shapes reference module

- **Content**: All new — Right Angle, Smaller/Bigger than a Right Angle,
  clock-hand angles, real-world (incl. Singapore-flavoured) examples, 2D
  shape corners, and reverse-reasoning "mystery" questions. 100 questions
  across 10 worlds.
- **Interactive components**: `Shape3D`/`ShapeRotator` (CSS 3D drag-rotate)
  replaced with `AngleViewer`/`AngleRotator` (SVG drag-to-adjust angle arm)
  and a new `ClockFace` component for the Clock Hands Sandbox station.
- **Story illustrations**: Custom inline SVG art (`StoryIllustrations.jsx`)
  themed to angles, replacing the original's raster PNG illustrations —
  no external image assets required.
- **Everything else** (design tokens, layout, phase flow, XP/streak/badge
  system, quiz mechanics, audio engine) is unchanged from the reference
  module for strict UI/UX fidelity.
