import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, GraduationCap, Download, ArrowRight, FileText, User, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { personalInfo, researchPapers, stats, skills } from "@/lib/data";
import PageTransition from "@/components/PageTransition";
import SectionHeading from "@/components/SectionHeading";
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

const featuredPapers = researchPapers.slice(0, 4);

function PaperCard({ paper }: { paper: ResearchPaper }) {
  return (
    <div className="bento-card group">
      <div className="flex items-center gap-2 mb-3">
        <Badge variant="outline" className={`text-xs rounded-full ${
          paper.status === "Published" ? "border-primary/40 text-primary bg-primary/10" :
          paper.status === "Under Review" ? "border-amber-500/40 text-amber-400 bg-amber-500/10" :
          "border-blue-400/40 text-blue-400 bg-blue-400/10"
        }`}>{paper.status}</Badge>
        <span className="text-xs text-muted-foreground">{paper.year}</span>
      </div>
      <h3 className="text-base font-semibold leading-snug mb-2 group-hover:text-primary transition-colors">
        {paper.title}
      </h3>
      <p className="text-sm text-muted-foreground mb-3">
        {paper.venue}{paper.location && `, ${paper.location}`}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {paper.tags.slice(0, 3).map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs rounded-full">{tag}</Badge>
        ))}
      </div>
      <Link to={`/research/${paper.id}`} className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all">
        View Details <ArrowRight size={14} />
      </Link>
    </div>
  );
}

export default function HomePage() {
  return (
    <PageTransition>
      <div className="page-container">

        {/* ── Hero: Two-column with bio ── */}
        <section className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center mb-20">
          {/* Left: Text */}
          <div className="lg:col-span-3">
            <Badge variant="outline" className="rounded-full mb-6 text-sm px-4 py-1.5 border-primary/30 text-primary bg-primary/5">
              Open to graduate research opportunities
            </Badge>

            <h1 className="section-heading text-4xl sm:text-6xl lg:text-7xl mb-4">
              {personalInfo.name.split(" ")[0]}{" "}
              <span className="text-primary">{personalInfo.name.split(" ").slice(1).join(" ")}</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-4 flex items-center gap-2">
              <Briefcase size={16} className="text-primary" />
              {personalInfo.role}
            </p>

            <p className="text-base text-foreground/70 leading-relaxed mb-4 max-w-xl">
              {personalInfo.intro}
            </p>

            <p className="text-sm text-muted-foreground mb-8 flex items-center gap-2">
              <MapPin size={14} /> {personalInfo.location}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <Button size="lg" className="rounded-xl" asChild>
                <Link to="/research"><FileText size={18} /> View Research</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-xl" asChild>
                <a href={personalInfo.cvUrl} download><Download size={18} /> Download CV</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-xl" asChild>
                <Link to="/about"><User size={18} /> About Me</Link>
              </Button>
            </div>

            <div className="flex gap-3">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
                ><s.icon size={20} /></a>
              ))}
            </div>
          </div>

          {/* Right: Stats grid */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {[
              { label: "Research Papers", value: stats.papers, icon: "📄" },
              { label: "Projects", value: stats.projects, icon: "🔬" },
              { label: "Trainings", value: stats.trainings, icon: "🏭" },
              { label: "Certifications", value: stats.certifications, icon: "🏆" },
            ].map((s) => (
              <div key={s.label} className="glass-card text-center py-6 px-4">
                <p className="text-2xl mb-1">{s.icon}</p>
                <p className="text-3xl font-bold text-primary">{s.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Skills Marquee ── */}
        <section className="mb-20">
          <SectionHeading title="Skills & Technologies" subtitle="Tools and domains I work with" />
          <div className="rounded-2xl border border-border bg-card/30 py-4 overflow-hidden">
            <SkillsMarquee skills={allSkills} />
            <SkillsMarquee skills={allSkills} reverse className="mt-3" />
          </div>
        </section>

        {/* ── Featured Research ── */}
        <section>
          <SectionHeading title="Featured Research" subtitle="Recent publications and ongoing work" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featuredPapers.map((paper) => (
              <PaperCard key={paper.id} paper={paper} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline" className="rounded-xl" asChild>
              <Link to="/research">View All {stats.papers} Papers <ArrowRight size={16} /></Link>
            </Button>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
