import Button from "@/app/components/Button";
import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FC } from "react";
import AutorImage from "@/app/images/autor.png";

interface pageProps {
  params: { slug: string };
}

const prisma = new PrismaClient();

const fetchBookById = async (id: number) => {
  const book = await prisma.knjiga.findUnique({
    where: {
      id,
    },
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

  if (!book) {
    notFound();
  }

  return book;
};

const page: FC<pageProps> = async ({ params }) => {
  const bookId = +params.slug.split("-")[0];
  const book = await fetchBookById(bookId);

  return (
    <main>
      <div className="max-w-[100rem] mx-auto my-44">
        <div className="flex items-center justify-center gap-28 mb-44">
          <Image
            src={book.slika}
            alt={book.naslov}
            width={368}
            height={550}
            className="w-[36.8rem] h-[55rem] aspect-auto"
          />
          <div className="w-[43.4rem]">
            <span className="text-17 font-semibold text-guardsman_red mb-2 inline-block">
              {book.Kategorija.naziv}
            </span>
            <h1 className="text-39 font-semibold leading-none text-black mb-4">
              {book.naslov}
            </h1>
            <h3 className="text-20 font-semibold text-smalt mb-6">
              {book.Autor.ime} {book.Autor.prezime} - {book.godina_izdavanje}.
            </h3>
            <p className="text-20 font-medium text-cod_gray mb-6 text-justify">
              {book.opis}
            </p>
            <span className="text-16 text-cod_gray opacity-70 mb-4 block">
              Доступно {book.kolicina} ком.
            </span>

            <Button>Резервиши</Button>
          </div>
        </div>

        <svg
          className="w-[74.6rem] mx-auto mb-44"
          width="746"
          height="2"
          viewBox="0 0 746 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 1H746" stroke="black" />
        </svg>

        <div className="flex gap-11 items-center justify-center">
          <Image
            src={AutorImage}
            alt="Autor knjige"
            className="w-[21.5rem] h-[21.5rem]"
          />
          <div className="w-[43.4rem]">
            <span className="text-17 font-semibold text-guardsman_red mb-2 inline-block">
              О аутору
            </span>
            <h1 className="text-39 font-semibold leading-none text-black mb-4">
              {book.Autor.ime} {book.Autor.prezime}
            </h1>
            <p className="text-smalt text-justify text-20 font-medium leading-none">
              {book.Autor.opis}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
