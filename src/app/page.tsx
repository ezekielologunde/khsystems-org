import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { ArrowRight, ArrowUpRight, BadgeCheck, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/sections/fade-in";
import { IntroVideo } from "@/components/sections/intro-video";
import { WordReveal } from "@/components/sections/word-reveal";
import { AudienceWord } from "@/components/home/audience-word";
import { Breathing } from "@/components/home/breathing";
import { FirstVisitStepper } from "@/components/home/first-visit-stepper";
import { HeroCollage } from "@/components/home/hero-collage";
import { Marquee } from "@/components/home/marquee";
import { MoodPicker } from "@/components/home/mood-picker";
import { OpenNow } from "@/components/home/open-now";
import { TeamScroller } from "@/components/home/team-scroller";
import { TiltCard } from "@/components/home/tilt-card";
import { InsuranceChecker } from "@/components/tools/insurance-checker";
import { accreditation, company, offices } from "@/lib/content/company";
import { clinicians } from "@/lib/content/clinicians";
import { publishedArticles } from "@/lib/content/learn";
import { allNews, formatNewsDate } from "@/lib/content/news";
import { articlePhoto, deck } from "@/lib/content/editorial";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: { absolute: "Mental Health Care in Baltimore, Laurel & Cockeysville, MD | King Health Systems" },
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

const RIBBON = [
  "Individual therapy",
  "Family therapy",
  "Group therapy",
  "Psychiatric evaluation",
  "Medication management",
  "Psychiatric rehabilitation (PRP)",
  "Telehealth",
  "At-home care for eligible clients",
  "Maryland Medicaid accepted",
  "Children, teens and adults",
];

const STEPS = [
  {
    title: "You reach out",
    body: "Call, or request an appointment online. A referral from a provider works too. We confirm your Maryland Medicaid coverage with you.",
    image: "/images/stock/stock-video.jpg",
    alt: "A laptop on a glass table showing a video call",
  },
  {
    title: "Your assessment",
    body: "A licensed clinician talks with you about what is going on, your history, and what you want from care. Ask questions any time.",
    image: "/images/stock/stock-talk.jpg",
    alt: "Two friends sitting on the grass, talking",
  },
  {
    title: "Your treatment plan",
    body: "Together you build an Individualized Treatment Plan with goals that matter to you, reviewed as things change.",
    image: "/images/stock/stock-journal.jpg",
    alt: "Hands writing in a journal",
  },
  {
    title: "Your visits",
    body: "Meet at one of our offices, by telehealth, or at home if you are eligible, Monday through Friday.",
    image: "/images/live/individual-therapy.jpg",
    alt: "A client and therapist talking in a calm, bright room",
  },
];

const TEAM = clinicians
  .filter((c) => c.photo)
  .map((c) => ({ name: c.name, credentials: c.credentials, availability: c.availability, photo: c.photo! }));

export default async function HomePage() {
  const t = await getTranslations("home");
  const tNav = await getTranslations("nav");
  const locale = await getLocale();

  const lead = publishedArticles[0];
  const latestNews = allNews.slice(0, 3);

  return (
    <>
      {/* Hero: who it is for, Medicaid, hours, one tap to call or request */}
      <section className="relative overflow-hidden bg-background">
        <Container className="grid items-center gap-10 py-10 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-12">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <p className="inline-flex items-center gap-2 rounded-full bg-accent-yellow px-4 py-1.5 text-sm font-bold text-accent-yellow-foreground">
                <BadgeCheck className="size-4" aria-hidden />
                Maryland Medicaid accepted
              </p>
              <OpenNow className="border border-border" />
            </div>

            <h1 className="mt-5 font-heading text-[2.5rem] font-semibold leading-[1.06] tracking-tight sm:text-6xl lg:text-[3.75rem] xl:text-[4.25rem]">
              {locale === "en" ? (
                <AudienceWord />
              ) : (
                <>
                  <WordReveal text={t("heroTitlePrefix")} startDelay={0.2} step={0.08} />{" "}
                  <WordReveal text={t("heroTitleHighlight")} startDelay={0.5} step={0.08} />{" "}
                  <WordReveal text={t("heroTitleSuffix")} startDelay={0.7} step={0.08} />
                </>
              )}
            </h1>

            <p className="mt-5 max-w-xl text-xl leading-relaxed text-foreground/80">
              Therapy, psychiatry and rehabilitation for children, teens, adults and families, at
              three Maryland offices, at home, or by telehealth.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                render={<Link href="/appointments" />}
                size="lg"
                className="min-h-14 bg-primary px-8 text-base font-bold text-primary-foreground shadow-[0_14px_28px_-12px_rgba(29,78,216,0.7)] hover:bg-primary/90"
              >
                {tNav("requestAppointment")}
                <ArrowUpRight className="size-5" aria-hidden />
              </Button>
              <Button
                render={<a href={company.phoneHref} />}
                size="lg"
                variant="outline"
                className="min-h-14 border-2 border-foreground bg-transparent px-8 text-base font-bold hover:bg-foreground hover:text-background"
              >
                <Phone className="size-5" aria-hidden />
                Call {company.phone}
              </Button>
            </div>
          </div>

          <HeroCollage />
        </Container>
      </section>

      <Marquee items={RIBBON} />

      {/* How are you feeling: routes to the right page */}
      <section className="py-16 sm:py-24">
        <Container>
          <MoodPicker />
        </Container>
      </section>

      {/* Services as photographs that lean toward the pointer */}
      <section className="bg-muted py-16 sm:py-24">
        <Container>
          <FadeIn className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <h2 className="font-heading text-4xl font-semibold leading-tight text-balance sm:text-5xl">
                {t("programsTitle")}
              </h2>
              <p className="mt-4 text-lg text-foreground/80">{t("programsDescription")}</p>
            </div>
            <Button render={<Link href="/services" />} variant="outline" className="min-h-12 shrink-0 bg-background font-bold">
              {t("viewAllServices")}
            </Button>
          </FadeIn>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <li key={s.href}>
                <FadeIn delay={i * 0.08} y={28}>
                  <TiltCard>
                    <Link
                      href={s.href}
                      className="group relative block aspect-[4/5] overflow-hidden rounded-3xl bg-secondary shadow-[0_24px_44px_-20px_rgba(15,23,42,0.5)]"
                    >
                      <Image
                        src={s.image}
                        alt={s.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                        <h3 className="font-heading text-2xl font-semibold leading-tight">{s.title}</h3>
                        <p className="mt-1 text-base text-white/90">{s.blurb}</p>
                        <span className="mt-3 inline-flex items-center gap-1 font-bold">
                          Learn more
                          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                        </span>
                      </div>
                    </Link>
                  </TiltCard>
                </FadeIn>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* A pause to breathe */}
      <section className="bg-primary py-16 text-primary-foreground sm:py-24">
        <Container>
          <Breathing />
        </Container>
      </section>

      {/* First visit, step by step */}
      <section className="py-16 sm:py-24">
        <Container>
          <FirstVisitStepper steps={STEPS} />
        </Container>
      </section>

      {/* Insurance */}
      <section className="bg-accent-blue/40 py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-14">
          <FadeIn>
            <h2 className="font-heading text-4xl font-semibold leading-tight text-balance sm:text-5xl">
              Do you take my insurance?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-foreground/85">{t("eligibilityBody")}</p>
            <p className="mt-4 text-foreground/80">{accreditation.licensure}</p>
            <div className="mt-6 flex items-center gap-4">
              <Image
                src="/images/live/carf-seals.png"
                alt="CARF accreditation seals"
                width={160}
                height={64}
                className="h-12 w-auto rounded-md bg-white p-1.5"
              />
              <p className="max-w-xs text-sm text-foreground/75">{accreditation.carf}</p>
            </div>
            <Button render={<Link href="/eligibility-and-payment" />} variant="outline" className="mt-6 min-h-12 bg-background font-bold">
              {t("viewInsuranceDetails")}
            </Button>
          </FadeIn>
          <FadeIn delay={0.1} className="rounded-3xl bg-card p-6 shadow-[0_24px_48px_-24px_rgba(15,23,42,0.35)] sm:p-8">
            <InsuranceChecker />
          </FadeIn>
        </Container>
      </section>

      {/* Real clinicians, real faces */}
      <section className="overflow-hidden py-16 sm:py-24">
        <Container>
          <FadeIn className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <h2 className="font-heading text-4xl font-semibold leading-tight text-balance sm:text-5xl">
                Meet some of our clinicians
              </h2>
              <p className="mt-4 text-lg text-foreground/80">
                Licensed therapists and psychiatric providers, not a call center.
              </p>
            </div>
            <Button render={<Link href="/team" />} variant="outline" className="min-h-12 shrink-0 font-bold">
              See the whole team
            </Button>
          </FadeIn>
          <div className="mt-8">
            <TeamScroller people={TEAM} />
          </div>
        </Container>
      </section>

      {/* Three offices */}
      <section className="bg-secondary py-16 text-secondary-foreground sm:py-24">
        <Container>
          <FadeIn>
            <h2 className="font-heading text-4xl font-semibold leading-tight text-balance text-white sm:text-5xl">
              Three offices, close to home
            </h2>
            <p className="mt-4 max-w-xl text-lg text-secondary-foreground/85">{company.hours}.</p>
          </FadeIn>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {offices.map((o, i) => (
              <li key={o.id}>
                <FadeIn delay={i * 0.08}>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o.mapQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col rounded-3xl bg-white/5 p-7 ring-1 ring-white/15 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-accent-yellow"
                  >
                    <span className="flex size-12 items-center justify-center rounded-full bg-accent-yellow text-accent-yellow-foreground">
                      <MapPin className="size-6" aria-hidden />
                    </span>
                    <span className="mt-5 font-heading text-3xl font-semibold text-white">{o.city}</span>
                    <span className="mt-2 leading-relaxed text-secondary-foreground/85">
                      {o.addressLines.join(", ")}
                      <br />
                      {o.city}, {o.state} {o.zip}
                    </span>
                    <span className="mt-5 inline-flex items-center gap-2 font-bold text-accent-yellow">
                      Get directions
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
                    </span>
                  </a>
                </FadeIn>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Short captioned intro; plays only when asked to */}
      <section className="py-16 sm:py-24">
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-12">
          <FadeIn>
            <h2 className="font-heading text-4xl font-semibold leading-tight text-balance sm:text-5xl">
              Meet King Health Systems
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              A 36-second look at who we are, where to find us, and how to start. Captions are on,
              and nothing plays until you press play.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <IntroVideo />
          </FadeIn>
        </Container>
      </section>

      {/* Learn and news, in an editorial layout */}
      {lead || latestNews.length ? (
        <section className="bg-muted py-16 sm:py-24">
          <Container>
            <FadeIn className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="font-heading text-4xl font-semibold leading-tight text-balance sm:text-5xl">
                Learn &amp; stay informed
              </h2>
              <Button render={<Link href="/learn" />} variant="outline" className="min-h-12 shrink-0 bg-background font-bold">
                Articles, news &amp; check-ins
              </Button>
            </FadeIn>
            <div className="mt-10 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
              {lead ? (
                <FadeIn>
                  <article className="group">
                    <Link href={`/learn/${lead.slug}`} tabIndex={-1} aria-hidden className="relative block aspect-[3/2] overflow-hidden rounded-3xl bg-secondary">
                      <Image
                        src={articlePhoto(lead).src}
                        alt=""
                        fill
                        sizes="(min-width:1024px) 52vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </Link>
                    <p className="mt-5 text-sm font-semibold text-primary">
                      {lead.topic} · {lead.readingMinutes} min read
                    </p>
                    <h3 className="mt-2 font-heading text-3xl font-semibold leading-tight text-balance">
                      <Link href={`/learn/${lead.slug}`} className="decoration-2 underline-offset-4 hover:underline">
                        {lead.title}
                      </Link>
                    </h3>
                    <p className="mt-3 text-lg leading-relaxed text-foreground/80">{deck(lead.shortAnswer, 170)}</p>
                  </article>
                </FadeIn>
              ) : null}
              <div>
                <h3 className="border-b-2 border-foreground pb-2 font-heading text-2xl font-semibold">From the news desk</h3>
                <ul className="divide-y divide-border">
                  {latestNews.map((n) => (
                    <li key={n.slug}>
                      <Link href={`/learn/news/${n.slug}`} className="group block py-5">
                        <time dateTime={n.date} className="text-sm font-semibold text-muted-foreground">
                          {formatNewsDate(n.date)}
                        </time>
                        <span className="mt-1 block font-heading text-xl font-semibold leading-snug decoration-2 underline-offset-4 group-hover:underline">
                          {n.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              In crisis? Call or text <strong>988</strong>. In an emergency, call <strong>911</strong>.
            </p>
          </Container>
        </section>
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
          <h2 className="mx-auto max-w-2xl font-heading text-4xl font-semibold leading-tight text-balance sm:text-5xl">
            {t("ctaTitle")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">{t("ctaBody", { phone: company.phone })}</p>
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
              className="min-h-14 border-white/50 bg-transparent px-8 text-base font-bold text-white hover:bg-white/10 hover:text-white"
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
