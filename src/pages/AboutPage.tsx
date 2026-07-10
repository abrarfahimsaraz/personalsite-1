import { Download, Code2, Database, Brain, Wrench, Users, GraduationCap, Lightbulb, HeartHandshake, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { personalInfo, skills } from "@/lib/data";
import PageTransition from "@/components/PageTransition";
import { SEO } from "@/components/SEO";
import PageHero from "@/components/PageHero";
import { OptimizedPortrait } from "@/components/OptimizedPortrait";

const skillSections = [
  { title: "Programming Languages", icon: Code2, items: skills.programmingLanguages, type: "leveled" as const },
  { title: "Frameworks & Libraries", icon: Database, items: skills.frameworksLibraries.map((s) => ({ name: s })), type: "simple" as const },
  { title: "AI & ML Domains", icon: Brain, items: skills.aiDomains.map((s) => ({ name: s })), type: "simple" as const },
  { title: "Data Skills", icon: Database, items: skills.dataSkills.map((s) => ({ name: s })), type: "simple" as const },
  { title: "Tools & Software", icon: Wrench, items: skills.toolsSoftware.map((s) => ({ name: s })), type: "simple" as const },
  { title: "Soft Skills & Languages", icon: Users, items: [...skills.softSkills.map((s) => ({ name: s })), ...skills.languages.map((l) => ({ name: `${l.name} (${l.type})` }))], type: "simple" as const },
];

const researchQualities = [
  {
    icon: Lightbulb,
    title: "Self-Directed Learner",
    text: "Independently expanded into deep learning and medical image analysis beyond coursework — pursuing novel research directions in AI for healthcare.",
  },
  {
    icon: GraduationCap,
    title: "Research-Oriented",
    text: "Co-authored multiple IEEE and Springer publications while maintaining strong academic performance, with A+ grades in both thesis courses.",
  },
  {
    icon: HeartHandshake,
    title: "Collaborative & Coachable",
    text: "Known for proactively seeking feedback, maintaining continuous communication with supervisors, and delivering work ahead of schedule.",
  },
  {
    icon: BookOpen,
    title: "Mentor & Communicator",
    text: "Mentors fellow students, has published technical articles in national media, and communicates complex research to interdisciplinary audiences.",
  },
];

export default function AboutPage() {
  return (
    <PageTransition>
      <SEO
        title="About"
        description="About Abrar Fahim — AI researcher, data scientist, and B.Sc. EEE graduate from IUT with expertise in deep learning, power systems optimization, and medical imaging research."
        path="/about"
      />

      <PageHero
        eyebrow="About Me"
        title="About Abrar Fahim"
        subtitle="AI researcher and data scientist bridging classical engineering with modern deep learning."
      />

      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Bio + Photo */}
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2">
            <p className="text-base leading-relaxed text-foreground">
              {personalInfo.intro}
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground">
              Abrar Fahim is driven by a commitment to bridging classical engineering and cutting-edge AI.
              His undergraduate thesis explored plasmonic coupling and thermal effects on nanoparticles — a
              novel direction within his research group that had never been attempted before. That same
              willingness to pursue uncharted problems carries through his current work across medical imaging,
              power systems, and cybersecurity.
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground">
              Beyond research, Abrar Fahim actively mentors fellow students, has written for The Financial
              Express Bangladesh, and organized national-level events at IUT. He brings the same discipline to
              collaboration as he does to independent work — consistently seeking constructive feedback and
              delivering results well ahead of deadlines.
            </p>
            <div className="mt-8">
              <a href={personalInfo.cvUrl} download className="btn-primary">
                <Download size={18} /> Download CV (PDF)
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="hidden lg:block">
            <OptimizedPortrait
              alt="Abrar Fahim — AI Researcher and Data Scientist"
              width={480}
              height={640}
              sizes="(min-width: 1024px) 480px, 100vw"
              className="w-full h-auto rounded-2xl object-cover object-top aspect-[3/4] border border-border"
              loading="lazy"
              basename="landing"
            />
          </div>
        </div>

        {/* Research Qualities */}
        <div className="mt-20">
          <span className="section-label">Research Profile</span>
          <h2 className="text-2xl font-bold mt-3 sm:text-3xl">
            What Defines Abrar Fahim's Approach
          </h2>
          <div className="grid sm:grid-cols-2 gap-5 mt-8" data-stagger>
            {researchQualities.map((q, i) => (
              <div
                key={q.title}
                className="glass-card rounded-xl p-5"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <q.icon size={18} />
                  </div>
                  <h3 className="text-sm font-bold">{q.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{q.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mt-20">
          <span className="section-label">Technical Skills</span>
          <h2 className="text-2xl font-bold mt-3 sm:text-3xl">
            Tools, Technologies & Expertise
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mt-10" data-stagger>
            {skillSections.map((section, i) => (
              <div
                key={section.title}
                className="glass-card rounded-xl p-5"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-primary">
                    <section.icon size={18} />
                  </div>
                  <h3 className="text-sm font-semibold">{section.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {section.items.map((item) => (
                    <Badge
                      key={item.name}
                      variant="secondary"
                      className="rounded-md border border-border/60 px-2.5 py-1 text-xs font-medium text-foreground/80"
                    >
                      {item.name}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
