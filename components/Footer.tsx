import Image from "next/image";
import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { BiLogoFacebook, BiPhone } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import { LiaMapPinSolid } from "react-icons/lia";

// Images
import Logo from "@/app/images/footerLogo.png";

const Footer = () => {
  return (
    <footer className="relative h-[45.6rem] w-full bg-smalt">
      <div className="mx-auto max-w-[140rem] pt-36">
        <div className="grid grid-cols-3 justify-items-center">
          <div>
            <Image
              src={Logo}
              alt='Logo elektrotehničke škole "Mija Stanimirović'
              className="mb-8 h-24 w-[26.6rem]"
            />
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/etsmijastanimirovic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-white p-2 text-24 text-guardsman_red hover:text-smalt"
              >
                <BiLogoFacebook />
              </a>

              <a
                href="https://www.facebook.com/EtsMijaStanimirovic/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-white p-2 text-24 text-guardsman_red hover:text-smalt"
              >
                <AiOutlineInstagram />
              </a>

              <a
                href="https://twitter.com/etsmijanis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-white p-2 text-24 text-guardsman_red hover:text-smalt"
              >
                <RiTwitterXFill />
              </a>
            </div>
          </div>

          <div className="text-white">
            <p className="mb-10 text-center text-24 font-semibold">
              ИНФОРМАЦИЈЕ
            </p>

            <span className="mb-6 flex items-center gap-4 text-16">
              <LiaMapPinSolid className="text-24 text-guardsman_red" /> Булевар
              Светог цара Константина бр 82-84
            </span>

            <a
              href="mailto:etsmija@gmail.com"
              className="mb-6 flex items-center gap-4 text-16 hover:text-guardsman_red"
            >
              <AiOutlineMail className="text-24 text-guardsman_red" />
              etsmija@gmail.com
            </a>

            <a
              href="tel:+38118551210"
              className="mb-6 flex items-center gap-4 text-16 hover:text-guardsman_red"
            >
              <BiPhone className="text-24 text-guardsman_red" />
              +381 (0) 18 551 210
            </a>
          </div>

          <div>
            <iframe
              loading="lazy"
              src="https://maps.google.com/maps?q=Elektrotehnicka%20skola%20Mija%20Stanimirovic&amp;t=m&amp;z=12&amp;output=embed&amp;iwloc=near"
              title="Elektrotehnicka skola Mija Stanimirovic"
              aria-label="Elektrotehnicka skola Mija Stanimirovic"
              className="h-96 w-[40rem]"
            ></iframe>
          </div>
        </div>
        <div className="mt-10 h-1 w-full border-t border-dashed"></div>
        <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-14 text-white opacity-50">
          © 2022 ЕТШ Мија &quot;Станимировић&quot; - Ниш
        </p>
      </div>
    </footer>
  );
};

export default Footer;
