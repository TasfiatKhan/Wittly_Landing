# Livadra — Landing Page

Marketing landing page for [Livadra](https://github.com/TasfiatKhan/Livadra), an AI-powered social intelligence assistant.

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 App Router |
| Styling | Tailwind CSS v3 + CSS custom properties |
| Animations | Framer Motion 11 |
| Language | TypeScript |
| Fonts | Lora + DM Sans via `next/font/google` |

## Running locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:3000`.

## Sections

1. Navbar — fixed, scroll-aware, dark/light mode toggle
2. Hero — animated phone mockup with chat bubbles and floating badges
3. Ticker — scrolling social proof strip
4. Problem — "Some conversations are hard"
5. Modes — Texting / Live / Moments cards
6. Adaptability — "Conversations are human everywhere"
7. Scenarios — interactive 3-tab demo panel
8. Differentiators — 4-column features grid
9. Testimonials
10. Waitlist CTA — email capture form
11. Footer

## Notes

- Dark/light mode toggle in the Navbar — preference saved to `localStorage`
- Waitlist form in `src/components/sections/WaitlistSection.tsx` has a `// TODO: wire to your email service` comment — connect to Mailchimp / ConvertKit / Loops when ready
- All CSS custom properties defined in `src/app/globals.css`

## Related

Main app: [github.com/TasfiatKhan/Livadra](https://github.com/TasfiatKhan/Livadra)
