import Image from "next/image";
import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { BiLogoFacebook, BiPhone } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import { LiaMapPinSolid } from "react-icons/lia";

// Images
import Logo from "../images/footerLogo.png";

const Footer = () => {
  return (
    <footer className="bg-smalt w-full h-[45.6rem] relative">
      <div className="max-w-[140rem] mx-auto pt-36">
        <div className="grid grid-cols-3 justify-items-center">
          <div>
            <Image
              src={Logo}
              alt='Logo elektrotehničke škole "Mija Stanimirović'
              className="w-[26.6rem] h-24 mb-8"
            />
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/etsmijastanimirovic"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 inline-block text-guardsman_red text-24 rounded-lg hover:text-smalt"
              >
                <BiLogoFacebook />
              </a>

              <a
                href="https://www.facebook.com/EtsMijaStanimirovic/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 inline-block text-guardsman_red text-24 rounded-lg hover:text-smalt"
              >
                <AiOutlineInstagram />
              </a>

              <a
                href="https://twitter.com/etsmijanis"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 inline-block text-guardsman_red text-24 rounded-lg hover:text-smalt"
              >
                <RiTwitterXFill />
              </a>
            </div>
          </div>

          <div className="text-white">
            <p className="text-24 font-semibold text-center mb-10">
              ИНФОРМАЦИЈЕ
            </p>

            <span className="flex items-center text-16 gap-4 mb-6">
              <LiaMapPinSolid className="text-24 text-guardsman_red" /> Булевар
              Светог цара Константина бр 82-84
            </span>

            <a
              href="mailto:etsmija@gmail.com"
              className="flex items-center text-16 gap-4 hover:text-guardsman_red mb-6"
            >
              <AiOutlineMail className="text-24 text-guardsman_red" />
              etsmija@gmail.com
            </a>

            <a
              href="tel:+38118551210"
              className="flex items-center text-16 gap-4 hover:text-guardsman_red mb-6"
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
              className="w-[40rem] h-96"
            ></iframe>
          </div>
        </div>
        <div className="border-t border-dashed w-full h-1 mt-10"></div>
        <p className="text-white text-14 opacity-50 absolute bottom-5 left-1/2 -translate-x-1/2">
          © 2022 ЕТШ Мија &quot;Станимировић&quot; - Ниш
        </p>
      </div>
    </footer>
  );
};

export default Footer;
