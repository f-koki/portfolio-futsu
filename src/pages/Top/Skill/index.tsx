import React from "react";
import "./Skill.css";
import SkillItem from "../../../components/SkillItem";

const Skill: React.FC = () => {
  return (
    <div className="Skill">
      <h1>Skill</h1>
      <SkillItem
        title="プログラミング"
        subTitle="Programming"
        imagePath=""
        description="Webサービスのコーディングが可能。これまでのお仕事実績はこちらです。"
      />
      <SkillItem
        title="キーボード"
        subTitle="Keyboard"
        imagePath=""
        description="聴いたことのある曲を、キーボード演奏できます。ご依頼はこちらまで。"
      />
      <SkillItem
        title="ライフハック"
        subTitle="Lifehack"
        imagePath=""
        description="暮らしに抱えるご不便を、ライフハックで解決します。noteをご覧ください。"
        isLast
      />
    </div>
  );
};

export default Skill;
