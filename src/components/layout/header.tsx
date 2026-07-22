"use client";

import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, Phone } from "lucide-react";
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

  const primaryNav = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "/about" },
    { label: t("careers"), href: "/careers" },
    { label: t("resources"), href: "/resources" },
    { label: t("contact"), href: "/contact" },
  ];

  const groupTitleKey: Record<string, string> = {
    Programs: t("programs"),
    Therapy: t("therapy"),
    "Assessments & Planning": t("assessments"),
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="bg-secondary text-secondary-foreground">
        <Container className="flex h-9 items-center justify-between gap-4 text-sm">
          <LanguageSwitcher className="flex items-center gap-1.5" />
          <a
            href={company.phoneHref}
            className="flex items-center gap-1.5 hover:opacity-90"
          >
            <Phone className="size-3.5" aria-hidden />
            {company.phone}
          </a>
        </Container>
      </div>
      <Container className="flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <LogoMark />
          <span className="flex flex-col leading-tight">
            <span className="font-heading text-xl font-bold text-primary">
              {company.name}
            </span>
            <span className="text-xs text-muted-foreground">{company.tagline}</span>
          </span>
        </Link>

        <nav className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList>
              {primaryNav.slice(0, 2).map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    render={<Link href={item.href} />}
                    className="inline-flex h-10 items-center px-4 py-2 text-sm font-medium hover:text-primary"
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <NavigationMenuTrigger>{t("services")}</NavigationMenuTrigger>
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
              {primaryNav.slice(2).map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    render={<Link href={item.href} />}
                    className="inline-flex h-10 items-center px-4 py-2 text-sm font-medium hover:text-primary"
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            render={<Link href="/appointments" />}
            className="hidden sm:inline-flex bg-accent text-accent-foreground hover:bg-accent/90"
          >
            {t("requestAppointment")}
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger render={<Button variant="outline" size="icon" className="lg:hidden" />}>
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
                {primaryNav.slice(0, 2).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
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
                {primaryNav.slice(2).map((item) => (
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
                  render={<Link href="/appointments" onClick={() => setOpen(false)} />}
                  className="mt-3 bg-accent text-accent-foreground hover:bg-accent/90"
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
