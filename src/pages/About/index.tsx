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
        <br />
        1993年 生まれる。
        <br />
        1997年 ピアノ教室に通いはじめる。
        <br />
        2003年 受験のためピアノ教室をやめる。
        <br />
        2006年 桐朋中学に入学。
        <br />
        2008年 スマブラのオンライン対戦にハマり廃人になる。
        <br />
        2009年 桐朋高校に入学。
        <br />
        2011年 浪人。哲学とネット大喜利にどっぷり浸かる。
        <br />
        2012年 東京学芸大学に入学。
        <br />
        2016年 都内IT企業に入社。国内大手ECサイトで3年間の開発経験を積む。
        <br />
        2019年
        フリーランス転向。スタートアップ手伝い/企業のサービス開発/初心者のメンタリングに従事。
      </p>
    </div>
  );
};

export default About;
