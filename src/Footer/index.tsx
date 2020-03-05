import React from "react";
import "./Footer.css";
import FooterSns from "./FooterSns";

const Footer: React.FC = () => {
  return (
    <footer className="Footer">
      <FooterSns />
      <small>
        <p id="copyright">© FUTSUTECH All rights reserved.</p>
      </small>
    </footer>
  );
};

export default Footer;
