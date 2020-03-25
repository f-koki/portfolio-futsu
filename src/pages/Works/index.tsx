import React from "react";
import "./Works.css";
import TabBar, { TabBarLink } from "../../components/TabBar";

const Works: React.FC = () => {
  const worksTab: TabBarLink[] = [
    { path: "/", message: "Piano" },
    { path: "/", message: "Programming" },
    { path: "/", message: "Mentoring" }
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
