import Button from "@/components/Button";
import ErrorMessage from "../components/ErrorMessage";
import Input from "../components/Input";
import { createBook } from "@/lib/actions";

const DodajKnjiguPage = () => {
  return (
    <>
      <form action={createBook}>
        <div>
          <input
            type="text"
            name="naslov"
            placeholder="Назив књиге..."
            className={`mb-2 w-full rounded-full border-b-2 px-4 py-2 text-16 text-cod_gray outline-none invalid:border-b-2 invalid:border-guardsman_red`}
          />
          {/* <ErrorMessage>aasd</ErrorMessage> */}
        </div>

        <div className="mt-9 flex w-full items-baseline justify-between gap-4">
          <div className="relative">
            <input
              type="text"
              name="autor"
              placeholder="Име и презиме аутора"
              className={`mb-2 w-full rounded-full border-b-2 px-4 py-2 text-16 text-cod_gray outline-none invalid:border-b-2 invalid:border-guardsman_red`}
            />

            {/* <ErrorMessage>asd</ErrorMessage> */}
          </div>

          <div className="relative">
            <input
              type="text"
              name="kategorija"
              placeholder="Категорија"
              className={`mb-2 w-full rounded-full border-b-2 px-4 py-2 text-16 text-cod_gray outline-none invalid:border-b-2 invalid:border-guardsman_red`}
            />

            {/* <ErrorMessage>asd</ErrorMessage> */}
          </div>
        </div>

        <div className="mt-9 flex w-full items-baseline justify-between gap-4">
          <div>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]+"
              placeholder="Година издавања (од)"
              name="godina"
              className={`mb-2 w-full rounded-full border-b-2 px-4 py-2 text-16 text-cod_gray outline-none invalid:border-b-2 invalid:border-guardsman_red`}
            />
            {/* <ErrorMessage>asd</ErrorMessage> */}
          </div>

          <div>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]+"
              placeholder="Комада на стању"
              name="kolicina"
              className={`mb-2 w-full rounded-full border-b-2 px-4 py-2 text-16 text-cod_gray outline-none invalid:border-b-2 invalid:border-guardsman_red`}
            />
            {/* <ErrorMessage>asd</ErrorMessage> */}
          </div>
        </div>

        <div className="mx-auto mt-9 flex h-[21.5rem] w-[14.4rem] items-center justify-center bg-alto">
          {/* <div className="mx-auto flex h-[4.8rem] w-[11.9rem] items-center justify-center rounded-full bg-smalt">
            <label
              htmlFor="file"
              className="cursor-pointer text-center text-13 font-semibold leading-none text-white"
            >
              Додај или измени слику
            </label>
          </div> */}

          <input
            className={`mb-2 w-full rounded-full border-b-2 px-4 py-2 text-16 text-cod_gray outline-none invalid:border-b-2 invalid:border-guardsman_red`}
            type="file"
            name="file"
            accept="image/png, image/jpg, image/jpeg"
          />
        </div>
        {/* <ErrorMessage>asd</ErrorMessage> */}

        <div className="mt-9 text-center">
          <Button type="submit">Додај</Button>
        </div>
      </form>
    </>
  );
};

export default DodajKnjiguPage;
