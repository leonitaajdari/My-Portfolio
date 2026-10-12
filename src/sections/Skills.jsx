import SectionHeading from "../components/SectionHeading";
import SkillBadge from "../components/SkillBadge";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading id="skills-title" eyebrow="Skills" title="What I work with">
          Technologies are marked by whether I’ve used them in a project shown
          below or studied them so far.
        </SectionHeading>

        <div className="skills">
          {skillGroups.map((group) => (
            <div className="skills__group reveal" key={group.id}>
              <h3>{group.title}</h3>
              <ul className="skills__list">
                {group.skills.map((skill) => (
                  <SkillBadge key={skill.name} {...skill} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
