"use client";

import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/layout/container";
import { LogoMark } from "@/components/layout/logo-mark";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { company } from "@/lib/content/company";
import { serviceMenuGroups } from "@/components/layout/nav-data";

export function Header() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("nav");

  // Desktop: Services (menu), About, Learn (menu), Careers, Contact. The logo is Home.
  const learnLinks = [
    { label: t("learn"), href: "/learn" },
    { label: t("news"), href: "/learn/news" },
    { label: t("resources"), href: "/resources" },
  ];
  const plainBefore = [{ label: t("about"), href: "/about" }];
  const plainAfter = [
    { label: t("careers"), href: "/careers" },
    { label: t("contact"), href: "/contact" },
  ];
  const linkCls =
    "inline-flex h-10 items-center whitespace-nowrap px-3.5 py-2 text-[0.95rem] font-semibold hover:text-primary";

  const groupTitleKey: Record<string, string> = {
    Programs: t("programs"),
    Therapy: t("therapy"),
    "Assessments & Planning": t("assessments"),
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div className="bg-secondary text-secondary-foreground">
        <Container className="flex min-h-10 items-center justify-between gap-4 py-1.5 text-sm">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-semibold">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-yellow px-3 py-0.5 text-accent-yellow-foreground">
              <ShieldCheck className="size-4 shrink-0" aria-hidden />
              Maryland Medicaid accepted
            </span>
            <span className="hidden text-secondary-foreground/80 sm:inline">{company.hours}</span>
          </p>
          <div className="flex items-center gap-5">
            <LanguageSwitcher className="flex items-center gap-1.5" />
          </div>
        </Container>
      </div>
      <Container className="flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label={company.name}>
          <LogoMark />
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate font-heading text-lg font-bold text-primary sm:text-xl">
              {company.name}
            </span>
            <span className="hidden truncate text-xs text-muted-foreground sm:block">
              {company.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden xl:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-[0.95rem] font-semibold">{t("services")}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] grid-cols-3 gap-6 p-6">
                    {serviceMenuGroups.map((group) => (
                      <div key={group.title}>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          {groupTitleKey[group.title] ?? group.title}
                        </p>
                        <ul className="space-y-1.5">
                          {group.links.map((link) => (
                            <li key={link.href}>
                              <NavigationMenuLink
                                render={<Link href={link.href} />}
                                className="text-sm hover:text-primary"
                              >
                                {link.label}
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {plainBefore.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink render={<Link href={item.href} />} className={linkCls}>
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-[0.95rem] font-semibold">{t("learn")}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-56 space-y-1 p-3">
                    {learnLinks.map((link) => (
                      <li key={link.href}>
                        <NavigationMenuLink
                          render={<Link href={link.href} />}
                          className="block rounded-md px-2 py-1.5 text-sm font-medium hover:text-primary"
                        >
                          {link.label}
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {plainAfter.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink render={<Link href={item.href} />} className={linkCls}>
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            render={<a href={company.phoneHref} />}
            size="lg"
            variant="outline"
            className="hidden min-h-12 border-2 border-foreground bg-transparent px-5 text-base font-bold hover:bg-foreground hover:text-background lg:inline-flex"
          >
            <Phone className="size-4" aria-hidden />
            {company.phone}
          </Button>
          <Button
            render={<Link href="/appointments" />}
            size="lg"
            className="hidden min-h-12 bg-accent-yellow px-6 text-base font-bold text-accent-yellow-foreground shadow-md hover:bg-accent-yellow/90 sm:inline-flex"
          >
            {t("requestAppointment")}
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger render={<Button variant="outline" size="icon" className="xl:hidden" />}>
              <Menu className="size-5" />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[360px]">
              <SheetHeader>
                <SheetTitle className="text-left font-heading text-primary">
                  {company.name}
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {[{ label: t("home"), href: "/" }, ...plainBefore].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2 text-base font-medium hover:bg-muted"
                  >
                    {item.label}
                  </Link>
                ))}
                <Accordion>
                  <AccordionItem value="services" className="border-none">
                    <AccordionTrigger className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:no-underline">
                      {t("services")}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-3 px-3 pb-2">
                        {serviceMenuGroups.map((group) => (
                          <div key={group.title}>
                            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                              {groupTitleKey[group.title] ?? group.title}
                            </p>
                            <div className="flex flex-col gap-1">
                              {group.links.map((link) => (
                                <Link
                                  key={link.href}
                                  href={link.href}
                                  onClick={() => setOpen(false)}
                                  className="rounded-md px-2 py-1.5 text-sm hover:bg-muted"
                                >
                                  {link.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                {[...learnLinks, ...plainAfter].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button
                  render={<a href={company.phoneHref} />}
                  variant="outline"
                  size="lg"
                  className="mt-3 min-h-12 border-2 border-foreground bg-transparent text-base font-bold"
                >
                  <Phone className="size-4" aria-hidden />
                  Call {company.phone}
                </Button>
                <Button
                  render={<Link href="/appointments" onClick={() => setOpen(false)} />}
                  size="lg"
                  className="mt-2 min-h-12 bg-accent-yellow text-base font-bold text-accent-yellow-foreground hover:bg-accent-yellow/90"
                >
                  {t("requestAppointment")}
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
