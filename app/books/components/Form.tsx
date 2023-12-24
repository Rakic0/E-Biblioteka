"use client";

import Button from "@/components/Button";
import { FC, useState } from "react";

const Form = () => {
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
    <form className="flex flex-col gap-6">
      <div className="flex items-center gap-6">
        <input
          type="text"
          name="naziv"
          id="naziv"
          placeholder="Назив књиге..."
          value={inputs.naziv}
          onChange={handleChangeInput}
          className="rounded-3xl px-4 py-2 text-16 text-cod_gray"
        />
        <Button>Претрага</Button>
      </div>
      <div className="flex w-[38.8rem] items-center gap-6">
        <input
          type="text"
          name="imeAutora"
          id="imeAutora"
          placeholder="Име аутора..."
          value={inputs.imeAutora}
          onChange={handleChangeInput}
          className="w-full rounded-3xl px-4 py-2 text-16 text-cod_gray"
        />
        <input
          type="text"
          name="kategorija"
          id="kategorija"
          placeholder="Категорија"
          value={inputs.kategorija}
          onChange={handleChangeInput}
          className="w-full rounded-3xl px-4 py-2 text-16 text-cod_gray"
        />
      </div>
      <div className="flex w-[38.8rem] items-center gap-6">
        <input
          type="text"
          name="godinaIzdavanjaOd"
          id="godinaIzdavanjaOd"
          placeholder="Год. издавања (од)"
          value={inputs.godinaIzdavanjaOd}
          onChange={handleChangeInput}
          className="w-full rounded-3xl px-4 py-2 text-16 text-cod_gray"
        />
        <input
          type="text"
          name="godinaIzdavanjaDo"
          id="godinaIzdavanjaDo"
          placeholder="Год. издавања (до)"
          value={inputs.godinaIzdavanjaDo}
          onChange={handleChangeInput}
          className="w-full rounded-3xl px-4 py-2 text-16 text-cod_gray"
        />
      </div>
    </form>
  );
};

export default Form;
