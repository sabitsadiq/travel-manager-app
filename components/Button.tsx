import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonType {
  type: "button" | "reset" | "submit" | undefined;
  title: string;
  styles: string;
}

const Button = ({ type, title, styles }: ButtonType) => {
  return (
    <>
      <button
        type={type}
        className={`rounded-lg font-normal text-sm  ${styles}`}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
