import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/site/Reveal";
import { presentations } from "@/lib/site-data";

const title = "Presentations & Conferences — Mohamed Elmanzalawi";
const description =
  "Oral talks and poster presentations by Mohamed Elmanzalawi at conferences and progress seminars in Japan and abroad.";

export const Route = createFileRoute("/presentations")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Presentations,
});

function Presentations() {
  const [talkFilter, setTalkFilter] = useState<"All" | "Oral" | "Poster">("All");

  const visibleTalks = presentations.filter((p) => talkFilter === "All" || p.type === talkFilter);

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
      <Reveal>
        <p className="eyebrow">Research output</p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Presentations & Conferences</h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
          Oral talks and poster presentations from conferences and progress seminars in Japan
          and abroad.
        </p>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-9 flex flex-wrap gap-2" role="tablist" aria-label="Filter presentations">
          {(["All", "Oral", "Poster"] as const).map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={talkFilter === f}
              onClick={() => setTalkFilter(f)}
              className={cn(
                "rounded-full border px-3.5 py-1 font-mono text-[11px] tracking-wide transition-smooth",
                talkFilter === f
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-teal hover:text-foreground",
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-8 space-y-3">
        {visibleTalks.map((p, i) => (
          <Reveal as="article" key={`${p.title}-${p.date}`} delay={i * 50}>
            <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5 sm:flex-row sm:items-start sm:justify-between sm:p-6">
              <div>
                <span
                  className={cn(
                    "inline-block rounded-full border px-2.5 py-0.5 font-mono text-[10px] tracking-widest uppercase",
                    p.type === "Oral" ? "border-primary/40 text-primary" : "border-teal/40 text-teal",
                  )}
                >
                  {p.type}
                </span>
                <h2 className="mt-2.5 text-base font-semibold sm:text-lg">{p.title}</h2>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.event}</p>
                <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">
                  {p.location} · {p.date}
                </p>
              </div>
              {p.link && (
                <a
                  href={p.link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex shrink-0 items-center gap-1.5 self-start text-sm text-primary transition-smooth hover:gap-2.5"
                >
                  {p.link.label} <ExternalLink className="size-3.5" />
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
