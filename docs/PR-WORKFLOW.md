# PR workflow for Vercel preview demos

This repo is optimized for fast, reviewable PR previews. Use these rules for every change.

## Branch and PR conventions

1. One focused change per branch/PR.
2. Keep PRs small enough to review in one pass.
3. Include before/after screenshots for visual sections when possible.

## Required checks before opening/updating PR

Run locally:

```bash
npm install
npm run build
```

If build fails, do not open/update the PR until fixed.

## Preview-first validation

For each PR preview URL, verify:

1. Home route (`/`) renders and primary CTAs work.
2. Navigation links resolve (`/`, `/about`, `/blog`).
3. Contact links work:
   - Cal.com link from env config
   - mailto link with subject/body
4. No obvious layout regressions on mobile and desktop breakpoints.

## Content/editing rules for demos

1. Prefer env-driven config over hardcoded personal values.
2. Keep demo-safe fallbacks so previews are never blocked by missing env vars.
3. Avoid introducing dependencies unless required for the change.

## Suggested PR description template

```md
## What changed
- ...

## Why
- ...

## Preview validation
- [ ] `/` loads and matches intended messaging
- [ ] CTA links (Cal.com + email) behave correctly
- [ ] `/about` and `/blog` reachable from nav
- [ ] `npm run build` passes

## Follow-ups
- ...
```

