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
        "glass inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-bold",
        className
      )}
    >
      {children}
    </span>
  );
}
