import ProjectUniverse from "../components/ProjectUniverse";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen"
    >
      <div className="pt-20">

        <h2
          className="
          text-center
          text-5xl
          font-bold
          "
        >
          Projects Universe
        </h2>

        <p
          className="
          text-center
          text-gray-400
          mt-4
          "
        >
          AI solutions with real-world impact.
        </p>

      </div>

      <div className="h-[600px]">
        <ProjectUniverse />
      </div>

      <div
        className="
        max-w-7xl
        mx-auto
        px-8
        pb-20
        grid
        md:grid-cols-3
        gap-8
        "
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
          />
        ))}
      </div>

    </section>
  );
}