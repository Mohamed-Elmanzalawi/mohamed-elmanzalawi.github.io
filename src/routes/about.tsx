import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { scholarships, awards, affiliationLinks } from "@/lib/site-data";

const title = "About — Mohamed Elmanzalawi | PhD Researcher in Bioinformatics";
const description =
  "Biography, research interests and career journey of Mohamed Elmanzalawi: clinical pharmacy in Egypt to genomics and bioinformatics research at SOKENDAI and NIG, Japan.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: About,
});

const interests = [
  "Genomics",
  "Bioinformatics",
  "Computational Biology",
  "Human Genetics",
  "Microbial Genomics",
  "Metagenomics",
  "Variant Analysis",
  "Genomic Databases",
  "Data Science",
  "Machine Learning",
  "Biological Data Analysis",
];

const timeline = [
  {
    period: "2014–2019",
    title: "B.Sc. in Clinical Pharmacy — Faculty of Pharmacy, Cairo University, Egypt",
    body: "Undergraduate degree in clinical pharmacy, including early research experience with the Medical Research Society and SCOPS at Cairo University and Ain Shams University.",
    points: [],
  },
  {
    period: "2021–2023",
    title: "Clinical Pharmacy — Egypt",
    body: "Hospital pharmacist and pharmacy roles at Dar El Salam Cancer Hospital and Cura El Nasr Hospital.",
    points: [
      "Oncology",
      "Medication safety",
      "Clinical decision-making",
      "Data-driven pharmacy",
      "Statistical analysis",
      "Healthcare workflows",
    ],
  },
  {
    period: "2021–2023",
    title: "Professional Diploma in Bioinformatics & Research Student — Nile University, Egypt",
    body: "Professional Diploma in Bioinformatics alongside a research student position, transitioning from clinical pharmacy into computational biology.",
    points: [],
  },
  {
    period: "2022",
    title: "Research Intern (NIGINTERN 2022) — National Institute of Genetics, Japan",
    body: "Research internship advised by Dr. Nakamura Yasukazu, working with genomic datasets.",
    points: ["Python", "R", "Phylogenetic analysis", "Clustering", "Genomic data visualization"],
  },
  {
    period: "2023–2025",
    title: "M.Sc. in Genetics (Bioinformatics) — SOKENDAI / National Institute of Genetics",
    body: 'Thesis: "User-oriented bioinformatics pipelines for microbial genome assessment and pathogenic variant analysis", advised by Dr. Nakamura Yasukazu.',
    points: ["DFAST_QC", "SAPP"],
  },
  {
    period: "2026",
    title: "Bioinformatician — Metagen Therapeutics",
    body: "Analysis of clinical and biological datasets.",
    points: [
      "Parkinson's disease metagenomic data",
      "Proteomic data",
      "Organ-age associations",
      "Statistical and machine-learning models",
    ],
  },
  {
    period: "2025–Present",
    title: "PhD in Genetics (Bioinformatics) — SOKENDAI / National Institute of Genetics",
    body: "Current research in computational genomics and biological data analysis, advised by Dr. Nakamura Yasukazu.",
    points: [],
  },
];

const credibility = [
  { k: "MEXT Scholar", v: "Japanese Government scholarship" },
  { k: "16 professional certifications", v: "Bioinformatics, data science & programming" },
  { k: "Research internships", v: "National Institute of Genetics, Japan" },
  { k: "Industry experience", v: "Bioinformatics in a therapeutics company" },
];

function About() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
      <Reveal>
        <p className="eyebrow">Biography</p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">About Me</h1>
      </Reveal>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="space-y-5 text-[15px] leading-relaxed text-muted-foreground">
          <Reveal delay={60}>
            <p>
              I am a PhD candidate in Genetics (Bioinformatics) at The Graduate University for
              Advanced Studies (SOKENDAI), working at the National Institute of Genetics in Japan.
              My research focuses on computational approaches for understanding biological and
              genomic data.
            </p>
          </Reveal>
          <Reveal delay={110}>
            <p>
              My background combines clinical pharmacy with bioinformatics and computational
              biology. Before moving into research, I worked as a hospital pharmacist in Egypt,
              including experience in oncology and clinical pharmacy. This background gave me an
              appreciation for the connection between biological data, medicine, and real-world
              healthcare problems.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p>
              My current work involves high-throughput sequencing analysis, variant detection,
              genomic database development, metagenomics, statistical analysis, and reproducible
              computational workflows. I enjoy building tools and pipelines that transform complex
              biological datasets into reliable and interpretable results.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <aside className="rounded-xl border border-border bg-surface p-6">
            <p className="eyebrow">Affiliation</p>
            <p className="mt-3 font-display text-base font-semibold">
              The Graduate University for Advanced Studies (SOKENDAI)
            </p>
            <p className="mt-1 text-sm text-muted-foreground">PhD in Genetics (Bioinformatics)</p>
            <p className="mt-1 font-mono text-xs text-teal">2025–2028</p>
            <div className="mt-5 border-t border-border pt-5">
              <p className="font-display text-sm font-semibold">
                National Institute of Genetics (NIG)
              </p>
              <p className="mt-1 text-sm text-muted-foreground">Mishima, Japan</p>
            </div>
          </aside>
        </Reveal>
      </div>

      <section className="mt-20">
        <Reveal>
          <p className="eyebrow">Focus areas</p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Research Interests</h2>
        </Reveal>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {interests.map((it, i) => (
            <Reveal as="li" key={it} delay={i * 40}>
              <div className="group flex h-full items-center gap-3 rounded-lg border border-border bg-card px-4 py-3.5 transition-smooth hover:border-teal/60 hover:shadow-soft">
                <span className="size-1.5 shrink-0 rounded-full bg-teal transition-smooth group-hover:scale-150" />
                <span className="text-sm">{it}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="mt-20">
        <Reveal>
          <p className="eyebrow">Timeline</p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Career Journey</h2>
        </Reveal>
        <ol className="mt-10 space-y-0 border-l border-border pl-6 sm:pl-8">
          {timeline.map((t, i) => (
            <Reveal as="li" key={t.period + t.title} delay={i * 70} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[31px] top-1.5 size-2.5 rounded-full border-2 border-background bg-teal sm:-left-[39px]" />
              <p className="font-mono text-xs tracking-widest text-teal">{t.period}</p>
              <h3 className="mt-2 text-lg font-semibold">{t.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
              {t.points.length > 0 && (
                <ul className="mt-3 flex flex-wrap gap-2">
                  {t.points.map((p) => (
                    <li
                      key={p}
                      className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="mt-20">
        <Reveal>
          <p className="eyebrow">Background</p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Credentials & Experience</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {credibility.map((c, i) => (
            <Reveal key={c.k} delay={i * 60}>
              <div className="h-full rounded-xl border border-border bg-card p-5">
                <p className="font-display text-sm font-semibold">{c.k}</p>
                <p className="mt-1.5 text-sm text-muted-foreground">{c.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <Reveal>
          <p className="eyebrow">Recognition</p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Scholarships & Awards</h2>
        </Reveal>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div>
            <p className="font-display text-sm font-semibold">Scholarships</p>
            <div className="mt-4 space-y-3">
              {scholarships.map((s, i) => (
                <Reveal key={s.title} delay={i * 60}>
                  <div className="rounded-xl border border-border bg-card p-5">
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-sm font-semibold">{s.title}</p>
                      <span className="shrink-0 font-mono text-[11px] text-teal">{s.date}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                    {s.url && (
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2.5 inline-flex items-center gap-1.5 text-sm text-primary transition-smooth hover:gap-2.5"
                      >
                        Learn more <ExternalLink className="size-3.5" />
                      </a>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <p className="font-display text-sm font-semibold">Awards</p>
            <div className="mt-4 space-y-3">
              {awards.map((a, i) => (
                <Reveal key={a.title} delay={i * 40}>
                  <div className="rounded-xl border border-border bg-card p-5">
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-sm font-semibold">{a.title}</p>
                      <span className="shrink-0 font-mono text-[11px] text-teal">{a.date}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
                    {a.url && (
                      <a
                        href={a.url}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2.5 inline-flex items-center gap-1.5 text-sm text-primary transition-smooth hover:gap-2.5"
                      >
                        Learn more <ExternalLink className="size-3.5" />
                      </a>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <Reveal>
          <p className="eyebrow">Affiliations</p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Institutes & Labs</h2>
        </Reveal>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {affiliationLinks.map((l, i) => (
            <Reveal as="li" key={l.url} delay={i * 40}>
              <a
                href={l.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-3 rounded-lg border border-border bg-surface px-4 py-3.5 text-sm transition-smooth hover:border-teal/60 hover:shadow-soft"
              >
                {l.label}
                <ExternalLink className="size-3.5 shrink-0 text-muted-foreground transition-smooth group-hover:text-teal" />
              </a>
            </Reveal>
          ))}
        </ul>
      </section>
    </div>
  );
}
