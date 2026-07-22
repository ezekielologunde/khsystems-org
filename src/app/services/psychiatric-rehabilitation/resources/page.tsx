import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/sections/fade-in";
import { prpResourceCategories } from "@/lib/content/resources";

export const metadata: Metadata = {
  title: "PRP Resources",
  description:
    "Benefits, entitlements, and employment resources for PRP clients of King Health Systems, Inc.",
};

export default function PrpResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Psychiatric Rehabilitation Program"
        title="PRP Resources"
        description="A curated list of benefits, entitlement, and employment resources our Rehabilitation Counselors regularly connect PRP clients with."
      />
      <Section>
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink render={<Link href="/services" />}>
                Our Services
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink render={<Link href="/services/psychiatric-rehabilitation" />}>
                PRP
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>PRP Resources</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-10">
          {prpResourceCategories.map((category, i) => (
            <FadeIn key={category.key} delay={i * 0.05}>
              <h2 className="mb-4 text-xl font-extrabold">{category.title}</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {category.items.map((item) => (
                  <Card key={item.name}>
                    <CardHeader>
                      <CardTitle className="text-base">{item.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-1 text-sm text-muted-foreground">
                      {item.contact ? <p>{item.contact}</p> : null}
                      {item.phone ? <p>{item.phone}</p> : null}
                      {item.email ? <p>{item.email}</p> : null}
                      {item.address ? <p>{item.address}</p> : null}
                      {item.url ? (
                        <a href={item.url} className="text-primary hover:underline">
                          {item.url.replace(/^https?:\/\//, "")}
                        </a>
                      ) : null}
                    </CardContent>
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
