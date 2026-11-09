/**
 * Short captioned intro video. Loads nothing until the visitor presses play
 * (preload="none"), has a poster and a captions track, and is never autoplayed.
 */
export function IntroVideo() {
  return (
    <figure className="overflow-hidden rounded-3xl bg-secondary shadow-soft-lg">
      <video
        controls
        playsInline
        preload="none"
        poster="/images/khs-intro-poster.jpg"
        className="aspect-video w-full"
      >
        <source src="/videos/khs-intro.mp4" type="video/mp4" />
        <track kind="captions" src="/videos/khs-intro.vtt" srcLang="en" label="English" default />
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
