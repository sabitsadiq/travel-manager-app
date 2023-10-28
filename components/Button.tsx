import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { BiPlus } from "react-icons/bi";

interface ButtonType {
  type: "button" | "reset" | "submit" | undefined;
  title: string;
  styles: string;
  hideIcon?: string;
}

const Button = ({ type, title, styles, hideIcon }: ButtonType) => {
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
