-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "telegramId" TEXT NOT NULL,
    "username" TEXT,
    "firstName" TEXT,
    "lastName" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "AttachedPhoto" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "telegramFileId" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,
    "mimeType" TEXT,
    "width" INTEGER,
    "height" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "AttachedPhoto_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProcessedPhoto" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "attachedPhotoId" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,
    "mimeType" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ProcessedPhoto_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ProcessedPhoto_attachedPhotoId_fkey" FOREIGN KEY ("attachedPhotoId") REFERENCES "AttachedPhoto" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "GeneratedImage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "processedPhotoId" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "templateLabel" TEXT NOT NULL,
    "promptText" TEXT NOT NULL,
    "metaJson" TEXT,
    "filePath" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "GeneratedImage_processedPhotoId_fkey" FOREIGN KEY ("processedPhotoId") REFERENCES "ProcessedPhoto" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_telegramId_key" ON "User"("telegramId");

-- CreateIndex
CREATE INDEX "AttachedPhoto_userId_idx" ON "AttachedPhoto"("userId");

-- CreateIndex
CREATE INDEX "ProcessedPhoto_userId_idx" ON "ProcessedPhoto"("userId");

-- CreateIndex
CREATE INDEX "ProcessedPhoto_attachedPhotoId_idx" ON "ProcessedPhoto"("attachedPhotoId");

-- CreateIndex
CREATE INDEX "GeneratedImage_processedPhotoId_idx" ON "GeneratedImage"("processedPhotoId");
