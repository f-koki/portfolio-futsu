import React from "react";
import "./SkillItem.css";
import Logo from "../../images/logo512.png";
import classnames from "classnames";

type Props = {
  title: string;
  subTitle: string;
  imagePath: string;
  description: string;
  isLast?: boolean;
};

const SkillItem: React.FC<Props> = ({
  title,
  subTitle,
  imagePath,
  description,
  isLast,
}) => {
  return (
    <div className={classnames('SkillItem', isLast ? 'last' : '')}>
      <h3 className="title">{title}</h3>
      <p className="subtitle">{subTitle}</p>
      <p>
        <img src={Logo} alt="skill" />
      </p>
      <p>{description}</p>
    </div>
  );
};

export default SkillItem;
