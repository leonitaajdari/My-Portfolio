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
├── components/   Reusable UI (Navbar, ProjectCard, GlassFolder, IntroOverlay, ...)
├── sections/     Page sections (Hero, Projects, Skills, About, Education, Contact)
├── data/         All content: projects, skills, education, courses, profile, links, intro
├── hooks/        useActiveSection, useReveal, useTheme
├── utils/        externalLinks.js
└── styles/       variables, global, layout, components, responsive
public/
├── favicon.svg
└── images/       Project screenshots, portrait and hero photos (WebP)
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
  problem: "One sentence: what it solves.",
  features: ["Something it really does", "Another real feature"],
  contributions: null, // what YOU built; null hides the section
  challenges: null,    // a real technical challenge and its solution
  learned: null,       // what you learned
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

The **Details** button opens an accessible dialog built from the same data. Sections whose value is `null`
are hidden on the live site. While running `npm run dev`, each missing section shows a dashed
"Development placeholder" box so you can see what is still left to write.

### Hero images
The hero corridor uses nine developer-style stock photos (code on screens, a terminal, laptops) from
[Unsplash](https://unsplash.com), used under the Unsplash License. They are not screenshots of your work.
The files are `public/images/stream/stream-01.webp` to `stream-09.webp` (portrait, about 600×833).
To change them, replace those files or edit `src/data/heroImages.js`.

### Other content
| What | File |
|---|---|
| Skill categories and the note under each skill | `src/data/skills.js` |
| Name card (role, age, favorite tool) and portrait | `src/data/profile.js` |
| Education and languages | `src/data/education.js` |
| Courses | `src/data/certifications.js` |
| Email, social links, navigation | `src/data/socialLinks.js` |

### Link preview image
Social networks need an absolute image URL for link previews, so none is set yet. After deploying,
add `<meta property="og:image" content="https://YOUR-SITE/images/your-image.webp" />` to `index.html`
and change `twitter:card` to `summary_large_image`.

### Social links and CV
In `src/data/socialLinks.js`, paste the exact profile URL for LinkedIn, Facebook and Instagram.
Links with `url: null` are hidden everywhere (contact section and footer), so nothing fake is ever shown.
To enable **Download CV**, put a PDF in `public/resume/` and set `cvUrl` to its path. Use a version
without your date of birth, home address or phone number, because everything in `public/` is public.

### Opening animation
A handwritten "hello" is drawn when someone first opens the site, then fades away (about 3 seconds).
It plays once per browser tab, is skipped for visitors who prefer reduced motion, and has a
"Skip intro" button (Escape also skips). Edit `src/data/intro.js` to change:

- `word`: "hello" uses the hand-drawn path. Any other word is written in a script font.
- `caption`: the small line under it ("" hides it).
- `duration` and `fade`: timing in milliseconds.
- `storageKey`: change it to replay the intro in a tab that already saw it.

Colors follow the site theme (`--accent`, `--accent-2`, `--bg`). The component is
`src/components/IntroOverlay.jsx`.

### Theme
The site follows the visitor's system light/dark preference on the first visit and remembers their
choice in `localStorage`. Colors are CSS variables in `src/styles/variables.css`.

### Contact form
There is no form on purpose: a form needs a service to receive messages. The email button works
everywhere. To add one later, Netlify Forms is the simplest option once the site is deployed.

## Deploy on Netlify

1. Sign in at [app.netlify.com](https://app.netlify.com) and choose **Add new project → Import an existing project**.
2. Pick **GitHub** and select the `My-Portfolio` repository and the `main` branch.
3. Netlify reads `netlify.toml`, so the settings should already be:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click **Deploy**. Every future push to `main` redeploys automatically.
