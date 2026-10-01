import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { skillGroups, skillSteps } from "@/lib/site-data";

const title = "Skills — Bioinformatics, Data Science & HPC | Mohamed Elmanzalawi";
const description =
  "Core skills across programming, bioinformatics, data science and HPC infrastructure.";

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

function Skills() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
      <Reveal>
        <p className="eyebrow">Capabilities</p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Tools & Superpowers</h1>
      </Reveal>

      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        {skillGroups.map((g, i) => (
          <Reveal key={g.label} delay={i * 80}>
            <div className="h-full rounded-xl border border-border bg-card p-6">
              <h2 className="font-display text-lg font-semibold">{g.label}</h2>
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

      <section className="mt-20">
        <Reveal>
          <p className="eyebrow">Method</p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">How I Work</h2>
        </Reveal>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillSteps.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="relative h-full rounded-xl border border-border bg-card p-6 transition-smooth hover:-translate-y-1 hover:shadow-lift">
                <span className="font-mono text-xs tracking-widest text-teal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
