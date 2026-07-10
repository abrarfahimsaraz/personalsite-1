import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gsap?: any;
    ScrollTrigger?: any;
  }
}

const EASE = "power2.out";

/**
 * Global GSAP + ScrollTrigger driver (loaded via CDN in index.html).
 * Conventions used across pages:
 *   [data-hero-item]  → fade up on page load (staggered)
 *   [data-reveal]     → fade up 30px / 0.6s when scrolled into view
 *   [data-stagger]    → its direct children fade up with a 0.1s stagger
 *   [data-tilt]       → subtle pointer-driven 3D tilt (desktop, hover devices)
 * Honors prefers-reduced-motion and degrades gracefully if the CDN fails.
 */
export default function ScrollReveal() {
  const location = useLocation();

  // GSAP scroll/entrance reveals — re-runs per route
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const revealAll = () => {
      root.classList.remove("gsap-enabled");
      document
        .querySelectorAll<HTMLElement>("[data-reveal],[data-stagger] > *,[data-hero-item]")
        .forEach((el) => {
          el.style.opacity = "";
        });
    };

    if (reduce) {
      revealAll();
      return;
    }

    let killed = false;
    let ctx: any = null;
    let tries = 0;
    let timer: number | undefined;

    const run = () => {
      if (killed) return;
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;
      if (!gsap || !ScrollTrigger) {
        if (tries++ > 20) {
          revealAll(); // ~1s and still no CDN → just show everything
          return;
        }
        timer = window.setTimeout(run, 50);
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // Hero entrance on load
        const heroItems = gsap.utils.toArray("[data-hero-item]") as HTMLElement[];
        if (heroItems.length) {
          gsap.fromTo(
            heroItems,
            { opacity: 0, y: 22 },
            { opacity: 1, y: 0, duration: 0.7, ease: EASE, stagger: 0.08, delay: 0.05, clearProps: "willChange,opacity,transform" },
          );
        }

        // Section reveals
        (gsap.utils.toArray("[data-reveal]") as HTMLElement[]).forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: EASE,
              scrollTrigger: { trigger: el, start: "top 88%", once: true },
              clearProps: "willChange",
            },
          );
        });

        // Staggered children
        (gsap.utils.toArray("[data-stagger]") as HTMLElement[]).forEach((parent) => {
          const kids = Array.from(parent.children) as HTMLElement[];
          if (!kids.length) return;
          gsap.fromTo(
            kids,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: EASE,
              stagger: 0.1,
              scrollTrigger: { trigger: parent, start: "top 85%", once: true },
              clearProps: "willChange",
            },
          );
        });

        ScrollTrigger.refresh();
      });

      // Re-measure once late assets (images/fonts) settle
      timer = window.setTimeout(() => window.ScrollTrigger?.refresh(), 600);
    };

    const raf = requestAnimationFrame(run);

    return () => {
      killed = true;
      cancelAnimationFrame(raf);
      if (timer) clearTimeout(timer);
      if (ctx) ctx.revert();
    };
  }, [location.pathname]);

  // Subtle 3D tilt on [data-tilt] (hover-capable pointers only)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover)").matches) return;

    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-tilt]"));
    const MAX = 6;
    const cleanups = els.map((el) => {
      const onMove = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        el.style.setProperty("--rx", `${(px * MAX).toFixed(2)}deg`);
        el.style.setProperty("--ry", `${(-py * MAX).toFixed(2)}deg`);
      };
      const onLeave = () => {
        el.style.setProperty("--rx", "0deg");
        el.style.setProperty("--ry", "0deg");
      };
      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", onLeave);
      return () => {
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerleave", onLeave);
      };
    });

    return () => cleanups.forEach((c) => c());
  }, [location.pathname]);

  return null;
}
