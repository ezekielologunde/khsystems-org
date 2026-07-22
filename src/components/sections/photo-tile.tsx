import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function PhotoTile({
  src,
  alt,
  label,
  href,
  className,
  priority,
  frameClassName,
}: {
  src: string;
  alt: string;
  label: string;
  href?: string;
  className?: string;
  priority?: boolean;
  frameClassName?: string;
}) {
  const photo = (
    <div
      className={cn(
        "group relative aspect-[4/5] overflow-hidden bg-muted",
        frameClassName ? "rounded-[1.1rem]" : "rounded-2xl",
        !frameClassName && className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 50vw, 25vw"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 p-4">
        <span className="text-sm font-bold text-white">{label}</span>
        {href ? (
          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-white/90 text-foreground transition-transform group-hover:rotate-45">
            <ArrowUpRight className="size-4" />
          </span>
        ) : null}
      </div>
    </div>
  );

  const content = frameClassName ? (
    <div className={cn("rounded-[1.5rem] p-2.5", frameClassName, className)}>{photo}</div>
  ) : (
    photo
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}
