# AGENTS playbook

This file defines how coding agents should operate in this repository for demo-safe, preview-first delivery.

## Primary objective

Treat this project as a personal consulting studio template for:
- Power Platform delivery
- Microsoft 365 Copilot adoption
- Automation engagements

All changes should preserve fast iteration through Vercel PR previews.

## Non-negotiable rules

1. **Preview-safe by default**
   - Do not require secret env vars for the app to render.
   - Always provide sane fallback values for non-sensitive public config.

2. **Small, focused PRs**
   - Prefer single-purpose edits over broad refactors.
   - Keep route behavior stable unless explicitly requested.

3. **Build must pass**
   - Run `npm run build` before finalizing.
   - If a change breaks build, fix it in the same PR.

4. **Keep contact flows configurable**
   - Use `lib/contact.ts` for Cal.com/email links.
   - Never hardcode personal booking/email links directly in UI components.

## Content guidelines

1. Positioning should stay aligned to:
   - Power Platform
   - M365 Copilot
   - Practical automation outcomes

2. Prefer plain language over agency buzzwords.
3. Optimize copy for discovery-call conversion.

## Code hygiene expectations

1. Remove obvious dead code when touching related areas.
2. Document structural changes in `docs/SITE-MAP.md`.
3. Record safe cleanup candidates in `docs/MINIMAL-DELETIONS.md`.
4. Follow `docs/PR-WORKFLOW.md` for validation and PR checklist.

## Environment variables (public)

- `NEXT_PUBLIC_CALCOM_URL`
- `NEXT_PUBLIC_CONTACT_EMAIL`
- `NEXT_PUBLIC_CONTACT_EMAIL_SUBJECT`
- `NEXT_PUBLIC_CONTACT_EMAIL_BODY`

These vars should influence links/UX but should not block rendering if absent.
