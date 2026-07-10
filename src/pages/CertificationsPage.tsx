import { Badge } from "@/components/ui/badge";
import { certifications } from "@/lib/data";
import { Award, BookOpen, ExternalLink } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import { SEO } from "@/components/SEO";
import PageHero from "@/components/PageHero";

const conferenceCerts = certifications.filter((c) => c.category === "conference");
const courseCerts = certifications.filter((c) => c.category === "course");

export default function CertificationsPage() {
  return (
    <PageTransition>
      <SEO title="Certifications" description="Conference presentations and professional certifications earned by Abrar Fahim — IEEE, Springer, Coursera, and more." path="/certifications" />

      <PageHero
        eyebrow="Credentials"
        title="Certifications & Credentials"
        subtitle="Conference presentations and professional certifications."
      />

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid items-stretch gap-12 lg:grid-cols-2">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Award size={18} />
              </div>
              <h2 className="text-xl font-bold">Conference Presentations</h2>
            </div>
            <div className="flex flex-1 flex-col justify-between gap-3" data-stagger>
              {conferenceCerts.map((c, i) => (
                <div
                  key={i}
                  className="glass-card rounded-xl p-4 flex items-start gap-3"
                >
                  <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-primary flex-shrink-0">
                    <Award size={14} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium leading-snug">{c.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{c.issuer}{c.year ? ` · ${c.year}` : ""}</p>
                  </div>
                  {c.certificateUrl && (
                    <a href={c.certificateUrl} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 text-primary hover:text-primary/80 transition-colors" aria-label="View certificate">
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-primary">
                <BookOpen size={18} />
              </div>
              <h2 className="text-xl font-bold">Courses & Programs</h2>
            </div>
            <div className="grid flex-1 grid-cols-1 content-between gap-3 sm:grid-cols-2" data-stagger>
              {courseCerts.map((c, i) => (
                <div
                  key={i}
                  className="glass-card rounded-xl p-4 flex items-start gap-3"
                >
                  <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-muted-foreground flex-shrink-0">
                    <BookOpen size={14} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium leading-snug">{c.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{c.issuer}{c.year ? ` · ${c.year}` : ""}</p>
                  </div>
                  {c.certificateUrl && (
                    <a href={c.certificateUrl} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 text-primary hover:text-primary/80 transition-colors" aria-label="View certificate">
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
