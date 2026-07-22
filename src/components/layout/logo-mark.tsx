import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "flex size-9 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-base font-bold text-primary-foreground",
        className
      )}
    >
      K
    </span>
  );
}
