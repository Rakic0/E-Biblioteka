import { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  type?: "submit";
}

const Button: FC<ButtonProps> = ({ children, className, type }) => {
  return (
    <button
      type={`${type ? type : "button"}`}
      className={`${className} text-white text-16 font-semibold bg-guardsman_red px-9 py-3 rounded-full`}
    >
      {children}
    </button>
  );
};

export default Button;
