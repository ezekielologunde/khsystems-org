export function WordReveal({
  text,
  startDelay = 0.3,
  step = 0.1,
  dimWords = [],
  className,
}: {
  text: string;
  startDelay?: number;
  step?: number;
  dimWords?: string[];
  className?: string;
}) {
  const words = text.split(" ");
  const dimSet = new Set(dimWords.map((w) => w.toLowerCase()));

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`}>
          <span className="inline-block overflow-hidden align-bottom">
            <span
              className="inline-block"
              style={{
                animation: "wordReveal 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
                animationDelay: `${startDelay + i * step}s`,
                opacity: dimSet.has(word.toLowerCase().replace(/[^\w]/g, "")) ? 0.45 : 1,
              }}
            >
              {word}
            </span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}
