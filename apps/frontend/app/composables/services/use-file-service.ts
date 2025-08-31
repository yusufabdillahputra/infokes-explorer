import {useFileRemoveDialogStore} from "~/stores/dialog";
import {useFolderRepository} from "~/composables/repositories/use-folder-repository";
import {useFileRepository} from "~/composables/repositories/use-file-repository";
import {useFolderService} from "~/composables/services/use-folder-service";


export const useFileService = () => {
  const fileRemoveDialogStore = useFileRemoveDialogStore();
  const {remove} = useFileRepository()
  const {retrieve} = useFolderRepository()

  const handleDeleteFileAction = (rootFolderId: number, name: string) => {
    fileRemoveDialogStore.setFile({
      rootFolderId: rootFolderId,
      name: name
    })
    fileRemoveDialogStore.setIsOpen(true)
  }

  const removeFileActionDialog = async () => {
    const route = useRoute()
    const {indexing} = useFolderService()
    const {file} = storeToRefs(fileRemoveDialogStore)
    const {refresh} = await retrieve(route.params.id as string, indexing)
    if (fileRemoveDialogStore.isFileSet) {
      if (file?.value !== null) {
        await remove(file.value)
        await refresh()
      }
      fileRemoveDialogStore.$reset()
    }
  }

  return {
    handleDeleteFileAction,
    removeFileActionDialog
  }
}