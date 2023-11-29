import Image from "next/image";
import bigLogo from "@/app/images/bigLogo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="nav fixed left-0 top-0 z-50 flex h-[11rem] w-full items-center justify-center bg-white">
      <Link href={"/"} className="flex items-center gap-2">
        <h1 className="text-33 font-semibold text-smalt">е-Библиотека</h1>
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
