import React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <div className="Logo">
      <span>
        <Link className="title" to="/">
          <p>FUTSU TECH</p>
          <p className="subtitle">WEB DEVELOPER</p>
        </Link>
      </span>
    </div>
  );
};

export default Logo;
