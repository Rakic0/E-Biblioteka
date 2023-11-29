"use server";

import { z } from "zod";
import prismadb from "./prismadb";

const currentYear = new Date().getFullYear();

const FormSchema = z.object({
  naslov: z.string().min(3),
  autor: z.string().min(3),
  kategorija: z.string().min(1),
  godina: z.coerce.number().min(1900).max(currentYear),
  kolicina: z.coerce.number().min(0),
  file: z.object({
    size: z.number(),
    type: z.string(),
    name: z.string(),
    lastModified: z.number(),
  }),
});

export async function createBook(formData: FormData) {
  try {
    const { naslov } = FormSchema.parse({
      naslov: formData.get("naslov"),
      autor: formData.get("autor"),
      kategorija: formData.get("kategorija"),
      godina: Number(formData.get("godina")),
      kolicina: Number(formData.get("kolicina")),
      file: formData.get("file"),
    });

    // const book = await prismadb.knjiga.create({
    //   data: {
    //     naslov,
    //   },
    // });
  } catch (error) {
    console.error(error);
  }
}
