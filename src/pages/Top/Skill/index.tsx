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
      <SkillItem
        title="スマブラ"
        subTitle="Super Smash Bros"
        imagePath=""
        description="ロボットでVIPです。闘いたい方は、こちらのフレコをご登録ください。"
      />
      <SkillItem
        title="英語"
        subTitle="English"
        imagePath=""
        description="英語を使う現場で仕事をしていたので、ほどほどに喋れます。"
      />
      <SkillItem
        title="大喜利"
        subTitle="Oogiri"
        imagePath=""
        description="お題をいただけたら、答えます。面白さの保証はしません。あんまり送ってこないでください。"
        isLast
      />
    </div>
  );
};

export default Skill;
