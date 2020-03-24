import React from "react";
import "./Header.css";
import Logo from "./components/Logo";
import TabBar from "./components/TabBar";
import { TabBarLink } from "./components/TabBar"

const Header: React.FC = () => {
  const headerLinks: TabBarLink[] = [
    { path: "/about", message: "About" },
    { path: "/works", message: "Works" },
    { path: "/contact", message: "Contact" }
  ]

  return (
    <div className="Header">
      <Logo />
      <TabBar tabBarLinks={headerLinks} />
    </div>
  );
};

export default Header;
