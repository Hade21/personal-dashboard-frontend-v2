import React from "react";

const Card = (props) => {
  const {
    outerColor,
    innerColor,
    innerContent,
    outerContent,
    width,
    height,
    innerHeight,
    flexDir,
  } = props;
  return (
    <div
      className={`outer-card rounded-xl flex ${flexDir} ${width} ${height} ${outerColor}`}
    >
      <div
        className={`inner-card rounded-xl w-full ${innerColor} ${innerHeight}`}
      >
        {innerContent}
      </div>
      <div className="outer-content">{outerContent}</div>
    </div>
  );
};

export default Card;
