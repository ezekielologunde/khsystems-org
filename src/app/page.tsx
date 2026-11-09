import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/sections/fade-in";
import {
  accreditation,
  company,
  managedCareOrganizations,
  offices,
} from "@/lib/content/company";
import { clinicians } from "@/lib/content/clinicians";
import { publishedArticles } from "@/lib/content/learn";
import { allNews, formatNewsDate } from "@/lib/content/news";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: "Home",
  description:
    "King Health Systems, Inc. provides culturally sensitive, high-quality mental health services to children, adolescents, adults, and their families in Baltimore, Laurel, and Cockeysville, Maryland.",
};

/** Service photo cards. Photos are KHS's own, from the public site. */
const SERVICES = [
  {
    href: "/services/individual-therapy",
    title: "Individual therapy",
    blurb: "One-to-one sessions with a licensed therapist.",
    image: "/images/live/individual-therapy.jpg",
    alt: "A client and therapist talking in a calm, bright room",
  },
  {
    href: "/services/medication-management",
    title: "Medication management",
    blurb: "Psychiatric nurse practitioners who listen first.",
    image: "/images/live/medication-management.jpg",
    alt: "A clinician reviewing a care plan with a client",
  },
  {
    href: "/services/psychiatric-rehabilitation",
    title: "Psychiatric rehabilitation (PRP)",
    blurb: "Skills and support for daily life and recovery.",
    image: "/images/live/prp.jpg",
    alt: "People working together on recovery goals",
  },
  {
    href: "/services/family-therapy",
    title: "Family & group therapy",
    blurb: "Care for children, teens, couples, and families.",
    image: "/images/bento-family-therapy.jpg",
    alt: "A family together at sunset",
  },
] as const;

const QUICK_LINKS = [
  { href: "/insurance-check", title: "Do you take my insurance?", body: "Pick your Maryland Medicaid plan and see." },
  { href: "/find-your-service", title: "Which service fits me?", body: "Two questions to point you the right way." },
  { href: "/first-visit", title: "Your first visit", body: "What happens, and what to bring." },
] as const;

const STEPS = [
  {
    title: "Call or request a visit",
    body: "Phone us or use the online form. Referrals are welcome. We reply without delay.",
  },
  {
    title: "Meet your clinician",
    body: "A licensed clinician completes your assessment and builds your Individualized Treatment Plan with you.",
  },
  {
    title: "Start care your way",
    body: "In one of our three offices, at home, or by telehealth, Monday through Friday.",
  },
] as const;

const FEATURED_TEAM = clinicians.filter((c) => c.photo).slice(0, 4);

export default async function HomePage() {
  const t = await getTranslations("home");
  const tNav = await getTranslations("nav");

  const latestNews = allNews.slice(0, 2);
  const latestArticles = publishedArticles.slice(0, 2);

  return (
    <>
      {/* Hero: who it is for, what it accepts, how to reach us, in one screen */}
      <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
        <Container className="grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:py-20">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-accent-yellow px-4 py-1.5 text-sm font-bold text-accent-yellow-foreground">
              <ShieldCheck className="size-4" aria-hidden />
              Maryland Medicaid accepted
            </p>
            <h1 className="mt-5 max-w-2xl font-heading text-[2.5rem] leading-[1.05] font-bold tracking-tight text-balance sm:text-6xl">
              {t("heroTitlePrefix")} {t("heroTitleHighlight")} {t("heroTitleSuffix")}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-secondary-foreground/85 sm:text-xl">
              Outpatient therapy, psychiatry, and rehabilitation for children, teens, adults,
              and families. In Baltimore, Laurel, and Cockeysville, or by telehealth.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                render={<Link href="/appointments" />}
                size="lg"
                className="min-h-14 bg-accent-yellow px-8 text-base font-bold text-accent-yellow-foreground hover:bg-accent-yellow/90"
              >
                <CalendarCheck className="size-5" aria-hidden />
                {tNav("requestAppointment")}
              </Button>
              <Button
                render={<a href={company.phoneHref} />}
                size="lg"
                variant="outline"
                className="min-h-14 border-white/40 bg-transparent px-8 text-base font-bold text-white hover:bg-white/10 hover:text-white"
              >
                <Phone className="size-5" aria-hidden />
                Call {company.phone}
              </Button>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-secondary-foreground/85">
              <li className="flex items-center gap-2">
                <Clock className="size-4 text-accent-yellow" aria-hidden />
                {company.hours}
              </li>
              <li className="flex items-center gap-2">
                <BadgeCheck className="size-4 text-accent-yellow" aria-hidden />
                CARF-accredited
              </li>
              <li className="flex items-center gap-2">
                <Video className="size-4 text-accent-yellow" aria-hidden />
                Telehealth available
              </li>
            </ul>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-soft-lg lg:aspect-[5/6]">
            <Image
              src="/images/hero-family.jpg"
              alt="A family sitting together outdoors, supporting one another"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </Container>

        {/* Three offices, each one tap from a map or the locations page */}
        <div className="border-t border-white/15 bg-white/5">
          <Container className="grid gap-px py-0 sm:grid-cols-3">
            {offices.map((o) => (
              <Link
                key={o.id}
                href="/locations"
                className="group flex items-start gap-3 py-5 sm:px-5 sm:first:pl-0"
              >
                <MapPin className="mt-0.5 size-5 shrink-0 text-accent-yellow" aria-hidden />
                <span className="text-sm leading-snug">
                  <span className="block font-bold text-white group-hover:underline">
                    {o.city}, {o.state}
                  </span>
                  <span className="text-secondary-foreground/75">
                    {o.addressLines[o.addressLines.length - 1]}
                  </span>
                </span>
              </Link>
            ))}
          </Container>
        </div>
      </section>

      {/* Quick answers to the first questions visitors have */}
      <Section className="pb-0">
        <ul className="grid gap-4 md:grid-cols-3">
          {QUICK_LINKS.map((q) => (
            <li key={q.href}>
              <Link
                href={q.href}
                className="group flex h-full items-start justify-between gap-4 rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
              >
                <span>
                  <span className="block text-lg font-bold">{q.title}</span>
                  <span className="mt-1 block text-sm text-foreground/75">{q.body}</span>
                </span>
                <ArrowRight
                  className="mt-1 size-5 shrink-0 text-primary transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Services as photographs */}
      <Section>
        <FadeIn className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <h2 className="font-heading text-4xl font-bold leading-tight text-balance sm:text-5xl">
              {t("programsTitle")}
            </h2>
            <p className="mt-4 text-lg text-foreground/75">{t("programsDescription")}</p>
          </div>
          <Button render={<Link href="/services" />} variant="outline" className="shrink-0">
            {t("viewAllServices")}
          </Button>
        </FadeIn>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <FadeIn key={s.href} delay={i * 0.06}>
              <Link
                href={s.href}
                className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-muted"
              >
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="text-xl font-bold leading-tight">{s.title}</h3>
                  <p className="mt-1 text-sm text-white/85">{s.blurb}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold">
                    Learn more
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-1"
                      aria-hidden
                    />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Getting started + insurance, side by side */}
      <Section className="bg-muted">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <h2 className="font-heading text-4xl font-bold leading-tight text-balance sm:text-5xl">
              Getting started is simple
            </h2>
            <ol className="mt-8 space-y-6">
              {STEPS.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span
                    aria-hidden
                    className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-primary-foreground"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">{step.title}</h3>
                    <p className="mt-1 text-foreground/75">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Button render={<Link href="/appointments" />} size="lg" className="mt-8">
              {tNav("requestAppointment")}
            </Button>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-soft-lg">
              <Image
                src="/images/telehealth-video-call.jpg"
                alt="A person having a telehealth video visit from home"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <FadeIn>
            <h2 className="font-heading text-4xl font-bold leading-tight text-balance sm:text-5xl">
              {t("eligibilityHeadline")}
            </h2>
            <p className="mt-5 text-lg text-foreground/75">{t("eligibilityBody")}</p>
            <p className="mt-4 text-foreground/75">{accreditation.licensure}</p>
            <Button
              render={<Link href="/eligibility-and-payment" />}
              variant="outline"
              className="mt-6"
            >
              {t("viewInsuranceDetails")}
            </Button>
          </FadeIn>
          <FadeIn delay={0.1} className="rounded-3xl border border-border bg-card p-6 sm:p-8">
            <p className="text-sm font-bold text-muted-foreground">
              Accepted through these Maryland Medicaid plans
            </p>
            <ul className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {managedCareOrganizations.map((org) => (
                <li key={org} className="flex items-start gap-2 text-sm font-medium">
                  <BadgeCheck className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  {org}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-4 border-t border-border pt-5">
              <Image
                src="/images/live/carf-seals.png"
                alt="CARF accreditation seals"
                width={160}
                height={64}
                className="h-12 w-auto"
              />
              <p className="text-sm text-muted-foreground">{accreditation.carf}</p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Real clinicians, real faces */}
      <Section className="bg-accent-blue/40">
        <FadeIn className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <h2 className="font-heading text-4xl font-bold leading-tight text-balance sm:text-5xl">
              Meet some of our clinicians
            </h2>
            <p className="mt-4 text-lg text-foreground/75">
              Licensed therapists and psychiatric providers, not a call center.
            </p>
          </div>
          <Button render={<Link href="/team" />} variant="outline" className="shrink-0 bg-background">
            See the whole team
          </Button>
        </FadeIn>
        <ul className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {FEATURED_TEAM.map((c, i) => (
            <li key={c.name}>
              <FadeIn delay={i * 0.06}>
                <Link href="/team" className="group block">
                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
                    <Image
                      src={c.photo!}
                      alt={`Portrait of ${c.name}, ${c.credentials}`}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-3 font-bold group-hover:underline">{c.name}</p>
                  <p className="text-sm text-foreground/70">
                    {c.credentials}
                    {c.availability ? ` · ${c.availability}` : ""}
                  </p>
                </Link>
              </FadeIn>
            </li>
          ))}
        </ul>
      </Section>

      {/* Learn teaser */}
      {latestArticles.length + latestNews.length > 0 ? (
        <Section>
          <FadeIn className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-heading text-4xl font-bold leading-tight text-balance sm:text-5xl">
              Learn &amp; stay informed
            </h2>
            <Button render={<Link href="/learn" />} variant="outline" className="shrink-0">
              Articles, news &amp; check-ins
            </Button>
          </FadeIn>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {latestArticles.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/learn/${a.slug}`}
                  className="block h-full rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
                >
                  <p className="text-xs font-bold text-primary">Article</p>
                  <p className="mt-2 text-lg font-bold leading-snug">{a.title}</p>
                </Link>
              </li>
            ))}
            {latestNews.map((n) => (
              <li key={n.slug}>
                <Link
                  href={`/learn/news/${n.slug}`}
                  className="block h-full rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
                >
                  <p className="text-xs font-bold text-primary">
                    News &middot; {formatNewsDate(n.date)}
                  </p>
                  <p className="mt-2 text-lg font-bold leading-snug">{n.title}</p>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            In crisis? Call or text <strong>988</strong>. In an emergency, call <strong>911</strong>.
          </p>
        </Section>
      ) : null}

      {/* Closing call to action, photo-backed */}
      <section className="relative isolate overflow-hidden bg-secondary text-white">
        <Image
          src="/images/live/home-about.webp"
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover opacity-35"
        />
        <Container className="py-16 text-center sm:py-24">
          <h2 className="mx-auto max-w-2xl font-heading text-4xl font-bold leading-tight text-balance sm:text-5xl">
            {t("ctaTitle")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
            {t("ctaBody", { phone: company.phone })}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              render={<Link href="/appointments" />}
              size="lg"
              className="min-h-14 bg-accent-yellow px-8 text-base font-bold text-accent-yellow-foreground hover:bg-accent-yellow/90"
            >
              {tNav("requestAppointment")}
            </Button>
            <Button
              render={<a href={company.phoneHref} />}
              size="lg"
              variant="outline"
              className="min-h-14 border-white/40 bg-transparent px-8 text-base font-bold text-white hover:bg-white/10 hover:text-white"
            >
              <Phone className="size-5" aria-hidden />
              {company.phone}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
