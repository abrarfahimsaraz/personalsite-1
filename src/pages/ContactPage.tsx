import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { personalInfo } from "@/lib/data";
import { Mail, Phone, MapPin, Github, Linkedin, GraduationCap } from "lucide-react";

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
    console.log("Contact form submitted:", form);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-bold sm:text-4xl">Contact</h1>
      <p className="mt-2 text-muted-foreground">Get in touch</p>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        {/* Contact Info */}
        <div className="space-y-4">
          {contactInfo.map((c, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="rounded-md bg-accent p-2"><c.icon size={18} className="text-primary" /></div>
              <div>
                <p className="text-xs text-muted-foreground">{c.label}</p>
                {c.href ? (
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-primary transition-colors">
                    {c.value}
                  </a>
                ) : (
                  <p className="text-sm font-medium">{c.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Send a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
