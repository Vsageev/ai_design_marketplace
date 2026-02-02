# Y Combinator Editorial Design System

This design system embraces **Editorial Elegance** — a balanced approach that conveys authority and trust through refined typography while maintaining warmth and approachability through carefully chosen colors and generous whitespace.

## Design Principles

1. **Typographic Distinction**: Serif italics for headlines create editorial gravitas; clean sans-serif for body ensures readability
2. **Warm Neutrality**: A beige-forward palette softens the typical tech aesthetic while maintaining professionalism
3. **Focused Simplicity**: Minimal visual noise allows content and calls-to-action to command attention
4. **Confident Restraint**: Bold design choices delivered with subtle execution
5. **Accessible Authority**: Premium feel without being intimidating

## Color Palette

### Base Colors
- **Beige Light:** `#f5f5ee` - Primary background
- **Pure Black:** `#000000` - Footer, primary CTAs
- **Deep Charcoal:** `#16140f` - Primary text
- **Pure White:** `#ffffff` - Cards, contrast elements

### Gray Scale
- **Medium Gray:** `#6b7280` - Secondary text, link underlines
- **Dark Gray:** `#374151` - Link hover underlines

### Accent
- **YC Orange:** `#f26522` - Brand accent, used sparingly

## Typography

### Font Families
- **Display/Headlines:** Source Serif 4 (Variable, italic)
- **Body Text:** Outfit (Sans-serif, weight 300)

### Scale
- **Hero Title:** clamp(2.5rem, 5vw, 3.75rem)
- **Section Header:** 1.75rem
- **Body Large:** 18px
- **Body Regular:** 16px
- **Small/Caption:** 14px

### Guidelines
- All headlines use italic style
- Body text uses font-weight 300
- Line-height 1.7 for comfortable reading
- Letter-spacing -0.02em on large headlines

## Interactive Elements

### Primary CTA (Large)
- Height: 80px
- Background: black
- Text: beige-light, serif italic
- Border-radius: full (pill shape)
- Hover: opacity 0.8

### Primary CTA (Standard)
- Height: 40px
- Same styling, smaller scale

### Links
- Color: deep-charcoal
- Underline: medium-gray
- Hover: underline darkens to dark-gray

## Motion

- Fast transitions: 200ms
- Medium transitions: 300ms
- Hover effects: Opacity reduction, no scale transforms
- Respect `prefers-reduced-motion`
