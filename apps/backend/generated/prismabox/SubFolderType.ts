import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const SubFolderType = t.Union([t.Literal("FOLDER"), t.Literal("FILE")], {
  additionalProperties: false,
});
