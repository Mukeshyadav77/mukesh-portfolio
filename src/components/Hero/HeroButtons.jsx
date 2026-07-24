function HeroButtons() {
  return (
    <div className="hero-buttons">

      <button
        className="hire-btn"
        onClick={() => {
          document
            .getElementById("contact")
            ?.scrollIntoView({
              behavior: "smooth",
            });
        }}
      >
        Hire Me
      </button>

      <a
        href="/resume.pdf"
        download
        className="resume-btn"
      >
        Download Resume
      </a>

    </div>
  );
}

export default HeroButtons;