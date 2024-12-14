/*
  Warnings:

  - You are about to drop the column `metaOptions` on the `Posts` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[postsId]` on the table `MetaOptions` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `postsId` to the `MetaOptions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MetaOptions" ADD COLUMN     "postsId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Posts" DROP COLUMN "metaOptions";

-- CreateIndex
CREATE UNIQUE INDEX "MetaOptions_postsId_key" ON "MetaOptions"("postsId");

-- AddForeignKey
ALTER TABLE "MetaOptions" ADD CONSTRAINT "MetaOptions_postsId_fkey" FOREIGN KEY ("postsId") REFERENCES "Posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
