# Site map and component map

This document maps the active routes and their primary components so PR reviewers can quickly confirm scope.

## Route map

### `/` (home)
- **Entry**: `app/page.tsx`
- **Sections in order**:
  - `components/landing/HeroSection.tsx` (includes CTA, logo strip, and delivery snapshot cards)
  - `components/landing/CaseStudiesSection.tsx` (now "Services")
  - `components/landing/ProcessSection.tsx`
  - `components/landing/FAQSection.tsx`
  - `components/landing/ContactSection.tsx`
- **Global chrome** (via `app/layout.tsx`):
  - `components/custom/Navbar.tsx`
  - `components/custom/Footer.tsx`

### `/about`
- **Layout**: `app/about/layout.tsx`
- **Page**: `app/about/page.tsx`
- **Notes**: currently still legacy "agency" style content and heavy GSAP animation.

### `/blog`
- **Layout**: `app/blog/layout.tsx`
- **Page**: `app/blog/page.tsx`
- **Notes**: uses in-file static blog list.

### `/blog/[slug]`
- **Page**: `app/blog/[slug]/page.tsx`
- **Content source**: `content/*.mdx` through `lib/blog.ts`
- **Rendering helpers**:
  - `components/custom/AnimatedHeroSection.tsx`
  - `components/custom/AnimatedMainContent.tsx`

## Shared data/config

- `lib/contact.ts` - env-driven contact links used across hero/navbar/footer/contact section.
- `lib/metadata.ts` - site and route metadata config (currently brand text is still from original template and should be updated in a follow-up PR).
- `data/caseStudies.ts` - currently used by the homepage hero for logo and delivery snapshot visuals.

## Key environment variables

Used by `lib/contact.ts` and safe for preview deployments:

- `NEXT_PUBLIC_CALCOM_URL`
- `NEXT_PUBLIC_CONTACT_EMAIL`
- `NEXT_PUBLIC_CONTACT_EMAIL_SUBJECT`
- `NEXT_PUBLIC_CONTACT_EMAIL_BODY`
