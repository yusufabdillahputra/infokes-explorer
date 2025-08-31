import {PrismaClient} from '../../../generated/prisma'
import {FolderModel} from "./model.ts";
import {status} from "elysia";

const prisma = new PrismaClient()
const serializerRetrieve = {
  id: true,
  name: true,
  subs: {
    select: {
      id: true,
      name: true,
      type: true,
      parentId: true,
      parent: {
        select: {
          id: true,
          name: true,
          type: true,
          parentId: true,
          parent: true
        }
      }
    }
  }
}
const serializerList = {
  id: true,
  name: true,
  subs: false
}

const serializerListSub = {
  id: true,
  name: true,
  type: true,
  rootFolderId: true,
  parentId: false,
  parent: false
}

export abstract class FolderService {
  static async list() {
    return prisma.rootFolder.findMany({
      select: serializerList
    })
  }

  static async listSub(type: 'FILE' | 'FOLDER' | null, rootId: number | null) {
    const where: any = {};

    if (type !== null) {
      where.type = type;
    }

    if (rootId !== null) {
      where.rootFolderId = rootId;
    }

    return prisma.subFolder.findMany({
      where,
      select: serializerListSub
    })
  }

  static async retrieve(id: number) {
    const findUnique = prisma.rootFolder.findUnique({
      where: {
        id: id
      },
      select: serializerRetrieve
    });
    if (!await findUnique) {
      throw status(
        400,
        'Folder not found' satisfies FolderModel.notFoundResponse
      )
    } else {
      return findUnique
    }
  }

  static async create(body: FolderModel.createRootFolder) {
    return prisma.rootFolder.create({
      data: body
    });
  }

  static async update(body: FolderModel.updateRootFolder) {
    return prisma.rootFolder.update({
      where: {
        id: body.id
      },
      data: {
        name: body.name,
      }
    });
  }

  static async delete(id: number) {
    return prisma.rootFolder.delete({
      where: {
        id: id
      }
    })
  }
}