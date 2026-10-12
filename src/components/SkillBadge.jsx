export default function SkillBadge({ name, note }) {
  return (
    <li className="skill">
      <span className="skill__name">{name}</span>
      {note ? <span className="skill__note">{note}</span> : null}
    </li>
  );
}
