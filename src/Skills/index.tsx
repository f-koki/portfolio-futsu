import React from "react";
import "./Skills.css";
import SkillItem from "./SkillItem";

const Skills: React.FC = () => {
  return (
    <div className="Skills">
      <h1>Skills</h1>
      <SkillItem
        title="プログラミング"
        subTitle="Coding"
        imagePath=""
        description="プログラミングします"
      />
      <SkillItem
        title="プログラミング"
        subTitle="Coding"
        imagePath=""
        description="プログラミングします"
      />
      <SkillItem
        title="プログラミング"
        subTitle="Coding"
        imagePath=""
        description="プログラミングします"
      />
    </div>
  );
};

export default Skills;
