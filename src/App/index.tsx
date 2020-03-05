import React from "react";
import "./App.css";
import Header from "../Header";
import Footer from "../Footer";
import MainVisual from "../MainVisual";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <MainVisual />
      <Footer />
    </div>
  );
};

export default App;
