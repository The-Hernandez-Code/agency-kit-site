# Minimal deletion list (noise reduction)

This list is intentionally conservative: remove only what is now clearly redundant after the homepage rewrite.

## Phase 1 (completed in cleanup)

Deleted:

1. `components/landing/TestimonialSection.tsx`
2. `data/caseStudies.ts`
3. `components/custom/ImageCarousel.tsx`
4. `data/blogData.ts`

These files were no longer referenced after homepage and blog-list rewrites.

## Phase 2 (next cleanup PR)

1. Replace remaining template-era branding strings in metadata and social links:
   - `lib/metadata.ts`
   - `components/custom/Navbar.tsx`

2. Optional blog detail simplification:
   - `components/custom/AnimatedHeroSection.tsx`
   - `components/custom/AnimatedMainContent.tsx`
   - Keep if you want motion-heavy article pages.

3. Add more MDX posts to support richer preview demonstrations.

## Why this is "minimal"

- Keeps all routes working for Vercel previews.
- Avoids broad refactors while the template messaging is being repositioned.
- Preserves optional blog route and animation helpers until dedicated cleanup.
