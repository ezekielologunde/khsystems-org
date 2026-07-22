import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/layout/container";
import { LogoMark } from "@/components/layout/logo-mark";
import { company, offices, medicationDisclaimer } from "@/lib/content/company";
import { footerLinkGroups } from "@/components/layout/nav-data";

export async function Footer() {
  const t = await getTranslations("footer");

  const groupTitleKey: Record<string, string> = {
    Services: t("servicesTitle"),
    "Get Started": t("getStartedTitle"),
    Company: t("companyTitle"),
  };

  return (
    <footer className="border-t border-border bg-secondary text-secondary-foreground">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <LogoMark />
            <p className="font-heading text-lg font-bold">{company.name}</p>
          </div>
          <p className="mt-1 text-sm text-secondary-foreground/80">{company.tagline}</p>

          <div className="mt-5 space-y-3 text-sm">
            <a href={company.phoneHref} className="flex items-center gap-2 hover:underline">
              <Phone className="size-4 shrink-0" aria-hidden />
              {company.phone}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-2 hover:underline"
            >
              <Mail className="size-4 shrink-0" aria-hidden />
              {company.email}
            </a>
            {offices.map((office) => (
              <div key={office.id} className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
                <span>
                  {office.name}
                  <br />
                  {office.addressLines.join(", ")}, {office.city}, {office.state}{" "}
                  {office.zip}
                </span>
              </div>
            ))}
            <p className="text-secondary-foreground/70">{company.hours}</p>
          </div>
        </div>

        {footerLinkGroups.map((group) => (
          <div key={group.title}>
            <p className="text-xs font-semibold uppercase tracking-wide text-secondary-foreground/70">
              {groupTitleKey[group.title] ?? group.title}
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-xs text-secondary-foreground/70 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl">{medicationDisclaimer}</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>&copy; 2015&ndash;2026 {t("copyright")}</span>
            <Link href="/privacy-policy" className="hover:underline">
              {t("privacyPolicy")}
            </Link>
            <Link href="/accessibility" className="hover:underline">
              {t("accessibility")}
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
