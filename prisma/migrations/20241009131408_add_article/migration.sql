-- CreateTable
CREATE TABLE "Aricle" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "md_url" TEXT NOT NULL,
    "author_name" TEXT NOT NULL,
    "author_avatar" TEXT NOT NULL,

    CONSTRAINT "Aricle_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Aricle_title_key" ON "Aricle"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Aricle_subtitle_key" ON "Aricle"("subtitle");

-- CreateIndex
CREATE UNIQUE INDEX "Aricle_slug_key" ON "Aricle"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Aricle_md_url_key" ON "Aricle"("md_url");
