import React from "react";
import "./Works.css";
import TabBar, { TabBarLink } from "../../components/TabBar";

const Works: React.FC = () => {
  const worksTab: TabBarLink[] = [
    { path: "/works/piano", message: "Piano" },
    { path: "/works/programming", message: "Programming" },
    { path: "/works/lifehack", message: "Lifehack" }
  ];

  return (
    <div className="Works">
      <h1>Works</h1>
      {/* TODO: WorkItem Componentを作成する */}
      <TabBar tabBarLinks={worksTab} />
      {/* TODO: Programming,Piano,Mentoringでわける */}
    </div>
  );
};

export default Works;
