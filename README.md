# mohamed-elmanzalawi.github.io

Personal research portfolio for Mohamed Elmanzalawi — PhD researcher in Genetics
(Bioinformatics) at SOKENDAI / the National Institute of Genetics, Japan.

Live site: https://mohamed-elmanzalawi.github.io

## Stack

- [TanStack Start](https://tanstack.com/start) (React 19, file-based routing, prerendered to static HTML)
- Tailwind CSS v4 + [shadcn/ui](https://ui.shadcn.com) components
- Vite + [Nitro](https://nitro.build) (`github-pages` preset) for the static build
- Deployed to GitHub Pages via GitHub Actions

## Project structure

```
src/routes/     Pages (file-based routing — one file per route)
src/components/ UI primitives (src/components/ui) and site-specific components (src/components/site)
src/lib/        Shared data (site-data.ts) and utilities
pages/          Source content (bios, CV, publications, etc.) the site copy is drawn from
public/         Static assets served as-is (favicon, robots.txt)
```

Page content (About, Projects, Publications, Skills, Contact) is authored directly in the
route files under `src/routes/`, with structured data such as projects, publications,
presentations, scholarships and awards centralized in [`src/lib/site-data.ts`](src/lib/site-data.ts).

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

This prerenders every route to static HTML and outputs the deployable site to
`.output/public`.

## Deployment

Pushing to `master` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the site and publishes `.output/public` to GitHub Pages.

One-time setup: in the repository's **Settings → Pages**, set **Source** to
**GitHub Actions**.
