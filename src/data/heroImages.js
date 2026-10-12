// Photos from the featured projects, cropped to the card shape (about 600x833).
// The corridor is decorative (aria-hidden), so no alt text is rendered.
// Order interleaves the projects so neighbours look different.
export const heroImages = Array.from({ length: 9 }, (_, i) => ({
  src: `/images/stream/stream-${String(i + 1).padStart(2, "0")}.webp`,
}));
