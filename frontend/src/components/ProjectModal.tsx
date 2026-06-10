import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
};

type Props = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({
  project,
  onClose,
}: Props) {
  return (
    <div
      className="
      fixed
      inset-0
      bg-black/70
      backdrop-blur-md
      z-[9999]
      "
      onClick={onClose}
    >
      <motion.div
        initial={{ x: 600 }}
        animate={{ x: 0 }}
        exit={{ x: 600 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        onClick={(e) =>
          e.stopPropagation()
        }
        className="
        absolute
        right-0
        top-0
        h-screen
        w-full
        md:w-[550px]
        bg-zinc-950
        border-l
        border-cyan-500/30
        p-8
        overflow-y-auto
        shadow-[0_0_50px_rgba(6,182,212,0.25)]
        "
      >
        {/* Header */}

        <div className="flex justify-between items-start">

          <div>
            <p className="text-cyan-400 text-sm tracking-widest">
              MISSION FILE
            </p>

            <h2
              className="
              text-5xl
              font-black
              text-white
              mt-2
              "
            >
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="
            text-gray-400
            hover:text-red-400
            text-3xl
            transition
            "
          >
            ✕
          </button>
        </div>

        {/* Divider */}

        <div
          className="
          h-[1px]
          bg-cyan-500/20
          my-8
          "
        />

        {/* Description */}

        <div>
          <h3
            className="
            text-cyan-400
            font-bold
            mb-4
            "
          >
            PROJECT OVERVIEW
          </h3>

          <p
            className="
            text-gray-300
            leading-relaxed
            "
          >
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}

        <div className="mt-10">

          <h3
            className="
            text-cyan-400
            font-bold
            mb-4
            "
          >
            TECH STACK
          </h3>

          <div className="flex flex-wrap gap-3">
            {project.tech.map((item) => (
              <span
                key={item}
                className="
                px-4
                py-2
                rounded-full
                bg-cyan-500/10
                border
                border-cyan-500/20
                text-cyan-300
                "
              >
                {item}
              </span>
            ))}
          </div>

        </div>

        {/* Buttons */}

        <div
          className="
          flex
          gap-4
          mt-12
          flex-wrap
          "
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
            px-6
            py-3
            rounded-xl
            bg-cyan-500
            text-black
            font-bold
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
            px-6
            py-3
            rounded-xl
            border
            border-cyan-500
            hover:bg-cyan-500/10
            transition
            "
          >
            Live Demo
          </a>
        </div>

        {/* Footer */}

        <div
          className="
          mt-16
          text-xs
          tracking-[0.3em]
          text-gray-600
          uppercase
          "
        >
          AYUSHI BANSAL • PROJECT UNIVERSE
        </div>
      </motion.div>
    </div>
  );
}