import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Input = (props) => {
  const { children, type, name, value, icon, onChange } = props;

  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        placeholder={children}
        onChange={onChange}
        className="font-opensans text-base p-2 bg-transparent outline-none border-b-2 border-b-input-border focus:outline-none w-full mx-auto peer placeholder-transparent focus:border-b-red-600 transition-all duration-300"
      />
      <label
        htmlFor={name}
        className="font-rubik text-sm flex gap-2 items-center absolute left-0 -top-3.5 peer-placeholder-shown:left-2 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-input-border peer-focus:text-sm peer-focus:-top-4 peer-focus:left-0 peer-focus:text-white transition-all duration-300"
      >
        <FontAwesomeIcon icon={icon} />
        {children}
      </label>
    </div>
  );
};

export default Input;
