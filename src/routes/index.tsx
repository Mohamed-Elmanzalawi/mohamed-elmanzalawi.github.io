import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, ExternalLink, Github, GraduationCap, IdCard, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { InsightPipeline } from "@/components/site/InsightPipeline";
import { DestinationGlobe } from "@/components/site/DestinationGlobe";
import { LINKEDIN_URL, GITHUB_URL, ORCID_URL, SCHOLAR_URL, projects, homeIntro, upcomingEvent } from "@/lib/site-data";

const title = "Mohamed Elmanzalawi — Bioinformatics, Genetics & Data Science";
const description =
  "PhD researcher in Genetics (Bioinformatics) at SOKENDAI and the National Institute of Genetics, Japan. Computational pipelines, genomic data analysis and bioinformatics tools.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Home,
});

const stats = [
  { k: "PhD Researcher", v: "Genetics & Bioinformatics" },
  { k: "SOKENDAI / NIG", v: "Japan" },
  { k: "Bioinformatics", v: "Genomics & biological data" },
  { k: "Data Science", v: "Python, R & machine learning" },
];

function Home() {
  return (
    <div>
      {upcomingEvent.visible && (
        <div className="mx-auto max-w-6xl px-5 pt-6 sm:px-8">
          <Reveal>
            <div className="flex flex-col gap-5 rounded-xl border border-teal/40 bg-teal/[0.08] px-6 py-5 shadow-soft sm:flex-row sm:items-center sm:px-8 sm:py-6">
              <div className="flex items-center gap-5">
                <DestinationGlobe country={upcomingEvent.country} className="size-32 shrink-0 sm:size-36 md:size-40" />
                {/* on mobile the badge + title sit next to the globe; the rest follows full-width below */}
                <div className="min-w-0 flex-1 sm:hidden">
                  <p className="flex items-center gap-1.5 font-mono text-sm font-semibold tracking-widest text-teal uppercase">
                    <CalendarDays className="size-4" />
                    Upcoming · {upcomingEvent.type}
                  </p>
                  <p className="mt-2 text-xl font-semibold leading-snug">{upcomingEvent.title}</p>
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <p className="hidden items-center gap-1.5 font-mono text-sm font-semibold tracking-widest text-teal uppercase sm:flex">
                  <CalendarDays className="size-4" />
                  Upcoming · {upcomingEvent.type}
                </p>
                <p className="hidden text-2xl font-semibold leading-snug sm:mt-2 sm:block">{upcomingEvent.title}</p>
                {upcomingEvent.event && (
                  <p className="mt-1.5 text-lg text-foreground/80">{upcomingEvent.event}</p>
                )}
                {(upcomingEvent.location || upcomingEvent.date) && (
                  <p className="mt-1.5 font-mono text-sm text-muted-foreground">
                    {upcomingEvent.location}
                    {upcomingEvent.location && upcomingEvent.date && " · "}
                    {upcomingEvent.date}
                  </p>
                )}
              </div>
              {upcomingEvent.link && (
                <a
                  href={upcomingEvent.link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-lg font-semibold text-primary-foreground shadow-soft transition-smooth hover:-translate-y-0.5 hover:shadow-lift sm:w-auto"
                >
                  {upcomingEvent.link.label}
                  <ExternalLink className="size-5" />
                </a>
              )}
            </div>
          </Reveal>
        </div>
      )}

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 lg:pb-28 lg:pt-24">
          <Reveal>
            <img
              src="/profile.png"
              alt="Mohamed Elmanzalawi"
              className="size-40 rounded-full border border-border object-cover shadow-soft sm:size-48 lg:size-56"
              width={224}
              height={224}
            />
          </Reveal>
          <Reveal delay={40}>
            <p className="eyebrow mt-5">{homeIntro.eyebrow}</p>
          </Reveal>

          <div className="mt-5 grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Reveal delay={80}>
                <h1 className="text-4xl leading-[1.08] font-semibold sm:text-5xl lg:text-6xl">
                  Bioinformatics <span className="text-muted-foreground">×</span> Genetics{" "}
                  <span className="text-muted-foreground">×</span>{" "}
                  <span className="text-primary">Data Science</span>
                </h1>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-5 max-w-xl text-lg text-foreground/80">{homeIntro.tagline}</p>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                  {homeIntro.paragraph}
                </p>
              </Reveal>
              <Reveal delay={260}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button asChild size="lg">
                    <Link to="/projects">
                      Explore My Work <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/contact">Get in Touch</Link>
                  </Button>
                </div>
              </Reveal>
              <Reveal delay={320}>
                <div className="mt-8 flex items-center gap-4 text-muted-foreground">
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="transition-smooth hover:text-foreground"
                  >
                    <Linkedin className="size-5" />
                  </a>
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="transition-smooth hover:text-foreground"
                  >
                    <Github className="size-5" />
                  </a>
                  <a
                    href={ORCID_URL}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="ORCID profile"
                    className="transition-smooth hover:text-foreground"
                  >
                    <IdCard className="size-5" />
                  </a>
                  <a
                    href={SCHOLAR_URL}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Google Scholar profile"
                    className="transition-smooth hover:text-foreground"
                  >
                    <GraduationCap className="size-5" />
                  </a>
                  <Link to="/contact" aria-label="Contact" className="transition-smooth hover:text-foreground">
                    <Mail className="size-5" />
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={160} className="relative">
              <div className="rounded-xl border border-border bg-card/70 p-5 shadow-soft backdrop-blur-sm">
                <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                  Biological data → insight
                </p>
                <InsightPipeline className="mt-4 w-full" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-px px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.k} delay={i * 70} className="py-8 lg:px-6 lg:first:pl-0">
              <p className="font-display text-sm font-semibold">{s.k}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.v}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <p className="eyebrow">Selected work</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Pipelines, databases and analyses
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {projects.slice(0, 3).map((p, i) => (
            <Reveal key={p.id} delay={i * 90}>
              <Link
                to="/projects"
                hash={p.id}
                className="group block h-full rounded-xl border border-border bg-card p-6 transition-smooth hover:-translate-y-1 hover:border-teal/60 hover:shadow-lift"
              >
                <span className="font-mono text-[11px] text-teal">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-semibold">{p.name}</h3>
                <p className="mt-1 font-mono text-[11px] text-muted-foreground">{p.categoryLabel}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-primary">
                  Case study{" "}
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120} className="mt-10">
          <Button asChild variant="outline">
            <Link to="/projects">
              All projects <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </section>
    </div>
  );
}
