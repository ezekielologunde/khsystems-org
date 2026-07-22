import { cn } from "@/lib/utils";

export function Marquee({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div className="animate-marquee flex shrink-0 items-center gap-3 group-hover:[animation-play-state:paused]">
        {children}
      </div>
      <div
        aria-hidden
        className="animate-marquee flex shrink-0 items-center gap-3 group-hover:[animation-play-state:paused]"
      >
        {children}
      </div>
    </div>
  );
}
