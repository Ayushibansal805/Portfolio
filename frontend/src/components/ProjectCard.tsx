import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
};

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      whileHover={{
        scale: 1.05,
        rotateY: 8,
        rotateX: 4,
      }}
      viewport={{ once: true }}
      className="
      relative
      overflow-hidden
      bg-white/5
      backdrop-blur-xl
      border
      border-cyan-500/20
      rounded-3xl
      p-8
      shadow-2xl
      transition-all
      duration-300
      hover:border-cyan-400/70
      hover:shadow-cyan-500/20
      "
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Glow Effect */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-br
        from-cyan-500/10
        via-transparent
        to-blue-500/10
        pointer-events-none
        "
      />

      <div className="relative z-10">
        <h3
          className="
          text-3xl
          font-bold
          bg-gradient-to-r
          from-cyan-300
          to-blue-400
          bg-clip-text
          text-transparent
          "
        >
          {project.title}
        </h3>

        <p className="text-gray-300 mt-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="
              px-3
              py-1
              rounded-full
              bg-cyan-500/15
              border
              border-cyan-500/30
              text-cyan-300
              text-sm
              "
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-8">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
            px-5
            py-2
            rounded-xl
            bg-cyan-500
            text-black
            font-semibold
            hover:scale-105
            transition
            "
          >
            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="
            px-5
            py-2
            rounded-xl
            border
            border-white/30
            hover:border-cyan-400
            hover:text-cyan-400
            transition
            "
          >
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}