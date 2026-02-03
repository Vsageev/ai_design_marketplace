# Grain Darkroom Design System

An analog photography-inspired design system built around film grain textures, darkroom aesthetics, and specimen-catalog layouts. The system channels the craft of photographic printing — dense blacks, warm paper tones, careful type hierarchy, and the tactile imperfection of chemical processes.

## Philosophy

**Imperfection as craft.** Digital interfaces feel sterile. This system layers film grain, stipple textures, and halftone patterns over dark surfaces to create warmth and depth. Like a darkroom print, every element feels deliberate but not machine-perfect. Typography pairs editorial serif italics with monospace specimen labels — the language of catalogs, field guides, and archival plates.

## Visual Signature Elements

### 1. Canvas-Based Grain Animations
- **Film grain**: Real-time per-pixel `Math.random()` luminance rendered via Canvas `putImageData` at configurable frame rates (10-14 fps). Used as a subtle hero background layer and as the first card specimen.
- **Bayer dither**: 8x8 ordered dithering matrix producing a static cross-hatch pattern. Rendered once on mount via Canvas, composited with `mix-blend-mode: screen`.
- **Organic stipple**: Poisson-disk-distributed dots with jittered radius and stable seeds (no flicker). Rendered once via Canvas.
- All grain canvases use `image-rendering: pixelated` for crisp pixel art scaling, `pointer-events: none`, and `ResizeObserver` for responsive sizing.
- Hero section uses animated film grain at low opacity (6%) as a background texture layer.

### 2. Specimen Labels
- Uppercase monospace tags (`NO. 001`, `CANVAS`, `BAYER 8X8`)
- Small border-boxed labels positioned in upper-left of panels
- Index numbers in the bottom-right as a recurring motif
- Evokes museum display cards and botanical specimen plates

### 3. Thin Rule Lines
- 1px borders in muted tones separate sections
- Dashed and solid rules create rhythm
- Section headers use top border + flex layout (title left, label right)
- Horizontal rules between major content areas

### 4. Italic Serif Accent
- Newsreader italic for display text — editorial, warm, slightly old-fashioned
- Used sparingly for hero headlines, card names, and pull quotes
- Contrast with rigid monospace labels creates typographic tension

## Color Palette

### Darkroom Theme (Default)
- **Background** `#0c0b0a` — Near-black, warm undertone
- **Foreground** `#d4d0c8` — Warm off-white text
- **Dimmed** `#5a564e` — Tertiary text and labels
- **Rule** `#2a2826` — Borders and dividers
- **Accent** `#e8e4da` — High-contrast text
- **Spot** `#b8503a` — Warm terracotta red for emphasis

### Semantic Colors
- **Success** `#6b8f71` — Muted sage green
- **Error** `#c45c4a` — Muted red (close to spot)
- **Warning** `#c8a050` — Warm amber
- **Info** `#6a8caf` — Desaturated steel blue

## Typography

### Font Stack
```
Display: 'Newsreader', 'Georgia', serif (italic, 400 weight)
Mono: 'Azeret Mono', 'SF Mono', monospace (400-700 weight)
```

### Scale
- **Hero**: 56px / Newsreader italic / -0.03em tracking / line-height 1
- **H2**: 36px / Newsreader italic / -0.02em tracking
- **H3**: 22px / Newsreader italic / normal tracking
- **Body**: 13px / Azeret Mono / 400 weight / 1.6 line-height
- **Label**: 9px / Azeret Mono / 700 weight / uppercase / 0.25em tracking
- **Index**: 9px / Azeret Mono / 600 weight / uppercase / 0.2em tracking

## Components

### Buttons
- **Primary**: Monospace, uppercase, small (9px), terracotta background, white text
- **Secondary**: 1px border in rule color, transparent background, dimmed text
- **Hover**: Border transitions to dimmed color, text brightens
- **Disabled**: 50% opacity, cursor not-allowed

### Cards (Specimen Panels)
- Dark background with subtle gradient
- 1px border in rule color
- Tag label in upper-left (bordered box with spot color text)
- Name in italic serif at bottom-left
- Index number at bottom-right
- **Live canvas grain** composited in preview area — each card renders a different grain algorithm (film, dither, stipple) via Canvas hooks
- **Hover: Scan-line sweep** — a horizontal gradient line (spot-to-accent-to-spot) sweeps top-to-bottom across the card preview area over 0.6s, while grain opacity intensifies from 35% to 70%. Evokes a CRT scan or darkroom exposure sweep.

### Alerts
- Left border accent (3px) in semantic color
- Dark panel background
- Monospace status label
- Message in body weight

### Form Elements
- 1px border in rule color
- Dark background matching root
- Monospace placeholder text in dimmed color
- Focus: border-color transitions to spot color
- Error: border-color is error color

## Layout Principles

1. **Maximum width**: 960px centered
2. **Section padding**: 24px horizontal, 48-64px vertical between sections
3. **Section headers**: Top border + flex (title left, label right) + 16px padding
4. **Grid**: 2-column for specimens, 3-column for cards, single column for forms
5. **Whitespace**: 48px minimum between major sections

## Animation

### Timing
- **Hover**: 100ms ease for chips/buttons, 150ms ease-out for cards
- **Film grain**: `requestAnimationFrame` loop gated at 10-14 fps via frame-rate limiter
- **Card scan-line**: 0.6s ease-out on hover, top-to-bottom sweep with fade-out
- **Card grain intensify**: 0.3s ease opacity transition (35% to 70%) on hover

### Hover Effect: Scan-Line Sweep
- On card hover, a 2px horizontal gradient line (`transparent → spot → accent → spot → transparent`) animates from `top: -2px` to `top: 100%` over 0.6s using CSS `@keyframes gd-scanline`
- Simultaneously, the grain canvas layer increases opacity from 0.35 to 0.7 via CSS transition
- Effect evokes CRT scanning, darkroom exposure, or film processing — reinforces the analog theme
- `animation-fill-mode: forwards` ensures the line disappears cleanly
- On mouse leave, grain fades back to baseline; scan-line resets

### Principles
- Canvas grain animation is the primary motion — everything else uses CSS transitions
- No scale transforms, no elevation changes
- Opacity and color transitions only for UI elements
- Respect `prefers-reduced-motion` — all animations disabled via `animation: none !important`

## Accessibility

- All grain overlays use `pointer-events: none`
- Text maintains 4.5:1 contrast against dark backgrounds
- Grain is decorative, never blocks interaction
- `prefers-reduced-motion` freezes grain animation
- Semantic HTML with proper heading hierarchy
