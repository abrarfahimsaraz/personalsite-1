import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib/data";
import { Briefcase, MapPin, Calendar, Building2, Microscope, Newspaper } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import { SEO } from "@/components/SEO";
import PageHero from "@/components/PageHero";

const categoryIcon: Record<string, typeof Briefcase> = {
  Industry: Building2,
  Research: Microscope,
  Media: Newspaper,
};

export default function ExperiencePage() {
  return (
    <PageTransition>
      <SEO title="Experience" description="Professional experience of Abrar Fahim — roles in risk analysis, data science, project engineering, and technical writing." path="/experience" />

      <PageHero
        eyebrow="Career"
        title="Abrar Fahim's Experience"
        subtitle="Professional, research, and media roles across industry and academia."
      />

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border hidden sm:block" />
          <div className="space-y-8" data-stagger>
            {experiences.map((e, i) => (
              <div
                key={i}
                className="flex gap-5"
              >
                <div className="hidden sm:flex flex-col items-center">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[hsl(var(--grad-2))] text-primary-foreground flex-shrink-0 shadow-glow-sm">
                    {(() => {
                      const Icon = categoryIcon[e.category] || Briefcase;
                      return <Icon size={18} />;
                    })()}
                  </div>
                </div>
                <div className="glass-card rounded-2xl p-6 flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Badge variant="secondary" className="rounded-full text-xs">{e.category}</Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar size={12} /> {e.dates}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold">{e.title}</h2>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground mt-1.5">
                    <span className="inline-flex items-center gap-1"><Briefcase size={13} />{e.organization}</span>
                    <span className="inline-flex items-center gap-1"><MapPin size={13} />{e.location}</span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {e.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-foreground/75">
                        <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
