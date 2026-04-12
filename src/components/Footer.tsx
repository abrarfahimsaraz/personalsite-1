import { Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  Mail,
  GraduationCap,
  Phone,
  MapPin,
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
  {
    label: "Email",
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    href: personalInfo.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: personalInfo.linkedin,
    icon: Linkedin,
  },
  {
    label: "Google Scholar",
    href: personalInfo.scholar,
    icon: GraduationCap,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 flex items-center gap-3">
          <img src="/newlogo.ico" alt="Abrar Fahim" className="h-9 w-9" />
          <div>
            <span className="text-xl font-bold text-foreground">
              Abrar Fahim<span className="text-primary">.</span>
            </span>
            <p className="text-sm text-muted-foreground">
              {personalInfo.role}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Resources
            </h3>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Connect
            </h3>
            <ul className="space-y-3">
              {connect.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <item.icon size={16} />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail size={16} />
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone size={16} />
                  {personalInfo.phone}
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={16} />
                  {personalInfo.location}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed by {personalInfo.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
