# Portfolio Website

A personal portfolio built with React and Vite for JyunRu Huang.

## What Changed In This Version

- Refreshed visual system with a modern color palette, custom typography, and layered backgrounds
- Improved navigation with active-section highlighting, mobile drawer, and scroll progress indicator
- Added interaction upgrades: section reveal animations, project category filters, expandable experience cards, and back-to-top button
- Improved contact section with quick actions and copy-email workflow
- Added `withBase()` utility so local assets resolve correctly under GitHub Pages base paths
- Updated metadata in `index.html` for better SEO and social sharing

## Tech Stack

- React 18
- Vite 5
- CSS3

## Local Development

### Prerequisites

- Node.js 18+
- npm

### Install Dependencies

```bash
npm install
```

### Start the Dev Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Build for Production

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

## Content Updates

Edit content directly in these files:

- `src/components/Hero.jsx`
- `src/components/About.jsx`
- `src/components/Projects.jsx`
- `src/components/Experience.jsx`
- `src/components/Education.jsx`
- `src/components/CaseCompetition.jsx`
- `src/components/Skills.jsx`
- `src/components/Certificates.jsx`
- `src/components/Contact.jsx`

For local assets (PDFs, images, logos), use `withBase()` from `src/utils/assetPath.js`.

## Deployment Notes

- Public assets are served from `docs/` via `vite.config.js` (`publicDir: 'docs'`).
- `BASE_PATH` support is already configured for project pages deployment.
