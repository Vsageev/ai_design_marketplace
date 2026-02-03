# Amethyst Flute Design System

A refined, luminous design language inspired by fluted glassware in purple-to-peach ombre. Vertical ridges, translucent layering, and warm refractive light define every surface.

## Philosophy

Light through colored glass. Every element should feel as though it's catching warm afternoon sun through a ribbed vessel — the violet base deepening at the foot, the peach warmth blooming at the rim. Structure comes from vertical rhythm; warmth comes from gradient depth.

## Color Palette

### Backgrounds
- **Linen** `#FDF6EC` — Main page background, warm off-white
- **Alabaster** `#FAF0E6` — Elevated card surfaces
- **Frost** `#F5EDE4` — Inset panels and form backgrounds
- **Vellum** `#EDE3D8` — Borders, dividers, subtle rules

### Primary Gradient (Amethyst → Peach)
- **Deep Amethyst** `#7B2D8E` — Darkest violet anchor
- **Amethyst** `#9B59B6` — Primary purple
- **Orchid** `#B07CC6` — Mid-tone violet
- **Blush** `#D5A6C0` — Transition rose
- **Apricot** `#F0B27A` — Warm peach highlight
- **Honey Rim** `#E59866` — Deepest peach accent

### Text
- **Plum Ink** `#3D1F47` — Headlines and primary text
- **Fig** `#6B4A5E` — Body text
- **Mauve** `#9E8490` — Secondary labels, captions
- **Dusty Rose** `#C4A5B0` — Placeholder text, disabled states

### Semantic
- **Success** `#6A9F7B` — Sage green
- **Warning** `#D4A34E` — Amber
- **Error** `#C25D5D` — Muted red
- **Info** `#7A9EB8` — Dusty blue

## Typography

### Font Families
- **Display**: `'Cormorant Garamond', 'Garamond', serif` — Elegant, high-contrast serif with distinctive letterforms
- **Body**: `'DM Sans', 'Helvetica Neue', sans-serif` — Clean geometric sans with warmth

### Scale
- **H1**: 56px / weight 600 / -0.02em / line-height 1.05
- **H2**: 40px / weight 600 / -0.01em / line-height 1.1
- **H3**: 28px / weight 500 / line-height 1.2
- **H4**: 20px / weight 500 / line-height 1.3
- **Body Large**: 18px / weight 400 / line-height 1.7
- **Body**: 15px / weight 400 / line-height 1.65
- **Small**: 13px / weight 500 / line-height 1.5
- **Caption**: 11px / weight 600 / uppercase / 0.14em tracking

## Signature Motifs

### 1. Vertical Fluting
Repeating thin vertical lines (2px wide, 8-10px apart) at low opacity overlaid on surfaces. Evokes the ribbed glass texture. Used on hero, cards, and content panels.

### 2. Ombre Wash
Gradient overlays that transition from violet to peach — used in card headers, button fills, and hero backgrounds. Always flows left-to-right or bottom-to-top.

### 3. Stem Line
A thin vertical accent line (1px) with gradient fill, used as a decorative separator or list bullet. References the slender stem of a wine glass.

### 4. Refraction Glow
Radial gradient spots of soft color that appear on hover — like light refracting through fluted glass, casting colored pools.

## Spacing

- **Section gap**: 96px
- **Component gap**: 32px
- **Inner gap**: 16px
- **Micro gap**: 8px

## Border Radius

- **XL**: 24px — Hero containers, large panels
- **LG**: 18px — Cards, modals
- **MD**: 12px — Inputs, buttons
- **SM**: 8px — Tags, badges

## Shadows

- **Soft**: `0 16px 48px rgba(123, 45, 142, 0.12)` — Cards at rest
- **Lifted**: `0 24px 64px rgba(123, 45, 142, 0.18)` — Cards on hover
- **Inner**: `inset 0 2px 8px rgba(123, 45, 142, 0.06)` — Inset panels

## Hover Effects

### Light Refraction Sweep
A diagonal highlight band (white at 50% opacity, skewed 20deg) that translates across the element on hover. Transition: 0.5s ease. Used on primary buttons and card headers.

### Flute Fade-In
Vertical line overlay that transitions from 0 to 0.3 opacity on hover. Transition: 0.3s ease. Used on cards and content rows.

## Animation

- **Micro**: 0.2s ease — focus rings, color shifts
- **Standard**: 0.3s ease — card lifts, flute reveals
- **Sweep**: 0.5s ease — light refraction sweeps
- **No scale transforms** — maintain the glass stillness; only translate and opacity
