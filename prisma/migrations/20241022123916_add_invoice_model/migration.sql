-- CreateTable
CREATE TABLE "Invoice" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "stripe_transaction_id" TEXT NOT NULL,
    "to_data" TEXT NOT NULL,
    "user_clerk_id" TEXT NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Invoice_stripe_transaction_id_key" ON "Invoice"("stripe_transaction_id");

-- CreateIndex
CREATE UNIQUE INDEX "Invoice_user_clerk_id_key" ON "Invoice"("user_clerk_id");
