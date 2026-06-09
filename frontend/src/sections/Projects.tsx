import ProjectUniverse from "../components/ProjectUniverse";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-20"
    >
      <div className="mb-12">

        <h2
          className="
          text-center
          text-5xl
          font-bold
          "
        >
          Project Universe
        </h2>

        <p
          className="
          text-center
          text-gray-400
          mt-4
          "
        >
          Explore my AI-powered projects.
        </p>

      </div>

      <div className="h-[1000px]">
        <ProjectUniverse />
      </div>

    </section>
  );
}