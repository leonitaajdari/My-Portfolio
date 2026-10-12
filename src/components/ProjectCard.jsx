import { ExternalLink } from "lucide-react";
import Button from "./Button";
import GitHubIcon from "./GitHubIcon";

export default function ProjectCard({ project }) {
  const {
    title,
    description,
    technologies,
    liveUrl,
    githubUrl,
    image,
    imageAlt,
    status,
    note,
  } = project;

  return (
    <article className="project reveal">
      <div className="project__media">
        <img
          src={image}
          alt={imageAlt}
          width="1200"
          height="750"
          loading="lazy"
          decoding="async"
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
