import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">

      <div className="contact-blur blur-left"></div>
      <div className="contact-blur blur-right"></div>

      <div className="contact-container">

        {/* Heading */}

        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          <span className="contact-subtitle">
            CONTACT
          </span>

          <h2 className="contact-title">
            Let's Work Together
          </h2>

          <p className="contact-description">
            Feel free to contact me for projects,
            internships or collaboration.
          </p>

        </motion.div>

        {/* Contact Box */}

        <div className="contact-grid">

          {/* Left */}

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <div className="info-box">
              <FaEnvelope className="info-icon" />

              <div>
                <h3>Email</h3>
                <p>mukeshsir140@gmail.com</p>
              </div>

            </div>

            <div className="info-box">
              <FaPhoneAlt className="info-icon" />

              <div>
                <h3>Phone</h3>
                <p>+977 XXXXX XXXXX</p>
              </div>

            </div>

            <div className="info-box">
              <FaMapMarkerAlt className="info-icon" />

              <div>
                <h3>Location</h3>
                <p>Inaruwa-04, Sunsari, Nepal</p>
              </div>

            </div>

            <div className="social-links">

              <a
                href="https://github.com/Mukeshyadav77"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.instagram.com/mr_mukesh_yadav77"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/share/1Bx9QegPGq/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook />
              </a>

            </div>

          </motion.div>

          {/* Right */}

          <motion.form
            className="contact-form"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </motion.form>

        </div>

      </div>

    </section>
  );
}

export default Contact;