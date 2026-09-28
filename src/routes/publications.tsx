import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/site/Reveal";
import { publications, presentations } from "@/lib/site-data";

const title = "Publications & Presentations — Mohamed Elmanzalawi";
const description =
  "Peer-reviewed publications, oral talks and poster presentations by Mohamed Elmanzalawi, including DFAST_QC in BMC Bioinformatics and conference presentations across Japan and China.";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Publications,
});

function AuthorList({ authors, highlight }: { authors: string; highlight: string }) {
  const parts = authors.split(highlight);
  return (
    <p className="text-sm leading-relaxed text-muted-foreground">
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && <span className="font-semibold text-foreground">{highlight}</span>}
        </span>
      ))}
    </p>
  );
}

function Publications() {
  const [tab, setTab] = useState<"papers" | "talks">("papers");
  const [talkFilter, setTalkFilter] = useState<"All" | "Oral" | "Poster">("All");

  const visibleTalks = presentations.filter((p) => talkFilter === "All" || p.type === talkFilter);

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
      <Reveal>
        <p className="eyebrow">Research output</p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Publications & Presentations</h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
          Peer-reviewed papers, oral talks and poster presentations from conferences and
          progress seminars in Japan and abroad.
        </p>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-9 flex flex-wrap gap-2" role="tablist" aria-label="Section">
          {(
            [
              ["papers", "Publications"],
              ["talks", "Presentations"],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              role="tab"
              aria-selected={tab === key}
              onClick={() => setTab(key)}
              className={cn(
                "rounded-full border px-4 py-1.5 font-mono text-[11px] tracking-wide transition-smooth",
                tab === key
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-teal hover:text-foreground",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </Reveal>

      {tab === "papers" && (
        <div className="mt-10 space-y-4">
          {publications.map((p, i) => (
            <Reveal as="article" key={p.title} delay={i * 70}>
              <div className="rounded-xl border border-border bg-card p-6 transition-smooth hover:border-teal/40 hover:shadow-soft sm:p-8">
                <p className="font-mono text-xs text-teal">{p.year}</p>
                <h2 className="mt-2 text-lg font-semibold sm:text-xl">{p.title}</h2>
                <div className="mt-2.5">
                  <AuthorList authors={p.authors} highlight={p.highlight} />
                </div>
                <p className="mt-2 text-sm italic text-muted-foreground">{p.venue}</p>
                <div className="mt-4 flex flex-wrap gap-4">
                  {p.links.map((l) => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-primary transition-smooth hover:gap-2.5"
                    >
                      {l.label} <ExternalLink className="size-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      )}

      {tab === "talks" && (
        <div className="mt-10">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter presentations">
            {(["All", "Oral", "Poster"] as const).map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={talkFilter === f}
                onClick={() => setTalkFilter(f)}
                className={cn(
                  "rounded-full border px-3.5 py-1 font-mono text-[11px] tracking-wide transition-smooth",
                  talkFilter === f
                    ? "border-teal bg-surface text-foreground"
                    : "border-border text-muted-foreground hover:border-teal hover:text-foreground",
                )}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-6 space-y-3">
            {visibleTalks.map((p, i) => (
              <Reveal as="article" key={`${p.title}-${p.date}`} delay={i * 50}>
                <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5 sm:flex-row sm:items-start sm:justify-between sm:p-6">
                  <div>
                    <span
                      className={cn(
                        "inline-block rounded-full border px-2.5 py-0.5 font-mono text-[10px] tracking-widest uppercase",
                        p.type === "Oral"
                          ? "border-primary/40 text-primary"
                          : "border-teal/40 text-teal",
                      )}
                    >
                      {p.type}
                    </span>
                    <h3 className="mt-2.5 text-base font-semibold sm:text-lg">{p.title}</h3>
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
      )}
    </div>
  );
}
