# Design Guidelines to Page Generator Prompt

Use this prompt with an AI assistant to generate design showcase files from a design guidelines markdown file.

---

## Prompt

You are a React/Next.js developer. Your task is to create showcase files that demonstrate a design system defined in the provided guidelines markdown file.

**Input:** A design guidelines markdown file that describes colors, typography, spacing, components, and visual patterns.

**Output:** Two files:
1. `page.tsx` - Full showcase page with all design elements
2. `preview.tsx` - Compact preview component and metadata for the homepage

### Requirements

1. **Extract and apply** all design tokens from the guidelines:
   - Color palette (backgrounds, text, accents, semantic colors)
   - Typography (fonts, sizes, weights, line heights)
   - Spacing values
   - Border radii
   - Shadows
   - Animation/transition timings

2. **Generate these standard showcase sections** in `page.tsx` (in this order):

#### Section 1: Hero Header
- Page title using the largest heading style
- Brief tagline describing the design philosophy
- A primary CTA button demonstrating the main button style

#### Section 2: Color Palette
- Display all colors as swatches in a grid
- Group by category (base, accent, semantic)
- Show color name, hex value, and a visual swatch
- Apply the guidelines' card styling to the container

#### Section 3: Typography Scale
- Show each heading level (h1-h6) with sample text
- Display body text variations (large, regular, small, caption)
- Use the actual fonts specified in the guidelines
- Include a short paragraph demonstrating line-height and reading experience

#### Section 4: Buttons & Interactive Elements
- Primary button (default, hover state description)
- Secondary/outline button
- Success/confirmation button
- Disabled button state
- Link styling
- Apply any hover effects or animations from the guidelines

#### Section 5: Cards
- At least 3 cards in a row/grid
- Each card should contain:
  - A colored header area or icon placeholder
  - Title text
  - Description text
  - A secondary action button or link
- Apply the card hover effects from the guidelines (if specified)

#### Section 6: Form Elements
- Text input with label
- Text input with error state
- Checkbox or toggle
- Select dropdown (styled container)
- Submit button

#### Section 7: Feedback & Status
- Success message/alert
- Error message/alert
- Warning message/alert
- Info message/alert
- Progress bar (static, showing ~65% progress)

#### Section 8: Sample Content Layout
- A realistic content section combining:
  - A section header
  - 2-3 list items or data rows (like a feature flag list, task list, or similar)
  - Status indicators (active/inactive badges)
  - Action buttons

3. **Generate `preview.tsx`** with:
   - `metadata` object containing: id, name, description, tags
   - `PreviewComponent` function that renders a compact preview with real HTML/CSS
   - The preview should be ~200px tall and showcase key design elements (header, card, buttons, etc.)
   - Use unique CSS class prefixes to avoid conflicts (e.g., `.cm-preview-*` for cheerful-minimalism)

### File Structure

#### page.tsx

```tsx
import React from 'react';

// CSS with design tokens from guidelines
const cssStyles = `
  .showcase {
    /* Colors */
    --color-primary: #...;
    --color-secondary: #...;
    /* Typography */
    --font-primary: '...', sans-serif;
    /* Spacing, shadows, etc. */
  }

  /* Component styles */
  .btn-primary { ... }
  .card { ... }
  /* Hover states, animations */
`;

export default function DesignShowcase() {
  return (
    <>
      <style>{cssStyles}</style>
      <main className="showcase">
        {/* All showcase sections */}
      </main>
    </>
  );
}
```

#### preview.tsx

```tsx
import React from 'react';

export const metadata = {
  id: 'design-slug',
  name: 'Design Name',
  description: 'Brief description of the design system.',
  tags: ['Tag1', 'Tag2', 'Tag3'],
};

const previewStyles = `
  .prefix-preview {
    /* Scoped CSS based on guidelines */
    --color-primary: #...;
    font-family: '...', sans-serif;
    /* ... */
  }

  .prefix-preview-header { ... }
  .prefix-preview-card { ... }
  .prefix-preview-btn { ... }
`;

export function PreviewComponent() {
  return (
    <>
      <style>{previewStyles}</style>
      <div className="prefix-preview">
        {/* Compact preview: header, card, buttons, status indicator */}
      </div>
    </>
  );
}
```

### Styling Rules

1. **Use inline styles** via style objects OR scoped CSS classes in a `<style>` tag
2. **CSS custom properties** should be defined for reusability
3. **Hover states and animations**: Use CSS classes in a `<style>` tag
4. **Responsive**: Use relative units (rem, %) where the guidelines specify
5. **Faithfully reproduce** the exact values from the guidelines (colors, spacing, fonts)
6. **Use unique class prefixes** in preview.tsx to avoid CSS conflicts on the homepage

### Animation & Interaction Notes

- For hover effects that require CSS pseudo-selectors, include them in a `<style>` tag
- Name classes descriptively: `.btn-primary`, `.card-hover`, etc.
- Include any keyframe animations specified in the guidelines
- If guidelines mention "no scaling" or "no elevation movement", respect those constraints

### Output Format

Provide both complete, runnable TSX files. They should:
- Work as Next.js App Router components
- Require no additional dependencies beyond React
- Be self-contained with all styles included
- Include the guidelines' design philosophy as a visible subtitle or description

---

## Example Usage

1. Copy this prompt
2. Paste your design guidelines markdown file after it
3. Send to the AI assistant
4. Receive complete `page.tsx` and `preview.tsx` files
5. Place files in `src/app/designs/[design-name]/`
6. Add the design to `src/app/page.tsx` imports

---

## Guidelines File Placeholder

Paste your design guidelines markdown content below this line:

---

[PASTE GUIDELINES MARKDOWN HERE]
