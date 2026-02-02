# IT Park 3 Web Design Guidelines

Modern tech education digital platform with a vibrant orange/red palette, Geist typography, faceted glass UI elements, 3D assets, and a responsive grid system.

---

## Logo & Branding

### Web Implementation
- **Format**: Always use **SVG** for the logo to ensure sharpness across all resolutions.
- **Graphic Element**: Stylized orange keyboard in a rounded rectangle.
- **Header Placement**: Default to top-left. Maintain a minimum height of `40px` on desktop and `32px` on mobile.
- **Spacing**: Use a consistent margin of `1.5rem` from the nearest navigation link.

### Favicon
- Use the simplified keyboard icon without text for the favicon.
- Provide `16x16`, `32x32`, and `180x180` (Apple Touch Icon) sizes.

### Safe Zone & Container
- In the navigation bar, the logo should have a horizontal padding of at least `1rem`.
- Background behind the logo must always be high-contrast (Cream `#FFF6EB` or Navy `#121856`).

---

## Color System (CSS Variables)

### Primary Brand Colors
Defined as CSS variables for consistent usage across the application.

```css
:root {
  --color-red: #E51537;
  --color-orange: #FE4A00;
  --color-cream: #FFF6EB; /* Main Background */
  --color-navy: #121856;  /* Dark Background */
}
```

### Functional UI Colors
Used for status, feedback, and interactive elements.

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Links/Buttons | `#1D57F6` | `--color-blue` |
| Success/Accent | `#DAFF02` | `--color-lime` |
| Info/Technical | `#00A1F1` | `--color-cyan` |
| Decorative | `#7F59E9` | `--color-purple` |

### Accessibility & Contrast
- **Text on Cream**: Use Navy `#121856` for body text to ensure WCAG AA compliance.
- **Buttons**: White text on Red/Orange/Blue must meet a 4.5:1 contrast ratio.
- **Interactive States**: Links and buttons must have a visible `:hover` and `:focus-visible` state.

---

## Typography

### Web Font: Geist
- **Primary Font**: Geist Sans
- **Fallback**: system-ui, sans-serif
- **Character**: Strict, geometric, tech-focused.

### Typography Scale (Responsive)

| Level | Size (Desktop) | Size (Mobile) | Weight | Line Height |
|-------|----------------|---------------|--------|-------------|
| H1 | `4.5rem` | `3rem` | 700 (Bold) | 1.1 |
| H2 | `3rem` | `2.25rem` | 600 (SemiBold) | 1.2 |
| H3 | `2rem` | `1.5rem` | 600 (SemiBold) | 1.3 |
| Body | `1.125rem` | `1rem` | 400 (Regular) | 1.5 |
| Small | `0.875rem` | `0.875rem` | 400 (Regular) | 1.4 |

### Formatting Rules
- **Headings**: Use `letter-spacing: -0.02em` for H1 and H2.
- **Body Text**: `line-height: 1.5` for optimal readability.
- **Links**: Always use `text-decoration: none` with a bottom border or color change on hover.

---

## Responsive Grid & Layout

### Breakpoints
The layout follows a mobile-first approach.

- **Mobile**: `< 640px` (4 Columns)
- **Tablet**: `640px - 1024px` (8 Columns)
- **Desktop**: `> 1024px` (12 Columns)

### Grid Parameters
- **Max Container Width**: `1280px`
- **Gutter**: `1.5rem` (24px)
- **Edge Padding**: `1rem` (16px) on Mobile, `2.5rem` (40px) on Desktop.

---

## UI Components & Interaction

### Buttons & Links
- **Primary Button**: Solid Red `#E51537` or Orange `#FE4A00` with white text. Rounded corners (`0.5rem`).
- **Secondary Button**: Outlined Navy `#121856` with transparent background.
- **Hover State**: Slightly lighten background color or add a subtle `box-shadow`.
- **Transitions**: Use `transition: all 0.2s ease-in-out` for all interactive elements.

### Tags (Capsules)
- **Format**: Rounded pill shape (`border-radius: 9999px`).
- **Interactive**: Tags can be clickable (filters). Show a background fill on hover.
- **Styling**: `1px` stroke, font size `0.875rem`.

---

## Digital Assets & Media

### 3D Graphic Objects
- **Format**: Use **WebP** or **AVIF** for high-quality compression.
- **Performance**: Always use `loading="lazy"` for assets below the fold.
- **Styling**: Glossy plastic, reflective surfaces, and partially transparent elements.
- **Usage**: Limit to one major 3D accent per viewport to maintain performance and visual focus.

### Photo Usage
- **Aspect Ratios**: Standardize on `16/9`, `4/3`, or `1/1` using CSS `aspect-ratio`.
- **Containers**: All photos must have `border-radius: 1rem` and `overflow: hidden`.
- **Overlay**: Avoid placing text directly on complex photos. Use a semi-transparent overlay if necessary.

---

## Page Patterns

### Hero Section
- Large H1 heading left-aligned or centered.
- 3D accent object positioned to the right (desktop) or below text (mobile).
- Primary CTA button prominent.

### Content Cards
- Background: White or Cream `#FFF6EB`.
- Shadow: Subtle `0 4px 6px -1px rgb(0 0 0 / 0.1)`.
- Hover: Elevate card with `transform: translateY(-4px)`.

---

## Quick Reference

### Do
- Use **rem/em** units for spacing and typography.
- Implement **SVG** for all logo and icon assets.
- Follow the **mobile-first** responsive grid.
- Ensure **WCAG AA** contrast for all text.
- Use **CSS variables** for brand colors.
- Maintain **hover and focus states** for interactivity.

### Don't
- Use fixed pixel widths for large containers.
- Place text directly on photos without an overlay.
- Use low-resolution `PNG/JPG` for UI icons.
- Forget about **mobile viewport** testing.
- Overuse 3D assets (keep it to one per view).
- Mix different **border-radius** values (stick to `0.5rem` for buttons, `1rem` for cards).
