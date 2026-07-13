# Livadra Landing — CLAUDE.md

Marketing landing page for Livadra. Keep this short — update it when something here goes stale, not as a running log (git history covers that).

## Skills
Scan `.claude/skills/` for relevant skills before writing code.

## Product context
Livadra is an AI social copilot — not a dating-reply generator — with three modes: **Texting** (one-off help with a message), **Live** (real-time voice-input help), **Moments** (persistent, ongoing conversations with memory). Voice: human, warm, emotionally intelligent, never AI-sounding, never prescriptive ("you could say…" not "say this"). Avoid gimmicky rizz-app/pickup-artist energy and cringe. This repo is the landing page only — the product itself (Django + React Native) lives in a separate repo.

## Status
Public launch on Google Play, Android-only (no iOS claims). No waitlist or email capture — every CTA links out to Google Play via `PLAY_STORE_URL` in `src/config/links.ts`. **That URL is a placeholder** — swap it for the real listing once approved.

## Stack
Next.js (App Router) + TypeScript, Tailwind CSS v3 + CSS custom properties, Framer Motion, Lora (serif) + DM Sans (body) via `next/font/google`.

## Design system
- Palette lives in `src/app/globals.css`: warm ivory/cream light theme (default) and warm plum/cocoa dark theme (toggle in Navbar) — no pure black/charcoal anywhere.
- Signature accent: `.text-radiant` (amber → coral → rose gradient text), used sparingly on emphasis words only.
- Hover states are shared CSS `:hover` utility classes in `globals.css` (`.nav-link`, `.footer-link`, `.gp-btn`, etc.) — don't reintroduce per-component `onMouseEnter`/`onMouseLeave` JS, it was consolidated on purpose.

## Structure
- `src/app/page.tsx` — section order for the whole page
- `src/components/sections/` — one file per section
- `src/components/ui/GooglePlayButton.tsx` — the only CTA component; always reads `PLAY_STORE_URL`, never hardcode the link elsewhere
- `src/context/ThemeContext.tsx` + `src/components/Providers.tsx` — dark/light toggle, persisted to `localStorage`
- `src/app/opengraph-image.tsx` — OG image generated at build time via `next/og` (no static asset to maintain)
- `src/app/robots.ts`, `src/app/sitemap.ts` — SEO

## Working style
- Confirm approach before large visual or structural changes.
- Don't commit/push unless asked.
