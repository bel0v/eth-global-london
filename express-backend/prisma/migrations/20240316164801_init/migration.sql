-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "eventImage" TEXT NOT NULL,
    "organizerImage" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bounty" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "venueImageURI" TEXT NOT NULL,
    "contractAddress" VARCHAR(42) NOT NULL,
    "eventId" TEXT NOT NULL,

    CONSTRAINT "Bounty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Moment" (
    "id" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "imageURI" TEXT NOT NULL,
    "bountyId" TEXT NOT NULL,

    CONSTRAINT "Moment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Bounty_contractAddress_key" ON "Bounty"("contractAddress");

-- AddForeignKey
ALTER TABLE "Bounty" ADD CONSTRAINT "Bounty_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Moment" ADD CONSTRAINT "Moment_bountyId_fkey" FOREIGN KEY ("bountyId") REFERENCES "Bounty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
