import { useEffect, useRef } from "react";
import { ExternalLink, X } from "lucide-react";
import Button from "./Button";
import SocialIcon from "./SocialIcon";

// Shown only while running locally, so missing content is easy to spot
// and never appears on the published site.
const SHOW_TODO = import.meta.env.DEV;

const NARRATIVE = [
  {
    key: "contributions",
    title: "My contributions",
    todo: "What did you build or decide yourself?",
  },
  {
    key: "challenges",
    title: "Technical challenges and solutions",
    todo: "One real problem you hit and how you solved it.",
  },
  {
    key: "learned",
    title: "What I learned",
    todo: "What this project taught you.",
  },
];

// A native <dialog>: the browser handles the focus trap, Escape to close
// and returning focus to the button that opened it.
export default function ProjectDetails({ project, onClose }) {
  const ref = useRef(null);
  const {
    id,
    title,
    description,
    problem,
    features = [],
    technologies,
    liveUrl,
    githubUrl,
    image,
    imageAlt,
    status,
  } = project;

  useEffect(() => {
    const dialog = ref.current;
    if (dialog && !dialog.open) dialog.showModal();
    document.documentElement.classList.add("has-dialog");
    return () => document.documentElement.classList.remove("has-dialog");
  }, []);

  const titleId = `details-title-${id}`;

  return (
    <dialog
      ref={ref}
      className="details"
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(event) => {
        // A click on the backdrop lands on the dialog element itself.
        if (event.target === ref.current) ref.current.close();
      }}
    >
      <div className="details__panel">
        <button
          type="button"
          className="details__close"
          aria-label="Close project details"
          onClick={() => ref.current?.close()}
        >
          <X size={20} aria-hidden="true" />
        </button>

        <img
          className="details__image"
          src={image}
          alt={imageAlt}
          width="1200"
          height="750"
        />

        <div className="details__body">
          <p className="eyebrow">
            {status === "in-progress" ? "In progress" : "Project"}
          </p>
          <h2 id={titleId}>{title}</h2>

          {problem ? <p className="details__lead">{problem}</p> : null}
          <p>{description}</p>

          {features.length ? (
            <section aria-labelledby={`${titleId}-features`}>
              <h3 id={`${titleId}-features`}>Main features</h3>
              <ul className="details__list">
                {features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </section>
          ) : null}

          <section aria-labelledby={`${titleId}-tech`}>
            <h3 id={`${titleId}-tech`}>Technologies</h3>
            <ul className="tags">
              {technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </section>

          {NARRATIVE.map(({ key, title: heading, todo }) => {
            const value = project[key];
            if (value) {
              return (
                <section key={key}>
                  <h3>{heading}</h3>
                  <p>{value}</p>
                </section>
              );
            }
            return SHOW_TODO ? (
              <section key={key} className="details__todo">
                <h3>{heading}</h3>
                <p>
                  Development placeholder: {todo} Add <code>{key}</code> in{" "}
                  <code>src/data/projects.js</code>. Hidden on the live site
                  until filled in.
                </p>
              </section>
            ) : null;
          })}

          <div className="details__actions">
            {liveUrl ? (
              <Button
                href={liveUrl}
                external
                icon={<ExternalLink size={16} aria-hidden="true" />}
              >
                Live Demo
              </Button>
            ) : null}
            {githubUrl ? (
              <Button
                href={githubUrl}
                variant="secondary"
                external
                icon={<SocialIcon name="github" size={16} />}
              >
                GitHub Source
              </Button>
            ) : (
              <span className="project__nosource">Source not public</span>
            )}
          </div>
        </div>
      </div>
    </dialog>
  );
}
