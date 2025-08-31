import type {Folder, ReadResponse} from "~/types";
import type {FetchResponse} from 'ofetch'

const baseUrl: string = "/api/folders";

export const useFolderRepository = () => {
  const list = async (onResponse?: (res: FetchResponse<ReadResponse<Folder | null>>) => void) => {
    const {
      data,
      pending,
      refresh,
      error
    } = await useFetch<ReadResponse<Folder[]>>(baseUrl, {
      method: 'GET',
      onResponse({response}) {
        if (onResponse) onResponse(response)
      },
    })
    return {data, pending, refresh, error}
  }
  const retrieve = async (id: string | string[] | undefined, onResponse?: (res: FetchResponse<ReadResponse<Folder | null>>) => void) => {
    const {
      data: instance,
      pending,
      error,
      refresh
    } = await useFetch<ReadResponse<Folder | null>>(`${baseUrl}/${id}`, {
      method: 'GET',
      onResponse({response}) {
        if (onResponse) onResponse(response)
      },
    })
    return {instance, pending, error, refresh}
  }
  const remove = async (id: number, onResponse?: (res: FetchResponse<ReadResponse<Folder | null>>) => void) => {
    await $fetch(`${baseUrl}/${id}`, {
      method: 'DELETE',
      onResponse({response}) {
        if (onResponse) onResponse(response)
      },
    })
  }

  const update = async (folder: {
    id: number,
    name: string
  }, onResponse?: (res: FetchResponse<ReadResponse<Folder | null>>) => void) => {
    await $fetch(`${baseUrl}`, {
      method: 'PATCH',
      body: {
        id: folder.id,
        name: folder.name
      },
      onResponse({response}) {
        if (onResponse) onResponse(response)
      },
    })
  }

  const create = async (name: string, onResponse?: (res: FetchResponse<ReadResponse<Folder | null>>) => void) => {
    await $fetch(`${baseUrl}`, {
      method: 'POST',
      body: {
        name: name
      },
      onResponse({response}) {
        if (onResponse) onResponse(response)
      },
    })
  }

  return {
    list,
    retrieve,
    remove,
    update,
    create
  }
}