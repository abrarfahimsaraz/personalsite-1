import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, GraduationCap, Download, ArrowRight, FileText, Sparkles, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo, researchPapers, stats, skills } from "@/lib/data";
import PageTransition from "@/components/PageTransition";
import SkillsMarquee from "@/components/SkillsMarquee";
import BentoGrid from "@/components/BentoGrid";

const fade = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

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

export default function HomePage() {
  return (
    <PageTransition>
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
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Grid pattern background */}
        <div className="absolute inset-0 grid-pattern opacity-50" />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 h-[300px] w-[300px] rounded-full bg-emerald-500/15 blur-[100px]" />

        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <motion.div initial="hidden" animate="show" variants={stagger} className="text-center">
            {/* Badge */}
            <motion.div variants={fade} className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 px-4 py-1.5 text-sm font-medium text-muted-foreground mb-8">
              <Sparkles size={14} className="text-primary" />
              <span>Open to graduate research opportunities</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1 variants={fade} className="text-6xl font-bold leading-[1.1] sm:text-7xl lg:text-8xl mb-6">
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            {/* Role */}
            <motion.p variants={fade} className="text-xl text-muted-foreground font-medium sm:text-2xl mb-8 max-w-2xl mx-auto">
              {personalInfo.role}
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={fade} className="flex flex-wrap justify-center gap-4 mb-10">
              <Button size="lg" className="rounded-xl gradient-bg border-0 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300" asChild>
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
            </motion.div>

            {/* Social links */}
            <motion.div variants={fade} className="flex justify-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/50 bg-card/50 text-muted-foreground transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
                >
                  <s.icon size={20} />
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Marquee */}
      <section className="border-y border-border/50 py-2 bg-card/30">
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
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bento-card text-center py-8"
              >
                <p className="text-3xl mb-2">{s.icon}</p>
                <p className="text-4xl font-bold gradient-text">{s.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Research - Bento Grid */}
      <section className="py-16 border-t border-border/50">
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

          <BentoGrid papers={featuredPapers} />

          <div className="mt-8 text-center sm:hidden">
            <Button variant="outline" className="rounded-xl" asChild>
              <Link to="/research">
                View All {stats.papers} Papers <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
