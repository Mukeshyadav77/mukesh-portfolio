import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaLightbulb,
  FaProjectDiagram,
} from "react-icons/fa";

function AboutCards() {
  const cards = [
    {
      icon: <FaCode />,
      title: "Programming",
      value: "C • C++ • Python",
      delay: 0.1,
    },
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      value: "React • JavaScript",
      delay: 0.2,
    },
    {
      icon: <FaProjectDiagram />,
      title: "Projects",
      value: "10+ Completed",
      delay: 0.3,
    },
    {
      icon: <FaLightbulb />,
      title: "Learning",
      value: "Full Stack Development",
      delay: 0.4,
    },
  ];

  return (
    <div className="about-cards">

      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="about-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: card.delay,
          }}
          viewport={{ once: true }}
        >
          <div className="card-icon">
            {card.icon}
          </div>

          <h3>{card.title}</h3>

          <p>{card.value}</p>
        </motion.div>
      ))}

    </div>
  );
}

export default AboutCards;