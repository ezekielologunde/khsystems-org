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
    <div className="relative overflow-hidden border-b-2 border-foreground bg-secondary text-secondary-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.15)_1.5px,transparent_1.5px)] [background-size:26px_26px]"
      />
      <Container
        className={
          image
            ? "relative grid gap-8 py-14 sm:py-18 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
            : "relative py-14 sm:py-18"
        }
      >
        <div>
          {eyebrow ? (
            <span className="inline-flex -rotate-1 items-center rounded-full border-2 border-white/80 bg-white/10 px-4 py-1 text-sm font-bold uppercase tracking-wide text-accent">
              {eyebrow}
            </span>
          ) : null}
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-4 max-w-2xl text-lg font-medium text-secondary-foreground/85">
              {description}
            </p>
          ) : null}
        </div>
        {image ? (
          <div className="relative aspect-[4/3] w-full rotate-1 overflow-hidden rounded-2xl border-2 border-white/70 bg-secondary-foreground/10 shadow-[6px_6px_0_0_rgba(255,255,255,0.25)] lg:aspect-[5/4]">
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
