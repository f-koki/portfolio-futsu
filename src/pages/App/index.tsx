import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Routing } from "../../Routing";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="wrapper">
          <Routing />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
