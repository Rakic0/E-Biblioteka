import Link from "next/link";
import { FC } from "react";

interface AsideItemProps {
  text: string;
  link: string;
}

const AsideItem: FC<AsideItemProps> = ({ text, link }) => {
  return (
    <Link
      className="aside-item relative text-22 font-semibold block mb-16"
      href={`/admin/${link}`}
    >
      {text}
    </Link>
  );
};

export default AsideItem;
