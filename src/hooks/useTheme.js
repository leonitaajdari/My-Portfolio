import { useCallback, useState } from "react";

const STORAGE_KEY = "theme";
const THEME_COLORS = { dark: "#0f1015", light: "#f7f7fa" };

// The initial theme is already on <html> (set by the inline script in index.html),
// so React just reads it and keeps it in sync.
export function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute("data-theme") || "dark",
  );

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", THEME_COLORS[next]);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Storage can be blocked; the choice still applies for this visit.
      }
      return next;
    });
  }, []);

  return { theme, toggle };
}
