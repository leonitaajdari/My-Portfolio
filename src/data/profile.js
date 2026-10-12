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
// Set age to a number (e.g. 21) to show it, or leave it null to keep it private.
export const identity = {
  fullName: "Leonita Ajdari",
  role: "Applied Programming student",
  studyingIn: "Skopje, North Macedonia",
  age: null,
};
