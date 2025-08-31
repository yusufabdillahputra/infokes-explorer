import {t} from 'elysia'
import {SubFolderType} from "../../../generated/prisma";

export namespace FolderModel {
  export const notFoundResponse = t.Literal('Folder not found')
  export type notFoundResponse = typeof notFoundResponse.static

  export const createRootFolder = t.Object({
    name: t.String(),
  })
  export type createRootFolder = typeof createRootFolder.static

  export const createSub = t.Object({
    name: t.String(),
    rootFolderId: t.Number(),
    type: t.Enum(SubFolderType),
    parentId: t.Optional(t.Number()),
  })
  export type createSub = typeof createSub.static

  export const updateRootFolder = t.Object({
    id: t.Number(),
    name: t.String(),
  })
  export type updateRootFolder = typeof updateRootFolder.static
}