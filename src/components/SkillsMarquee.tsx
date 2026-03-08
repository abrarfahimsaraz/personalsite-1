import { cn } from "@/lib/utils";

interface SkillsMarqueeProps {
  skills: string[];
  className?: string;
  reverse?: boolean;
}

export default function SkillsMarquee({ skills, className, reverse = false }: SkillsMarqueeProps) {
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className={cn("overflow-hidden py-4", className)}>
      <div
        className="flex gap-4 animate-marquee"
        style={{ animationDirection: reverse ? "reverse" : "normal" }}
      >
        {duplicatedSkills.map((skill, idx) => (
          <div
            key={`${skill}-${idx}`}
            className="flex-shrink-0 px-5 py-2.5 rounded-full border border-border bg-card/50 text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors cursor-default"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
