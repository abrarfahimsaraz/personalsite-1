import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { experiences } from "@/lib/data";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-bold sm:text-4xl">Experience</h1>
      <p className="mt-2 text-muted-foreground">Professional and research roles</p>

      <div className="mt-10 space-y-6">
        {experiences.map((e, i) => (
          <Card key={i} className="transition-shadow hover:shadow-md">
            <CardHeader className="pb-3">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <Badge variant="secondary" className="text-xs">{e.category}</Badge>
              </div>
              <CardTitle className="text-lg">{e.title}</CardTitle>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground mt-1">
                <span className="inline-flex items-center gap-1"><Briefcase size={14} />{e.organization}</span>
                <span className="inline-flex items-center gap-1"><MapPin size={14} />{e.location}</span>
                <span className="inline-flex items-center gap-1"><Calendar size={14} />{e.dates}</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1.5 text-sm text-foreground/80">
                {e.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
