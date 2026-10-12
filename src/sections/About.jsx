import SectionHeading from "../components/SectionHeading";
import { currentStudies, languages } from "../data/education";

export default function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container about">
        <div>
          <SectionHeading id="about-title" eyebrow="03 / About" title="A bit about me" />
          <div className="about__text reveal">
            <p>
              I’m an Applied Programming student in Skopje, working toward a
              career in front-end development. I like the moment a design turns
              into a working interface, and the problem solving it takes to get
              there.
            </p>
            <p>
              I’ve completed courses in HTML, CSS, JavaScript and React, and I’m
              currently attending a Rapid AI course. I put what I learn into
              real projects, and each one teaches me what to do better in the
              next.
            </p>
          </div>
        </div>

        <dl className="facts reveal">
          <div>
            <dt>Studying</dt>
            <dd>
              {currentStudies.degree}, {currentStudies.institution}
            </dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>Front-end development, responsive interfaces</dd>
          </div>
          <div>
            <dt>Languages</dt>
            <dd>{languages.join(" · ")}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
