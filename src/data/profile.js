// Your portrait for the About section.
//
// 1. Put your photo in public/images/ (JPG, PNG or WebP, ideally a head-and-
//    shoulders shot at least 640 px wide, portrait orientation).
// 2. Set src to its path, e.g. "/images/leonita.webp".
//
// While src is null, the photo area is simply not shown.
// Keep in mind everything in public/ is visible to anyone on the internet.

export const portrait = {
  src: "/images/leonita-portrait.webp",
  alt: "Illustrated portrait of Leonita Ajdari",
  // Where the crop is centred. "50% 20%" keeps faces in frame; try "50% 50%" for centred shots.
  position: "50% 25%",
};

// The name card in the About section.
// age is shown in the card; set it to null to hide it.
// Update it each year on your birthday. Do not store your date of birth here:
// everything in this file is sent to every visitor.
export const identity = {
  fullName: "Leonita Ajdari",
  role: "Applied Programming student",
  studyingIn: "Skopje, North Macedonia",
  age: 20,
  // Shown as "Favorite tool" in the card, e.g. "VS Code" or "React". null hides it.
  favoriteTool: "VS Code",
};
