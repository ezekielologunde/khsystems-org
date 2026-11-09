"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { answerOptions, scoreBand, type Screener } from "@/lib/content/screeners";
import { company } from "@/lib/content/company";

// Everything stays in component state: no network requests, storage or tracking of answers.
export function ScreenerQuiz({ screener }: { screener: Screener }) {
  const [answers, setAnswers] = useState<(number | null)[]>(
    () => screener.questions.map(() => null),
  );
  const [done, setDone] = useState(false);

  const complete = answers.every((a) => a !== null);
  const total = answers.reduce<number>((sum, a) => sum + (a ?? 0), 0);
  const band = scoreBand(screener, total);
  const safetyFlag =
    screener.safetyQuestion !== undefined && (answers[screener.safetyQuestion] ?? 0) > 0;

  if (done) {
    return (
      <div className="space-y-5" aria-live="polite">
        {safetyFlag ? (
          <div role="alert" className="rounded-lg border-2 border-destructive bg-destructive/10 p-5">
            <p className="font-semibold">
              You said you have had thoughts of being better off dead or of hurting yourself.
            </p>
            <p className="mt-2">
              You are not alone, and help is available right now. Call or text{" "}
              <a href="tel:988" className="font-bold underline">988</a> (Suicide &amp; Crisis
              Lifeline, free, 24/7), or call 911 if you are in immediate danger.
            </p>
          </div>
        ) : null}
        <div className="rounded-lg border border-border bg-muted p-6">
          <p className="text-sm text-muted-foreground">Your score</p>
          <p className="font-heading text-4xl font-bold">
            {total} <span className="text-lg font-medium">({band.label})</span>
          </p>
          <p className="mt-3 leading-relaxed">{band.message}</p>
        </div>
        <p className="text-sm text-muted-foreground">
          This is a screening tool, not a diagnosis. Only a licensed professional can diagnose a
          condition. Your answers were not saved or sent anywhere.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button render={<Link href="/appointments" />} className="bg-accent text-accent-foreground hover:bg-accent/90">
            Request an appointment
          </Button>
          <Button render={<a href={company.phoneHref} />} variant="outline">
            Call {company.phone}
          </Button>
          <Button
            variant="ghost"
            onClick={() => {
              setAnswers(screener.questions.map(() => null));
              setDone(false);
            }}
          >
            Start over
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          King Health Systems accepts Maryland Medicaid only. Bring this score to your first visit
          if you would like to.
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        if (complete) setDone(true);
      }}
    >
      <p className="font-medium">Over the last 2 weeks, how often have you been bothered by:</p>
      {screener.questions.map((q, i) => (
        <fieldset key={q} className="rounded-lg border border-border p-4">
          <legend className="px-1 text-sm font-semibold">
            {i + 1}. {q}
          </legend>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {answerOptions.map((o) => (
              <label
                key={o.value}
                className="flex cursor-pointer items-center gap-2 rounded-md border border-border px-3 py-2 text-sm has-[:checked]:border-primary has-[:checked]:bg-primary/10"
              >
                <input
                  type="radio"
                  name={`q${i}`}
                  value={o.value}
                  checked={answers[i] === o.value}
                  onChange={() =>
                    setAnswers((prev) => prev.map((v, idx) => (idx === i ? o.value : v)))
                  }
                />
                {o.label}
              </label>
            ))}
          </div>
        </fieldset>
      ))}
      <Button type="submit" disabled={!complete} className="bg-accent text-accent-foreground hover:bg-accent/90">
        See my score
      </Button>
      {!complete ? (
        <p className="text-sm text-muted-foreground">Answer all questions to see your score.</p>
      ) : null}
    </form>
  );
}
