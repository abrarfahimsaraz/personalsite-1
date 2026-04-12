import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { personalInfo } from "@/lib/data";
import { Mail, Phone, MapPin, Github, Linkedin, GraduationCap, Send } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:abrarfahim8@iut-dhaka.edu?subject=${subject}&body=${body}`;
  };

  return (
    <PageTransition>
      <SEO title="Contact" description="Get in touch with Abrar Fahim — email, phone, GitHub, LinkedIn, and Google Scholar links." path="/contact" />

      {/* Hero band */}
      <section className="bg-accent/50 pt-28 pb-12">
        <div className="max-w-5xl mx-auto px-6">
          <span className="section-label">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            Let's Connect
          </h1>
          <p className="text-muted-foreground mt-3 max-w-xl">
            Feel free to reach out for collaborations, research inquiries, or just to say hello
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            {contactInfo.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center gap-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary flex-shrink-0">
                  <c.icon size={20} />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-primary transition-colors">
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium">{c.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-6"
          >
            <h2 className="text-lg font-semibold mb-5">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-xs font-medium uppercase tracking-wider">Name</Label>
                <Input id="name" className="mt-1.5 rounded-lg" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
              </div>
              <div>
                <Label htmlFor="email" className="text-xs font-medium uppercase tracking-wider">Email</Label>
                <Input id="email" type="email" className="mt-1.5 rounded-lg" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
              </div>
              <div>
                <Label htmlFor="message" className="text-xs font-medium uppercase tracking-wider">Message</Label>
                <Textarea id="message" rows={4} className="mt-1.5 rounded-lg" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                <Send size={16} /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
