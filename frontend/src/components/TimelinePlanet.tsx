import { motion } from "framer-motion";

export default function TimelinePlanet({
  year,
  title,
  description,
}: any) {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        y: -10,
      }}
      className="
      flex
      flex-col
      items-center
      text-center
      "
    >
      <div
        className="
        w-24
        h-24
        rounded-full
        bg-cyan-500
        shadow-[0_0_60px_#00ffff]
        "
      />

      <h3
        className="
        text-3xl
        font-bold
        mt-6
        "
      >
        {year}
      </h3>

      <h4
        className="
        text-cyan-400
        mt-2
        "
      >
        {title}
      </h4>

      <p
        className="
        text-gray-400
        mt-3
        max-w-[250px]
        "
      >
        {description}
      </p>
    </motion.div>
  );
}