import { motion } from "framer-motion";
import { FaGithub, FaArrowRight } from "react-icons/fa";

function ProjectCard({
  title,
  description,
  github,
  tech,
}) {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
      }}
    >
      {/* Top Image */}

      <div className="project-image">

        <div className="project-overlay">

          <span>Preview</span>

        </div>

      </div>

      {/* Content */}

      <div className="project-content">

        <h3>{title}</h3>

        <p>{description}</p>

        <span className="project-tech">

          {tech}

        </span>

        <div className="project-buttons">

          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="github-btn"
          >
            <FaGithub />

            GitHub
          </a>

          <button className="live-btn">

            Live Demo

            <FaArrowRight />

          </button>

        </div>

      </div>

    </motion.div>
  );
}

export default ProjectCard;