import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/projects";

export default function Projects() {
  const featured = projects.filter((project) => project.featured);

  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading id="projects-title" eyebrow="01 / Projects" title="Selected projects">
          Websites I’ve built and deployed. Open a folder to see its links.
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
