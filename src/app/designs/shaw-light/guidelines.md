# Shaw Light Design Guidelines

## Philosophy

A festive, hand-drawn food poster aesthetic. Bold display typography meets playful illustrated ingredients on light pastel backgrounds. Inspired by Eastern European deli poster art — oversized product names, scattered ingredient illustrations, confetti accents, and price badges. Warm, inviting, and unapologetically loud.

## Color Palette

### Base Colors
- **Background**: `#D6EDFA` (light sky blue)
- **Surface**: `#FFF5E0` (warm cream)
- **Card Background**: `#FFFFFF`

### Text Colors
- **Primary Text**: `#1A1A2E` (deep navy)
- **Secondary Text**: `#5A5A7A` (muted slate)
- **Caption**: `#8A8AA0`

### Accent Colors
- **Red Bold**: `#E63926` (poster red — hero headlines, CTAs)
- **Blue Deep**: `#2B4C9B` (subheadings, links)
- **Orange Warm**: `#E8943A` (badges, highlights, splashes)
- **Green Fresh**: `#4A8C3F` (success, fresh accents)
- **Yellow Bright**: `#F5D547` (confetti dots, star bursts)

### Semantic Colors
- **Success**: `#4A8C3F`
- **Error**: `#E63926`
- **Warning**: `#E8943A`
- **Info**: `#2B4C9B`

## Typography

### Font Family
- **Display**: `'Georgia', 'Times New Roman', serif` (bold poster headlines)
- **Body**: `'Helvetica Neue', 'Arial', sans-serif` (clean readable body)
- **Accent**: `'Courier New', monospace` (price tags, labels)

### Scale
- **Hero Title**: `72px`, `900`, line-height `0.95`, uppercase, letter-spacing `-0.02em`
- **Section Header**: `36px`, `800`, line-height `1.1`
- **Card Title**: `22px`, `700`, line-height `1.2`
- **Body**: `16px`, `400`, line-height `1.6`
- **Small/Caption**: `13px`, `500`, line-height `1.4`
- **Badge/Price**: `28px`, `900`, monospace

## Spacing

- Section gap: `100px`
- Card padding: `24px`
- Inner group gap: `16px`
- Grid gap: `28px`
- Hero bottom margin: `120px`

## Border & Radius

- Cards: `16px` radius
- Badges: `50%` (circle) or `999px` (pill)
- Buttons: `12px` radius
- Inputs: `10px` radius
- Thick card border: `3px solid #1A1A2E`

## Shadows

- Card: `4px 4px 0px #1A1A2E` (hard offset shadow, poster-style)
- Button hover: `6px 6px 0px #1A1A2E`
- Badge: `2px 2px 0px rgba(0,0,0,0.15)`

## Signature Motifs

1. **Confetti Dots** — Small colored circles (yellow, green, orange) scattered as decorative accents around heroes and cards
2. **Star Bursts** — CSS star/explosion shapes behind price badges and CTAs
3. **Thick Outline Borders** — Heavy dark outlines on cards and buttons (poster-print style)
4. **Hand-drawn Dashes** — Dashed/dotted separators using chunky dashes to evoke hand-drawn lines

## Interaction Language

### Hover Effect 1: Poster Pop
On hover, cards translate up `-6px` and shadow grows from `4px 4px` to `8px 8px`. Background gets slightly warmer tint.

### Hover Effect 2: Badge Spin
On hover, circular badge elements rotate `15deg` and scale `1.1`. Price tags wobble with a subtle CSS animation.

## Buttons

- **Primary**: Red Bold background, white text, thick dark border, hard shadow
- **Secondary**: White background, deep navy text, thick dark border, hard shadow
- **Disabled**: Muted background, reduced opacity

## Cards

- White background with thick `3px` dark border
- Hard offset shadow (no blur)
- Colored header strip at top (accent color band)
- On hover: lift + shadow expand

## Form Elements

- Thick `2px` dark border
- `10px` radius
- Focus state: Blue Deep border + light blue glow
- Error state: Red border + light red background

## Alerts/Feedback

- Thick left border `4px` in semantic color
- Light tinted background matching the semantic color
- Bold icon or emoji prefix
- Thick outline style matching poster aesthetic
