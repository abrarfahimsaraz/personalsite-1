import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, GraduationCap, Download, ArrowRight, FileText, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { personalInfo, researchPapers, stats } from "@/lib/data";
import PageTransition from "@/components/PageTransition";

const fade = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

const socials = [
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
  { icon: Github, href: personalInfo.github, label: "GitHub" },
  { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
  { icon: GraduationCap, href: personalInfo.scholar, label: "Scholar" },
];

const ongoingPapers = researchPapers.filter((p) => p.year === 2026 && p.status === "Under Review");
const featuredPapers = researchPapers.filter((p) => p.status === "Published").slice(0, 4);

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

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[hsl(260,65%,55%)]/5 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-32">
          <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-3xl">
            <motion.div variants={fade} className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground mb-6">
              <Sparkles size={14} />
              <span>Open to graduate research opportunities</span>
            </motion.div>

            <motion.h1 variants={fade} className="text-5xl font-bold leading-[1.1] sm:text-6xl lg:text-7xl">
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            <motion.p variants={fade} className="mt-4 text-xl text-muted-foreground font-medium sm:text-2xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {personalInfo.role}
            </motion.p>

            <motion.p variants={fade} className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/70 sm:text-lg">
              {personalInfo.synthesized}
            </motion.p>

            <motion.div variants={fade} className="mt-10 flex flex-wrap gap-3">
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
            </motion.div>

            <motion.div variants={fade} className="mt-8 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-muted-foreground transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:shadow-md hover:shadow-primary/20 hover:-translate-y-0.5"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Ongoing Research 2026 */}
      <section className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-bg text-white">
              <Clock size={18} />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Ongoing Research</h2>
              <p className="text-sm text-muted-foreground">2026 — Under Review</p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {ongoingPapers.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-xl border-primary/10 p-6"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Badge className="rounded-full gradient-bg border-0 text-white text-xs">{p.status}</Badge>
                  <Badge variant="outline" className="rounded-full text-xs">{p.tags[0]}</Badge>
                </div>
                <h3 className="font-serif text-lg font-semibold leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.venue}, {p.location}</p>
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{p.abstract}</p>
                <Link to={`/research/${p.id}`} className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all">
                  View Details <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Research */}
      <section className="border-t bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-bold mb-8">Featured Research</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {featuredPapers.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card rounded-xl p-5 group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-xs font-medium text-primary">{p.year}</span>
                  <span className="text-xs text-muted-foreground">·</span>
                  <span className="text-xs text-muted-foreground">{p.venue}</span>
                </div>
                <h3 className="font-serif text-base font-semibold leading-snug group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {p.tags.slice(0, 2).map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs rounded-full">{t}</Badge>
                  ))}
                </div>
                <Link to={`/research/${p.id}`} className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">
                  Details <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button variant="outline" className="rounded-xl" asChild>
              <Link to="/research">View All {stats.papers} Papers <ArrowRight size={14} /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="gradient-bg text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-14 sm:grid-cols-4 sm:px-6">
          {[
            { label: "Research Papers", value: stats.papers, icon: "📄" },
            { label: "Projects", value: stats.projects, icon: "🔬" },
            { label: "Trainings", value: stats.trainings, icon: "🏭" },
            { label: "Certifications", value: stats.certifications, icon: "🏆" },
          ].map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-3xl mb-1">{s.icon}</p>
              <p className="text-4xl font-bold">{s.value}</p>
              <p className="mt-1 text-sm opacity-80">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
