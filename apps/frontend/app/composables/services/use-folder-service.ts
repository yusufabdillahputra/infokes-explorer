import type {Folder, ReadResponse} from "~/types";
import type {FetchResponse} from 'ofetch'


export const useFolderService = () => {
  const fileStore = useFileStore();
  const indexing = (response: FetchResponse<ReadResponse<Folder | null>>) => {
    const responseData: Folder | null = response?._data?.data ?? null;
    if (!fileStore.isAlreadyIndexing && responseData !== null) {
      if (responseData.sub !== undefined) {
        fileStore.setRootFolder({
          id: responseData.id,
          name: responseData.name
        })
        fileStore.setIndexing(responseData.sub)
      }
    }
  }
  const onNavigateTo = (item: Folder) => {
    const {rootFolder} = storeToRefs(fileStore)
    if (rootFolder.value !== null) {
      if (rootFolder.value.id !== item.id) {
        fileStore.$reset()
        navigateTo(`/folder/${item.id}`)
      } else {
        navigateTo(`/folder/${item.id}`)
      }
    } else {
      fileStore.$reset()
      navigateTo(`/folder/${item.id}`)
    }
  }
  return {
    indexing,
    onNavigateTo,
  }
}