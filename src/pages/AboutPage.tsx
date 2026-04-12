import { Download, Code2, Database, Brain, Wrench, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { personalInfo, skills } from "@/lib/data";
import PageTransition from "@/components/PageTransition";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";

const skillSections = [
  { title: "Programming Languages", icon: Code2, items: skills.programmingLanguages, type: "leveled" as const },
  { title: "Frameworks & Libraries", icon: Database, items: skills.frameworksLibraries.map((s) => ({ name: s })), type: "simple" as const },
  { title: "AI & ML Domains", icon: Brain, items: skills.aiDomains.map((s) => ({ name: s })), type: "simple" as const },
  { title: "Data Skills", icon: Database, items: skills.dataSkills.map((s) => ({ name: s })), type: "simple" as const },
  { title: "Tools & Software", icon: Wrench, items: skills.toolsSoftware.map((s) => ({ name: s })), type: "simple" as const },
  { title: "Soft Skills & Languages", icon: Users, items: [...skills.softSkills.map((s) => ({ name: s })), ...skills.languages.map((l) => ({ name: `${l.name} (${l.type})` }))], type: "simple" as const },
];

export default function AboutPage() {
  return (
    <PageTransition>
      <SEO title="About" description="Learn about Abrar Fahim — AI researcher, data scientist, and electrical engineering graduate with expertise in deep learning, power systems, and medical imaging." path="/about" />

      {/* Hero band */}
      <section className="bg-accent/50 pt-28 pb-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <span className="section-label">About Me</span>
          <h1 className="text-4xl font-bold mt-3 sm:text-5xl">
            About Abrar Fahim
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-5xl py-16">
        <div className="max-w-3xl">
          <p className="text-lg leading-relaxed text-foreground/80">{personalInfo.intro}</p>
          <p className="mt-4 text-lg leading-relaxed text-foreground/60">
            Motivated to pursue advanced studies in power engineering with modern machine learning architectures.
            I am passionate about bridging the gap between classical engineering and cutting-edge AI to solve
            real-world problems in energy, healthcare, and cybersecurity.
          </p>
          <div className="mt-8">
            <a href={personalInfo.cvUrl} download className="btn-primary inline-flex items-center gap-2">
              <Download size={18} /> Download CV (PDF)
            </a>
          </div>
        </div>

        <div className="mt-20">
          <span className="section-label">Technical Skills</span>
          <h2 className="text-2xl font-bold mt-3 sm:text-3xl">
            Tools, Technologies & Expertise
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mt-10">
            {skillSections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card rounded-xl p-5"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-primary">
                    <section.icon size={18} />
                  </div>
                  <h3 className="text-sm font-semibold">{section.title}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {section.items.map((item) => (
                    <Badge
                      key={item.name}
                      variant="secondary"
                      className="rounded-full text-xs"
                    >
                      {item.name}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
