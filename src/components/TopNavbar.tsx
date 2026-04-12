import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Research", path: "/research" },
  { label: "Experience", path: "/experience" },
  { label: "Education", path: "/education" },
  { label: "Projects", path: "/projects" },
  { label: "Trainings", path: "/trainings" },
  { label: "Certifications", path: "/certifications" },
  { label: "Miscellaneous", path: "/miscellaneous" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export default function TopNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg = scrolled
    ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-sm"
    : isHome
      ? "bg-transparent"
      : "bg-background/90 backdrop-blur-xl border-b border-border";

  const textColor = !scrolled && isHome ? "text-white" : "text-foreground";
  const mutedColor = !scrolled && isHome ? "text-white/60" : "text-muted-foreground";

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", navBg)}>
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-14">
        {/* Logo — left */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <img src="/newlogo.ico" alt="Logo" className="h-8 w-8 rounded-lg object-contain" />
          <span className={cn("font-bold text-base hidden sm:inline transition-colors", textColor)}>
            Abrar Fahim
          </span>
        </Link>

        {/* Desktop nav — pushed right */}
        <nav className="hidden xl:flex items-center gap-0.5 ml-auto">
          {navItems.map((item) => {
            const isActive =
              item.path === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-2.5 py-1.5 rounded-md text-xs font-medium transition-all duration-200",
                  isActive
                    ? cn("text-primary", !scrolled && isHome && "bg-white/10 text-white")
                    : cn(mutedColor, "hover:text-primary", !scrolled && isHome && "hover:text-white")
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={cn(
            "xl:hidden flex items-center justify-center h-9 w-9 rounded-lg transition-colors",
            !scrolled && isHome
              ? "text-white hover:bg-white/10"
              : "text-foreground border border-border hover:bg-card"
          )}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="xl:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl px-6 py-3 space-y-0.5"
          >
            {navItems.map((item) => {
              const isActive =
                item.path === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
