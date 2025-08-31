import type {ReadResponse, SubFolderEntity} from "~/types";

export default defineEventHandler(async (event): Promise<ReadResponse<SubFolderEntity[]>> => {
  const config = useRuntimeConfig()
  return {
    status: 200,
    data: await $fetch(`${config.backendUrl}/folders/subs`, {
      method: 'GET',
      query: getQuery(event)
    })
  }
})