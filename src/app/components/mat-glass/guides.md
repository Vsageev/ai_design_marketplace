# Mat Glass — Frosted Glassmorphism Panels

## Purpose
A collection of matte frosted-glass UI panels that layer blur, translucency, and soft diffusion to create depth without transparency gimmicks. Ideal for overlays, cards, modals, and floating toolbars over busy backgrounds.

## Key Techniques
- **Backdrop-filter stacking**: Multiple `backdrop-filter: blur()` values combined with `saturate()` and `brightness()` to achieve realistic frosted diffusion rather than simple blur.
- **Layered borders**: Inner border using `box-shadow: inset` combined with a semi-transparent `border` to simulate light refraction at panel edges.
- **Noise underlay**: Subtle SVG noise texture at very low opacity layered beneath the blur to mimic real etched/matte glass grain.
- **Variable frost density**: CSS custom properties (`--frost-blur`, `--frost-opacity`, `--frost-saturation`) allow runtime tweaking of glass heaviness.
- **Edge highlight**: A 1px top/left gradient border simulating overhead lighting hitting the glass edge.

## Usage
- Use as card containers over photographic or gradient backgrounds.
- Layer multiple panels at different frost intensities for visual hierarchy.
- Works as floating toolbars, notification toasts, or modal backdrops.

## Accessibility
- Ensure text contrast meets WCAG AA against the blurred background. The frosted overlay must darken or lighten enough to guarantee readability.
- Provide a solid-color fallback for browsers that don't support `backdrop-filter`.
- Respect `prefers-reduced-motion` by disabling hover transitions.

## Customization
- `--frost-blur`: Controls blur radius (8px – 40px). Higher = more opaque frost.
- `--frost-opacity`: Background layer opacity (0.3 – 0.85).
- `--frost-saturation`: Color saturation through the glass (100% – 200%).
- `--frost-tint`: Base tint color for the glass surface.
- `--frost-border`: Edge highlight intensity.
