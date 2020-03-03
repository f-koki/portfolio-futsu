import React from "react";
import "./App.css";
import Header from "../Header";
import MainVisual from "../MainVisual";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <MainVisual />
    </div>
  );
};

export default App;
