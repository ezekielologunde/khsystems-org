---
project: khsystems-org
type: architecture
status: active
last_updated: 2026-08-22
tags: [project/khsystems-org]
---

# Architecture

See also: [[Project]], [[Features]]

## Directory structure

- `src/app/` — one route folder per page (App Router). Route folders include:
  `about`, `accessibility`, `appointments`, `calendar`, `careers`,
  `community-engagement`, `contact`, `eligibility-and-payment`, `faq`,
  `locations`, `medication-side-effects`, `privacy-policy`, `referrals`,
  `resources`, `satisfaction-survey`, `services` (with 8 sub-pages: family
  therapy, group therapy, individual therapy, individualized treatment plan,
  medication management, psychiatric evaluation, psychiatric rehabilitation,
  psychosocial assessment, community resource linkages), `staff`,
  `testimonials`, `transit-assistance`. Full route list is generated in
  `src/app/sitemap.ts`.
- `src/components/layout/` — Header, Footer, MegaMenu, MobileNav, Container, Section
- `src/components/sections/` — reusable building blocks (PageHero, FadeIn, ServiceCard, ...)
- `src/components/forms/` — the site's 5 forms (Contact, Careers, Appointments,
  Satisfaction Survey, Referrals)
- `src/components/ui/` — shadcn/ui primitives
- `src/lib/content/` — typed content data: company info, services, resources,
  medications, privacy policy text (this is the site's de facto CMS)
- `src/lib/validations/` — zod schemas, one per form
- `src/lib/actions/` — Next.js Server Actions handling form submissions and
  the locale-switch action
- `src/lib/email.ts` — Resend wrapper used by all 5 forms
- `src/i18n/` — next-intl configuration
- `messages/en.json`, `messages/es.json` — translation strings
- `legacy-export/` — read-only WordPress export, kept for content reference
  only; not imported into the build

## Data flow (forms)

1. User submits a form (client component, react-hook-form + zod resolver).
2. Form calls a Server Action in `src/lib/actions/`.
3. Server Action re-validates with the matching zod schema, then calls
   `src/lib/email.ts` to send via Resend.
4. If `RESEND_API_KEY` is unset, the action still validates/logs server-side
   and the UI shows an honest "not fully connected" message instead of a
   false success or a hard failure.

## Rendering / i18n architecture

Locale (EN/ES) is stored in a cookie and read server-side via next-intl, not
encoded in the URL path (no `/en/...` vs `/es/...` route split). This keeps
the route tree and sitemap simple but forces every route to opt out of
static generation — pages are server-rendered per-request rather than served
as pre-built static HTML. See [[Decisions]] for the tradeoff rationale and
the documented path-based-routing alternative.

## No database / backend service

There is no database, ORM, or persistent storage. All content is static
TypeScript data (`src/lib/content/`). The only server-side behavior beyond
rendering is the Resend email dispatch in Server Actions. There is no
authentication layer.
