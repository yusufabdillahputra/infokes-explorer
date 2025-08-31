import type {ReadResponse, RootFolderEntity} from "~/types";


export default defineEventHandler(async (event): Promise<ReadResponse<RootFolderEntity | null>> => {
  const config = useRuntimeConfig()
  const folderId: string | undefined = getRouterParam(event, 'id')
  return {
    status: 200,
    data: await $fetch(`${config.backendUrl}/folders/${folderId}`, {
      method: 'DELETE'
    })
  }
})