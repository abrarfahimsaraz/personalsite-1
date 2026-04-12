import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";
import PageTransition from "@/components/PageTransition";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  const thesis = projects[0];
  const rest = projects.slice(1);

  return (
    <PageTransition>
      <SEO title="Projects" description="Academic, personal, and engineering projects by Abrar Fahim — from plasmonics simulations to AI-powered applications." path="/projects" />

      {/* Hero band */}
      <section className="bg-accent/50 pt-28 pb-12">
        <div className="max-w-5xl mx-auto px-6">
          <span className="section-label">Portfolio</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            Featured Projects
          </h1>
          <p className="text-muted-foreground mt-3 max-w-xl">
            Academic, personal, and engineering projects
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="space-y-5">
          {/* Thesis — full width */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-6"
          >
            <h2 className="text-lg font-semibold">{thesis.name}</h2>
            <div className="flex flex-wrap gap-x-3 text-xs text-muted-foreground mt-1.5">
              {thesis.role && <span className="font-medium text-primary">{thesis.role}</span>}
              {thesis.timeframe && <span>{thesis.timeframe}</span>}
            </div>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {thesis.technologies.map((t) => (
                <Badge key={t} variant="secondary" className="text-xs rounded-full">{t}</Badge>
              ))}
            </div>
            <ul className="mt-4 space-y-1.5">
              {thesis.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground/75">
                  <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Rest — 2-col grid */}
          <div className="grid gap-5 sm:grid-cols-2">
            {rest.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card rounded-2xl p-5"
              >
                <h2 className="text-base font-semibold">{p.name}</h2>
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
                  {p.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-foreground/75">
                      <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
