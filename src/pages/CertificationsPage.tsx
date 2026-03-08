import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { certifications } from "@/lib/data";
import { Award, BookOpen } from "lucide-react";

const conferenceCerts = certifications.filter((c) => c.category === "conference");
const courseCerts = certifications.filter((c) => c.category === "course");

export default function CertificationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-bold sm:text-4xl">Certifications</h1>
      <p className="mt-2 text-muted-foreground">Conference presentations and professional certifications</p>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        {/* Left: Conference */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Award size={20} className="text-primary" />
            <h2 className="text-xl font-bold">Conference Presentations</h2>
          </div>
          <div className="space-y-4">
            {conferenceCerts.map((c, i) => (
              <Card key={i}>
                <CardContent className="flex items-start gap-3 py-4">
                  <div className="mt-0.5 rounded-md bg-accent p-2"><Award size={16} className="text-primary" /></div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{c.title}</p>
                    <p className="text-xs text-muted-foreground">{c.issuer} · {c.year}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Right: Courses */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <BookOpen size={20} className="text-primary" />
            <h2 className="text-xl font-bold">Courses & Programs</h2>
          </div>
          <div className="space-y-4">
            {courseCerts.map((c, i) => (
              <Card key={i}>
                <CardContent className="flex items-start gap-3 py-4">
                  <div className="mt-0.5 rounded-md bg-accent p-2"><BookOpen size={16} className="text-primary" /></div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{c.title}</p>
                    <p className="text-xs text-muted-foreground">{c.issuer} · {c.year}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
