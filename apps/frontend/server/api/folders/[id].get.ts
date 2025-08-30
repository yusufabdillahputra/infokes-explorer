import type {ReadResponse, Folder, RootFolderEntity} from "~/types";
import {convertRootFolder} from "~/lib/utils";


export default defineEventHandler(async (event): Promise<ReadResponse<Folder | null>> => {
  const config = useRuntimeConfig()
  const folderId: string | undefined = getRouterParam(event, 'id')
  const response: RootFolderEntity = await $fetch(`${config.backendUrl}/folders/${folderId}`)
  return {
    status: 200,
    data: convertRootFolder(response)
  }
})