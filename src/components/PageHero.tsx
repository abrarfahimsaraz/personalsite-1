import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  children?: ReactNode;
  className?: string;
}

/**
 * Shared page header. Transparent over the ambient backdrop, with soft glows.
 * Entrance handled by GSAP via [data-hero-item] (see ScrollReveal).
 */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  align = "left",
  children,
  className,
}: PageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden", className)}>
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 left-1/4 h-64 w-64 rounded-full bg-[hsl(var(--grad-2)/0.12)] blur-3xl" />

      <div
        className={cn(
          "relative mx-auto max-w-5xl px-6 pb-0 pt-28 lg:pb-0 lg:pt-32",
          align === "center" && "text-center",
        )}
      >
        {eyebrow && (
          <span data-hero-item className={cn("section-label", align === "center" && "justify-center")}>
            {eyebrow}
          </span>
        )}
        <h1
          data-hero-item
          className="text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl"
        >
          {title}
        </h1>
        {subtitle && (
          <p
            data-hero-item
            className={cn(
              "mt-4 text-pretty text-lg leading-relaxed text-muted-foreground",
              align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl",
            )}
          >
            {subtitle}
          </p>
        )}
        {children && (
          <div data-hero-item className="mt-7">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
