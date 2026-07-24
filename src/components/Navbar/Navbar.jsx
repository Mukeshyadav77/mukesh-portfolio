import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Education", link: "#education" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: .6 }}
    >

      <div className="navbar-container">

        {/* Logo */}

        <a href="#home" className="logo">

          Mukesh<span>Yadav</span>

        </a>

        {/* Desktop Menu */}

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

          {navLinks.map((item) => (

            <li key={item.name}>

              <a
                href={item.link}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>

            </li>

          ))}

        </ul>

        {/* Resume */}

        <a
          href="/resume.pdf"
          download
          className="resume-button"
        >
          Resume
        </a>

        {/* Mobile */}

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          {menuOpen ? <FaTimes /> : <FaBars />}

        </div>

      </div>

    </motion.nav>
  );
}

export default Navbar;