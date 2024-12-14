-- CreateEnum
CREATE TYPE "postStatus" AS ENUM ('DRAFT', 'SCHEDULED', 'REVIEW', 'PUBLISHED');

-- CreateEnum
CREATE TYPE "postType" AS ENUM ('POST', 'PAGE', 'STORY', 'SERIES');

-- CreateTable
CREATE TABLE "Posts" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(512) NOT NULL,
    "postType" "postType" NOT NULL DEFAULT 'POST',
    "description" TEXT NOT NULL,
    "slug" VARCHAR(256) NOT NULL,
    "status" "postStatus" NOT NULL DEFAULT 'DRAFT',
    "content" TEXT,
    "schema" TEXT,
    "featuredImageUrl" VARCHAR(1024),
    "publishedOn" TIMESTAMP(3),
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "metaOptions" JSONB[] DEFAULT ARRAY[]::JSONB[],

    CONSTRAINT "Posts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Posts_slug_key" ON "Posts"("slug");
