/*
  Warnings:

  - You are about to drop the column `delivired_type` on the `Vehicles` table. All the data in the column will be lost.
  - Added the required column `delivired_date` to the `Vehicles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vehicles" DROP COLUMN "delivired_type",
ADD COLUMN     "delivired_date" TEXT NOT NULL;
