const LEVEL_LABEL = {
  used: "Used in projects",
  studied: "Studied",
};

export default function SkillBadge({ name, level, note }) {
  return (
    <li className={`skill reveal${level ? ` skill--${level}` : ""}`}>
      <span className="skill__name">{name}</span>
      <span className="skill__level">{LEVEL_LABEL[level]}</span>
      {note ? <span className="skill__note">{note}</span> : null}
    </li>
  );
}
