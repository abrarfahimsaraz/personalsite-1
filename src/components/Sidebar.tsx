import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  FileText,
  Briefcase,
  GraduationCap,
  Layers,
  Award,
  FolderOpen,
  Mail,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", path: "/", icon: Home },
  { label: "About", path: "/about", icon: User },
  { label: "Research", path: "/research", icon: FileText },
  { label: "Experience", path: "/experience", icon: Briefcase },
  { label: "Education", path: "/education", icon: GraduationCap },
  { label: "Projects", path: "/projects", icon: Layers },
  { label: "Trainings", path: "/trainings", icon: FolderOpen },
  { label: "Certifications", path: "/certifications", icon: Award },
  { label: "Miscellaneous", path: "/miscellaneous", icon: Layers },
  { label: "Contact", path: "/contact", icon: Mail },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-50 flex h-10 w-10 items-center justify-center rounded-xl bg-card border border-border text-foreground lg:hidden hover:bg-accent transition-colors"
        aria-label="Open menu"
      >
        <Menu size={20} />
      </button>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          width: isCollapsed ? 72 : 256,
          x: isOpen ? 0 : typeof window !== 'undefined' && window.innerWidth < 1024 ? -300 : 0,
        }}
        className={cn(
          "fixed top-0 left-0 z-50 h-screen bg-sidebar-background border-r border-sidebar-border",
          "flex flex-col py-6 transition-all duration-300",
          "lg:translate-x-0"
        )}
      >
        {/* Close button (mobile) */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground lg:hidden"
        >
          <X size={18} />
        </button>

        {/* Logo / Name */}
        <div className="px-4 mb-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-bg text-white font-bold text-lg">
              A
            </div>
            <AnimatePresence>
              {!isCollapsed && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  className="font-semibold text-lg whitespace-nowrap overflow-hidden"
                >
                  Abrar<span className="text-primary">.</span>
                </motion.span>
              )}
            </AnimatePresence>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
              >
                <item.icon size={20} className="flex-shrink-0" />
                <AnimatePresence>
                  {!isCollapsed && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      className="whitespace-nowrap overflow-hidden"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            );
          })}
        </nav>

        {/* Collapse toggle (desktop only) */}
        <div className="hidden lg:block px-3 mt-4">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="flex items-center justify-center w-full gap-2 px-3 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          >
            {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            <AnimatePresence>
              {!isCollapsed && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  Collapse
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.aside>
    </>
  );
}
