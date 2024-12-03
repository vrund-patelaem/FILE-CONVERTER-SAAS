/*
  Warnings:

  - You are about to drop the column `stripe_transaction_id` on the `Invoice` table. All the data in the column will be lost.
  - Added the required column `to_email` to the `Invoice` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Invoice_stripe_transaction_id_key";

-- AlterTable
ALTER TABLE "Invoice" DROP COLUMN "stripe_transaction_id",
ADD COLUMN     "to_email" TEXT NOT NULL;
