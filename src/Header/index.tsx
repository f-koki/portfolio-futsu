import React from "react";
import "./Header.css";
import Logo from "./components/Logo";
import Menu from "./components/Menu";

const Header: React.FC = () => {
  return (
    <div className="Header">
      <Logo />
      <Menu />
    </div>
  );
};

export default Header;
