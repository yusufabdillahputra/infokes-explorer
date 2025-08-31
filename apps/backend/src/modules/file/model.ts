import {t} from 'elysia'

export namespace FileModel {
  export const createFile = t.Object({
    name: t.String(),
    rootFolderId: t.Number(),
    parentId: t.Number(),
  })
  export type createFile = typeof createFile.static

  export const deleteFile = t.Object({
    name: t.String(),
    rootFolderId: t.Number(),
  })
  export type deleteFile = typeof deleteFile.static
}