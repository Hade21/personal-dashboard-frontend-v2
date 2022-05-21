import React from "react";

const Typography = ({
  children,
  font = "font-rubik",
  size = "text-base",
  weight = "font-normal",
}) => {
  return <p className={`${font} ${weight} ${size}`}>{children}</p>;
};

export default Typography;
