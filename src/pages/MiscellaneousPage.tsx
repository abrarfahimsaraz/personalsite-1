import { extracurriculars, awards } from "@/lib/data";
import { Users, Trophy, ExternalLink } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import { SEO } from "@/components/SEO";
import PageHero from "@/components/PageHero";

export default function MiscellaneousPage() {
  return (
    <PageTransition>
      <SEO title="Miscellaneous" description="Extracurricular activities and awards of Abrar Fahim — IEEE membership, event organization, sports, and academic achievements." path="/miscellaneous" />

      <PageHero
        eyebrow="Extras"
        title="Activities & Achievements"
        subtitle="Extracurricular involvement, awards, and community contributions."
      />

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Users size={18} />
              </div>
              <h2 className="text-xl font-bold">Extracurricular Activities</h2>
            </div>
            <div className="space-y-8">
              {extracurriculars.map((year) => (
                <div key={year.year}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-6 w-6 rounded-lg bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                      {year.year.slice(2)}
                    </div>
                    <h3 className="text-sm font-bold text-primary">{year.year}</h3>
                  </div>
                  <ul className="space-y-2.5 pl-8" data-stagger>
                    {year.items.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-foreground/80"
                      >
                        <span className="font-semibold text-foreground">{item.role}</span>
                        <span className="text-muted-foreground"> — </span>
                        {item.description}
                        {item.certificateUrl && (
                          <a href={item.certificateUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 ml-2 text-primary hover:text-primary/80 transition-colors">
                            <ExternalLink size={12} />
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-primary">
                <Trophy size={18} />
              </div>
              <h2 className="text-xl font-bold">Awards & Achievements</h2>
            </div>
            <div className="space-y-4" data-stagger>
              {awards.map((a, i) => (
                <div
                  key={i}
                  className="glass-card rounded-xl p-5"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Trophy size={16} className="flex-shrink-0 text-primary" />
                    <h3 className="text-sm font-semibold">{a.name}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground">{a.issuer} · {a.year}</p>
                  <p className="mt-2 text-sm text-foreground/60">{a.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
