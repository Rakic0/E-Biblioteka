"use server";

import { z } from "zod";
import prismadb from "./prismadb";
import axios from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const currentYear = new Date().getFullYear();
const FormSchema = z.object({
  naslov: z.string().min(3),
  autor: z.string().min(1),
  kategorija: z.string().min(1),
  godina: z.coerce.number().min(1900).max(currentYear),
  kolicina: z.coerce.number().min(0),
});

export async function createBook(formData: FormData) {
  try {
    let { naslov, autor, kategorija, godina, kolicina } = FormSchema.parse({
      naslov: formData.get("naslov"),
      autor: formData.get("autor"),
      kategorija: formData.get("kategorija"),
      godina: Number(formData.get("godina")),
      kolicina: Number(formData.get("kolicina")),
    });

    const formattedTitle = naslov
      .toLocaleLowerCase()
      .replace(/ /g, "+")
      .replace(/,/g, "");

    const slika = await axios(
      `https://serpapi.com/search.json?engine=google_images&q=${formattedTitle}knjiga&google_domain=google.com&gl=rs&hl=en&api_key=31f7751b62618b42bbb279248686cff907f31cbad0aacf81e96965a6a08adfb4`,
    );

    const book = await prismadb.knjiga.create({
      data: {
        naslov,
        kolicina,
        godina_izdavanje: godina,
        opis: "Voluptas enim vero incidunt voluptatum in omnis. Unde et facere accusantium voluptatem fugiat aspernatur itaque ea. Praesentium eaque omnis et velit cupiditate. Voluptas enim vero incidunt voluptatum in omnis.",
        autor_id: +autor,
        kategorija_id: +kategorija,
        slika: slika.data.images_results[0].original,
      },
    });

    revalidatePath("/admin");
    redirect("/admin");
  } catch (error) {
    console.error(error);
  }
}
