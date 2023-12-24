import Button from "@/components/Button";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FC } from "react";
import AutorImage from "@/app/images/autor.png";
import prismadb from "@/lib/prismadb";

interface pageProps {
  params: { slug: string };
}

const fetchBookById = async (id: number) => {
  const book = await prismadb.knjiga.findUnique({
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
      <div className="mx-auto my-52 mt-64 max-w-[100rem]">
        <div className="mb-44 flex items-center justify-center gap-28">
          <Image
            src={book.slika}
            alt={book.naslov}
            width={368}
            height={550}
            className="aspect-auto h-[55rem] w-[36.8rem]"
          />
          <div className="w-[43.4rem]">
            <span className="mb-2 inline-block text-17 font-semibold text-guardsman_red">
              {book.Kategorija.naziv}
            </span>
            <h1 className="mb-4 text-39 font-semibold leading-none text-black">
              {book.naslov}
            </h1>
            <h3 className="mb-6 text-20 font-semibold text-smalt">
              {book.Autor.ime} {book.Autor.prezime} - {book.godina_izdavanje}.
            </h3>
            <p className="mb-6 text-justify text-20 font-medium text-cod_gray">
              {book.opis}
            </p>
            <span className="mb-4 block text-16 text-cod_gray opacity-70">
              Доступно {book.kolicina} ком.
            </span>

            <Button>Резервиши</Button>
          </div>
        </div>

        <svg
          className="mx-auto mb-44 w-[74.6rem]"
          width="746"
          height="2"
          viewBox="0 0 746 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 1H746" stroke="black" />
        </svg>

        <div className="flex items-center justify-center gap-11">
          <Image
            src={AutorImage}
            alt="Autor knjige"
            className="h-[21.5rem] w-[21.5rem]"
          />
          <div className="w-[43.4rem]">
            <span className="mb-2 inline-block text-17 font-semibold text-guardsman_red">
              О аутору
            </span>
            <h1 className="mb-4 text-39 font-semibold capitalize leading-none text-black">
              {book.Autor.ime} {book.Autor.prezime}
            </h1>
            <p className="text-justify text-20 font-medium leading-none text-smalt">
              {book.Autor.opis}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
