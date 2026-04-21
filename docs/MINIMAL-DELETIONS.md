# Minimal deletion list (noise reduction)

This list is intentionally conservative: remove only what is now clearly redundant after the homepage rewrite.

## Phase 1 (safe deletions now)

1. `components/landing/TestimonialSection.tsx`
   - No longer imported by `app/page.tsx`.
   - Large legacy content and animation logic.

2. `data/caseStudies.ts` (optional in same PR if you do not plan to reuse)
   - Home no longer depends on this dataset.
   - Keep only if you plan to rebuild case studies later.

3. Legacy carousel/image helpers only if `data/caseStudies.ts` is removed:
   - `components/custom/ImageCarousel.tsx`
   - Any related unused imports/usages surfaced by `rg "ImageCarousel|caseStudies"`.

## Phase 2 (next cleanup PR)

1. Simplify `/about` page to match new consulting positioning:
   - `app/about/page.tsx` currently contains old placeholder copy and remote imagery.

2. Simplify `/blog` listing:
   - Migrate `app/blog/page.tsx` to read from `content/*.mdx` (same source as `/blog/[slug]`).
   - Remove duplicated static in-file blog array.

3. Replace remote template images in nav/footer/about/blog where not needed.

## Why this is "minimal"

- Keeps all routes working for Vercel previews.
- Avoids broad refactors while the template messaging is being repositioned.
- Preserves optional blog route and animation helpers until dedicated cleanup.
