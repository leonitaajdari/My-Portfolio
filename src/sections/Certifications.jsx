import CertificateCard from "../components/CertificateCard";
import SectionHeading from "../components/SectionHeading";
import { certifications } from "../data/certifications";

export default function Certifications() {
  return (
    <section className="section" id="certifications" aria-labelledby="certs-title">
      <div className="container">
        <SectionHeading id="certs-title" eyebrow="Courses" title="Courses and certificates" />

        <ul className="certs">
          {certifications.map((cert) => (
            <CertificateCard key={cert.id} {...cert} />
          ))}
        </ul>
      </div>
    </section>
  );
}
