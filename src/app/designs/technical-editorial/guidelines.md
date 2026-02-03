# Technical Editorial Design System

A striking fusion of high-end print magazine aesthetics and raw command-line interface. This design uses sophisticated tension between elegant serif headlines and monospace technical details to convey both authority and technical precision.

## Philosophy

The design philosophy centers on **confident restraint**. Massive white space forces focus on typography, while technical markers (grid overlays, corner brackets, coordinate rulers) create structure without visual noise. The interface should feel "alive" with subtle agentic visual cues.

## Visual Signature Elements

### 1. Blueprint Framework
- **Plus Grid Overlay**: Subtle "+" pattern mimicking architectural blueprints
- **L-Bracket Corners**: Camera viewfinder-style framing for key content blocks
- **Edge Rulers**: Coordinate numbers along axes for analytical feel
- **Dashed Guide Lines**: Construction line aesthetic

### 2. High-Low Typographic Contrast
- **Editorial Authority**: Large elegant serif headlines (Playfair Display)
- **Terminal Language**: Small monospace text for details (JetBrains Mono)
- **The tension signals**: sophisticated product built for technical users

### 3. Agentic Visual Storytelling
- **Floating Agent Labels**: Names with cursor icons suggesting live autonomous agents
- **Pulse Indicators**: Subtle animations showing "working" state
- **Collaborative Feel**: Multiple agent cursors in the interface

## Color Palette

### Backgrounds
- **Canvas** `#fafafa` - Primary light background
- **Paper** `#ffffff` - Card surfaces
- **Blueprint** `rgba(0, 0, 0, 0.02)` - Subtle tint

### Lines & Structure
- **Grid Fine** `rgba(0, 0, 0, 0.06)` - Blueprint grid
- **Grid Cross** `rgba(0, 0, 0, 0.12)` - Plus marks
- **Bracket** `rgba(0, 0, 0, 0.25)` - Corner frames
- **Ruler** `rgba(0, 0, 0, 0.15)` - Coordinate markers

### Text
- **Primary** `#0a0a0a` - Headlines and key text
- **Secondary** `#525252` - Body copy
- **Tertiary** `#a3a3a3` - Subtle labels

### Accent (Minimal Use)
- **Terminal Green** `#22c55e` - Active/success states
- **Signal Red** `#ef4444` - Alerts only
- **Cursor Blue** `#3b82f6` - Agent indicators

## Typography

### Font Stack
```
Serif Display: 'Playfair Display', 'Georgia', serif
Sans Body: 'Inter', -apple-system, sans-serif
Mono Labels: 'JetBrains Mono', 'SF Mono', monospace
```

### Scale
- **Hero**: 72px / 400 weight / -0.03em tracking / 0.95 line-height
- **H1**: 56px / 400 weight / -0.025em tracking
- **H2**: 40px / 400 weight / -0.02em tracking
- **H3**: 28px / 500 weight / -0.015em tracking
- **Body Large**: 18px / 400 weight / 1.7 line-height
- **Body**: 15px / 400 weight / 1.6 line-height
- **Mono Label**: 11px / 500 weight / uppercase / 0.12em tracking
- **Coordinate**: 9px / 400 weight / monospace

## Components

### Buttons (Terminal Style)

**Primary CTA**
- Text only with terminal cursor marker `[ → ]`
- Font: Monospace, 13px, medium weight
- No background, no border
- Underline on hover
- Cursor: `_` blinks adjacent to text

**Secondary**
- Thin 1px border `rgba(0, 0, 0, 0.15)`
- No fill
- Letter-spacing: 0.08em

### Bracketed Containers
- L-shaped corners using pseudo-elements
- 20px bracket arm length
- 1px stroke weight
- 24px inset from content edge

### Cards
- No border-radius (sharp corners)
- 1px border `rgba(0, 0, 0, 0.08)`
- Subtle stippled texture on hover
- Corner brackets on focus/hover

### Agent Labels (Floating)
- Pill shape with cursor icon
- Semi-transparent background
- Subtle floating animation
- Shows agent name + status dot

### Stippled Textures
- Dot pattern: 1px dots, 4px spacing
- Used for: sphere graphics, section dividers, density indicators
- Opacity: 0.4 for subtle, 0.8 for emphasis

## Layout Principles

1. **Generous White Space**: Minimum 80px between major sections
2. **Asymmetric Grids**: Content offset from center, creates tension
3. **Edge Anchoring**: Rulers and coordinates along viewport edges
4. **Layered Depth**: Grid → Rulers → Content → Agent labels

## Animation

### Timing
- **Hover**: 0.15s ease-out
- **Reveal**: 0.4s ease-out with stagger
- **Cursor Blink**: 1s steps(2) infinite
- **Agent Float**: 3s ease-in-out infinite alternate

### Principles
- No scale transforms (feels cheap)
- Translate Y only for reveals
- Opacity for layering
- CSS-only where possible

## Grid System

### Plus Pattern
```css
background-image:
  radial-gradient(circle at center, var(--grid-cross) 1px, transparent 1px);
background-size: 32px 32px;
```

### Coordinate Rulers
- Left edge: Y-axis markers every 100px
- Bottom edge: X-axis markers every 100px
- Font: 9px monospace
- Opacity: 0.3

## Accessibility

- Contrast ratio minimum 4.5:1 for body text
- Focus states use bracket highlight
- Reduced motion: disable floating animations
- Semantic HTML structure maintained
