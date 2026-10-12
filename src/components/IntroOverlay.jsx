import { useId, useLayoutEffect, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { HELLO_PATH, INTRO_VIEWBOX } from "../data/intro";

// Plays only when the visitor has not seen it in this tab and has not asked
// for reduced motion. Reads only, so it is safe to run twice (Strict Mode).
function shouldPlay(storageKey) {
  if (typeof window === "undefined") return false;
  try {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  } catch {
    // matchMedia unavailable: carry on
  }
  try {
    if (window.sessionStorage.getItem(storageKey)) return false;
  } catch {
    // storage blocked: the intro still only plays once per page load
  }
  return true;
}

/**
 * Full-screen welcome animation.
 *
 * Phases: "playing" (writing) -> "leaving" (fade out) -> "done" (unmounted).
 * While it plays, the page underneath is loaded but inert, scrolling is
 * locked, and the hero text waits so it can animate in as the overlay fades.
 * Everything is restored the moment the intro leaves or is skipped.
 *
 * Props: word, caption, duration (ms before the fade), fade (ms), storageKey.
 */
export default function IntroOverlay({
  word = "hello",
  caption = "",
  duration = 2600,
  fade = 500,
  storageKey = "portfolio-intro-seen",
}) {
  const [phase, setPhase] = useState(() => (shouldPlay(storageKey) ? "playing" : "done"));
  const gradientId = `intro-grad-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;

  // While playing: lock the page, mark it seen, listen for Escape, and
  // schedule the fade. The cleanup undoes all of it (also on Strict Mode's
  // simulated unmount), so nothing can be left locked.
  useLayoutEffect(() => {
    if (phase !== "playing") return undefined;

    const root = document.documentElement;
    const app = document.getElementById("root");
    root.classList.add("intro-active");
    app?.setAttribute("inert", "");
    try {
      window.sessionStorage.setItem(storageKey, "1");
    } catch {
      // ignore: storage blocked
    }

    const onKey = (event) => {
      if (event.key === "Escape") setPhase("leaving");
    };
    window.addEventListener("keydown", onKey);
    const timer = window.setTimeout(() => setPhase("leaving"), duration);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKey);
      root.classList.remove("intro-active");
      app?.removeAttribute("inert");
    };
  }, [phase, duration, storageKey]);

  // While leaving: wait for the fade, then remove the overlay entirely.
  useEffect(() => {
    if (phase !== "leaving") return undefined;
    const timer = window.setTimeout(() => setPhase("done"), fade + 50);
    return () => window.clearTimeout(timer);
  }, [phase, fade]);

  if (phase === "done") return null;

  const skip = () => setPhase("leaving");
  const useDrawnHello = word.trim().toLowerCase() === "hello";
  const drawMs = Math.round(duration * 0.7);

  return createPortal(
    <div
      className={`intro${phase === "leaving" ? " is-leaving" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Welcome"
      style={{ "--intro-draw": `${drawMs}ms`, "--intro-fade": `${fade}ms` }}
    >
      <div className="intro__inner">
        <svg className="intro__svg" viewBox={INTRO_VIEWBOX} role="img" aria-label={word}>
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" style={{ stopColor: "var(--accent)" }} />
              <stop offset="1" style={{ stopColor: "var(--accent-2)" }} />
            </linearGradient>
          </defs>

          {useDrawnHello ? (
            <path
              className="intro__stroke"
              d={HELLO_PATH}
              pathLength="1"
              stroke={`url(#${gradientId})`}
            />
          ) : (
            <text
              className="intro__word"
              x="328"
              y="150"
              textAnchor="middle"
              fill={`url(#${gradientId})`}
            >
              {word}
            </text>
          )}
        </svg>

        {caption ? <p className="intro__caption">{caption}</p> : null}
      </div>

      {/* The page underneath is inert, so the first Tab key press lands here. */}
      <button type="button" className="intro__skip" onClick={skip}>
        Skip intro
      </button>
    </div>,
    document.body,
  );
}
