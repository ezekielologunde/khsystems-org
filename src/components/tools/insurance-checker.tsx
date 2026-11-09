"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { company, managedCareOrganizations } from "@/lib/content/company";

const OTHER = "other";
const NO_MEDICAID = "none";

const OPTIONS = [
  ...managedCareOrganizations.map((label) => ({ label, value: label })),
  { label: "I'm not sure which plan", value: OTHER },
  { label: "I don't have Maryland Medicaid", value: NO_MEDICAID },
];

// Nothing is sent anywhere: the choice stays in this component.
export function InsuranceChecker() {
  const [choice, setChoice] = useState<string>("");

  return (
    <div className="space-y-6">
      <fieldset className="space-y-3">
        <legend className="text-lg font-bold">Which Maryland Medicaid plan do you have?</legend>
        <p className="text-sm text-muted-foreground">
          The plan name is usually on the front of your member card.
        </p>
        <div className="grid gap-2 sm:grid-cols-2">
          {OPTIONS.map((o) => (
            <label
              key={o.value}
              className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-lg border p-3 text-sm font-medium ${
                choice === o.value ? "border-primary bg-primary/10" : "border-border bg-card"
              }`}
            >
              <input
                type="radio"
                name="plan"
                value={o.value}
                checked={choice === o.value}
                onChange={() => setChoice(o.value)}
                className="size-4 accent-[var(--primary)]"
              />
              {o.label}
            </label>
          ))}
        </div>
      </fieldset>

      {choice ? (
        <div className="rounded-xl border border-border bg-muted p-6" aria-live="polite">
          {choice === NO_MEDICAID ? (
            <>
              <p className="text-lg font-bold">We accept Maryland Medicaid only.</p>
              <p className="mt-2">
                King Health Systems does not bill other insurance. If you need help right now, call
                or text 988.
              </p>
            </>
          ) : choice === OTHER ? (
            <>
              <p className="text-lg font-bold">Call us and we will check with you.</p>
              <p className="mt-2">
                We accept Maryland Medicaid through the plans listed above. Give us your member ID
                and we will confirm your coverage.
              </p>
            </>
          ) : (
            <>
              <p className="text-lg font-bold">Yes, we accept {choice}.</p>
              <p className="mt-2">
                We bill Maryland Medicaid directly. Coverage can change, so we confirm your
                eligibility when you contact us.
              </p>
            </>
          )}
          {choice !== NO_MEDICAID ? (
            <div className="mt-5 flex flex-wrap gap-3">
              <Button
                render={<Link href="/appointments" />}
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Request an appointment
              </Button>
              <Button render={<a href={company.phoneHref} />} variant="outline">
                Call {company.phone}
              </Button>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
