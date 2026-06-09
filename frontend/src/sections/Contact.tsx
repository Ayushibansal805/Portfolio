import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
      min-h-screen
      flex
      flex-col
      justify-center
      items-center
      px-8
      "
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="
        text-6xl
        font-bold
        "
      >
        Mission Contact
      </motion.h2>

      <p
        className="
        text-gray-400
        mt-6
        text-center
        max-w-xl
        "
      >
        Interested in AI, open source,
        hackathons, internships or
        collaborations? Let's talk.
      </p>

      <div
        className="
mt-10
flex
flex-row
gap-6
flex-wrap
justify-center
"
      >
        <a
          href="mailto:ayushi.bansal_cs.h24@gla.ac.in"
          className="
          px-6
          py-3
          bg-cyan-500
          text-black
          rounded-xl
          font-bold
          "
        >
          Email Me
        </a>

        <a
          href="https://github.com/Ayushibansal805"
          target="_blank"
          rel="noopener noreferrer"
          className="
          px-6
          py-3
          border
          border-cyan-500
          rounded-xl
          text-center
          "
        >
          GitHub Profile
        </a>
      </div>
    </section>
  );
}