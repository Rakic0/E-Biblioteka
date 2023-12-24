import { FC } from "react";
import { Autor, Kategorija } from "@prisma/client";

interface AutocompleteProps {
  data: Autor[] | Kategorija[];
  type: "text" | "file" | "number";
  name: string;
  placeholder?: string;
  otherParams?: {};
  className?: string;
}

const Autocomplete: FC<AutocompleteProps> = ({
  data,
  type,
  name,
  placeholder,
  otherParams,
  className,
}) => {
  return (
    <>
      <input
        className={`${className} relative`}
        name={name}
        type={type}
        placeholder={placeholder}
        {...otherParams}
      />
      {data?.length > 0 ? (
        <div className="-bottom-22 bg-thunder-300 absolute left-0 w-[40rem] overflow-hidden overflow-y-scroll rounded-[3rem] text-white">
          {data.map((item) => (
            <div
              className="text-15 hover:bg-thunder-100 block px-6 py-4"
              key={item.id}
            >
              {/* @ts-ignore */}
              {name === "autor" ? item.ime : item.naziv}
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Autocomplete;
