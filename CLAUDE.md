# Agents Guide (Design Marketplace)

## Add a new design (short)

- **Canonical structure docs**: `guideline_to_page_prompt.md` (page sections order + file skeleton)
- **Example implementation**: `src/app/designs/minimalist-black/`

### Checklist

- [ ] Create `src/app/designs/<design-slug>/` (kebab-case)
- [ ] Add files: `guidelines.md`, `layout.tsx`, `page.tsx`, `preview.tsx`
- [ ] Ensure `preview.tsx` exports `metadata` + `PreviewComponent` and `metadata.id === <design-slug>`
- [ ] Register the design in `src/app/page.tsx` (import from `./designs/<design-slug>/preview` and append to `designs`)

# Project Rules

## Language

- Always use English for all text content in the codebase
- All UI text, labels, buttons, messages, and placeholder text must be in English
- Code comments and documentation should be in English
