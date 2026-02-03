# Hex Security Editorial Design System

A technical editorial interpretation of Hex Security. Feels like a high-end print magazine fused with a command-line interface: strict grid lines, bracketed frames, mono metadata, and a controlled orange signal.

## Philosophy

Authority comes from restraint. Use generous whitespace, crisp rules, and a single saturated accent to guide attention. The interface should read like a technical dossier: precise, calm, and slightly alive.

## Color Palette

### Backgrounds
- **Paper** `#f5f4f2` - Global canvas
- **Surface** `#ffffff` - Panels and cards
- **Soft Field** `rgba(30, 30, 30, 0.03)` - Subtle blocks and layering

### Borders & Lines
- **Rule** `#d2d0cb` - Primary structural lines
- **Grid** `rgba(20, 20, 20, 0.10)` - Blueprint grid lines
- **Bracket** `rgba(20, 20, 20, 0.30)` - Emphasis corners

### Text
- **Ink** `#141414` - Headlines and key text
- **Graphite** `#4b4b4b` - Body copy
- **Muted** `#7b7b7b` - Supporting meta

### Accents
- **Signal Orange** `#ff6a2b` - Primary CTA and highlights
- **Data Teal** `#0f8f8c` - Secondary emphasis
- **Alert Red** `#e3362c` - Errors and critical states

## Typography

### Font Family
```
'Noe Display', 'Times New Roman', serif
'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif
'DM Mono', 'SFMono-Regular', Menlo, monospace
```

### Scale
- **Hero Title**: 62px / Regular (400) / -0.02em tracking
- **Section Title**: 34px / Medium (500)
- **Card Title**: 18px / Medium (500)
- **Body**: 16px / Regular (400) / 1.65 line-height
- **Small**: 13px / Medium (500)
- **Label (Mono)**: 11px / Medium (500) / uppercase / 0.18em tracking

## Components

### Buttons

**Primary**
- Background: `#ff6a2b`
- Text: `#ffffff`
- Border-radius: 6px
- Padding: 12px 18px
- Hover: Background `#ff7e46`

**Secondary**
- Background: Transparent
- Text: `#141414`
- Border: 1px solid `#d2d0cb`
- Hover: Border `rgba(20, 20, 20, 0.30)`

**Ghost**
- Background: `rgba(15, 143, 140, 0.12)`
- Text: `#0f8f8c`
- Border: 1px dashed `rgba(15, 143, 140, 0.35)`

### Cards
- Background: `#ffffff`
- Border: 1px solid `#d2d0cb`
- Border-radius: 12px
- Corners: Bracketed highlights
- Hover: Border `rgba(20, 20, 20, 0.30)`

### Inputs
- Background: `#ffffff`
- Border: 1px solid `#d2d0cb`
- Border-radius: 6px
- Focus: Border `#141414`
- Error: Border `#e3362c`

### Badges
- Background: `rgba(255, 106, 43, 0.15)`
- Text: `#ff6a2b`
- Radius: 999px
- Padding: 4px 10px

## Layout Principles

1. **Blueprint Structure** - Maintain a faint grid and ruler cues.
2. **Brackets Over Boxes** - Use corner markers to frame important areas.
3. **Mono Metadata** - All labels, status tags, and microcopy use mono.
4. **Editorial Whitespace** - Let copy breathe; avoid dense panels.
5. **Agentic Presence** - Use floating tags or cursors to imply active agents.

## Animation

- Duration: 0.4s for section reveals, 0.2s for hover
- Easing: ease-out
- Motion: Subtle fade + translate; no scaling
