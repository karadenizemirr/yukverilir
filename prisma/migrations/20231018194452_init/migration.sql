/*
  Warnings:

  - Added the required column `country` to the `Coordinates` table without a default value. This is not possible if the table is not empty.
  - Added the required column `district` to the `Coordinates` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Coordinates" ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "district" TEXT NOT NULL;
