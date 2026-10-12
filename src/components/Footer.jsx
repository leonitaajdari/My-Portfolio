import { socialLinks } from "../data/socialLinks";
import { externalLinkProps } from "../utils/externalLinks";

export default function Footer() {
  const year = new Date().getFullYear();
  const links = socialLinks.filter((link) => link.url);

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {year} Leonita Ajdari
        </p>
        <ul className="footer__links" aria-label="Social profiles">
          <li>
            <a href="#top">Back to top</a>
          </li>
          {links.map((link) => (
            <li key={link.id}>
              <a href={link.url} {...externalLinkProps}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
