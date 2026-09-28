import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/site/Reveal";
import { projects, projectFilters } from "@/lib/site-data";

const title = "Projects — Genomics Pipelines & Bioinformatics Tools | Mohamed Elmanzalawi";
const description =
  "Case studies: DFAST_QC genome quality assessment, SAPP variant pipeline, a polar fungi genome database, Parkinson's metagenomics and proteomic organ-age analysis.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Projects,
});

function Workflow({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2 rounded-lg border border-dashed border-border bg-surface px-4 py-3.5">
      {steps.map((s, i) => (
        <span key={s} className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
          <span className="rounded border border-border bg-card px-2 py-1 text-foreground">{s}</span>
          {i < steps.length - 1 && <span className="text-teal">→</span>}
        </span>
      ))}
    </div>
  );
}

function GenomeCompare() {
  const genomes = ["Genome A", "Genome B", "Genome C"];
  const shared = [1, 3, 4, 7];
  return (
    <div className="rounded-lg border border-dashed border-border bg-surface p-4">
      <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
        Shared feature comparison
      </p>
      <div className="mt-3 space-y-2.5">
        {genomes.map((g) => (
          <div key={g} className="flex items-center gap-3">
            <span className="w-20 shrink-0 font-mono text-[11px] text-muted-foreground">{g}</span>
            <div className="flex flex-1 gap-1">
              {Array.from({ length: 10 }, (_, i) => (
                <span
                  key={i}
                  className={cn(
                    "h-3 flex-1 rounded-[2px]",
                    shared.includes(i) ? "bg-teal" : "bg-border",
                  )}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 font-mono text-[10px] text-muted-foreground">
        <span className="mr-1 inline-block size-2 translate-y-[1px] rounded-[2px] bg-teal" />
        shared genomic features
      </p>
    </div>
  );
}

function AbundancePlot() {
  const bars = [0.82, -0.34, 0.55, -0.71, 0.28, -0.46, 0.64, -0.19, 0.4, -0.58];
  return (
    <div className="rounded-lg border border-dashed border-border bg-surface p-4">
      <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
        Conceptual differential abundance
      </p>
      <div className="mt-4 flex h-24 items-center gap-1.5">
        {bars.map((b, i) => (
          <div key={i} className="flex h-full flex-1 flex-col justify-center">
            <div className="flex h-1/2 items-end">
              {b > 0 && <span className="w-full rounded-t-sm bg-primary" style={{ height: `${b * 100}%` }} />}
            </div>
            <div className="flex h-1/2 items-start">
              {b < 0 && <span className="w-full rounded-b-sm bg-teal" style={{ height: `${-b * 100}%` }} />}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-2 font-mono text-[10px] text-muted-foreground">illustrative, not results</p>
    </div>
  );
}

function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const [openId, setOpenId] = useState<string | null>(projects[0]?.id ?? null);

  const visible = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
      <Reveal>
        <p className="eyebrow">Case studies</p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Projects</h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
          Bioinformatics tools, genomic databases and data-science analyses — each described by the
          problem, the computational approach and why it matters.
        </p>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-9 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
          {projectFilters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full border px-4 py-1.5 font-mono text-[11px] tracking-wide transition-smooth",
                filter === f
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-teal hover:text-foreground",
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-10 space-y-4">
        {visible.map((p, i) => {
          const open = openId === p.id;
          return (
            <Reveal as="article" key={p.id} delay={i * 60}>
              <div
                id={p.id}
                className={cn(
                  "scroll-mt-24 rounded-xl border bg-card transition-smooth",
                  open ? "border-teal/60 shadow-lift" : "border-border hover:border-teal/40 hover:shadow-soft",
                )}
              >
                <button
                  onClick={() => setOpenId(open ? null : p.id)}
                  aria-expanded={open}
                  className="flex w-full items-start gap-5 p-6 text-left sm:p-8"
                >
                  <span className="mt-1 font-mono text-xs text-teal">{p.index}</span>
                  <span className="flex-1">
                    <span className="block font-display text-xl font-semibold sm:text-2xl">
                      {p.name}
                    </span>
                    <span className="mt-1 block text-sm text-foreground/75">{p.title}</span>
                    <span className="mt-2 block font-mono text-[11px] text-muted-foreground">
                      {p.categoryLabel}
                    </span>
                    <span className="mt-4 block max-w-3xl text-sm leading-relaxed text-muted-foreground">
                      {p.summary}
                    </span>
                  </span>
                  <ChevronDown
                    className={cn(
                      "mt-1 size-5 shrink-0 text-muted-foreground transition-transform",
                      open && "rotate-180",
                    )}
                  />
                </button>

                {open && (
                  <div className="border-t border-border px-6 pb-8 pt-6 sm:px-8">
                    {p.context && (
                      <p className="mb-6 font-mono text-[11px] text-teal">{p.context}</p>
                    )}
                    <div className="grid gap-6 md:grid-cols-3">
                      {[
                        ["Problem", p.problem],
                        ["Approach", p.approach],
                        ["Outcome & significance", p.outcome],
                      ].map(([h, body]) => (
                        <div key={h}>
                          <p className="eyebrow">{h}</p>
                          <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                            {body}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-7 space-y-4">
                      {p.workflow && <Workflow steps={p.workflow} />}
                      {p.id === "polar-fungi" && <GenomeCompare />}
                      {p.id === "parkinsons-metagenomics" && <AbundancePlot />}
                    </div>

                    <div className="mt-7 grid gap-6 sm:grid-cols-2">
                      <div>
                        <p className="eyebrow">Key capabilities</p>
                        <ul className="mt-3 space-y-2">
                          {p.capabilities.map((c) => (
                            <li key={c} className="flex items-center gap-3 text-sm">
                              <span className="h-px w-4 bg-teal" />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="eyebrow">Technology</p>
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {p.tech.map((t) => (
                            <li
                              key={t}
                              className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-[11px] text-muted-foreground"
                            >
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {p.link && (
                      <a
                        href={p.link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-7 inline-flex items-center gap-2 text-sm text-primary transition-smooth hover:gap-3"
                      >
                        {p.link.label} <ExternalLink className="size-3.5" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
