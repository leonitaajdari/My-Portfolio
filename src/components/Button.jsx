import { externalLinkProps } from "../utils/externalLinks";

// A link styled as a button. variant: "primary" | "secondary" | "ghost"
export default function Button({
  href,
  variant = "primary",
  external = false,
  icon = null,
  children,
  ...rest
}) {
  return (
    <a
      className={`btn btn--${variant}`}
      href={href}
      {...(external ? externalLinkProps : {})}
      {...rest}
    >
      {icon}
      <span>{children}</span>
    </a>
  );
}
