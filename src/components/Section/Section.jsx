import "./Section.scss";

function Section({ title, children, className = "" }) {
  return (
    <section className={`section-wrapper ${className}`}>
      {title && <h2 className="section-tile">{title}</h2>}
      <div className="section-content">{children}</div>
    </section>
  );
}

export default Section;
