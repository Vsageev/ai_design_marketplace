# Component Creation Guide

## Add a new component

- **Example implementation**: `src/app/components/point-cloud-flat/`

### File structure

Each component lives in `src/app/components/<component-slug>/` (kebab-case) with 4 files:

```
src/app/components/<component-slug>/
  guides.md       # Purpose, usage notes, accessibility, customization
  layout.tsx      # Server layout — reads guides.md, wraps with DesignPageLayout
  page.tsx        # 'use client' — interactive demos + parameter widgets only (no educational prose)
  preview.tsx     # Exports metadata object + PreviewComponent for the listing page
```

### File details

**`guides.md`** — Short documentation: purpose, usage, accessibility, customization knobs.

**`layout.tsx`** — Reads `guides.md` at build time and wraps children with `DesignPageLayout`:
```tsx
import fs from 'fs';
import path from 'path';
import { DesignPageLayout } from '@/components/DesignPageLayout';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const filePath = path.join(process.cwd(), 'src/app/components/<component-slug>/guides.md');
  let markdown = '';
  try {
    markdown = fs.readFileSync(filePath, 'utf-8');
  } catch {
    markdown = '# Guides not found';
  }
  return (
    <DesignPageLayout title="Component Name" markdown={markdown}>
      {children}
    </DesignPageLayout>
  );
}
```

**`preview.tsx`** — Must export `metadata` and `PreviewComponent`:
```tsx
export const metadata = {
  id: '<component-slug>',   // Must match folder name
  name: 'Component Name',
  description: 'One-sentence description.',
  tags: ['Component', 'Tag2', 'Tag3'],
};

export function PreviewComponent() {
  // ~200px tall static preview with scoped CSS (unique class prefix)
}
```
- Use a unique CSS class prefix (e.g. `.pcf-preview-*`) to avoid conflicts on the listing page
- The preview should visually represent what the actual component looks like

**`page.tsx`** — The demo page. Must use `'use client'` directive. Should contain:
- **Controls/parameters at the top** — always place parameter widgets (sliders, toggles, buttons) above the demo areas so the user can tweak settings before scrolling through demos
- One or more live interactive demos of the component below the controls
- Variant demos showing different configurations
- No educational prose, marketing copy, hero text, or long descriptions — just the controls and demos

### Checklist

- [ ] Create `src/app/components/<component-slug>/` (kebab-case)
- [ ] Add files: `guides.md`, `layout.tsx`, `page.tsx`, `preview.tsx`
- [ ] Ensure `preview.tsx` exports `metadata` + `PreviewComponent` and `metadata.id === <component-slug>`
- [ ] Ensure `page.tsx` uses `'use client'` and contains only demos + interactive widgets
- [ ] Register the component in `src/app/components/page.tsx` (import from `./<component-slug>/preview` and append to `components` array)
