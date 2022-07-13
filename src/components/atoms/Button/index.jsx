import React from "react";

const Button = (props) => {
  const { children, px, py, bgColor, type, onClick, textColor, disable } =
    props;

  return (
    <button
      className={`cursor-pointer font-opensans font-semibold ${textColor} lg:text-base xl:text-lg ${px} ${py} ${bgColor} rounded-full`}
      type={type}
      onClick={onClick}
      disabled={disable}
    >
      {children}
    </button>
  );
};

export default Button;
