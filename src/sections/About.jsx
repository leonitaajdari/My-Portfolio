import GitHubActivity from "../components/GitHubActivity";
import SectionHeading from "../components/SectionHeading";
import { currentStudies, languages } from "../data/education";
import { portrait } from "../data/profile";

export default function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className={`container about${portrait.src ? "" : " about--no-portrait"}`}>
        <div className="about__intro">
          <SectionHeading id="about-title" eyebrow="03 / About" title="A bit about me" />
          <div className="about__text reveal">
            <p>
              I’m studying Applied Programming at Mother Teresa University in
              Skopje, and I’m building toward a career in front-end development.
              I’m most interested in React, JavaScript and AI tools, and in
              making web interfaces that are clear and easy to use.
            </p>
            <p>
              I learn by making things. I’ve completed courses in HTML, CSS,
              JavaScript and React, I’m attending a Rapid AI course, and I turn
              what I learn into real projects.
            </p>
          </div>
        </div>

        {portrait.src ? (
          <figure className="portrait reveal">
            <img
              src={portrait.src}
              alt={portrait.alt}
              width="900"
              height="900"
              loading="lazy"
              decoding="async"
              style={{ objectPosition: portrait.position }}
            />
          </figure>
        ) : null}

        <dl className="facts reveal">
          <div>
            <dt>Studying</dt>
            <dd>
              {currentStudies.degree}, {currentStudies.institution}
            </dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>Front-end development with React and JavaScript</dd>
          </div>
          <div>
            <dt>Languages</dt>
            <dd>{languages.join(" · ")}</dd>
          </div>
        </dl>

        <GitHubActivity />
      </div>
    </section>
  );
}
