import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import HeroButtons from "./HeroButtons";
import HeroSocial from "./HeroSocial";

function HeroLeft() {
  return (
    <motion.div
      className="hero-left"
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Greeting */}

      <span className="hero-greeting">
        👋 Hello, I'm
      </span>

      {/* Name */}

      <h1 className="hero-title">
        Mukesh
        <br />
        <span>Yadav</span>
      </h1>

      {/* Typewriter */}

      <h2 className="hero-role">
        <Typewriter
          words={[
            "Computer Science Student",
            "React Developer",
            "Python Programmer",
            "Frontend Developer",
            "Future Full Stack Developer",
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={45}
          delaySpeed={1500}
        />
      </h2>

      {/* Description */}

      <p className="hero-description">
        Passionate about building modern websites,
        learning new technologies and creating
        beautiful user experiences with clean,
        responsive and interactive interfaces.
      </p>

      {/* Skills */}

      <div className="hero-skills">

        <span>C</span>

        <span>C++</span>

        <span>Python</span>

        <span>React</span>

        <span>JavaScript</span>

      </div>

      {/* Location */}

      <div className="hero-location">

        <span className="flag">
          🇳🇵
        </span>

        <p>
          Inaruwa-04, Sunsari, Nepal
        </p>

      </div>

      {/* Buttons */}

      <HeroButtons />

      {/* Social Icons */}

      <HeroSocial />

    </motion.div>
  );
}

export default HeroLeft;