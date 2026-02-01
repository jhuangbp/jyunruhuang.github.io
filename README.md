# Portfolio Website

A personal portfolio built with React and Vite for JyunRu Huang. The site highlights professional experience, featured projects, education, case competition work, skills, certificates, and contact information.

## Features

- Single-page layout with smooth-scroll navigation
- Dedicated sections for profile summary, projects, experience, education, case competition, skills, certificates, and contact
- Downloadable resume and project artifacts hosted from the `docs/` public directory
- Contact form that opens a prefilled email message via `mailto:`
- Datasette warm-up request on load for the MuckRock data exploration project

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

Open http://localhost:5173.

### Build for Production

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

## Project Structure

```
portfolio_website/
├── docs/                 # Public assets (resume, headshot, reports, logos)
├── src/
│   ├── components/       # Section components
│   │   ├── About.jsx
│   │   ├── CaseCompetition.jsx
│   │   ├── Certificates.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── render.yaml
└── vite.config.js
```

## Content Updates

Update content in the section components under `src/components`:

- `Navbar.jsx`: navigation labels and resume download link
- `Hero.jsx`: headline, summary, and social links
- `About.jsx`: summary paragraphs and highlight cards
- `Projects.jsx`: project list, links, and artifacts
- `Experience.jsx`: work history and impact bullets
- `Education.jsx`: degrees and coursework
- `CaseCompetition.jsx`: competition details
- `Skills.jsx`: skill categories and tags
- `Certificates.jsx`: certifications
- `Contact.jsx`: contact details and the `mailto` form configuration

Static files referenced by the site (resume, headshot, reports, logos) live in `docs/`, which is configured as Vite's `publicDir`.

## Deployment

This project includes a `render.yaml` for a Render static site deployment.

1. Push the repository to GitHub.
2. Create a new Render **Static Site** and connect the repo.
3. Build Command: `npm install && npm run build`
4. Publish Directory: `dist`

Alternatively, use the provided `render.yaml` for automated setup.
