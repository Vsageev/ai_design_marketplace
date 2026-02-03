# Classic Shared — Dithered Spotlight Shader

## Purpose
A GPU-driven dithered/grainy shader that renders a procedural spotlight effect using WebGL. The component generates high-contrast pixel noise combined with a radial distance field, producing a classic halftone-like aesthetic. Mouse interactivity lets the spotlight follow the cursor for an engaging background treatment.

## Key Techniques
- **Procedural noise**: Uses `fract(sin(dot(...)))` to generate pseudo-random grain per pixel — no texture files needed.
- **Step dithering**: The `step()` function creates binary black/white patterns instead of smooth gradients, giving the classic dithered look.
- **Distance field spotlight**: A radial `distance()` calculation carves out a circular bright region.
- **Mouse tracking**: The `u_mouse` uniform shifts the spotlight center to follow the cursor in real time.

## Usage
Place behind hero sections, card backgrounds, or as a full-bleed atmospheric layer. The effect is purely decorative and GPU-accelerated — it won't block the main thread.

## Accessibility
- The canvas is decorative. Screen readers should skip it.
- Respect `prefers-reduced-motion` by pausing or slowing the grain animation.
- Avoid placing essential text directly over the shader without a readable contrast layer.

## Customization
- **Threshold**: Controls the dithering cutoff — lower values produce denser black areas.
- **Grain Speed**: How fast the noise pattern evolves over time.
- **Spotlight Radius**: Size of the bright circular region.
- **Mouse Influence**: How strongly the spotlight follows the cursor (0 = centered, 1 = fully tracks).
- **Invert**: Flips the dither pattern for a negative/inverted look.
- **Brightness**: Overall brightness offset applied after dithering.
