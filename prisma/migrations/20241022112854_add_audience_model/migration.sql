-- CreateTable
CREATE TABLE "Audiences" (
    "id" TEXT NOT NULL,
    "resend_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Audiences_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Audiences_resend_id_key" ON "Audiences"("resend_id");
