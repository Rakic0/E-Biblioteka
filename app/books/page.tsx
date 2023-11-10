"use client";

import { useState } from "react";
import Form from "./components/Form";

const BooksPage = () => {
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const [inputs, setInputs] = useState({
    naziv: "",
    imeAutora: "",
    kategorija: "",
    godinaIzdavanjaOd: "",
    godinaIzdavanjaDo: "",
  });

  return (
    <main className="w-[140rem] mx-auto">
      <section className="filter__background w-full h-[22rem] rounded-3xl">
        <div className="pt-16 pl-20">
          <Form handleChangeInput={handleChangeInput} inputs={inputs} />
        </div>
      </section>
    </main>
  );
};

export default BooksPage;
