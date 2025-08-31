// test/index.test.ts
import {describe, expect, it} from 'bun:test'
import {Elysia} from "elysia";
import {BunAdapter} from "elysia/adapter/bun";
import {folderController} from "../src/modules/folder";
import {fileController} from "../src/modules/file";
import {Type} from '@sinclair/typebox'
import {Value} from '@sinclair/typebox/value'


const ListFolderSchema = Type.Array(
  Type.Object({
    id: Type.Number(),
    name: Type.String(),
  })
);

const app = new Elysia({
  prefix: '/v1',
  adapter: BunAdapter,
  aot: true,
})
  .use(folderController)
  .use(fileController)
  .listen(parseInt(process?.env?.PORT ?? "8000"))

describe('Folder', () => {
  it('Test list response', async () => {
    const response = await app.handle(
      new Request(`http://localhost:${process?.env?.port ?? "8000"}/v1/folders`)
    )

    const data = await response.json();
    const result: boolean = Value.Check(ListFolderSchema, data);
    expect(result).toBe(true);
    expect(response.status).toBe(200)
    expect(Array.isArray(data)).toBe(true)
  })
  it('Test retrieve response', async () => {
    const response = await app.handle(
      new Request(`http://localhost:${process?.env?.port ?? "8000"}/v1/folders/1`)
    )

    const data = await response.json().catch(() => null)
    expect(response.status).toBe(200)
    expect(data).not.toBeNull()
    expect(Array.isArray(data)).toBe(false)
  })
})