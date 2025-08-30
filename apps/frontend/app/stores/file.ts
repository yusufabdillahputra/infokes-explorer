import {defineStore, acceptHMRUpdate} from 'pinia'
import type {FileStore, SubFolder} from "~/types";
import {indexingFileMap} from "~/lib/utils";

export const useFileStore = defineStore('fileStore', {
  state: (): FileStore => ({
    rootFolder: null,
    name: null,
    breadcrumbs: [],
    index: null
  }),
  persist: true,
  getters: {
    isFileExists: (state) => state.name !== null,
    isAlreadyIndexing: (state) => state.index !== null,
  },
  actions: {
    resetFile(): void {
      this.name = null;
      this.breadcrumbs = [];
    },
    setFile(value: string | null): void {
      this.name = value;
      if (value !== null) {
        const breadcrumbPath = this.index?.[value] ?? null;
        if (breadcrumbPath !== null) {
          this.breadcrumbs = breadcrumbPath
        }
      }
    },
    setRootFolder(value: { id: number; name: string } | null): void {
      this.rootFolder = value;
    },
    setIndexing(value: SubFolder[]): void {
      this.index = indexingFileMap(<SubFolder>value);
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useFileStore, import.meta.hot))
}