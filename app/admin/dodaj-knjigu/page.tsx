import prismadb from "@/lib/prismadb";
import Form from "./components/form";

const fetchAuthors = async () => {
  const authors = await prismadb.autor.findMany({
    select: {
      ime: true,
      prezime: true,
      id: true,
    },
  });

  if (!authors) return;

  return authors;
};

const fetchCategories = async () => {
  const categories = await prismadb.kategorija.findMany({
    select: {
      naziv: true,
      id: true,
    },
  });

  if (!categories) return;

  return categories;
};

const DodajKnjiguPage = async () => {
  const authors = await fetchAuthors();
  const categories = await fetchCategories();

  const formattedAuthors = authors?.map((author) => ({
    value: `${author.id}`,
    label: `${author.ime} ${author.prezime}`,
  }));
  const formattedCategories = categories?.map((category) => ({
    value: `${category.id}`,
    label: `${category.naziv}`,
  }));

  return (
    <main>
      <Form authors={formattedAuthors} categories={formattedCategories} />
    </main>
  );
};

export default DodajKnjiguPage;
