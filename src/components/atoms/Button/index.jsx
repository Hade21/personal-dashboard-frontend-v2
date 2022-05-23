import React from "react";

const Button = ({ children, px, py, bgColor, type, onClick, textColor }) => {
  return (
    <button
      className={`cursor-pointer font-opensans font-semibold ${textColor} text-base ${px} ${py} ${bgColor} rounded-full`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
