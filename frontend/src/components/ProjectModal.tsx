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
      bg-black/80
      backdrop-blur-md
      flex
      justify-center
      items-center
      z-[9999]
      "
    >
      <div
        className="
        max-w-2xl
        w-[90%]
        bg-zinc-900
        border
        border-cyan-500/30
        rounded-3xl
        p-8
        "
      >
        <h2
          className="
          text-5xl
          font-bold
          text-cyan-400
          "
        >
          {project.title}
        </h2>

        <p className="mt-6 text-gray-300">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 mt-6">
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
              "
            >
              {item}
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
            py-3
            bg-cyan-500
            text-black
            rounded-xl
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
            px-5
            py-3
            border
            border-cyan-500
            rounded-xl
            "
          >
            Live Demo
          </a>

        </div>

        <button
          onClick={onClose}
          className="
          mt-8
          text-red-400
          "
        >
          Close
        </button>

      </div>
    </div>
  );
}