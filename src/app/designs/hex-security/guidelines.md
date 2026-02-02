# Hex Security Design System

A dark, security-focused design system inspired by Hex.co. The style balances high-contrast readability with precise technical detail. Acid-lime accents guide attention, while subtle grid textures and glow edges create a sense of depth and monitoring.

## Philosophy

Vigilant, minimal, and precise. The interface should feel like a secure control room: calm, focused, and high-signal.

## Color Palette

### Backgrounds
- **Void** `#0b0c0f` - Main background
- **Panel** `#12151a` - Primary surfaces
- **Panel Light** `#171b22` - Elevated surfaces
- **Panel Edge** `#202530` - Borders and separators

### Text
- **Primary** `#f5f7fb` - Headlines
- **Secondary** `#c4c9d4` - Body text
- **Muted** `#8b93a5` - Labels, metadata

### Accent Colors
- **Lime** `#b7ff3c` - Primary actions, highlights
- **Lime Deep** `#8be21a` - Hover states
- **Cyan** `#4fd7ff` - Info accents
- **Amber** `#ffb23f` - Warnings
- **Red** `#ff4d5e` - Errors

### Status Tints
- **Lime Tint** `rgba(183, 255, 60, 0.12)`
- **Cyan Tint** `rgba(79, 215, 255, 0.12)`
- **Amber Tint** `rgba(255, 178, 63, 0.12)`
- **Red Tint** `rgba(255, 77, 94, 0.12)`

## Typography

### Font Families
```
Heading: 'Space Grotesk', 'IBM Plex Sans', sans-serif
Body: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
Monospace: 'IBM Plex Mono', 'SF Mono', monospace
```

### Scale
- **Hero Title**: 56px / Bold (700) / -0.02em tracking
- **Section Title**: 32px / Semi-bold (600) / -0.01em
- **Card Title**: 20px / Semi-bold (600)
- **Body Large**: 17px / Regular (400) / 1.7 line-height
- **Body**: 15px / Regular (400) / 1.6 line-height
- **Small**: 13px / Medium (500)
- **Label**: 11px / Medium (600) / uppercase / 0.12em tracking
- **Code**: 13px / IBM Plex Mono / Regular (400)

## Spacing
- **XS**: 6px
- **SM**: 10px
- **MD**: 16px
- **LG**: 24px
- **XL**: 36px
- **2XL**: 56px

## Radii
- **Card**: 18px
- **Input/Button**: 12px
- **Badge**: 999px

## Shadows
- **Surface**: 0 12px 28px rgba(0, 0, 0, 0.35)
- **Glow**: 0 0 24px rgba(183, 255, 60, 0.18)

## Components

### Buttons
**Primary**
- Background: Lime
- Text: #0b0c0f
- Border-radius: 12px
- Padding: 12px 22px
- Hover: Lime Deep + subtle glow

**Secondary**
- Background: Panel Light
- Text: Primary
- Border: 1px solid Panel Edge
- Hover: Border lime

**Ghost**
- Background: Transparent
- Text: Secondary
- Hover: Text Primary

### Cards
- Background: Panel
- Border: 1px solid Panel Edge
- Border-radius: 18px
- Padding: 22px
- Hover: Border Lime + Glow shadow

### Inputs
- Background: Panel Light
- Border: 1px solid Panel Edge
- Border-radius: 12px
- Padding: 12px 14px
- Focus: Border Lime + subtle glow

### Badges
- Border-radius: 999px
- Padding: 4px 10px
- Font-size: 11px
- Font-weight: 600

## Layout Principles
1. **Dark canvas, luminous accents**
2. **Precise grids and aligned baselines**
3. **Minimal noise, high signal**
4. **Soft glows over hard drop shadows**

## Animation
- Duration: 0.18s for interactions, 0.35s for hero reveals
- Easing: cubic-bezier(0.2, 0.8, 0.2, 1)
- Hover effects: No scale, just glow + border changes
