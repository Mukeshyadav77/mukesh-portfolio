import { motion } from "framer-motion";
import "./Skills.css";

import SkillCard from "./SkillCard";

function Skills() {
  return (
    <section id="skills" className="skills">

      {/* Background Glow */}

      <div className="skills-blur blur-left"></div>
      <div className="skills-blur blur-right"></div>

      <div className="skills-container">

        {/* Heading */}

        <motion.div
          className="skills-heading"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          <span className="skills-subtitle">
            MY SKILLS
          </span>

          <h2 className="skills-title">
            Technologies I Work With
          </h2>

          <p className="skills-description">
            I enjoy learning modern technologies and building
            responsive web applications with clean UI,
            efficient code and great user experience.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="skills-grid">

          <SkillCard
            title="C"
            percent="90%"
          />

          <SkillCard
            title="C++"
            percent="85%"
          />

          <SkillCard
            title="Python"
            percent="88%"
          />

          <SkillCard
            title="JavaScript"
            percent="82%"
          />

          <SkillCard
            title="React"
            percent="80%"
          />

          <SkillCard
            title="HTML & CSS"
            percent="95%"
          />

        </div>

      </div>

    </section>
  );
}

export default Skills;