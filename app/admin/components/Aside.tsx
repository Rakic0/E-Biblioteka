import { FC } from "react";
import AsideItem from "./AsideItem";

interface AsideProps {}

const Aside: FC<AsideProps> = ({}) => {
  return (
    <aside className="w-[35rem] h-[36.5rem] bg-smalt text-white rounded-3xl p-10">
      <AsideItem text="Додај књигу" link="dodaj-knjigu" />
      <AsideItem text="Уреди налоге" link="uredi-naloge" />
      <AsideItem text="Уреди књигу" link="uredi-knjigu" />
      <AsideItem text="Невраћене књиге" link="nevracene-knjige" />
      <AsideItem text="Аналитика" link="analitika" />
    </aside>
  );
};

export default Aside;
