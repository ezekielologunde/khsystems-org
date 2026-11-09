/**
 * Short captioned intro video. Loads nothing until the visitor presses play
 * (preload="none"), has a poster and a captions track, and is never autoplayed.
 */
export function IntroVideo() {
  return (
    <div className="overflow-hidden rounded-3xl bg-secondary shadow-soft-lg">
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
    </div>
  );
}
