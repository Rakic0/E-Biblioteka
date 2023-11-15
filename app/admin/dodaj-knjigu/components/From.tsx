"use client";

import Button from "@/app/components/Button";
import { FC, FormEvent, FormEventHandler, useState } from "react";
import Input from "../../components/Input";
import ErrorMessage from "../../components/ErrorMessage";
import { isCyrillic } from "@/lib/cyrillicToLatin";
import { Autor, Kategorija } from "@prisma/client";
import Autocomplete from "../../components/Autocomplete";

interface FromProps {
  handleOnAutorChange: (text: string) => Autor[];
  handleOnKategorijaChange: (text: string) => Kategorija[];
}

type inputDataProps = {
  naziv: string;
  autor: string;
  godina: string;
  kategorija: string;
  kolicina: string;
  file: string;
};

enum Errors {
  OBAVEZNO = "Ово поље је обавезно",
  CIRILICA = "Мора бити ћирилично писмо",
}

const From: FC<FromProps> = ({
  handleOnAutorChange,
  handleOnKategorijaChange,
}) => {
  const [inputData, setInputData] = useState<inputDataProps>({
    naziv: "",
    autor: "",
    godina: "",
    kategorija: "",
    kolicina: "",
    file: "",
  });
  const [error, setError] = useState<inputDataProps>({
    naziv: "",
    autor: "",
    godina: "",
    kategorija: "",
    kolicina: "",
    file: "",
  });

  //@ts-ignore
  const [autori, setAutori] = useState<Autor[]>([{}]);
  //@ts-ignore
  const [kategorije, setKategorije] = useState<Kategorija[]>([{}]);
  //@ts-ignore
  const [autor, setAutor] = useState<Autor>({});
  //@ts-ignore
  const [kategorija, setKategorija] = useState<Kategorija>({});

  const handleOnChange = async (e: any) => {
    setInputData((prev) => ({ ...prev, [e.target.id]: e.target.value }));

    if (e.target.type === "text" && !isCyrillic(e.target.value)) {
      setError((prev) => ({ ...prev, [e.target.id]: Errors.CIRILICA }));
    } else {
      setError((prev) => ({ ...prev, [e.target.id]: "" }));
    }

    // Fetchujemo autore
    if (e.target.id === "autor") {
      if (!isCyrillic(e.target.value)) return;

      const data = await handleOnAutorChange(e.target.value);
      setAutori(data);

      if (data?.length === 1) {
        setAutor(data[0]);
      }
    }

    // Fetchijemo kategorije
    if (e.target.id === "kategorija") {
      if (!isCyrillic(e.target.value)) return;

      const data = await handleOnKategorijaChange(e.target.value);
      setKategorije(data);

      if (data?.length === 1) {
        setKategorija(data[0]);
      }
    }
  };

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    let passedValidation = {
      emptyInput: true,
      cyrilic: true,
    };

    // Checking if there are any empty inputs
    Object.keys(inputData).forEach((k) => {
      //@ts-ignore
      if (!inputData[k]) {
        setError((prev) => ({ ...prev, [k]: Errors.OBAVEZNO }));
        passedValidation.emptyInput = false;
      } else {
        setError((prev) => ({ ...prev, [k]: "" }));
        passedValidation.emptyInput = true;
      }
    });

    // Checking if naziv, autor and kategorija are written on cyrilic
    const textInputs = e.target.querySelectorAll('input[type="text"]');
    textInputs.forEach((input: { value: string; id: any }) => {
      if (!isCyrillic(input.value)) {
        setError((prev) => ({ ...prev, [input.id]: Errors.CIRILICA }));
        passedValidation.cyrilic = false;
      } else {
        passedValidation.cyrilic = true;
      }
    });

    if (Object.values(passedValidation).some((err) => err === false)) return;

    console.log("Submited");
  };

  return (
    <>
      <form onSubmit={handleOnSubmit} onChange={handleOnChange}>
        <div>
          <Input type="text" name="naziv" placeholder="Назив књиге..." />
          <ErrorMessage>{error?.naziv}</ErrorMessage>
        </div>

        <div className="mt-9 flex w-full items-baseline justify-between gap-4">
          <div className="relative">
            <Autocomplete
              data={autori}
              type="text"
              name="autor"
              placeholder="Име и презиме аутора"
            />

            <ErrorMessage>{error?.autor}</ErrorMessage>
          </div>

          <div className="relative">
            <Autocomplete
              data={kategorije}
              type="text"
              name="kategorija"
              placeholder="Категорија"
            />

            <ErrorMessage>{error?.kategorija}</ErrorMessage>
          </div>
        </div>

        <div className="mt-9 flex w-full items-baseline justify-between gap-4">
          <div>
            <Input
              type="number"
              placeholder="Година издавања (од)"
              name="godina"
            />
            <ErrorMessage>{error?.godina}</ErrorMessage>
          </div>

          <div>
            <Input
              type="number"
              placeholder="Комада на стању"
              name="kolicina"
            />
            <ErrorMessage>{error?.kolicina}</ErrorMessage>
          </div>
        </div>

        <div className="mx-auto mt-9 flex h-[21.5rem] w-[14.4rem] items-center justify-center bg-alto">
          <div className="mx-auto flex h-[4.8rem] w-[11.9rem] items-center justify-center rounded-full bg-smalt">
            <label
              htmlFor="file"
              className="cursor-pointer text-center text-13 font-semibold leading-none text-white"
            >
              Додај или измени слику
            </label>
          </div>

          <Input
            type="file"
            name="file"
            className="hidden"
            otherParams={{
              accept: "image/png, image/jpg, image/jpeg",
            }}
          />
        </div>
        <ErrorMessage>{error?.file}</ErrorMessage>

        <div className="mt-9 text-center">
          <Button type="submit">Додај</Button>
        </div>
      </form>
    </>
  );
};

export default From;
