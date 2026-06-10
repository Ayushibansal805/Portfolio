import { motion } from "framer-motion";
import SkillGalaxy from "../components/SkillGalaxy";

export default function Skills() {
  return (
    <motion.section
    id="skills"
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
      <h2
        className="
        text-center
        text-6xl
        font-bold
        mb-16
        "
      >
        Skills Galaxy
      </h2>

      <div className="h-[800px]">
        <SkillGalaxy />
      </div>
    </motion.section>
  );
}