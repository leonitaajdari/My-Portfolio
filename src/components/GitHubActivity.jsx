import { useEffect, useState } from "react";
import { githubUsername } from "../data/socialLinks";
import { externalLinkProps } from "../utils/externalLinks";
import SocialIcon from "./SocialIcon";

const CACHE_KEY = "github-repos-v1";
const CACHE_MS = 10 * 60 * 1000; // stay well inside GitHub's unauthenticated rate limit

const formatDate = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

function readCache() {
  try {
    const cached = JSON.parse(sessionStorage.getItem(CACHE_KEY));
    if (cached && Date.now() - cached.at < CACHE_MS) return cached.repos;
  } catch {
    // ignore: no cache available
  }
  return null;
}

function writeCache(repos) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), repos }));
  } catch {
    // ignore: storage blocked
  }
}

// Real data from the public GitHub API: your latest pushed repositories.
// No token is needed, and nothing is simulated.
export default function GitHubActivity() {
  const [state, setState] = useState({ status: "loading", repos: [] });

  useEffect(() => {
    const cached = readCache();
    if (cached) {
      setState({ status: cached.length ? "ready" : "empty", repos: cached });
      return undefined;
    }

    const controller = new AbortController();
    fetch(
      `https://api.github.com/users/${githubUsername}/repos?sort=pushed&per_page=10`,
      {
        signal: controller.signal,
        headers: { Accept: "application/vnd.github+json" },
      },
    )
      .then((response) => {
        if (!response.ok) throw new Error(`GitHub responded ${response.status}`);
        return response.json();
      })
      .then((data) => {
        const repos = data
          .filter((repo) => !repo.fork && repo.size > 0)
          .slice(0, 3)
          .map((repo) => ({
            id: repo.id,
            name: repo.name,
            url: repo.html_url,
            language: repo.language,
            pushedAt: repo.pushed_at,
          }));
        writeCache(repos);
        setState({ status: repos.length ? "ready" : "empty", repos });
      })
      .catch((error) => {
        if (error.name !== "AbortError") setState({ status: "error", repos: [] });
      });

    return () => controller.abort();
  }, []);

  const profileUrl = `https://github.com/${githubUsername}`;

  return (
    <div className="activity reveal">
      <h3 className="activity__title">
        <SocialIcon name="github" size={16} />
        Recent GitHub activity
      </h3>

      {state.status === "loading" ? (
        <p className="activity__message" role="status">
          Loading from GitHub…
        </p>
      ) : null}

      {state.status === "error" ? (
        <p className="activity__message" role="status">
          GitHub activity can’t be loaded right now.{" "}
          <a href={profileUrl} {...externalLinkProps}>
            View my profile
          </a>
          .
        </p>
      ) : null}

      {state.status === "empty" ? (
        <p className="activity__message" role="status">
          No public repositories with code yet.
        </p>
      ) : null}

      {state.status === "ready" ? (
        <ul className="activity__list">
          {state.repos.map((repo) => (
            <li key={repo.id}>
              <a href={repo.url} {...externalLinkProps}>
                {repo.name}
              </a>
              <span className="activity__meta">
                {repo.language ? `${repo.language} · ` : ""}
                Last pushed{" "}
                <time dateTime={repo.pushedAt}>
                  {formatDate.format(new Date(repo.pushedAt))}
                </time>
              </span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
