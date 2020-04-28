import React from "react";
import "./LifehackWork.css";
import Work from "../component/Work";

const LifehackWork: React.FC = () => {
  return (
    <div className="LifehackWork workList">
      <Work
        title="ライフハックnoteの執筆"
        url="https://note.com/f_koki"
        linkText="futsuのnote"
        description="noteでライフハック関連の記事を執筆しています。"
      />
    </div>
  );
};

export default LifehackWork;
