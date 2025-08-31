import {Elysia} from 'elysia'
import {BunAdapter} from 'elysia/adapter/bun'
import {swagger} from '@elysiajs/swagger'
import {folderController} from './modules/folder'
import {fileController} from './modules/file'

const app = new Elysia({
  prefix: '/v1',
  adapter: BunAdapter,
  aot: true,
  detail: {
    tags: ['Folder', 'File']
  }
})
  .use(swagger({
    path: '/swagger',
    documentation: {
      info: {
        title: 'Infokes Explorer',
        version: '1.0.0'
      },
      tags: [
        {name: 'Folder', description: 'All data folder'},
        {name: 'File', description: 'All data file'}
      ]
    }
  }))
  .use(folderController)
  .use(fileController)
  .listen(parseInt(process?.env?.PORT ?? "8000"))

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)