/**
 * Short captioned video. Loads nothing until the visitor presses play
 * (preload="none"), has a poster and a captions track, and is never autoplayed.
 * The background music is CC BY 4.0, so the credit is always shown beneath it.
 */
type IntroVideoProps = {
  src?: string;
  captions?: string;
  poster?: string;
  /** Short description for assistive tech. */
  label?: string;
};

export function IntroVideo({
  src = "/videos/khs-intro.mp4",
  captions = "/videos/khs-intro.vtt",
  poster = "/images/khs-intro-poster.jpg",
  label = "King Health Systems introduction video",
}: IntroVideoProps) {
  return (
    <figure className="overflow-hidden rounded-3xl bg-secondary shadow-soft-lg">
      <video
        controls
        playsInline
        preload="none"
        poster={poster}
        aria-label={label}
        className="aspect-video w-full"
      >
        <source src={src} type="video/mp4" />
        <track kind="captions" src={captions} srcLang="en" label="English" default />
        Your browser does not support video. Call 410-578-4340 to talk with our team.
      </video>
      <figcaption className="px-4 py-3 text-xs text-secondary-foreground/80">
        Music: &ldquo;Carefree&rdquo; by Kevin MacLeod (
        <a
          href="https://incompetech.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white"
        >
          incompetech.com
        </a>
        ), licensed under{" "}
        <a
          href="https://creativecommons.org/licenses/by/4.0/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white"
        >
          Creative Commons: By Attribution 4.0
        </a>
        .
      </figcaption>
    </figure>
  );
}
