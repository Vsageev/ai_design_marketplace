# One Orange — Design Guidelines

## Philosophy

Constructivist poster design meets modern web. Bold geometric shapes, organic blue egg forms, and warm orange accents on a cream canvas. Inspired by Swiss poster traditions with a playful, contemporary twist.

## Color Palette

### Base
- **Cream Canvas** `#F5F0E8` — Primary background
- **Warm White** `#FAF7F2` — Card backgrounds, elevated surfaces
- **Deep Black** `#1A1A1A` — Primary text, headings

### Accent
- **Cobalt Blue** `#3348FF` — Primary accent, egg shapes, links
- **Warm Orange** `#E85A2C` — Secondary accent, glass panel base
- **Orange Highlight** `#FF7A45` — Glass panel gradient light end
- **Orange Deep** `#C44518` — Glass panel gradient dark end
- **Signal Red** `#E53935` — Alerts, destructive actions, highlighted tags
- **Forest Green** `#2E7D32` — Success states, active indicators

### Glass Panel Stain Colors
- **Hot Pink** `rgba(255,50,80)` — Top-left stain at 70% opacity
- **Golden Yellow** `rgba(255,220,80)` — Bottom-right stain at 65% opacity
- **Rose** `rgba(255,120,180)` — Top-center stain at 50% opacity
- **Deep Crimson** `rgba(180,40,10)` — Bottom-left stain at 60% opacity
- **Amber** `rgba(255,180,60)` — Center stain at 60% opacity

### Neutral
- **Muted Stone** `#8A8680` — Secondary text, labels
- **Border Sand** `#E0DCD5` — Borders, dividers
- **Light Sand** `#D5D0C8` — Subtle borders, hover states

## Typography

- **Font Family**: `'Inter', system-ui, -apple-system, sans-serif`
- **Headings**: Weight 800 (ExtraBold), tight letter-spacing (-0.03em), tight line-height (0.95)
- **Body**: Weight 400, line-height 1.55
- **Labels/Tags**: Weight 500, 12-13px, uppercase tracking

### Scale
- Display: 72px / 800
- H1: 56px / 800
- H2: 40px / 800
- H3: 28px / 700
- H4: 22px / 700
- H5: 18px / 600
- H6: 15px / 600
- Body: 16px / 400
- Small: 14px / 400
- Caption: 12px / 500

## Spacing

- Section gap: 100px
- Component gap: 40px
- Inner padding: 32px
- Card padding: 28px
- Tag padding: 6px 14px

## Border Radius

- Cards: 16px
- Buttons: 999px (capsule/pill)
- Tags: 999px
- Inputs: 12px
- Egg shapes: organic (50% / 60% 60% 40% 40%)

## Motifs

1. **Blue Egg** — Organic blob shape in cobalt blue, used as primary decorative element
2. **Louvered Glass Panel** — Rounded orange rectangle with columnar glass material (see Glass Panel spec below)
3. **Capsule Tags** — Pill-shaped tags with thin borders, some filled with accent colors
4. **Corner Label** — Small outlined label tag positioned at top-right of cards

## Louvered Glass Panel — Material Spec

Adapted from the `custom-glass` component. A semi-transparent columnar glass effect composed of individual vertical slats with asymmetric convex gradients and backdrop blur. Colorful radial gradient stains are baked into the panel background and refracted through the ribbed slats. Cursor-driven per-slat caustic highlights simulate real ribbed glass light behavior.

### Container
- `border-radius: 20px; overflow: hidden; isolation: isolate`
- `-webkit-mask-image: -webkit-radial-gradient(white, black)` — forces proper clipping of `backdrop-filter` to rounded corners (browser workaround).

### Structure

1. **Background layer** — Multi-stop stacked radial gradients over a base orange:
   ```
   radial-gradient(circle at 20% 25%, rgba(255,50,80,0.7) 0%, transparent 45%),
   radial-gradient(circle at 75% 70%, rgba(255,220,80,0.65) 0%, transparent 45%),
   radial-gradient(circle at 50% 10%, rgba(255,120,180,0.5) 0%, transparent 40%),
   radial-gradient(circle at 30% 80%, rgba(180,40,10,0.6) 0%, transparent 45%),
   radial-gradient(circle at 60% 40%, rgba(255,180,60,0.6) 0%, transparent 50%),
   linear-gradient(160deg, #FF7A45 0%, #E85A2C 40%, #C44518 100%)
   ```
   All stains are contained inside the panel — no external blobs.

2. **Slat layer** — Flex row of 14–20 individual `<div>` elements, each with:
   - `background: linear-gradient(90deg, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.12) 80%, rgba(255,255,255,0.15) 100%)`
   - `background-blend-mode: overlay`
   - `backdrop-filter: blur(18px) saturate(160%)`
   - Semi-transparent: low blur (18px) lets shapes and colors behind the panel show through.
   - The asymmetric convex gradient (peak at 80%) simulates light wrapping around cylindrical glass columns.

3. **Per-slat caustic highlight** (`::after` pseudo-element) — Cursor-driven, not auto-animated:
   - Vertical light gradient per slat: brighter at top, softer toward bottom.
   - Controlled by `--slat-hl` CSS variable (0–1) set via JS `onMouseMove`.
   - Each slat's brightness is based on distance to cursor: `intensity = max(0, 1 - dist * 5)`.
   - Peak opacity: `0.55` at slat center closest to cursor.
   - Fades to 0 on `mouseLeave`.

4. **Border layer** — `border: 1px solid rgba(255,255,255,0.25)` with `box-shadow: inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(0,0,0,0.05)` for glass edge catch.

### Sizing Guidelines
- Hero panel: 240×180px, 20 slats
- Card panel: 160×120px, 14 slats
- Preview panel: 100×75px, 10 slats (static, auto-animated shimmer)

## Poster Cards

3-column grid on desktop (single column on mobile) with 4 card variations. The 4th card spans all columns as a full-width banner.

### Grid
- `grid-template-columns: repeat(3, 1fr)`, gap 20px
- Card 4: `grid-column: 1 / -1` (full-width)
- Mobile (≤768px): single column, card 4 stacks vertically

### Card Compositions

1. **Text-led vertical** — Heading and body at top. Glass panel (150×110, 14 slats) anchored bottom-left with egg (110×136) overlapping from the right. Uses `flex: 1` with absolute positioning for the visual layer.
2. **Visual-first** — Large centered egg (130×162) in a `flex: 1` centered area. Heading and body anchored below. Tags at bottom.
3. **Duo composition** — Egg (100×125) with offset teal shadow (`#5BB8A0`, 50% opacity) beside the heading (30px). Egg+heading pair vertically centered via `flex: 1` + `align-items: center`. Body and tags at bottom.
4. **Full-width banner** — Horizontal `flex-direction: row`. Egg (72×90) left, heading (28px, single line) + body center, tags right-aligned. No min-height.

### Shared Card Styles
- Background: Warm White, border-radius 16px, padding 24px
- Corner label: absolute, top-right
- Tags: `margin-top: auto`, `padding-top: 20px` — always anchored to bottom
- Hover: subtle shadow elevation

## Action Cards

3-column grid below poster cards showing practical card patterns with buttons and interactive elements.

### Grid
- `grid-template-columns: repeat(3, 1fr)`, gap 20px
- Mobile (≤768px): single column

### Card Compositions

1. **CTA card** — Eyebrow label, title, description, footer with primary button + text link.
2. **Pricing card** — Eyebrow label, large price (36px/800) with period suffix, feature list with `→` prefix markers in blue, full-width orange action button.
3. **Status card** — Green check icon (36px circle) beside title, description, divider, meta line (timestamp + views), footer with two secondary buttons.

### Shared Action Card Styles
- Background: Warm White, border-radius 16px, padding 28px
- Eyebrow: 11px, uppercase, 600 weight, muted stone
- Title: 22px, 700 weight, tight tracking
- Description: 14px, muted stone
- Footer: `margin-top: auto` — anchored to bottom
- Divider: 1px solid border sand, 20px vertical margin
- Hover: subtle shadow elevation

## Interaction

- **Tag Sweep**: Capsule tags fill with accent color on hover (left-to-right sweep)
- **Egg Pulse**: Blue egg shapes gently scale on hover (1.0 → 1.05, 400ms ease)
- **Card Lift**: Cards subtle shadow on hover
- **Glass Caustics**: Per-slat ribbed light highlights follow cursor position across glass panels. Intensity falloff `1 - dist * 5`. Vertical gradient per slat (bright top, soft bottom). Fades out on mouse leave.
- Preview glass uses auto-animated shimmer sweep (10s ease-in-out infinite) since it is non-interactive.
- Transitions: 300ms ease default
