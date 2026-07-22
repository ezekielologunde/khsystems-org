import { cn } from "@/lib/utils";

export function Sticker({
  children,
  className,
  rotate = -3,
}: {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
}) {
  return (
    <span
      style={{ transform: `rotate(${rotate}deg)` }}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border-2 border-foreground bg-card px-4 py-1.5 text-sm font-bold shadow-hard-sm",
        className
      )}
    >
      {children}
    </span>
  );
}
