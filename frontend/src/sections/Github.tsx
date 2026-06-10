import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
export default function Github() {
  return (
    <motion.section
    id="github"
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
      <div className="max-w-7xl mx-auto">

        <h2
          className="
          text-center
          text-6xl
          font-bold
          mb-6
          "
        >
          Open Source Station
        </h2>

        <p
          className="
          text-center
          text-gray-400
          mb-16
          "
        >
          Tracking my coding journey and open-source contributions.
        </p>

        <div
          className="
          bg-zinc-900/60
          backdrop-blur-xl
          border
          border-cyan-500/20
          rounded-3xl
          p-8
          overflow-x-auto
          "
        >
          <GitHubCalendar
            username="Ayushibansal805"
            fontSize={16}
          />
        </div>

        <div className="text-center mt-12">

          <a
            href="https://github.com/Ayushibansal805"
            target="_blank"
            rel="noopener noreferrer"
            className="
            inline-block
            px-8
            py-4
            bg-cyan-500
            text-black
            font-bold
            rounded-2xl
            hover:scale-105
            transition
            "
          >
            Visit GitHub Profile
          </a>

        </div>

      </div>
    </motion.section>
  );
}