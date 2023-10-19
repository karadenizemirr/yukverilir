-- AlterTable
ALTER TABLE "Advert" ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "Vehicles" ADD COLUMN     "userId" TEXT;

-- AddForeignKey
ALTER TABLE "Advert" ADD CONSTRAINT "Advert_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehicles" ADD CONSTRAINT "Vehicles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
