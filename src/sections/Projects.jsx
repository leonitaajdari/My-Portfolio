import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/projects";

export default function Projects() {
  const featured = projects.filter((project) => project.featured);

  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading id="projects-title" eyebrow="Projects" title="Featured projects">
          Real projects I’ve built and deployed. Each one links to the live
          site, and to the source where it’s public.
        </SectionHeading>

        <div className="projects">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
