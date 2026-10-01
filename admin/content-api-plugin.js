import { promises as fs } from "node:fs";
import path from "node:path";

// Dev-server-only API so admin/index.html can load and save content/*.json
// over plain fetch(), without any browser file-system permissions. Only
// active under `vite dev` (configureServer never runs during `vite build`),
// so none of this reaches the deployed site.
const ALLOWED_FILES = new Set([
  "projects.json",
  "publications.json",
  "presentations.json",
  "cv-timeline.json",
  "scholarships.json",
  "awards.json",
  "affiliations.json",
  "affiliation-card.json",
  "about-bio.json",
  "about-interests.json",
  "about-credibility.json",
  "home-intro.json",
  "upcoming-event.json",
  "news.json",
]);

export function contentApiPlugin() {
  return {
    name: "content-api",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url || !req.url.startsWith("/__admin/save/")) return next();

        const file = decodeURIComponent(req.url.slice("/__admin/save/".length));
        if (!ALLOWED_FILES.has(file)) {
          res.statusCode = 400;
          res.end(JSON.stringify({ ok: false, error: "Unknown content file" }));
          return;
        }
        if (req.method !== "POST") {
          res.statusCode = 405;
          res.end(JSON.stringify({ ok: false, error: "Method not allowed" }));
          return;
        }

        let body = "";
        req.on("data", (chunk) => (body += chunk));
        req.on("end", async () => {
          try {
            const data = JSON.parse(body);
            if (typeof data !== "object" || data === null) throw new Error("Expected a JSON array or object");
            const filePath = path.resolve(process.cwd(), "content", file);
            await fs.writeFile(filePath, JSON.stringify(data, null, 2) + "\n", "utf-8");
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ ok: true }));
          } catch (err) {
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ ok: false, error: String(err && err.message ? err.message : err) }));
          }
        });
      });
    },
  };
}
