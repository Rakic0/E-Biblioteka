"use client";

import { Dispatch, SetStateAction } from "react";
import Select from "react-select";

const Autocomplete = ({
  options,
  selectedOption,
  setSelectedOption,
  type,
}: {
  options: { value: string; label: string }[] | undefined;
  selectedOption: { value: string; label: string };
  setSelectedOption: Dispatch<
    SetStateAction<{
      value: string;
      label: string;
    }>
  >;
  type: "autor" | "kategorija";
}) => {
  return (
    <Select
      options={options}
      name={type}
      id={type}
      // @ts-ignore
      onChange={setSelectedOption}
      placeholder={type === "autor" ? "Име и презиме аутора" : "Категорија"}
      styles={{
        control: (base, state) => ({
          ...base,
          borderRadius: "9999px",
          width: "24.3rem",
        }),
        container: (base, state) => ({
          ...base,
          width: "100%",
        }),
      }}
      className={`mb-2 w-full rounded-full text-14 text-cod_gray outline-none`}
    />
  );
};

export default Autocomplete;
