import { Badge } from "@/components/ui/badge";
import { education, testScores } from "@/lib/data";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";

export default function EducationPage() {
  return (
    <PageTransition>
      <div className="page-container">
        <h1 className="section-heading">
          <span className="gradient-text">Education</span>
        </h1>
        <p className="section-subtitle">Academic qualifications and standardized test scores</p>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {/* Left: Academic */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-bg text-white">
                <GraduationCap size={18} />
              </div>
              <h2 className="font-serif text-xl font-bold">Academic Qualifications</h2>
            </div>
            <div className="space-y-5">
              {education.map((ed, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card rounded-xl p-5"
                >
                  <h3 className="font-serif text-base font-semibold">{ed.degree}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{ed.institution}</p>
                  <p className="text-xs text-muted-foreground">{ed.location} · {ed.dates}</p>
                  <Badge variant="secondary" className="mt-2 rounded-full text-xs">{ed.grade}</Badge>
                  {ed.thesis && (
                    <p className="mt-3 text-sm text-foreground/75">
                      <span className="font-medium text-foreground">Thesis:</span> {ed.thesis}
                    </p>
                  )}
                  {ed.highlights && (
                    <ul className="mt-2 space-y-1">
                      {ed.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-foreground/65">
                          <div className="mt-1.5 h-1 w-1 rounded-full bg-primary flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                  {ed.certificateUrl && (
                    <a href={ed.certificateUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-3 text-xs text-primary hover:text-primary/80 transition-colors font-medium">
                      <ExternalLink size={12} /> View Degree Certificate
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Test Scores */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-primary">
                <Award size={18} />
              </div>
              <h2 className="font-serif text-xl font-bold">Test Scores</h2>
            </div>
            <div className="space-y-5">
              {testScores.map((ts, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card rounded-xl p-5"
                >
                  <h3 className="font-serif text-base font-semibold">{ts.name}</h3>
                  <p className="text-xs text-muted-foreground">{ts.year}{ts.overall && ts.overall !== "—" ? ` · Overall: ${ts.overall}` : ""}</p>
                  {ts.breakdown.length > 0 ? (
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      {ts.breakdown.map((b, j) => (
                        <div key={j} className="rounded-lg bg-muted/50 p-3 text-center">
                          <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">{b.label}</p>
                          <p className="text-2xl font-bold text-primary mt-0.5">{b.score}</p>
                          {b.level && <p className="text-[10px] text-muted-foreground mt-0.5">{b.level}</p>}
                        </div>
                      ))}
                    </div>
                  ) : ts.certificateUrl ? (
                    <a href={ts.certificateUrl} className="mt-3 inline-flex text-sm text-primary hover:underline">
                      View Certificate
                    </a>
                  ) : null}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
