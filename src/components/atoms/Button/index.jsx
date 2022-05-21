import React from "react";

const Button = ({ children, px, py, bgColor, type, onClick }) => {
  return (
    <button
      className={`cursor-pointer font-opensans font-normal text-white text-base ${px} ${py} ${bgColor} rounded-lg`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
