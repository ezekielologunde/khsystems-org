import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { company } from "@/lib/content/company";

export default function NotFound() {
  return (
    <Section className="py-28 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary">
        404
      </p>
      <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Page not found</h1>
      <p className="mx-auto mt-4 max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or may have
        moved. If you need help, call us at {company.phone}.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button render={<Link href="/" />} className="bg-accent text-accent-foreground hover:bg-accent/90">
          Back to Home
        </Button>
        <Button render={<Link href="/contact" />} variant="outline">
          Contact Us
        </Button>
      </div>
    </Section>
  );
}
