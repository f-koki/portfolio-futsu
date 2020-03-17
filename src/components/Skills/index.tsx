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
        description="聴いたことのある曲をピアノで弾けます。リクエストいただけたら、弾きます。練習にめちゃくちゃ時間がかかりますので、気長にお待ち下さい。"
      />
      <SkillItem
        title="ライフハック"
        subTitle="Lifehack"
        imagePath=""
        description="一番お金を使っているのはライフハックです。これに関してとくにサービスとかはありません。相談とかは乗ります。"
        isLast
      />
      <SkillItem
        title="スマブラ"
        subTitle="Smash Bros"
        imagePath=""
        description="人口上位3％のレベルです。興味ある人は、対戦しましょう。"
      />
      <SkillItem
        title="英語"
        subTitle="English"
        imagePath=""
        description="英語を使う現場で仕事をしていたので、ほどほどに喋れます。"
      />
      <SkillItem
        title="プログラミング"
        subTitle="Programing"
        imagePath=""
        description="WebサイトやWebサービスを作ります。サイト制作依頼は、こちらのフォームからお願いいたします。"
        isLast
      />
      <SkillItem
        title="言語化"
        subTitle="Verbalization"
        imagePath=""
        description="心の中のもやもやを言語化します。"
      />
    </div>
  );
};

export default Skills;
