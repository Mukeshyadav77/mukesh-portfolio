import { motion } from "framer-motion";

function SkillCard({ title, percent }) {
  return (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="skill-header">
        <h3>{title}</h3>
        <span>{percent}</span>
      </div>

      <div className="progress-bar">

        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          whileInView={{ width: percent }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        />

      </div>

    </motion.div>
  );
}

export default SkillCard;