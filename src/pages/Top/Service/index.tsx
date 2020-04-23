import React from "react";
import "./Service.css";
import ServiceItem from "../../../components/ServiceItem";

const Service: React.FC = () => {
  return (
    <div className="Service">
      <h1>Service</h1>
      <ServiceItem
        title="プログラミング"
        subTitle="Programming"
        imagePath=""
        description="Webサービスのコーディングが可能。制作依頼、ご相談などはこちらのフォームからお願いいたします。"
      />
      <ServiceItem
        title="メンタリング"
        subTitle="Mentoring"
        imagePath=""
        description="プログラマ志望の方のメンタリングをします。技術的なことはもちろん、学習方法やマインド面にもフォーカスします。"
      />
      <ServiceItem
        title="ライフハック"
        subTitle="Lifehack"
        imagePath=""
        description="暮らしに抱えるご不便を、ライフハックで解決します。"
        isLast
      />
      {/* <ServiceItem
        title="スマブラ"
        subTitle="Super Smash Bros"
        imagePath=""
        description="ロボットでVIPに入っています。上達方法を指導します。"
      />
      <ServiceItem
        title="英語"
        subTitle="English"
        imagePath=""
        description="英語を使う現場で仕事をしていたので、ほどほどに喋れます。"
      />
      <ServiceItem
        title="言語化"
        subTitle="Verbalization"
        imagePath=""
        description="心の中のもやもやを言語化します。"
      /> */}
      {/* <ServiceItem
        title="大喜利"
        subTitle="Oogiri"
        imagePath=""
        description="お題をいただけたら、答えます。面白さの保証はしません。あんまり送ってこないでください。"
      /> */}
    </div>
  );
};

export default Service;
