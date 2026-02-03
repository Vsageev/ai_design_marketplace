# Agents Guide (Design Marketplace)

## Add a new design (short)

- **Main instruction for new designs**: `guideline_to_page_prompt.md` (follow this first)
- **Example implementation**: `src/app/designs/minimalist-black/`

### Checklist

- [ ] Start by following `guideline_to_page_prompt.md` as the primary spec for new designs.
- [ ] Create `src/app/designs/<design-slug>/` (kebab-case)
- [ ] Add files: `guidelines.md`, `layout.tsx`, `page.tsx`, `preview.tsx`
- [ ] Ensure `preview.tsx` exports `metadata` + `PreviewComponent` and `metadata.id === <design-slug>`
- [ ] Register the design in `src/app/page.tsx` (import from `./designs/<design-slug>/preview` and append to `designs`)
- [ ] Include 1-2 unique hover effects (distinct from generic border/color changes). Use `cheerful-minimalism` as a reference for the level of novelty.
- [ ] Ensure the design has a clear signature motif system (2-4 repeated visual motifs) applied across sections and components.
- [ ] Increase hierarchy contrast (typography scale, weights, or font pairing) so the hero and headers read clearly at a glance.
- [ ] Use deliberate whitespace and section rhythm (larger gaps for major sections) to create calm and focus.
