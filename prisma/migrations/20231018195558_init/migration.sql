-- DropForeignKey
ALTER TABLE "To" DROP CONSTRAINT "To_vehiclesId_fkey";

-- AlterTable
ALTER TABLE "To" ALTER COLUMN "vehiclesId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "To" ADD CONSTRAINT "To_vehiclesId_fkey" FOREIGN KEY ("vehiclesId") REFERENCES "Vehicles"("id") ON DELETE SET NULL ON UPDATE CASCADE;
