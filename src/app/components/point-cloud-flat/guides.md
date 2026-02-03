# 3D Dots - Interactive Point Cloud

## Purpose
A GPU-inspired interactive point cloud rendered entirely with CSS and vanilla JS. Thousands of particles form organic shapes, react to the cursor with repulsion physics, and morph between geometric formations.

## Key Techniques
- **BufferGeometry simulation**: Positions stored as flat arrays, batch-rendered as absolute-positioned elements with border-radius.
- **Soft particles**: Radial opacity falloff via CSS radial-gradient and box-shadow glow for additive blending feel.
- **Repulsion effect**: On pointer move, particles within a radius are pushed away using inverse-square force: `offset = direction * (force / distance^2)`.
- **Morphing**: Particles interpolate between two position sets (sphere and grid) using `mix(posA, posB, progress)`.

## Usage
- Use as a hero background, loading state, or immersive section divider.
- Keep particle count between 800-2000 for smooth 60fps on most devices.
- Disable animation on `prefers-reduced-motion`.

## Accessibility
- Particles are purely decorative; wrap in `aria-hidden="true"`.
- Provide reduced-motion fallback that shows a static arrangement.

## Customization
- Tune `--dot-color`, `--dot-glow`, and `--dot-size` to match theme.
- Adjust `PARTICLE_COUNT`, `REPULSION_RADIUS`, and `REPULSION_FORCE` constants.
- Change morph targets by modifying the position generator functions.
