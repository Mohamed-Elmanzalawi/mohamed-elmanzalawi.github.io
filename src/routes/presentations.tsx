import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/site/Reveal";
import { presentations } from "@/lib/site-data";

const PAGE_SIZE = 5;

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
  const [talkFilter, setTalkFilter] = useState<"All" | "Oral" | "Poster" | "Both">("All");
  const [page, setPage] = useState(1);

  const visibleTalks = presentations.filter((p) => {
    if (talkFilter === "All") return true;
    if (talkFilter === "Both") return p.type.includes("Oral") && p.type.includes("Poster");
    return p.type.includes(talkFilter);
  });
  const totalPages = Math.max(1, Math.ceil(visibleTalks.length / PAGE_SIZE));
  const pageTalks = visibleTalks.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  useEffect(() => {
    setPage(1);
  }, [talkFilter]);

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
          {(["All", "Oral", "Poster", "Both"] as const).map((f) => {
            const count =
              f === "All"
                ? presentations.length
                : f === "Both"
                  ? presentations.filter((p) => p.type.includes("Oral") && p.type.includes("Poster")).length
                  : presentations.filter((p) => p.type.includes(f)).length;
            return (
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
                {f} · {count}
              </button>
            );
          })}
        </div>
      </Reveal>

      <div className="mt-8 space-y-3">
        {pageTalks.map((p, i) => (
          <Reveal as="article" key={`${p.title}-${p.date}`} delay={i * 50}>
            <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5 sm:flex-row sm:items-start sm:justify-between sm:p-6">
              <div>
                <div className="flex flex-wrap gap-1.5">
                  {p.type.map((t) => (
                    <span
                      key={t}
                      className={cn(
                        "inline-block rounded-full border px-2.5 py-0.5 font-mono text-[10px] tracking-widest uppercase",
                        t === "Oral" ? "border-primary/40 text-primary" : "border-teal/40 text-teal",
                      )}
                    >
                      {t}
                    </span>
                  ))}
                </div>
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
                  className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium transition-smooth hover:-translate-y-0.5 hover:border-teal/60 hover:bg-card hover:shadow-soft"
                >
                  {p.link.label}
                  <ExternalLink className="size-3.5 text-muted-foreground transition-smooth group-hover:text-teal" />
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            aria-label="Previous page"
            className="inline-flex size-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-smooth hover:border-teal hover:text-foreground disabled:pointer-events-none disabled:opacity-40"
          >
            <ChevronLeft className="size-4" />
          </button>
          <span className="font-mono text-[11px] tracking-wide text-muted-foreground">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            aria-label="Next page"
            className="inline-flex size-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-smooth hover:border-teal hover:text-foreground disabled:pointer-events-none disabled:opacity-40"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      )}
    </div>
  );
}
