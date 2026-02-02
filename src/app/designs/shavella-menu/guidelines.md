# Shavella Menu Design System

A bold, urban street food design system inspired by the Shavella brand. Angular typography, high-contrast dark backgrounds, and vibrant accent colors create an energetic, appetizing aesthetic.

## Philosophy

Bold and unapologetic. The design commands attention with stark contrasts and angular forms. Every element feels intentional and confident, reflecting the bold flavors of street food culture.

## Color Palette

### Backgrounds
- **Primary Dark** `#0A0A0A` - Main background, deep black
- **Secondary Dark** `#141414` - Cards, elevated surfaces
- **Cream** `#F5E6C8` - Warm accent backgrounds
- **Light Blue** `#C5E7F5` - Cool accent backgrounds

### Text
- **Primary White** `#FFFFFF` - Headlines, prices
- **Secondary** `rgba(255, 255, 255, 0.75)` - Body text on dark
- **Tertiary** `rgba(255, 255, 255, 0.5)` - Labels, metadata
- **Dark Text** `#1A1A1A` - Text on light backgrounds

### Accent Colors
- **Orange** `#E87D40` - Primary accent, highlights
- **Red** `#E53935` - NEW tags, alerts
- **Hot Pink** `#E84C88` - Secondary accent
- **Green** `#4CAF50` - Success, vegetarian markers

## Typography

### Font Family
```
'Inter', -apple-system, BlinkMacSystemFont, sans-serif
```

For display/headlines, use font-weight 900 (Black) with letter-spacing: -0.03em and text-transform: uppercase for maximum impact.

### Scale
- **Hero Title**: 72px / Black (900) / -0.03em / uppercase
- **Section Title**: 48px / Black (900) / -0.02em / uppercase
- **Category Title**: 32px / Bold (700) / -0.01em / uppercase
- **Item Name**: 18px / Bold (700) / uppercase
- **Price**: 24px / Bold (700)
- **Description**: 14px / Regular (400) / 1.5 line-height
- **Label**: 12px / Bold (700) / uppercase / 0.05em tracking

## Components

### Menu Items
- Layout: Name followed by dotted leader to price
- Dotted leader: `border-bottom: 2px dotted rgba(255,255,255,0.3)`
- NEW badge: Red background, white text, positioned left of item
- Price aligned right

### Buttons

**Primary**
- Background: White (#FFFFFF)
- Text: Black (#0A0A0A)
- Border-radius: 0px (sharp corners)
- Padding: 14px 28px
- Font: Bold, uppercase
- Hover: Background orange

**Secondary**
- Background: Transparent
- Border: 2px solid white
- Text: White
- Hover: Background white, text black

### Cards
- Background: #141414 or cream (#F5E6C8)
- Border: none
- Border-radius: 0px (sharp, angular)
- Padding: 24px

### Badges
- Border-radius: 0px
- Padding: 6px 12px
- Font: Bold, uppercase, 12px
- NEW badge: #E53935 background, white text

### Price Tags
- Background: #E53935 (red) or #E87D40 (orange)
- Border-radius: 4px
- Padding: 4px 10px
- Transform: rotate(-5deg) for playful effect

## Layout Principles

1. **High Contrast** - Black backgrounds with white/orange text
2. **Angular Forms** - No rounded corners, sharp edges
3. **Menu Style** - Dotted leaders connecting items to prices
4. **Bold Headlines** - Oversized, uppercase, tightly tracked
5. **Layered Composition** - Overlapping elements, rotated price tags

## Animation

- Duration: 0.2s for interactions
- Easing: ease-out
- Hover effects: Color changes, no scale transforms
- Keep it snappy and direct, like the brand personality
