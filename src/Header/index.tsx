import React from "react";
import "./Header.css";
import Logo from "./components/Logo";

const Header: React.FC = () => {
  return (
    <div className="Header">
      <Logo />
    </div>
  );
};

export default Header;
