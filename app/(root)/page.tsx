import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

// Custom imports
import Book from "@/components/Book";
import Button from "@/components/Button";
import Separator from "@/components/Separator";

// Images
import oProjektuSlika1 from "@/app/images/oProjektuSlika1.png";
import oProjektuSlika2 from "@/app/images/oProjektuSlika2.png";
import oProjektuSlika3 from "@/app/images/oProjektuSlika3.png";
import Nikola from "@/app/images/nidza.png";
import Rakic from "@/app/images/rakic.png";
import Ivica from "@/app/images/ivica.png";

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
    <main className="mb-96 mt-44">
      <section className="hero__background mb-28 flex h-[54.5rem] w-full items-center justify-start">
        <div className="mx-auto w-[140rem] text-white">
          <div className="w-[44.7rem]">
            <h2 className="mb-4 text-47 font-semibold leading-tight">
              Погледајте нашу понуду књига
            </h2>
            <p className="mb-4 text-17 font-medium">
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

      <section className="mx-auto mt-28 w-[140rem]">
        {/* Najcitanije */}
        <section className="mb-28 grid grid-cols-4">
          {books?.map((book) => (
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
        <section className="oProjektu__background relative mb-28 h-[57.4rem] w-full text-white">
          <div className="px-28 py-24">
            <h3 className="mb-4 text-47 font-semibold">
              О пројекту е-Библиотека
            </h3>
            <div className="w-[63.5rem]">
              <p className="mb-8 text-justify text-16 font-medium">
                Voluptas enim vero incidunt voluptatum in omnis. Unde et facere
                accusantium voluptatem fugiat aspernatur itaque ea. Praesentium
                eaque omnis et velit cupiditate minus asperiores ut. Voluptas
                enim vero incidunt voluptatum in omnis. Unde et facere
                accusantium voluptatem fugiat aspernatur itaque ea. Praesentium
                eaque omnis et velit cupiditate minus asperiores ut.
              </p>
              <p className="mb-8 text-justify text-16 font-medium">
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
              className="absolute right-[4.5rem] top-[4.5rem] h-96 w-96"
            />
            <Image
              src={oProjektuSlika2}
              alt=""
              className="absolute right-[20.5rem] top-[16.7rem] h-96 w-96"
            />
            <Image
              src={oProjektuSlika3}
              alt=""
              className="absolute right-[36.2rem] top-[28.7rem] h-96 w-96"
            />
          </div>
        </section>

        <Separator text="Креатори" />

        {/* Kreatori */}
        <section className="mt-28">
          <div className="flex items-center justify-center gap-6">
            <div className="text-right">
              <p className="mb-2 text-29 font-semibold text-guardsman_red">
                Никола Ранђеловић
              </p>
              <div className="mb-4 font-semibold text-smalt">
                <p className="mb-4 text-18">Дизајнер</p>

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
                <p className="-mt-2 text-14">Discord - @sadmonstaa</p>
                <p className="-mt-2 text-14">
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
              <p className="text-17 font-medium text-cod_gray">
                Voluptas enim vero incidunt voluptatum in omnis. Unde et facere
                accusantium voluptatem fugiat aspernatur itaque ea. Praesentium
                eaque omnis et velit cupiditate minus asperiores ut.
              </p>
            </div>
            <Image
              src={Nikola}
              alt="Nikola"
              className="h-[27.5rem] w-[27.5rem]"
            />

            <Image src={Rakic} alt="Luka" className="h-[27.5rem] w-[27.5rem]" />
            <div className="text-left">
              <p className="mb-2 text-29 font-semibold text-guardsman_red">
                Лука Ракић
              </p>
              <div className="mb-4 font-semibold text-smalt">
                <p className="mb-4 text-18">Девелопер</p>

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
                <p className="-mt-2 text-14">Discord - @rakic</p>
                <p className="-mt-2 text-14">
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
              <p className="text-17 font-medium text-cod_gray">
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

          <div className="mx-auto flex w-[50rem] items-center justify-center gap-4 ">
            <Image src={Ivica} alt="" className="h-[20rem] w-[20rem]" />
            <div className="text-left">
              <p className="mb-2 text-29 font-semibold text-guardsman_red">
                Ивица Станковић
              </p>
              <div className="mb-4 font-semibold text-smalt">
                <p className="mb-4 text-18">ментор, професор у школи</p>
              </div>
              <p className="text-17 font-medium leading-tight text-cod_gray">
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
