import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { researchPapers, type PaperStatus } from "@/lib/data";
import { cn } from "@/lib/utils";
import PageTransition from "@/components/PageTransition";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";

const statusStyle: Record<PaperStatus, string> = {
  Published: "bg-primary/15 text-primary border-primary/30",
  Accepted: "bg-primary/10 text-primary border-primary/20",
  "Under Review": "border-amber-500/30 text-amber-400 bg-amber-500/10",
  "In Preparation": "border-muted-foreground/30 text-muted-foreground bg-muted",
};

export default function ResearchPage() {
  return (
    <PageTransition>
      <SEO title="Research" description="Published and ongoing research by Abrar Fahim — covering medical imaging, power systems optimization, cybersecurity, and explainable AI." path="/research" />

      {/* Hero band */}
      <section className="bg-accent/50 pt-28 pb-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <span className="section-label">Research</span>
          <h1 className="text-4xl font-bold mt-3 sm:text-5xl">
            Research by Abrar Fahim
          </h1>
          <p className="mt-4 text-lg text-foreground/60">Conference proceedings, IEEE & Springer publications, and ongoing work</p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-5xl py-16">
        <div className="space-y-5">
          {researchPapers.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card rounded-xl p-6 group"
            >
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Badge className={cn("rounded-full text-xs", statusStyle[p.status])}>
                  {p.status}
                </Badge>
                <span className="text-xs font-medium text-muted-foreground">{p.year}</span>
                <span className="text-xs text-muted-foreground">&middot;</span>
                <span className="text-xs text-muted-foreground">{p.venue}{p.location ? `, ${p.location}` : ""}</span>
              </div>
              <h2 className="text-lg font-semibold leading-snug group-hover:text-primary transition-colors">
                <Link to={`/research/${p.id}`}>{p.title}</Link>
              </h2>
              <p className="mt-2 text-sm text-foreground/60 leading-relaxed">{p.abstract}</p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {p.tags.map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs rounded-full">{t}</Badge>
                ))}
                <Link
                  to={`/research/${p.id}`}
                  className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
                >
                  View <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
