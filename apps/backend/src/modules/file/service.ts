import {PrismaClient, SubFolderType} from '../../../generated/prisma'
import {FileModel} from "./model.ts";

const prisma = new PrismaClient()

export abstract class FileService {

  static async create(body: FileModel.createFile) {
    return prisma.subFolder.create({
      data: {
        name: body.name,
        type: SubFolderType.FILE,
        rootFolderId: body.rootFolderId,
        parentId: body.parentId,
      }
    });
  }

  static async delete(body: FileModel.deleteFile) {
    const folder = await prisma.subFolder.findFirst({
      where: {
        rootFolderId: body.rootFolderId,
        name: body.name
      }
    });
    if (!folder) throw new Error("File tidak ditemukan");
    return prisma.subFolder.delete({
      where: {id: folder.id}
    });
  }
}