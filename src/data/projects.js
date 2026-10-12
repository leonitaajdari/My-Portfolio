// Every project card (and its details dialog) renders from this list.
//
// To add a project: append an object, put its screenshot in public/images/.
// Use null for any URL that does not exist. Only add information you can verify.
//
//   problem        one sentence: what it solves or why it exists
//   features       short list of things the project really does
//   contributions  what YOU built or decided (null until you write it)
//   challenges     a technical challenge and how you solved it (null until written)
//   learned        what you learned (null until written)
//
// Sections that are null are hidden on the live site. While running locally
// (npm run dev) the dialog shows a dashed "to fill in" reminder instead, so you
// can see exactly what is still missing.
//
// status: "completed" | "in-progress"

export const projects = [
  {
    id: "fitplan",
    title: "FitPlan",
    description:
      "A fitness platform where trainers build weekly workout and meal plans for their clients, and clients follow their plan and track progress.",
    problem:
      "Keeps workout plans, meal plans, recipes and weekly progress in one place for trainers and their clients.",
    features: [
      "Separate trainer and client accounts, each with its own dashboard",
      "Weekly workout plans per client, built from an exercise library",
      "Meal plans built from a meal library, with recipe pages",
      "Clients complete workouts and meals to track weekly progress",
    ],
    contributions: null,
    challenges: null,
    learned: null,
    technologies: ["React", "React Router", "JavaScript", "Axios", "REST API"],
    liveUrl: "https://fitplan00.netlify.app/",
    githubUrl: "https://github.com/leonitaajdari/fitPlan0",
    image: "/images/fitplan.webp",
    imageAlt: "Screenshot of the FitPlan landing page with a healthy meal photo and a call to action.",
    featured: true,
    status: "completed",
    note: "Logged-in features use a separate API hosted on a free service, which may take a moment to wake up.",
  },
  {
    id: "kindling-coffee",
    title: "Kindling Coffee",
    description:
      "A single-page website for a small-batch coffee roastery and café, with a drinks menu, a bean shop section, visitor information and a contact form.",
    problem:
      "Gives a café one clear page for its menu, its beans and everything a visitor needs to find it.",
    features: [
      "Drinks menu with prices, descriptions and category labels",
      "A featured “on the slow bar today” coffee",
      "Bean shop section with tasting notes, roast levels and prices",
      "Visit section with opening hours, directions and contact details",
      "Contact form with a topic selector",
    ],
    contributions: null,
    challenges: null,
    learned: null,
    technologies: ["React", "TanStack Router", "Tailwind CSS"],
    liveUrl: "https://kindilingcaffeee.netlify.app/",
    githubUrl: null,
    image: "/images/kindling-coffee.webp",
    imageAlt: "Screenshot of the Kindling Coffee website showing a barista pouring milk into a latte and the headline 'Coffee worth getting up for'.",
    featured: true,
    status: "completed",
    note: null,
  },
  {
    id: "cinematic-art",
    title: "The Evolution of Cinematic Art",
    shortTitle: "Cinematic Art", // label on the folder, which has less room
    description:
      "An interactive single-page website that walks through the history of cinema, from silent films to streaming and virtual reality.",
    problem:
      "Explains how cinema evolved through an interactive, easy-to-follow timeline.",
    features: [
      "Timeline of five eras of cinema, each with an image and a Learn More link",
      "Introduction to what cinematic art is",
      "Background audio with a sound toggle",
      "Embedded video about the history of cinema",
    ],
    contributions: null,
    challenges: null,
    learned: null,
    technologies: ["HTML", "CSS", "Bootstrap"],
    liveUrl: "https://cinematicart.netlify.app/",
    githubUrl: null,
    image: "/images/cinematic-art.webp",
    imageAlt: "Screenshot of the Cinematic Art website hero with a film reel collage and a gold call to action.",
    featured: true,
    status: "completed",
    note: null,
  },
  {
    // Shown with an "In progress" label: the booking flow and some links are
    // still placeholders on the live site.
    id: "manimagic",
    title: "ManiMagic",
    description:
      "A one-page website for a nail studio concept with services, a price list, a photo gallery and client reviews. Still being refined: the booking flow and some links are not finished yet.",
    problem: null,
    features: [],
    contributions: null,
    challenges: null,
    learned: null,
    technologies: ["HTML", "CSS", "Bootstrap"],
    liveUrl: "https://manimagic.netlify.app/",
    githubUrl: null,
    image: "/images/manimagic.webp",
    imageAlt: "Screenshot of the ManiMagic website hero with a purple Book Now button on a dark background.",
    featured: true,
    status: "in-progress",
    note: null,
  },
  {
    id: "manimagic-artist-page",
    title: "ManiMagic Nail Artist Page",
    shortTitle: "Nail Artist Page",
    description:
      "A one-page personal website for a nail artist, with an introduction, an about section, the services offered and a price list.",
    problem: null,
    features: [
      "Introduction and about sections for a nail artist",
      "Services overview",
      "Price list",
    ],
    contributions: null,
    challenges: null,
    learned: null,
    technologies: ["HTML", "CSS", "Bootstrap", "jQuery"],
    liveUrl: "https://leonitaajdari.netlify.app/",
    githubUrl: null,
    image: "/images/manimagic-personal.webp",
    imageAlt: "Screenshot of the ManiMagic nail artist page with an illustrated portrait and the greeting 'Hi, I'm Leonita Ajdari' on a lilac card.",
    featured: true,
    status: "completed",
    note: null,
  },
];
