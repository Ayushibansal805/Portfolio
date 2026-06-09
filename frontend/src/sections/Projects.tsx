import ProjectUniverse from "../components/ProjectUniverse";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { usePortfolio } from "../context/PortfolioContext";
export default function Projects() {
  const {
  recruiterMode,
} = usePortfolio();
  return (
    <section
      id="projects"
      className="
      min-h-screen
      py-32
      bg-gradient-to-b
      from-black
      via-purple-950/10
      to-black
      "
    >
      <div className="mb-16">

        <h2
          className="
          text-center
          text-6xl
          font-bold
          "
        >
          Project Universe
        </h2>

        <p
          className="
          text-center
          text-gray-400
          mt-6
          "
        >
          Explore my flagship AI projects.
        </p>

      </div>

      {!recruiterMode && (
  <div className="h-[700px]">
    <ProjectUniverse />
  </div>
)}

{recruiterMode && (
  <div
    className="
    max-w-6xl
    mx-auto
    grid
    md:grid-cols-3
    gap-8
    px-8
    "
  >
    {projects.map((project) => (
      <ProjectCard
        key={project.title}
        project={project}
      />
    ))}
  </div>
)}

    </section>
  );
}