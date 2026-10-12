import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { navLinks } from "./data/socialLinks";
import { useActiveSection } from "./hooks/useActiveSection";
import { useReveal } from "./hooks/useReveal";
import About from "./sections/About";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Hero from "./sections/Hero";
import Languages from "./sections/Languages";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

const sectionIds = navLinks.map((link) => link.id);

export default function App() {
  const activeSection = useActiveSection(sectionIds);
  const [showTop, setShowTop] = useState(false);
  useReveal();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar activeSection={activeSection} />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Languages />
        <Contact />
      </main>
      <Footer />
      <a
        className={`to-top${showTop ? " is-shown" : ""}`}
        href="#top"
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
      >
        <ArrowUp size={20} aria-hidden="true" />
      </a>
    </>
  );
}
