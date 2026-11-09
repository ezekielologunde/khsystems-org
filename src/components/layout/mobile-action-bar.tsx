import Link from "next/link";
import { CalendarCheck, Phone } from "lucide-react";
import { company } from "@/lib/content/company";

/**
 * Phone-only sticky bar: the two things a visitor most needs, one tap away.
 * Hidden from lg up, where the header already carries both.
 */
export function MobileActionBar() {
  return (
    <>
      <div aria-hidden className="h-20 xl:hidden" />
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-6px_18px_rgba(15,23,42,0.08)] backdrop-blur xl:hidden">
        <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
          <a
            href={company.phoneHref}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-secondary text-base font-bold text-secondary-foreground"
          >
            <Phone className="size-4" aria-hidden />
            Call now
          </a>
          <Link
            href="/appointments"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-accent text-base font-bold text-accent-foreground"
          >
            <CalendarCheck className="size-4" aria-hidden />
            Request visit
          </Link>
        </div>
      </div>
    </>
  );
}
