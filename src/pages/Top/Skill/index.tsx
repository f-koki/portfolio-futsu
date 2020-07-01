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
        description="RASISを意識した、変更に強いコーディングを行います。WEBサービスは仕様通り動けば終わりではなく、ビジネスと共に形を変えていけるように作る必要があります。ビジネスの変化に柔軟に対応できるような作りを心がけています。"
      />
      <SkillItem
        title="高速化"
        subTitle="Acceleration"
        imagePath=""
        description="どんなご依頼にも、素早く高品質に対応いたします。小学生のころ、初めてPCに触れたときから、PC作業の高速化にこだわり抜いてきました。「こうすればもっと速くできる」最短ルートを考えるのが好きで、得意です。"
      />
      <SkillItem
        title="英語"
        subTitle="English"
        imagePath=""
        description="英語での文書作成・コミュニケーションを行います。英語の現場で3年間の就労経験があり、英語の現場にも対応できます。"
        isLast
      />
    </div>
  );
};

export default Skill;
