import "./hero.scss";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Farooq 👋</h1>
        <p>
          Certified Salesforce B2C Commerce Developer & Agile Tech Lead. I build
          scalable storefronts and mentor global teams.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            View Projects
          </a>
          <a href="/resume.pdf" className="btn secondary">
            Download Resume
          </a>
        </div>
        <div className="scroll-indicator">
          <span>↓</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
