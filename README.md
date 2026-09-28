# mohamed-elmanzalawi.github.io

Personal research portfolio for Mohamed Elmanzalawi — PhD researcher in Genetics
(Bioinformatics) at SOKENDAI / the National Institute of Genetics, Japan.

Live site: https://mohamed-elmanzalawi.github.io

## Stack

- React 19 + [TanStack Router](https://tanstack.com/router) (file-based routing), as a plain
  client-side single-page app — no server, no SSR
- Tailwind CSS v4 + [shadcn/ui](https://ui.shadcn.com) components
- Vite for the build
- Deployed to GitHub Pages via GitHub Actions

## Project structure

```
src/routes/     Pages (file-based routing — one file per route)
src/components/ UI primitives (src/components/ui) and site-specific components (src/components/site)
src/lib/        Shared data (site-data.ts) and utilities
content/        Editable data: publications, presentations, CV timeline, scholarships, awards
admin/          Local-only content editor (see "Content editor" below) — not part of the deployed site
pages/          Original source notes the site copy was drawn from
public/         Static assets served as-is (favicon, robots.txt)
```

Page content (About, Projects, Publications, Skills, Contact) is authored directly in the
route files under `src/routes/`. The list-based content — publications, presentations, CV
timeline entries, scholarships and awards — lives in `content/*.json` and is imported into
[`src/lib/site-data.ts`](src/lib/site-data.ts). Projects and skills are still defined directly
in `site-data.ts`.

## Content editor

`admin/index.html` is a local, code-free editor for the content in `content/*.json`: add,
edit, delete and reorder publications, presentations & conferences, CV timeline entries,
scholarships and awards through forms.

To use it:

1. `npm run dev`
2. Open `http://localhost:8080/admin/` in any browser. It loads everything currently in
   `content/*.json` immediately — no upload step, no folder picker.
3. Make your changes, then click **Save all changes** — this writes straight to the JSON
   files on disk.
4. Review the diff (`git diff`) and commit + push as usual to publish.

Under the hood, `admin/content-api-plugin.js` adds a tiny API to the dev server (only while
`npm run dev` is running) that the editor page talks to over plain `fetch()` to read and write
`content/*.json`. None of this — the editor page, the API, or the plugin — is part of the
production build: `vite build` never touches anything under `admin/`, so it isn't bundled,
uploaded, or reachable on the deployed site.

## Local development

Requires Node.js 22+.

```bash
npm install
cp .env.example .env   # add your Web3Forms access key (see below)
npm run dev
```

The dev server runs at `http://localhost:8080`.

## Contact form

The contact form submits directly to [Web3Forms](https://web3forms.com) (no backend
needed — fits a static GitHub Pages site):

1. Go to https://web3forms.com and enter the email address that should receive
   submissions (e.g. `mohamed.elmanzalawi@nig.ac.jp`) to get a free access key.
2. Locally: put it in `.env` as `VITE_WEB3FORMS_ACCESS_KEY=...` (see `.env.example`).
3. For the deployed site: add it as a repository **Variable** (not a secret — Web3Forms
   access keys are safe to expose client-side) named `WEB3FORMS_ACCESS_KEY` under
   **Settings → Secrets and variables → Actions → Variables**. The deploy workflow
   passes it to the build as `VITE_WEB3FORMS_ACCESS_KEY`.

Without a key set, the form shows an error toast instead of silently failing.

## Build

```bash
npm run build
```

This produces a plain static build (HTML/CSS/JS, no server) in `dist/`. Since the app is a
client-side SPA, every URL is served the same `index.html` and TanStack Router takes over
routing in the browser.

## Deployment

Pushing to `master` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the site and publishes `dist/` to GitHub Pages. Since this is a client-side SPA,
the workflow also copies `index.html` to `404.html` in the build output, so GitHub Pages serves
the app (which then renders the right route client-side) instead of a real 404 when someone
opens a direct link like `/publications`.

One-time setup: in the repository's **Settings → Pages**, set **Source** to
**GitHub Actions**.
