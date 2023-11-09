import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import Button from "./Button";

interface BookProps {
  id: Number;
  naslov: string;
  slika: string;
  Autor: { ime: string };
}

const Book: FC<BookProps> = ({ id, naslov, slika, Autor }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={slika}
        alt={naslov}
        width={287}
        height={426}
        className="w-[28.7rem] h-[42.6rem] mb-2"
      />

      <span className="text-black text-24 font-semibold text-center mb-2">
        {naslov}
      </span>
      <span className="text-cod_gray text-16 font-semibold mb-2">
        {Autor.ime}
      </span>

      <Link
        href={`/book/${id}-${naslov
          .toLocaleLowerCase()
          .replace(/ /g, "-")
          .replace(/,/g, "")}`}
      >
        <Button>Више о књизи</Button>
      </Link>
    </div>
  );
};

export default Book;
