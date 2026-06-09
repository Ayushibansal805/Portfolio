import Hero3D from "../components/Hero3D";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useEffect } from "react";
import gsap from "gsap";

export default function Hero() {

  useEffect(() => {
    gsap.from(".hero-title", {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });
  }, []);

  return (
      <section
  className="
  min-h-screen
  grid
  lg:grid-cols-2
  gap-16
  items-center
  px-8
  lg:px-24
  bg-gradient-to-b
  from-black
  via-slate-950
  to-black
  "
>
      <motion.div
      className="max-w-2xl"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-cyan-400 mb-4">
          Welcome to my universe 👋
        </p>

        <h1
          className="
hero-title
text-8xl
lg:text-[9rem]
font-black
leading-none
bg-gradient-to-r
from-cyan-300
via-blue-400
to-purple-500
bg-clip-text
text-transparent
"
        >
          Ayushi
        </h1>

        <h2 className="text-6xl md:text-[7rem] font-black">
          Bansal
        </h2>

        <div className="mt-6 text-xl text-gray-300">
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

        <p className="mt-8 max-w-xl text-gray-400">
          Building intelligent systems,
          contributing to open source,
          and creating impactful software.
        </p>

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

        <div className="flex gap-4 mt-10">

          <a
            href="#projects"
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
            View Projects
          </a>

          <a
            href="#contact"
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
            Contact Me
          </a>

        </div>
      </motion.div>

      <div
  className="
  w-full
  h-[850px]
  flex
  items-center
  justify-center
  "
>
  <Hero3D />
</div>
    </section>
  );
}