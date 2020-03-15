import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Top from "../Top";
import "./App.css";
import About from "../About";
import Contact from "../Contact";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Top} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
