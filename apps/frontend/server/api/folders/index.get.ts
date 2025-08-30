import type {ReadResponse, Folder} from "~/types";

export default defineEventHandler(async (): Promise<ReadResponse<Folder[]>> => {
  const config = useRuntimeConfig()
  return {
    status: 200,
    data: await $fetch(`${config.backendUrl}/folders`)
  }
})