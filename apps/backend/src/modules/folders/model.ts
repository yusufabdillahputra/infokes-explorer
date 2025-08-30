import {t} from 'elysia'

export namespace FolderModel {
  export const notFoundResponse = t.Literal('Folder not found')
  export type notFoundResponse = typeof notFoundResponse.static

  export const createRootFolder = t.Object({
    name: t.String(),
  })
  export type createRootFolder = typeof createRootFolder.static
}