/*
  Warnings:

  - You are about to drop the column `postsId` on the `MetaOptions` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[metaOptionsId]` on the table `Posts` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `metaOptionsId` to the `Posts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "MetaOptions" DROP CONSTRAINT "MetaOptions_postsId_fkey";

-- DropIndex
DROP INDEX "MetaOptions_postsId_key";

-- AlterTable
ALTER TABLE "MetaOptions" DROP COLUMN "postsId";

-- AlterTable
ALTER TABLE "Posts" ADD COLUMN     "metaOptionsId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Posts_metaOptionsId_key" ON "Posts"("metaOptionsId");

-- AddForeignKey
ALTER TABLE "Posts" ADD CONSTRAINT "Posts_metaOptionsId_fkey" FOREIGN KEY ("metaOptionsId") REFERENCES "MetaOptions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
