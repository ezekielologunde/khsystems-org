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
    <div className="relative overflow-hidden bg-secondary text-secondary-foreground">
      <Container
        className={
          image
            ? "relative grid gap-8 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
            : "relative py-16 sm:py-20"
        }
      >
        <div>
          {eyebrow ? (
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-bold uppercase tracking-wide text-accent">
              {eyebrow}
            </span>
          ) : null}
          <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 max-w-2xl text-xl font-medium text-secondary-foreground/80">
              {description}
            </p>
          ) : null}
        </div>
        {image ? (
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-secondary-foreground/10 shadow-soft-lg lg:aspect-[5/4]">
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
