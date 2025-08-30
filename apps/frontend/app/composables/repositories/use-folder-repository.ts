import type {Folder, ReadResponse} from "~/types";
import type {FetchResponse} from 'ofetch'

const baseUrl: string = "/api/folders";

export const useFolderRepository = () => {
  const list = async (onResponse?: (res: FetchResponse<ReadResponse<Folder | null>>) => void) => {
    const {
      data,
      pending,
      error
    } = await useFetch<ReadResponse<Folder[]>>(baseUrl, {
      method: 'GET',
      onResponse({response}) {
        if (onResponse) onResponse(response)
      },
    })
    return {data, pending, error}
  }
  const retrieve = async (id: string | string[] | undefined, onResponse?: (res: FetchResponse<ReadResponse<Folder | null>>) => void) => {
    const {
      data: instance,
      pending,
      error
    } = await useFetch<ReadResponse<Folder | null>>(`${baseUrl}/${id}`, {
      method: 'GET',
      onResponse({response}) {
        if (onResponse) onResponse(response)
      },
    })
    return {instance, pending, error}
  }
  return {
    list,
    retrieve
  }
}