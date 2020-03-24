import React from "react";
import "./TabBar.css";
import { Link } from "react-router-dom";

export type TabBarLink = { path: string, message: string }

type Props = {
  tabBarLinks: TabBarLink[]
}

const TabBar: React.FC<Props> = ({ tabBarLinks }) => {
  return (
    <ul className="TabBar">
      {tabBarLinks.map(tabBarLink => (<li><Link to={tabBarLink.path}>{tabBarLink.message}</Link></li>))}
      {/* <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/works">Works</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li> */}
    </ul>
  );
};

export default TabBar;
