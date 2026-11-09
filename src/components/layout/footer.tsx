import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { CalendarCheck, Clock, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
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

export async function Footer() {
  const t = await getTranslations("footer");
  const tNav = await getTranslations("nav");

  const groupTitleKey: Record<string, string> = {
    Services: t("servicesTitle"),
    "Get Started": t("getStartedTitle"),
    Company: t("companyTitle"),
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Last call to action: the two things most visitors came for */}
      <div className="border-b border-white/10 bg-primary text-primary-foreground">
        <Container className="flex flex-col gap-5 py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-heading text-2xl font-bold sm:text-3xl">
              Ready to talk to someone?
            </p>
            <p className="mt-1 flex items-center gap-2 text-primary-foreground/85">
              <ShieldCheck className="size-4 shrink-0" aria-hidden />
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
              className="min-h-12 border-white/50 bg-transparent font-bold text-white hover:bg-white/10 hover:text-white"
            >
              <Phone className="size-5" aria-hidden />
              {company.phone}
            </Button>
          </div>
        </Container>
      </div>

      <Container className="grid gap-12 py-14 lg:grid-cols-[1.1fr_2fr]">
        {/* Who we are and where to find us */}
        <div>
          <div className="flex items-center gap-3">
            <LogoMark />
            <p className="font-heading text-xl font-bold">{company.name}</p>
          </div>
          <p className="mt-3 max-w-sm text-sm text-secondary-foreground/80">
            {accreditation.carf}
          </p>

          <ul className="mt-6 space-y-5 text-sm">
            {offices.map((office) => (
              <li key={office.id} className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent-yellow" aria-hidden />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <span className="block font-bold group-hover:underline">{office.name}</span>
                  <span className="text-secondary-foreground/75">
                    {office.addressLines.join(", ")}, {office.city}, {office.state} {office.zip}
                  </span>
                </a>
              </li>
            ))}
            <li className="flex items-center gap-3">
              <Clock className="size-4 shrink-0 text-accent-yellow" aria-hidden />
              <span className="text-secondary-foreground/75">{company.hours}</span>
            </li>
            <li>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-3 hover:underline"
              >
                <Mail className="size-4 shrink-0 text-accent-yellow" aria-hidden />
                {company.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
          {footerLinkGroups.map((group) => (
            <nav key={group.title} aria-label={groupTitleKey[group.title] ?? group.title}>
              <p className="text-sm font-bold text-white">
                {groupTitleKey[group.title] ?? group.title}
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-secondary-foreground/80">
                {group.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link href={link.href} className="hover:text-white hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <div className="sm:col-span-2 xl:col-span-4">
            <NewsletterSignup
              label={t("newsletterLabel")}
              placeholder={t("newsletterPlaceholder")}
              buttonLabel={t("newsletterButton")}
              successMessage={t("newsletterSuccess")}
            />
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="space-y-3 py-6 text-xs text-secondary-foreground/70">
          <p className="max-w-3xl">
            <strong className="text-secondary-foreground/90">In crisis?</strong> Call or text 988,
            or call 911 in an emergency. This website is not for emergencies.
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
