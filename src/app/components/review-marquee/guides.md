# Review Marquee - Scrolling Testimonial Columns

## Purpose
A Framer-style review/testimonial wall component with multiple vertical columns that scroll continuously at different speeds. Hovering any column pauses it, creating a natural reading experience. Commonly used on landing pages and SaaS sites to display social proof.

## Key Techniques
- **CSS-only scroll**: Uses `@keyframes` with `translateY` to move columns infinitely. No JS animation loops needed.
- **Hover pause**: `animation-play-state: paused` on hover stops individual columns while others continue.
- **Duplicate content**: Each column renders its review cards twice to create a seamless loop — when the first set scrolls out, the duplicate takes its place.
- **Staggered speeds**: Each column has a different `animation-duration` to create organic, non-synchronized movement.

## Usage
- Drop into any landing page as a social proof section.
- Works best with 3-5 columns and 4-8 reviews per column.
- Reviews are defined as a static array — swap in real data from a CMS or API.

## Accessibility
- Columns are `aria-hidden="true"` on the duplicate set to avoid screen reader repetition.
- Respects `prefers-reduced-motion` by disabling scroll animation entirely.
- Review cards have semantic structure with `blockquote`, `cite`, and role attributes.

## Customization
- Adjust `--rm-col-count` to change number of visible columns.
- Modify `animation-duration` per column for speed tuning.
- Swap color variables (`--rm-bg`, `--rm-card`, `--rm-text`) for light/dark themes.
- Card border-radius, gap, and padding are all CSS variables for easy theming.
