import React from "react";
import "./PianoWork.css";
import Work from "../component/Work";

const PianoWork: React.FC = () => {
  return (
    <div className="PianoWork workList">
      <Work
        title="Youtube35万再生突破"
        url="https://www.youtube.com/watch?v=NuDarhM0C9k"
        linkText="【ピアノ講座】5分で誰でも即興ピアノを弾けるようになる裏ワザ"
        description="Youtubeのピアノ講座動画が35万回再生突破。"
      />
      <Work
        title="Youtube登録者数1000人突破"
        description="ピアノYoutubeの登録者数が1000人を突破。"
      />
      <Work
        title="ライブサポート"
        description="アコースティックギター弾き語りシンガーソングライターの、ピアノサポート。都内ライブハウスにて１年間活動。"
      />
    </div>
  );
};

export default PianoWork;
