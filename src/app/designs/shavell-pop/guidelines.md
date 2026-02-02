# Shavell Pop Design System

A bold, playful fast-food identity with high-contrast type, sticker badges, and juicy color pops. Inspired by street food posters, menu boards, and hand-drawn illustrations.

## Philosophy

Loud, joyful, and unmistakable from across the street. The layout is punchy, the type is massive, and the colors feel edible.

## Color Palette

### Base
- **Midnight** `#0B0B0B` - Primary background
- **Cream** `#F7D2A6` - Warm canvas background
- **Cloud** `#F5F5F2` - Light surface

### Accent
- **Cheddar** `#F5A623` - Primary accent
- **Tangerine** `#F2721E` - Secondary accent
- **Tomato** `#E93A2F` - Emphasis / warnings
- **Bubblegum** `#FF5AA5` - Promotional badge
- **Sky** `#9BD8F7` - Cool contrast
- **Herb** `#3BB273` - Success / fresh

### Text
- **Ink** `#101010` - Primary text on light
- **Paper** `#FFFFFF` - Text on dark
- **Muted** `#5C4A3A` - Subtext on warm backgrounds

## Typography

### Font Family
```
'Rubik Mono One', 'Bebas Neue', sans-serif
'Nunito Sans', 'Montserrat', sans-serif
```

### Scale
- **Hero Title**: 72px / 700 / uppercase / -0.01em
- **Section Title**: 40px / 700 / uppercase
- **Card Title**: 20px / 700
- **Body**: 16px / 500 / 1.6 line-height
- **Small**: 13px / 600 / uppercase / 0.06em tracking
- **Sticker**: 12px / 700 / uppercase / 0.08em tracking

## Spacing
- **XS** 6px
- **SM** 10px
- **MD** 16px
- **LG** 24px
- **XL** 36px
- **2XL** 56px

## Radius
- **Sharp** 4px
- **Soft** 14px
- **Pill** 999px

## Shadows
- **Offset** `6px 6px 0 #101010`
- **Soft** `0 12px 30px rgba(16, 16, 16, 0.12)`

## Components

### Buttons
**Primary**
- Background: Cheddar
- Text: Ink
- Border: 2px solid Ink
- Radius: Soft
- Hover: translate(-2px, -2px) + shadow Offset

**Secondary**
- Background: Cloud
- Text: Ink
- Border: 2px dashed Ink

**Ghost**
- Background: Transparent
- Text: Ink
- Underline: dotted

### Cards
- Background: Cloud
- Border: 2px solid Ink
- Radius: Soft
- Header band: Tangerine or Sky
- Hover: subtle lift with Offset shadow

### Inputs
- Background: Cloud
- Border: 2px solid Ink
- Radius: Sharp
- Focus: border Tomato + glow

### Badges
- Background: Bubblegum
- Text: Paper
- Radius: Pill
- Shadow: Offset

## Visual Patterns
- Dotted leader lines (menu feel)
- Sticker price tags with rotated text
- Hand-drawn blobs and confetti dashes as background accents

## Animation
- Duration: 120ms for micro interactions, 180ms for hover
- Easing: cubic-bezier(0.2, 0.8, 0.2, 1)
- No blur, no complex scaling; keep moves crisp
