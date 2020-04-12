import React from "react";
import "./ProgrammingWork.css";
import Work from "../component/Work";

const ProgrammingWork: React.FC = () => {
  return (
    <div className="ProgrammingWork workList">
      <Work
        title="ECサイトのサーバーサイド・フロントエンド構築"
        description="月間3億アクセスある某大手ECサイトのサーバーサイド/フロントエンドエンジニアを担当。"
        skills={["Java", "JavaScript", "CSS", "Git"]}
      ></Work>
      <Work
        title="テスト効率化ツールの作成"
        description="某大手ECサイトでテスト効率化のChrome拡張機能を作成。"
        skills={["JavaScript", "Chrome Extension", "CSS"]}
      ></Work>
    </div>
  );
};

export default ProgrammingWork;
