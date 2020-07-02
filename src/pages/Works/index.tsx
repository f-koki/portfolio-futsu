import React, { useState } from "react";
import "./Works.css";
import PianoWork from "./PianoWork";
import LifehackWork from "./LifehackWork";
import ProgrammingWork from "./ProgrammingWork";
import classNames from "classnames";

const Works: React.FC = () => {
  return (
    <div className="Works">
      <h1>Works</h1>
      <ProgrammingWork />
    </div>
  );
};

export default Works;
