import { socialLinks } from "../data/socialLinks";
import { externalLinkProps } from "../utils/externalLinks";
import SocialIcon from "./SocialIcon";

export default function Footer() {
  const year = new Date().getFullYear();
  const links = socialLinks.filter((link) => link.url);

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {year} Leonita Ajdari</p>

        <div className="footer__end">
          {links.length ? (
            <ul className="footer__social" aria-label="Social profiles">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    className="icon-link icon-link--small"
                    href={link.url}
                    aria-label={`${link.label} (opens in a new tab)`}
                    {...externalLinkProps}
                  >
                    <SocialIcon name={link.id} size={18} />
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
          <a href="#top" className="footer__top">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
