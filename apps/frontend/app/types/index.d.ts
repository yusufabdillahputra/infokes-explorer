export type FileMap = Record<string, string[]>;

export type SubFolder = string | [string, ...SubFolder[]];

export interface FileStore {
  rootFolder: { id: number; name: string } | null;
  name: string | null;
  breadcrumbs: string[];
  index: Record<string, string[]> | null;
}

export interface FolderRemoveDialogStore {
  folder: { id: number; name: string } | null;
  isOpen: boolean;
}

export interface RootFolderCreateDialogStore {
  isOpen: boolean;
}

export interface CreateFolderFileDialogStore {
  isOpen: boolean;
  instance: {
    name: string,
    rootFolderId: number,
    type: 'FOLDER' | 'FILE',
    parentId: number | null,
  } | null
}

export interface FolderRenameDialogStore {
  folder: { id: number; name: string } | null;
  isOpen: boolean;
}

export interface FileRemoveDialogStore {
  file: { rootFolderId: number; name: string } | null;
  isOpen: boolean;
}

export interface Folder {
  id: number;
  name: string;
  sub: SubFolder[];
}

export interface ReadResponse<Type> {
  status: number;
  data: Type;
}

export interface RootFolderEntity {
  id: number;
  name: string;
  subs?: SubFolderEntity[];
}

export interface SubFolderEntity {
  id: number;
  name: string;
  type: 'FOLDER' | 'FILE';
  parentId: number | null;
  parent?: SubFolderEntity | null;
}
