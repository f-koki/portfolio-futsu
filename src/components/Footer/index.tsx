import React from "react";
import "./Footer.css";
import FooterSns from "./FooterSns";
import Copyright from "./Copyright";

const Footer: React.FC = () => {
  return (
    <footer className="Footer">
      <FooterSns />
      <Copyright />
    </footer>
  );
};

export default Footer;
