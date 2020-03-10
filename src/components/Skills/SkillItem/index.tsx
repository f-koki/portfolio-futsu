import React from "react";
import "./SkillItem.css";
import Logo from "../../../images/logo512.png";

type Props = {
  title: string;
  subTitle: string;
  imagePath: string;
  description: string;
};

const SkillItem: React.FC<Props> = ({
  title,
  subTitle,
  imagePath,
  description
}) => {
  return (
    <div className="SkillItem">
      <h3>{title}</h3>
      <p>{subTitle}</p>
      <p>
        <img src={Logo} alt="skill" />
      </p>
      <p>{description}</p>
    </div>
  );
};

export default SkillItem;
