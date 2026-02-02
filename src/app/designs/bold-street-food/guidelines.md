# Bold Street Food Design System

A bold, high-contrast design system inspired by modern street food branding. Features dramatic black backgrounds, condensed typography, vibrant accent colors, and playful visual elements.

## Philosophy

Bold and unapologetic. Every element demands attention. High contrast creates impact while vibrant accents inject energy and personality. Typography is loud, layouts are direct, and the overall feel is urban and contemporary.

## Color Palette

### Backgrounds
- **Primary** `#000000` - Deep black canvas
- **Secondary** `#0D0D0D` - Elevated surfaces
- **Card** `#141414` - Card backgrounds
- **Warm** `#F5E6D3` - Alternative warm cream background

### Text
- **Primary** `#FFFFFF` - Headlines, important content
- **Secondary** `rgba(255, 255, 255, 0.75)` - Body text on dark
- **Tertiary** `rgba(255, 255, 255, 0.5)` - Captions, metadata
- **Dark** `#1A1A1A` - Text on light backgrounds

### Accent Colors
- **Hot Pink** `#E84B8A` - Primary accent, NEW badges
- **Orange** `#E67F22` - Promotional highlights
- **Red** `#E63946` - Alerts, prices
- **Sky Blue** `#87CEEB` - Alternative backgrounds
- **Gold** `#D4A84B` - Special items, premium

### Semantic
- **Success** `#4ADE80` - Confirmations
- **Warning** `#FBBF24` - Alerts
- **Error** `#EF4444` - Errors
- **Info** `#60A5FA` - Information

## Typography

### Font Family
```
'Oswald', 'Impact', 'Arial Black', sans-serif (Headings)
'Inter', -apple-system, BlinkMacSystemFont, sans-serif (Body)
```

### Scale
- **Hero Title**: 72px / Bold (700) / Uppercase / -0.02em tracking / Line-height 0.9
- **Section Title**: 48px / Bold (700) / Uppercase / -0.02em tracking
- **Menu Item**: 20px / Semi-bold (600) / Uppercase / 0.05em tracking
- **Body**: 16px / Regular (400) / 1.6 line-height
- **Caption**: 13px / Medium (500) / Uppercase / 0.1em tracking
- **Price**: 24px / Bold (700) / Tabular figures

## Components

### Buttons

**Primary**
- Background: Hot Pink (#E84B8A)
- Text: White, Bold, Uppercase
- Border-radius: 0px (sharp corners)
- Padding: 14px 28px
- Hover: Brightness 1.1

**Secondary**
- Background: Transparent
- Border: 2px solid white
- Text: White, Bold, Uppercase
- Hover: Background white, Text black

**Ghost**
- Background: Transparent
- Text: White with opacity
- Hover: Full white

### Cards
- Background: #141414
- Border: 1px solid rgba(255, 255, 255, 0.1)
- Border-radius: 0px (sharp) or 4px (slight)
- Hover: Border color brightens

### Menu Items
- Text with dotted leader lines connecting to price
- Leader line: rgba(255, 255, 255, 0.3)
- Name on left, price on right
- Uppercase item names

### NEW Badge
- Background: Hot Pink (#E84B8A)
- Text: White, Bold, 12px
- Padding: 4px 8px
- Transform: rotate(-5deg) for playful angle

### Price Tags
- Background: Red (#E63946)
- Text: White, Bold
- Padding: 6px 12px
- Border-radius: 4px
- Transform: rotate(-3deg) for tilted effect

## Layout Principles

1. **High Contrast** - Black/white dominance with color accents
2. **Vertical Rhythm** - Clear section breaks with horizontal rules
3. **Menu Format** - Two-column price alignment with dot leaders
4. **Bold Typography** - Large, condensed headlines that command attention
5. **Sharp Edges** - Minimal border-radius for industrial feel

## Spacing

- **Section Gap**: 64px
- **Item Gap**: 16px
- **Card Padding**: 24px
- **Button Padding**: 14px 28px

## Animation

- Duration: 0.2s for interactions
- Easing: ease-out
- Effects: Brightness changes, border color transitions
- No scaling transforms (keeps industrial feel)
