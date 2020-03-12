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
        description="1時間、無料で話し相手になります。決して否定しません。トークテーマはなんでもOKです。「誰でもいいから受容的なやつと喋りたい」そんなとき、お気軽にご活用ください。"
      />
      <SkillItem
        title="プログラミング"
        subTitle="Coding"
        imagePath=""
        description="エンジニアなので、有料でプログラミングの相談に乗ります。ただ、「話し相手」なら無料ですむのでそちらをオススメします。"
      />
      <SkillItem
        title="ライフハック"
        subTitle="Lifehack"
        imagePath=""
        description="「暮らしをすべて自動化したい」と考えているライフハック狂なので、有料でタスク管理などの相談に乗ります。ただ、「話し相手」なら無料ですむのでそちらをオススメします。"
        isLast
      />
    </div>
  );
};

export default Skills;
