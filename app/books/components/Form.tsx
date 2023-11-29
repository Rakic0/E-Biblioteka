import Button from "@/components/Button";
import { FC, useState } from "react";

interface FormProps {
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputs: {
    naziv: string;
    imeAutora: string;
    kategorija: string;
    godinaIzdavanjaOd: string;
    godinaIzdavanjaDo: string;
  };
}

const Form: FC<FormProps> = ({ handleChangeInput, inputs }) => {
  return (
    <form>
      <div className="flex items-center gap-6">
        <input
          type="text"
          name="naziv"
          id="naziv"
          placeholder="Назив књиге..."
          value={inputs.naziv}
          onChange={handleChangeInput}
          className="rounded-3xl px-4 py-2 text-16 text-cod_gray"
        />
        <Button>Претрага</Button>
      </div>
    </form>
  );
};

export default Form;
