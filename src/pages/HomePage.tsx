import { Link } from "react-router-dom";
import {
  ArrowRight, Github, GraduationCap, Mail, Linkedin,
  MapPin, Download, Briefcase, Award, FolderOpen, FileText,
  Sun, Zap, Network, Battery, Sparkles, FlaskConical,
} from "lucide-react";
import { personalInfo, researchPapers, stats, experiences, skills } from "@/lib/data";
import { SEO } from "@/components/SEO";
import { OptimizedPortrait } from "@/components/OptimizedPortrait";

const socials = [
  { icon: Github, href: personalInfo.github, label: "GitHub" },
  { icon: GraduationCap, href: personalInfo.scholar, label: "Google Scholar" },
  { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
];

const publishedPapers = researchPapers.filter((p) => p.status === "Published");
// Featured leads with energy/newest work (Hybrid MPPT sits first in the data array)
const featuredPapers = publishedPapers.slice(0, 4);
const ongoingPapers = researchPapers.filter((p) => p.status === "In Preparation");

const researchAreas = [
  {
    icon: Sun,
    title: "Renewable Energy",
    description: "Solar PV modeling and hybrid MPPT control to maximize energy harvest under real-world, low-irradiance conditions.",
  },
  {
    icon: Zap,
    title: "Optimal Power Flow",
    description: "AC optimal power flow solved with classical, machine-learning, deep-learning, and metaheuristic methods on IEEE test systems.",
  },
  {
    icon: Network,
    title: "Smart Grids",
    description: "Intelligent grid operation, monitoring, and control for reliable, efficient, and sustainable energy distribution.",
  },
  {
    icon: Battery,
    title: "Fuel Cells",
    description: "Clean electrochemical energy conversion and storage as part of a resilient, low-carbon power mix.",
  },
];

export default function HomePage() {
  const currentRoles = experiences.filter((e) => e.dates.includes("Present")).slice(0, 2);
  const heroSkills = [
    ...skills.programmingLanguages.map((s) => s.name),
    ...skills.frameworksLibraries,
    ...skills.aiDomains.slice(0, 4),
  ];

  const homeStats = [
    { label: "Publications", value: stats.papers, icon: FileText, to: "/research" },
    { label: "Projects", value: stats.projects, icon: FolderOpen, to: "/projects" },
    { label: "Certifications", value: stats.certifications, icon: Award, to: "/certifications" },
    { label: "Trainings", value: stats.trainings, icon: Briefcase, to: "/trainings" },
  ];

  return (
    <>
      <SEO
        description="Abrar Fahim — AI Researcher & Data Scientist. B.Sc. EEE graduate from IUT working on renewable energy, optimal power flow, and applied machine learning."
        path="/"
      />

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative overflow-hidden">
        {/* Hero glows over ambient */}
        <div className="pointer-events-none absolute -top-32 right-0 h-[28rem] w-[28rem] rounded-full bg-[hsl(var(--grad-2)/0.18)] blur-3xl animate-drift" />
        <div className="pointer-events-none absolute left-[-6rem] top-1/4 h-80 w-80 rounded-full bg-[hsl(var(--grad-3)/0.14)] blur-3xl animate-drift" style={{ animationDelay: "-8s" }} />

        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 lg:pb-28 lg:pt-40">
          <div className="grid items-center gap-12 lg:grid-cols-5">
            {/* Left — copy */}
            <div className="lg:col-span-3">
              <div data-hero-item className="mb-6 flex flex-wrap items-center gap-3">
                <span className="pill">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  Open to Research Collaboration
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" /> {personalInfo.location}
                </span>
              </div>

              <h1
                data-hero-item
                className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
              >
                <span className="text-gradient">Abrar Fahim</span>
              </h1>
              <p data-hero-item className="mt-4 text-xl font-semibold text-foreground/90 sm:text-2xl">
                AI Researcher &amp; Data Scientist
              </p>

              <p data-hero-item className="mt-6 max-w-xl text-base leading-relaxed text-foreground/90">
                {personalInfo.synthesized}
              </p>

              {currentRoles.length > 0 && (
                <div data-hero-item className="mt-7 flex flex-wrap gap-2">
                  {currentRoles.map((role) => (
                    <span
                      key={role.title}
                      className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/70 px-3 py-1.5 text-xs font-medium text-foreground/90 backdrop-blur"
                    >
                      <Briefcase className="h-3.5 w-3.5 text-primary" />
                      {role.title} — {role.organization}
                    </span>
                  ))}
                </div>
              )}

              <div data-hero-item className="mt-8 flex flex-wrap items-center gap-3">
                <Link to="/research" className="btn-primary">
                  View Research <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/about" className="btn-outline">
                  Read Full Profile
                </Link>
                <a href={personalInfo.cvUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  <Download className="h-4 w-4" /> CV
                </a>
              </div>

              <div data-hero-item className="mt-8 flex items-center gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card/60 text-muted-foreground backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                    aria-label={s.label}
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right — portrait with 3D tilt + rotating research spotlight */}
            <div data-hero-item className="hidden justify-center lg:col-span-2 lg:flex">
              <div data-tilt className="tilt relative">
                <div className="absolute -inset-5 rounded-[2.25rem] bg-[linear-gradient(135deg,hsl(var(--grad-1)/0.5),hsl(var(--grad-2)/0.5),hsl(var(--grad-3)/0.5))] opacity-50 blur-3xl" />
                <div className="relative rounded-[1.75rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.25),rgba(255,255,255,0.04))] p-[1.5px] shadow-2xl">
                  <OptimizedPortrait
                    alt="Abrar Fahim — AI Researcher and Data Scientist based in Dhaka, Bangladesh"
                    width={320}
                    height={426}
                    sizes="(min-width: 1024px) 320px, 100vw"
                    className="h-auto w-80 rounded-[1.6rem] border border-white/10 object-cover object-top"
                    loading="eager"
                    fetchPriority="high"
                    basename="landing"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ STATS ═══════════════════ */}
      <section className="relative -mt-6 px-6">
        <div className="mx-auto max-w-5xl">
          <div data-stagger className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {homeStats.map((s) => (
              <Link
                key={s.label}
                to={s.to}
                className="glass-card group flex flex-col items-center gap-2 p-5 text-center"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-[hsl(var(--grad-2)/0.15)]">
                  <s.icon className="h-5 w-5 text-primary" />
                </span>
                <span className="font-display text-3xl font-bold text-gradient sm:text-4xl">{s.value}</span>
                <span className="text-xs font-semibold text-foreground/80 transition-colors group-hover:text-foreground">{s.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ ONGOING RESEARCH WORKS ═══════════════════ */}
      {ongoingPapers.length > 0 && (
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div data-reveal className="mb-12 flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="section-label"><FlaskConical className="h-3.5 w-3.5" /> In Progress</span>
                <h2 className="section-heading">Ongoing Research Works</h2>
                <p className="section-subtitle max-w-xl">
                  Active projects currently in preparation across energy and power systems.
                </p>
              </div>
              <Link
                to="/research"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all hover:gap-2.5"
              >
                All research <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div data-stagger className="grid gap-5 md:grid-cols-2">
              {ongoingPapers.map((paper) => (
                <Link key={paper.id} to={`/research/${paper.id}`} className="group glass-card flex h-full flex-col p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="inline-block rounded-full border border-muted-foreground/30 bg-muted px-2.5 py-0.5 text-[11px] font-semibold text-muted-foreground">
                      {paper.status}
                    </span>
                    <span className="text-[11px] font-medium text-muted-foreground">{paper.venue} · {paper.year}</span>
                  </div>
                  <h3 className="mb-2 font-display text-base font-bold leading-snug transition-colors group-hover:text-primary">
                    {paper.title}
                  </h3>
                  <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">{paper.abstract}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-all group-hover:gap-2 group-hover:opacity-100">
                    View details <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════ FEATURED PUBLICATIONS ═══════════════════ */}
      <section className="border-y border-border/40 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div data-reveal className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="section-label">Selected Work</span>
              <h2 className="section-heading">Featured Publications</h2>
            </div>
            <Link
              to="/research"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all hover:gap-2.5"
            >
              All {stats.papers} papers <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div data-stagger className="grid gap-5 md:grid-cols-2">
            {featuredPapers.map((paper) => (
              <Link key={paper.id} to={`/research/${paper.id}`} className="group glass-card flex h-full flex-col p-6">
                <div className="mb-3 flex items-center gap-2">
                  <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                    {paper.venue} · {paper.year}
                  </span>
                </div>
                <h3 className="mb-2 font-display text-base font-bold leading-snug transition-colors group-hover:text-primary">
                  {paper.title}
                </h3>
                <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">{paper.abstract}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-all group-hover:gap-2 group-hover:opacity-100">
                  Read paper <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ RESEARCH FOCUS ═══════════════════ */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div data-reveal className="mx-auto mb-14 max-w-2xl text-center">
            <span className="section-label justify-center">Research Focus</span>
            <h2 className="section-heading">Where I focus my research</h2>
            <p className="section-subtitle">
              Currently centered on renewable energy, optimal power flow, smart grids, and fuel cells.
            </p>
          </div>

          <div data-stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {researchAreas.map((area) => (
              <div key={area.title} data-tilt className="service-card tilt group">
                <div className="tilt-pop mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-[hsl(var(--grad-2)/0.15)] transition-transform duration-300 group-hover:scale-105">
                  <area.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 font-display text-lg font-bold">{area.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </div>

          <div data-reveal className="mt-10 text-center">
            <Link to="/research" className="btn-outline">
              View All Papers <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SKILLS ═══════════════════ */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div data-reveal className="mb-12 text-center">
            <span className="section-label justify-center">Technical Profile</span>
            <h2 className="section-heading">Skills &amp; Technologies</h2>
          </div>

          <div data-reveal className="flex flex-wrap justify-center gap-2.5">
            {heroSkills.map((skill) => (
              <span key={skill} className="chip cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="px-6 pb-24">
        <div data-reveal className="glass-strong relative mx-auto max-w-6xl overflow-hidden rounded-3xl p-10 text-center md:p-16">
          <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-[hsl(var(--grad-2)/0.18)] blur-3xl" />
          <div className="relative mx-auto max-w-xl">
            <span className="pill mb-5">
              <Sparkles className="h-3.5 w-3.5 text-primary" /> Let's build something
            </span>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Interested in Collaboration?</h2>
            <p className="mx-auto mt-4 max-w-md text-muted-foreground">
              I'm always open to discussing research opportunities, joint publications, or academic projects in renewable energy, power systems, and applied AI.
            </p>
            <Link to="/contact" className="btn-primary mt-8">
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
