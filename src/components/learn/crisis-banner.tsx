export function CrisisBanner() {
  return (
    <aside
      role="note"
      className="rounded-lg border border-accent/40 bg-accent/10 p-4 text-sm text-foreground"
    >
      <strong>If you or someone you know is in crisis,</strong> call or text{" "}
      <a href="tel:988" className="font-semibold underline">
        988
      </a>{" "}
      (Suicide &amp; Crisis Lifeline), or call 911 in an emergency. This article is for
      education and is not medical advice.
    </aside>
  );
}
