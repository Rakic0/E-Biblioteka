/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Autor" (
    "id" SERIAL NOT NULL,
    "ime" TEXT NOT NULL,
    "prezime" TEXT NOT NULL,
    "opis" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Autor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kategorija" (
    "id" SERIAL NOT NULL,
    "naziv" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Kategorija_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Knjiga" (
    "id" SERIAL NOT NULL,
    "naslov" TEXT NOT NULL,
    "opis" TEXT NOT NULL,
    "kolicina" INTEGER NOT NULL,
    "slika" TEXT NOT NULL,
    "autor_id" INTEGER NOT NULL,
    "kategorija_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Knjiga_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KorisnikKnjiga" (
    "id" SERIAL NOT NULL,
    "knjiga_id" INTEGER NOT NULL,
    "korisnik_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "KorisnikKnjiga_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Korisnik" (
    "id" SERIAL NOT NULL,
    "ime" TEXT NOT NULL,
    "prezime" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "admin" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Korisnik_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Knjiga" ADD CONSTRAINT "Knjiga_autor_id_fkey" FOREIGN KEY ("autor_id") REFERENCES "Autor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Knjiga" ADD CONSTRAINT "Knjiga_kategorija_id_fkey" FOREIGN KEY ("kategorija_id") REFERENCES "Kategorija"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KorisnikKnjiga" ADD CONSTRAINT "KorisnikKnjiga_knjiga_id_fkey" FOREIGN KEY ("knjiga_id") REFERENCES "Knjiga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KorisnikKnjiga" ADD CONSTRAINT "KorisnikKnjiga_korisnik_id_fkey" FOREIGN KEY ("korisnik_id") REFERENCES "Korisnik"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
