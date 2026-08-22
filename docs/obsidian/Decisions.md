---
project: khsystems-org
type: decisions
status: active
last_updated: 2026-08-22
tags: [project/khsystems-org]
---

# Decisions

See also: [[Project]], [[Architecture]]

## Cookie-based locale instead of path-based routing

Locale (EN/ES) is read from a cookie rather than encoded in the URL
(`/en/...`, `/es/...`). This keeps the implementation simple — no duplicated
route tree, no doubled sitemap — at the cost of opting every route out of
static generation (all pages are server-rendered per request). Documented in
the README as worth revisiting if traffic grows enough that per-request
rendering cost matters, with path-based routing via next-intl's middleware
as the known fix.

## Referral pages consolidated into one form

The legacy WordPress site had ~5 separate/duplicate referral entry points
(OMHC Referral Form, PRP Referral Form, Referral Intake, Referral, New
Client, plus an `OMHC_form_AmyWest.php` variant). These were intentionally
merged into a single `/referrals` page with a "program requested" field,
rather than preserved as separate routes.

## Honest degradation when email isn't configured

Rather than either faking a success response or hard-failing when
`RESEND_API_KEY` is unset, forms still validate and log server-side and show
users an honest "not fully connected yet, call/email us directly" message.
This was a deliberate choice to avoid misleading site visitors during the
period before Resend is configured in production.

## Medication content authored fresh, not migrated

The `/medication-side-effects` page content was written from general public
medical knowledge for this rebuild rather than sourced from the original KHS
patient handout PDFs (which weren't available during migration). This is
flagged in the README as needing clinical review before being treated as
authoritative.

## Client testimonial and mission statement left untranslated

The real client testimonial and company mission statement are intentionally
kept English-only rather than translated/paraphrased into Spanish, to avoid
misrepresenting a client's own words or legally-toned copy.

## Legacy WordPress export kept as reference only

`legacy-export/` (the full old WordPress site export) is retained in the
repo for content-reference purposes but is explicitly excluded from the
served app — not routed, not imported, not built.

## No CMS (yet)

Content is typed TypeScript data under `src/lib/content/` rather than
sourced from a headless CMS. The README notes this as workable for now but
flags a CMS (e.g. Sanity) as the natural next step if KHS staff want to edit
content without a developer — blocked on the client providing live account
credentials.
