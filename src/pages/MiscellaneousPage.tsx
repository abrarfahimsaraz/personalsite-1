import { extracurriculars, awards } from "@/lib/data";
import { Users, Trophy, ExternalLink } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";

export default function MiscellaneousPage() {
  return (
    <PageTransition>
      <SEO title="Miscellaneous" description="Extracurricular activities and awards of Abrar Fahim — IEEE membership, event organization, sports, and academic achievements." path="/miscellaneous" />
      <div className="page-container">
        <h1 className="section-heading">
          <span className="text-primary">Miscellaneous</span>
        </h1>
        <p className="section-subtitle">Extracurricular activities and achievements</p>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Users size={18} />
              </div>
              <h2 className="text-xl font-bold">Extracurricular Activities</h2>
            </div>
            <div className="space-y-8">
              {extracurriculars.map((year) => (
                <div key={year.year}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-6 w-6 rounded-lg bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                      {year.year.slice(2)}
                    </div>
                    <h3 className="text-sm font-bold text-primary">{year.year}</h3>
                  </div>
                  <ul className="space-y-2.5 pl-8">
                    {year.items.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="text-sm text-foreground/80"
                      >
                        <span className="font-semibold text-foreground">{item.role}</span>
                        <span className="text-muted-foreground"> — </span>
                        {item.description}
                        {item.certificateUrl && (
                          <a href={item.certificateUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 ml-2 text-primary hover:text-primary/80 transition-colors">
                            <ExternalLink size={12} />
                          </a>
                        )}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-primary">
                <Trophy size={18} />
              </div>
              <h2 className="text-xl font-bold">Awards & Achievements</h2>
            </div>
            <div className="space-y-4">
              {awards.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass-card rounded-xl p-5"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">🏆</span>
                    <h3 className="text-sm font-semibold">{a.name}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground">{a.issuer} · {a.year}</p>
                  <p className="mt-2 text-sm text-foreground/60">{a.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
