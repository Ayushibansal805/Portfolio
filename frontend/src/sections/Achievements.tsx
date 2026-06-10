import { achievements } from "../data/achievements";
import AchievementCard from "../components/AchievementCard";
import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative"
    >
      {/* Vertical Timeline */}

      <div
        className="
        fixed
        left-1/2
        top-0
        h-full
        w-[2px]
        bg-cyan-500/10
        -translate-x-1/2
        pointer-events-none
        "
      />

      {/* Heading */}

      <div
        className="
        text-center
        py-24
        px-8
        "
      >
        <h2
          className="
          text-6xl
          font-black
          mb-6
          "
        >
          Mission Achievements
        </h2>

        <p
          className="
          text-gray-400
          max-w-2xl
          mx-auto
          "
        >
          Professional journey through
          Cyber Security, AI, Machine Learning,
          Open Source and Innovation.
        </p>
      </div>

      {/* Scroll Story */}

      {achievements.map(
        (achievement, index) => (
          <motion.div
            key={achievement.title}
            initial={{
              opacity: 0,
              x:
                index % 2 === 0
                  ? -200
                  : 200,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.5,
            }}
            transition={{
              duration: 1,
            }}
            className="
            min-h-screen
            flex
            items-center
            justify-center
            px-8
            "
          >
            <AchievementCard
              achievement={achievement}
            />
          </motion.div>
        )
      )}
    </section>
  );
}