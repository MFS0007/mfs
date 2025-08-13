import "./SkillCard.scss";

const SkillCard = ({ icon, title, description }) => {
  return (
    <div className="skill-card">
      <div className="skill-icon">{icon}</div>
      <h3 className="skill-title">{title}</h3>
      <p className="skill-description">{description}</p>
    </div>
  );
};

export default SkillCard;
