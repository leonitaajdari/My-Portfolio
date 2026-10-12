import { useId, useMemo } from "react";

/*
 * Image Stream Hero (JSX port).
 *
 * Two rails of cards ride from far behind the screen toward the viewer.
 * Perspective alone does the work: as a card's z grows it gets bigger and its
 * screen x sweeps outward from the vanishing point.
 *
 * - Depth is authored as apparent size, so consecutive cards keep a constant
 *   size ratio and the ribbon stays solid.
 * - The rails open hard in the first stretch and then hold (`fan` > 1).
 * - A card is born across the axis (`railBirth` < 0), so the centre never
 *   opens up.
 *
 * Every length is in `cqw` (a percentage of the container's width), so the
 * corridor keeps its proportions at any size.
 */

const PATH = {
  perspective: 30,
  cardWidth: 18,
  cardHeight: 25,
  cardRadius: 0.4,
  birthHeight: 2.6,
  exitHeight: 46,
  railBirth: -11,
  railExit: 44,
  fan: 3.3,
  turnBirth: 6,
  turnExit: 28,
  stops: 24,
};

/** Sample the path once so the CSS keyframes trace the real curve. */
function keyframes(dir, name, p) {
  const steps = [];
  for (let s = 0; s <= p.stops; s++) {
    const u = s / p.stops;
    const scale = (p.birthHeight / p.cardHeight) * Math.pow(p.exitHeight / p.birthHeight, u);
    const z = p.perspective * (1 - 1 / scale);
    const rail = p.railExit - (p.railExit - p.railBirth) * Math.pow(1 - u, p.fan);
    const turn = p.turnBirth + (p.turnExit - p.turnBirth) * u;
    steps.push(
      `${(u * 100).toFixed(2)}%{transform:translate3d(${(dir * rail).toFixed(2)}cqw,0,${z.toFixed(
        2,
      )}cqw) rotateY(${(-dir * turn).toFixed(2)}deg)}`,
    );
  }
  return `@keyframes ${name}{${steps.join("")}}`;
}

/**
 * Props
 *   images   [{ src, alt? }]  cycled onto the rails
 *   cards    cards per rail at once (default 9)
 *   speed    seconds for one card to travel the corridor (default 18)
 *   axis     vertical placement of the axis, % of height (default 55)
 *   path     overrides for the corridor geometry
 *   children content rendered above the corridor
 */
export default function ImageStreamHero({
  images,
  cards = 9,
  speed = 18,
  axis = 55,
  path,
  children,
  className = "",
  style,
  ...rest
}) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, "");
  const right = `ish-r-${id}`;
  const left = `ish-l-${id}`;
  const card = `ish-c-${id}`;

  const p = useMemo(() => ({ ...PATH, ...path }), [path]);

  const css = useMemo(
    () =>
      `${keyframes(1, right, p)}${keyframes(-1, left, p)}` +
      // Pausing rather than disabling keeps the corridor whole: every card is
      // already dropped mid-flight by its negative delay, so it freezes as a
      // finished still instead of collapsing onto the axis.
      `@media(prefers-reduced-motion:reduce){.${card}{animation-play-state:paused}}`,
    [right, left, card, p],
  );

  return (
    <div
      className={`ish ${className}`.trim()}
      {...rest}
      style={{ containerType: "inline-size", ...style }}
    >
      <style>{css}</style>

      <div
        aria-hidden="true"
        className="ish__scene"
        style={{
          perspective: `${p.perspective}cqw`,
          perspectiveOrigin: `50% ${axis}%`,
        }}
      >
        <div className="ish__plane">
          {[right, left].map((name) =>
            Array.from({ length: cards }, (_, i) => {
              // Both rails walk the same sequence, so the left mirrors the right.
              const img = images[i % Math.max(images.length, 1)];
              return (
                <div
                  key={`${name}-${i}`}
                  className={`ish__card ${card}`}
                  style={{
                    top: `${axis}%`,
                    width: `${p.cardWidth}cqw`,
                    height: `${p.cardHeight}cqw`,
                    marginLeft: `${-p.cardWidth / 2}cqw`,
                    marginTop: `${-p.cardHeight / 2}cqw`,
                    borderRadius: `${p.cardRadius}cqw`,
                    animation: `${name} ${speed}s linear infinite`,
                    // Negative delay drops each card mid-flight, so the
                    // corridor is already full on the first frame.
                    animationDelay: `${-(i * speed) / cards}s`,
                  }}
                >
                  {img ? (
                    <img
                      className="ish__img"
                      src={img.src}
                      alt={img.alt ?? ""}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                    />
                  ) : null}
                </div>
              );
            }),
          )}
        </div>
      </div>

      {children}
    </div>
  );
}
