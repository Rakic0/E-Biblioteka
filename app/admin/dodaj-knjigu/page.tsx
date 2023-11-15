import { Autor, PrismaClient } from "@prisma/client";
import Form from "./components/From";
import { ChangeEvent } from "react";
import { SubmitHandler } from "react-hook-form";

export type Inputs = {
  naziv: string;
  imeAutora: string;
  kategorija: string;
  godinaIzdavanja: number;
  kolicina: number;
  file: string;
};

const prisma = new PrismaClient();

const fetchAuthorsByInput = async (text: string) => {
  const authors = await prisma.autor.findMany({
    where: {
      ime: {
        contains: text,
        mode: "insensitive",
      },
    },
    take: 3,
  });

  return authors;
};

const fetchKategorijeByInput = async (text: string) => {
  const authors = await prisma.kategorija.findMany({
    where: {
      naziv: {
        contains: text,
        mode: "insensitive",
      },
    },
    take: 3,
  });

  return authors;
};

const DodajKnjiguPage = () => {
  const handleOnAutorChange = async (text: string) => {
    "use server";

    if (text.length < 3) return;

    return await fetchAuthorsByInput(text);
  };

  const handleOnKategorijaChange = async (text: string) => {
    "use server";

    if (text.length < 3) return;

    return await fetchKategorijeByInput(text);
  };

  return (
    // prettier-ignore
    //@ts-ignore
    <Form handleOnAutorChange={handleOnAutorChange} handleOnKategorijaChange={handleOnKategorijaChange}/>
  );
};

export default DodajKnjiguPage;
