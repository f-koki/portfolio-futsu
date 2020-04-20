import React from "react";
import "./Skills.css";
import SkillItem from "../../../components/SkillItem";

const Skills: React.FC = () => {
  return (
    <div className="Skills">
      <h1>Skills</h1>
      <SkillItem
        title="プログラミング"
        subTitle="Programing"
        imagePath=""
        description="Webサービスのコーディングが可能。製作依頼は、こちらのフォームからお願いいたします。"
      />
      <SkillItem
        title="キーボード"
        subTitle="Keyboard"
        imagePath=""
        description="独学で15年以上、キーボード演奏をしています。独自のメソッドで、初心者でも耳コピで弾けるようになる指導が可能。"
      />
      <SkillItem
        title="ライフハック"
        subTitle="Lifehack"
        imagePath=""
        description="暮らしに感じた不便に、解決策をご提示します。"
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
