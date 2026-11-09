"use client";

import { useState } from "react";
import { Play } from "lucide-react";

// Privacy-friendly: nothing from YouTube loads until the visitor clicks play,
// and playback uses youtube-nocookie.com. Credit and link are always visible.
export function YouTubeEmbed({
  id,
  title,
  channel,
}: {
  id: string;
  title: string;
  channel: string;
}) {
  const [playing, setPlaying] = useState(false);
  return (
    <figure className="my-8">
      <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border bg-secondary">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center text-secondary-foreground"
          >
            <span className="flex size-16 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <Play className="size-7" aria-hidden />
            </span>
            <span className="max-w-md font-semibold">{title}</span>
            <span className="text-xs text-secondary-foreground/70">
              Click to play. Loads from YouTube (privacy-enhanced mode).
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-2 text-sm text-muted-foreground">
        Video: &ldquo;{title}&rdquo; by {channel}, via{" "}
        <a
          href={`https://www.youtube.com/watch?v=${id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          YouTube
        </a>
        . Not produced by King Health Systems; shown for education only.
      </figcaption>
    </figure>
  );
}
