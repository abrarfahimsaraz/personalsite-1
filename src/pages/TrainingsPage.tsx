import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { trainings } from "@/lib/data";
import { Building2, Clock, Wrench } from "lucide-react";

export default function TrainingsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-bold sm:text-4xl">Industrial Trainings</h1>
      <p className="mt-2 text-muted-foreground">Hands-on industry exposure and technical training</p>

      <div className="mt-10 space-y-6">
        {trainings.map((t, i) => (
          <Card key={i} className="transition-shadow hover:shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{t.organization}</CardTitle>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground mt-1">
                {t.unit && <span className="inline-flex items-center gap-1"><Building2 size={14} />{t.unit}</span>}
                <span className="inline-flex items-center gap-1"><Clock size={14} />{t.duration}</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div>
                <p className="font-medium text-xs text-muted-foreground uppercase tracking-wide mb-2">Key Topics</p>
                <div className="flex flex-wrap gap-1.5">
                  {t.topics.map((tp) => <Badge key={tp} variant="secondary" className="text-xs">{tp}</Badge>)}
                </div>
              </div>
              {t.technologies && (
                <div>
                  <p className="font-medium text-xs text-muted-foreground uppercase tracking-wide mb-2 inline-flex items-center gap-1">
                    <Wrench size={12} /> Technologies
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {t.technologies.map((tc) => <Badge key={tc} variant="outline" className="text-xs">{tc}</Badge>)}
                  </div>
                </div>
              )}
              <ul className="list-disc pl-5 space-y-1.5 text-foreground/80">
                {t.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
