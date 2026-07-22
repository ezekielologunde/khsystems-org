"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { company } from "@/lib/content/company";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Section className="py-28 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-destructive">
        Something went wrong
      </p>
      <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
        We hit an unexpected error
      </h1>
      <p className="mx-auto mt-4 max-w-md text-muted-foreground">
        Please try again. If the problem continues, call us at{" "}
        {company.phone} and we&apos;ll help you directly.
      </p>
      <div className="mt-8 flex justify-center">
        <Button onClick={reset} className="bg-accent text-accent-foreground hover:bg-accent/90">
          Try again
        </Button>
      </div>
    </Section>
  );
}
