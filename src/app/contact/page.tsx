import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/sections/fade-in";
import { ContactForm } from "@/components/forms/contact-form";
import { company, offices } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with King Health Systems, Inc. - call, email, or send us a message online.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="We're Here to Help"
        title="Contact Us"
        description="Your recommendations, questions, and comments are always welcome at King Health Systems, Inc."
        image="/images/bento-community-support.jpg"
        imageAlt="A diverse group of people stacking hands together in support"
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <FadeIn>
            <Card>
              <CardContent className="space-y-4 pt-6 text-sm">
                <a href={company.phoneHref} className="flex items-center gap-2 hover:underline">
                  <Phone className="size-4 text-primary" aria-hidden />
                  {company.phone}
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-2 hover:underline"
                >
                  <Mail className="size-4 text-primary" aria-hidden />
                  {company.email}
                </a>
                {offices.map((office) => (
                  <div key={office.id} className="flex items-start gap-2">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                    <span>
                      {office.name}
                      <br />
                      {office.addressLines.join(", ")}, {office.city}, {office.state}{" "}
                      {office.zip}
                    </span>
                  </div>
                ))}
                <p className="text-muted-foreground">{company.hours}</p>
              </CardContent>
            </Card>
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-2">
            <ContactForm />
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
