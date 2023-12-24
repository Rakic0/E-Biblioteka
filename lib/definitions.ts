export type Book = {
  naziv: string;
  autor: string;
  kategoija: string;
  godina: number;
  kolicina: number;
  file: File;
};

export type AuthorDataProps = {
  value: string;
  label: string;
};
