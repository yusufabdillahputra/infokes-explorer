import type {ReadResponse, RootFolderEntity} from "~/types";


export default defineEventHandler(async (event): Promise<ReadResponse<RootFolderEntity | null>> => {
  const config = useRuntimeConfig()
  return {
    status: 200,
    data: await $fetch(`${config.backendUrl}/files`, {
      method: 'DELETE',
      body: await readBody(event)
    })
  }
})