import { GitHubCalendar } from "react-github-calendar";
import GithubStats from "../components/GithubStats";

export default function Github() {
  return (
    <section
      id="github"
      className="min-h-screen px-6 py-20 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold mb-8 text-center">
          Open Source Station
        </h2>

        <p className="text-center text-gray-400 mb-12">
          My open-source journey and coding consistency.
        </p>

        <div className="bg-zinc-900 p-6 rounded-2xl overflow-x-auto">
          <GitHubCalendar
            username="Ayushibansal805"
            fontSize={14}
          />
        </div>

        <GithubStats />

        <div className="text-center mt-10">
          <a
            href="https://github.com/Ayushibansal805"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-white text-black rounded-xl font-semibold hover:scale-105 transition"
          >
            Visit GitHub Profile
          </a>
        </div>

      </div>
    </section>
  );
}