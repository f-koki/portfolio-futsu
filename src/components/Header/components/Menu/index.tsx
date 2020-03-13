import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

const Menu: React.FC = () => {
  return (
    <ul className="Menu">
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/works">Works</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default Menu;
