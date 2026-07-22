import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-12", className)}>
      {children}
    </div>
  );
}
