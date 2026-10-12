import { Check, Clock } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { additionalLearning, courses } from "../data/certifications";
import { currentStudies, previousSchool } from "../data/education";

export default function Education() {
  return (
    <section className="section" id="education" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading id="education-title" eyebrow="04 / Education" title="Education and learning" />

        <div className="learn">
          <div className="learn__study reveal">
            <h3>Currently studying</h3>
            <p className="learn__degree">{currentStudies.degree}</p>
            <p className="learn__place">
              {currentStudies.institution}
              <br />
              {currentStudies.location}
            </p>
            <p className="learn__period">
              {currentStudies.period}
              <span className="pill">Current</span>
            </p>
            <p className="learn__previous">
              Previously: {previousSchool.name}, {previousSchool.location} ·{" "}
              {previousSchool.period}
            </p>
          </div>

          <div className="learn__courses reveal">
            <h3>Courses</h3>
            <ul className="courses">
              {courses.map((course) => {
                const inProgress = course.status === "in-progress";
                return (
                  <li
                    key={course.id}
                    className={`course${inProgress ? " course--progress" : ""}`}
                  >
                    <div>
                      <p className="course__title">{course.title}</p>
                      {course.provider ? (
                        <p className="course__provider">{course.provider}</p>
                      ) : null}
                    </div>
                    <span className="course__status">
                      {inProgress ? (
                        <Clock size={15} aria-hidden="true" />
                      ) : (
                        <Check size={15} aria-hidden="true" />
                      )}
                      {inProgress ? "In progress" : "Completed"}
                    </span>
                  </li>
                );
              })}
            </ul>
            <p className="learn__also">
              Also: {additionalLearning.join(" · ")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
