import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const RootFolderPlain = t.Object(
  { id: t.Integer(), name: t.String() },
  { additionalProperties: false },
);

export const RootFolderRelations = t.Object(
  {
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

export const RootFolderPlainInputCreate = t.Object(
  { name: t.String() },
  { additionalProperties: false },
);

export const RootFolderPlainInputUpdate = t.Object(
  { name: t.Optional(t.String()) },
  { additionalProperties: false },
);

export const RootFolderRelationsInputCreate = t.Object(
  {
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

export const RootFolderRelationsInputUpdate = t.Partial(
  t.Object(
    {
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

export const RootFolderWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          name: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "RootFolder" },
  ),
);

export const RootFolderWhereUnique = t.Recursive(
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
            { id: t.Integer(), name: t.String() },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "RootFolder" },
);

export const RootFolderSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      name: t.Boolean(),
      subs: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const RootFolderInclude = t.Partial(
  t.Object(
    { subs: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const RootFolderOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const RootFolder = t.Composite([RootFolderPlain, RootFolderRelations], {
  additionalProperties: false,
});

export const RootFolderInputCreate = t.Composite(
  [RootFolderPlainInputCreate, RootFolderRelationsInputCreate],
  { additionalProperties: false },
);

export const RootFolderInputUpdate = t.Composite(
  [RootFolderPlainInputUpdate, RootFolderRelationsInputUpdate],
  { additionalProperties: false },
);
