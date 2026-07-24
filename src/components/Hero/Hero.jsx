import "./Hero.css";

import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

function Hero() {
  return (
    <section className="hero">

      {/* Background */}

      <div className="hero-blur blur1"></div>
      <div className="hero-blur blur2"></div>

      <div className="hero-grid"></div>

      <div className="hero-container">

        <HeroLeft />

        <HeroRight />

      </div>

    </section>
  );
}

export default Hero;