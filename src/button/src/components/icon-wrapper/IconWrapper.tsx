import React from "react";
// const styles = require("./iconWrapper.module.scss");

interface IconsProps {
  icon: React.ReactChild;
  sizes?: string;
}

const IconWrapper: React.FC<IconsProps> = ({ icon, sizes }) => {
  return (
    <span className={`icon ${[`icon${sizes}`]}`}>{icon}</span>
  );
};

export default IconWrapper;
