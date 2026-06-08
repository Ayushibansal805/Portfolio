import { motion } from "framer-motion";
import SkillGalaxy from "../components/SkillGalaxy";

export default function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen"
    >
      <div className="text-center pt-12">

        <h2 className="text-5xl font-bold">
          Skills Galaxy
        </h2>

      </div>

      <div className="h-[80vh]">
        <SkillGalaxy />
      </div>

    </motion.section>
  );
}