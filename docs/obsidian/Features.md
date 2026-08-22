---
project: khsystems-org
type: features
status: active
last_updated: 2026-08-22
tags: [project/khsystems-org]
---

# Features

See also: [[Project]], [[Architecture]]

## Implemented

- **Full marketing site**: home, about, staff, locations, calendar,
  testimonials, FAQ, accessibility statement, transit assistance,
  eligibility-and-payment, privacy policy, resources, medication side effects
- **Services section**: 8 individual service pages (family therapy, group
  therapy, individual therapy, individualized treatment plan, medication
  management, psychiatric evaluation, psychiatric rehabilitation,
  psychosocial assessment)
- **5 forms** with zod validation, submitted via Server Actions and emailed
  through Resend: Contact, Careers, Appointments, Satisfaction Survey,
  Referrals
- **Referral consolidation**: ~5 legacy referral pages (OMHC Referral Form,
  PRP Referral Form, Referral Intake, Referral, New Client, plus an
  `OMHC_form_AmyWest.php` variant) consolidated into one `/referrals` page
  with a "program requested" field
- **Bilingual support (EN/ES)**: cookie-based switcher; site chrome (header
  nav, footer group titles, legal links) and the entire Home page are fully
  translated via next-intl
- **SEO / AI-crawler visibility**: structured data added sitewide (see
  `public/llms.txt`, most recent commit)
- **Graceful email degradation**: forms work end-to-end even without a
  configured `RESEND_API_KEY`, showing an honest fallback message

## Partial

- **Spanish translation**: only site chrome + Home page are translated;
  interior pages (About, individual service pages, Resources, legal text,
  form field labels) remain English-only
- **Medication side effects content** (`/medication-side-effects`): freshly
  authored from general public medical knowledge, not sourced from the
  original KHS patient handout PDFs — needs clinical staff review

## Planned / not started

- **CMS integration**: no CMS exists yet; content lives in typed files under
  `src/lib/content/`. README suggests a headless CMS (e.g. Sanity) as a
  natural next step, pending client-provided API credentials
- **Path-based i18n routing** (`/en/...`, `/es/...`): documented as the fix
  for the current per-request-rendering tradeoff, not yet implemented
- **Careers position list**: currently placeholder categories; needs KHS
  staff to confirm actual open positions
- **Privacy Policy effective date**: stale "February 2005" date carried from
  the original notice, needs confirmation/update
