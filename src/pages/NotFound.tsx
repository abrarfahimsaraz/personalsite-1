import { Link } from "react-router-dom";
import { ArrowLeft, Home, FileText, FolderOpen, Mail, Compass } from "lucide-react";
import { SEO } from "@/components/SEO";

const quickLinks = [
  { to: "/", label: "Home", icon: Home, description: "Landing page with stats and featured research" },
  { to: "/research", label: "Research", icon: FileText, description: "Published and in-progress papers" },
  { to: "/projects", label: "Projects", icon: FolderOpen, description: "Engineering and AI projects" },
  { to: "/contact", label: "Contact", icon: Mail, description: "Get in touch" },
];

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist on Abrar Fahim's portfolio."
        path="/404"
        noindex
      />
      <section className="min-h-[80vh] flex items-center pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
            <Compass className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Error 404 — Page Not Found</span>
          </div>

          <h1 className="text-6xl sm:text-8xl font-bold tracking-tight text-primary">404</h1>

          <h2 className="mt-4 text-2xl sm:text-3xl font-semibold">
            This page took a wrong turn
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
            The page you are looking for doesn't exist or may have been moved.
            Here are a few places you might want to visit instead.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/" className="btn-primary">
              <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Return Home
            </Link>
            <Link to="/contact" className="btn-outline">
              <Mail className="w-4 h-4" aria-hidden="true" /> Report a broken link
            </Link>
          </div>

          <div className="mt-16">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-5">
              Popular destinations
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left">
              {quickLinks.map(({ to, label, icon: Icon, description }) => (
                <Link
                  key={to}
                  to={to}
                  className="glass-card p-4 group transition-all hover:border-primary/40"
                  aria-label={`${label} — ${description}`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <Icon className="w-4 h-4 text-primary" aria-hidden="true" />
                    <span className="font-semibold group-hover:text-primary transition-colors">
                      {label}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
