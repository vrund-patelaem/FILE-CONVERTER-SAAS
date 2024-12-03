/*
  Warnings:

  - Added the required column `sub_type` to the `Subscription` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Subscription" ADD COLUMN     "sub_type" TEXT NOT NULL;
