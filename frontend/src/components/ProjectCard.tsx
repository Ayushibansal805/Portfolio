import { motion } from "framer-motion";

export default function ProjectCard({
  project,
}: any) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -10,
      }}
      className="
      bg-black/40
      backdrop-blur-xl
      border
      border-cyan-500/30
      rounded-3xl
      p-8
      shadow-xl
      "
    >
      <h3
        className="
        text-3xl
        font-bold
        mb-4
        "
      >
        {project.title}
      </h3>

      <p className="text-gray-400">
        {project.description}
      </p>

      <div
        className="
        flex
        flex-wrap
        gap-2
        mt-6
        "
      >
        {project.tech.map(
          (tech: string) => (
            <span
              key={tech}
              className="
              px-3
              py-1
              rounded-full
              bg-cyan-500/10
              border
              border-cyan-500/20
              text-cyan-300
              text-sm
              "
            >
              {tech}
            </span>
          )
        )}
      </div>

      <div
        className="
        flex
        gap-4
        mt-8
        "
      >
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="
          px-4
          py-2
          rounded-xl
          bg-cyan-500
          text-black
          font-bold
          "
        >
          GitHub
        </a>

        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="
          px-4
          py-2
          rounded-xl
          border
          border-cyan-500
          "
        >
          Demo
        </a>
      </div>
    </motion.div>
  );
}