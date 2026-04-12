import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib/data";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";

const categoryIcon: Record<string, string> = {
  Industry: "🏢",
  Research: "🔬",
  Media: "📰",
};

export default function ExperiencePage() {
  return (
    <PageTransition>
      <SEO title="Experience" description="Professional experience of Abrar Fahim — roles in risk analysis, data science, project engineering, and technical writing." path="/experience" />
      <div className="page-container">
        <h1 className="section-heading">
          <span className="text-primary">Experience</span>
        </h1>
        <p className="section-subtitle">Professional, research, and media roles</p>

        <div className="mt-12 relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border hidden sm:block" />
          <div className="space-y-8">
            {experiences.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5"
              >
                <div className="hidden sm:flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground text-lg flex-shrink-0">
                    {categoryIcon[e.category] || "💼"}
                  </div>
                </div>
                <div className="glass-card rounded-2xl p-6 flex-1 border border-border/60 bg-card/50">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Badge variant="secondary" className="rounded-full text-xs">{e.category}</Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar size={12} /> {e.dates}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold">{e.title}</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground mt-1.5">
                    <span className="inline-flex items-center gap-1"><Briefcase size={13} />{e.organization}</span>
                    <span className="inline-flex items-center gap-1"><MapPin size={13} />{e.location}</span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {e.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-foreground/75">
                        <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
