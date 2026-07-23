import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  ArrowRight,
  ArrowUpRight,
  ClipboardCheck,
  HeartHandshake,
  MapPin,
  PhoneCall,
  Quote,
  ShieldCheck,
  Sparkles,
  Users,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/sections/fade-in";
import { PhotoTile } from "@/components/sections/photo-tile";
import { AvatarStack } from "@/components/sections/avatar-stack";
import { Sticker } from "@/components/sections/sticker";
import { Doodle } from "@/components/sections/doodle";
import { Marquee } from "@/components/sections/marquee";
import { WordReveal } from "@/components/sections/word-reveal";
import { RotatingValues } from "@/components/sections/rotating-values";
import { company, careTeam, managedCareOrganizations } from "@/lib/content/company";
import { programs } from "@/lib/content/services";
import { testimonials } from "@/lib/content/testimonials";

export const metadata: Metadata = {
  title: "Home",
  description:
    "King Health Systems, Inc. provides culturally sensitive, high-quality mental health services to children, adolescents, adults, and their families in Baltimore and Laurel, Maryland.",
};

const CARD_TINTS = ["bg-accent-blue/25", "bg-accent-yellow/25", "bg-accent-orange/25"];

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

function GradientField() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-32 -left-24 size-[30rem] rounded-full bg-primary/25 blur-3xl" />
      <div className="absolute top-24 -right-32 size-[26rem] rounded-full bg-accent-yellow/40 blur-3xl" />
      <div className="absolute top-[85%] -left-16 size-[24rem] rounded-full bg-accent-orange/30 blur-3xl" />
      <div className="absolute top-[140%] right-0 size-[28rem] rounded-full bg-accent-blue/50 blur-3xl" />
      <div className="absolute top-[210%] left-1/4 size-[26rem] rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute top-[270%] -right-20 size-[24rem] rounded-full bg-accent-yellow/35 blur-3xl" />
    </div>
  );
}

export default async function HomePage() {
  const t = await getTranslations("home");
  const tNav = await getTranslations("nav");

  return (
    <div className="relative">
      <GradientField />

      {/* Hero */}
      <section className="relative flex min-h-screen w-full flex-col overflow-hidden">
        <Image
          src="/images/hero-family.jpg"
          alt="A family sitting together outdoors, supporting one another"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/55 to-secondary/25" />

        <Doodle
          variant="star"
          className="animate-fade-in delay-500 absolute top-28 right-8 size-10 text-accent-yellow sm:top-32 sm:right-16"
        />

        <Container className="relative flex flex-1 flex-col justify-center py-28 text-white sm:py-32">
          <span className="animate-fade-in delay-200 inline-flex w-fit items-center gap-2 text-sm font-bold tracking-wide text-white/90 uppercase">
            <Sparkles className="size-4" />
            {t("eyebrow")}
          </span>

          <h1 className="mt-6 font-heading text-[3rem] leading-[0.95] font-normal tracking-tight text-white sm:text-[5rem] md:text-[6.5rem] lg:text-[7.5rem]">
            <WordReveal text={t("heroTitlePrefix")} startDelay={0.3} step={0.1} />{" "}
            <span
              className="script-accent inline-block text-white"
              style={{
                animation: "wordReveal 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
                animationDelay: "0.55s",
              }}
            >
              {t("heroTitleHighlight")}
            </span>{" "}
            <WordReveal text={t("heroTitleSuffix")} startDelay={0.75} step={0.1} />
          </h1>

          <div className="animate-fade-up delay-600 mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
            <Button
              render={<Link href="/appointments" />}
              size="lg"
              className="bg-white px-10 py-6 text-base text-secondary hover:bg-white/90"
            >
              {tNav("requestAppointment")}
              <ArrowUpRight className="size-4" />
            </Button>
            <p className="max-w-xs text-base leading-snug text-white/85">
              {company.mission}
            </p>
          </div>

          <div className="animate-fade-up delay-800 mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-white/20 pt-8">
            <div className="flex items-center gap-4">
              <AvatarStack />
              <p className="text-sm text-white/75">
                {t("trustedBy")}{" "}
                <span className="font-bold text-white">Baltimore &amp; Laurel</span>{" "}
                {t("trustedSince")}
              </p>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-heading text-4xl font-bold text-white">
                {t("yearsBadge")}
              </span>
              <span className="max-w-[8rem] text-sm font-semibold leading-tight text-white/75">
                {t("yearsLabel")}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <MapPin className="size-4" />
              {t("twoLocations")}
            </div>
          </div>
        </Container>
      </section>

      {/* Three-panel strip */}
      <div className="relative grid grid-cols-1 md:grid-cols-[2fr_1fr_2fr]">
        <div className="animate-fade-up delay-900 flex flex-col justify-between gap-6 bg-muted p-8 sm:p-10">
          <p className="max-w-[350px] font-heading text-2xl leading-[1.1] tracking-tight sm:text-[28px] lg:text-[35px]">
            Start your personalized path to complete well-being.
          </p>
          <Link
            href="/services"
            className="inline-flex w-fit items-center gap-1 text-base font-medium underline underline-offset-4 lg:text-lg"
          >
            {t("learnHowItWorks")}
          </Link>
        </div>

        <div className="animate-fade-up delay-1000 bg-card p-8 sm:p-10">
          <RotatingValues
            items={[
              {
                icon: <HeartHandshake className="size-5 sm:size-6" />,
                iconClassName: "bg-primary",
                text: "Board-certified psychiatric nurse practitioners and licensed therapists.",
              },
              {
                icon: <Video className="size-5 sm:size-6" />,
                iconClassName: "bg-accent-blue text-accent-blue-foreground",
                text: "In-office, at-home, and telehealth care, whatever fits your life.",
              },
              {
                icon: <ShieldCheck className="size-5 sm:size-6" />,
                iconClassName: "bg-accent-yellow text-accent-yellow-foreground",
                text: "Maryland Medicaid accepted at no cost, no PCP referral required.",
              },
              {
                icon: <Users className="size-5 sm:size-6" />,
                iconClassName: "bg-accent-orange text-accent-orange-foreground",
                text: "Individual, family, and group therapy for every stage of life.",
              },
            ]}
          />
        </div>

        <div className="animate-fade-up delay-1100 flex items-center gap-6 bg-secondary p-8 text-secondary-foreground sm:p-10">
          <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-white/10">
            <MapPin className="size-7" />
          </span>
          <div>
            <p className="font-heading text-3xl font-bold sm:text-4xl">
              {t("yearsBadge")}
            </p>
            <p className="mt-1 text-sm leading-tight text-secondary-foreground/70">
              {t("yearsLabel")}
            </p>
          </div>
        </div>
      </div>

      {/* Insurance trust marquee */}
      <Section className="relative bg-accent-orange/40 pt-0 pb-10 sm:pb-12">
        <FadeIn className="mb-6 text-center">
          <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
            Maryland Medicaid accepted through every major managed care organization
          </p>
        </FadeIn>
        <Marquee>
          {managedCareOrganizations.map((org) => (
            <span
              key={org}
              className="glass mx-2 inline-flex items-center rounded-full px-5 py-2 text-sm font-bold text-foreground/80"
            >
              {org}
            </span>
          ))}
        </Marquee>
      </Section>

      {/* Programs / Road to well-being */}
      <Section className="relative pt-0">
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
          <Button render={<Link href="/services" />} variant="outline" className="glass shrink-0 border-none">
            {t("viewAllServices")}
          </Button>
        </FadeIn>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, i) => (
            <FadeIn key={program.key} delay={i * 0.08}>
              <Link
                href="/services"
                className={`glass-tint group relative block h-full rounded-3xl p-7 transition-transform duration-200 hover:-translate-y-1 ${CARD_TINTS[i % CARD_TINTS.length]}`}
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
      <Section className="relative bg-accent-blue/40">
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          <FadeIn delay={0}>
            <PhotoTile
              src="/images/bento-compassionate-care.jpg"
              alt="Two people holding hands in a supportive gesture"
              label="Compassionate Care"
              href="/services/individual-therapy"
              frameClassName="glass-tint bg-accent-yellow/20"
            />
          </FadeIn>
          <FadeIn delay={0.05}>
            <PhotoTile
              src="/images/bento-family-therapy.jpg"
              alt="A family silhouette together at sunset"
              label="Family Therapy"
              href="/services/family-therapy"
              frameClassName="glass-tint bg-accent-blue/20"
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <PhotoTile
              src="/images/telehealth-video-call.jpg"
              alt="A person having a telehealth video call from home"
              label="Telehealth"
              href="/appointments"
              frameClassName="glass-tint bg-primary/10"
            />
          </FadeIn>
          <FadeIn delay={0.15}>
            <PhotoTile
              src="/images/bento-community-support.jpg"
              alt="A diverse group of people stacking hands together in support"
              label="Group &amp; Community Support"
              href="/services/group-therapy"
              frameClassName="glass-tint bg-accent-orange/20"
            />
          </FadeIn>
        </div>
      </Section>

      {/* Standalone testimonial */}
      {testimonials.length > 0 ? (
        <Section className="relative">
          <FadeIn className="glass-dark mx-auto max-w-3xl rounded-[2rem] px-8 py-14 text-center sm:px-14">
            <Quote className="mx-auto size-10 text-accent-yellow" />
            <p className="mt-6 font-heading text-2xl font-semibold leading-snug sm:text-3xl">
              &ldquo;{testimonials[0].quote}&rdquo;
            </p>
            <p className="mt-6 text-sm font-bold uppercase tracking-wide text-white/70">
              &mdash; {testimonials[0].author}
            </p>
          </FadeIn>
        </Section>
      ) : null}

      {/* Care team */}
      <Section className="relative bg-accent-yellow/40">
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
              <div className="glass flex h-full flex-col items-center rounded-3xl p-6 text-center">
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
      <Section className="relative">
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
              <div className="glass flex h-full flex-col items-center rounded-3xl p-7 text-center">
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
      <Section className="relative bg-primary/10">
        <div className="grid gap-6 lg:grid-cols-2">
          <FadeIn className="glass-tint bg-accent/15 flex flex-col justify-between gap-6 rounded-3xl p-8 sm:p-10">
            <div>
              <Sticker className="text-primary">
                <ShieldCheck className="size-3.5" /> {t("eligibilityBadge")}
              </Sticker>
              <p className="mt-6 font-heading text-4xl font-bold leading-snug sm:text-5xl">
                {t("eligibilityHeadline")}
              </p>
              <p className="mt-5 text-lg text-foreground/75">{t("eligibilityBody")}</p>
            </div>
            <Button render={<Link href="/eligibility-and-payment" />} className="w-fit">
              {t("viewInsuranceDetails")}
            </Button>
          </FadeIn>

          <FadeIn
            delay={0.1}
            className="glass relative overflow-hidden rounded-3xl p-3"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] sm:aspect-auto sm:h-full">
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
      <Section className="relative pt-0">
        <div className="glass-tint bg-accent/15 relative isolate overflow-hidden rounded-[2rem]">
          <div className="grid gap-8 p-10 sm:p-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-0">
            <FadeIn className="max-w-lg">
              <h2 className="flex items-start gap-3 font-heading text-5xl font-bold leading-[1.05] sm:text-6xl">
                {t("ctaTitle")}
                <Doodle variant="star" className="mt-2 size-8 shrink-0 text-accent-orange" />
              </h2>
              <p className="mt-4 text-lg font-medium text-foreground/75">
                {t("ctaBody", { phone: company.phone })}
              </p>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                <Button render={<Link href="/appointments" />} size="lg">
                  {t("startYourJourney")}
                </Button>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-sm font-bold text-foreground underline decoration-2 underline-offset-4"
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
    </div>
  );
}
