import { GraduationCap } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { education } from "../data/education";

export default function Education() {
  return (
    <section className="section" id="education" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading id="education-title" eyebrow="Education" title="Where I study" />

        <ol className="timeline">
          {education.map((item) => (
            <li className="timeline__item reveal" key={item.id}>
              <span className="timeline__icon" aria-hidden="true">
                <GraduationCap size={20} />
              </span>
              <div>
                <p className="timeline__period">
                  {item.period}
                  {item.current ? <span className="pill">Current</span> : null}
                </p>
                <h3>{item.degree}</h3>
                <p className="timeline__place">
                  {item.institution} · {item.location}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
