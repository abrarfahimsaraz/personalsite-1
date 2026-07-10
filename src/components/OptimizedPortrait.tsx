interface OptimizedPortraitProps {
  alt: string;
  className?: string;
  /** Displayed width in CSS pixels (used for width/height attrs to preserve aspect ratio) */
  width: number;
  /** Displayed height in CSS pixels */
  height: number;
  /** Viewport-based sizes attribute for responsive srcset */
  sizes?: string;
  /** eager for LCP hero, lazy for below-the-fold */
  loading?: "eager" | "lazy";
  /** fetchPriority hint for LCP images */
  fetchPriority?: "high" | "low" | "auto";
  /** Public asset base name; variants live at /{basename}-{w}.{avif,webp,jpg} */
  basename?: string;
}

// Source files live in /public as {basename}-{w}.{avif,webp,jpg}
// Available widths:
const WIDTHS = [240, 320, 480, 640, 800, 960];

function buildSrcSet(basename: string, ext: string) {
  return WIDTHS.map((w) => `/${basename}-${w}.${ext} ${w}w`).join(", ");
}

export function OptimizedPortrait({
  alt,
  className,
  width,
  height,
  sizes = "(min-width: 1024px) 320px, 100vw",
  loading = "lazy",
  fetchPriority = "auto",
  basename = "abrar-fahim",
}: OptimizedPortraitProps) {
  return (
    <picture>
      <source type="image/avif" srcSet={buildSrcSet(basename, "avif")} sizes={sizes} />
      <source type="image/webp" srcSet={buildSrcSet(basename, "webp")} sizes={sizes} />
      <img
        src={`/${basename}-640.jpg`}
        srcSet={`/${basename}-640.jpg 640w, /${basename}-800.jpg 800w`}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={loading}
        decoding="async"
        // @ts-expect-error: fetchpriority is a valid HTML attribute not yet in React types
        fetchpriority={fetchPriority}
      />
    </picture>
  );
}
