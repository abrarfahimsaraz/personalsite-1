import { Badge } from "@/components/ui/badge";
import { trainings } from "@/lib/data";
import { Building2, Clock, MapPin } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";

export default function TrainingsPage() {
  return (
    <PageTransition>
      <SEO title="Trainings" description="Industrial training and hands-on technical exposure of Abrar Fahim — BPDB, BAEC, and Robi Axiata." path="/trainings" />

      {/* Hero band */}
      <section className="bg-accent/50 pt-28 pb-12">
        <div className="max-w-5xl mx-auto px-6">
          <span className="section-label">Training</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            Industrial Trainings
          </h1>
          <p className="text-muted-foreground mt-3 max-w-xl">
            Hands-on industry exposure and technical training
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-6">
          {trainings.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold">{t.organization}</h2>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground mt-1">
                    {t.unit && <span className="inline-flex items-center gap-1"><Building2 size={13} />{t.unit}</span>}
                    {t.location && <span className="inline-flex items-center gap-1"><MapPin size={13} />{t.location}</span>}
                    <span className="inline-flex items-center gap-1"><Clock size={13} />{t.duration} · {t.year}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-4">
                <div className="flex-1 min-w-[200px]">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Key Topics</p>
                  <div className="flex flex-wrap gap-1.5">
                    {t.topics.map((tp) => <Badge key={tp} variant="secondary" className="text-xs rounded-full">{tp}</Badge>)}
                  </div>
                </div>
                {t.technologies && (
                  <div className="flex-1 min-w-[200px]">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Technologies</p>
                    <div className="flex flex-wrap gap-1.5">
                      {t.technologies.map((tc) => <Badge key={tc} variant="outline" className="text-xs rounded-full">{tc}</Badge>)}
                    </div>
                  </div>
                )}
              </div>

              <ul className="mt-4 space-y-1.5">
                {t.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-foreground/75">
                    <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
