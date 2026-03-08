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
        className={cn(
          "flex gap-4 animate-marquee",
          reverse && "direction-reverse"
        )}
        style={{
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {duplicatedSkills.map((skill, idx) => (
          <div
            key={`${skill}-${idx}`}
            className="flex-shrink-0 px-6 py-3 rounded-full border border-border/50 bg-card/50 text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors cursor-default"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
