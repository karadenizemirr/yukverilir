/*
  Warnings:

  - Added the required column `price_type` to the `Advert` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Advert" ADD COLUMN     "price_type" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "isActive" SET DEFAULT false;
