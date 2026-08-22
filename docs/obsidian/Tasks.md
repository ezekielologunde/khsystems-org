---
project: khsystems-org
type: tasks
status: active
last_updated: 2026-08-22
tags: [project/khsystems-org]
---

# Tasks

See also: [[Project]], [[Features]], [[Decisions]]

No `TODO`/`FIXME`/`XXX` markers were found in `src/`. The following gaps are
called out explicitly in the README and current code state.

## Outstanding

- **Configure Resend in production**: add `RESEND_API_KEY` (and optionally
  `RESEND_FROM_EMAIL`) to Vercel project settings and redeploy — until then,
  all 5 forms show a fallback "not connected" message instead of sending
  email.
- **Clinical review of medication side-effects content**
  (`/medication-side-effects`): every entry needs sign-off from KHS clinical
  staff before being treated as an authoritative patient resource.
- **Confirm/update Privacy Policy effective date**: currently carried over
  as "February 2005" from the original notice — almost certainly stale.
- **Confirm current careers position list**: `/careers` dropdown uses
  placeholder position categories.
- **Translate remaining interior pages to Spanish**: About, individual
  service pages, Resources, legal text, and form field labels are still
  English-only; mechanical follow-up using the existing
  `useTranslations`/`getTranslations` pattern.
- **Point `khsystems.org` at the deployment**: add the custom domain in
  Vercel project settings and update DNS at the registrar (not yet
  confirmed done from the repo alone).
- **Consider path-based i18n routing** if per-request rendering cost becomes
  a problem at scale (see [[Decisions]]).
- **Evaluate a headless CMS** (e.g. Sanity) if KHS staff need to edit
  content without a developer — needs client-provided API credentials.
