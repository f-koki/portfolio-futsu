import React, { useState } from "react";
import "./Works.css";
import PianoWork from "./PianoWork";
import LifehackWork from "./LifehackWork";
import ProgrammingWork from "./ProgrammingWork";
import classNames from "classnames";

const Works: React.FC = () => {
  const [tab, setTab] = useState("programming");

  return (
    <div className="Works">
      <h1>Works</h1>
      <div>
        <ul className="tabList">
          <li
            className={classNames(
              "tab programming",
              tab === "programming" ? "active" : undefined
            )}
            onClick={() => setTab("programming")}
          >
            PROGRAMMING
          </li>
          <li
            className={classNames(
              "tab piano",
              tab === "piano" ? "active" : undefined
            )}
            onClick={() => setTab("piano")}
          >
            KEYBOARD
          </li>
          <li
            className={classNames(
              "tab lifehack",
              tab === "lifehack" ? "active" : undefined
            )}
            onClick={() => setTab("lifehack")}
          >
            <span>LIFEHACK</span>
          </li>
        </ul>
      </div>
      {tab === "programming" && <ProgrammingWork />}
      {tab === "piano" && <PianoWork />}
      {tab === "lifehack" && <LifehackWork />}
    </div>
  );
};

export default Works;
