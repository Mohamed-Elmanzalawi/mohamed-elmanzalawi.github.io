import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/site/Reveal";
import { LINKEDIN_URL, GITHUB_URL } from "@/lib/site-data";

const title = "Contact — Mohamed Elmanzalawi | Bioinformatics Collaboration";
const description =
  "Get in touch about bioinformatics, computational biology, genomics, data science or research collaboration with Mohamed Elmanzalawi.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Contact,
});

const topics = [
  "Research Collaboration",
  "Bioinformatics Projects",
  "Genomics & Data Analysis",
  "Biotechnology / Pharmaceutical Opportunities",
  "Internships & Research Opportunities",
  "Academic Collaboration",
];

const WEB3FORMS_ACCESS_KEY = import.meta.env["VITE_WEB3FORMS_ACCESS_KEY"] as string | undefined;

function Contact() {
  const [sending, setSending] = useState(false);

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
      <Reveal>
        <p className="eyebrow">Contact</p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Let's Work With Biological Data</h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
          Interested in bioinformatics, computational biology, genomics, data science, or
          collaborative research? I'd be happy to connect.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.85fr]">
        <Reveal delay={60}>
          <form
            className="rounded-xl border border-border bg-card p-6 sm:p-8"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;

              if (!WEB3FORMS_ACCESS_KEY) {
                toast.error("Contact form isn't set up yet", {
                  description: "Missing VITE_WEB3FORMS_ACCESS_KEY — reach out on LinkedIn in the meantime.",
                });
                return;
              }

              setSending(true);
              try {
                const res = await fetch("https://api.web3forms.com/submit", {
                  method: "POST",
                  headers: { "Content-Type": "application/json", Accept: "application/json" },
                  body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    ...Object.fromEntries(new FormData(form)),
                    subject: `Portfolio contact: ${(new FormData(form).get("subject") as string) ?? ""}`,
                  }),
                });
                const result = (await res.json()) as { success: boolean; message?: string };
                if (result.success) {
                  form.reset();
                  toast.success("Message sent", {
                    description: "Thanks for reaching out — I'll get back to you soon.",
                  });
                } else {
                  throw new Error(result.message ?? "Submission failed");
                }
              } catch {
                toast.error("Couldn't send your message", {
                  description: "Something went wrong — please email me directly or reach out on LinkedIn.",
                });
              } finally {
                setSending(false);
              }
            }}
          >
            {/* Honeypot: bots fill this hidden field, humans never see it. */}
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="you@lab.org" />
              </div>
            </div>
            <div className="mt-5 space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" name="subject" required placeholder="What is this about?" />
            </div>
            <div className="mt-5 space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" required rows={6} placeholder="A few details…" />
            </div>
            <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={sending}>
              {sending ? "Sending…" : "Send Message"}
            </Button>
          </form>
        </Reveal>

        <div className="space-y-4">
          <Reveal delay={100}>
            <div className="rounded-xl border border-border bg-surface p-6">
              <p className="eyebrow">Direct</p>
              <div className="mt-4 space-y-2.5">
                <a
                  href="#contact-form"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("name")?.focus();
                  }}
                  className="flex items-center gap-3 text-sm transition-smooth hover:text-primary"
                >
                  <Mail className="size-4 text-teal" /> Email Me
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-sm transition-smooth hover:text-primary"
                >
                  <Linkedin className="size-4 text-teal" /> Connect on LinkedIn
                </a>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-sm transition-smooth hover:text-primary"
                >
                  <Github className="size-4 text-teal" /> View GitHub
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="rounded-xl border border-border bg-card p-6">
              <p className="eyebrow">Open to</p>
              <ul className="mt-4 grid gap-2.5">
                {topics.map((t) => (
                  <li
                    key={t}
                    className="flex items-start gap-3 rounded-lg border border-border/70 px-3.5 py-2.5 text-sm transition-smooth hover:border-teal/60"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-teal" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
