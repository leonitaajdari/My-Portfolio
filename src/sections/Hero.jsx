import { ArrowDown, ArrowRight, Mail } from "lucide-react";
import Button from "../components/Button";
import ImageStreamHero from "../components/ImageStreamHero";
import SocialIcon from "../components/SocialIcon";
import { heroImages } from "../data/heroImages";
import { socialLinks } from "../data/socialLinks";

export default function Hero() {
  const github = socialLinks.find((link) => link.id === "github" && link.url);

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <ImageStreamHero className="hero__stage" images={heroImages}>
        <div className="hero__scrim" aria-hidden="true" />

        <div className="container hero__content">
          <div className="hero__top">
            <p className="eyebrow hero__enter" style={{ "--i": 0 }}>
              Applied Programming student · Mother Teresa University
            </p>
            <h1 id="hero-title" className="hero__title hero__enter" style={{ "--i": 1 }}>
              Hi, I’m <span className="gradient-text">Leonita</span>
            </h1>
          </div>

          <div className="hero__bottom">
            <p className="hero__lead hero__enter" style={{ "--i": 2 }}>
              An aspiring frontend developer passionate about building modern,
              intuitive web experiences.
            </p>

            <div className="hero__actions hero__enter" style={{ "--i": 3 }}>
              <Button
                href="#projects"
                icon={<ArrowRight size={18} aria-hidden="true" />}
              >
                View My Projects
              </Button>
              <Button
                href="#contact"
                variant="secondary"
                icon={<Mail size={18} aria-hidden="true" />}
              >
                Contact Me
              </Button>
              {github ? (
                <Button
                  href={github.url}
                  variant="secondary"
                  external
                  icon={<SocialIcon name="github" size={18} />}
                >
                  GitHub
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </ImageStreamHero>

      <a className="hero__scroll" href="#projects" aria-label="Scroll to Projects">
        <ArrowDown size={20} aria-hidden="true" />
      </a>
    </section>
  );
}
