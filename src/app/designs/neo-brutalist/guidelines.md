# Design Guidelines

This document outlines the comprehensive design guidelines for a bold, unapologetic Neo Brutalist design system that celebrates raw aesthetics, high contrast, and intentional "ugliness" as a form of authenticity.

## Design Philosophy

Our design system embraces **Neo Brutalism** — a bold approach that rejects polish in favor of raw, honest interfaces. The core principles are:

1. **Raw Aesthetics**: Unrefined, intentionally rough edges and harsh contrasts
2. **Bold Typography**: Oversized, heavy typefaces that demand attention
3. **Hard Shadows**: No soft gradients — only solid, offset drop shadows
4. **High Contrast**: Black and white foundations with shocking accent colors
5. **Visible Borders**: Thick, prominent borders that define structure
6. **Anti-Minimalism**: Embrace visual weight and density

## Color Palette

### Base Colors
- **Pure Black:** `#000000` - Primary text, borders, shadows
- **Pure White:** `#FFFFFF` - Primary background
- **Off-White:** `#F5F5F0` - Secondary background

### Accent Colors (Shocking & Bold)
- **Electric Yellow:** `#FFFF00` - Primary accent, highlights
- **Hot Pink:** `#FF00FF` - Secondary accent, links
- **Cyber Blue:** `#00FFFF` - Tertiary accent, info states
- **Lime Green:** `#00FF00` - Success states

### Semantic Colors
- **Error Red:** `#FF0000` - Errors, destructive actions
- **Warning Orange:** `#FF8800` - Warnings, caution states

### Color Usage Guidelines

#### Background Strategy
- **Dominant White/Off-White**: Clean canvas for bold elements
- **Black Sections**: Use sparingly for maximum impact
- **Accent Backgrounds**: Full-saturation colors for call-to-action areas

#### Borders & Shadows
- **All borders**: 2-3px solid black
- **Shadows**: 4-8px offset, solid black (no blur)
- **No gradients**: Ever. Flat colors only.

## Typography

### Font Family
- **Primary Font**: 'Space Mono' monospace for all text
- **Display Font**: 'Bebas Neue' or 'Anton' for headlines
- **No serif fonts**: Strictly sans-serif and monospace

### Font Scales & Hierarchy
- **Hero Title**: `64px` (4rem) - Massive, commanding headlines
- **Section Header**: `40px` (2.5rem) - Bold section dividers
- **Sub-header**: `24px` (1.5rem) - Card titles, emphasis
- **Body**: `16px` (1rem) - Standard readable content
- **Caption**: `14px` (0.875rem) - Labels, metadata

### Typography Guidelines
- **Text Transform**: UPPERCASE for headers, mixed for body
- **Letter Spacing**: Tight (-0.02em) for headers, normal for body
- **Line Height**: 1.1-1.2 for headers, 1.5 for body
- **Font Weight**: 700-900 for headers, 400-500 for body

## Layout & Structure

### Spacing
- **Base unit**: 8px
- **Component padding**: 16-24px
- **Section gaps**: 48-64px
- **Generous whitespace**: Let bold elements breathe

### Border & Shadow System
```css
.brutalist-border {
  border: 3px solid #000000;
}

.brutalist-shadow {
  box-shadow: 6px 6px 0 #000000;
}

.brutalist-shadow-accent {
  box-shadow: 6px 6px 0 #FFFF00;
}
```

### Card Pattern
```css
.brutalist-card {
  background: #FFFFFF;
  border: 3px solid #000000;
  box-shadow: 6px 6px 0 #000000;
  padding: 24px;
}

.brutalist-card:hover {
  transform: translate(-2px, -2px);
  box-shadow: 8px 8px 0 #000000;
}
```

## Interactive Components

### Buttons
```css
.btn-brutalist {
  background: #FFFF00;
  color: #000000;
  border: 3px solid #000000;
  box-shadow: 4px 4px 0 #000000;
  padding: 12px 24px;
  font-family: 'Space Mono', monospace;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 0.1s, box-shadow 0.1s;
}

.btn-brutalist:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 #000000;
}

.btn-brutalist:active {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0 #000000;
}
```

### Form Inputs
```css
.input-brutalist {
  border: 3px solid #000000;
  padding: 12px 16px;
  font-family: 'Space Mono', monospace;
  font-size: 16px;
  background: #FFFFFF;
}

.input-brutalist:focus {
  outline: none;
  box-shadow: 4px 4px 0 #00FFFF;
}
```

## Motion & Interaction

### Animation Principles
- **No smooth transitions**: Snap or very fast (100ms max)
- **Transform-based**: Use translate for hover states
- **Shadow manipulation**: Grow/shrink shadows on interaction
- **No fade effects**: Elements appear/disappear instantly

### Hover States
- Move element up-left by 2px
- Increase shadow offset by 2px
- Optionally change shadow color to accent

## Accessibility

### Contrast Requirements
- Black on white: Maximum contrast (21:1)
- Black on yellow: High contrast (19.6:1)
- Ensure all text meets WCAG AAA standards

### Focus States
- Thick outline (4px) in accent color
- High visibility for keyboard navigation
- No subtle focus indicators

## Development Patterns

```typescript
// Brutalist component pattern
interface BrutalistCardProps {
  title: string;
  children: React.ReactNode;
  accentColor?: 'yellow' | 'pink' | 'cyan';
}

const BrutalistCard: React.FC<BrutalistCardProps> = ({
  title,
  children,
  accentColor = 'yellow'
}) => {
  return (
    <div className="brutalist-card">
      <h3 className="brutalist-title">{title}</h3>
      {children}
    </div>
  );
};
```
