import { Crown } from "lucide-react";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground",
        className
      )}
    >
      <Crown className="size-5" strokeWidth={2.25} fill="currentColor" fillOpacity={0.15} />
    </span>
  );
}
