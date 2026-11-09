"use client";

import { useSyncExternalStore } from "react";

type State = { open: boolean; label: string } | null;

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

/** Mon-Fri 9 AM to 5 PM, Maryland time. Computed on the client so the server HTML stays timeless. */
function compute(now = new Date()): State {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).formatToParts(now);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const day = get("weekday");
  const minutes = (Number(get("hour")) % 24) * 60 + Number(get("minute"));
  const weekday = DAYS.indexOf(day) >= 1 && DAYS.indexOf(day) <= 5;
  if (weekday && minutes >= 9 * 60 && minutes < 17 * 60) return { open: true, label: "Open now until 5 PM" };
  const idx = DAYS.indexOf(day);
  const opensToday = weekday && minutes < 9 * 60;
  const next = opensToday ? "today" : idx === 5 ? "Monday" : idx === 6 ? "Monday" : "tomorrow";
  return { open: false, label: `Closed now, opens ${next} at 9 AM` };
}

function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 60_000);
  return () => clearInterval(id);
}
// A string snapshot keeps the value stable between ticks; the server snapshot is empty.
const snapshot = () => {
  const s = compute();
  return s ? `${s.open ? "1" : "0"}|${s.label}` : "";
};

export function OpenNow({ className = "" }: { className?: string }) {
  const raw = useSyncExternalStore(subscribe, snapshot, () => "");
  const state: State = raw ? { open: raw.startsWith("1"), label: raw.slice(2) } : null;

  return (
    <p
      className={`inline-flex min-h-8 items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-bold text-foreground shadow-sm ${className}`}
    >
      <span
        aria-hidden
        className={`size-2.5 rounded-full ${state?.open ? "animate-pulse bg-emerald-500" : "bg-foreground/30"}`}
      />
      {state ? state.label : "Monday to Friday, 9 AM to 5 PM"}
    </p>
  );
}
