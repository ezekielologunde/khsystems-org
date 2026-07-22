import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/sections/fade-in";
import { managedCareOrganizations } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "Eligibility and Payment",
  description:
    "King Health Systems, Inc. accepts Maryland Medicaid only, with no PCP referral required. We do not currently accept private insurance.",
};

const faqs = [
  {
    question: "Who is eligible for services?",
    answer:
      "All children, adolescents, and adults with mental health needs who currently have active Maryland Medicaid are eligible. Clients without Medicaid may be seen on a self-pay basis (see payment methods below).",
  },
  {
    question: "What insurance is accepted?",
    answer:
      "We accept Maryland Medicaid through all major managed care organizations, at no cost to the client and with no PCP referral required. Please note that we do not currently accept any private insurance.",
  },
  {
    question: "How can I pay out of pocket?",
    answer:
      "We do not accept debit or credit cards for self-pay clients. Accepted payment methods for out-of-pocket services are cash, money order, or check.",
  },
  {
    question: "How is payment handled for Medicaid clients?",
    answer:
      "King Health Systems, Inc. bills Medicaid directly on your behalf and handles all prior authorization and billing paperwork, so you don't have to.",
  },
];

export default function EligibilityAndPaymentPage() {
  return (
    <>
      <PageHero
        eyebrow="Getting Started"
        title="Eligibility and Payment"
        description="We make it simple for Maryland Medicaid recipients to access high-quality mental health care."
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <FadeIn className="lg:col-span-2">
            <Accordion className="divide-y divide-border">
              {faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger className="text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-lg border border-border bg-muted p-6">
              <h2 className="font-heading text-lg font-semibold">
                Accepted Managed Care Organizations
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {managedCareOrganizations.map((mco) => (
                  <Badge key={mco} variant="secondary">
                    {mco}
                  </Badge>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
