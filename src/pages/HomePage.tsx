import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Github, GraduationCap, Mail, Linkedin,
  MapPin, Download, FileText, Briefcase, Award, FolderOpen,
  Brain, Shield, Zap, HeartPulse,
} from "lucide-react";
import { personalInfo, researchPapers, stats, experiences, skills } from "@/lib/data";
import { SEO } from "@/components/SEO";

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
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function HomePage() {
  const currentRoles = experiences.filter(e => e.dates.includes("Present")).slice(0, 2);

  return (
    <>
      <SEO
        description="Abrar Fahim — AI Researcher & Data Scientist. B.Sc. EEE graduate from IUT specializing in deep learning, power systems optimization, and medical imaging research."
        path="/"
      />

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(99,140,255,0.08),transparent_60%)]" />

        <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-16 lg:pt-36 lg:pb-24">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left — 3 cols */}
            <motion.div variants={container} initial="hidden" animate="show" className="lg:col-span-3">
              <motion.div variants={item} className="flex items-center gap-3 mb-6">
                <span className="inline-block px-3 py-1 rounded-full border border-white/15 bg-white/5 text-white/70 text-xs font-medium tracking-wide">
                  Open to Research Collaboration
                </span>
                <span className="flex items-center gap-1.5 text-xs text-white/50">
                  <MapPin className="w-3 h-3" /> {personalInfo.location}
                </span>
              </motion.div>

              <motion.h1 variants={item} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-3">
                Abrar Fahim
              </motion.h1>
              <motion.p variants={item} className="text-xl sm:text-2xl text-white/60 font-medium mb-6">
                AI Researcher & Data Scientist
              </motion.p>

              <motion.p variants={item} className="text-white/50 text-base max-w-xl leading-relaxed mb-8">
                {personalInfo.synthesized}
              </motion.p>

              {/* Current roles */}
              {currentRoles.length > 0 && (
                <motion.div variants={item} className="flex flex-wrap gap-2 mb-8">
                  {currentRoles.map((role) => (
                    <span
                      key={role.title}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs text-white/70"
                    >
                      <Briefcase className="w-3 h-3 text-white/40" />
                      {role.title} — {role.organization}
                    </span>
                  ))}
                </motion.div>
              )}

              {/* CTAs — View Research + Read Full Profile + Download CV */}
              <motion.div variants={item} className="flex flex-wrap items-center gap-3 mb-8">
                <Link to="/research" className="btn-primary">
                  View Research <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-white/80 text-sm font-medium hover:bg-white/5 transition-all"
                >
                  Read Full Profile
                </Link>
                <a
                  href={personalInfo.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-white/80 text-sm font-medium hover:bg-white/5 transition-all"
                >
                  <Download className="w-4 h-4" /> CV
                </a>
              </motion.div>

              {/* Socials */}
              <motion.div variants={item} className="flex items-center gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-9 h-9 rounded-lg text-white/40 hover:text-white hover:bg-white/5 transition-all"
                    aria-label={s.label}
                  >
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — portrait placeholder (2 cols), larger, no badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:flex lg:col-span-2 justify-center"
            >
              <div className="w-80 h-[26rem] rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-36 h-36 rounded-full bg-white/10 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-5xl font-bold text-white/25">AF</span>
                  </div>
                  <p className="text-white/30 text-sm">Add your photo here</p>
                  <p className="text-white/20 text-xs mt-1">Replace placeholder in code</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ STATS ═══════════════════ */}
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={s.to}
                  className="group flex flex-col items-center gap-2 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all text-center"
                >
                  <s.icon className="w-5 h-5 text-primary" />
                  <span className="text-3xl font-bold">{s.value}</span>
                  <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">{s.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ RESEARCH AREAS ═══════════════════ */}
      <section className="py-16 lg:py-24 bg-accent/40">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-label justify-center">Research Focus</span>
            <h2 className="text-3xl sm:text-4xl font-bold">Research Areas</h2>
            <p className="mt-2 text-muted-foreground max-w-lg mx-auto">
              Abrar Fahim's active research across AI, engineering, healthcare, and cybersecurity
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {researchAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="service-card text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mx-auto mb-4">
                  <area.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-bold mb-2">{area.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/research" className="btn-outline">
              View All Papers <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FEATURED PUBLICATIONS ═══════════════════ */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-10"
          >
            <div>
              <span className="section-label">Selected Work</span>
              <h2 className="text-3xl sm:text-4xl font-bold">Featured Publications</h2>
            </div>
            <Link
              to="/research"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline underline-offset-4"
            >
              All {stats.papers} papers <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {featuredPapers.map((paper, i) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={`/research/${paper.id}`}
                  className="group glass-card p-5 block h-full"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block px-2.5 py-0.5 bg-primary/8 text-primary border border-primary/20 rounded-full text-[11px] font-medium">
                      {paper.venue} · {paper.year}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold group-hover:text-primary transition-colors leading-snug mb-2">
                    {paper.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">{paper.abstract}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SKILLS ═══════════════════ */}
      <section className="py-16 lg:py-24 bg-accent/40">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="section-label justify-center">Technical Profile</span>
            <h2 className="text-3xl sm:text-4xl font-bold">Skills & Technologies</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2"
          >
            {[
              ...skills.programmingLanguages.map(s => s.name),
              ...skills.frameworksLibraries,
              ...skills.aiDomains.slice(0, 4),
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full border border-border bg-card text-xs font-medium text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative hero-gradient rounded-2xl p-10 md:p-14 overflow-hidden text-white text-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(99,140,255,0.1),transparent_70%)]" />
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                Interested in Collaboration?
              </h2>
              <p className="text-white/50 max-w-md mx-auto mb-6 text-sm">
                I'm always open to discussing research opportunities, joint publications, or academic projects in AI, power systems, and medical imaging.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-900 font-medium text-sm hover:bg-white/90 transition-all shadow-sm"
              >
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
