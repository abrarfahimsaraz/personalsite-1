import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { education, testScores } from "@/lib/data";
import { GraduationCap, Award } from "lucide-react";

export default function EducationPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-bold sm:text-4xl">Education</h1>
      <p className="mt-2 text-muted-foreground">Academic qualifications and test scores</p>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        {/* Left: Academic */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap size={20} className="text-primary" />
            <h2 className="text-xl font-bold">Academic Qualifications</h2>
          </div>
          <div className="space-y-5">
            {education.map((ed, i) => (
              <Card key={i}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{ed.degree}</CardTitle>
                  <p className="text-sm text-muted-foreground">{ed.institution} — {ed.location}</p>
                  <p className="text-sm text-muted-foreground">{ed.dates}</p>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <Badge variant="secondary">{ed.grade}</Badge>
                  {ed.thesis && (
                    <p className="text-foreground/80">
                      <span className="font-medium">Thesis:</span> {ed.thesis}
                    </p>
                  )}
                  {ed.highlights && (
                    <ul className="list-disc pl-5 space-y-1 text-foreground/70">
                      {ed.highlights.map((h, j) => <li key={j}>{h}</li>)}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Right: Test Scores */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Award size={20} className="text-primary" />
            <h2 className="text-xl font-bold">Test Scores</h2>
          </div>
          <div className="space-y-5">
            {testScores.map((ts, i) => (
              <Card key={i}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{ts.name} ({ts.year})</CardTitle>
                  {ts.overall && ts.overall !== "—" && (
                    <p className="text-sm text-muted-foreground">Overall: {ts.overall}</p>
                  )}
                </CardHeader>
                <CardContent>
                  {ts.breakdown.length > 0 ? (
                    <div className="grid grid-cols-2 gap-3">
                      {ts.breakdown.map((b, j) => (
                        <div key={j} className="rounded-md bg-muted p-3 text-center">
                          <p className="text-xs text-muted-foreground">{b.label}</p>
                          <p className="text-lg font-bold text-primary">{b.score}</p>
                          {b.level && <p className="text-[10px] text-muted-foreground">{b.level}</p>}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      {ts.certificateUrl ? (
                        <a href={ts.certificateUrl} className="text-primary hover:underline">View Certificate</a>
                      ) : (
                        "Details not available"
                      )}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
