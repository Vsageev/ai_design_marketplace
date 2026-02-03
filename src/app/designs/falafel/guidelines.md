# Falafel — Street Food Brand Design System

## Philosophy

Bold, hand-drawn, unapologetically loud. Inspired by street food poster art — thick outlines, splashy illustrations, condensed type slammed onto dark backgrounds. The vibe is a late-night shawarma joint meets indie zine culture. Every element should feel like it was screen-printed by hand at 2 AM.

## Color Palette

### Base
- **Background**: `#111111` (near-black)
- **Surface**: `#1a1a1a` (card bg)
- **Surface Elevated**: `#222222` (elevated cards, modals)

### Text
- **Primary Text**: `#f5f0e8` (warm off-white / parchment)
- **Secondary Text**: `#a39e93` (muted warm gray)
- **Caption Text**: `#6b6560` (dim warm gray)

### Accents
- **Orange**: `#e8742a` (primary accent — carrot, shawarma warmth)
- **Red**: `#c0392b` (tomato, alerts, danger)
- **Green**: `#4a7c3f` (herbs, success states)
- **Cream**: `#f2e6c9` (highlight, warm glow)
- **Blue**: `#5b8fb9` (info, cool contrast — like the Olivier poster)

### Semantic
- **Success**: `#4a7c3f`
- **Error**: `#c0392b`
- **Warning**: `#e8742a`
- **Info**: `#5b8fb9`

## Typography

### Font Stack
- **Display / Headlines**: `'Impact', 'Haettenschweiler', 'Arial Narrow Bold', sans-serif` — ultra-condensed, all-caps, tracked tight
- **Body**: `'Georgia', 'Times New Roman', serif` — warm and readable on dark
- **Mono / Labels**: `'Courier New', 'Courier', monospace`

### Scale
- **Hero**: `72px`, weight `900`, line-height `0.9`, letter-spacing `-0.02em`, uppercase
- **H1**: `48px`, weight `900`, line-height `0.95`, uppercase
- **H2**: `32px`, weight `700`, line-height `1.0`, uppercase
- **H3**: `22px`, weight `700`, line-height `1.15`
- **Body**: `16px`, weight `400`, line-height `1.6`
- **Small**: `13px`, weight `400`, line-height `1.5`
- **Caption**: `11px`, weight `600`, uppercase, letter-spacing `0.08em`

## Spacing

- Section gap: `96px`
- Component gap: `32px`
- Card padding: `24px`
- Inner spacing: `12px`
- Micro spacing: `6px`

## Borders & Shapes

- Card radius: `4px` (barely rounded — rough edges)
- Button radius: `2px`
- Border width: `3px` for decorative, `1px` for subtle
- Decorative borders use `#e8742a` or `#f5f0e8`
- Dashed borders: `3px dashed #e8742a`

## Shadows

- None. Flat. Everything is ink-on-paper.

## Signature Motifs

1. **Thick hand-drawn borders** — 3px solid borders on cards and sections, like comic panel outlines
2. **Splatter accents** — decorative dashes/dots scattered near headings (CSS pseudo-elements)
3. **Price tag / sticker badges** — rotated labels with colored backgrounds (like the "399 ₽" sticker in the reference)
4. **ALL-CAPS condensed headlines** — the defining typographic gesture

## Hover Effects

1. **Stamp press** — on hover, element scales down slightly (0.97) and border thickens, like pressing a rubber stamp
2. **Ink spread** — background color spreads from center outward on hover (radial gradient transition)

## Animations

- Transition timing: `0.15s ease-out` (snappy, not floaty)
- No elevation changes. Everything stays flat.
- Hover transforms: scale and border only
