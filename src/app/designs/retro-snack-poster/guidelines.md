# Retro Snack Poster Design System

A loud, hand-printed poster style inspired by street-food specials and festival flyers. Bold blocks, chunky outlines, and playful doodles.

## Philosophy

Make food feel like a celebration. Typography should shout, colors should pop, and shapes should look screen-printed rather than sterile.

## Color Palette

### Backgrounds
- **Cream Base** `#f7d7a6` - Primary canvas
- **Sky Card** `#bfe9f7` - Cool panel surface
- **Warm Paper** `#f3c99b` - Secondary canvas
- **Light Panel** `#fff3df` - Form fields and cards

### Text
- **Ink Black** `#1f1b14` - Headlines and body text
- **Deep Cocoa** `#3a2f24` - Secondary copy
- **Muted Cocoa** `#5a4a3b` - Metadata text

### Accent Colors
- **Poster Orange** `#f28a1a`
- **Tomato Red** `#e45136`
- **Mustard** `#f2b33b`
- **Herb Green** `#2f7d4a`
- **Ribbon Blue** `#3c6fc7`

### Borders & Lines
- **Ink Outline** `#1f1b14`
- **Dashed Line** `#2b241b`

## Typography

### Font Family
```
'Bebas Neue', 'Rubik', 'Arial', sans-serif
```

### Scale
- **Hero Title**: 64px / 700 / uppercase / 0.02em tracking
- **Section Title**: 36px / 700 / uppercase / 0.04em tracking
- **Card Title**: 22px / 600
- **Body**: 16px / 400 / 1.6 line-height
- **Small**: 13px / 500
- **Label**: 12px / 700 / uppercase / 0.08em tracking

## Components

### Buttons

**Primary**
- Background: Poster Orange
- Text: Ink Black
- Border: 2px solid Ink Outline
- Radius: 10px
- Shadow: 3px 3px 0 Ink Outline
- Hover: translate(-1px, -1px), shadow 5px 5px 0

**Secondary**
- Background: Light Panel
- Text: Ink Black
- Border: 2px solid Ink Outline
- Hover: Mustard background

**Outline**
- Background: Transparent
- Text: Ink Black
- Border: 2px dashed Ink Outline

### Cards
- Background: Light Panel
- Border: 2px solid Ink Outline
- Border-radius: 14px
- Shadow: 4px 4px 0 Ink Outline

### Inputs
- Background: Light Panel
- Border: 2px solid Ink Outline
- Border-radius: 10px
- Focus: outline 2px solid Tomato Red

### Badges
- Shape: pill
- Background: Tomato Red
- Text: Light Panel
- Border: 2px solid Ink Outline

## Layout Principles

1. **Big blocks** - Poster-like sections with chunky dividers
2. **Hand-made energy** - Wavy lines, stickers, and uneven shapes
3. **Clear hierarchy** - Loud headings, short supporting lines
4. **Color grouping** - Alternate warm/cool panels for rhythm

## Animation

- Duration: 140ms for hover
- Easing: cubic-bezier(0.2, 0.9, 0.2, 1)
- Motion: slight offset movement, no scaling
