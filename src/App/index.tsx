import React from "react";
import "./App.css";
import Header from "../Header";
import Footer from "../Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Top from "../Top";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Top} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
