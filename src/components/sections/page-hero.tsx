import { Container } from "@/components/layout/container";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="border-b border-border bg-gradient-to-b from-secondary to-secondary/90 text-secondary-foreground">
      <Container className="py-14 sm:py-18">
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
      </Container>
    </div>
  );
}
