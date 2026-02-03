# Hex Security Design System

A precise, technical system inspired by the Hex Security site. Light gray field, razor-sharp typography, mono labels, and molten-orange highlights.

## Philosophy

Security should feel methodical and calm. Surfaces are clean and light, the grid is always present, and accents are used sparingly to focus attention.

## Color Palette

### Backgrounds
- **Primary** `#f7f7f7` - Global canvas
- **Surface** `#ffffff` - Cards and panels
- **Surface Subtle** `rgba(237, 237, 237, 0.30)` - Soft blocks and dividers

### Borders & Lines
- **Default Border** `#c7c7c7` - Structural edges
- **Fine Grid** `rgba(0, 0, 0, 0.10)` - Micro grid / hairline rules
- **Muted Stroke** `rgba(0, 0, 0, 0.18)` - Hover or emphasis lines

### Text
- **Primary** `#000000` - Headlines and key text
- **Secondary** `#5e5e5e` - Supporting copy

### Accent Colors
- **Signal Orange** `#fa651e` - Primary CTA and emphasis
- **Warm Orange** `#ff8b17` - Secondary highlights
- **Alert Red** `#ff312f` - Error states

## Typography

### Font Family
```
'Kalice-Trial Regular', 'Times New Roman', serif
'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif
'DM Mono', 'SFMono-Regular', Menlo, monospace
```

### Scale
- **Hero Title**: 64px / Regular (400) / -0.02em tracking
- **Section Title**: 36px / Medium (500)
- **Card Title**: 18px / Medium (500)
- **Body**: 16px / Regular (400) / 1.6 line-height
- **Small**: 13px / Medium (500)
- **Label (Mono)**: 11px / Medium (500) / uppercase / 0.16em tracking

## Components

### Buttons

**Primary**
- Background: `#fa651e`
- Text: `#ffffff`
- Border-radius: 8px
- Padding: 12px 18px
- Hover: Background `#ff8b17`

**Secondary**
- Background: Transparent
- Text: `#000000`
- Border: 1px solid `#c7c7c7`
- Hover: Border `rgba(0, 0, 0, 0.18)`

### Cards
- Background: `#ffffff`
- Border: 1px solid `#c7c7c7`
- Border-radius: 12px
- Hover: Border `rgba(0, 0, 0, 0.18)`

### Inputs
- Background: `#ffffff`
- Border: 1px solid `#c7c7c7`
- Border-radius: 8px
- Focus: Border `#000000`
- Error: Border `#ff312f`

### Badges
- Background: `rgba(250, 101, 30, 0.15)`
- Text: `#fa651e`
- Radius: 999px
- Padding: 4px 10px

## Layout Principles

1. **Grid Discipline** - Always hint at a technical grid in the background.
2. **Mono Labels** - Use mono for metadata and UI labels.
3. **Sharp Hierarchy** - Serif headline + sans body to separate layers.
4. **Selective Accent** - Only CTAs and statuses use saturated color.

## Animation

- Duration: 0.35s for section reveals, 0.18s for hover
- Easing: ease-out
- Motion: Small translate + fade on load, no scaling
