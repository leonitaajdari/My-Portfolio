export default function SectionHeading({ id, eyebrow, title, children }) {
  return (
    <header className="section-heading reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {children ? <p className="section-heading__lead">{children}</p> : null}
    </header>
  );
}
