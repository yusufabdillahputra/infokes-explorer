import type {ReadResponse, SubFolderEntity} from "~/types";

export default defineEventHandler(async (event): Promise<ReadResponse<SubFolderEntity | null>> => {
  const config = useRuntimeConfig()
  return {
    status: 200,
    data: await $fetch(`${config.backendUrl}/folders/subs`, {
      method: 'POST',
      body: await readBody(event)
    })
  }
})