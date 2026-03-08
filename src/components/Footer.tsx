import { Github, Linkedin, Mail, GraduationCap } from "lucide-react";
import { personalInfo } from "@/lib/data";

const socials = [
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
  { icon: Github, href: personalInfo.github, label: "GitHub" },
  { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
  { icon: GraduationCap, href: personalInfo.scholar, label: "Google Scholar" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-lg font-medium text-muted-foreground link-underline hover:text-foreground transition-colors"
            >
              <s.icon size={24} className="group-hover:text-primary transition-colors" />
              <span>{s.label}</span>
            </a>
          ))}
        </div>
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
