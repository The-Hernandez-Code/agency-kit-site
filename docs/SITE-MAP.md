# Site map and component map

This document maps the active routes and their primary components so PR reviewers can quickly confirm scope.

## Route map

### `/` (home)
- **Entry**: `app/page.tsx`
- **Sections in order**:
  - `components/landing/HeroSection.tsx` (full-bleed hero; matches agency-kit layout)
  - `components/landing/CaseStudiesSection.tsx`
  - `components/landing/ProcessSection.tsx`
  - `components/landing/TestimonialSection.tsx`
  - `components/landing/ContactSection.tsx` (anchor `id="work-with-us"` for footer CTA)
- **Note**: `components/landing/FAQSection.tsx` exists but is not mounted on the home page (agency-kit parity).
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
- `lib/metadata.ts` - site and route metadata config for the Centurion brand.
- `data/caseStudies.ts` - case study and testimonial content used by hero marquee, case studies, testimonials, and contact panel.

## Key environment variables

Used by `lib/contact.ts` and safe for preview deployments:

- `NEXT_PUBLIC_CALCOM_URL`
- `NEXT_PUBLIC_CONTACT_EMAIL`
- `NEXT_PUBLIC_CONTACT_EMAIL_SUBJECT`
- `NEXT_PUBLIC_CONTACT_EMAIL_BODY`
