-- DropIndex
DROP INDEX "Subscription_sub_stripe_id_key";

-- AlterTable
ALTER TABLE "Subscription" ALTER COLUMN "sub_stripe_id" DROP NOT NULL;
