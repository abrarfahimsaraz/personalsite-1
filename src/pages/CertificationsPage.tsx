import { Badge } from "@/components/ui/badge";
import { certifications } from "@/lib/data";
import { Award, BookOpen } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";

const conferenceCerts = certifications.filter((c) => c.category === "conference");
const courseCerts = certifications.filter((c) => c.category === "course");

export default function CertificationsPage() {
  return (
    <PageTransition>
      <div className="page-container">
        <h1 className="section-heading">
          <span className="gradient-text">Certifications</span>
        </h1>
        <p className="section-subtitle">Conference presentations and professional certifications</p>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {/* Left: Conference */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-bg text-white">
                <Award size={18} />
              </div>
              <h2 className="font-serif text-xl font-bold">Conference Presentations</h2>
            </div>
            <div className="space-y-3">
              {conferenceCerts.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass-card rounded-xl p-4 flex items-start gap-3"
                >
                  <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-primary flex-shrink-0">
                    <Award size={14} />
                  </div>
                  <div>
                    <p className="text-sm font-medium leading-snug">{c.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{c.issuer}{c.year ? ` · ${c.year}` : ""}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Courses */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-primary">
                <BookOpen size={18} />
              </div>
              <h2 className="font-serif text-xl font-bold">Courses & Programs</h2>
            </div>
            <div className="space-y-3">
              {courseCerts.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass-card rounded-xl p-4 flex items-start gap-3"
                >
                  <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-muted-foreground flex-shrink-0">
                    <BookOpen size={14} />
                  </div>
                  <div>
                    <p className="text-sm font-medium leading-snug">{c.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{c.issuer}{c.year ? ` · ${c.year}` : ""}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
