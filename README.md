# Shaun Han — Portfolio

A structured, versioned, infrastructure-aware personal portfolio.

This project is intentionally minimal in UI, yet deliberate in architecture.  
It reflects how I operate across Web3 ecosystems — bridging product thinking, growth execution, infrastructure awareness, and technical ownership.

**Live Site:**  
https://biblehs.github.io/page/

---

## 🧱 Builder Mindset

Even a personal website should follow production standards.

This repository demonstrates:

- End-to-end ownership (development → CI/CD → deployment)
- Infrastructure awareness in static hosting environments
- Version-controlled iteration
- Clean separation between source code and build artifacts
- Deterministic and reproducible deployment workflows

Shipping is not enough — shipping with structure matters.

---

## ⚙️ Tech Stack

- **Vite**
- **React**
- **Tailwind CSS**
- **GitHub Actions (CI/CD)**
- **GitHub Pages (Static Hosting)**

Subdirectory deployment is explicitly configured:

```js
base: "/page/"

Production build output (dist/) is generated automatically and not manually stored in version history.

🚀 Deployment Architecture

The deployment pipeline follows a clear flow:

Push → CI → Build → Deploy

Code is pushed to main

GitHub Actions installs dependencies

A clean production build is generated

Static assets are deployed automatically to GitHub Pages

There are:

No manual uploads

No local build inconsistencies

No artifact pollution in Git history

The deployment pipeline is reproducible and environment-independent.

📦 Versioning Strategy

Stable release states are marked using Git tags.

Example:

git tag -a v1 -m "v1 release"
git push origin v1

Each tagged version represents a structured iteration milestone.

Rollback is possible via:

git revert

or resetting to a tagged release

Versioning is part of engineering discipline — not ceremony.

🧠 Engineering Principles Applied

Proper static asset path resolution for subdirectory environments

CI/CD-first deployment workflow

Explicit base configuration for GitHub Pages

Clean repository structure

Minimal dependency surface

No secrets stored client-side

Production builds only (no development artifacts deployed)

Static hosting implies frontend code visibility.
Security boundaries are respected at architectural level.

🌐 Broader Context

This project aligns with my broader work across:

Web3 ecosystems

Cross-chain infrastructure

Wallet and DeFi integrations

Growth strategy in emerging markets

Developer enablement

Ecosystem expansion

The goal is not complexity.
The goal is clarity, ownership, and structured iteration.

🔮 Future Iterations

Planned improvements include:

Expanded project case studies

UI and performance refinement

Optional analytics integration

Custom domain migration

Structured content evolution

This repository will continue evolving — version by version.
