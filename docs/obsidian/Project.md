---
project: khsystems-org
type: overview
status: active
last_updated: 2026-08-22
tags: [project/khsystems-org]
---

# King Health Systems, Inc. — Website

## What it is

A modern rebuild of the public website for **King Health Systems, Inc.**, a
mental health services provider operating in Baltimore and Laurel, Maryland
(services include psychiatric rehabilitation, individual/group/family
therapy, medication management, psychosocial assessment, and community
resource linkages). The previous site was a WordPress install; its full
export is preserved read-only under `legacy-export/` as a content reference
and is not served by the app.

This is a marketing/informational site with contact and referral forms — it
is **not** the clinical/patient-facing PRP system (that would be a separate
project, e.g. `khs-prp-system`, if it exists). No connection between the two
codebases was found during this audit.

## Stack

- **Framework**: Next.js 16 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS v4, shadcn/ui (`components.json`), `@base-ui/react`
- **Forms**: react-hook-form + zod validation, submitted via Next.js Server Actions
- **Email**: [Resend](https://resend.com) (`src/lib/email.ts`) — gated behind `RESEND_API_KEY`
- **i18n**: next-intl (EN/ES), cookie-based locale switching
- **Animation**: `motion` (Framer Motion successor)
- **Analytics**: `@vercel/analytics`
- **Deployment target**: Vercel (custom domain `khsystems.org` documented in README)
- **Package manager**: npm (`package-lock.json` present)

## Purpose

Give King Health Systems a modern, accessible, bilingual public website that:
- Presents services, staff, locations, and resources
- Consolidates prior duplicate referral pages into a single `/referrals` flow
- Collects Contact, Careers, Appointments, Satisfaction Survey, and Referral
  submissions and emails them to staff via Resend

## Scope notes / intentional omissions from this documentation set

This project has **no database, no backend service, no authentication, and
no payments** — content is static/typed TypeScript data under
`src/lib/content/`, and the only "backend" behavior is Next.js Server
Actions sending email through Resend. Accordingly this knowledge base omits
`Database.md`, `Backend.md`, `Security.md` (beyond what's noted here), and
`Payments.md` as not applicable.

See also: [[Architecture]], [[Features]], [[Decisions]], [[Tasks]], [[Changelog]]
