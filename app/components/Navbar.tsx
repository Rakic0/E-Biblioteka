import Image from "next/image";
import bigLogo from "../images/bigLogo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full h-[11rem] flex items-center justify-center bg-white">
      <Link href={"/"} className="flex gap-2 items-center">
        <h1 className="text-33 text-smalt font-semibold">е-Библиотека</h1>
        <Image
          className="w-[31.3rem]"
          src={bigLogo}
          alt='Logo elektrotehničke škole "Mija Stanimirović'
        />
      </Link>
    </nav>
  );
};

export default Navbar;