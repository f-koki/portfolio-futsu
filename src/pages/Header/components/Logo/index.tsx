import React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <div className="Logo">
      <span>
        <Link className="title" to="/">
          FUTSU TECH
        </Link>
        <div className="subtitle">ENGINEER & KEYBOARDIST & LIFEHACKER</div>
      </span>
    </div>
  );
};

export default Logo;
