import Image from "next/image";
import { Container } from "@/components/layout/container";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <div className="relative overflow-hidden border-b border-border bg-gradient-to-b from-secondary to-secondary/90 text-secondary-foreground">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-16 size-80 rounded-full bg-primary/40 blur-3xl" />
        <div className="absolute -bottom-24 right-0 size-96 rounded-full bg-sky-400/25 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl" />
      </div>
      <Container
        className={
          image
            ? "relative grid gap-8 py-14 sm:py-18 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
            : "relative py-14 sm:py-18"
        }
      >
        <div>
          {eyebrow ? (
            <p className="mb-2 text-sm font-bold uppercase tracking-wide text-accent">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-4 max-w-2xl text-lg font-medium text-secondary-foreground/85">
              {description}
            </p>
          ) : null}
        </div>
        {image ? (
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-secondary-foreground/10 shadow-xl ring-1 ring-white/10 lg:aspect-[5/4]">
            <Image
              src={image}
              alt={imageAlt ?? ""}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
              priority
            />
          </div>
        ) : null}
      </Container>
    </div>
  );
}
