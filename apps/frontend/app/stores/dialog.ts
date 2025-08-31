import {defineStore, acceptHMRUpdate} from 'pinia'
import type {
  CreateFolderFileDialogStore,
  FileRemoveDialogStore,
  FolderRemoveDialogStore,
  FolderRenameDialogStore,
  RootFolderCreateDialogStore
} from "~/types";

export const useRootFolderCreateDialogStore = defineStore('rootFolderCreateDialogStore', {
  state: (): RootFolderCreateDialogStore => ({
    isOpen: false
  }),
  persist: true,
  actions: {
    setIsOpen(value: boolean): void {
      this.isOpen = value;
    }
  }
})

export const useCreateFolderDialogStore = defineStore('createFolderDialogStore', {
  state: (): CreateFolderFileDialogStore => ({
    isOpen: false,
    instance: null
  }),
  persist: true,
  actions: {
    setInstance(value: {
      name: string,
      rootFolderId: number,
      type: 'FOLDER' | 'FILE',
      parentId: number | null,
    } | null): void {
      this.instance = value;
    },
    setIsOpen(value: boolean): void {
      this.isOpen = value;
    }
  }
})

export const useCreateFileDialogStore = defineStore('createFileDialogStore', {
  state: (): CreateFolderFileDialogStore => ({
    isOpen: false,
    instance: null
  }),
  persist: true,
  actions: {
    setInstance(value: {
      name: string,
      rootFolderId: number,
      type: 'FOLDER' | 'FILE',
      parentId: number | null,
    } | null): void {
      this.instance = value;
    },
    setIsOpen(value: boolean): void {
      this.isOpen = value;
    }
  }
})

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
  import.meta.hot.accept(acceptHMRUpdate(useRootFolderCreateDialogStore, import.meta.hot))
  import.meta.hot.accept(acceptHMRUpdate(useFileRemoveDialogStore, import.meta.hot))
}