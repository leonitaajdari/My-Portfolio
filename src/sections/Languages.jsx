import SectionHeading from "../components/SectionHeading";
import { languages } from "../data/education";

export default function Languages() {
  return (
    <section className="section" id="languages" aria-labelledby="languages-title">
      <div className="container">
        <SectionHeading id="languages-title" eyebrow="Languages" title="Languages I speak" />

        <ul className="languages">
          {languages.map((language) => (
            <li className="language reveal" key={language.id}>
              <div className="language__head">
                <h3>{language.name}</h3>
                <p>{language.detail}</p>
              </div>
              <div className="language__bar" aria-hidden="true">
                <span style={{ width: `${(language.level / 5) * 100}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
