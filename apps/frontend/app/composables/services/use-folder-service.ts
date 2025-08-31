import type {Folder, ReadResponse} from "~/types";
import type {FetchResponse} from 'ofetch'
import {
  useCreateFolderDialogStore,
  useFolderRemoveDialogStore,
  useFolderRenameDialogStore,
  useRootFolderCreateDialogStore,
  useCreateFileDialogStore,
} from "~/stores/dialog";
import {useFolderRepository} from "~/composables/repositories/use-folder-repository";


export const useFolderService = () => {
  const fileStore = useFileStore();
  const folderRemoveDialogStore = useFolderRemoveDialogStore();
  const folderRenameDialogStore = useFolderRenameDialogStore();
  const rootFolderCreateDialogStore = useRootFolderCreateDialogStore();
  const createFolderDialogStore = useCreateFolderDialogStore();
  const createFileDialogStore = useCreateFileDialogStore();
  const {update, remove, list, create, createSub, retrieve} = useFolderRepository()

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

  const handleDeleteFolderAction = (id: number, name: string) => {
    folderRemoveDialogStore.setRootFolder({
      id: id,
      name: name
    })
    folderRemoveDialogStore.setIsOpen(true)
  }

  const removeFolderActionDialog = async () => {
    const {folder} = storeToRefs(folderRemoveDialogStore)
    const {refresh} = await list()
    if (folderRemoveDialogStore.isFolderSet) {
      if (folder?.value !== null) {
        await remove(folder.value?.id)
        await refresh()
        navigateTo('/')
      }
      folderRemoveDialogStore.$reset()
    }
  }

  const handleRenameFolderAction = (id: number, name: string) => {
    folderRenameDialogStore.setRootFolder({
      id: id,
      name: name
    })
    folderRenameDialogStore.setIsOpen(true)
  }

  const renameFolderActionDialog = async (name: string) => {
    folderRenameDialogStore.setName(name);
    const {folder} = storeToRefs(folderRenameDialogStore)
    const {refresh} = await list()
    if (folderRenameDialogStore.isFolderSet) {
      if (folder?.value !== null) {
        await update(folder.value)
        await refresh()
      }
      folderRenameDialogStore.$reset()
    }
  }

  const handleCreateRootFolderAction = () => {
    rootFolderCreateDialogStore.setIsOpen(true);
  }

  const createRootFolderActionDialog = async (name: string) => {
    const {refresh} = await list()
    await create(name)
    await refresh()
    rootFolderCreateDialogStore.$reset()
  }

  const handleCreateFolderAction = () => {
    createFolderDialogStore.setIsOpen(true);
  }

  const createFolderActionDialog = async (value: {
    name: string,
    parentId: number | null,
  }) => {
    const route = useRoute()
    const {refresh} = await retrieve(route.params.id as string, indexing)
    await createSub({
      name: value.name,
      rootFolderId: parseInt(route.params.id as string),
      parentId: value?.parentId ?? null,
      type: 'FOLDER'
    })
    await refresh()
    createFolderDialogStore.$reset()
  }

  const handleCreateFileAction = () => {
    createFileDialogStore.setIsOpen(true);
  }

  const createFileActionDialog = async (value: {
    name: string,
    parentId: number | null,
  }) => {
    const route = useRoute()
    const {refresh} = await retrieve(route.params.id as string, indexing)
    await createSub({
      name: value.name,
      rootFolderId: parseInt(route.params.id as string),
      parentId: value?.parentId ?? null,
      type: 'FILE'
    })
    await refresh()
    createFileDialogStore.$reset()
  }

  return {
    indexing,
    onNavigateTo,
    handleDeleteFolderAction,
    handleRenameFolderAction,
    removeFolderActionDialog,
    renameFolderActionDialog,
    handleCreateRootFolderAction,
    createRootFolderActionDialog,
    handleCreateFolderAction,
    createFolderActionDialog,
    handleCreateFileAction,
    createFileActionDialog
  }
}