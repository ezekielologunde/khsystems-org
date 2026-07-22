import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  Home as HomeIcon,
  MapPin,
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
import { company, careTeam } from "@/lib/content/company";
import { programs } from "@/lib/content/services";
import { testimonials } from "@/lib/content/testimonials";

export const metadata: Metadata = {
  title: "Home",
  description:
    "King Health Systems, Inc. provides culturally sensitive, high-quality mental health services to children, adolescents, adults, and their families in Baltimore and Laurel, Maryland.",
};

const CARD_TINTS = [
  "bg-accent-blue/40",
  "bg-accent/25",
  "bg-accent-orange/20",
];

const TEAM_TINTS = [
  "bg-primary text-primary-foreground",
  "bg-accent text-accent-foreground",
  "bg-accent-blue text-accent-blue-foreground",
  "bg-accent-orange text-accent-orange-foreground",
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

          <FadeIn delay={0.1} className="relative mx-auto w-full max-w-md">
            <Doodle
              variant="star"
              className="absolute -top-8 left-8 size-7 text-accent-orange sm:-top-10 sm:left-4"
            />
            <Doodle
              variant="scribble"
              className="absolute top-1/2 -left-8 hidden size-10 -translate-y-1/2 text-accent-blue sm:block"
            />

            <div className="grid grid-cols-2 gap-4">
              <TiltCard className="col-span-2 rounded-[1.75rem] bg-accent p-3 shadow-soft">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.25rem]">
                  <Image
                    src="/images/hero-family.jpg"
                    alt="A family sitting together outdoors, supporting one another"
                    fill
                    priority
                    sizes="(max-width: 448px) 90vw, 448px"
                    className="object-cover"
                  />
                </div>
              </TiltCard>

              <div className="rounded-[1.5rem] bg-accent-blue p-2.5 shadow-soft-sm">
                <div className="relative aspect-square w-full overflow-hidden rounded-[1.1rem]">
                  <Image
                    src="/images/telehealth-video-call.jpg"
                    alt="A person having a telehealth video call from home"
                    fill
                    sizes="(max-width: 448px) 45vw, 216px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="rounded-[1.5rem] bg-accent-orange/70 p-2.5 shadow-soft-sm">
                <div className="relative aspect-square w-full overflow-hidden rounded-[1.1rem]">
                  <Image
                    src="/images/bento-compassionate-care.jpg"
                    alt="Two people holding hands in a supportive gesture"
                    fill
                    sizes="(max-width: 448px) 45vw, 216px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <span className="absolute top-4 -left-3 -rotate-3 rounded-full border border-border bg-card px-3 py-1 text-xs font-bold shadow-soft-sm sm:-left-6">
              Compassionate
            </span>
            <span className="absolute right-2 bottom-24 rotate-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-bold shadow-soft-sm sm:right-0">
              Supportive
            </span>

            <div className="mt-5 flex items-center justify-between rounded-2xl border border-border bg-card px-6 py-5 shadow-soft">
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
                className="group flex size-14 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
              >
                <ArrowUpRight className="size-6 transition-transform group-hover:rotate-45" />
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Bento photo grid */}
      <Section className="pt-0">
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          <FadeIn delay={0}>
            <PhotoTile
              src="/images/bento-compassionate-care.jpg"
              alt="Two people holding hands in a supportive gesture"
              label="Compassionate Care"
              href="/services/individual-therapy"
              className="shadow-soft-sm"
              frameClassName="bg-accent"
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
          <FadeIn delay={0.1} className="col-span-2 sm:col-span-1">
            <div className="flex aspect-[4/5] flex-col justify-between rounded-3xl bg-secondary p-5 text-secondary-foreground shadow-soft-sm">
              <p className="text-xs font-bold uppercase tracking-wide text-accent">
                {t("testimonialsLabel")}
              </p>
              {testimonials.length > 0 ? (
                <p className="font-heading text-base leading-snug">
                  &ldquo;{testimonials[0].quote}&rdquo;
                </p>
              ) : null}
              {testimonials.length > 0 ? (
                <p className="text-sm font-semibold text-secondary-foreground/80">
                  &mdash; {testimonials[0].author}
                </p>
              ) : null}
            </div>
          </FadeIn>
          <FadeIn delay={0.15} className="col-span-2 sm:col-span-1">
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

      {/* Programs / Road to well-being */}
      <Section>
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

      {/* Important information split section */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <FadeIn className="flex flex-col justify-between gap-6 rounded-3xl bg-accent p-8 text-accent-foreground shadow-soft-sm sm:p-10">
            <div>
              <Sticker className="border-none bg-accent-foreground/10 text-accent-foreground shadow-none">
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

      {/* Telehealth section */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <FadeIn className="relative order-2 overflow-hidden rounded-3xl shadow-soft-sm lg:order-1">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/telehealth-video-call.jpg"
                alt="A person having a telehealth video call from home"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.1} className="order-1 lg:order-2">
            <p className="text-sm font-bold uppercase tracking-wide text-primary">
              {t("telehealthEyebrow")}
            </p>
            <h2 className="mt-2 flex items-center gap-3 font-heading text-5xl font-bold leading-[1.05]">
              {t("telehealthTitle")}
              <Doodle variant="spark" className="size-7 shrink-0 text-accent-blue" />
            </h2>
            <p className="mt-4 text-muted-foreground">{t("telehealthDescription")}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { icon: CalendarCheck, label: t("telehealthItem1") },
                { icon: Video, label: t("telehealthItem2") },
                { icon: HomeIcon, label: t("telehealthItem3") },
              ].map(({ icon: Icon, label }, i) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 rounded-2xl bg-card p-4 text-center shadow-soft-sm transition-transform duration-200 hover:-translate-y-1"
                >
                  <span
                    className={`flex size-10 items-center justify-center rounded-full ${
                      i === 0
                        ? "bg-accent text-accent-foreground"
                        : i === 1
                          ? "bg-accent-blue text-accent-blue-foreground"
                          : "bg-accent-orange text-accent-orange-foreground"
                    }`}
                  >
                    <Icon className="size-5" />
                  </span>
                  <p className="text-xs font-bold leading-tight">{label}</p>
                </div>
              ))}
            </div>
            <Button render={<Link href="/appointments" />} className="mt-8">
              {t("scheduleTelehealth")}
            </Button>
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
