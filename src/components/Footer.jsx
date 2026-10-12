import { navLinks, socialLinks } from "../data/socialLinks";
import { externalLinkProps } from "../utils/externalLinks";

export default function Footer() {
  const year = new Date().getFullYear();
  const links = socialLinks.filter((link) => link.url);

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__name">Leonita Ajdari</p>
          <p className="footer__role">Front-End Developer in training</p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="footer__links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="footer__links" aria-label="Social profiles">
          {links.map((link) => (
            <li key={link.id}>
              <a href={link.url} {...externalLinkProps}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="container footer__copy">
        © {year} Leonita Ajdari. All rights reserved.
      </p>
    </footer>
  );
}
