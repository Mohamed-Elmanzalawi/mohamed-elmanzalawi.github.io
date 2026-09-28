import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { publications } from "@/lib/site-data";

const title = "Publications — Mohamed Elmanzalawi";
const description =
  "Peer-reviewed publications by Mohamed Elmanzalawi, including DFAST_QC in BMC Bioinformatics.";

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
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
      <Reveal>
        <p className="eyebrow">Research output</p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Publications</h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
          Peer-reviewed papers and journal articles.
        </p>
      </Reveal>

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
              <div className="mt-4 flex flex-wrap gap-2.5">
                {p.links.map((l) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium transition-smooth hover:-translate-y-0.5 hover:border-teal/60 hover:bg-card hover:shadow-soft"
                  >
                    {l.label}
                    <ExternalLink className="size-3.5 text-muted-foreground transition-smooth group-hover:text-teal" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
