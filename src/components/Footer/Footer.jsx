import { FaGithub, FaInstagram, FaFacebook, FaHeart } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Left */}

        <div className="footer-left">

          <h2>
            Mukesh Yadav
          </h2>

          <p>
            Computer Science Student passionate about
            building beautiful, modern and responsive
            web applications.
          </p>

        </div>

        {/* Center */}

        <div className="footer-center">

          <h3>
            Quick Links
          </h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>

        </div>

        {/* Right */}

        <div className="footer-right">

          <h3>
            Follow Me
          </h3>

          <div className="footer-social">

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

        </div>

      </div>

      {/* Bottom */}

      <div className="footer-bottom">

        <p>

          © {year} Mukesh Yadav |
          Made with <FaHeart className="heart" /> using React

        </p>

      </div>

    </footer>
  );
}

export default Footer;