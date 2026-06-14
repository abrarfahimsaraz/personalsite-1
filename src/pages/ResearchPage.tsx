import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { researchPapers, type PaperStatus } from "@/lib/data";
import { cn } from "@/lib/utils";
import PageTransition from "@/components/PageTransition";
import PageHero from "@/components/PageHero";
import { SEO } from "@/components/SEO";

const statusStyle: Record<PaperStatus, string> = {
  Published: "bg-primary/15 text-primary border-primary/30",
  Accepted: "bg-emerald-500/10 text-emerald-500 border-emerald-500/30",
  "Under Review": "border-amber-500/30 text-amber-500 bg-amber-500/10",
  "In Preparation": "border-muted-foreground/30 text-muted-foreground bg-muted",
};

type Filter = "All" | PaperStatus;

export default function ResearchPage() {
  const [filter, setFilter] = useState<Filter>("All");

  const filters = useMemo(() => {
    const order: Filter[] = ["All", "Published", "Accepted", "Under Review", "In Preparation"];
    return order
      .map((f) => ({
        label: f,
        count: f === "All" ? researchPapers.length : researchPapers.filter((p) => p.status === f).length,
      }))
      .filter((f) => f.count > 0);
  }, []);

  const papers = filter === "All" ? researchPapers : researchPapers.filter((p) => p.status === filter);

  return (
    <PageTransition>
      <SEO title="Research" description="Published and ongoing research by Abrar Fahim — covering medical imaging, power systems optimization, cybersecurity, and explainable AI." path="/research" />

      <PageHero
        eyebrow="Research"
        title="Research by Abrar Fahim"
        subtitle="Conference proceedings, IEEE & Springer publications, and ongoing work across AI, healthcare, power systems, and cybersecurity."
      />

      <div className="mx-auto max-w-5xl px-6 py-14 lg:py-16">
        {/* Filter bar */}
        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.label}
              onClick={() => setFilter(f.label)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all duration-200",
                filter === f.label
                  ? "border-primary bg-primary text-primary-foreground shadow-glow-sm"
                  : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground",
              )}
            >
              {f.label}
              <span className={cn("text-xs", filter === f.label ? "text-primary-foreground/70" : "text-muted-foreground/60")}>
                {f.count}
              </span>
            </button>
          ))}
        </div>

        <div className="space-y-5" data-stagger>
          {papers.map((p) => (
            <div
              key={p.id}
              className="group glass-card p-6"
            >
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <Badge className={cn("rounded-full border text-xs", statusStyle[p.status])}>
                  {p.status}
                </Badge>
                <span className="text-xs font-medium text-muted-foreground">{p.year}</span>
                <span className="text-xs text-muted-foreground/50">·</span>
                <span className="text-xs text-muted-foreground">{p.venue}{p.location ? `, ${p.location}` : ""}</span>
              </div>
              <h2 className="font-display text-lg font-bold leading-snug transition-colors group-hover:text-primary sm:text-xl">
                <Link to={`/research/${p.id}`}>{p.title}</Link>
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{p.abstract}</p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {p.tags.map((t) => (
                  <Badge key={t} variant="secondary" className="rounded-full text-xs font-medium">{t}</Badge>
                ))}
                <Link
                  to={`/research/${p.id}`}
                  className="ml-auto inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all hover:gap-2"
                >
                  View <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
