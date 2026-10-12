// Configure your public profiles here.
// A link with url: null is hidden everywhere, so nothing fake is ever published.
// priority "primary" links are shown as buttons, "secondary" ones as small icons.
//
// To add one, paste the exact profile URL, e.g.
//   url: "https://www.linkedin.com/in/your-profile"

export const email = "leonita.ajdari@gmail.com";

export const socialLinks = [
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/leonitaajdari",
    priority: "primary",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/leonita-ajdari-743577345/",
    priority: "primary",
  },
  {
    id: "facebook",
    label: "Facebook",
    url: "https://www.facebook.com/leonita.ajdari.2025",
    priority: "secondary",
  },
  {
    id: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/leonitaajd/",
    priority: "secondary",
  },
];

// A "Download CV" button appears only when this points to a real PDF,
// e.g. "/resume/Leonita-Ajdari-CV.pdf" (file placed in public/resume/).
// Use a version without date of birth, home address or phone number.
export const cvUrl = null;

export const navLinks = [
  { id: "top", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
