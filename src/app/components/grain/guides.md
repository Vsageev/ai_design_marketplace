# Grain — Texture Specimen Catalog

## Purpose
A standalone grain texture toolkit showcasing four distinct noise-generation algorithms: film grain (canvas pixel noise), digital dither (ordered Bayer matrix), halftone dot (radial threshold pattern), and organic stipple (Poisson-disk-inspired scatter). Each technique is rendered in its own specimen panel with shared controls for density, scale, and animation.

## Key Techniques
- **Film grain**: Per-pixel `Math.random()` luminance via Canvas `putImageData`, isolated as a pure texture layer.
- **Digital dither**: Bayer 8x8 ordered dithering matrix applied to a gradient, producing the characteristic cross-hatch pattern of early digital imaging.
- **Halftone dot**: Circular threshold patterns at configurable LPI (lines per inch), simulating CMYK print reproduction.
- **Organic stipple**: Poisson-disk-distributed dots with jittered radius, producing an illustration-style hand-stippled texture.
- **SVG filter grain**: `feTurbulence` + `feDisplacementMap` for GPU-accelerated static grain that requires no JavaScript.

## Usage
- Apply any grain type as a full-viewport overlay for atmospheric texture.
- Layer multiple grain types for complex analog effects.
- Use the SVG filter approach for static, zero-JS grain on server-rendered pages.
- Combine with `mix-blend-mode` and `opacity` for subtle or dramatic results.

## Accessibility
- All grain animations respect `prefers-reduced-motion` by freezing the canvas render loop.
- Grain is applied via `pointer-events: none` overlays, never blocking interaction.
- Text contrast is preserved through blend-mode compositing rather than opacity stacking.

## Customization
- `density`: Controls grain opacity/coverage (5%–50%).
- `scale`: Particle or dot size (1px–8px).
- `speed`: Animation frame rate for film grain (0 = static, 4–30 fps).
- `theme`: Darkroom (black bg, white grain), Lightroom (white bg, dark grain), Warm (sepia tones).
- `blendMode`: multiply, screen, overlay, soft-light.
