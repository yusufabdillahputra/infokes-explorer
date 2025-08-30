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

export abstract class FolderService {
  static async list() {
    return prisma.rootFolder.findMany({
      select: serializerList
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
}