import SectionHeading from "../components/SectionHeading";

export default function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container about">
        <SectionHeading id="about-title" eyebrow="About" title="A student who learns by building" />
        <div className="about__text reveal">
          <p>
            I’m an Applied Programming student at Mother Teresa University in
            Skopje. I’m drawn to web technologies, digital communication and
            modern interfaces, and I like turning ideas into pages people can
            actually use.
          </p>
          <p>
            I’ve completed courses in HTML, CSS, JavaScript and React, and I’m
            currently attending a Rapid AI course. Every course ends up in a
            project, because building something real is how I learn best.
          </p>
          <p>
            I’m looking for opportunities to keep growing as a front-end
            developer, work with a team and ship things I’m proud of.
          </p>
        </div>
      </div>
    </section>
  );
}
