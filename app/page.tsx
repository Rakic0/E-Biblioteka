import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

// Custom imports
import Book from "./components/Book";
import Button from "./components/Button";
import Separator from "./components/Separator";

// Images
import oProjektuSlika1 from "./images/oProjektuSlika1.png";
import oProjektuSlika2 from "./images/oProjektuSlika2.png";
import oProjektuSlika3 from "./images/oProjektuSlika3.png";
import Nikola from "./images/nidza.png";
import Rakic from "./images/rakic.png";
import Ivica from "./images/ivica.png";

const prisma = new PrismaClient();

const fetchMostReadedBooks = async () => {
  const books = await prisma.knjiga.findMany({
    take: 4,
    select: {
      id: true,
      naslov: true,
      slika: true,
      Autor: {
        select: {
          ime: true,
        },
      },
    },
  });

  return books;
};

export default async function Home() {
  const books = await fetchMostReadedBooks();

  return (
    <main className="mb-96">
      <section className="hero__background w-full h-[54.5rem] flex items-center justify-start mb-28">
        <div className="text-white w-[140rem] mx-auto">
          <div className="w-[44.7rem]">
            <h2 className="text-47 font-semibold leading-tight mb-4">
              Погледајте нашу понуду књига
            </h2>
            <p className="text-17 font-medium mb-4">
              Voluptas enim vero incidunt voluptatum in omnis. Unde et facere
              accusantium voluptatem fugiat aspernatur itaque ea. Praesentium
              eaque omnis et velit cupiditate minus asperiores ut.
            </p>
          </div>
          <Link href={`/books`}>
            <Button>Понуда</Button>
          </Link>
        </div>
      </section>

      <Separator text="Најчитаније" />

      <section className="w-[140rem] mx-auto mt-28">
        {/* Najcitanije */}
        <section className="grid grid-cols-4 mb-28">
          {books.map((book) => (
            <Book
              id={book.id}
              naslov={book.naslov}
              slika={book.slika}
              Autor={book.Autor}
              key={book.id}
            />
          ))}
        </section>

        {/* O projektu */}
        <section className="oProjektu__background w-full h-[57.4rem] relative text-white mb-28">
          <div className="px-28 py-24">
            <h3 className="text-47 font-semibold mb-4">
              О пројекту е-Библиотека
            </h3>
            <div className="w-[63.5rem]">
              <p className="text-16 font-medium text-justify mb-8">
                Voluptas enim vero incidunt voluptatum in omnis. Unde et facere
                accusantium voluptatem fugiat aspernatur itaque ea. Praesentium
                eaque omnis et velit cupiditate minus asperiores ut. Voluptas
                enim vero incidunt voluptatum in omnis. Unde et facere
                accusantium voluptatem fugiat aspernatur itaque ea. Praesentium
                eaque omnis et velit cupiditate minus asperiores ut.
              </p>
              <p className="text-16 font-medium text-justify mb-8">
                Voluptas enim vero incidunt voluptatum in omnis. Unde et facere
                accusantium voluptatem fugiat aspernatur itaque ea. Praesentium
                eaque omnis et velit cupiditate minus asperiores ut. Voluptas
                enim vero incidunt voluptatum in omnis. Unde et facere
                accusantium voluptatem fugiat aspernatur itaque ea. Praesentium
                eaque omnis et velit cupiditate minus asperiores ut.
              </p>
            </div>
            <Link href={`/books`}>
              <Button>Понуда</Button>
            </Link>
          </div>

          <div>
            <Image
              src={oProjektuSlika1}
              alt=""
              className="w-96 h-96 absolute top-[4.5rem] right-[4.5rem]"
            />
            <Image
              src={oProjektuSlika2}
              alt=""
              className="w-96 h-96 absolute top-[16.7rem] right-[20.5rem]"
            />
            <Image
              src={oProjektuSlika3}
              alt=""
              className="w-96 h-96 absolute top-[28.7rem] right-[36.2rem]"
            />
          </div>
        </section>

        <Separator text="Креатори" />

        {/* Kreatori */}
        <section className="mt-28">
          <div className="flex gap-6 items-center justify-center">
            <div className="text-right">
              <p className="text-guardsman_red text-29 font-semibold mb-2">
                Никола Ранђеловић
              </p>
              <div className="text-smalt font-semibold mb-4">
                <p className="text-18 mb-4">Дизајнер</p>

                <p className="text-14">
                  Instagram -{" "}
                  <a
                    href="https://www.instagram.com/sadmonstaa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @sadmonstaa
                  </a>
                </p>
                <p className="text-14 -mt-2">Discord - @sadmonstaa</p>
                <p className="text-14 -mt-2">
                  Github -{" "}
                  <a
                    href="https://github.com/iMonstaa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    iMonstaa
                  </a>{" "}
                </p>
              </div>
              <p className="text-cod_gray text-17 font-medium">
                Voluptas enim vero incidunt voluptatum in omnis. Unde et facere
                accusantium voluptatem fugiat aspernatur itaque ea. Praesentium
                eaque omnis et velit cupiditate minus asperiores ut.
              </p>
            </div>
            <Image
              src={Nikola}
              alt="Nikola"
              className="w-[27.5rem] h-[27.5rem]"
            />

            <Image src={Rakic} alt="Luka" className="w-[27.5rem] h-[27.5rem]" />
            <div className="text-left">
              <p className="text-guardsman_red text-29 font-semibold mb-2">
                Лука Ракић
              </p>
              <div className="text-smalt font-semibold mb-4">
                <p className="text-18 mb-4">Девелопер</p>

                <p className="text-14">
                  Instagram -{" "}
                  <a
                    href="https://www.instagram.com/lukaarakic"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @lukaarakic
                  </a>
                </p>
                <p className="text-14 -mt-2">Discord - @rakic</p>
                <p className="text-14 -mt-2">
                  Github -{" "}
                  <a
                    href="https://github.com/rakic0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Rakic0
                  </a>{" "}
                </p>
              </div>
              <p className="text-cod_gray text-17 font-medium">
                Voluptas enim vero incidunt voluptatum in omnis. Unde et facere
                accusantium voluptatem fugiat aspernatur itaque ea. Praesentium
                eaque omnis et velit cupiditate minus asperiores ut.
              </p>
            </div>
          </div>

          <div className="mx-auto my-24">
            <svg
              className="w-74.6rem mx-auto"
              height="2"
              viewBox="0 0 746 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 1H746" stroke="black" />
            </svg>
          </div>

          <div className="flex gap-4 items-center justify-center w-[50rem] mx-auto ">
            <Image src={Ivica} alt="" className="w-[20rem] h-[20rem]" />
            <div className="text-left">
              <p className="text-guardsman_red text-29 font-semibold mb-2">
                Ивица Станковић
              </p>
              <div className="text-smalt font-semibold mb-4">
                <p className="text-18 mb-4">ментор, професор у школи</p>
              </div>
              <p className="text-cod_gray text-17 font-medium leading-tight">
                Voluptas enim vero incidunt voluptatum in omnis. Unde et facere
                accusantium voluptatem fugiat aspernatur itaque ea. Praesentium
                eaque omnis et velit cupiditate.
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
