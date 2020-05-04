import React from "react";
import "./ProgrammingWork.css";
import Work from "../component/Work";

const ProgrammingWork: React.FC = () => {
  return (
    <div className="ProgrammingWork workList">
      <Work
        title="ECサイトのサーバーサイド・フロントエンド構築"
        description="月間3億アクセスされるECサイトのサーバーサイド/フロントエンド。設計、実装、テスト、ソースレビューまで担当。"
        skills={["Java", "JavaScript", "CSS", "Git", "HTML"]}
      ></Work>
      <Work
        title="ECサイトテスト効率化ツール作成"
        description="チームの開発効率を上げるためのChrome拡張機能を作成。テスト時間を20％減させることに成功。"
        skills={["JavaScript", "Chrome Extension", "CSS", "HTML", "Git"]}
      ></Work>
      <Work
        title="東京都コロナ対策サイトへの貢献"
        description="オープンソースへの貢献。CSS修正やドキュメント整備など、本業の合間で着手。"
        skills={["Vue", "Nuxt", "SCSS", "Git"]}
      ></Work>
      <Work
        title="スマホゲームのファンコミュニティサイト構築"
        description="SPAのファンコミュニティサイトを構築しました。"
        skills={["React", "SCSS", "Git"]}
      ></Work>
    </div>
  );
};

export default ProgrammingWork;
