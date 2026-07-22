const initials = ["S", "M", "J", "A"];

export function AvatarStack() {
  return (
    <div className="flex -space-x-3">
      {initials.map((letter, i) => (
        <span
          key={letter}
          style={{ zIndex: initials.length - i }}
          className="flex size-9 items-center justify-center rounded-full border-2 border-background bg-secondary text-xs font-semibold text-secondary-foreground"
        >
          {letter}
        </span>
      ))}
    </div>
  );
}
