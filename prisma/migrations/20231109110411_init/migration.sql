-- AlterTable
ALTER TABLE "Knjiga" ADD COLUMN     "godina_izdavanje" INTEGER NOT NULL DEFAULT 2023,
ADD COLUMN     "pregledano" INTEGER NOT NULL DEFAULT 0;
