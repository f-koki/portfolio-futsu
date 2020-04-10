import React from "react";
import "./ProgrammingWork.css";
import Work from "../component/Work";

const ProgrammingWork: React.FC = () => {
  return (
    <div className="ProgrammingWork">
      <Work
        title="ECサイトのサーバーサイド構築"
        description="月間3億アクセスある某大手ECサイトのサーバーサイドエンジニアを担当。"
        skills={["Java", "JavaScript", "CSS", "Git"]}
      ></Work>
    </div>
  );
};

export default ProgrammingWork;
