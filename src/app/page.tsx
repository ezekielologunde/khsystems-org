import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, HeartHandshake, MapPin, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/sections/fade-in";
import { ServiceCard } from "@/components/sections/service-card";
import { company, offices } from "@/lib/content/company";
import { programs } from "@/lib/content/services";
import { testimonials } from "@/lib/content/testimonials";

export const metadata: Metadata = {
  title: "Home",
  description:
    "King Health Systems, Inc. provides culturally sensitive, high-quality mental health services to children, adolescents, adults, and their families in Baltimore and Laurel, Maryland.",
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary via-secondary to-primary/95 text-secondary-foreground">
        <div
          aria-hidden
          className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_20%_20%,white,transparent_35%),radial-gradient(circle_at_80%_0%,white,transparent_30%)]"
        />
        <Container className="relative py-24 sm:py-32">
          <FadeIn>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              {company.tagline}
            </p>
            <h1 className="max-w-2xl text-4xl font-bold sm:text-5xl">
              Welcome to {company.name}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-secondary-foreground/90">
              {company.mission}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                render={<Link href="/appointments" />}
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Request an Appointment
              </Button>
              <Button
                render={<Link href="/services" />}
                size="lg"
                variant="outline"
                className="border-white/40 bg-transparent text-secondary-foreground hover:bg-white/10"
              >
                Explore Our Services
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>

      <Section>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Our Programs
          </p>
          <h2 className="mt-2 text-3xl font-bold">
            Comprehensive mental health care, close to home
          </h2>
          <p className="mt-4 text-muted-foreground">
            Board-certified psychiatric nurse practitioners, licensed therapists, and
            social workers deliver in-office, at-home, and telehealth care for
            children (5+), adolescents, adults, couples, and families.
          </p>
        </FadeIn>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      <Section className="bg-muted">
        <div className="grid gap-10 lg:grid-cols-3">
          <FadeIn>
            <div className="flex h-full flex-col rounded-lg bg-card p-6 shadow-sm">
              <HeartHandshake className="size-8 text-primary" aria-hidden />
              <h3 className="mt-4 font-heading text-xl font-semibold">
                Community Engagement
              </h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">
                We consistently strive to be a positive influence in our
                community, including limited pro-bono services and free
                transportation for clients in the 21215 zip code.
              </p>
              <Link
                href="/community-engagement"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary"
              >
                Learn more <ArrowRight className="size-4" />
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="flex h-full flex-col rounded-lg bg-card p-6 shadow-sm">
              <ShieldCheck className="size-8 text-primary" aria-hidden />
              <h3 className="mt-4 font-heading text-xl font-semibold">
                Eligibility & Payment
              </h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">
                We accept Maryland Medicaid through all major managed care
                organizations at no cost, with no PCP referral required.
              </p>
              <Link
                href="/eligibility-and-payment"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary"
              >
                Learn more <ArrowRight className="size-4" />
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.16}>
            <div className="flex h-full flex-col rounded-lg bg-card p-6 shadow-sm">
              <MapPin className="size-8 text-primary" aria-hidden />
              <h3 className="mt-4 font-heading text-xl font-semibold">
                Our Locations
              </h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">
                {offices.map((o) => o.city).join(" & ")}, Maryland &mdash; in-person
                and telehealth appointments available Monday&ndash;Friday.
              </p>
              <Link
                href="/locations"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary"
              >
                View locations <ArrowRight className="size-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </Section>

      {testimonials.length > 0 ? (
        <Section>
          <FadeIn className="mx-auto max-w-3xl rounded-xl border border-border bg-card p-10 text-center shadow-sm">
            <p className="font-heading text-2xl italic leading-relaxed text-foreground/90">
              &ldquo;{testimonials[0].quote}&rdquo;
            </p>
            <p className="mt-4 text-sm font-semibold text-muted-foreground">
              &mdash; {testimonials[0].author}
            </p>
          </FadeIn>
        </Section>
      ) : null}

      <Section className="bg-primary text-primary-foreground">
        <FadeIn className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold">Ready to get started?</h2>
          <p className="max-w-xl text-primary-foreground/85">
            Call us at {company.phone} or request an appointment online &mdash;
            our team is here Monday through Friday, 9:00 AM to 5:00 PM.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            <Button
              render={<Link href="/appointments" />}
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Request an Appointment
            </Button>
            <Button
              render={<Link href="/contact" />}
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-primary-foreground hover:bg-white/10"
            >
              Contact Us
            </Button>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
