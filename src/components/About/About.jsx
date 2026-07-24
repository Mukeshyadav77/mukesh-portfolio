import { motion } from "framer-motion";
import "./About.css";

import AboutInfo from "./AboutInfo";
import AboutCards from "./AboutCards";

function About() {
  return (
    <section id="about" className="about">

      {/* Background Glow */}

      <div className="about-blur blur-left"></div>
      <div className="about-blur blur-right"></div>

      <div className="about-container">

        {/* Section Heading */}

        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          <span className="section-subtitle">
            ABOUT ME
          </span>

          <h2 className="section-title">
            Know Who I Am
          </h2>

          <p className="section-description">
            I am a Computer Science student who loves creating
            modern websites, solving programming problems and
            continuously learning new technologies.
          </p>

        </motion.div>

        {/* Content */}

        <div className="about-content">

          <AboutInfo />

          <AboutCards />

        </div>

      </div>

    </section>
  );
}

export default About;