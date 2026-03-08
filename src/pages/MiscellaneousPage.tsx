import { Card, CardContent } from "@/components/ui/card";
import { extracurriculars, awards } from "@/lib/data";
import { Users, Trophy } from "lucide-react";

export default function MiscellaneousPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-bold sm:text-4xl">Miscellaneous</h1>
      <p className="mt-2 text-muted-foreground">Extracurricular activities and achievements</p>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        {/* Left: Extracurricular */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Users size={20} className="text-primary" />
            <h2 className="text-xl font-bold">Extracurricular Activities</h2>
          </div>
          <div className="space-y-6">
            {extracurriculars.map((year) => (
              <div key={year.year}>
                <h3 className="text-sm font-semibold text-primary mb-2">{year.year}</h3>
                <ul className="space-y-2">
                  {year.items.map((item, i) => (
                    <li key={i} className="text-sm text-foreground/80">
                      <span className="font-medium text-foreground">{item.role}:</span> {item.description}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Awards */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Trophy size={20} className="text-primary" />
            <h2 className="text-xl font-bold">Awards & Achievements</h2>
          </div>
          <div className="space-y-4">
            {awards.map((a, i) => (
              <Card key={i}>
                <CardContent className="py-4 space-y-1">
                  <p className="text-sm font-medium">{a.name}</p>
                  <p className="text-xs text-muted-foreground">{a.issuer} · {a.year}</p>
                  <p className="text-sm text-foreground/70">{a.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
