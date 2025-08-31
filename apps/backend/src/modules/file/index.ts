import {Elysia} from 'elysia'
import {FileService} from './service'
import {FileModel} from "./model";


export const fileController = new Elysia()
  .post('/files', async ({body}) => {
    return FileService.create(body)
  }, {
    body: FileModel.createFile,
    detail: {
      tags: ["File"]
    }
  })
  .delete('/files', async ({body}) => {
    return FileService.delete(body)
  }, {
    body: FileModel.deleteFile,
    detail: {
      tags: ["File"]
    }
  })