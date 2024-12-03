/*
  Warnings:

  - A unique constraint covering the columns `[last_stripe_cs_id]` on the table `Subscription` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `last_stripe_cs_id` to the `Subscription` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Subscription" ADD COLUMN     "last_stripe_cs_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_last_stripe_cs_id_key" ON "Subscription"("last_stripe_cs_id");
