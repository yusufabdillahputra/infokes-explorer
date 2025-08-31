import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const SubFolderPlain = t.Object(
  {
    id: t.Integer(),
    name: t.String(),
    type: t.Union([t.Literal("FOLDER"), t.Literal("FILE")], {
      additionalProperties: false,
    }),
    rootFolderId: t.Integer(),
    parentId: __nullable__(t.Integer()),
  },
  { additionalProperties: false },
);

export const SubFolderRelations = t.Object(
  {
    root: t.Object(
      { id: t.Integer(), name: t.String() },
      { additionalProperties: false },
    ),
    parent: __nullable__(
      t.Object(
        {
          id: t.Integer(),
          name: t.String(),
          type: t.Union([t.Literal("FOLDER"), t.Literal("FILE")], {
            additionalProperties: false,
          }),
          rootFolderId: t.Integer(),
          parentId: __nullable__(t.Integer()),
        },
        { additionalProperties: false },
      ),
    ),
    subs: t.Array(
      t.Object(
        {
          id: t.Integer(),
          name: t.String(),
          type: t.Union([t.Literal("FOLDER"), t.Literal("FILE")], {
            additionalProperties: false,
          }),
          rootFolderId: t.Integer(),
          parentId: __nullable__(t.Integer()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const SubFolderPlainInputCreate = t.Object(
  {
    name: t.String(),
    type: t.Optional(
      t.Union([t.Literal("FOLDER"), t.Literal("FILE")], {
        additionalProperties: false,
      }),
    ),
  },
  { additionalProperties: false },
);

export const SubFolderPlainInputUpdate = t.Object(
  {
    name: t.Optional(t.String()),
    type: t.Optional(
      t.Union([t.Literal("FOLDER"), t.Literal("FILE")], {
        additionalProperties: false,
      }),
    ),
  },
  { additionalProperties: false },
);

export const SubFolderRelationsInputCreate = t.Object(
  {
    root: t.Object(
      {
        connect: t.Object(
          {
            id: t.Integer({ additionalProperties: false }),
          },
          { additionalProperties: false },
        ),
      },
      { additionalProperties: false },
    ),
    parent: t.Optional(
      t.Object(
        {
          connect: t.Object(
            {
              id: t.Integer({ additionalProperties: false }),
            },
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
    subs: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.Integer({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
  },
  { additionalProperties: false },
);

export const SubFolderRelationsInputUpdate = t.Partial(
  t.Object(
    {
      root: t.Object(
        {
          connect: t.Object(
            {
              id: t.Integer({ additionalProperties: false }),
            },
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
      parent: t.Partial(
        t.Object(
          {
            connect: t.Object(
              {
                id: t.Integer({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            disconnect: t.Boolean(),
          },
          { additionalProperties: false },
        ),
      ),
      subs: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.Integer({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.Integer({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
    },
    { additionalProperties: false },
  ),
);

export const SubFolderWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          name: t.String(),
          type: t.Union([t.Literal("FOLDER"), t.Literal("FILE")], {
            additionalProperties: false,
          }),
          rootFolderId: t.Integer(),
          parentId: t.Integer(),
        },
        { additionalProperties: false },
      ),
    { $id: "SubFolder" },
  ),
);

export const SubFolderWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object({ id: t.Integer() }, { additionalProperties: false }),
          { additionalProperties: false },
        ),
        t.Union([t.Object({ id: t.Integer() })], {
          additionalProperties: false,
        }),
        t.Partial(
          t.Object({
            AND: t.Union([
              Self,
              t.Array(Self, { additionalProperties: false }),
            ]),
            NOT: t.Union([
              Self,
              t.Array(Self, { additionalProperties: false }),
            ]),
            OR: t.Array(Self, { additionalProperties: false }),
          }),
          { additionalProperties: false },
        ),
        t.Partial(
          t.Object(
            {
              id: t.Integer(),
              name: t.String(),
              type: t.Union([t.Literal("FOLDER"), t.Literal("FILE")], {
                additionalProperties: false,
              }),
              rootFolderId: t.Integer(),
              parentId: t.Integer(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "SubFolder" },
);

export const SubFolderSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      name: t.Boolean(),
      type: t.Boolean(),
      rootFolderId: t.Boolean(),
      root: t.Boolean(),
      parentId: t.Boolean(),
      parent: t.Boolean(),
      subs: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const SubFolderInclude = t.Partial(
  t.Object(
    {
      type: t.Boolean(),
      root: t.Boolean(),
      parent: t.Boolean(),
      subs: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const SubFolderOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      rootFolderId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      parentId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const SubFolder = t.Composite([SubFolderPlain, SubFolderRelations], {
  additionalProperties: false,
});

export const SubFolderInputCreate = t.Composite(
  [SubFolderPlainInputCreate, SubFolderRelationsInputCreate],
  { additionalProperties: false },
);

export const SubFolderInputUpdate = t.Composite(
  [SubFolderPlainInputUpdate, SubFolderRelationsInputUpdate],
  { additionalProperties: false },
);
