"use client";

import { useLocale } from "next-intl";
import { useTransition } from "react";
import { Globe } from "lucide-react";
import { setLocale } from "@/lib/actions/locale";
import type { Locale } from "@/i18n/config";

export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  function switchTo(next: Locale) {
    if (next === locale || isPending) return;
    startTransition(() => {
      setLocale(next);
    });
  }

  return (
    <div className={className}>
      <Globe className="size-3.5" aria-hidden />
      <button
        type="button"
        onClick={() => switchTo("en")}
        aria-current={locale === "en"}
        className="underline-offset-2 hover:underline aria-[current=true]:font-bold aria-[current=true]:underline"
      >
        EN
      </button>
      <span aria-hidden>/</span>
      <button
        type="button"
        onClick={() => switchTo("es")}
        aria-current={locale === "es"}
        className="underline-offset-2 hover:underline aria-[current=true]:font-bold aria-[current=true]:underline"
      >
        ES
      </button>
    </div>
  );
}
