import { Link } from "react-router-dom";
import { ArrowRight, Github, GraduationCap, Mail, Linkedin } from "lucide-react";
import { personalInfo, researchPapers, stats } from "@/lib/data";
import PageTransition from "@/components/PageTransition";

const socials = [
  { icon: Github, href: personalInfo.github, label: "GitHub" },
  { icon: GraduationCap, href: personalInfo.scholar, label: "Google Scholar" },
  { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
];

const ongoingResearch = researchPapers.filter(p => p.status === "Under Review");
const featuredPapers = researchPapers.filter(p => p.status === "Published").slice(0, 4);

export default function HomePage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-6xl px-6">

        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col justify-center max-w-5xl">
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-6">
              Data Scientist & <br />
              <span className="text-primary">AI Researcher.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
              I build intelligent systems that bridge the gap between theoretical research and real-world application.
              Currently optimizing financial risk at{" "}
              <span className="text-foreground font-semibold">NEXT Ventures</span>.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-5 mb-8">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                  aria-label={s.label}
                >
                  <s.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">{s.label}</span>
                </a>
              ))}
            </div>

            <div className="flex gap-4 flex-wrap">
              <Link
                to="/research"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-all inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                View Research <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-border px-8 py-3 rounded-full font-medium hover:bg-card hover:border-muted-foreground transition-all text-foreground"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </section>

        {/* Ongoing Research */}
        {ongoingResearch.length > 0 && (
          <section className="py-16 border-t border-border">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-primary rounded-full"></div>
              <h2 className="text-3xl font-bold tracking-tight">Ongoing Research</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {ongoingResearch.map((paper) => (
                <Link
                  key={paper.id}
                  to={`/research/${paper.id}`}
                  className="group border-2 border-border bg-card rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded-full text-xs font-medium mb-3">
                        Under Review
                      </span>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors leading-tight">
                        {paper.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2 font-medium">{paper.venue}</p>
                      {paper.location && (
                        <p className="text-xs text-muted-foreground/70 mb-3">{paper.location}</p>
                      )}
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{paper.abstract}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Featured Research */}
        <section className="py-20 border-t border-border">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-primary rounded-full"></div>
              <h2 className="text-3xl font-bold tracking-tight">Featured Research</h2>
            </div>
            <Link to="/research" className="text-sm font-medium hover:underline underline-offset-4 flex items-center gap-1 group text-muted-foreground hover:text-foreground">
              See all {stats.papers} publications <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredPapers.map((paper) => (
              <Link
                key={paper.id}
                to={`/research/${paper.id}`}
                className="group border-2 border-border bg-card rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary border border-primary/30 rounded-full text-xs font-medium mb-3">
                      Published
                    </span>
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors leading-tight mb-2">
                      {paper.title}
                    </h3>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                </div>
                <p className="text-sm text-muted-foreground mb-2 font-medium">{paper.venue}</p>
                <p className="text-muted-foreground/70 text-sm leading-relaxed line-clamp-2">{paper.abstract}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
