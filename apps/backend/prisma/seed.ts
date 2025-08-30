import {Prisma, PrismaClient} from '../generated/prisma'

const prisma = new PrismaClient()
const SeedRootFolder: Prisma.RootFolderCreateManyInput[] = [
  {name: 'Pertama'},
  {name: 'Kedua'},
  {name: 'Ketiga'},
];
const SeedSubFolder: Prisma.SubFolderCreateManyInput[] = [
  {
    "id": 1,
    "name": "Folder Pertama",
    "type": "FOLDER",
    "rootFolderId": 1,
    "parentId": null
  },
  {
    "id": 2,
    "name": "Folder Kedua",
    "type": "FOLDER",
    "rootFolderId": 1,
    "parentId": null
  },
  {
    "id": 3,
    "name": "gambar.png",
    "type": "FILE",
    "rootFolderId": 1,
    "parentId": 1
  },
  {
    "id": 4,
    "name": "excel.xlsx",
    "type": "FILE",
    "rootFolderId": 1,
    "parentId": null
  },
  {
    "id": 5,
    "name": "Folder Keempat",
    "type": "FOLDER",
    "rootFolderId": 1,
    "parentId": 2
  },
  {
    "id": 6,
    "name": "db.sql",
    "type": "FILE",
    "rootFolderId": 1,
    "parentId": 5
  },
  {
    "id": 7,
    "name": "Folder Pertama",
    "type": "FOLDER",
    "rootFolderId": 2,
    "parentId": null
  },
  {
    "id": 8,
    "name": "Folder Kedua",
    "type": "FOLDER",
    "rootFolderId": 2,
    "parentId": null
  },
  {
    "id": 9,
    "name": "gambar.png",
    "type": "FILE",
    "rootFolderId": 2,
    "parentId": 8
  },
  {
    "id": 10,
    "name": "excel.xlsx",
    "type": "FILE",
    "rootFolderId": 2,
    "parentId": null
  },
  {
    "id": 11,
    "name": "Folder Keempat",
    "type": "FOLDER",
    "rootFolderId": 2,
    "parentId": 7
  },
  {
    "id": 12,
    "name": "db.sql",
    "type": "FILE",
    "rootFolderId": 2,
    "parentId": 7
  },
  {
    "id": 13,
    "name": "db.sql",
    "type": "FILE",
    "rootFolderId": 3,
    "parentId": null
  },
  {
    "id": 14,
    "name": "data-folder-4.mkv",
    "type": "FILE",
    "rootFolderId": 2,
    "parentId": 11
  }
]

const seed = async () => {
  await prisma.rootFolder.createMany({
    data: SeedRootFolder
  });
  await prisma.subFolder.createMany({
    data: SeedSubFolder
  })
};

seed()
  .then(() => console.log("Seeders Done"))
  .catch((reason) => console.log(reason.message));