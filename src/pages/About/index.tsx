import React from "react";
import "./About.css";
import MyPicture from "../../images/logo512.png";

const About: React.FC = () => {
  return (
    <div className="About">
      <h1>About</h1>
      <div className="mypicture">
        <img src={MyPicture} />
      </div>
      <p>
        桐朋高校・東京学芸大学卒
        <br />
        都内でフリーランスのWebエンジニアをしております。
        <br />
        2016年 都内IT企業に入社。国内大手ECサイトで3年間の開発経験を積む。
        <br />
        2019年フリーランス転向。
      </p>
    </div>
  );
};

export default About;
