# Shaun Han — Portfolio

**Structured. Versioned. Infrastructure-aware.**

A modern personal portfolio built with engineering discipline and a builder mindset.

This project reflects how I operate across Web3 ecosystems —  
bridging **product thinking**, **growth execution**, and **technical ownership**.

---

## 🌐 Live Site

**GitHub Pages Deployment:**  
https://biblehs.github.io/page/

---

## 🧱 Builder Mindset

Even a personal portfolio should follow production standards.

This repository demonstrates:

- **End-to-end ownership** (development → CI/CD → deployment)
- **Infrastructure awareness** in static environments
- **Version-controlled iteration**
- Clean separation between source code and build artifacts
- Reproducible and deterministic deployment workflows

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
```

Production build output (`dist/`) is generated automatically and is not manually committed.

---

## 🚀 Deployment Architecture

The deployment pipeline follows a structured flow:

**Push → CI → Build → Deploy**

1. Code is pushed to `main`
2. GitHub Actions installs dependencies
3. A clean production build is generated
4. Static assets are deployed automatically

There are:

- No manual uploads  
- No local environment inconsistencies  
- No build artifact pollution in Git history  

The deployment pipeline is fully reproducible.

---

## 📦 Versioning Strategy

Stable releases are marked using **Git tags**.

Example:

```bash
git tag -a v1 -m "v1 release"
git push origin v1
```

Each tagged version represents a structured milestone.

Rollback options:

- `git revert`
- `git reset` to a tagged version

Versioning is part of engineering discipline — not ceremony.

---

## 🧠 Engineering Principles Applied

- Proper static asset path resolution for subdirectory environments
- CI/CD-first deployment workflow
- Explicit base configuration for GitHub Pages
- Clean repository structure
- Minimal dependency surface
- No client-side secrets
- Production builds only

Static hosting implies frontend visibility.  
Security boundaries are respected at the architectural level.

---

## 🌐 Broader Context

This portfolio aligns with my broader work across:

- **Web3 ecosystems**
- **Cross-chain infrastructure**
- **Wallet & DeFi integrations**
- **Growth strategy in emerging markets**
- **Developer enablement**
- **Ecosystem expansion**

The goal is not complexity.  
The goal is **clarity, ownership, and structured iteration**.

---

## 🔮 Future Iterations

Planned improvements include:

- Expanded project case studies
- UI/UX refinement
- Performance optimization
- Optional analytics integration
- Custom domain migration

This repository will continue evolving — version by version.
