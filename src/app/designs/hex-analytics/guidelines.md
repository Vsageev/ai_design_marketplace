# Hex Analytics Design System

A sophisticated, minimalist design system inspired by Hex.co. Clean interfaces with technical refinement, bright accent colors, and layered depth for modern data analytics products.

## Philosophy

Clarity meets sophistication. Light backgrounds reduce cognitive load while bright accent colors guide attention to actions and data. Technical elements use monospace typography for precision, while UI text remains clean and readable.

## Color Palette

### Backgrounds
- **Primary** `#f7f7f7` - Main background
- **White** `#ffffff` - Cards and elevated surfaces
- **Subtle** `#eeeeee` - Hover states, secondary areas

### Text
- **Primary** `#000000` - Headlines, important content
- **Secondary** `#5e5e5e` - Body text, descriptions
- **Muted** `#888888` - Labels, metadata

### Accent Colors
- **Cyan** `#0099ff` - Primary actions, links
- **Orange** `#ff8b17` - Highlights, warnings
- **Red** `#ff312f` - Errors, destructive actions
- **Green** `#00c853` - Success states

### Borders
- **Default** `#e0e0e0` - Standard borders
- **Subtle** `#ebebeb` - Light separators

## Typography

### Font Families
```
Primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
Monospace: 'Fragment Mono', 'DM Mono', 'SF Mono', monospace
```

### Scale
- **Hero Title**: 56px / Bold (700) / -0.02em tracking
- **Section Title**: 40px / Semi-bold (600) / -0.02em tracking
- **Card Title**: 20px / Semi-bold (600)
- **Body**: 16px / Regular (400) / 1.6 line-height
- **Small**: 14px / Medium (500)
- **Label**: 12px / Medium (500) / uppercase / 0.05em tracking
- **Code**: 14px / Fragment Mono / Regular (400)

## Components

### Buttons

**Primary**
- Background: #0099ff (Cyan)
- Text: White
- Border-radius: 100px (pill shape)
- Padding: 12px 24px
- Hover: Darken to #0088ee

**Secondary**
- Background: White
- Text: #000000
- Border: 1px solid #e0e0e0
- Border-radius: 100px
- Hover: Background #f7f7f7

**Ghost**
- Background: Transparent
- Text: #5e5e5e
- Hover: Text #000000

### Cards
- Background: #ffffff
- Border: 1px solid #e0e0e0
- Border-radius: 16px
- Padding: 24px
- Shadow: 0 2px 8px rgba(0, 0, 0, 0.04)
- Hover: Shadow 0 4px 16px rgba(0, 0, 0, 0.08)

### Corner Accents
- 10px colored indicators at card corners
- Used for categorization or status
- Colors: Cyan, Orange, Red, Green

### Inputs
- Background: #ffffff
- Border: 1px solid #e0e0e0
- Border-radius: 8px
- Padding: 12px 16px
- Focus: Border #0099ff

### Badges
- Border-radius: 100px
- Padding: 4px 12px
- Font-size: 12px
- Font-weight: 500

### Code Blocks
- Background: #f7f7f7
- Border: 1px solid #e0e0e0
- Border-radius: 8px
- Padding: 16px
- Font: Fragment Mono, 14px

## Layout Principles

1. **Max-width containers** - 1340px centered
2. **Generous spacing** - 24px and 40px gaps
3. **Light and airy** - White cards on light gray background
4. **Technical precision** - Monospace for data and code
5. **Accent highlights** - Bright colors for interactive elements

## Animation

- Duration: 0.2s for all transitions
- Easing: ease-out
- Hover effects: Subtle shadow elevation
- No transform scaling on hover
