import React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <div className="Logo">
      <span><Link to="/">FUTSU TECH</Link></span>
    </div>
  );
};

export default Logo;
