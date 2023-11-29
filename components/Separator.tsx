import { FC } from "react";

interface SeparatorProps {
  text: string;
}

const Separator: FC<SeparatorProps> = ({ text }) => {
  return (
    <div className="flex items-center justify-center gap-6 w-full">
      <svg
        width="191"
        height="2"
        viewBox="0 0 191 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 1H191" stroke="black" />
      </svg>
      <h3 className="text-guardsman_red text-39 font-semibold">{text}</h3>
      <svg
        width="191"
        height="2"
        viewBox="0 0 191 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 1H191" stroke="black" />
      </svg>
    </div>
  );
};

export default Separator;
