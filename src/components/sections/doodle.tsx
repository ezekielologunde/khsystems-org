import { cn } from "@/lib/utils";

const VARIANTS = {
  star: (
    <path
      d="M12 2 L14.2 9.2 L21.5 9.5 L15.6 14 L17.8 21 L12 16.8 L6.2 21 L8.4 14 L2.5 9.5 L9.8 9.2 Z"
      strokeLinejoin="round"
    />
  ),
  spark: (
    <path
      d="M12 2 V9 M12 15 V22 M2 12 H9 M15 12 H22 M4.5 4.5 L9 9 M15 15 L19.5 19.5 M19.5 4.5 L15 9 M9 15 L4.5 19.5"
      strokeLinecap="round"
    />
  ),
  scribble: (
    <path
      d="M2 12 C 5 4, 9 4, 12 12 S 19 20, 22 12"
      strokeLinecap="round"
      fill="none"
    />
  ),
} as const;

export function Doodle({
  variant = "spark",
  className,
}: {
  variant?: keyof typeof VARIANTS;
  className?: string;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className={cn("size-6 text-accent-orange", className)}
    >
      {VARIANTS[variant]}
    </svg>
  );
}
