import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <div className="About">
      <h1>About</h1>
      <p>
        桐朋高校・東京学芸大学卒
        <br />
        都内でフリーランスのWebエンジニアをしております。
        <br />
        2016年 都内IT企業に入社。ECサイトで3年間の開発経験を積む。
        <br />
        2019年
        フリーランス転向。スタートアップ手伝い/企業のサービス開発/初心者のメンタリングに従事。
      </p>
    </div>
  );
};

export default About;
