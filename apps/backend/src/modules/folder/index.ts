import {Elysia, t} from 'elysia'
import {FolderService} from './service'
import {FolderModel} from "./model";
import {SubFolderType} from '../../../generated/prisma';


export const folderController = new Elysia()
  .get('/folders', async () => {
    return FolderService.list()
  }, {
    detail: {
      tags: ["Folder"]
    }
  })
  .get('/folders/subs', async ({query}) => {
    return FolderService.listSub(query?.type ?? null, query?.rootId ?? null)
  }, {
    query: t.Object({
      rootId: t.Optional(t.Number()),
      type: t.Optional(t.Enum(SubFolderType))
    }),
    detail: {
      tags: ["Folder"]
    }
  })
  .get('/folders/:id', async ({params: {id}}) => {
    return FolderService.retrieve(id)
  }, {
    params: t.Object({
      id: t.Number(),
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
  .post('/folders/subs', async ({body}) => {
    return FolderService.createSub(body)
  }, {
    body: FolderModel.createSub,
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