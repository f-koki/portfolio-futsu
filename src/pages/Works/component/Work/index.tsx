import React from "react";
import "./Work.css";

type Props = {
  title: string;
  url?: string;
  linkText?: string;
  skills?: string[];
  description: string;
};

const Work: React.FC<Props> = ({
  title,
  url,
  linkText,
  skills,
  description
}) => {
  return (
    <div className="Work">
      <div className="content">
        <p className="title">{title}</p>
        {url && linkText && <a href={url}>{linkText}</a>}
        {skills?.map(skill => {
          return <div className="skill">{skill}</div>;
        })}
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Work;
