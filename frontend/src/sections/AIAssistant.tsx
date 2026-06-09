import AIChat from "../components/AIChat";

export default function AIAssistant() {
  return (
    <section
      id="ai"
      className="
      min-h-screen
      py-32
      px-8
      "
    >
      <div className="max-w-5xl mx-auto">

        <h2
          className="
          text-6xl
          font-black
          text-center
          "
        >
          AI Assistant
        </h2>

        <p
          className="
          text-center
          text-gray-400
          mt-4
          mb-12
          "
        >
          Ask me anything about my
          projects, skills and goals.
        </p>

        <AIChat />

      </div>
    </section>
  );
}