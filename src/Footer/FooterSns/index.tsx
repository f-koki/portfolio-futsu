import React from "react";
import "./FooterSns.css";

const FooterSns: React.FC = () => {
  return (
    <nav className="FooterSns">
      <ul className="sns">
        <li>
          <a href="https://github.com/f-koki">Github</a>
        </li>
        <li>
          <a href="https://twitter.com/futsu_tech">Twitter</a>
        </li>
        <li>
          <a href="https://note.com/f_koki">note</a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCkevdgimtQpVhTlqfe1aaXg">
            Youtube
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default FooterSns;
