import type { Metadata } from "next";
import { LayoutDashboard, Mail, Stethoscope, ClipboardList, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/sections/fade-in";
import { resourceCategories } from "@/lib/content/resources";

export const metadata: Metadata = {
  title: "Staff Resources",
  description: "Quick links to the PRP Tool, staff email, Carelon ProviderConnect, and LightningStep for King Health Systems staff.",
  robots: { index: false, follow: false },
};

const staffLinks = [
  {
    name: "PRP Tool",
    description: "Authorization tracker, billing reconciliation, and claim status for internal staff.",
    url: "/prp",
    icon: LayoutDashboard,
  },
  {
    name: "Staff Gmail",
    description: "kinghealthsystem@gmail.com",
    url: "https://mail.google.com/mail/u/0/?authuser=kinghealthsystem@gmail.com",
    icon: Mail,
  },
  {
    name: "Carelon ProviderConnect",
    description: "Submit authorizations, check claim status, and view remittances with Carelon Behavioral Health.",
    url: "https://providerconnect.carelonbehavioralhealth.com/pc/eProvider/providerMember.do?notRFS=true",
    icon: Stethoscope,
  },
  {
    name: "LightningStep",
    description: "Client charting, PRP progress notes, and program admissions.",
    url: "https://khsystems.lightningstep.com/auth/login",
    icon: ClipboardList,
  },
];

export default function StaffPage() {
  return (
    <>
      <PageHero
        eyebrow="Staff Only"
        title="Staff Resources"
        description="Quick links to the tools King Health Systems staff use every day."
      />
      <Section>
        <div className="space-y-14">
          <FadeIn>
            <div className="grid gap-4 sm:grid-cols-2">
              {staffLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith("/") ? undefined : "_blank"}
                  rel={link.url.startsWith("/") ? undefined : "noopener noreferrer"}
                  className="group focus-visible:outline-none"
                >
                  <Card className="h-full transition-shadow group-hover:shadow-soft-md group-focus-visible:ring-2 group-focus-visible:ring-ring">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <link.icon className="size-5" aria-hidden />
                          </span>
                          <CardTitle className="text-base">{link.name}</CardTitle>
                        </div>
                        <ExternalLink className="mt-1 size-4 shrink-0 text-muted-foreground" aria-hidden />
                      </div>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">{link.description}</CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </FadeIn>

          {resourceCategories.map((category, i) => (
            <FadeIn key={category.key} delay={(i + 1) * 0.05}>
              <h2 className="mb-5 text-2xl font-extrabold">{category.title}</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item) => (
                  <Card key={item.name}>
                    <CardHeader>
                      <CardTitle className="text-base leading-snug">{item.name}</CardTitle>
                    </CardHeader>
                    {item.phone || item.phoneAlt || item.url ? (
                      <CardContent className="space-y-1 text-sm text-muted-foreground">
                        {item.phone ? <p>{item.phone}</p> : null}
                        {item.phoneAlt ? <p>{item.phoneAlt}</p> : null}
                        {item.url ? (
                          <a href={item.url} className="text-primary hover:underline">
                            {item.url.replace(/^https?:\/\//, "")}
                          </a>
                        ) : null}
                      </CardContent>
                    ) : null}
                  </Card>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
