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
    </ul>
  );
};

export default TabBar;
