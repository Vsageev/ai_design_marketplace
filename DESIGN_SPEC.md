# Design Marketplace Base Spec

This spec documents the current base website styling for the Design Marketplace. It captures the core visual system used in the root layout and homepage so future designs can stay consistent with the baseline.

## Visual Goals

- Calm, neutral presentation with a slight product polish
- High readability and clear hierarchy
- Minimal ornamentation; rely on spacing, weight, and thin rules

## Color System

### Global Tokens (from `src/app/globals.css`)
- **Background** `#fafafa` (`--background`)
- **Foreground** `#171717` (`--foreground`)
- **Border** `#e5e5e5` (`--border`)
- **Muted** `#737373` (`--muted`)
- **Accent** `#2563eb` (`--accent`)

### Usage
- Background is the page canvas.
- Foreground is primary text.
- Muted is secondary text, labels, and metadata.
- Border is used for outlines and section separation.
- Accent is used for links, active nav, and primary emphasis.

## Typography

### Font Family
- Primary: Geist Sans (`--font-geist-sans`), fallback `system-ui, -apple-system, sans-serif`
- Mono: Geist Mono (`--font-geist-mono`) for code or data display

### Scale (homepage)
- Page title: `32px`, `700`, letter-spacing `-0.02em`
- Section labels: `14px` to `16px`, `500-600`
- Body text: `14px` to `16px`, `400`, line-height `1.5-1.6`

## Layout & Spacing

- Container width: `1200px` max
- Horizontal padding: `24px`
- Vertical padding: `48px`
- Grid: `repeat(auto-fill, minmax(340px, 1fr))` with `24px` gaps
- Card padding: `20px` body, `16px 20px` footer
- Section separation: `48px` between header and grid

## Components

### Navigation Pills
- Font size: `14px`
- Weight: `600`
- Padding: `8px 14px`
- Radius: `999px`
- Border: `1px solid var(--border)`
- Active state: accent color + light accent background

### Cards
- Background: `#ffffff`
- Border: `1px solid var(--border)`
- Radius: `12px`
- Preview header: `200px` height with `#fafafa` background
- Hover: subtle shadow + translation (transition `0.2s ease`)

### Tags
- Font size: `12px`
- Padding: `4px 10px`
- Radius: `100px`
- Background: `var(--background)`
- Color: `var(--muted)`

### Links
- Default: inherit color
- Button-like links: `14px`, `500`, accent color, inline-flex

## Motion

- Card transition: `box-shadow 0.2s ease`, `transform 0.2s ease`
- Hover effects are restrained and low-contrast

## Accessibility & Contrast

- Accent blue is used sparingly for high-signal actions
- Text on white surfaces maintains strong contrast
- Muted text remains readable at small sizes

## Source of Truth

- Global tokens: `src/app/globals.css`
- Homepage layout and component styling: `src/app/page.tsx`
- Base font setup: `src/app/layout.tsx`
