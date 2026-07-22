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
    <div className="border-b border-border bg-gradient-to-b from-secondary to-secondary/90 text-secondary-foreground">
      <Container
        className={
          image
            ? "grid gap-8 py-14 sm:py-18 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
            : "py-14 sm:py-18"
        }
      >
        <div>
          {eyebrow ? (
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="max-w-3xl text-3xl font-bold sm:text-4xl">{title}</h1>
          {description ? (
            <p className="mt-4 max-w-2xl text-secondary-foreground/85">
              {description}
            </p>
          ) : null}
        </div>
        {image ? (
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-secondary-foreground/10 lg:aspect-[5/4]">
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
