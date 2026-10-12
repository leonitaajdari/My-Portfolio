// Real captures of the featured Netlify sites, used in the hero corridor.
// The corridor is decorative (aria-hidden), so no alt text is rendered.
// Order interleaves the projects: FitPlan, Cinematic Art, ManiMagic.
export const heroImages = Array.from({ length: 9 }, (_, i) => ({
  src: `/images/stream/stream-${String(i + 1).padStart(2, "0")}.webp`,
}));
