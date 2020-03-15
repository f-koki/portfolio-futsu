import React from "react";
import "./Skills.css";
import SkillItem from "./SkillItem";

const Skills: React.FC = () => {
  return (
    <div className="Skills">
      <h1>Skills</h1>
      <SkillItem
        title="話し相手"
        subTitle="Talking"
        imagePath=""
        description="30分間、無料で話し相手になります。決して否定しません。トークテーマは本当になんでもOKです。言語化のお手伝いをします。お気軽にご活用ください。"
      />
      <SkillItem
        title="プログラミング"
        subTitle="Coding"
        imagePath=""
        description="現役フリーランスのエンジニアが、プログラミングや仕事の取り方の相談に乗ります。「話し相手」なら無料ですむので最初はそちらをオススメします。"
      />
      <SkillItem
        title="ライフハック"
        subTitle="Lifehack"
        imagePath=""
        description="生粋のライフハックマニアが日々のコンサルティングをします。「話し相手」なら無料ですむので最初はそちらをオススメします。"
        isLast
      />
    </div>
  );
};

export default Skills;
