import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { personalInfo, skills } from "@/lib/data";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-bold sm:text-4xl">About Me</h1>

      <p className="mt-6 max-w-3xl text-base leading-relaxed text-foreground/80">
        {personalInfo.intro}
      </p>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-foreground/80">
        Motivated to pursue advanced studies in power engineering with modern machine learning architectures.
        I am passionate about bridging the gap between classical engineering and cutting-edge AI to solve
        real-world problems in energy, healthcare, and cybersecurity.
      </p>

      <div className="mt-8">
        <Button asChild>
          <a href={personalInfo.cvUrl} download>
            <Download size={16} /> Download CV (PDF)
          </a>
        </Button>
      </div>

      {/* Technical Skills */}
      <h2 className="mt-16 text-2xl font-bold">Technical Skills</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Programming Languages</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {skills.programmingLanguages.map((s) => (
              <Badge key={s} variant="secondary">{s}</Badge>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Data Analysis & ML</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {skills.dataAnalysisML.map((s) => (
              <Badge key={s} variant="secondary">{s}</Badge>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">AI & ML Domains</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {skills.aiDomains.map((s) => (
              <Badge key={s} variant="secondary">{s}</Badge>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
