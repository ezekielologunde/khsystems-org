import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ArrowRight, ArrowUpRight, MapPin, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/sections/fade-in";
import { ServiceCard } from "@/components/sections/service-card";
import { PhotoTile } from "@/components/sections/photo-tile";
import { FloatCard } from "@/components/sections/float-card";
import { AvatarStack } from "@/components/sections/avatar-stack";
import { TiltCard } from "@/components/sections/tilt-card";
import { company } from "@/lib/content/company";
import { programs } from "@/lib/content/services";
import { testimonials } from "@/lib/content/testimonials";

export const metadata: Metadata = {
  title: "Home",
  description:
    "King Health Systems, Inc. provides culturally sensitive, high-quality mental health services to children, adolescents, adults, and their families in Baltimore and Laurel, Maryland.",
};

export default async function HomePage() {
  const t = await getTranslations("home");
  const tNav = await getTranslations("nav");

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 size-[28rem] rounded-full bg-primary/25 blur-3xl" />
          <div className="absolute -top-10 right-0 size-[24rem] rounded-full bg-sky-400/25 blur-3xl" />
          <div className="absolute bottom-[-6rem] left-1/3 size-[22rem] rounded-full bg-accent/20 blur-3xl" />
        </div>
        <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:py-24">
          <FadeIn>
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary">
              {t("eyebrow")}
            </span>
            <h1 className="mt-5 font-heading text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.25rem]">
              {t("heroTitlePrefix")}{" "}
              <span className="text-primary">{t("heroTitleHighlight")}</span>{" "}
              {t("heroTitleSuffix")}
            </h1>
            <p className="mt-6 max-w-md text-lg font-medium text-foreground/80">
              {company.mission}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Button
                render={<Link href="/appointments" />}
                size="lg"
                className="bg-accent text-accent-foreground shadow-lg shadow-accent/25 transition-transform hover:scale-105 hover:bg-accent/90"
              >
                {tNav("requestAppointment")}
              </Button>
              <Link
                href="/services"
                className="text-sm font-bold underline underline-offset-4 hover:text-primary"
              >
                {t("exploreServices")}
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-8 border-t border-border pt-6">
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
                <span className="font-heading text-3xl font-extrabold text-primary">
                  {t("yearsBadge")}
                </span>
                <span className="max-w-[7rem] text-xs font-semibold leading-tight text-muted-foreground">
                  {t("yearsLabel")}
                </span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} scale={1.04} className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/30 via-sky-400/20 to-accent/25 blur-2xl" />
            <TiltCard className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl bg-muted shadow-2xl ring-1 ring-black/5 sm:aspect-[5/4] lg:aspect-[4/5] mx-auto">
              <Image
                src="/images/hero-family.jpg"
                alt="A family sitting together outdoors, supporting one another"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover"
              />
            </TiltCard>

            <FloatCard className="absolute -bottom-6 left-2 px-5 py-4 sm:left-6" delay={0.3}>
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-bold leading-none">{t("twoLocations")}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Baltimore &amp; Laurel, MD
                  </p>
                </div>
              </div>
            </FloatCard>

            <Link
              href="/services"
              className="group absolute -top-4 -right-4 flex size-20 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg shadow-accent/30 transition-transform hover:scale-110 sm:size-24"
            >
              <span className="absolute inset-0 rounded-full bg-accent/50 motion-safe:animate-ping" />
              <span className="relative flex flex-col items-center text-center text-[0.65rem] font-bold uppercase leading-tight">
                {t("exploreServices")}
              </span>
              <ArrowUpRight className="absolute size-5 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          </FadeIn>
        </Container>
      </section>

      {/* Bento photo grid */}
      <Section className="pt-0">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <FadeIn delay={0}>
            <PhotoTile
              src="/images/bento-compassionate-care.jpg"
              alt="Two people holding hands in a supportive gesture"
              label="Compassionate Care"
              href="/services/individual-therapy"
            />
          </FadeIn>
          <FadeIn delay={0.05}>
            <PhotoTile
              src="/images/bento-family-therapy.jpg"
              alt="A family silhouette together at sunset"
              label="Family Therapy"
              href="/services/family-therapy"
            />
          </FadeIn>
          <FadeIn delay={0.1} className="col-span-2 sm:col-span-1">
            <div className="flex aspect-[4/5] flex-col justify-between rounded-2xl bg-secondary p-5 text-secondary-foreground">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">
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
            <h2 className="mt-2 font-heading text-4xl font-extrabold">
              {t("programsTitle")}
            </h2>
            <p className="mt-4 text-base font-medium text-foreground/75">{t("programsDescription")}</p>
          </div>
          <Button render={<Link href="/services" />} variant="outline" className="shrink-0">
            {t("viewAllServices")}
          </Button>
        </FadeIn>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, i) => (
            <FadeIn key={program.key} delay={i * 0.08}>
              <ServiceCard
                title={program.title}
                summary={program.description}
                href="/services"
              />
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Important information split section */}
      <Section className="bg-muted">
        <div className="grid gap-6 lg:grid-cols-2">
          <FadeIn className="flex flex-col justify-between gap-6 rounded-3xl bg-accent/10 p-8 sm:p-10">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent">
                <ShieldCheck className="size-3.5" /> {t("eligibilityBadge")}
              </span>
              <p className="mt-6 font-heading text-3xl font-extrabold leading-snug sm:text-4xl">
                {t("eligibilityHeadline")}
              </p>
              <p className="mt-4 text-muted-foreground">{t("eligibilityBody")}</p>
            </div>
            <Button
              render={<Link href="/eligibility-and-payment" />}
              className="w-fit bg-foreground text-background hover:bg-foreground/90"
            >
              {t("viewInsuranceDetails")}
            </Button>
          </FadeIn>

          <FadeIn delay={0.1} className="relative overflow-hidden rounded-3xl bg-muted">
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
          <FadeIn className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-muted order-2 lg:order-1">
            <Image
              src="/images/telehealth-video-call.jpg"
              alt="A person having a telehealth video call from home"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </FadeIn>
          <FadeIn delay={0.1} className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              {t("telehealthEyebrow")}
            </p>
            <h2 className="mt-2 font-heading text-4xl font-extrabold">{t("telehealthTitle")}</h2>
            <p className="mt-4 text-muted-foreground">{t("telehealthDescription")}</p>
            <ul className="mt-6 space-y-3">
              {[t("telehealthItem1"), t("telehealthItem2"), t("telehealthItem3")].map(
                (item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <ArrowRight className="size-3.5" />
                    </span>
                    {item}
                  </li>
                )
              )}
            </ul>
            <Button
              render={<Link href="/appointments" />}
              className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90"
            >
              {t("scheduleTelehealth")}
            </Button>
          </FadeIn>
        </div>
      </Section>

      {/* CTA banner */}
      <Section className="relative overflow-hidden rounded-none py-0">
        <div className="relative isolate mx-4 my-16 overflow-hidden rounded-3xl sm:mx-6 lg:mx-8">
          <div className="relative aspect-[16/10] w-full sm:aspect-[21/9]">
            <Image
              src="/images/cta-support-team.jpg"
              alt="A support team member wearing a headset, ready to help"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/20" />
          </div>
          <div className="absolute inset-0 flex items-center">
            <Container>
              <FadeIn className="max-w-lg text-secondary-foreground">
                <h2 className="font-heading text-4xl font-extrabold sm:text-5xl">
                  {t("ctaTitle")}
                </h2>
                <p className="mt-4 text-lg font-medium text-secondary-foreground/85">
                  {t("ctaBody", { phone: company.phone })}
                </p>
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                  <Button
                    render={<Link href="/appointments" />}
                    size="lg"
                    className="bg-accent text-accent-foreground shadow-lg shadow-accent/25 transition-transform hover:scale-105 hover:bg-accent/90"
                  >
                    {t("startYourJourney")}
                  </Button>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-sm font-semibold text-secondary-foreground underline underline-offset-4"
                  >
                    {t("getInTouch")}
                  </Link>
                </div>
              </FadeIn>
            </Container>
          </div>
        </div>
      </Section>
    </>
  );
}
