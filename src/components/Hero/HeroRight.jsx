import { motion } from "framer-motion";
import profile from "../../assets/profile.jpg";

function HeroRight() {
  return (
    <motion.div
      className="hero-right"
      initial={{ opacity: 0, x: 80 }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 1,
      }}
    >
      {/* Blue Glow */}

      <div className="hero-image-glow"></div>

      {/* Profile Circle */}

      <motion.div
        className="hero-image-wrapper"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="hero-circle hero-circle-one"></div>

        <div className="hero-circle hero-circle-two"></div>

        <img
          src={profile}
          alt="Mukesh Yadav"
          className="hero-image"
        />
      </motion.div>

      {/* Card 1 */}

      <motion.div
        className="hero-card card-left"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      >
        <h3>C • C++</h3>

        <p>Programming</p>
      </motion.div>

      {/* Card 2 */}

      <motion.div
        className="hero-card card-right"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      >
        <h3>Python</h3>

        <p>Development</p>
      </motion.div>

      {/* Card 3 */}

      <motion.div
        className="hero-card card-bottom"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      >
        <h3>React</h3>

        <p>Frontend</p>
      </motion.div>

      {/* Experience */}

      <motion.div
        className="hero-exp"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        <h2>10+</h2>

        <span>
          Projects
          <br />
          Completed
        </span>
      </motion.div>

    </motion.div>
  );
}

export default HeroRight;