import SectionHeading from "../components/SectionHeading";
import SkillBadge from "../components/SkillBadge";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading id="skills-title" eyebrow="02 / Skills" title="What I build with">
          Marked by whether the skill appears in the projects above or is
          something I’ve studied so far.
        </SectionHeading>

        <ul className="skills">
          {skills.map((skill) => (
            <SkillBadge key={skill.name} {...skill} />
          ))}
        </ul>
      </div>
    </section>
  );
}
