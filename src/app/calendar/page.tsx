import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/sections/fade-in";

export const metadata: Metadata = {
  title: "Calendar of Events",
  description: "Upcoming events and availability at King Health Systems, Inc.",
};

const calendarSrc =
  "https://calendar.google.com/calendar/embed?src=kinghealthsystem%40gmail.com&ctz=America%2FNew_York";

export default function CalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Stay Up to Date"
        title="Calendar of Events"
        description="Upcoming events and availability from King Health Systems, Inc."
      />
      <Section>
        <FadeIn className="mx-auto max-w-4xl overflow-hidden rounded-lg border border-border shadow-sm">
          <iframe
            title="King Health Systems, Inc. Calendar"
            src={calendarSrc}
            className="h-[600px] w-full border-0"
            loading="lazy"
          />
        </FadeIn>
      </Section>
    </>
  );
}
