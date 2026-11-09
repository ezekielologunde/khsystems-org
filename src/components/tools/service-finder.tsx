"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/content/company";

type Option = { id: string; label: string };

const WHO: Option[] = [
  { id: "adult", label: "Me (an adult)" },
  { id: "child", label: "My child or teen" },
  { id: "family", label: "My family or relationship" },
];

const NEED: Option[] = [
  { id: "talk", label: "Someone to talk to" },
  { id: "meds", label: "A medication check or review" },
  { id: "skills", label: "Help with daily living and staying on track" },
  { id: "unsure", label: "I'm not sure yet" },
];

type Pick = { title: string; href: string; why: string };

function suggest(who: string, need: string): Pick[] {
  const out: Pick[] = [];
  if (need === "meds")
    out.push({
      title: "Medication management",
      href: "/services/medication-management",
      why: "Psychiatric nurse practitioners review and prescribe medication.",
    });
  if (need === "skills")
    out.push({
      title: "Psychiatric rehabilitation (PRP)",
      href: "/services/psychiatric-rehabilitation",
      why: "Skills and support for daily life, goals and recovery.",
    });
  if (who === "family")
    out.push({
      title: "Family therapy",
      href: "/services/family-therapy",
      why: "Sessions for families and couples together.",
    });
  if (who === "child")
    out.push({
      title: "Family therapy",
      href: "/services/family-therapy",
      why: "Children and teens are seen with family involved.",
    });
  if (need === "talk" || need === "unsure" || out.length === 0)
    out.push({
      title: "Individual therapy",
      href: "/services/individual-therapy",
      why: "One-to-one sessions with a licensed therapist.",
    });
  if (need === "unsure")
    out.push({
      title: "Psychiatric evaluation",
      href: "/services/psychiatric-evaluation",
      why: "A first assessment can help decide what fits.",
    });
  return out.filter((p, i, a) => a.findIndex((x) => x.href === p.href) === i);
}

function Choice({
  name,
  items,
  value,
  onSelect,
}: {
  name: string;
  items: Option[];
  value: string;
  onSelect: (v: string) => void;
}) {
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {items.map((o) => (
        <label
          key={o.id}
          className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-lg border p-3 text-sm font-medium ${
            value === o.id ? "border-primary bg-primary/10" : "border-border bg-card"
          }`}
        >
          <input
            type="radio"
            name={name}
            checked={value === o.id}
            onChange={() => onSelect(o.id)}
            className="size-4 accent-[var(--primary)]"
          />
          {o.label}
        </label>
      ))}
    </div>
  );
}

// Answers stay in component state; nothing is stored or sent.
export function ServiceFinder() {
  const [who, setWho] = useState("");
  const [need, setNeed] = useState("");

  return (
    <div className="space-y-8">
      <fieldset className="space-y-3">
        <legend className="text-lg font-bold">Who is the care for?</legend>
        <Choice name="who" items={WHO} value={who} onSelect={setWho} />
      </fieldset>
      <fieldset className="space-y-3">
        <legend className="text-lg font-bold">What would help most right now?</legend>
        <Choice name="need" items={NEED} value={need} onSelect={setNeed} />
      </fieldset>

      {who && need ? (
        <div className="rounded-xl border border-border bg-muted p-6" aria-live="polite">
          <p className="text-lg font-bold">These may be a good place to start</p>
          <ul className="mt-4 space-y-3">
            {suggest(who, need).map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="font-bold text-primary underline underline-offset-4">
                  {p.title}
                </Link>
                <span className="text-foreground/80"> &mdash; {p.why}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            This is a starting point, not a diagnosis. A licensed clinician decides the right plan
            with you.
          </p>
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
        </div>
      ) : null}
    </div>
  );
}
