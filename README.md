# King Health Systems, Inc. - Website

Modern Next.js rebuild of the King Health Systems, Inc. website (mental health
services in Baltimore and Laurel, Maryland). Built with Next.js (App Router),
TypeScript, Tailwind CSS, and shadcn/ui.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `src/app` - routes (pages), one folder per page. See `src/app/sitemap.ts`
  for the full route list.
- `src/components/layout` - Header, Footer, MegaMenu, MobileNav, Container, Section
- `src/components/sections` - reusable page building blocks (PageHero, FadeIn, ServiceCard, ...)
- `src/components/forms` - the site's 5 forms (Contact, Careers, Appointments, Satisfaction Survey, Referrals)
- `src/lib/content` - typed content data (company info, services, resources, medications, privacy policy)
- `src/lib/validations` - zod schemas per form
- `src/lib/actions` - Next.js Server Actions that handle form submissions
- `src/lib/email.ts` - Resend wrapper used by all forms
- `legacy-export/` - the original WordPress site export, kept only as a
  content reference. Not served by the app.

## Content notes / follow-ups for King Health Systems staff

- **Referrals consolidation**: the old site had ~5 separate/duplicate referral
  pages (OMHC Referral Form, PRP Referral Form, Referral Intake, Referral, New
  Client, plus an `OMHC_form_AmyWest.php` variant). These were intentionally
  consolidated into one `/referrals` page with a "program requested" field.
- **Medication side effects** (`/medication-side-effects`): the summaries on
  this page were freshly authored for this rebuild from general public
  medical knowledge - they are **not** sourced from the original KHS patient
  handout PDFs (those live on the old WordPress install and weren't available
  during migration). Clinical staff should review every entry before treating
  this page as an authoritative patient resource.
- **Privacy Policy effective date**: carried over as "February 2005" from the
  original notice. This is almost certainly stale and should be confirmed or
  updated by KHS compliance staff.
- **Careers position list**: the dropdown on `/careers` uses placeholder
  position categories - confirm the current list of open positions.

## Email delivery (forms)

All 5 forms (Contact, Careers, Appointments, Satisfaction Survey, Referrals)
submit via Next.js Server Actions to `src/lib/email.ts`, which sends through
[Resend](https://resend.com). Until `RESEND_API_KEY` is configured, form
submissions are still validated and logged server-side, and the UI shows an
honest "not fully connected yet, please call/email us directly" message
instead of a false success or a hard failure.

**To enable live email delivery:**

1. Create a Resend account and verify a sending domain.
2. Add `RESEND_API_KEY` (and optionally `RESEND_FROM_EMAIL`) as environment
   variables in the Vercel project settings.
3. Redeploy.

## Custom domain

To point `khsystems.org` at this deployment, add the domain in the Vercel
project's Domains settings and update DNS at your registrar per Vercel's
instructions.

## Spanish language support

A cookie-based language switcher (EN/ES, top-right of the header) is wired up
via [next-intl](https://next-intl.dev) - see `messages/en.json`,
`messages/es.json`, `src/i18n/`, and `src/lib/actions/locale.ts`.

**Scope of this pass**: the site chrome (header nav, footer group titles,
legal links) and the entire Home page are fully bilingual. Deep interior page
content (About, individual service pages, Resources, legal text, form field
labels) is still English-only - translating those is mechanical follow-up
work using the same `useTranslations`/`getTranslations` pattern, just not
done yet given the size of the site. The real client testimonial and company
mission statement are intentionally left untranslated rather than
paraphrased, to avoid misrepresenting a client's own words or legally-toned
copy.

**Known tradeoff**: because locale is read from a cookie (not the URL path),
every route had to opt out of static generation - Next.js now server-renders
every page on each request rather than serving pre-built static HTML. This
keeps the implementation simple (no duplicated `/es/...` route tree, no
doubled sitemap) but is worth revisiting if traffic grows enough that
per-request rendering cost matters; the standard fix would be to move to
path-based locale routing (`/en/...`, `/es/...`) via next-intl's routing
middleware.

## Content management

There's no CMS yet - all copy lives in typed files under `src/lib/content/`.
If KHS staff want to edit services, resources, or FAQ content without a
developer, wiring in a headless CMS (e.g. Sanity) is a natural next step -
it needs a live account with API credentials that only the client can create.

## Analytics

[Vercel Analytics](https://vercel.com/analytics) is enabled (`@vercel/analytics`
in `src/app/layout.tsx`) - traffic data appears automatically in the Vercel
project dashboard, no additional setup required.
