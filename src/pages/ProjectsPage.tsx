import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));
  const [filter, setFilter] = useState<string | null>(null);

  const filtered = filter ? projects.filter((p) => p.tags.includes(filter)) : projects;

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-bold sm:text-4xl">Projects</h1>
      <p className="mt-2 text-muted-foreground">Academic and personal projects</p>

      {/* Filters */}
      <div className="mt-6 flex flex-wrap gap-2">
        <Badge
          variant={filter === null ? "default" : "outline"}
          className="cursor-pointer"
          onClick={() => setFilter(null)}
        >
          All
        </Badge>
        {allTags.map((t) => (
          <Badge
            key={t}
            variant={filter === t ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => setFilter(t)}
          >
            {t}
          </Badge>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {filtered.map((p) => (
          <Card key={p.id} className="transition-shadow hover:shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">{p.name}</CardTitle>
              <div className="flex flex-wrap gap-x-3 text-xs text-muted-foreground mt-1">
                {p.role && <span>{p.role}</span>}
                {p.timeframe && <span>{p.timeframe}</span>}
              </div>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex flex-wrap gap-1.5">
                {p.technologies.map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                ))}
              </div>
              <ul className="list-disc pl-5 space-y-1 text-foreground/80">
                {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
