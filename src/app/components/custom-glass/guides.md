# Custom Glass — Columnar Louvered Glass Panels

## Purpose
A columnar glass effect composed of individual vertical glass slats arranged side by side, each with an asymmetric gradient overlay and heavy backdrop blur. Unlike ribbed glass (which uses repeating-linear-gradient), custom glass renders discrete element-based columns that produce a pronounced 3D cylindrical convex appearance — similar to looking through architectural louvered glass partitions.

## Key Techniques
- **Element-based slats**: Individual `<div>` columns rather than a repeating gradient, allowing per-slat styling and future interactivity.
- **Asymmetric convex gradient**: `linear-gradient(90deg, white 0% → black ~80% → white 100%)` at low opacity with `background-blend-mode: overlay` simulates light wrapping around a convex glass cylinder.
- **Heavy backdrop-filter blur**: ~74px blur per slat creates deep diffusion, obscuring content behind while preserving ambient light and color bleed.
- **CSS custom properties**: Runtime control over slat count, blur intensity, gradient offset, slat gap, and tint color.

## Usage
- Use as a full-viewport privacy overlay that still lets ambient color and light through.
- Layer over imagery, video, or gradient backgrounds for architectural depth.
- Apply as card overlays, hero sections, or decorative partitions.
- Combine with colorful blobs behind to showcase light diffusion through the columns.

## Accessibility
- Text should not be placed directly behind the louvered glass — it is intended as a decorative/privacy overlay.
- Provide a solid-color fallback for browsers lacking `backdrop-filter` support.
- Respect `prefers-reduced-motion` by disabling caustic and shimmer animations.

## Customization
- `--cg-slat-count`: Number of vertical glass columns (8 – 60). More slats = finer texture.
- `--cg-blur`: Backdrop blur radius per slat (20px – 100px).
- `--cg-gradient-peak`: Position of the dark peak in the gradient (50% – 95%). Higher = more asymmetric convex look.
- `--cg-opacity`: Gradient overlay opacity (0.05 – 0.4).
- `--cg-gap`: Gap between slats in pixels (0 – 4px).
- `--cg-tint`: Base tint color for the glass surface.
