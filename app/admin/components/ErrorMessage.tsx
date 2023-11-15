import { FC, ReactNode } from "react";

interface ErrorMessageProps {
  children?: ReactNode;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ children }) => {
  return (
    <p className="text-shadow text-center text-14 font-semibold text-white underline">
      {children}
    </p>
  );
};

export default ErrorMessage;
