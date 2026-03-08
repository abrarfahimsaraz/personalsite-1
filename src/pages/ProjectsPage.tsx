import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";
import PageTransition from "@/components/PageTransition";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectsPage() {
  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));
  const [filter, setFilter] = useState<string | null>(null);
  const filtered = filter ? projects.filter((p) => p.tags.includes(filter)) : projects;

  return (
    <PageTransition>
      <div className="page-container">
        <h1 className="section-heading">
          <span className="gradient-text">Projects</span>
        </h1>
        <p className="section-subtitle">Academic, personal, and engineering projects</p>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap gap-2">
          <button
            onClick={() => setFilter(null)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200",
              filter === null ? "gradient-bg text-white shadow-md shadow-primary/20" : "bg-muted text-muted-foreground hover:bg-accent"
            )}
          >
            All
          </button>
          {allTags.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200",
                filter === t ? "gradient-bg text-white shadow-md shadow-primary/20" : "bg-muted text-muted-foreground hover:bg-accent"
              )}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="glass-card rounded-xl p-5"
              >
                <h3 className="font-serif text-base font-semibold">{p.name}</h3>
                <div className="flex flex-wrap gap-x-3 text-xs text-muted-foreground mt-1.5">
                  {p.role && <span className="font-medium text-primary">{p.role}</span>}
                  {p.timeframe && <span>{p.timeframe}</span>}
                </div>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {p.technologies.map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs rounded-full">{t}</Badge>
                  ))}
                </div>
                <ul className="mt-4 space-y-1.5">
                  {p.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/75">
                      <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </PageTransition>
  );
}
