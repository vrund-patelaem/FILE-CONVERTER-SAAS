-- CreateEnum
CREATE TYPE "SubscriptionStatus" AS ENUM ('active', 'inactive');

-- CreateTable
CREATE TABLE "Subscription" (
    "id" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "sub_status" "SubscriptionStatus" NOT NULL DEFAULT 'inactive',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "sub_stripe_id" TEXT NOT NULL,
    "user_clerk_id" TEXT NOT NULL,

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_user_email_key" ON "Subscription"("user_email");

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_sub_stripe_id_key" ON "Subscription"("sub_stripe_id");

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_user_clerk_id_key" ON "Subscription"("user_clerk_id");
