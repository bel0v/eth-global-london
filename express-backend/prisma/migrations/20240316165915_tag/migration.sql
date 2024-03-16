/*
  Warnings:

  - Added the required column `tag` to the `Bounty` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bounty" ADD COLUMN     "tag" TEXT NOT NULL;
