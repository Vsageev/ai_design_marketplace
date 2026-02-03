# X-Low Interface System

A crisp, high-density social dashboard inspired by timeline UIs. Bright, quiet surfaces, confident typography, and crisp rules keep scanning fast while subtle rings and pills add warmth.

## Philosophy

Low noise, high clarity. Every element is designed for quick scanning: hairline dividers, pill tabs, and ringed avatars create rhythm without visual weight.

## Color Palette

### Base
- **Background** `#ffffff`
- **Surface** `#f7f9fb`
- **Panel** `#ffffff`
- **Divider** `#e6ecf0`

### Text
- **Primary** `#0f1419`
- **Secondary** `#536471`
- **Muted** `#8899a6`
- **Inverse** `#ffffff`

### Accent
- **Blue** `#1d9bf0`
- **Blue Soft** `#e8f4fd`
- **Green** `#00ba7c`
- **Orange** `#f59e0b`
- **Red** `#f4212e`

## Typography

### Font Family
```
'Plus Jakarta Sans', 'SF Pro Text', 'Segoe UI', sans-serif
```

### Scale
- **Hero Title**: 48px / 700 / -0.02em
- **Section Title**: 32px / 700 / -0.01em
- **Card Title**: 18px / 600
- **Body**: 16px / 400 / 1.6 line-height
- **Small**: 14px / 500
- **Caption**: 12px / 600 / 0.08em tracking / uppercase

## Spacing
- **4, 8, 12, 16, 20, 24, 32, 40, 56, 80**

## Radius
- **Pill**: 999px
- **Card**: 16px
- **Input**: 12px
- **Badge**: 10px

## Shadows
- **Soft**: `0 8px 24px rgba(15, 20, 25, 0.08)`
- **Lift**: `0 16px 32px rgba(15, 20, 25, 0.12)`

## Components

### Tabs
- Pill tabs with a blue underline indicator
- Hover: underline slides in from left

### Buttons
**Primary**
- Background: Blue
- Text: White
- Radius: Pill
- Padding: 12px 22px
- Hover: blue deepens + glow ring

**Secondary**
- Background: Blue Soft
- Text: Blue
- Hover: underline sweep

### Cards
- Background: Panel
- Border: 1px solid Divider
- Hover: ring outline animates + slight lift

### Inputs
- Background: Surface
- Border: 1px solid Divider
- Focus: border Blue + ring

### Badges
- Background: Blue Soft
- Text: Blue
- Radius: 10px

## Motifs
1. **Hairline rules** for section structure
2. **Ringed circles** for avatars, badges, and status
3. **Pill tabs** with underline indicator

## Animation
- **Duration**: 180ms for hover, 240ms for overlays
- **Easing**: `cubic-bezier(0.2, 0.8, 0.2, 1)`
