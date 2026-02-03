# Technical Editorial Design Guidelines

## Philosophy
"Technical Editorial" bridges the gap between high-end print typography and raw command-line utility. It treats software interfaces with the same typographic rigor as a fashion magazine, while exposing the "blueprint" of the underlying technology.

## Core Principles
1.  **High-Low Tension**: Juxtapose massive, elegant serif headings against dense, microscopic monospace data.
2.  **Blueprint Structure**: Use grid lines, corner brackets ("L"), and coordinate markers instead of boxes and shadows.
3.  **Agentic Presence**: Visualize system activity through cursors, floating labels, and "live" indicators, not robots or illustrations.
4.  **Data Density**: Use stippling, dots, and dense text blocks to convey complexity without visual clutter.
5.  **Radical Whitespace**: Allow content to breathe. Use negative space to create authority and focus.

## Colors
-   **Surface**: `#FFFFFF` (Pure Paper) or `#F4F4F0` (Newsprint)
-   **Ink**: `#111111` (Rich Black)
-   **Blueprint Lines**: `#E5E5E5` (Structural Gray)
-   **Technical Accent**: `#0044FF` (Hyperlink Blue) or `#FF3300` (Alert Red) - keep minimal.
-   **Cursor/Terminal**: `#000000` or the Accent.

## Typography
-   **Headings**: `Playfair Display`, `Times New Roman`, or similar high-contrast Serif. Large scale.
-   **Body/UI**: `JetBrains Mono`, `DM Mono`, `Courier New`, or similar Monospace. Small scale (12px-14px).
-   **Styling**:
    -   Headings: Tight tracking, high contrast.
    -   Mono: Uppercase labels, wide tracking.

## Components

### Layout
-   **Grid**: Background "+" pattern or subtle ruled lines.
-   **Containers**: No background fills for cards. Define areas with corner brackets or single lines.
-   **Spacing**: 2x standard padding.

### Buttons
-   **Primary**: Text-only with a terminal cursor. e.g., `[ Book a call ]` or `Run Process_`
-   **Secondary**: Simple underline or brackets. `[ Cancel ]`

### Visuals
-   **Stippling**: Use CSS radial gradients to create dot patterns.
-   **Cursors**: Arrow cursors with name tags (e.g., "Agent: Prama").
-   **Coordinates**: Absolute positioned numbers (e.g., `x: 024 y: 881`) on edges.
