import { cn } from "@/lib/utils";

export function Sticker({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-bold shadow-soft-sm",
        className
      )}
    >
      {children}
    </span>
  );
}
