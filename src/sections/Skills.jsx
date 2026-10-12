import SectionHeading from "../components/SectionHeading";
import SkillBadge from "../components/SkillBadge";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading id="skills-title" eyebrow="02 / Skills" title="What I build with">
          The notes show where each skill appears in my work.
        </SectionHeading>

        <div className="skill-groups">
          {skillGroups.map((group) => (
            <div
              key={group.id}
              className={`skill-group reveal${group.id === "learning" ? " skill-group--learning" : ""}`}
            >
              <h3>{group.title}</h3>
              <ul className="skills">
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
