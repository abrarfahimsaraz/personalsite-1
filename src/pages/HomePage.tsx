import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, GraduationCap, Download, ArrowRight, FileText, Sparkles, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { personalInfo, researchPapers, stats, skills } from "@/lib/data";
import SkillsMarquee from "@/components/SkillsMarquee";
import type { ResearchPaper } from "@/lib/data";

const socials = [
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
  { icon: Github, href: personalInfo.github, label: "GitHub" },
  { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
  { icon: GraduationCap, href: personalInfo.scholar, label: "Scholar" },
];

const allSkills = [
  ...skills.programmingLanguages.map(s => s.name),
  ...skills.frameworksLibraries.slice(0, 8),
  ...skills.aiDomains.slice(0, 4),
];

const featuredPapers = researchPapers.slice(0, 6);

const gridSpans = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-2",
  "md:col-span-2 md:row-span-1",
  "md:col-span-1 md:row-span-1",
];

function PaperCard({ paper, index }: { paper: ResearchPaper; index: number }) {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}%`);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`bento-card group ${gridSpans[index % gridSpans.length]}`}
    >
      <div className="flex items-center gap-2 mb-3">
        <Badge
          variant="outline"
          className={`text-xs rounded-full ${
            paper.status === "Published" ? "border-primary/40 text-primary bg-primary/10" :
            paper.status === "Under Review" ? "border-amber-500/40 text-amber-400 bg-amber-500/10" :
            "border-blue-400/40 text-blue-400 bg-blue-400/10"
          }`}
        >
          {paper.status}
        </Badge>
        <span className="text-xs text-muted-foreground">{paper.year}</span>
      </div>
      <h3 className={`font-semibold leading-snug mb-2 group-hover:text-primary transition-colors ${
        index % gridSpans.length === 0 ? "text-xl" : "text-base"
      }`}>
        {paper.title}
      </h3>
      <p className="text-sm text-muted-foreground mb-3">
        {paper.venue}
        {paper.location && `, ${paper.location}`}
      </p>
      {index % gridSpans.length === 0 && (
        <p className="text-sm text-foreground/60 line-clamp-3 mb-4">
          {paper.abstract}
        </p>
      )}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {paper.tags.slice(0, 3).map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs rounded-full">
            {tag}
          </Badge>
        ))}
      </div>
      <Link
        to={`/research/${paper.id}`}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all"
      >
        View Details <ArrowRight size={14} />
      </Link>
    </div>
  );
}

export default function HomePage() {
  return (
    <div>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: personalInfo.name,
            jobTitle: personalInfo.role,
            email: personalInfo.email,
            url: window.location.origin,
            sameAs: [personalInfo.github, personalInfo.linkedin, personalInfo.scholar],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-primary/8 blur-[120px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 w-full">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm font-medium text-muted-foreground mb-8 animate-fade-in">
              <Sparkles size={14} className="text-primary" />
              <span>Open to graduate research opportunities</span>
            </div>

            <h1 style={{ color: "white", background: "red" }} className="text-5xl font-bold leading-[1.1] sm:text-7xl lg:text-8xl mb-6 text-foreground animate-fade-in">
              {personalInfo.name.split(" ")[0]}{" "}
              <span className="text-primary">{personalInfo.name.split(" ").slice(1).join(" ")}</span>
            </h1>

            <p className="text-lg text-muted-foreground font-medium sm:text-xl mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {personalInfo.role}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button size="lg" className="rounded-xl shadow-lg shadow-primary/20" asChild>
                <Link to="/research">
                  <FileText size={18} /> View Research
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-xl" asChild>
                <a href={personalInfo.cvUrl} download>
                  <Download size={18} /> Download CV
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-xl" asChild>
                <Link to="/about">
                  <User size={18} /> About Me
                </Link>
              </Button>
            </div>

            <div className="flex justify-center gap-3 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card/50 text-muted-foreground transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:-translate-y-0.5"
                >
                  <s.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Marquee */}
      <section className="border-y border-border py-2 bg-card/30">
        <SkillsMarquee skills={allSkills} />
        <SkillsMarquee skills={allSkills} reverse className="mt-2" />
      </section>

      {/* Quick Stats */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { label: "Research Papers", value: stats.papers, icon: "📄" },
              { label: "Projects", value: stats.projects, icon: "🔬" },
              { label: "Trainings", value: stats.trainings, icon: "🏭" },
              { label: "Certifications", value: stats.certifications, icon: "🏆" },
            ].map((s) => (
              <div key={s.label} className="bento-card text-center py-8">
                <p className="text-3xl mb-2">{s.icon}</p>
                <p className="text-4xl font-bold text-primary">{s.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Research */}
      <section className="py-16 border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Research</h2>
              <p className="text-muted-foreground">Recent publications and ongoing work</p>
            </div>
            <Button variant="outline" className="rounded-xl hidden sm:flex" asChild>
              <Link to="/research">
                View All <ArrowRight size={16} />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredPapers.map((paper, index) => (
              <PaperCard key={paper.id} paper={paper} index={index} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Button variant="outline" className="rounded-xl" asChild>
              <Link to="/research">
                View All {stats.papers} Papers <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
