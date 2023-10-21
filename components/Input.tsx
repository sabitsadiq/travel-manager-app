import React from "react";

interface InputType {
  type?: string;
  placeholder?: string;
  title?: string;
  value?: string;
  styles: string;
}
const Input = ({ type, placeholder, title, value, styles }: InputType) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        name={title}
        value={value}
        className={`border border-gray-300 rounded-lg outline-none ${styles}`}
      />
    </>
  );
};

export default Input;
