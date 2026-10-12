// level: "used"    = used in one of the featured projects
//        "studied" = learned through coursework, not yet shown in a featured project
// Soft skills have no level.

export const skillGroups = [
  {
    id: "frontend",
    title: "Front-End Technologies",
    skills: [
      { name: "HTML", level: "used", note: "All featured projects" },
      { name: "CSS", level: "used", note: "All featured projects" },
      { name: "JavaScript", level: "used", note: "FitPlan" },
      { name: "React", level: "used", note: "FitPlan, Kindling Coffee" },
      { name: "Web Design", level: "used", note: "All featured projects" },
    ],
  },
  {
    id: "programming",
    title: "Programming & Tools",
    skills: [
      { name: "C++", level: "studied", note: null },
      { name: "Microsoft Office", level: null, note: null },
    ],
  },
  {
    id: "professional",
    title: "Professional Skills",
    skills: [
      { name: "Communication", level: null, note: null },
      { name: "Teamwork", level: null, note: null },
      { name: "Adaptability", level: null, note: null },
      { name: "Problem solving", level: null, note: null },
      { name: "Time management", level: null, note: null },
    ],
  },
];
