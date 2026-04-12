import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { researchPapers } from "@/lib/data";
import PageTransition from "@/components/PageTransition";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";

export default function ResearchDetailPage() {
  const { id } = useParams<{ id: string }>();
  const paper = researchPapers.find((p) => p.id === id);

  if (!paper) {
    return (
      <div className="page-container text-center">
        <h1 className="text-2xl font-bold">Paper not found</h1>
        <Button variant="outline" asChild className="mt-4 rounded-xl">
          <Link to="/research"><ArrowLeft size={14} /> Back to Research</Link>
        </Button>
      </div>
    );
  }

  return (
    <PageTransition>
      <SEO title={paper.title} description={paper.abstract} path={`/research/${paper.id}`} />

      {/* Hero band */}
      <section className="bg-accent/50 pt-28 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <Link to="/research" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft size={14} /> All Research
          </Link>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge className="rounded-full bg-primary border-0 text-white">{paper.status}</Badge>
              <span className="text-sm text-muted-foreground">{paper.year}</span>
            </div>

            <h1 className="text-3xl font-bold leading-snug sm:text-4xl">{paper.title}</h1>
            <p className="mt-3 text-lg text-muted-foreground">{paper.venue}{paper.location ? `, ${paper.location}` : ""}</p>

            <div className="flex flex-wrap gap-2 mt-5">
              {paper.tags.map((t) => (
                <Badge key={t} variant="secondary" className="rounded-full">{t}</Badge>
              ))}
            </div>
            <p className="mt-3 text-sm text-muted-foreground">By Abrar Fahim</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-10">
          <section className="glass-card rounded-xl p-6">
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
              <div className="h-1 w-5 rounded-full bg-primary" />
              Overview
            </h2>
            <p className="text-foreground/80 leading-relaxed">{paper.abstract}</p>
          </section>

          <section className="glass-card rounded-xl p-6">
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
              <div className="h-1 w-5 rounded-full bg-primary" />
              Methodology & Key Contributions
            </h2>
            <ul className="space-y-2">
              {paper.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground/80">
                  <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </section>

          <section className="glass-card rounded-xl p-6">
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
              <div className="h-1 w-5 rounded-full bg-primary" />
              Key Findings
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              The study demonstrated promising results, contributing to the body of knowledge in {paper.tags.join(", ")}.
              Further details are available in the full publication.
            </p>
          </section>

          <div className="flex flex-wrap gap-4">
            {paper.doi && (
              <a
                href={paper.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-primary hover:underline font-medium"
              >
                View Publication <ExternalLink size={14} />
              </a>
            )}
            {paper.github && (
              <a
                href={paper.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-primary hover:underline font-medium"
              >
                <Github size={14} /> View Code on GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
