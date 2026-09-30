import { Link } from "@tanstack/react-router";
import { LINKEDIN_URL, GITHUB_URL, ORCID_URL, SCHOLAR_URL } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="font-display text-base font-semibold">Mohamed Elmanzalawi</p>
          <p className="mt-1.5 text-sm text-muted-foreground">
            PhD Researcher · Genetics · Bioinformatics · Data Science
          </p>
          <p className="mt-5 font-mono text-xs text-muted-foreground">
            Building computational tools for biological discovery.
          </p>
        </div>

        <nav className="flex flex-col gap-2 text-sm" aria-label="Footer">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-smooth hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-smooth hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href={ORCID_URL}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-smooth hover:text-foreground"
          >
            ORCID
          </a>
          <a
            href={SCHOLAR_URL}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-smooth hover:text-foreground"
          >
            Google Scholar
          </a>
          <Link to="/contact" className="text-muted-foreground transition-smooth hover:text-foreground">
            Contact
          </Link>
        </nav>
      </div>
      <div className="border-t border-border/70">
        <div className="mx-auto max-w-6xl px-5 py-5 font-mono text-[11px] text-muted-foreground sm:px-8">
          © {new Date().getFullYear()} Mohamed Elmanzalawi
        </div>
      </div>
    </footer>
  );
}
