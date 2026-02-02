# Design Guidelines

This document outlines the comprehensive design guidelines for the Y Combinator website, featuring a refined editorial design philosophy that combines startup gravitas with approachable warmth through elegant typography and a sophisticated warm-neutral color palette.

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
- **Beige Light:** `bg-beige-light` / `#f5f5ee` - Primary background, warm and inviting
- **Pure Black:** `#000000` - Footer background, primary CTAs, high contrast elements
- **Deep Charcoal:** `#16140f` - Primary text, almost-black with warm undertone
- **Medium Gray:** `gray-500` - Secondary text, link underlines
- **Dark Gray:** `gray-700` - Link hover underlines
- **White:** `#FFFFFF` - Mobile menu background, contrast elements

### Accent Colors
- **YC Orange:** `#f26522` (from logo) - Brand accent, used sparingly
- **Orange Gradient:** Logo uses gradient from `#f26522` to warmer tones

### Semantic Colors
- **Success/Active States:** Inherit from brand orange palette
- **Link Text:** `#16140f` with `gray-500` underline
- **Link Hover:** `gray-700` underline
- **Footer Text:** `#f5f5ee` (beige-light on black)

### Color Usage Guidelines

#### Background Strategy
- **Dominant Beige Light**: Creates warm, inviting atmosphere distinct from cold tech aesthetics
- **Black Footer**: Strong contrast anchors the page and creates visual weight at bottom
- **White Mobile Elements**: Clean contrast for interactive components

#### Interactive Elements
- **Primary CTAs**: Black background with beige-light text, rounded-full shape
- **Links**: Inherit text color with subtle gray underline
- **Hover States**: Opacity reduction (80%) for buttons, darker underline for links
- **Social Icons**: Beige-light (`#f5f5ee`) on dark backgrounds

## Typography

### Font Family
- **Display/Headlines:** 'Source Serif 4' (Variable serif, optical sizing 8-60, weights 200-900)
- **Body Text:** 'Outfit' (Sans-serif, weights 100-1000)
- **Fallback Stack:** 'DM Sans', system sans-serif fonts
- **Weight Variation:** Light (300) for body, Medium (500) for headlines, Regular (400) for UI elements

### Font Scales & Hierarchy
- **Hero Title:** `clamp(2.5rem, 5vw, 3.75rem)` - Main page headers, fluid scaling
- **Section Header:** `1.75rem` (28px) - Major section headings (desktop: `1.4rem`)
- **Body Large:** `18px` - Primary content text
- **Body Regular:** `16px` (1rem) - Standard content, navigation
- **Small/Caption:** `14px` (text-sm) - Footer links, metadata, UI labels

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

.small-text {
  font-family: 'Outfit', sans-serif;
  font-weight: 300;
  font-size: 14px;
  color: #16140f;
}
```

#### Typography Principles
- **Italic Headlines**: All major headlines use italic style for editorial character
- **Light Body Weight**: Font-weight 300 for body text creates elegant, readable paragraphs
- **Generous Line Height**: 1.7 line-height for comfortable reading
- **Tight Tracking on Headlines**: Slightly negative letter-spacing for large text
- **Consistent Color**: `#16140f` throughout maintains visual cohesion

## Layout & Spacing

### Container Widths
- **Navigation Container:** `max-w-[1400px]` - Wide container for header elements
- **Content Container:** `max-w-[640px]` - Narrow container for article/body content
- **Footer Container:** `max-w-ycdc-page` - Custom width for footer sections

### Spacing System
- **Page Padding:** `px-4` to `px-6` (16-24px horizontal)
- **Section Margins:** `mb-10` to `mb-12` (40-48px)
- **Element Margins:** `mb-2` to `mb-6` (8-24px)
- **Navigation Gaps:** `gap-8` to `gap-10` (32-40px)
- **Footer Grid Gaps:** `gap-8` to `gap-20` (32-80px)

### Responsive Breakpoints
```css
/* Mobile First */
max-[1023px]  /* Below 1024px - Mobile/Tablet */
min-[1024px]  /* 1024px+ - Desktop */
md            /* 768px+ - Medium screens */
lg            /* 1024px+ - Large screens */
```

### Layout Patterns

#### Centered Navigation
```css
.nav-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  max-width: 1400px;
}
```

#### Content Article
```css
.article-container {
  max-width: 640px;
  margin: 0 auto;
  padding: 48px 16px 40px;
}
```

## Interactive Components

### Buttons

#### Primary CTA Button (Large)
```css
.primary-cta-large {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  padding: 0 40px;
  padding-bottom: 4px;
  background: #000000;
  color: var(--beige-light);
  font-family: 'Source Serif 4', serif;
  font-size: 1.75rem;
  font-weight: 400;
  font-style: italic;
  letter-spacing: 0.015rem;
  border-radius: 9999px;
  text-decoration: none;
  transition: opacity 300ms ease-out, transform 300ms ease-out;
}

.primary-cta-large:hover {
  opacity: 0.8;
}

/* Mobile variant */
@media (max-width: 768px) {
  .primary-cta-large {
    height: 42px;
    padding: 0 36px;
    font-size: 20px;
  }
}
```

#### Primary CTA Button (Standard)
```css
.primary-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 20px;
  padding-bottom: 2px;
  background: #000000;
  color: #ffffff;
  font-family: 'Source Serif 4', serif;
  font-size: 14px;
  font-weight: 400;
  font-style: italic;
  letter-spacing: 0.015rem;
  border-radius: 9999px;
  transition: opacity 200ms ease;
}

.primary-cta:hover {
  opacity: 0.8;
}
```

### Links

#### Inline Content Links
```css
.content-link {
  color: #16140f;
  text-decoration: underline;
  text-decoration-color: rgb(107 114 128); /* gray-500 */
  text-underline-offset: 2px;
  transition: all 200ms ease;
}

.content-link:hover {
  text-decoration-color: rgb(55 65 81); /* gray-700 */
}
```

### Navigation

#### Desktop Navigation Link
```css
.nav-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  font-family: inherit;
  color: inherit;
}
```

#### Dropdown Menu
```css
.dropdown-menu {
  position: absolute;
  display: none;
}

.dropdown-container {
  background: var(--beige-light);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.dropdown-item {
  display: block;
  padding: 8px 16px;
  transition: background 200ms ease;
}

.dropdown-item:hover {
  background: rgba(0, 0, 0, 0.05);
}
```

## Navigation Patterns

### Header Structure
- **Sticky Position**: `sticky top-0 z-50`
- **Background**: `bg-beige-light`
- **Desktop Layout**: Centered logo with balanced navigation groups on either side
- **Mobile Layout**: Logo left, hamburger menu right

### Desktop Navigation
```
┌─────────────────────────────────────────────────────────────────┐
│  About  Companies  Library    [LOGO]    Partners  Resources  Jobs  │  Apply  │
└─────────────────────────────────────────────────────────────────┘
```

### Mobile Navigation
```
┌─────────────────────────────────────┐
│  [LOGO]                        [≡]  │
└─────────────────────────────────────┘
```

### Announcement Banner
```css
.announcement-banner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8px;
  background: inherit;
  text-decoration: none;
}
```

## Footer Design

### Structure
- **Background**: Black (`#000000`)
- **Text Color**: Beige-light (`#f5f5ee`)
- **Container**: Max-width with horizontal padding
- **Layout**: Logo/tagline left, 3-column link grid right

### Footer Columns
```css
.footer-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

@media (min-width: 640px) {
  .footer-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### Footer Links
```css
.footer-heading {
  font-family: 'Outfit', sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.05em;
  color: var(--beige-light);
}

.footer-link {
  font-family: 'Outfit', sans-serif;
  font-weight: 300;
  font-size: 14px;
  color: var(--beige-light);
  transition: color 200ms ease;
}

.footer-link:hover {
  color: #ffffff;
}
```

### Social Icons
```css
.social-icon {
  width: 24px;
  height: 24px;
  color: #f5f5ee;
  transition: color 200ms ease;
}

.social-icon:hover {
  color: #ffffff;
}
```

### Footer Bottom
- **Border**: 1px top border in gray-200
- **Layout**: Social icons right, copyright left (reversed on mobile)
- **Tagline**: "Make something people want."

## Motion & Transitions

### Standard Transitions
```css
/* Fast transitions - UI feedback */
--duration-fast: 200ms;

/* Medium transitions - state changes */
--duration-medium: 300ms;

/* Standard easing */
--ease-out: ease-out;
--ease-default: ease;
```

### Hover Effects
- **Buttons**: Opacity reduction to 80%
- **Links**: Underline color darkening
- **Footer Links**: Color shift to white
- **No Transform Effects**: Avoid scale, translate on primary elements

### Motion Principles
- **Subtle Over Dramatic**: Prefer opacity and color changes over movement
- **Consistent Timing**: 200-300ms for most interactions
- **Performance First**: Use CSS properties that don't trigger layout (opacity, color, transform)
- **Respect Preferences**: Support `prefers-reduced-motion`

## Accessibility & Inclusive Design

### Visual Accessibility
- **Color Contrast**: `#16140f` on `beige-light` exceeds WCAG AA requirements
- **Link Distinction**: Underlines always visible on links
- **Focus Indicators**: Visible focus rings on interactive elements
- **Text Scaling**: Fluid typography with clamp() supports zoom

### Semantic Structure
- **Heading Hierarchy**: Proper h1 > h2 > h3 structure
- **Landmark Regions**: Header, main, footer properly marked
- **Skip Links**: Hidden skip navigation for keyboard users
- **ARIA Labels**: Screen reader text for icons and buttons

### Interactive Accessibility
```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

## Responsive Design

### Mobile Considerations
- **Touch Targets**: Minimum 44x44px for interactive elements
- **Readable Text**: 16px minimum to prevent zoom on iOS
- **Simplified Navigation**: Hamburger menu with full-screen overlay
- **Adjusted Typography**: Smaller headlines, maintained body size

### Breakpoint Summary
| Breakpoint | Width | Primary Changes |
|------------|-------|-----------------|
| Base | 0-767px | Single column, mobile nav, compact CTAs |
| md | 768px+ | Two-column footer, larger spacing |
| lg | 1024px+ | Desktop nav, full typography scale |

## Icon System

### Chevron Icons
```css
.chevron-icon {
  width: 12px;
  height: 12px;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: square;
  stroke-linejoin: miter;
  fill: none;
}
```

### Social Media Icons
- **Size**: 24x24px (h-6 w-6)
- **Style**: Filled, single color
- **Platforms**: Twitter, Facebook, Instagram, LinkedIn, YouTube

## Implementation Notes

### CSS Framework
The site uses Tailwind CSS with custom configuration:
- Custom color: `beige-light`
- Custom max-width: `max-w-ycdc-page`
- Variable fonts loaded from Google Fonts

### Font Loading
```html
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet" />
```

### Key CSS Variables
```css
::root {
  --beige-light: #f5f5ee;
  --deep-charcoal: #16140f;
  --duration-fast: 200ms;
  --duration-medium: 300ms;
}
```
