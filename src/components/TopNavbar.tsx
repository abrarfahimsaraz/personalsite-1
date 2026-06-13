import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const primaryItems = [
  { label: "About", path: "/about" },
  { label: "Research", path: "/research" },
  { label: "Experience", path: "/experience" },
  { label: "Projects", path: "/projects" },
  { label: "Blog", path: "/blog" },
];

const moreItems = [
  { label: "Education", path: "/education" },
  { label: "Trainings", path: "/trainings" },
  { label: "Certifications", path: "/certifications" },
  { label: "Miscellaneous", path: "/miscellaneous" },
];

const allItems = [
  { label: "Home", path: "/" },
  ...primaryItems,
  ...moreItems,
  { label: "Contact", path: "/contact" },
];

export default function TopNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const onHero = isHome && !scrolled;
  const moreRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);
  const moreGroupActive = moreItems.some((i) => location.pathname.startsWith(i.path));

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setMoreOpen(false);
  }, [location.pathname]);

  // Close on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setMoreOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Close "More" on outside click
  useEffect(() => {
    if (!moreOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [moreOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerBg = scrolled
    ? "bg-background/75 backdrop-blur-xl border-b border-border/70 shadow-sm"
    : isHome
      ? "bg-transparent border-b border-transparent"
      : "bg-background/75 backdrop-blur-xl border-b border-border/70";

  const linkBase = onHero
    ? "text-white/70 hover:text-white"
    : "text-muted-foreground hover:text-foreground";
  const linkActive = onHero ? "text-white" : "text-primary";

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          headerBg,
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-6">
          {/* Logo */}
          <Link to="/" className="group flex flex-shrink-0 items-center gap-2.5">
            <img
              src="/newlogo.ico"
              alt="Abrar Fahim"
              className="h-8 w-8 rounded-lg object-contain ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-105"
            />
            <span
              className={cn(
                "hidden font-display text-base font-bold tracking-tight transition-colors sm:inline",
                onHero ? "text-white" : "text-foreground",
              )}
            >
              Abrar Fahim
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {primaryItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                aria-current={isActive(item.path) ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  isActive(item.path) ? linkActive : linkBase,
                )}
              >
                {isActive(item.path) && (
                  <motion.span
                    layoutId="nav-pill"
                    className={cn(
                      "absolute inset-0 -z-10 rounded-full",
                      onHero ? "bg-white/10" : "bg-accent",
                    )}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </Link>
            ))}

            {/* More dropdown */}
            <div className="relative" ref={moreRef}>
              <button
                onClick={() => setMoreOpen((v) => !v)}
                aria-expanded={moreOpen}
                aria-haspopup="true"
                className={cn(
                  "relative flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  moreGroupActive ? linkActive : linkBase,
                )}
              >
                More
                <ChevronDown
                  className={cn("h-3.5 w-3.5 transition-transform duration-200", moreOpen && "rotate-180")}
                />
              </button>
              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute right-0 top-full mt-2 w-52 origin-top-right overflow-hidden rounded-xl border border-border bg-popover/95 p-1.5 shadow-xl backdrop-blur-xl"
                  >
                    {moreItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={cn(
                          "block rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                          isActive(item.path)
                            ? "bg-accent text-primary"
                            : "text-muted-foreground hover:bg-accent hover:text-foreground",
                        )}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-1.5">
            <ThemeToggle
              className={cn(
                onHero
                  ? "text-white/70 hover:bg-white/10 hover:text-white"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground",
              )}
            />

            <Link
              to="/contact"
              className={cn(
                "hidden rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 lg:inline-flex",
                onHero
                  ? "bg-white text-slate-900 hover:bg-white/90"
                  : "bg-primary text-primary-foreground shadow-glow-sm hover:-translate-y-0.5 hover:shadow-glow",
              )}
            >
              Contact
            </Link>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-lg transition-colors lg:hidden",
                onHero
                  ? "text-white hover:bg-white/10"
                  : "text-foreground hover:bg-accent",
              )}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileOpen ? "x" : "menu"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl lg:hidden"
            >
              <div className="space-y-0.5 px-4 py-4">
                {allItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    aria-current={isActive(item.path) ? "page" : undefined}
                    className={cn(
                      "block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      isActive(item.path)
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Backdrop to catch outside taps */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
