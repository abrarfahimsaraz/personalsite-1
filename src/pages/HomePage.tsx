import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, GraduationCap, Download, ArrowRight, FileText, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { personalInfo, researchPapers, stats } from "@/lib/data";

const fade = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

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
    <>
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
      <section className="relative overflow-hidden bg-gradient-to-br from-accent via-background to-background">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.12 } } }}>
            <motion.p variants={fade} className="text-sm font-semibold uppercase tracking-widest text-primary">
              Researcher & Engineer
            </motion.p>
            <motion.h1 variants={fade} className="mt-3 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {personalInfo.name}
            </motion.h1>
            <motion.p variants={fade} className="mt-2 max-w-xl text-lg text-muted-foreground sm:text-xl">
              {personalInfo.role}
            </motion.p>
            <motion.p variants={fade} className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/80">
              {personalInfo.intro}
            </motion.p>

            <motion.div variants={fade} className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/research">
                  <FileText size={16} /> View Research
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <a href={personalInfo.cvUrl} download>
                  <Download size={16} /> Download CV
                </a>
              </Button>
            </motion.div>

            <motion.div variants={fade} className="mt-6 flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <s.icon size={20} />
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Ongoing Research 2026 */}
      <section className="border-t bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="mb-8 flex items-center gap-2">
            <Clock size={20} className="text-primary" />
            <h2 className="text-2xl font-bold">Ongoing Research (2026)</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {ongoingPapers.map((p) => (
              <Card key={p.id} className="border-primary/20 bg-card transition-shadow hover:shadow-md">
                <CardHeader className="pb-3">
                  <Badge variant="outline" className="mb-2 w-fit border-primary/40 text-primary">
                    {p.status}
                  </Badge>
                  <CardTitle className="text-lg leading-snug">{p.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p className="text-muted-foreground">{p.venue}, {p.location}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                    ))}
                  </div>
                  <p className="pt-1 text-foreground/80">{p.abstract}</p>
                  <Link to={`/research/${p.id}`} className="inline-flex items-center gap-1 pt-2 text-primary hover:underline text-sm font-medium">
                    View Details <ArrowRight size={14} />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Research */}
      <section className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="mb-8 text-2xl font-bold">Featured Research</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {featuredPapers.map((p) => (
              <Card key={p.id} className="transition-shadow hover:shadow-md">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="default" className="text-xs">{p.status}</Badge>
                    <span className="text-xs text-muted-foreground">{p.year}</span>
                  </div>
                  <CardTitle className="text-base leading-snug">{p.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p className="text-muted-foreground">{p.venue}{p.location ? `, ${p.location}` : ""}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                    ))}
                  </div>
                  <Link to={`/research/${p.id}`} className="inline-flex items-center gap-1 pt-1 text-primary hover:underline text-sm font-medium">
                    View Details <ArrowRight size={14} />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <Link to="/research">View All Research <ArrowRight size={14} /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="border-t bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-10 sm:grid-cols-4 sm:px-6">
          {[
            { label: "Research Papers", value: stats.papers },
            { label: "Projects", value: stats.projects },
            { label: "Trainings", value: stats.trainings },
            { label: "Certifications", value: stats.certifications },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold">{s.value}</p>
              <p className="mt-1 text-sm opacity-80">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
