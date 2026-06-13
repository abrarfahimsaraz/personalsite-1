import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Github, GraduationCap, Mail, Linkedin,
  MapPin, Download, FileText, Briefcase, Award, FolderOpen,
  Brain, Shield, Zap, HeartPulse, Sparkles,
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

const featuredPapers = researchPapers.filter(p => p.status === "Published").slice(0, 4);

const researchAreas = [
  {
    icon: HeartPulse,
    title: "Medical Imaging",
    description: "CNN-based frameworks for colorectal cancer detection, bone fracture identification, diabetic retinopathy diagnosis, and cataract screening.",
  },
  {
    icon: Zap,
    title: "Power Systems",
    description: "AC optimal power flow optimization using machine learning, deep neural networks, and particle swarm optimization on IEEE test systems.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Intrusion detection in software-defined networks and malware classification using hybrid feature selection and ensemble methods.",
  },
  {
    icon: Brain,
    title: "Explainable AI",
    description: "LIME and Grad-CAM based interpretability for clinical decision support, maternal risk prediction, and anemia classification.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function HomePage() {
  const currentRoles = experiences.filter(e => e.dates.includes("Present")).slice(0, 2);
  const heroSkills = [
    ...skills.programmingLanguages.map(s => s.name),
    ...skills.frameworksLibraries,
    ...skills.aiDomains.slice(0, 4),
  ];

  return (
    <>
      <SEO
        description="Abrar Fahim — AI Researcher & Data Scientist. B.Sc. EEE graduate from IUT specializing in deep learning, power systems optimization, and medical imaging research."
        path="/"
      />

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative hero-gradient overflow-hidden text-white">
        {/* Grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 mask-fade-edges"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        {/* Aurora glows */}
        <div className="pointer-events-none absolute -top-40 right-0 h-[30rem] w-[30rem] rounded-full bg-[hsl(var(--grad-2)/0.20)] blur-3xl animate-aurora" />
        <div className="pointer-events-none absolute left-[-6rem] top-1/3 h-80 w-80 rounded-full bg-[hsl(var(--grad-3)/0.16)] blur-3xl animate-float" />

        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 lg:pb-28 lg:pt-40">
          <div className="grid items-center gap-12 lg:grid-cols-5">
            {/* Left — copy */}
            <motion.div variants={container} initial="hidden" animate="show" className="lg:col-span-3">
              <motion.div variants={item} className="mb-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-white/80 backdrop-blur">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  Open to Research Collaboration
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-white/55">
                  <MapPin className="h-3.5 w-3.5" /> {personalInfo.location}
                </span>
              </motion.div>

              <motion.h1
                variants={item}
                className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
              >
                Abrar Fahim
              </motion.h1>
              <motion.p
                variants={item}
                className="mt-4 text-xl font-medium text-white/70 sm:text-2xl"
              >
                <span className="text-gradient">AI Researcher</span> &amp; Data Scientist
              </motion.p>

              <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-white/60">
                {personalInfo.synthesized}
              </motion.p>

              {/* Current roles */}
              {currentRoles.length > 0 && (
                <motion.div variants={item} className="mt-7 flex flex-wrap gap-2">
                  {currentRoles.map((role) => (
                    <span
                      key={role.title}
                      className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/75 backdrop-blur"
                    >
                      <Briefcase className="h-3.5 w-3.5 text-white/45" />
                      {role.title} — {role.organization}
                    </span>
                  ))}
                </motion.div>
              )}

              {/* CTAs */}
              <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
                <Link to="/research" className="btn-primary">
                  View Research <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white/85 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/5"
                >
                  Read Full Profile
                </Link>
                <a
                  href={personalInfo.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white/85 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/5"
                >
                  <Download className="h-4 w-4" /> CV
                </a>
              </motion.div>

              {/* Socials */}
              <motion.div variants={item} className="mt-8 flex items-center gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/60 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/5 hover:text-white"
                    aria-label={s.label}
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="hidden justify-center lg:col-span-2 lg:flex"
            >
              <div className="relative">
                {/* Gradient halo */}
                <div className="absolute -inset-5 rounded-[2.25rem] bg-[linear-gradient(135deg,hsl(var(--grad-1)/0.5),hsl(var(--grad-2)/0.5),hsl(var(--grad-3)/0.5))] opacity-40 blur-3xl" />
                {/* Gradient ring frame */}
                <div className="relative rounded-[1.75rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.25),rgba(255,255,255,0.04))] p-[1.5px] shadow-2xl">
                  <OptimizedPortrait
                    alt="Abrar Fahim — AI Researcher and Data Scientist based in Dhaka, Bangladesh"
                    width={320}
                    height={426}
                    sizes="(min-width: 1024px) 320px, 100vw"
                    className="h-auto w-80 rounded-[1.6rem] border border-white/10 object-cover object-top"
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
                {/* Floating stat card */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="absolute -left-6 bottom-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-md"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15">
                    <FileText className="h-4 w-4 text-white" />
                  </div>
                  <div className="leading-tight">
                    <p className="font-display text-lg font-bold text-white">{stats.papers}</p>
                    <p className="text-[11px] text-white/60">Publications</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ STATS ═══════════════════ */}
      <section className="relative -mt-10 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {[
              { label: "Publications", value: stats.papers, icon: FileText, to: "/research" },
              { label: "Projects", value: stats.projects, icon: FolderOpen, to: "/projects" },
              { label: "Certifications", value: stats.certifications, icon: Award, to: "/certifications" },
              { label: "Trainings", value: stats.trainings, icon: Briefcase, to: "/trainings" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Link
                  to={s.to}
                  className="group flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-5 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-[hsl(var(--grad-2)/0.12)]">
                    <s.icon className="h-5 w-5 text-primary" />
                  </span>
                  <span className="font-display text-3xl font-bold text-gradient">{s.value}</span>
                  <span className="text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">{s.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ RESEARCH AREAS ═══════════════════ */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-14 max-w-2xl text-center"
          >
            <span className="section-label justify-center">Research Focus</span>
            <h2 className="section-heading">Where I focus my research</h2>
            <p className="section-subtitle">
              Active work across AI, engineering, healthcare, and cybersecurity.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {researchAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="service-card group"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-[hsl(var(--grad-2)/0.12)] transition-transform duration-300 group-hover:scale-105">
                  <area.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 font-display text-lg font-bold">{area.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{area.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/research" className="btn-outline">
              View All Papers <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FEATURED PUBLICATIONS ═══════════════════ */}
      <section className="border-y border-border bg-accent/30 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 flex flex-wrap items-end justify-between gap-4"
          >
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
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2">
            {featuredPapers.map((paper, i) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Link to={`/research/${paper.id}`} className="group glass-card flex h-full flex-col p-6">
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SKILLS ═══════════════════ */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <span className="section-label justify-center">Technical Profile</span>
            <h2 className="section-heading">Skills &amp; Technologies</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-2.5"
          >
            {heroSkills.map((skill) => (
              <span key={skill} className="chip cursor-default">
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="px-6 pb-24">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl hero-gradient p-10 text-center text-white md:p-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-60 mask-radial"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
          <div className="relative mx-auto max-w-xl">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/75 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Let's build something
            </span>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Interested in Collaboration?</h2>
            <p className="mx-auto mt-4 max-w-md text-white/65">
              I'm always open to discussing research opportunities, joint publications, or academic projects in AI, power systems, and medical imaging.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/90"
            >
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
