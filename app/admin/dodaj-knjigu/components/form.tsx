"use client";

import Button from "@/components/Button";
import React, { FC, useState } from "react";
import { createBook } from "@/lib/actions";
import Autocomplete from "./autocomplete";
import { AuthorDataProps as AutocompleteDataProps } from "@/lib/definitions";

interface FormProps {
  authors: AutocompleteDataProps[] | undefined;
  categories: AutocompleteDataProps[] | undefined;
}

const Form: FC<FormProps> = ({ authors, categories }) => {
  const [selectedAuthor, setSelectedAuthor] = useState({
    value: "",
    label: "",
  });

  const [selectedCategory, setSelectedCategory] = useState({
    value: "",
    label: "",
  });

  return (
    <>
      <form action={createBook}>
        <div>
          <input
            type="text"
            name="naslov"
            placeholder="Назив књиге..."
            className={`mb-2 w-full rounded-full border-b-2 px-4 py-2 text-16 text-cod_gray outline-none invalid:border-b-2 invalid:border-guardsman_red`}
          />
          {/* <ErrorMessage>aasd</ErrorMessage> */}
        </div>

        <div className="mt-9 flex w-full items-baseline justify-between gap-4">
          <div className="relative">
            <Autocomplete
              options={authors}
              selectedOption={selectedAuthor}
              setSelectedOption={setSelectedAuthor}
              type="autor"
            />

            {/* <ErrorMessage>asd</ErrorMessage> */}
          </div>

          <div className="relative">
            <Autocomplete
              options={categories}
              selectedOption={selectedCategory}
              setSelectedOption={setSelectedCategory}
              type="kategorija"
            />

            {/* <ErrorMessage>asd</ErrorMessage> */}
          </div>
        </div>

        <div className="mt-9 flex w-full items-baseline justify-between gap-4">
          <div>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]+"
              placeholder="Година издавања (од)"
              name="godina"
              className={`mb-2 w-full rounded-full border-b-2 px-4 py-2 text-16 text-cod_gray outline-none invalid:border-b-2 invalid:border-guardsman_red`}
            />
            {/* <ErrorMessage>asd</ErrorMessage> */}
          </div>

          <div>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]+"
              placeholder="Комада на стању"
              name="kolicina"
              className={`mb-2 w-full rounded-full border-b-2 px-4 py-2 text-16 text-cod_gray outline-none invalid:border-b-2 invalid:border-guardsman_red`}
            />
            {/* <ErrorMessage>asd</ErrorMessage> */}
          </div>
        </div>

        <div className="mt-9 text-center">
          <Button type="submit">Додај</Button>
        </div>
      </form>
    </>
  );
};

export default Form;
