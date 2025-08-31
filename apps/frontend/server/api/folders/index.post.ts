import type {ReadResponse, RootFolderEntity} from "~/types";

export default defineEventHandler(async (event): Promise<ReadResponse<RootFolderEntity | null>> => {
  const config = useRuntimeConfig()
  return {
    status: 200,
    data: await $fetch(`${config.backendUrl}/folders`, {
      method: 'POST',
      body: await readBody(event)
    })
  }
})