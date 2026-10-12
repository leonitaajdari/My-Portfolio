import { Mail } from "lucide-react";
import Button from "../components/Button";
import GitHubIcon from "../components/GitHubIcon";
import SectionHeading from "../components/SectionHeading";
import { email, socialLinks } from "../data/socialLinks";

export default function Contact() {
  const links = socialLinks.filter((link) => link.url);

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
            {links
              .filter((link) => link.id === "github")
              .map((link) => (
                <Button
                  key={link.id}
                  href={link.url}
                  variant="secondary"
                  external
                  icon={<GitHubIcon size={18} />}
                >
                  {link.label}
                </Button>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
