import {
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";

function HeroSocial() {
  return (
    <div className="hero-social">

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

      <a
        href="mailto:mukeshsir140@gmail.com"
      >
        <FaEnvelope />
      </a>

    </div>
  );
}

export default HeroSocial;