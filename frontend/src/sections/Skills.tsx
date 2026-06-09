import { motion } from "framer-motion";
import SkillGalaxy from "../components/SkillGalaxy";

export default function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="
      min-h-screen
      py-24
      bg-gradient-to-b
      from-black
      via-cyan-950/10
      to-black
      "
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