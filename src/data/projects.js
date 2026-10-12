// Every project card on the site renders from this list.
// To add a project: append an object here, put its screenshot in public/images/.
// Use null for any URL that does not exist. Only add verified information.
//
// status: "completed" | "in-progress"
// sourceNote: shown when no public repository exists

export const projects = [
  {
    id: "fitplan",
    title: "FitPlan",
    description:
      "A fitness platform where trainers build weekly workout and meal plans for their clients, and clients follow their plan and track progress. Includes role-based dashboards for trainers and clients and a recipe library.",
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
    id: "cinematic-art",
    title: "The Evolution of Cinematic Art",
    description:
      "An interactive single-page website that walks through the history of cinema, from silent films to streaming and virtual reality, with a five-era timeline, background audio and an embedded video.",
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
    id: "manimagic",
    title: "ManiMagic",
    description:
      "A one-page website for a nail studio concept with services, a price list, a photo gallery and client reviews. Still being refined: the booking flow and some links are not finished yet.",
    technologies: ["HTML", "CSS", "Bootstrap"],
    liveUrl: "https://manimagic.netlify.app/",
    githubUrl: null,
    image: "/images/manimagic.webp",
    imageAlt: "Screenshot of the ManiMagic website hero with a purple Book Now button on a dark background.",
    featured: true,
    status: "in-progress",
    note: null,
  },
];
