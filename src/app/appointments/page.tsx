import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/sections/fade-in";
import { AppointmentForm } from "@/components/forms/appointment-form";

export const metadata: Metadata = {
  title: "Set an Appointment",
  description:
    "Request an appointment with King Health Systems, Inc. - available at our Baltimore and Laurel offices.",
};

export default function AppointmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Get Started"
        title="Set an Appointment"
        description="Please use the form below to request an appointment with King Health Systems, Inc."
      />
      <Section>
        <FadeIn className="mx-auto max-w-2xl">
          <AppointmentForm />
        </FadeIn>
      </Section>
    </>
  );
}
