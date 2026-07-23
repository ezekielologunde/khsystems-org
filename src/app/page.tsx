import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  ArrowRight,
  ArrowUpRight,
  ClipboardCheck,
  MapPin,
  PhoneCall,
  Quote,
  ShieldCheck,
  Sparkles,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/sections/fade-in";
import { PhotoTile } from "@/components/sections/photo-tile";
import { AvatarStack } from "@/components/sections/avatar-stack";
import { TiltCard } from "@/components/sections/tilt-card";
import { Sticker } from "@/components/sections/sticker";
import { Doodle } from "@/components/sections/doodle";
import { Marquee } from "@/components/sections/marquee";
import { BoomerangVideoBg } from "@/components/sections/boomerang-video-bg";
import { company, careTeam, managedCareOrganizations } from "@/lib/content/company";
import { programs } from "@/lib/content/services";
import { testimonials } from "@/lib/content/testimonials";

export const metadata: Metadata = {
  title: "Home",
  description:
    "King Health Systems, Inc. provides culturally sensitive, high-quality mental health services to children, adolescents, adults, and their families in Baltimore and Laurel, Maryland.",
};

const CARD_TINTS = [
  "bg-accent-blue/40",
  "bg-accent-yellow/25",
  "bg-accent-orange/20",
];

const TEAM_TINTS = [
  "bg-primary text-primary-foreground",
  "bg-accent-yellow text-accent-yellow-foreground",
  "bg-accent-blue text-accent-blue-foreground",
  "bg-accent-orange text-accent-orange-foreground",
];

const HOW_IT_WORKS = [
  {
    icon: PhoneCall,
    title: "Reach Out",
    description:
      "Call, request an appointment online, or send a referral - our team responds without delay.",
  },
  {
    icon: ClipboardCheck,
    title: "Get Your Treatment Plan",
    description:
      "A licensed clinician completes an assessment and builds an Individualized Treatment Plan for you.",
  },
  {
    icon: Video,
    title: "Start Care, In Person or by Telehealth",
    description:
      "Meet your provider at our Baltimore or Laurel office, or from home - Monday through Friday.",
  },
];

export default async function HomePage() {
  const t = await getTranslations("home");
  const tNav = await getTranslations("nav");

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <Container className="grid gap-14 py-20 sm:py-28 lg:grid-cols-2 lg:items-center lg:py-32">
          <FadeIn>
            <Sticker className="px-5 py-2 text-base text-primary">
              <Sparkles className="size-4" />
              {t("eyebrow")}
            </Sticker>
            <h1 className="mt-7 font-heading text-6xl font-bold leading-[1.02] tracking-tight sm:text-7xl lg:text-[5rem]">
              {t("heroTitlePrefix")}{" "}
              <span className="script-underline script-accent text-6xl sm:text-7xl lg:text-8xl">
                {t("heroTitleHighlight")}
              </span>{" "}
              {t("heroTitleSuffix")}
            </h1>
            <p className="mt-7 max-w-lg text-xl font-medium text-foreground/75">
              {company.mission}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Button render={<Link href="/appointments" />} size="lg">
                {tNav("requestAppointment")}
              </Button>
              <Link
                href="/services"
                className="text-sm font-bold underline decoration-2 underline-offset-4 hover:text-primary"
              >
                {t("exploreServices")}
              </Link>
            </div>

            <div className="mt-11 flex flex-wrap items-center gap-8 border-t border-border pt-7">
              <div className="flex items-center gap-4">
                <AvatarStack />
                <p className="text-sm text-muted-foreground">
                  {t("trustedBy")}{" "}
                  <span className="font-bold text-foreground">
                    Baltimore &amp; Laurel
                  </span>{" "}
                  {t("trustedSince")}
                </p>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-heading text-4xl font-bold text-primary">
                  {t("yearsBadge")}
                </span>
                <span className="max-w-[8rem] text-sm font-semibold leading-tight text-muted-foreground">
                  {t("yearsLabel")}
                </span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="relative">
            <TiltCard className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-muted shadow-soft-lg lg:aspect-[3/4]">
              <BoomerangVideoBg src="/videos/hero-family-loop.mp4" />
            </TiltCard>

            <div className="absolute -bottom-6 left-6 right-6 flex items-center justify-between gap-4 rounded-2xl border border-border bg-card px-6 py-5 shadow-soft sm:left-8 sm:right-auto sm:w-auto">
              <div className="flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <MapPin className="size-6" />
                </span>
                <div>
                  <p className="text-base font-bold leading-none">{t("twoLocations")}</p>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    Baltimore &amp; Laurel, MD
                  </p>
                </div>
              </div>
              <Link
                href="/services"
                className="group flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
              >
                <ArrowUpRight className="size-6 transition-transform group-hover:rotate-45" />
              </Link>
            </div>

            <Doodle
              variant="star"
              className="absolute -top-5 -right-5 size-8 text-accent-orange"
            />
          </FadeIn>
        </Container>
      </section>

      {/* Insurance trust marquee */}
      <Section className="pt-0 pb-10 sm:pb-12">
        <FadeIn className="mb-6 text-center">
          <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
            Maryland Medicaid accepted through every major managed care organization
          </p>
        </FadeIn>
        <Marquee>
          {managedCareOrganizations.map((org) => (
            <span
              key={org}
              className="mx-2 inline-flex items-center rounded-full border border-border bg-card px-5 py-2 text-sm font-bold text-foreground/70 shadow-soft-sm"
            >
              {org}
            </span>
          ))}
        </Marquee>
      </Section>

      {/* Programs / Road to well-being */}
      <Section className="pt-0">
        <FadeIn className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-bold uppercase tracking-wide text-primary">
              {t("programsEyebrow")}
            </p>
            <h2 className="mt-2 flex items-center gap-3 font-heading text-5xl font-bold leading-[1.05]">
              {t("programsTitle")}
              <Doodle variant="scribble" className="size-8 shrink-0 text-accent-orange" />
            </h2>
            <p className="mt-5 text-lg font-medium text-foreground/75">{t("programsDescription")}</p>
          </div>
          <Button render={<Link href="/services" />} variant="outline" className="shrink-0">
            {t("viewAllServices")}
          </Button>
        </FadeIn>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, i) => (
            <FadeIn key={program.key} delay={i * 0.08}>
              <Link
                href="/services"
                className={`group relative block h-full rounded-3xl p-7 shadow-soft-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-soft ${CARD_TINTS[i % CARD_TINTS.length]}`}
              >
                <span className="font-heading text-6xl font-bold text-primary/15">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl font-bold">{program.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{program.description}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-primary">
                  Learn more
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Photo gallery */}
      <Section>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          <FadeIn delay={0}>
            <PhotoTile
              src="/images/bento-compassionate-care.jpg"
              alt="Two people holding hands in a supportive gesture"
              label="Compassionate Care"
              href="/services/individual-therapy"
              className="shadow-soft-sm"
              frameClassName="bg-accent-yellow"
            />
          </FadeIn>
          <FadeIn delay={0.05}>
            <PhotoTile
              src="/images/bento-family-therapy.jpg"
              alt="A family silhouette together at sunset"
              label="Family Therapy"
              href="/services/family-therapy"
              className="shadow-soft-sm"
              frameClassName="bg-accent-blue"
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <PhotoTile
              src="/images/telehealth-video-call.jpg"
              alt="A person having a telehealth video call from home"
              label="Telehealth"
              href="/appointments"
              className="shadow-soft-sm"
              frameClassName="bg-primary/10"
            />
          </FadeIn>
          <FadeIn delay={0.15}>
            <PhotoTile
              src="/images/bento-community-support.jpg"
              alt="A diverse group of people stacking hands together in support"
              label="Group &amp; Community Support"
              href="/services/group-therapy"
              className="shadow-soft-sm"
              frameClassName="bg-accent-orange/70"
            />
          </FadeIn>
        </div>
      </Section>

      {/* Standalone testimonial */}
      {testimonials.length > 0 ? (
        <Section>
          <FadeIn className="mx-auto max-w-3xl rounded-[2rem] bg-secondary px-8 py-14 text-center text-secondary-foreground shadow-soft-lg sm:px-14">
            <Quote className="mx-auto size-10 text-accent-yellow" />
            <p className="mt-6 font-heading text-2xl font-semibold leading-snug sm:text-3xl">
              &ldquo;{testimonials[0].quote}&rdquo;
            </p>
            <p className="mt-6 text-sm font-bold uppercase tracking-wide text-secondary-foreground/70">
              &mdash; {testimonials[0].author}
            </p>
          </FadeIn>
        </Section>
      ) : null}

      {/* Care team */}
      <Section className="bg-muted">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <Sticker className="text-primary">The People Behind Your Care</Sticker>
          <h2 className="mt-6 flex items-center justify-center gap-3 font-heading text-5xl font-bold leading-[1.05]">
            <Doodle variant="star" className="size-7 shrink-0 text-accent-orange" />
            A licensed, credentialed team
          </h2>
          <p className="mt-5 text-lg font-medium text-foreground/75">
            Every client works with real, licensed clinicians - not a
            call center. Here&apos;s who you&apos;ll meet along the way.
          </p>
        </FadeIn>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {careTeam.map((role, i) => (
            <FadeIn key={role.title} delay={i * 0.06}>
              <div className="flex h-full flex-col items-center rounded-3xl bg-card p-6 text-center shadow-soft-sm">
                <span
                  className={`flex size-16 items-center justify-center rounded-full font-heading text-xl font-bold ${TEAM_TINTS[i % TEAM_TINTS.length]}`}
                >
                  {role.title
                    .split(" ")
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")}
                </span>
                <h3 className="mt-4 text-base font-bold">{role.title}</h3>
                {role.credentials ? (
                  <p className="mt-1 text-xs font-bold uppercase tracking-wide text-primary">
                    {role.credentials}
                  </p>
                ) : null}
                <p className="mt-3 text-sm text-muted-foreground">{role.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-primary">
            Getting Started
          </p>
          <h2 className="mt-2 flex items-center justify-center gap-3 font-heading text-5xl font-bold leading-[1.05]">
            How care works here
            <Doodle variant="spark" className="size-7 shrink-0 text-accent-blue" />
          </h2>
        </FadeIn>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {HOW_IT_WORKS.map(({ icon: Icon, title, description }, i) => (
            <FadeIn key={title} delay={i * 0.08} className="relative">
              <div className="flex h-full flex-col items-center rounded-3xl bg-card p-7 text-center shadow-soft-sm">
                <span className="font-heading text-5xl font-bold text-primary/15">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`mt-2 flex size-12 items-center justify-center rounded-full ${
                    i === 0
                      ? "bg-accent-yellow text-accent-yellow-foreground"
                      : i === 1
                        ? "bg-accent-blue text-accent-blue-foreground"
                        : "bg-accent-orange text-accent-orange-foreground"
                  }`}
                >
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.2} className="mt-10 flex justify-center">
          <Button render={<Link href="/appointments" />}>
            {t("scheduleTelehealth")}
          </Button>
        </FadeIn>
      </Section>

      {/* Eligibility & payment */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <FadeIn className="flex flex-col justify-between gap-6 rounded-3xl bg-accent p-8 text-accent-foreground shadow-soft-sm sm:p-10">
            <div>
              <Sticker className="border-none bg-black/15 text-accent-foreground shadow-none">
                <ShieldCheck className="size-3.5" /> {t("eligibilityBadge")}
              </Sticker>
              <p className="mt-6 font-heading text-4xl font-bold leading-snug sm:text-5xl">
                {t("eligibilityHeadline")}
              </p>
              <p className="mt-5 text-lg text-accent-foreground/80">{t("eligibilityBody")}</p>
            </div>
            <Button
              render={<Link href="/eligibility-and-payment" />}
              className="w-fit bg-primary text-primary-foreground hover:bg-primary/80"
            >
              {t("viewInsuranceDetails")}
            </Button>
          </FadeIn>

          <FadeIn
            delay={0.1}
            className="relative overflow-hidden rounded-3xl bg-muted shadow-soft-sm"
          >
            <div className="relative aspect-[4/3] w-full sm:aspect-auto sm:h-full">
              <Image
                src="/images/about-conversation-sunset.jpg"
                alt="Two people in a warm conversation at sunset"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-white sm:p-10">
                <p className="font-heading text-xl font-semibold sm:text-2xl">
                  {t("itpHeadline")}
                </p>
                <Link
                  href="/services/individualized-treatment-plan"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium underline underline-offset-4"
                >
                  {t("learnHowItWorks")} <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* CTA banner */}
      <Section className="pt-0">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-accent shadow-soft-lg">
          <div className="grid gap-8 p-10 sm:p-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-0">
            <FadeIn className="max-w-lg text-accent-foreground">
              <h2 className="flex items-start gap-3 font-heading text-5xl font-bold leading-[1.05] sm:text-6xl">
                {t("ctaTitle")}
                <Doodle variant="star" className="mt-2 size-8 shrink-0 text-accent-foreground/60" />
              </h2>
              <p className="mt-4 text-lg font-medium text-accent-foreground/80">
                {t("ctaBody", { phone: company.phone })}
              </p>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                <Button
                  render={<Link href="/appointments" />}
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/80"
                >
                  {t("startYourJourney")}
                </Button>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-sm font-bold text-accent-foreground underline decoration-2 underline-offset-4"
                >
                  {t("getInTouch")}
                </Link>
              </div>
            </FadeIn>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-[1.5rem] shadow-soft lg:mx-0 lg:ml-auto">
              <Image
                src="/images/cta-support-team.jpg"
                alt="A support team member wearing a headset, ready to help"
                fill
                sizes="(max-width: 1024px) 60vw, 20vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
