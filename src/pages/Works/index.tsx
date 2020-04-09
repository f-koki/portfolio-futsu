import React, { useState } from "react";
import "./Works.css";
import { TabBarLink } from "../../components/TabBar";
import PianoWork from "./PianoWork";
import LifehackWork from "./LifehackWork";
import ProgrammingWork from "./ProgrammingWork";

const Works: React.FC = () => {
  const [tab, setTab] = useState("piano");

  return (
    <div className="Works">
      <h1>Works</h1>
      <ul>
        <li onClick={() => setTab("piano")}>piano</li>
        <li onClick={() => setTab("lifehack")}>lifehack</li>
        <li onClick={() => setTab("programming")}>programming</li>
      </ul>
      {tab === "piano" && <PianoWork />}
      {tab === "lifehack" && <LifehackWork />}
      {tab === "programming" && <ProgrammingWork />}
    </div>
  );
};

export default Works;
