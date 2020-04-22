import React from "react";
import "./Skills.css";
import SkillItem from "../../../components/SkillItem";

const Skills: React.FC = () => {
  return (
    <div className="Skills">
      <h1>Skills</h1>
      <SkillItem
        title="プログラミング"
        subTitle="Programming"
        imagePath=""
        description="Webサービスのコーディングが可能。制作依頼、ご相談などはこちらのフォームからお願いいたします。"
      />
      <SkillItem
        title="メンタリング"
        subTitle="Mentoring"
        imagePath=""
        description="プログラマ志望の方のメンタリング相談に乗ります。技術的なことはもちろん、学習方法やマインド面にもフォーカスします。"
      />
      <SkillItem
        title="ライフハック"
        subTitle="Lifehack"
        imagePath=""
        description="暮らしに抱えるご不便を、ライフハックで解決します。"
        isLast
      />
      {/* <SkillItem
        title="スマブラ"
        subTitle="Super Smash Bros"
        imagePath=""
        description="ロボットでVIPに入っています。上達方法を指導します。"
      />
      <SkillItem
        title="英語"
        subTitle="English"
        imagePath=""
        description="英語を使う現場で仕事をしていたので、ほどほどに喋れます。"
      />
      <SkillItem
        title="言語化"
        subTitle="Verbalization"
        imagePath=""
        description="心の中のもやもやを言語化します。"
      /> */}
      {/* <SkillItem
        title="大喜利"
        subTitle="Oogiri"
        imagePath=""
        description="お題をいただけたら、答えます。面白さの保証はしません。あんまり送ってこないでください。"
      /> */}
    </div>
  );
};

export default Skills;
