import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { researchPapers } from "@/lib/data";

export default function ResearchDetailPage() {
  const { id } = useParams<{ id: string }>();
  const paper = researchPapers.find((p) => p.id === id);

  if (!paper) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
        <h1 className="text-2xl font-bold">Paper not found</h1>
        <Button variant="outline" asChild className="mt-4">
          <Link to="/research"><ArrowLeft size={14} /> Back to Research</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <Link to="/research" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6">
        <ArrowLeft size={14} /> All Research
      </Link>

      <div className="flex flex-wrap items-center gap-2 mb-3">
        <Badge variant={paper.status === "Published" ? "default" : "outline"}>{paper.status}</Badge>
        <span className="text-sm text-muted-foreground">{paper.year}</span>
      </div>

      <h1 className="text-2xl font-bold leading-snug sm:text-3xl">{paper.title}</h1>
      <p className="mt-2 text-muted-foreground">{paper.venue}{paper.location ? `, ${paper.location}` : ""}</p>

      <div className="flex flex-wrap gap-1.5 mt-4">
        {paper.tags.map((t) => (
          <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
        ))}
      </div>

      {/* Sections */}
      <section className="mt-10 space-y-8">
        <div>
          <h2 className="text-xl font-bold mb-3">Overview</h2>
          <p className="text-foreground/80 leading-relaxed">{paper.abstract}</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3">Methodology & Approach</h2>
          <ul className="list-disc pl-5 space-y-1.5 text-foreground/80">
            {paper.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3">Key Findings</h2>
          <p className="text-foreground/80 leading-relaxed">
            The study demonstrated promising results, contributing to the body of knowledge in {paper.tags.join(", ")}.
            Further details are available in the full publication.
          </p>
        </div>

        {paper.doi && (
          <div>
            <h2 className="text-xl font-bold mb-3">Publication</h2>
            <a
              href={paper.doi}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary hover:underline"
            >
              View Publication <ExternalLink size={14} />
            </a>
          </div>
        )}
      </section>
    </div>
  );
}
