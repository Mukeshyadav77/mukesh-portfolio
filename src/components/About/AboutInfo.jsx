import { motion } from "framer-motion";
import { FaGraduationCap, FaLocationDot } from "react-icons/fa6";
import { HiAcademicCap } from "react-icons/hi2";

function AboutInfo() {
  return (
    <motion.div
      className="about-info"
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <span className="about-tag">
        Who Am I?
      </span>

      <h2 className="about-name">
        I'm Mukesh Yadav
      </h2>

      <p className="about-text">
        I am a passionate Computer Science student with a strong
        interest in Web Development, Programming and Problem Solving.
        I enjoy building modern and responsive websites while
        continuously learning new technologies.
      </p>

      <p className="about-text">
        Currently pursuing my Bachelor's degree in Computer Science
        at Symbiosis Institute of Technology, Pune. My goal is to
        become a Full Stack Developer and build innovative software
        solutions.
      </p>

      <div className="about-details">

        <div className="about-detail">
          <FaGraduationCap className="about-icon" />

          <div>
            <h4>Education</h4>
            <p>B.Tech Computer Science</p>
          </div>
        </div>

        <div className="about-detail">
          <HiAcademicCap className="about-icon" />

          <div>
            <h4>College</h4>
            <p>Symbiosis Institute of Technology</p>
          </div>
        </div>

        <div className="about-detail">
          <FaLocationDot className="about-icon" />

          <div>
            <h4>Location</h4>
            <p>Inaruwa-04, Sunsari, Nepal</p>
          </div>
        </div>

      </div>

      <a
        href="/resume.pdf"
        download
        className="about-btn"
      >
        Download Resume
      </a>

    </motion.div>
  );
}

export default AboutInfo;