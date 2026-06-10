import ProjectUniverse from "../components/ProjectUniverse";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { usePortfolio } from "../context/PortfolioContext";
import { motion } from "framer-motion";
export default function Projects() {
  const {
  recruiterMode,
} = usePortfolio();
  return (
    <motion.section
    id="projects"
  initial={{
    opacity: 0,
    y: 100,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{
    once: true,
  }}
  transition={{
    duration: 0.8,
  }}
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

    </motion.section>
  );
}