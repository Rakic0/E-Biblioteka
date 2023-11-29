import { FC } from "react";

interface InputProps {
  type: "text" | "file" | "number";
  name: string;
  placeholder?: string;
  otherParams?: {};
  className?: string;
  onClick?: (e: any) => void;
}

const Input: FC<InputProps> = ({
  type,
  name,
  placeholder,
  className,
  otherParams,
  onClick,
}) => {
  return (
    <input
      className={`${className} mb-2 w-full rounded-full border-b-2 px-4 py-2 text-16 text-cod_gray outline-none invalid:border-b-2 invalid:border-guardsman_red`}
      name={name}
      id={name}
      type={type}
      placeholder={placeholder}
      onClick={onClick}
      {...otherParams}
    />
  );
};

export default Input;
