-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TwoFactor" (
    "id" TEXT NOT NULL,
    "secret" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "TwoFactor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coordinates" (
    "id" TEXT NOT NULL,
    "lat" TEXT NOT NULL,
    "lng" TEXT NOT NULL,

    CONSTRAINT "Coordinates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Where" (
    "id" TEXT NOT NULL,
    "coordinatesId" TEXT,
    "advertId" TEXT,
    "vehiclesId" TEXT,

    CONSTRAINT "Where_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "To" (
    "id" TEXT NOT NULL,
    "coordinatesId" TEXT,
    "advertId" TEXT,
    "vehiclesId" TEXT NOT NULL,

    CONSTRAINT "To_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Advert" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "vehicles_type" TEXT NOT NULL,
    "vehicles_case" TEXT NOT NULL,
    "payment_method" TEXT NOT NULL,
    "delivired_type" TEXT NOT NULL,
    "delivired_date" TEXT NOT NULL,

    CONSTRAINT "Advert_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vehicles" (
    "id" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "vehicles_type" TEXT NOT NULL,
    "vehicles_case" TEXT NOT NULL,
    "delivired_type" TEXT NOT NULL,

    CONSTRAINT "Vehicles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TwoFactor_userId_key" ON "TwoFactor"("userId");

-- AddForeignKey
ALTER TABLE "TwoFactor" ADD CONSTRAINT "TwoFactor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Where" ADD CONSTRAINT "Where_coordinatesId_fkey" FOREIGN KEY ("coordinatesId") REFERENCES "Coordinates"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Where" ADD CONSTRAINT "Where_advertId_fkey" FOREIGN KEY ("advertId") REFERENCES "Advert"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Where" ADD CONSTRAINT "Where_vehiclesId_fkey" FOREIGN KEY ("vehiclesId") REFERENCES "Vehicles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "To" ADD CONSTRAINT "To_coordinatesId_fkey" FOREIGN KEY ("coordinatesId") REFERENCES "Coordinates"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "To" ADD CONSTRAINT "To_advertId_fkey" FOREIGN KEY ("advertId") REFERENCES "Advert"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "To" ADD CONSTRAINT "To_vehiclesId_fkey" FOREIGN KEY ("vehiclesId") REFERENCES "Vehicles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
