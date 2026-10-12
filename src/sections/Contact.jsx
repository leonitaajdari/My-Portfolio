import { Download, Mail } from "lucide-react";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import SocialIcon from "../components/SocialIcon";
import { cvUrl, email, socialLinks } from "../data/socialLinks";
import { externalLinkProps } from "../utils/externalLinks";

export default function Contact() {
  const available = socialLinks.filter((link) => link.url);
  const primary = available.filter((link) => link.priority === "primary");
  const secondary = available.filter((link) => link.priority === "secondary");

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact reveal">
          <SectionHeading id="contact-title" eyebrow="05 / Contact" title="Let’s talk">
            If you’d like to discuss a project, an opportunity or my work, email
            is the best way to reach me.
          </SectionHeading>

          <p className="contact__email">
            <a href={`mailto:${email}`}>{email}</a>
          </p>

          <div className="contact__actions">
            <Button
              href={`mailto:${email}`}
              icon={<Mail size={18} aria-hidden="true" />}
            >
              Send an email
            </Button>

            {primary.map((link) => (
              <Button
                key={link.id}
                href={link.url}
                variant="secondary"
                external
                icon={<SocialIcon name={link.id} size={18} />}
                aria-label={`${link.label} (opens in a new tab)`}
              >
                {link.label}
              </Button>
            ))}

            {cvUrl ? (
              <Button
                href={cvUrl}
                variant="secondary"
                download
                icon={<Download size={18} aria-hidden="true" />}
              >
                Download CV
              </Button>
            ) : null}
          </div>

          {secondary.length ? (
            <ul className="contact__social" aria-label="More profiles">
              {secondary.map((link) => (
                <li key={link.id}>
                  <a
                    className="icon-link"
                    href={link.url}
                    aria-label={`${link.label} (opens in a new tab)`}
                    {...externalLinkProps}
                  >
                    <SocialIcon name={link.id} size={20} />
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}
