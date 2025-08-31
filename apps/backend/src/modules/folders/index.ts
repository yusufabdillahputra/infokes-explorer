import {Elysia, t} from 'elysia'
import {FolderService} from './service'
import {FolderModel} from "./model";


export const folderController = new Elysia()
  .get('/folders', async () => {
    return FolderService.list()
  }, {
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
  .patch('/folders', async ({body}) => {
    return FolderService.update(body)
  }, {
    body: FolderModel.updateRootFolder,
    detail: {
      tags: ["Folder"]
    }
  })
  .delete('/folders/:id', async ({params: {id}}) => {
    return FolderService.delete(id)
  }, {
    params: t.Object({
      id: t.Number()
    }),
    detail: {
      tags: ["Folder"]
    }
  })