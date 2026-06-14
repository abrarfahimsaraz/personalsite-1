/**
 * Fixed, full-viewport ambient backdrop behind all content.
 * Layers: gradient mesh + drifting color blobs + animated particle/liquid-flow SVG.
 * Purely decorative — sits at -z-10 so frosted-glass surfaces blur it through.
 */
export default function AmbientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient mesh base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 18% 12%, hsl(var(--grad-1) / 0.20), transparent 60%)," +
            "radial-gradient(55% 45% at 85% 18%, hsl(var(--grad-2) / 0.18), transparent 60%)," +
            "radial-gradient(60% 55% at 50% 100%, hsl(var(--grad-3) / 0.14), transparent 62%)",
        }}
      />

      {/* Particle liquid-flow SVG — dark, only in dark mode (the asset has a dark canvas) */}
      <img
        src="/particle-animation.svg"
        alt=""
        aria-hidden="true"
        loading="eager"
        decoding="async"
        className="absolute left-1/2 top-1/2 hidden h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2 object-cover opacity-[0.55] mix-blend-screen dark:block"
      />

      {/* Drifting color blobs */}
      <div className="absolute -left-24 top-8 h-[30rem] w-[30rem] rounded-full bg-[hsl(var(--grad-1)/0.18)] blur-[120px] animate-drift" />
      <div
        className="absolute -right-24 top-1/3 h-[28rem] w-[28rem] rounded-full bg-[hsl(var(--grad-2)/0.16)] blur-[130px] animate-drift"
        style={{ animationDelay: "-7s" }}
      />
      <div
        className="absolute bottom-[-6rem] left-1/3 h-[26rem] w-[26rem] rounded-full bg-[hsl(var(--grad-3)/0.13)] blur-[130px] animate-drift"
        style={{ animationDelay: "-14s" }}
      />

      {/* Faint grid, faded toward edges */}
      <div className="absolute inset-0 bg-grid opacity-[0.18] mask-radial" />

      {/* Top + bottom vignette so the nav and footer stay legible */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[rgb(var(--backdrop))] to-transparent opacity-70" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[rgb(var(--backdrop))] to-transparent opacity-70" />
    </div>
  );
}
