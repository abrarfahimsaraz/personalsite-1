import { ReactNode } from "react";
import { motion } from "framer-motion";
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
 * Shared page header band. Replaces the copy-pasted `bg-accent/50 pt-28` blocks
 * with a single textured, theme-aware hero (subtle grid + gradient glow).
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
    <section
      className={cn(
        "relative overflow-hidden border-b border-border/60 bg-accent/40",
        className,
      )}
    >
      {/* Texture + glow */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50 mask-fade-edges" />
      <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-[hsl(var(--grad-2)/0.08)] blur-3xl" />

      <div
        className={cn(
          "relative mx-auto max-w-5xl px-6 pb-14 pt-28 lg:pb-16 lg:pt-32",
          align === "center" && "text-center",
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {eyebrow && (
            <span className={cn("section-label", align === "center" && "justify-center")}>
              {eyebrow}
            </span>
          )}
          <h1 className="text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p
              className={cn(
                "mt-4 text-pretty text-lg leading-relaxed text-muted-foreground",
                align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl",
              )}
            >
              {subtitle}
            </p>
          )}
          {children && <div className="mt-7">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}
