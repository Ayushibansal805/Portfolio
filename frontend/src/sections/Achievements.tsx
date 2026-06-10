import { achievements } from "../data/achievements";
import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <section id="achievements">

      {achievements.map(
        (achievement, index) => (

          <section
            key={achievement.title}
            className="
            min-h-screen
            flex
            items-center
            justify-center
            px-8
            relative
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 150,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                amount: 0.5,
              }}
              transition={{
                duration: 1,
              }}
              className="
              max-w-5xl
              text-center
              "
            >

              {/* Achievement Number */}

              <h1
                className="
                text-[10rem]
                md:text-[14rem]
                font-black
                text-cyan-500/10
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                pointer-events-none
                "
              >
                0{index + 1}
              </h1>

              {/* Icon */}

              <div
                className="
                text-8xl
                mb-10
                relative
                z-10
                "
              >
                {achievement.icon}
              </div>

              {/* Title */}

              <h2
                className="
                text-5xl
                md:text-7xl
                font-black
                mb-8
                relative
                z-10
                "
              >
                {achievement.title}
              </h2>

              {/* Description */}

              <p
                className="
                text-xl
                md:text-2xl
                text-gray-300
                max-w-3xl
                mx-auto
                leading-relaxed
                relative
                z-10
                "
              >
                {achievement.description}
              </p>

            </motion.div>
          </section>
        )
      )}

    </section>
  );
}