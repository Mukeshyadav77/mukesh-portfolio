import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaSchool,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import "./Education.css";

function Education() {
  return (
    <section id="education" className="education">

      {/* Background Blur */}

      <div className="education-blur blur-left"></div>
      <div className="education-blur blur-right"></div>

      <div className="education-container">

        {/* Heading */}

        <motion.div
          className="education-heading"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          <span className="education-subtitle">
            EDUCATION
          </span>

          <h2 className="education-title">
            My Academic Journey
          </h2>

          <p className="education-description">
            My educational journey has helped me build
            strong technical knowledge and practical
            problem-solving skills.
          </p>

        </motion.div>

        {/* Timeline */}

        <div className="education-timeline">

          {/* College */}

          <motion.div
            className="education-card"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <div className="education-icon">
              <FaGraduationCap />
            </div>

            <div className="education-content">

              <h3>
                Bachelor of Technology
              </h3>

              <h4>
                Computer Science Engineering
              </h4>

              <p>
                Symbiosis Institute of Technology,
                Pune
              </p>

              <div className="education-info">

                <span>
                  <FaCalendarAlt />
                  2025 - 2029
                </span>

                <span>
                  <FaMapMarkerAlt />
                  Pune, India
                </span>

              </div>

            </div>

          </motion.div>

          {/* School */}

          <motion.div
            className="education-card"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <div className="education-icon">
              <FaSchool />
            </div>

            <div className="education-content">

              <h3>
                Higher Secondary (+2)
              </h3>

              <h4>
                Science Stream
              </h4>

              <p>
                Completed with A Division
              </p>

              <div className="education-info">

                <span>
                  <FaCalendarAlt />
                  Completed
                </span>

                <span>
                  <FaMapMarkerAlt />
                  Nepal
                </span>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Education;