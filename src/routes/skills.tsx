import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";

const title = "Skills — Bioinformatics, Data Science & HPC | Mohamed Elmanzalawi";
const description =
  "Core skills across programming, bioinformatics, data science and HPC infrastructure, plus the tools used in genomics and variant analysis projects.";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Skills,
});

const groups = [
  { label: "Programming", items: ["Python", "R", "Bash", "SQL"] },
  {
    label: "Bioinformatics",
    items: [
      "Next-generation sequencing",
      "Variant analysis",
      "Genomic annotation",
      "Genome quality assessment",
      "Microbial genomics",
      "Human genetics",
      "Metagenomics",
      "Comparative genomics",
      "Phylogenetics",
    ],
  },
  {
    label: "Data Science",
    items: [
      "Statistical analysis",
      "Machine learning",
      "Data visualization",
      "High-dimensional biological data",
      "Predictive modeling",
    ],
  },
  {
    label: "Infrastructure",
    items: ["HPC", "Slurm", "Sun Grid Engine (SGE)", "Linux", "Reproducible workflows"],
  },
];

const tools = [
  "GATK",
  "FreeBayes",
  "ANNOVAR",
  "SnpEff",
  "Fastp",
  "Parabricks",
  "Scikit-learn",
  "Keras",
  "PySpark",
];

const steps = [
  {
    n: "01",
    t: "Understand the biological question",
    d: "Translate biological problems into computationally tractable questions.",
  },
  {
    n: "02",
    t: "Build the workflow",
    d: "Design reproducible pipelines and analysis strategies.",
  },
  {
    n: "03",
    t: "Analyze the data",
    d: "Apply statistical, computational, and machine-learning approaches.",
  },
  {
    n: "04",
    t: "Communicate the result",
    d: "Turn complex biological datasets into interpretable scientific insights.",
  },
];

function Skills() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
      <Reveal>
        <p className="eyebrow">Capabilities</p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Tools & Superpowers</h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
          Organised by scientific workflow rather than as one long list — core skills first, then
          the tools and frameworks used across specific projects.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        {groups.map((g, i) => (
          <Reveal key={g.label} delay={i * 80}>
            <div className="h-full rounded-xl border border-border bg-card p-6">
              <div className="flex items-baseline justify-between">
                <h2 className="font-display text-lg font-semibold">{g.label}</h2>
                <span className="font-mono text-[11px] text-muted-foreground">
                  {String(g.items.length).padStart(2, "0")}
                </span>
              </div>
              <ul className="mt-5 space-y-2.5">
                {g.items.map((it) => (
                  <li key={it} className="flex items-center gap-3 text-sm">
                    <span className="h-px w-5 bg-teal" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <section className="mt-16">
        <Reveal>
          <p className="eyebrow">Applied in projects</p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Tools & Frameworks</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            Tools used within research projects and pipelines. Listed as project experience rather
            than as expert-level proficiency.
          </p>
        </Reveal>
        <ul className="mt-7 flex flex-wrap gap-2.5">
          {tools.map((t, i) => (
            <Reveal as="li" key={t} delay={i * 35}>
              <span className="inline-block rounded-md border border-dashed border-border bg-surface px-3.5 py-2 font-mono text-xs text-muted-foreground transition-smooth hover:border-teal hover:text-foreground">
                {t}
              </span>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="mt-20">
        <Reveal>
          <p className="eyebrow">Method</p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">How I Work</h2>
        </Reveal>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <div className="relative h-full rounded-xl border border-border bg-card p-6 transition-smooth hover:-translate-y-1 hover:shadow-lift">
                <span className="font-mono text-xs tracking-widest text-teal">{s.n}</span>
                <h3 className="mt-3 font-display text-base font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
