import React from "react";
import "./Works.css";
import TabBar, { TabBarLink } from "../../components/TabBar";
import { Route } from "react-router-dom";
import PianoWork from "./PianoWork";
import LifehackWork from "./LifehackWork";
import ProgrammingWork from "./ProgrammingWork";

const Works: React.FC = () => {
  const worksTab: TabBarLink[] = [
    { path: "/works/piano", message: "Piano" },
    { path: "/works/programming", message: "Programming" },
    { path: "/works/lifehack", message: "Lifehack" }
  ];

  return (
    <div className="Works">
      <h1>Works</h1>
      <TabBar tabBarLinks={worksTab} />
      <Route path="/works/piano" component={PianoWork} />
      <Route path="/works/lifehack" component={LifehackWork} />
      <Route path="/works/programming" component={ProgrammingWork} />
    </div>
  );
};

export default Works;
