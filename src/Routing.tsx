import React from "react";
import { Route, Switch } from "react-router-dom";
import Top from "./pages/Top";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Works from "./pages/Works";
import PianoWork from "./pages/Works/PianoWork";

export const Routing: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Top} />
    <Route path="/about" exact component={About} />
    <Route path="/contact" exact component={Contact} />
    <Route path="/works" component={Works} />
  </Switch>
);
