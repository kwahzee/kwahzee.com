# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run lint     # ESLint
npm run start    # Run production server
```

## Architecture

Personal portfolio and creative projects site built with Next.js (App Router) and deployed on Vercel.

### Key conventions

- `@/*` path alias maps to `./src/*`
- All interactive pages use `"use client"` — there is no server-side data fetching
- External links (Store, Video) use client-side `window.location.replace()` redirects rather than Next.js routing
- Styling is a mix of Tailwind v4 utility classes, per-page `styles.css` files, and inline style objects
- Fonts: Play and GothicPixels are loaded in `src/app/layout.tsx`; project pages load additional Google Fonts via `<link>` tags

### Structure

- `src/app/layout.tsx` — root layout; imports Navigation, Vercel Analytics, Speed Insights, and fonts
- `src/components/Navigation.tsx` — fixed header with logo and nav links
- `src/app/page.tsx` — home page with full-screen `visions.mp4` video background
- `src/app/projects/oblique-strategies/` — interactive Brian Eno strategy card generator with retro styling
- `src/app/projects/idm-name-generator/` — IDM artist name generator with syllable pools and chaos controls; has a secret Easter egg triggered at 999 names
- `src/app/audio/` — links to Bandcamp/SoundCloud music profiles
- `src/app/blog/` — placeholder page (under construction)

### Assets

Static assets live in `public/`:
- `public/videos/` — background videos (`visions.mp4`, `wind.mp4`)
- `public/images/` — logo and other images
- `public/fonts/` — local `GothicPixels.ttf`
