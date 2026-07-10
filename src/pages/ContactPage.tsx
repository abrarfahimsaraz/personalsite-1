import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { personalInfo } from "@/lib/data";
import { Mail, Phone, MapPin, Github, Linkedin, GraduationCap, Send, Check, ArrowUpRight } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import PageHero from "@/components/PageHero";
import { SEO } from "@/components/SEO";

const contactInfo = [
  { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  { icon: MapPin, label: "Location", value: personalInfo.location },
  { icon: Github, label: "GitHub", value: "github.com/abrarfahimsaraz", href: personalInfo.github },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/abrarfahimsaraz", href: personalInfo.linkedin },
  { icon: GraduationCap, label: "Google Scholar", value: "Google Scholar Profile", href: personalInfo.scholar },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <PageTransition>
      <SEO title="Contact" description="Get in touch with Abrar Fahim — email, phone, GitHub, LinkedIn, and Google Scholar links." path="/contact" />

      <PageHero
        eyebrow="Get in Touch"
        title="Let's Connect"
        subtitle="Open to collaborations, research inquiries, or just a friendly hello — reach out through any channel below."
      />

      <div className="mx-auto max-w-5xl px-6 py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact channels — home-style glass cards, stacked icon/title over value */}
          <div className="grid gap-4 sm:grid-cols-2" data-stagger>
            {contactInfo.map((c, i) => {
              const Wrapper = c.href ? "a" : "div";
              return (
                <Wrapper
                  key={i}
                  {...(c.href ? { href: c.href, target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="glass-card group flex h-full flex-col gap-3 p-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-[hsl(var(--grad-2)/0.15)] text-primary">
                      <c.icon size={19} />
                    </span>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</p>
                    {c.href && (
                      <ArrowUpRight size={15} className="ml-auto flex-shrink-0 text-muted-foreground/50 transition-colors group-hover:text-primary" />
                    )}
                  </div>
                  <p className="break-words text-sm font-medium leading-snug text-foreground/90 transition-colors group-hover:text-primary">
                    {c.value}
                  </p>
                </Wrapper>
              );
            })}
          </div>

          {/* Form */}
          <div
            data-reveal
            className="surface p-6 sm:p-8"
          >
            <h2 className="font-display text-xl font-bold">Send a Message</h2>
            <p className="mt-1 text-sm text-muted-foreground">Opens in your email client, prefilled and ready to send.</p>

            {sent && (
              <div
                role="status"
                aria-live="polite"
                className="mt-5 flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-500"
              >
                <Check size={16} /> Your email client should now be open — thanks for reaching out!
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div>
                <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Name</Label>
                <Input id="name" autoComplete="name" className="mt-1.5 h-11 rounded-xl" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
              </div>
              <div>
                <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</Label>
                <Input id="email" type="email" autoComplete="email" className="mt-1.5 h-11 rounded-xl" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
              </div>
              <div>
                <Label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</Label>
                <Textarea id="message" rows={5} className="mt-1.5 rounded-xl" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
              </div>
              <button type="submit" className="btn-primary w-full">
                <Send size={16} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
