/**
 * Fixed, full-viewport ambient backdrop behind all content.
 * Layers: gradient mesh + drifting color blobs + (dark-only) particle SVG.
 * Purely decorative — sits at -z-10 so frosted-glass surfaces blur it through.
 *
 * Perf: blur radius, blob size, and blob count all scale UP with viewport.
 * Small screens (phones / low-power browsers like Opera) paint one modest blob;
 * large blurs and the extra blobs are gated to sm/lg so mobile stays smooth.
 * The particle SVG renders in dark mode only (light is the default theme).
 */
export default function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ backgroundColor: "rgb(var(--backdrop))" }}
    >
      {/* Gradient mesh base — static, cheap */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 18% 12%, hsl(var(--grad-1) / 0.18), transparent 60%)," +
            "radial-gradient(55% 45% at 85% 18%, hsl(var(--grad-2) / 0.16), transparent 60%)," +
            "radial-gradient(60% 55% at 50% 100%, hsl(var(--grad-3) / 0.12), transparent 62%)",
        }}
      />

      {/* Particle liquid-flow SVG — dark mode only (asset has a dark canvas); gated to md+ */}
      <img
        src="/particle-animation.svg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute left-1/2 top-1/2 hidden h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2 object-cover opacity-[0.5] mix-blend-screen dark:md:block"
      />

      {/* Drifting color blobs — 1 on mobile, 2 on sm, 3 on lg; lighter blur on small screens */}
      <div className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-[hsl(var(--grad-1)/0.16)] blur-[70px] animate-drift sm:h-[26rem] sm:w-[26rem] sm:blur-[100px]" />
      <div
        className="absolute -right-24 top-1/3 hidden h-[24rem] w-[24rem] rounded-full bg-[hsl(var(--grad-2)/0.14)] blur-[100px] animate-drift sm:block"
        style={{ animationDelay: "-7s" }}
      />
      <div
        className="absolute bottom-[-6rem] left-1/3 hidden h-[22rem] w-[22rem] rounded-full bg-[hsl(var(--grad-3)/0.12)] blur-[110px] animate-drift lg:block"
        style={{ animationDelay: "-14s" }}
      />

      {/* Faint grid, faded toward edges */}
      <div className="absolute inset-0 bg-grid opacity-[0.15] mask-radial" />

      {/* Top + bottom vignette so the nav and footer stay legible */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[rgb(var(--backdrop))] to-transparent opacity-70" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[rgb(var(--backdrop))] to-transparent opacity-70" />
    </div>
  );
}
