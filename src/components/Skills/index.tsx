import React from "react";
import "./Skills.css";
import SkillItem from "./SkillItem";

const Skills: React.FC = () => {
  return (
    <div className="Skills">
      <h1>Skills</h1>
      <SkillItem
        title="大喜利"
        subTitle="Oogiri"
        imagePath=""
        description="お題をいただけたら、答えます。面白さの保証はしません。あんまり送ってこないでください。"
      />
      <SkillItem
        title="ピアノ"
        subTitle="Piano"
        imagePath=""
        description="リクエストいただいた曲を、ピアノで弾きます。素人に毛が生えた程度なので、練習にめちゃくちゃ時間がかかります。気長にお待ち下さい。"
      />
      <SkillItem
        title="ライフハック"
        subTitle="Lifehack"
        imagePath=""
        description="ライフハックが好きです。家電は声で操作してます。これに関してとくにサービスとかはありません。"
        isLast
      />
    </div>
  );
};

export default Skills;
