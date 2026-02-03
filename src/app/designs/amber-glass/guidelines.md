# Liquid Amber Design System

## Philosophy

A digital translation of refractive light through colored glass. The aesthetic combines the warmth of a sunset dinner with the high-fidelity physics of Apple's VisionOS. Nothing is solid — UI elements are windows that distort and color the background. The environment is clean and white (linen), but the interactive elements are rich, saturated, and warm. We simulate physical touch through "ribbed" patterns and "wet" reflections.

## Color Palette

### Light Source (Gradients)

Use as blobs or mesh gradients behind glass — never as solid backgrounds.

- **Nectar Amber** `#E68A5C` — The warm top note
- **Sunset Peach** `#FFC699` — The middle transition
- **Berry Rose** `#E89BB6` — The cool base note

### Environment

- **Linen White** `#F9F7F2` — Background color (warm, organic, not pure white)
- **Espresso Brown** `#4A3B32` — Typography and iconography (never pure black)

### Functional Colors

- **Success** `#7CB886` — Soft sage green
- **Error** `#D4726A` — Warm terracotta red
- **Warning** `#E6A84D` — Deep amber
- **Info** `#7BA5C9` — Muted steel blue

## Typography

### Headings (The Glass)

High-contrast serif — editorial and sharp, like the rim of a glass.

- **Font Family**: 'Playfair Display', Georgia, serif
- **Weight**: 700 (Bold)
- **Tracking**: -0.02em (tight)

### Scale

- **Hero Title**: 56px / Bold / -0.03em tracking / line-height 1.1
- **H2**: 36px / Bold / -0.02em tracking
- **H3**: 24px / Bold / -0.01em tracking
- **H4**: 18px / SemiBold (600)

### Body (The Utility)

Clean, rounded sans-serif for Apple UI clarity.

- **Font Family**: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', sans-serif
- **Weight**: 400 (Regular)
- **Line Height**: 1.6

### Body Scale

- **Body Large**: 17px / Regular / line-height 1.7
- **Body Regular**: 15px / Regular / line-height 1.6
- **Body Small**: 13px / Regular / line-height 1.5
- **Caption**: 12px / Medium (500) / uppercase / 0.06em tracking

## Components

### The "Apple Liquid" Material

Every card, sidebar, or modal must follow these physics rules:

1. **Saturation Boost**: `backdrop-filter: blur(40px) saturate(180%);`
2. **Vertical Fluting**: Barely-visible repeating vertical gradient (ribbed texture)
3. **Specular Highlight**: White gradient fade at the top edge (studio light simulation)
4. **Inner Glow**: `box-shadow: inset 0 0 0 1px rgba(255,255,255,0.4);`

### Buttons

- **Primary**: Frosted glass with amber gradient, white text
- **Secondary**: Transparent glass with espresso border
- **Ghost**: No background, espresso text, hover reveals glass

### Cards

- **Border Radius**: 24–32px (Apple squircle curvature)
- **Background**: `rgba(255, 255, 255, 0.2)` with backdrop-filter
- **Border**: `1px solid rgba(255, 255, 255, 0.5)`
- **Shadow**: `0 20px 40px rgba(230, 138, 92, 0.15)`

### Forms

- **Inputs**: Frosted glass background, espresso text, warm border on focus
- **Labels**: Espresso brown, caption style
- **Focus ring**: Warm amber glow

## Layout Principles

### Spacing

- **Section gap**: 80px
- **Component gap**: 24px
- **Inner padding**: 32px
- **Card padding**: 24–32px

### Background

The background should feel alive — use mesh gradients with radial-gradient blobs behind frosted glass elements.

## Lighting & Depth (Shadows)

Shadows are not grey — they are colored light refractions.

- **Ambient Shadow**: `0 30px 60px -10px rgba(230, 138, 92, 0.3)`
- **Inner Glow**: `inset 0 2px 15px rgba(255, 255, 255, 0.4)`
- **Card Shadow**: `0 20px 40px rgba(230, 138, 92, 0.15)`

## Animation

- **Duration**: 0.3s for micro-interactions, 0.6s for reveals
- **Easing**: cubic-bezier(0.4, 0, 0.2, 1) — Apple-style smooth deceleration
- **Hover**: Cards lift slightly (translateY -4px), shadow intensifies
- **Focus**: Warm amber glow ring expands
