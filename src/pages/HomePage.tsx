import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Github, GraduationCap, Mail, Linkedin,
  MapPin, Download, FileText, Briefcase, Award, FolderOpen,
} from "lucide-react";
import { personalInfo, researchPapers, stats, experiences } from "@/lib/data";
import PageTransition from "@/components/PageTransition";

const socials = [
  { icon: Github, href: personalInfo.github, label: "GitHub" },
  { icon: GraduationCap, href: personalInfo.scholar, label: "Scholar" },
  { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
];

const ongoingResearch = researchPapers.filter(p => p.status === "Under Review" || p.status === "In Preparation");
const featuredPapers = researchPapers.filter(p => p.status === "Published").slice(0, 4);

const statCards = [
  { label: "Publications", value: stats.papers, icon: FileText, to: "/research" },
  { label: "Projects", value: stats.projects, icon: FolderOpen, to: "/projects" },
  { label: "Certifications", value: stats.certifications, icon: Award, to: "/certifications" },
  { label: "Trainings", value: stats.trainings, icon: Briefcase, to: "/trainings" },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function HomePage() {
  const currentRoles = experiences.filter(e => e.dates.includes("Present")).slice(0, 2);

  return (
    <PageTransition>
      <div className="mx-auto max-w-6xl px-6 py-12 lg:py-20">

        {/* ── Hero ── */}
        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-20"
        >
          {/* Greeting + Location */}
          <motion.div variants={item} className="flex items-center gap-3 mb-6">
            <span className="inline-block px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
              Available for Collaboration
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="w-3 h-3" /> {personalInfo.location}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.08] mb-6"
          >
            {personalInfo.name}
            <span className="text-primary">.</span>
            <br />
            <span className="text-muted-foreground text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold">
              AI Researcher &amp; Data Scientist
            </span>
          </motion.h1>

          {/* Synthesized Bio */}
          <motion.p
            variants={item}
            className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed mb-8"
          >
            {personalInfo.synthesized}
          </motion.p>

          {/* Current Roles */}
          {currentRoles.length > 0 && (
            <motion.div variants={item} className="flex flex-wrap gap-3 mb-8">
              {currentRoles.map((role) => (
                <span
                  key={role.title}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-border bg-card text-sm font-medium"
                >
                  <Briefcase className="w-3.5 h-3.5 text-primary" />
                  {role.title} — <span className="text-muted-foreground">{role.organization}</span>
                </span>
              ))}
            </motion.div>
          )}

          {/* Actions + Socials */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-4">
            <Link
              to="/research"
              className="bg-primary text-primary-foreground px-7 py-3 rounded-full font-medium hover:bg-primary/90 transition-all inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              View Research <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-border px-7 py-3 rounded-full font-medium hover:bg-card hover:border-muted-foreground transition-all text-foreground inline-flex items-center gap-2"
            >
              <Download className="w-4 h-4" /> Download CV
            </a>
            <div className="hidden sm:flex items-center gap-1 ml-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full text-muted-foreground hover:text-foreground hover:bg-card border border-transparent hover:border-border transition-all"
                  aria-label={s.label}
                >
                  <s.icon className="w-[18px] h-[18px]" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Mobile Socials */}
          <motion.div variants={item} className="flex sm:hidden items-center gap-3 mt-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
                aria-label={s.label}
              >
                <s.icon className="w-4 h-4" />
                <span>{s.label}</span>
              </a>
            ))}
          </motion.div>
        </motion.section>

        {/* ── Stats ── */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {statCards.map((s) => (
            <motion.div key={s.label} variants={item}>
              <Link
                to={s.to}
                className="group flex flex-col items-center gap-2 p-6 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-lg transition-all text-center"
              >
                <s.icon className="w-6 h-6 text-primary mb-1" />
                <span className="text-3xl md:text-4xl font-bold">{s.value}</span>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{s.label}</span>
              </Link>
            </motion.div>
          ))}
        </motion.section>

        {/* ── Skills Marquee ── */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-6 bg-primary rounded-full" />
            <h2 className="text-2xl font-bold tracking-tight">Technical Expertise</h2>
          </div>
          <div className="rounded-2xl border border-border bg-card/50 p-4 space-y-1 overflow-hidden">
            <SkillsMarquee
              skills={[
                ...skills.programmingLanguages.map(s => s.name),
                ...skills.frameworksLibraries,
              ]}
            />
            <SkillsMarquee
              skills={[...skills.aiDomains, ...skills.dataSkills]}
              reverse
            />
          </div>
        </section>

        {/* ── Ongoing Research ── */}
        {ongoingResearch.length > 0 && (
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-6 bg-primary rounded-full" />
              <h2 className="text-2xl font-bold tracking-tight">Ongoing Research</h2>
              <span className="ml-auto text-xs text-muted-foreground">{ongoingResearch.length} papers</span>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {ongoingResearch.map((paper) => (
                <Link
                  key={paper.id}
                  to={`/research/${paper.id}`}
                  className="group border border-border bg-card rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex-1">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 border ${
                        paper.status === "Under Review"
                          ? "bg-amber-500/10 text-amber-400 border-amber-500/30"
                          : "bg-blue-500/10 text-blue-400 border-blue-500/30"
                      }`}>
                        {paper.status}
                      </span>
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors leading-tight mb-2">
                        {paper.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-medium">{paper.venue}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{paper.abstract}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ── Featured Published Research ── */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 bg-primary rounded-full" />
              <h2 className="text-2xl font-bold tracking-tight">Featured Publications</h2>
            </div>
            <Link
              to="/research"
              className="text-sm font-medium hover:underline underline-offset-4 flex items-center gap-1 group text-muted-foreground hover:text-foreground"
            >
              All {stats.papers} papers <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredPapers.map((paper) => (
              <Link
                key={paper.id}
                to={`/research/${paper.id}`}
                className="group border border-border bg-card rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary border border-primary/30 rounded-full text-xs font-medium mb-3">
                  Published · {paper.year}
                </span>
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors leading-tight mb-2">
                  {paper.title}
                </h3>
                <p className="text-sm text-muted-foreground font-medium mb-2">{paper.venue}</p>
                <p className="text-muted-foreground/70 text-sm leading-relaxed line-clamp-2">{paper.abstract}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
