// Developer-style photography for the hero corridor (free to use under the
// Unsplash License), cropped to the card shape (about 600x833).
// The corridor is decorative (aria-hidden), so no alt text is rendered.
export const heroImages = Array.from({ length: 9 }, (_, i) => ({
  src: `/images/stream/stream-${String(i + 1).padStart(2, "0")}.webp`,
}));
