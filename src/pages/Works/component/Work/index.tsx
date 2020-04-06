import React from "react";
import "./Work.css";

type Props = {
  title: string;
  url?: string;
  linkText?: string;
  description: string;
};

const Work: React.FC<Props> = ({ title, url, linkText, description }) => {
  return (
    <div className="Work">
      <p className="title">{title}</p>
      {url && linkText && <a href={url}>{linkText}</a>}
      <p>{description}</p>
    </div>
  );
};

export default Work;
