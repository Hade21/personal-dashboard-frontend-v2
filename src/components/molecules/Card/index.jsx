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
      className={`outer-card rounded-xl flex overflow-hidden justify-between ${flexDir} ${width} ${height} ${outerColor}`}
    >
      <div
        className={`inner-card rounded-xl w-full z-10 ${innerColor} ${innerHeight}`}
      >
        {innerContent}
      </div>
      <div className="outer-content">{outerContent}</div>
    </div>
  );
};

export default Card;
