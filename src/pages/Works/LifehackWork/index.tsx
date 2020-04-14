import React from "react";
import "./LifehackWork.css";
import Work from "../component/Work";

const LifehackWork: React.FC = () => {
  return (
    <div className="LifehackWork workList">
      <Work
        title="Lifehack"
        description="ライフハックのコンサルに乗っています。"
      />
    </div>
  );
};

export default LifehackWork;
