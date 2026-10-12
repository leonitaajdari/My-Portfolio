# Leonita Ajdari — Developer Portfolio

Personal portfolio of Leonita Ajdari, an Applied Programming student and aspiring Front-End Developer.
Built with React and Vite. A single-page site with no backend.

## Run locally

```bash
npm install
npm run dev       # development server at http://localhost:5173
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

Requires Node.js 20 or newer.

## Tech stack

- React 19 + Vite
- JavaScript (JSX), semantic HTML5
- Plain CSS with variables (`src/styles/`)
- [Lucide React](https://lucide.dev) for icons

## Project structure

```
src/
├── components/   Reusable UI (Navbar, Button, ProjectCard, ...)
├── sections/     Page sections (Hero, About, Skills, Projects, ...)
├── data/         All site content: projects, skills, education, certifications, links
├── hooks/        useActiveSection, useReveal
├── utils/        externalLinks.js
└── styles/       variables, global, layout, components, responsive
public/
├── favicon.svg
└── images/       Project screenshots (WebP)
```

## Updating content

All content lives in `src/data/`, so components never need editing for routine updates.

### Add or change a project
1. Save a screenshot as WebP in `public/images/` (about 1200×750).
2. Add an object to the array in `src/data/projects.js`:

```js
{
  id: "my-project",
  title: "My Project",
  description: "One or two honest sentences about what it does.",
  technologies: ["React", "CSS"],
  liveUrl: "https://my-project.netlify.app/", // or null
  githubUrl: "https://github.com/leonitaajdari/my-project", // or null
  image: "/images/my-project.webp",
  imageAlt: "Describe the screenshot.",
  featured: true,
  status: "completed", // or "in-progress"
  note: null,
}
```

Use `null` for any URL that does not exist. A project with no `githubUrl` shows "Source not public".

### Other content
| What | File |
|---|---|
| Skills and whether they were used in a project or studied | `src/data/skills.js` |
| Education and languages | `src/data/education.js` |
| Courses and certificates | `src/data/certifications.js` |
| Email, social links, navigation | `src/data/socialLinks.js` |

To show a LinkedIn link, set its `url` in `socialLinks.js`. Links with `url: null` are hidden.

## Deploy on Netlify

1. Sign in at [app.netlify.com](https://app.netlify.com) and choose **Add new project → Import an existing project**.
2. Pick **GitHub** and select the `My-Portfolio` repository and the `main` branch.
3. Netlify reads `netlify.toml`, so the settings should already be:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click **Deploy**. Every future push to `main` redeploys automatically.
