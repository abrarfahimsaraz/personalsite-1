import { Badge } from "@/components/ui/badge";
import { certifications } from "@/lib/data";
import { Award, BookOpen, ExternalLink } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";

const conferenceCerts = certifications.filter((c) => c.category === "conference");
const courseCerts = certifications.filter((c) => c.category === "course");

export default function CertificationsPage() {
  return (
    <PageTransition>
      <SEO title="Certifications" description="Conference presentations and professional certifications earned by Abrar Fahim — IEEE, Springer, Coursera, and more." path="/certifications" />

      {/* Hero band */}
      <section className="bg-accent/50 pt-28 pb-12">
        <div className="max-w-5xl mx-auto px-6">
          <span className="section-label">Credentials</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            Certifications & Credentials
          </h1>
          <p className="text-muted-foreground mt-3 max-w-xl">
            Conference presentations and professional certifications
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Award size={18} />
              </div>
              <h2 className="text-xl font-bold">Conference Presentations</h2>
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
                  <div className="flex-1">
                    <p className="text-sm font-medium leading-snug">{c.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{c.issuer}{c.year ? ` · ${c.year}` : ""}</p>
                  </div>
                  {c.certificateUrl && (
                    <a href={c.certificateUrl} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 text-primary hover:text-primary/80 transition-colors" aria-label="View certificate">
                      <ExternalLink size={14} />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-primary">
                <BookOpen size={18} />
              </div>
              <h2 className="text-xl font-bold">Courses & Programs</h2>
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
                  <div className="flex-1">
                    <p className="text-sm font-medium leading-snug">{c.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{c.issuer}{c.year ? ` · ${c.year}` : ""}</p>
                  </div>
                  {c.certificateUrl && (
                    <a href={c.certificateUrl} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 text-primary hover:text-primary/80 transition-colors" aria-label="View certificate">
                      <ExternalLink size={14} />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
