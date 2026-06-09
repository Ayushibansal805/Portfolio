import ProjectUniverse from "../components/ProjectUniverse";

export default function Projects() {
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

      <div className="h-[700px]">
        <ProjectUniverse />
      </div>

    </section>
  );
}