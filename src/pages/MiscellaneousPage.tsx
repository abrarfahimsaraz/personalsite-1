import { extracurriculars, awards } from "@/lib/data";
import { Users, Trophy } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";

export default function MiscellaneousPage() {
  return (
    <PageTransition>
      <div className="page-container">
        <h1 className="section-heading">
          <span className="gradient-text">Miscellaneous</span>
        </h1>
        <p className="section-subtitle">Extracurricular activities and achievements</p>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {/* Left: Extracurricular */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-bg text-white">
                <Users size={18} />
              </div>
              <h2 className="font-serif text-xl font-bold">Extracurricular Activities</h2>
            </div>
            <div className="space-y-8">
              {extracurriculars.map((year) => (
                <div key={year.year}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-6 w-6 rounded-lg gradient-bg text-white flex items-center justify-center text-xs font-bold">
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
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Awards */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-primary">
                <Trophy size={18} />
              </div>
              <h2 className="font-serif text-xl font-bold">Awards & Achievements</h2>
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
                    <h3 className="font-serif text-sm font-semibold">{a.name}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground">{a.issuer} · {a.year}</p>
                  <p className="mt-2 text-sm text-foreground/70">{a.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
