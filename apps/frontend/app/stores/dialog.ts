import {defineStore, acceptHMRUpdate} from 'pinia'
import type {FileRemoveDialogStore, FolderRemoveDialogStore, FolderRenameDialogStore} from "~/types";

export const useFolderRemoveDialogStore = defineStore('folderRemoveDialogStore', {
  state: (): FolderRemoveDialogStore => ({
    folder: null,
    isOpen: false
  }),
  persist: true,
  getters: {
    isFolderSet: (state) => state.folder !== null,
  },
  actions: {
    setRootFolder(value: { id: number; name: string } | null): void {
      this.folder = value;
    },
    setIsOpen(value: boolean): void {
      this.isOpen = value;
    }
  }
})

export const useFolderRenameDialogStore = defineStore('folderRenameDialogStore', {
  state: (): FolderRenameDialogStore => ({
    folder: null,
    isOpen: false
  }),
  persist: true,
  getters: {
    isFolderSet: (state) => state.folder !== null,
  },
  actions: {
    setRootFolder(value: { id: number; name: string } | null): void {
      this.folder = value;
    },
    setIsOpen(value: boolean): void {
      this.isOpen = value;
    },
    setName(value: string): void {
      if (this.folder !== null) {
        this.folder = {
          id: this.folder?.id,
          name: value
        }
      }
    }
  }
})

export const useFileRemoveDialogStore = defineStore('fileRemoveDialogStore', {
  state: (): FileRemoveDialogStore => ({
    file: null,
    isOpen: false
  }),
  persist: true,
  getters: {
    isFileSet: (state) => state.file !== null,
  },
  actions: {
    setFile(value: { rootFolderId: number; name: string } | null): void {
      this.file = value;
    },
    setIsOpen(value: boolean): void {
      this.isOpen = value;
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useFolderRemoveDialogStore, import.meta.hot))
  import.meta.hot.accept(acceptHMRUpdate(useFolderRenameDialogStore, import.meta.hot))
}