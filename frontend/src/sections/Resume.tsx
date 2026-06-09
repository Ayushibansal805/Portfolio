import Terminal from "../components/Terminal";

export default function Resume() {
  return (
    <section
      id="resume"
      className="
      min-h-screen
      px-8
      py-20
      "
    >
      <div className="w-full min-h-screen">

        <h2
          className="
          text-5xl
          font-bold
          text-center
          "
        >
          AI Command Terminal
        </h2>

        <p
          className="
          text-center
          text-gray-400
          mt-4
          mb-12
          "
        >
          Interact with my profile
          like an AI assistant.
        </p>
        <div className="text-center mb-8">

  <a
    href="/resume.pdf"
    download
    className="
    px-6 py-3
    rounded-xl
    bg-cyan-500
    text-black
    font-semibold
    "
  >
    Download Resume
  </a>

</div>
        <Terminal />

      </div>
    </section>
  );
}