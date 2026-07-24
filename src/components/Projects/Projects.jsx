import { motion } from "framer-motion";
import "./Projects.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="projects">

      {/* Background Glow */}

      <div className="projects-blur blur-left"></div>
      <div className="projects-blur blur-right"></div>

      <div className="projects-container">

        {/* Heading */}

        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          <span className="projects-subtitle">
            MY PROJECTS
          </span>

          <h2 className="projects-title">
            Featured Projects
          </h2>

          <p className="projects-description">
            These are some of the projects that showcase my
            programming knowledge, web development skills and
            passion for building modern applications.
          </p>

        </motion.div>

        {/* Projects Grid */}

        <div className="projects-grid">

          <ProjectCard
            title="Personal Portfolio"
            description="Modern React Portfolio with Glassmorphism UI, Framer Motion animations and fully responsive design."
            github="https://github.com/Mukeshyadav77"
            tech="React • CSS • Framer Motion"
          />

          <ProjectCard
            title="Student Management System"
            description="A complete student management application for storing and managing student records."
            github="https://github.com/Mukeshyadav77"
            tech="Python • MySQL"
          />

          <ProjectCard
            title="Weather App"
            description="Weather forecast application using API integration with responsive interface."
            github="https://github.com/Mukeshyadav77"
            tech="React • API"
          />

          <ProjectCard
            title="Calculator"
            description="Beautiful calculator application with modern UI and responsive design."
            github="https://github.com/Mukeshyadav77"
            tech="HTML • CSS • JavaScript"
          />

          <ProjectCard
            title="Library Management"
            description="Library Management System for managing books, users and borrowing records."
            github="https://github.com/Mukeshyadav77"
            tech="C++"
          />

          <ProjectCard
            title="Coming Soon..."
            description="More exciting projects will be added very soon."
            github="https://github.com/Mukeshyadav77"
            tech="Stay Tuned 🚀"
          />

        </div>

      </div>

    </section>
  );
}

export default Projects;