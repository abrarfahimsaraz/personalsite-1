import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { researchPapers, type PaperStatus } from "@/lib/data";
import { cn } from "@/lib/utils";
import PageTransition from "@/components/PageTransition";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";

const statusStyle: Record<PaperStatus, string> = {
  Published: "gradient-bg border-0 text-white",
  Accepted: "bg-primary/80 text-primary-foreground border-0",
  "Under Review": "border-primary/40 text-primary bg-accent",
  "In Preparation": "border-muted-foreground/40 text-muted-foreground bg-muted",
};

export default function ResearchPage() {
  return (
    <PageTransition>
      <div className="page-container">
        <h1 className="section-heading">
          <span className="gradient-text">Research</span>
        </h1>
        <p className="section-subtitle">Conference proceedings, publications, and ongoing work</p>

        <div className="mt-12 space-y-5">
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
                <span className="text-xs text-muted-foreground">·</span>
                <span className="text-xs text-muted-foreground">{p.venue}{p.location ? `, ${p.location}` : ""}</span>
              </div>
              <h3 className="font-serif text-lg font-semibold leading-snug group-hover:text-primary transition-colors">
                <Link to={`/research/${p.id}`}>{p.title}</Link>
              </h3>
              <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{p.abstract}</p>
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
