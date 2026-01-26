# Design Marketplace

A Next.js application for browsing and comparing design systems. Each design system includes comprehensive guidelines and a live preview showcase.

## Project Structure

```
src/
├── app/
│   ├── page.tsx                    # Homepage with design cards
│   ├── layout.tsx                  # Root layout
│   ├── globals.css                 # Global styles
│   └── designs/
│       └── [design-name]/
│           ├── page.tsx            # Full showcase page
│           ├── layout.tsx          # Design page layout (reads guidelines.md)
│           ├── guidelines.md       # Design system documentation
│           └── preview.tsx         # Preview component + metadata for homepage
└── components/
    ├── DesignPageLayout.tsx        # Shared layout for design pages
    └── ShowcaseSections.tsx        # Reusable showcase UI components
```

## Adding a New Design

1. Create a new folder under `src/app/designs/[design-name]/`

2. Add required files:
   - `guidelines.md` - Design system documentation (colors, typography, components, etc.)
   - `page.tsx` - Full showcase page with all design elements
   - `layout.tsx` - Page layout that reads the guidelines
   - `preview.tsx` - Exports `metadata` object and `PreviewComponent` for the homepage

3. Register the design in `src/app/page.tsx`:
   ```tsx
   import {
     metadata as newDesignMeta,
     PreviewComponent as NewDesignPreview,
   } from './designs/new-design/preview';

   const designs = [
     // ... existing designs
     {
       ...newDesignMeta,
       PreviewComponent: NewDesignPreview,
     },
   ];
   ```

## Preview Component Format

Each design's `preview.tsx` should export:

```tsx
// Design metadata
export const metadata = {
  id: 'design-slug',
  name: 'Design Name',
  description: 'Brief description of the design system.',
  tags: ['Tag1', 'Tag2', 'Tag3'],
};

// Preview component with real HTML/CSS following the guidelines
export function PreviewComponent() {
  return (
    <>
      <style>{/* CSS based on guidelines.md */}</style>
      <div className="preview">
        {/* Mini showcase with actual styled elements */}
      </div>
    </>
  );
}
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to browse design systems.

## Available Designs

- **Cheerful Minimalism** - Clean interfaces with joyful feedback animations
- **Neo Brutalist** - Raw aesthetics, bold typography, and hard shadows
