import type {ClassValue} from "clsx"
import {clsx} from "clsx"
import {twMerge} from "tailwind-merge"
import type {FileMap, Folder, RootFolderEntity, SubFolder, SubFolderEntity} from "~/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function indexingFileMap(node: SubFolder, path: string[] = [], result: FileMap = {}): FileMap {
  if (typeof node === "string") {
    // Kalau string dan ada "." berarti file
    if (/\.[a-zA-Z0-9]+$/.test(node)) {
      result[node] = path;
    }
  } else if (Array.isArray(node)) {
    const [first, ...rest] = node;

    if (!/\.[a-zA-Z0-9]+$/.test(first)) {
      // Folder
      rest.forEach((child) => indexingFileMap(child, [...path, first], result));
    } else {
      // Kalau langsung file tanpa folder
      node.forEach((child) => indexingFileMap(child, path, result));
    }
  }

  return result;
}

export function convertRootFolder(root: RootFolderEntity): Folder {
  const subFolders = root.subs ?? [];

  const parentMap: Record<number, SubFolderEntity[]> = {};
  subFolders.forEach(subFolder => {
    const pid = subFolder.parentId;
    if (pid !== null) {
      if (!parentMap[pid]) parentMap[pid] = [];
      parentMap[pid].push(subFolder);
    }
  });

  const build = (entity: SubFolderEntity): SubFolder => {
    if (entity.type === 'FILE') return entity.name;
    const children = parentMap[entity.id] ?? [];
    const sub: SubFolder[] = children.map(build);
    if (sub.length > 0) {
      return [entity.name, ...sub]
    } else {
      return [entity.name]
    }
  };

  // Ambil semua top-level Sub Folders (parentId null) yang berada di root
  const topLevel = subFolders.filter(e => e.parentId === null);
  const sub: SubFolder[] = topLevel.map(build);
  return {
    id: root.id,
    name: root.name,
    sub: sub
  };
}