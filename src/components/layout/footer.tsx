import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { CalendarCheck, ChevronDown, Mail, MapPin, Phone } from "lucide-react";
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
import { footerLinkGroups } from "@/components/layout/nav-data";

/** The short list people actually use. Everything else sits under "More pages". */
const QUICK_LINKS = [
  { label: "Our Services", href: "/services" },
  { label: "What We Treat", href: "/conditions" },
  { label: "Our Clinicians", href: "/team" },
  { label: "Your First Visit", href: "/first-visit" },
  { label: "Insurance & Payment", href: "/eligibility-and-payment" },
  { label: "Learn", href: "/learn" },
  { label: "News", href: "/learn/news" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];

const quickHrefs = new Set(QUICK_LINKS.map((l) => l.href));
const MORE_LINKS = footerLinkGroups
  .flatMap((g) => g.links)
  .filter((l, i, all) => !quickHrefs.has(l.href) && all.findIndex((x) => x.href === l.href) === i);

export async function Footer() {
  const t = await getTranslations("footer");
  const tNav = await getTranslations("nav");

  return (
    <footer className="bg-muted text-foreground">
      {/* Photo banner with the two actions most visitors want */}
      <Container className="pt-10">
        <div className="relative isolate overflow-hidden rounded-3xl bg-secondary text-white">
          <Image
            src="/images/stock/stock-community.jpg"
            alt=""
            fill
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="-z-10 object-cover opacity-45"
          />
          <div className="flex flex-col gap-6 p-8 sm:p-10 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-heading text-3xl font-bold leading-tight sm:text-4xl">
                Ready to talk to someone?
              </p>
              <p className="mt-2 text-white/90">
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
                className="min-h-12 border-white/60 bg-transparent font-bold text-white hover:bg-white/10 hover:text-white"
              >
                <Phone className="size-5" aria-hidden />
                {company.phone}
              </Button>
            </div>
          </div>
        </div>
      </Container>

      <Container className="py-8 sm:py-12">
        {/* Three offices as compact cards */}
        <ul className="grid gap-4 md:grid-cols-3">
          {offices.map((office) => (
            <li key={office.id}>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full items-start gap-3 rounded-2xl bg-card p-4 shadow-sm sm:p-5 transition-shadow hover:shadow-md"
              >
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                <span className="text-sm leading-snug">
                  <span className="block font-bold group-hover:underline">{office.name}</span>
                  <span className="text-foreground/75">
                    {office.addressLines.join(", ")}, {office.city}, {office.state} {office.zip}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-8 grid gap-8 sm:mt-10 sm:gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <div className="flex items-center gap-3">
              <LogoMark />
              <p className="font-heading text-xl font-bold">{company.name}</p>
            </div>
            <p className="mt-3 max-w-sm text-sm text-foreground/75">{accreditation.carf}</p>
            <ul className="mt-5 space-y-2 text-sm">
              <li>
                <a href={`mailto:${company.email}`} className="flex items-center gap-2 hover:underline">
                  <Mail className="size-4 shrink-0 text-primary" aria-hidden />
                  {company.email}
                </a>
              </li>
            </ul>
            <div className="mt-6 max-w-sm">
              <NewsletterSignup
                label={t("newsletterLabel")}
                placeholder={t("newsletterPlaceholder")}
                buttonLabel={t("newsletterButton")}
                successMessage={t("newsletterSuccess")}
              />
            </div>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-base font-medium sm:grid-cols-3">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-primary hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <details className="group mt-6 border-t border-border pt-4">
              <summary className="flex cursor-pointer list-none items-center gap-2 text-sm font-bold">
                More pages
                <ChevronDown
                  className="size-4 transition-transform group-open:rotate-180"
                  aria-hidden
                />
              </summary>
              <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 text-sm text-foreground/80 sm:grid-cols-2">
                {MORE_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-primary hover:underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </nav>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="space-y-3 py-6 text-xs text-foreground/70">
          <p className="max-w-3xl">
            <strong className="text-foreground">In crisis?</strong> Call or text 988, or call 911 in
            an emergency. This website is not for emergencies.
          </p>
          <p className="max-w-3xl">{medicationDisclaimer}</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1">
            <span>&copy; 2015&ndash;2026 {t("copyright")}</span>
            <Link href="/privacy-policy" className="hover:text-foreground hover:underline">
              {t("privacyPolicy")}
            </Link>
            <Link href="/accessibility" className="hover:text-foreground hover:underline">
              {t("accessibility")}
            </Link>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground hover:underline"
            >
              Facebook
            </a>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
