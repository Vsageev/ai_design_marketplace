# YC Editorial Design Guidelines

This document outlines the comprehensive design guidelines for the Y Combinator-inspired design system, featuring a refined editorial design philosophy that combines startup gravitas with approachable warmth through elegant typography and a sophisticated warm-neutral color palette.

## Design Philosophy

Our design system embraces **Editorial Elegance** — a balanced approach that conveys authority and trust through refined typography while maintaining warmth and approachability through carefully chosen colors and generous whitespace. The core principles are:

1. **Typographic Distinction**: Serif italics for headlines create editorial gravitas; clean sans-serif for body ensures readability
2. **Warm Neutrality**: A beige-forward palette softens the typical tech aesthetic while maintaining professionalism
3. **Focused Simplicity**: Minimal visual noise allows content and calls-to-action to command attention
4. **Confident Restraint**: Bold design choices (large CTAs, strong typography) delivered with subtle execution
5. **Accessible Authority**: Premium feel without being intimidating to founders from any background
6. **Responsive Elegance**: Graceful adaptation across all screen sizes without losing brand identity

## Color Palette

### Base Colors (Warm Neutrals)
- **Beige Light:** `#f5f5ee` - Primary background, warm and inviting
- **Pure Black:** `#000000` - Footer background, primary CTAs, high contrast elements
- **Deep Charcoal:** `#16140f` - Primary text, almost-black with warm undertone
- **Pure White:** `#FFFFFF` - Cards, input backgrounds, contrast elements

### Gray Scale
- **Medium Gray:** `#6b7280` - Secondary text, link underlines, placeholders
- **Dark Gray:** `#374151` - Link hover underlines

### Accent Colors
- **YC Orange:** `#f26522` - Brand accent, badges, used sparingly

### Color Usage Guidelines

#### Background Strategy
- **Dominant Beige Light**: Creates warm, inviting atmosphere distinct from cold tech aesthetics
- **Black Footer**: Strong contrast anchors the page and creates visual weight at bottom
- **White Cards**: Clean contrast for interactive components and content containers

#### Interactive Elements
- **Primary CTAs**: Black background with beige-light text, rounded-full shape
- **Links**: Inherit text color with subtle gray underline
- **Hover States**: Opacity reduction (80%) for buttons, darker underline for links

## Typography

### Font Family
- **Display/Headlines:** 'Source Serif 4' (Variable serif, optical sizing 8-60, weights 200-900)
- **Body Text:** 'Outfit' (Sans-serif, weights 100-900)
- **Weight Variation:** Light (300) for body, Medium (500) for headlines

### Font Scales & Hierarchy
- **Hero Title:** `clamp(2.5rem, 5vw, 3.75rem)` - Main page headers, fluid scaling
- **Section Header:** `1.75rem` (28px) - Major section headings
- **Sub-header:** `1.25rem` (20px) - Card titles, minor headings
- **Body Large:** `18px` - Primary content text
- **Small/Caption:** `14px` - Footer links, metadata, UI labels

### Typography Guidelines

#### Headlines
```css
.hero-title {
  font-family: 'Source Serif 4', serif;
  font-size: clamp(2.5rem, 5vw, 3.75rem);
  font-weight: 500;
  font-style: italic;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #16140f;
}

.section-header {
  font-family: 'Source Serif 4', serif;
  font-size: 1.75rem;
  font-weight: 500;
  font-style: italic;
  line-height: 1.2;
  color: #16140f;
}
```

#### Body Text
```css
.body-text {
  font-family: 'Outfit', sans-serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 1.7;
  color: #16140f;
}
```

#### Typography Principles
- **Italic Headlines**: All major headlines use italic style for editorial character
- **Light Body Weight**: Font-weight 300 for body text creates elegant, readable paragraphs
- **Generous Line Height**: 1.7 line-height for comfortable reading
- **Tight Tracking on Headlines**: Slightly negative letter-spacing for large text

## Interactive Components

### Primary CTA Button (Large)
```css
.primary-cta-large {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  padding: 0 40px;
  background: #000000;
  color: #f5f5ee;
  font-family: 'Source Serif 4', serif;
  font-size: 1.75rem;
  font-weight: 400;
  font-style: italic;
  border-radius: 9999px;
  transition: opacity 300ms ease-out;
}

.primary-cta-large:hover {
  opacity: 0.8;
}
```

### Primary CTA Button (Standard)
```css
.primary-cta {
  height: 40px;
  padding: 0 20px;
  background: #000000;
  color: #ffffff;
  font-family: 'Source Serif 4', serif;
  font-size: 14px;
  font-style: italic;
  border-radius: 9999px;
}
```

### Secondary Button
```css
.secondary-btn {
  height: 40px;
  padding: 0 20px;
  background: transparent;
  color: #16140f;
  border: 1px solid #16140f;
  border-radius: 9999px;
}

.secondary-btn:hover {
  background: #16140f;
  color: #f5f5ee;
}
```

### Links
```css
.content-link {
  color: #16140f;
  text-decoration: underline;
  text-decoration-color: #6b7280;
  text-underline-offset: 2px;
}

.content-link:hover {
  text-decoration-color: #374151;
}
```

### Form Inputs
```css
.input {
  border: 1px solid #6b7280;
  border-radius: 8px;
  padding: 12px 16px;
  font-family: 'Outfit', sans-serif;
  font-size: 16px;
  font-weight: 300;
  background: #ffffff;
}

.input:focus {
  border-color: #16140f;
  box-shadow: 0 0 0 3px rgba(22, 20, 15, 0.1);
}
```

## Cards

```css
.card {
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}
```

## Layout & Spacing

### Container Widths
- **Navigation Container:** `max-width: 1400px` - Wide container for header
- **Content Container:** `max-width: 640px` - Narrow container for article content
- **Full Container:** `max-width: 1200px` - Standard page container

### Spacing System
- **Page Padding:** 16-24px horizontal
- **Section Margins:** 48-64px vertical
- **Element Margins:** 8-24px
- **Card Padding:** 24px

## Footer Design

### Structure
- **Background**: Black (`#000000`)
- **Text Color**: Beige-light (`#f5f5ee`)
- **Layout**: Multi-column grid with links
- **Tagline**: "Make something people want." in italic serif

### Footer Links
```css
.footer-link {
  font-family: 'Outfit', sans-serif;
  font-weight: 300;
  font-size: 14px;
  color: #f5f5ee;
}

.footer-link:hover {
  color: #ffffff;
}
```

## Motion & Transitions

### Standard Transitions
- **Fast transitions (UI feedback):** 200ms
- **Medium transitions (state changes):** 300ms
- **Easing:** ease, ease-out

### Hover Effects
- **Buttons**: Opacity reduction to 80%
- **Links**: Underline color darkening
- **Cards**: Shadow intensification
- **Footer Links**: Color shift to white

## Accessibility

- Color contrast exceeds WCAG AA requirements
- Underlines always visible on links
- Visible focus rings on interactive elements
- Fluid typography supports zoom
- Proper heading hierarchy
