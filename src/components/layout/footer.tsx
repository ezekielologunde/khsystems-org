import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { CalendarCheck, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { LogoMark } from "@/components/layout/logo-mark";
import { NewsletterSignup } from "@/components/forms/newsletter-signup";
import {
  accreditation,
  company,
  facebookUrl,
  linkedInUrl,
  medicationDisclaimer,
  offices,
} from "@/lib/content/company";

/** Every footer link, grouped by what a visitor is trying to do. */
const LINK_GROUPS = [
  {
    title: "Care",
    links: [
      { label: "Our Services", href: "/services" },
      { label: "What We Treat", href: "/conditions" },
      { label: "Individual Therapy", href: "/services/individual-therapy" },
      { label: "Family Therapy", href: "/services/family-therapy" },
      { label: "Group Therapy", href: "/services/group-therapy" },
      { label: "Medication Management", href: "/services/medication-management" },
      { label: "Psychiatric Rehabilitation (PRP)", href: "/services/psychiatric-rehabilitation" },
    ],
  },
  {
    title: "Get started",
    links: [
      { label: "Request an Appointment", href: "/appointments" },
      { label: "Your First Visit", href: "/first-visit" },
      { label: "Do You Take My Insurance?", href: "/insurance-check" },
      { label: "Which Service Fits Me?", href: "/find-your-service" },
      { label: "Eligibility and Payment", href: "/eligibility-and-payment" },
      { label: "Referrals", href: "/referrals" },
      { label: "Transit Assistance", href: "/transit-assistance" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Articles", href: "/learn" },
      { label: "News & Updates", href: "/learn/news" },
      { label: "Check-ins (PHQ-9, GAD-7)", href: "/learn/check-in" },
      { label: "Resources", href: "/resources" },
      { label: "Medication Side Effects", href: "/medication-side-effects" },
      { label: "Calendar of Events", href: "/calendar" },
      { label: "Community Engagement", href: "/community-engagement" },
    ],
  },
  {
    title: "About us",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Clinicians", href: "/team" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Careers", href: "/careers" },
      { label: "Locations", href: "/locations" },
      { label: "Contact Us", href: "/contact" },
      { label: "Client Satisfaction Survey", href: "/satisfaction-survey" },
      { label: "Staff Resources", href: "/staff" },
    ],
  },
];

export async function Footer() {
  const t = await getTranslations("footer");
  const tNav = await getTranslations("nav");

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Bright-blue call-to-action band */}
      <div className="bg-gradient-to-r from-primary to-[#2f6bff] text-primary-foreground">
        <Container className="flex flex-col gap-5 py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-heading text-2xl font-bold leading-tight sm:text-3xl">
              Ready to talk to someone?
            </p>
            <p className="mt-1 text-primary-foreground/90">
              We accept Maryland Medicaid. {company.hours}.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              render={<Link href="/appointments" />}
              size="lg"
              className="min-h-12 bg-accent-yellow font-bold text-accent-yellow-foreground hover:bg-accent-yellow/90"
            >
              <CalendarCheck className="size-5" aria-hidden />
              {tNav("requestAppointment")}
            </Button>
            <Button
              render={<a href={company.phoneHref} />}
              size="lg"
              variant="outline"
              className="min-h-12 border-white/60 bg-transparent font-bold text-white hover:bg-white/15 hover:text-white"
            >
              <Phone className="size-5" aria-hidden />
              {company.phone}
            </Button>
          </div>
        </Container>
      </div>

      <Container className="py-12">
        {/* Link groups: two columns on phones, four on desktop */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {LINK_GROUPS.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <p className="border-b-2 border-primary pb-2 text-sm font-bold uppercase tracking-wide text-white">
                {group.title}
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-secondary-foreground/80">
                {group.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-white hover:underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Who we are, where to find us, and the newsletter */}
        <div className="mt-12 grid gap-10 border-t border-white/15 pt-10 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <div className="flex items-center gap-3">
              <LogoMark className="border-white" />
              <p className="font-heading text-xl font-bold">{company.name}</p>
            </div>
            <p className="mt-3 max-w-sm text-sm text-secondary-foreground/75">
              {accreditation.carf}
            </p>
            <a
              href={`mailto:${company.email}`}
              className="mt-4 flex items-center gap-2 text-sm hover:underline"
            >
              <Mail className="size-4 shrink-0 text-accent-yellow" aria-hidden />
              {company.email}
            </a>
            <div className="mt-6 max-w-sm">
              <NewsletterSignup
                label={t("newsletterLabel")}
                placeholder={t("newsletterPlaceholder")}
                buttonLabel={t("newsletterButton")}
                successMessage={t("newsletterSuccess")}
              />
            </div>
          </div>

          <ul className="grid gap-4 sm:grid-cols-3">
            {offices.map((office) => (
              <li key={office.id}>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full items-start gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 transition-colors hover:bg-white/10"
                >
                  <MapPin className="mt-0.5 size-5 shrink-0 text-accent-yellow" aria-hidden />
                  <span className="text-sm leading-snug">
                    <span className="block font-bold group-hover:underline">{office.name}</span>
                    <span className="text-secondary-foreground/75">
                      {office.addressLines.join(", ")}, {office.city}, {office.state} {office.zip}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/15 bg-black/20">
        <Container className="space-y-3 py-6 text-xs text-secondary-foreground/70">
          <p className="max-w-3xl">
            <strong className="text-white">In crisis?</strong> Call or text 988, or call 911 in an
            emergency. This website is not for emergencies.
          </p>
          <p className="max-w-3xl">{medicationDisclaimer}</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1">
            <span>&copy; 2015&ndash;2026 {t("copyright")}</span>
            <Link href="/privacy-policy" className="hover:text-white hover:underline">
              {t("privacyPolicy")}
            </Link>
            <Link href="/accessibility" className="hover:text-white hover:underline">
              {t("accessibility")}
            </Link>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline"
            >
              Facebook
            </a>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
