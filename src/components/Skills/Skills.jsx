import "./Skills.scss";

import Section from "../Section/Section.jsx";
import SkillCard from "../SkillCard/SkillCard.jsx";

import { skillsData } from "../../data/skillsData.js";

function Skills() {
  return (
    <Section title="Skills">
      {skillsData.map((skill) => (
        <SkillCard
          key={skill.id}
          icon={skill.icon}
          title={skill.title}
          description={skill.description}
        />
      ))}
    </Section>
  );
}

export default Skills;
