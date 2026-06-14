import { Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  Mail,
  GraduationCap,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { personalInfo } from "@/lib/data";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Research", path: "/research" },
  { label: "Experience", path: "/experience" },
  { label: "Projects", path: "/projects" },
];

const resources = [
  { label: "Blog", path: "/blog" },
  { label: "Education", path: "/education" },
  { label: "Certifications", path: "/certifications" },
  { label: "Trainings", path: "/trainings" },
  { label: "Miscellaneous", path: "/miscellaneous" },
  { label: "Contact", path: "/contact" },
];

const connect = [
  { label: "Email", href: `mailto:${personalInfo.email}`, icon: Mail },
  { label: "GitHub", href: personalInfo.github, icon: Github },
  { label: "LinkedIn", href: personalInfo.linkedin, icon: Linkedin },
  { label: "Google Scholar", href: personalInfo.scholar, icon: GraduationCap },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/60 bg-card/50 backdrop-blur-2xl">
      {/* Top gradient hairline */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4">
            <Link to="/" className="flex items-center gap-3">
              <img src="/newlogo.ico" alt="Abrar Fahim" className="h-9 w-9 rounded-lg object-contain ring-1 ring-border" />
              <span className="font-display text-xl font-bold text-foreground">
                Abrar Fahim<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {personalInfo.role} focused on deep learning, medical imaging, and power-systems optimization.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {connect.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                >
                  <item.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-2">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground">Explore</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-3">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground">More</h3>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-3">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground">Get in touch</h3>
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-primary">
                  <Mail size={15} className="flex-shrink-0" />
                  <span className="break-all">{personalInfo.email}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${personalInfo.phone}`} className="inline-flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-primary">
                  <Phone size={15} className="flex-shrink-0" />
                  {personalInfo.phone}
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-2.5 text-sm text-muted-foreground">
                  <MapPin size={15} className="flex-shrink-0" />
                  {personalInfo.location}
                </span>
              </li>
            </ul>
            <a
              href={personalInfo.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all hover:gap-2"
            >
              Google Scholar <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-sm text-muted-foreground sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p>Designed &amp; built by {personalInfo.name}</p>
        </div>
      </div>
    </footer>
  );
}
