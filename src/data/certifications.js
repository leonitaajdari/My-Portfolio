// status: "completed" | "in-progress"
// provider is null when it has not been verified. Never invent dates or providers.

export const courses = [
  {
    id: "html",
    title: "HTML Essentials",
    provider: "Cisco Networking Academy / JS Institute",
    status: "completed",
  },
  {
    id: "css",
    title: "CSS Essentials",
    provider: "Cisco Networking Academy / JS Institute",
    status: "completed",
  },
  { id: "javascript", title: "JavaScript course", provider: null, status: "completed" },
  { id: "react", title: "React course", provider: null, status: "completed" },
  { id: "rapid-ai", title: "Rapid AI course", provider: null, status: "in-progress" },
];

// A compact line below the course list.
export const additionalLearning = [
  "German language course, Unigerma Academy",
  "Erasmus+ project participation",
];
