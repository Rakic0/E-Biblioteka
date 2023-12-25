"use server";

import Book from "@/components/Book";
import Form from "./components/Form";
import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";
import { unstable_noStore } from "next/cache";

const prisma = new PrismaClient();

const fetchBooks = async () => {
  unstable_noStore();

  const books = await prisma.knjiga.findMany({
    select: {
      id: true,
      naslov: true,
      slika: true,
      opis: true,
      kolicina: true,
      godina_izdavanje: true,
      Kategorija: {
        select: {
          naziv: true,
        },
      },
      Autor: {
        select: {
          ime: true,
          prezime: true,
          opis: true,
        },
      },
    },
  });

  if (!books) notFound();

  return books;
};

const BooksPage = async () => {
  const books = await fetchBooks();

  return (
    <main className="mx-auto mb-64 mt-72 w-[140rem]">
      <section className="filter__background mb-24 h-[22rem] w-full rounded-3xl">
        <div className="ml-14 flex h-full items-center">
          <Form />
        </div>
      </section>

      <section>
        <div className="grid grid-cols-4 gap-y-12">
          {books.map((book) => (
            <Book
              Autor={book.Autor}
              id={book.id}
              naslov={book.naslov}
              slika={book.slika}
              key={book.id}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default BooksPage;
