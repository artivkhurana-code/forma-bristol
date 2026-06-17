# Forma Bristol — attendee guide

A single-page site for the Forma Bristol popup (27 Jun – 5 Jul 2026). Concept:
**"The Transmission"** — the guide is framed as a pirate-radio broadcast guiding
attendees to Bristol. Dark "transmission" sections (hero, food, map, radio, footer)
alternate with light "field-guide" sections (the practical content); section markers
are styled as a radio dial (`CH.01 · 88.9FM`).

## Run it locally

```bash
python3 serve.py          # then open http://localhost:8000
```

Or just open `index.html` directly in a browser. It's a plain static folder — no
build step — so it can be hosted on anything (Vercel, Netlify, S3, GitHub Pages…).

## Structure

| File | Purpose |
|------|---------|
| `index.html` | All content and markup |
| `styles.css` | Design system + responsive layout |
| `script.js`  | Boot sequence, countdown, scroll reveals, map, FAQ, player |
| `fonts/`     | Self-hosted fonts + `fonts.css` |

## Design system

- **Colours:** ink `#0B0B0C`, signal-paper `#F2EFE6`, signal yellow `#ECFF1A`,
  magenta `#FF004E`, orange `#FB6705`.
- **Type:** Fraunces (editorial serif), Milling Triplex (display sticker — brand),
  Switzer (body), VT323 (pixel/mono labels — brand).

## Features

- Live countdown to 27 Jun 2026 (`EVENT_START` in `script.js`).
- Scroll-reveal animations, marquee ticker, CRT/scanline texture.
- Interactive "signal map" with hover/tap tooltips.
- Forma Radio player (visualiser → soundcloud.com/formaradio).
- FAQ accordion, copy-to-clipboard discount code, mobile nav.
- Respects `prefers-reduced-motion`; keyboard-focusable; responsive to ~360px.

## Editing notes

- All links, codes and emails are wired exactly as supplied (e.g. `FORMA10`,
  `bookings@meetbristolbathres.co.uk`, the Visit Bristol portal). Swap real URLs
  for any placeholders as they're confirmed.
- The event date lives in one place: `EVENT_START` in `script.js`.
