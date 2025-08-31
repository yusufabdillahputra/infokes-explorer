import type {ReadResponse, SubFolderEntity} from "~/types";
import type {FetchResponse} from 'ofetch'

const baseUrl: string = "/api/files";

export const useFileRepository = () => {
  const create = async (body: {
    name: string;
    rootFolderId: number;
    parentId: number | null;
  }, onResponse?: (res: FetchResponse<ReadResponse<SubFolderEntity | null>>) => void) => {
    await $fetch(`${baseUrl}`, {
      method: 'POST',
      body: body,
      onResponse({response}) {
        if (onResponse) onResponse(response)
      },
    })
  }
  const remove = async (body: {
    rootFolderId: number;
    name: string;
  }, onResponse?: (res: FetchResponse<ReadResponse<SubFolderEntity | null>>) => void) => {
    await $fetch(`${baseUrl}`, {
      method: 'DELETE',
      body: body,
      onResponse({response}) {
        if (onResponse) onResponse(response)
      },
    })
  }
  return {
    create,
    remove
  }
}