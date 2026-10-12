import { useEffect, useMemo, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import Button from "./Button";
import GitHubIcon from "./GitHubIcon";
import GlassFolder from "./GlassFolder";

const FOLDER_WIDTH = 340;
const FOLDER_MIN_WIDTH = 220;

// Keeps the folder inside its column on narrow screens.
function useFolderWidth(ref) {
  const [width, setWidth] = useState(FOLDER_WIDTH);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof ResizeObserver === "undefined") return undefined;
    const observer = new ResizeObserver(([entry]) => {
      const available = Math.floor(entry.contentRect.width);
      setWidth(Math.max(FOLDER_MIN_WIDTH, Math.min(FOLDER_WIDTH, available)));
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return width;
}

export default function ProjectCard({ project }) {
  const {
    title,
    description,
    technologies,
    liveUrl,
    githubUrl,
    image,
    status,
    note,
  } = project;

  const mediaRef = useRef(null);
  const folderWidth = useFolderWidth(mediaRef);

  // Only real links become files inside the folder.
  const files = useMemo(() => {
    const list = [];
    if (liveUrl) {
      list.push({
        name: "Live demo",
        meta: "Opens the site",
        image,
        href: liveUrl,
        external: true,
      });
    }
    if (githubUrl) {
      list.push({ name: "GitHub source", meta: "Repository", href: githubUrl, external: true });
    }
    return list;
  }, [liveUrl, githubUrl, image]);

  return (
    <article className="project reveal">
      <div className="project__media" ref={mediaRef}>
        <GlassFolder
          label={title}
          meta={status === "in-progress" ? "In progress" : "Completed"}
          tone="dark"
          image={image}
          files={files}
          action="none"
          width={folderWidth}
          labelPlacement="bottom-left"
        />
        {status === "in-progress" ? (
          <span className="project__badge">In progress</span>
        ) : null}
      </div>

      <div className="project__body">
        <h3>{title}</h3>
        <p>{description}</p>
        {note ? <p className="project__note">{note}</p> : null}

        <ul className="tags" aria-label={`Technologies used in ${title}`}>
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className="project__actions">
          {liveUrl ? (
            <Button
              href={liveUrl}
              external
              icon={<ExternalLink size={16} aria-hidden="true" />}
              aria-label={`Live demo of ${title} (opens in a new tab)`}
            >
              Live Demo
            </Button>
          ) : null}
          {githubUrl ? (
            <Button
              href={githubUrl}
              variant="secondary"
              external
              icon={<GitHubIcon size={16} />}
              aria-label={`Source code of ${title} on GitHub (opens in a new tab)`}
            >
              GitHub Source
            </Button>
          ) : (
            <span className="project__nosource">Source not public</span>
          )}
        </div>
      </div>
    </article>
  );
}
