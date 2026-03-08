import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { researchPapers, type PaperStatus } from "@/lib/data";
import { cn } from "@/lib/utils";

const statusColor: Record<PaperStatus, string> = {
  Published: "bg-primary text-primary-foreground",
  Accepted: "bg-primary/80 text-primary-foreground",
  "Under Review": "border-primary/40 text-primary",
  "Pending Submission": "border-muted-foreground/40 text-muted-foreground",
};

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-bold sm:text-4xl">Research</h1>
      <p className="mt-2 text-muted-foreground">Conference proceedings and papers</p>

      <div className="mt-10 grid gap-6">
        {researchPapers.map((p) => (
          <Card key={p.id} className="transition-shadow hover:shadow-md">
            <CardHeader className="pb-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge
                  variant={p.status === "Published" || p.status === "Accepted" ? "default" : "outline"}
                  className={cn("text-xs", statusColor[p.status])}
                >
                  {p.status}
                </Badge>
                <span className="text-xs text-muted-foreground">{p.year}</span>
              </div>
              <CardTitle className="text-lg leading-snug">
                <Link to={`/research/${p.id}`} className="hover:text-primary transition-colors">
                  {p.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p className="text-muted-foreground">
                {p.venue}{p.location ? `, ${p.location}` : ""}
              </p>
              <p className="text-foreground/80">{p.abstract}</p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {p.tags.map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                ))}
              </div>
              <Link
                to={`/research/${p.id}`}
                className="inline-flex items-center gap-1 pt-2 text-primary hover:underline text-sm font-medium"
              >
                View Details <ArrowRight size={14} />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
