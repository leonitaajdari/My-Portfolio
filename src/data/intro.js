// Settings for the opening animation (see src/components/IntroOverlay.jsx).

export const intro = {
  // "hello" is drawn from the hand-written path below. Any other word is
  // written in a script font with a left-to-right reveal instead,
  // e.g. word: "welcome" or "hi, I'm Leonita".
  word: "hello",

  // Small line shown under the word. Use "" to hide it.
  caption: "Welcome to my portfolio",

  // Milliseconds until the intro starts fading out on its own.
  // The writing itself takes about 70% of this time.
  duration: 2600,

  // Milliseconds for the fade-out.
  fade: 500,

  // The intro plays once per browser tab. Change the key to see it again
  // in a tab that has already played it.
  storageKey: "portfolio-intro-seen",
};

// A single hand-drawn stroke that writes "hello" (original artwork).
export const HELLO_PATH =
  "M 36 180 C 56 160 88 96 108 52 C 120 20 150 20 142 64 C 134 110 114 156 106 182 C 112 150 130 120 156 118 C 186 116 186 150 178 172 C 175 186 196 180 212 160 C 224 138 254 112 278 124 C 302 138 262 160 236 152 C 222 170 246 190 282 170 C 304 150 316 66 334 40 C 346 18 372 28 360 66 C 348 112 330 162 348 178 C 360 186 382 172 398 154 C 414 120 420 64 438 40 C 450 18 476 28 464 66 C 452 112 434 162 452 178 C 464 186 488 172 504 152 C 520 126 548 114 566 126 C 592 144 574 192 540 182 C 506 172 516 128 548 124 C 572 121 596 134 620 112";

export const INTRO_VIEWBOX = "16 0 624 212";
