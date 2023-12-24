/*
  Warnings:

  - Added the required column `vraceno` to the `KorisnikKnjiga` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "KorisnikKnjiga" ADD COLUMN     "vraceno" BOOLEAN NOT NULL;
