import {Elysia, t} from 'elysia'
import {FolderService} from './service'
import {FolderModel} from "./model";


export const folderController = new Elysia()
  .get('/folders', FolderService.list(), {
    detail: {
      tags: ["Folder"]
    }
  })
  .get('/folders/:id', async ({params: {id}}) => {
    return FolderService.retrieve(id)
  }, {
    params: t.Object({
      id: t.Number()
    }),
    detail: {
      tags: ["Folder"]
    }
  })
  .post('/folders', async ({body}) => {
    return FolderService.create(body)
  }, {
    body: FolderModel.createRootFolder,
    detail: {
      tags: ["Folder"]
    }
  })