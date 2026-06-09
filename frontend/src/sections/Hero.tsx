import Hero3D from "../components/Hero3D";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {
  usePortfolio,
} from "../context/PortfolioContext";
export default function Hero() {

  
  const {
  recruiterMode,
} = usePortfolio();
  return (
    <section
      className="
      min-h-screen
      grid
      lg:grid-cols-2
      gap-12
      items-center
      px-8
      lg:px-24
      relative
      overflow-hidden
      bg-gradient-to-b
      from-black
      via-slate-950
      to-black
      "
    >

      {/* LEFT SIDE */}
      <motion.div
        className="
        relative
        z-20
        max-w-2xl
        "
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >

        <p className="text-cyan-400 mb-6 text-lg">
          Welcome to my universe 👋
        </p>

        <div className="leading-none">

          <motion.h1
  initial={{
    opacity: 0,
    x: -100,
  }}
  animate={{
    opacity: 1,
    x: 0,
  }}
  transition={{
    duration: 1,
  }}
  className="
  text-7xl
  md:text-8xl
  lg:text-[9rem]
  font-black
  bg-gradient-to-r
  from-cyan-300
  via-blue-400
  to-purple-500
  bg-clip-text
  text-transparent
  "
>
            AYUSHI
          </motion.h1>

          <h1
            className="
            text-7xl
            md:text-8xl
            lg:text-[9rem]
            font-black
            text-white
            "
          >
            BANSAL
          </h1>

        </div>

        <div className="mt-8 text-2xl text-gray-300 font-medium">
          <TypeAnimation
            sequence={[
              "AI Developer",
              1500,

              "Building SETU",
              1500,

              "Creator of Sentilytics",
              1500,

              "Building Drishti",
              1500,

              "GSoC 2027 Aspirant",
              1500,
            ]}
            repeat={Infinity}
          />
        </div>

        <p
          className="
          mt-8
          text-lg
          max-w-xl
          text-gray-400
          leading-relaxed
          "
        >
          Building intelligent systems,
          contributing to open source,
          and creating impactful software.
        </p>

        {/* Featured Projects */}

        <div className="mt-8 flex gap-3 flex-wrap">

          <span
            className="
            px-4 py-2
            rounded-full
            bg-cyan-500/10
            border border-cyan-500/30
            text-cyan-300
            "
          >
            🚀 SETU
          </span>

          <span
            className="
            px-4 py-2
            rounded-full
            bg-purple-500/10
            border border-purple-500/30
            text-purple-300
            "
          >
            🧠 Sentilytics
          </span>

          <span
            className="
            px-4 py-2
            rounded-full
            bg-pink-500/10
            border border-pink-500/30
            text-pink-300
            "
          >
            👁 Drishti
          </span>

        </div>

        {/* Tech Stack */}

        <div className="flex gap-3 mt-8 flex-wrap">

          {[
            "React",
            "Python",
            "FastAPI",
            "MongoDB",
            "AI",
            "Three.js",
          ].map((item) => (
            <span
              key={item}
              className="
              px-4
              py-2
              rounded-full
              bg-cyan-500/10
              border
              border-cyan-500/30
              text-cyan-300
              "
            >
              {item}
            </span>
          ))}

        </div>

        {/* Buttons */}

        <div className="flex gap-4 mt-10 flex-wrap">

          <a
            href="#projects"
            className="
            px-8
            py-4
            rounded-xl
            bg-cyan-500
            text-black
            font-bold
            hover:scale-105
            transition
            "
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="
            px-8
            py-4
            rounded-xl
            border
            border-cyan-500
            hover:bg-cyan-500/10
            transition
            "
          >
            Contact Me
          </a>

        </div>

      </motion.div>

      {/* RIGHT SIDE */}

      <div
        className="
        relative
        z-10
        w-full
        h-[700px]
        flex
        items-center
        justify-center
        "
      >
        {!recruiterMode && (
  <Hero3D />
)}
      </div>

    </section>
  );
}