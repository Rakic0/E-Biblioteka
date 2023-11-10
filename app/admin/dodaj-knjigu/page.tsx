"use client";

import Button from "@/app/components/Button";
import { useState } from "react";
import { isCyrillic, customTransliterate } from "@/lib/cyrillicToLatin";

const DodajKnjiguPage = () => {
  const [inputs, setInputs] = useState({
    naziv: "",
    imeAutora: "",
    kategorija: "",
    godinaIzdavanja: "",
    kolicina: "",
    file: null,
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isCyrillic(inputs.naziv)) alert("Nije cirilica");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="naziv"
        id="naziv"
        placeholder="Назив књиге..."
        required
        className="rounded-3xl text-cod_gray text-16 px-4 py-2 w-full mb-9"
        onChange={handleChangeInput}
      />

      <div className="flex items-center justify-center w-full gap-4 mb-9">
        <input
          type="text"
          name="imeAutora"
          required
          id="imeAutora"
          placeholder="Име аутора..."
          className="rounded-3xl text-cod_gray text-16 px-4 py-2 w-full"
          onChange={handleChangeInput}
        />
        <input
          type="text"
          name="kategorija"
          id="kategorija"
          placeholder="Категорија"
          className="rounded-3xl text-cod_gray text-16 px-4 py-2 w-full"
          onChange={handleChangeInput}
        />
      </div>

      <div className="flex items-center justify-center w-full gap-4 mb-9">
        <input
          type="number"
          name="godinaIzdavanja"
          required
          id="godinaIzdavanja"
          placeholder="Година издавања (од)"
          min={1000}
          max={new Date().getFullYear()}
          className="rounded-3xl text-cod_gray text-16 px-4 py-2 w-full"
          onChange={handleChangeInput}
        />

        <input
          type="number"
          name="kolicina"
          id="kolicina"
          placeholder="Комада на стању"
          required
          min={0}
          max={100}
          className="rounded-3xl text-cod_gray text-16 px-4 py-2 w-full"
          onChange={handleChangeInput}
        />
      </div>

      <div className="w-[14.4rem] h-[21.5rem] mx-auto bg-alto flex items-center justify-center mb-9">
        <div className="bg-smalt w-[11.9rem] h-[4.8rem] mx-auto rounded-3xl flex items-center justify-center">
          <label
            htmlFor="file"
            className="text-13 font-semibold text-white text-center leading-none cursor-pointer"
          >
            Додај или измени слику
          </label>
        </div>

        <input
          type="file"
          name="file"
          id="file"
          className="hidden"
          required
          onChange={handleChangeInput}
        />
      </div>

      <div className="text-center">
        <Button>Додај</Button>
      </div>
    </form>
  );
};

export default DodajKnjiguPage;
