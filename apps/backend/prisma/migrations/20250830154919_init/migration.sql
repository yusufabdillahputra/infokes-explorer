-- CreateTable
CREATE TABLE `SubFolder` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `type` ENUM('FOLDER', 'FILE') NOT NULL DEFAULT 'FOLDER',
    `rootFolderId` INTEGER NOT NULL,
    `parentId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RootFolder` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SubFolder` ADD CONSTRAINT `SubFolder_rootFolderId_fkey` FOREIGN KEY (`rootFolderId`) REFERENCES `RootFolder`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubFolder` ADD CONSTRAINT `SubFolder_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `SubFolder`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
