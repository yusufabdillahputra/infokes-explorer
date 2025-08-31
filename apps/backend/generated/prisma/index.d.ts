
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model SubFolder
 * 
 */
export type SubFolder = $Result.DefaultSelection<Prisma.$SubFolderPayload>
/**
 * Model RootFolder
 * 
 */
export type RootFolder = $Result.DefaultSelection<Prisma.$RootFolderPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SubFolderType: {
  FOLDER: 'FOLDER',
  FILE: 'FILE'
};

export type SubFolderType = (typeof SubFolderType)[keyof typeof SubFolderType]

}

export type SubFolderType = $Enums.SubFolderType

export const SubFolderType: typeof $Enums.SubFolderType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more SubFolders
 * const subFolders = await prisma.subFolder.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more SubFolders
   * const subFolders = await prisma.subFolder.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.subFolder`: Exposes CRUD operations for the **SubFolder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubFolders
    * const subFolders = await prisma.subFolder.findMany()
    * ```
    */
  get subFolder(): Prisma.SubFolderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rootFolder`: Exposes CRUD operations for the **RootFolder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RootFolders
    * const rootFolders = await prisma.rootFolder.findMany()
    * ```
    */
  get rootFolder(): Prisma.RootFolderDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    SubFolder: 'SubFolder',
    RootFolder: 'RootFolder'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "subFolder" | "rootFolder"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      SubFolder: {
        payload: Prisma.$SubFolderPayload<ExtArgs>
        fields: Prisma.SubFolderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubFolderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubFolderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubFolderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubFolderPayload>
          }
          findFirst: {
            args: Prisma.SubFolderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubFolderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubFolderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubFolderPayload>
          }
          findMany: {
            args: Prisma.SubFolderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubFolderPayload>[]
          }
          create: {
            args: Prisma.SubFolderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubFolderPayload>
          }
          createMany: {
            args: Prisma.SubFolderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SubFolderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubFolderPayload>
          }
          update: {
            args: Prisma.SubFolderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubFolderPayload>
          }
          deleteMany: {
            args: Prisma.SubFolderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubFolderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubFolderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubFolderPayload>
          }
          aggregate: {
            args: Prisma.SubFolderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubFolder>
          }
          groupBy: {
            args: Prisma.SubFolderGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubFolderGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubFolderCountArgs<ExtArgs>
            result: $Utils.Optional<SubFolderCountAggregateOutputType> | number
          }
        }
      }
      RootFolder: {
        payload: Prisma.$RootFolderPayload<ExtArgs>
        fields: Prisma.RootFolderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RootFolderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RootFolderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RootFolderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RootFolderPayload>
          }
          findFirst: {
            args: Prisma.RootFolderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RootFolderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RootFolderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RootFolderPayload>
          }
          findMany: {
            args: Prisma.RootFolderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RootFolderPayload>[]
          }
          create: {
            args: Prisma.RootFolderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RootFolderPayload>
          }
          createMany: {
            args: Prisma.RootFolderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RootFolderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RootFolderPayload>
          }
          update: {
            args: Prisma.RootFolderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RootFolderPayload>
          }
          deleteMany: {
            args: Prisma.RootFolderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RootFolderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RootFolderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RootFolderPayload>
          }
          aggregate: {
            args: Prisma.RootFolderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRootFolder>
          }
          groupBy: {
            args: Prisma.RootFolderGroupByArgs<ExtArgs>
            result: $Utils.Optional<RootFolderGroupByOutputType>[]
          }
          count: {
            args: Prisma.RootFolderCountArgs<ExtArgs>
            result: $Utils.Optional<RootFolderCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    subFolder?: SubFolderOmit
    rootFolder?: RootFolderOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SubFolderCountOutputType
   */

  export type SubFolderCountOutputType = {
    subs: number
  }

  export type SubFolderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subs?: boolean | SubFolderCountOutputTypeCountSubsArgs
  }

  // Custom InputTypes
  /**
   * SubFolderCountOutputType without action
   */
  export type SubFolderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubFolderCountOutputType
     */
    select?: SubFolderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubFolderCountOutputType without action
   */
  export type SubFolderCountOutputTypeCountSubsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubFolderWhereInput
  }


  /**
   * Count Type RootFolderCountOutputType
   */

  export type RootFolderCountOutputType = {
    subs: number
  }

  export type RootFolderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subs?: boolean | RootFolderCountOutputTypeCountSubsArgs
  }

  // Custom InputTypes
  /**
   * RootFolderCountOutputType without action
   */
  export type RootFolderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RootFolderCountOutputType
     */
    select?: RootFolderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RootFolderCountOutputType without action
   */
  export type RootFolderCountOutputTypeCountSubsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubFolderWhereInput
  }


  /**
   * Models
   */

  /**
   * Model SubFolder
   */

  export type AggregateSubFolder = {
    _count: SubFolderCountAggregateOutputType | null
    _avg: SubFolderAvgAggregateOutputType | null
    _sum: SubFolderSumAggregateOutputType | null
    _min: SubFolderMinAggregateOutputType | null
    _max: SubFolderMaxAggregateOutputType | null
  }

  export type SubFolderAvgAggregateOutputType = {
    id: number | null
    rootFolderId: number | null
    parentId: number | null
  }

  export type SubFolderSumAggregateOutputType = {
    id: number | null
    rootFolderId: number | null
    parentId: number | null
  }

  export type SubFolderMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: $Enums.SubFolderType | null
    rootFolderId: number | null
    parentId: number | null
  }

  export type SubFolderMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: $Enums.SubFolderType | null
    rootFolderId: number | null
    parentId: number | null
  }

  export type SubFolderCountAggregateOutputType = {
    id: number
    name: number
    type: number
    rootFolderId: number
    parentId: number
    _all: number
  }


  export type SubFolderAvgAggregateInputType = {
    id?: true
    rootFolderId?: true
    parentId?: true
  }

  export type SubFolderSumAggregateInputType = {
    id?: true
    rootFolderId?: true
    parentId?: true
  }

  export type SubFolderMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    rootFolderId?: true
    parentId?: true
  }

  export type SubFolderMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    rootFolderId?: true
    parentId?: true
  }

  export type SubFolderCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    rootFolderId?: true
    parentId?: true
    _all?: true
  }

  export type SubFolderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubFolder to aggregate.
     */
    where?: SubFolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubFolders to fetch.
     */
    orderBy?: SubFolderOrderByWithRelationInput | SubFolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubFolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubFolders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubFolders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubFolders
    **/
    _count?: true | SubFolderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubFolderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubFolderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubFolderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubFolderMaxAggregateInputType
  }

  export type GetSubFolderAggregateType<T extends SubFolderAggregateArgs> = {
        [P in keyof T & keyof AggregateSubFolder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubFolder[P]>
      : GetScalarType<T[P], AggregateSubFolder[P]>
  }




  export type SubFolderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubFolderWhereInput
    orderBy?: SubFolderOrderByWithAggregationInput | SubFolderOrderByWithAggregationInput[]
    by: SubFolderScalarFieldEnum[] | SubFolderScalarFieldEnum
    having?: SubFolderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubFolderCountAggregateInputType | true
    _avg?: SubFolderAvgAggregateInputType
    _sum?: SubFolderSumAggregateInputType
    _min?: SubFolderMinAggregateInputType
    _max?: SubFolderMaxAggregateInputType
  }

  export type SubFolderGroupByOutputType = {
    id: number
    name: string
    type: $Enums.SubFolderType
    rootFolderId: number
    parentId: number | null
    _count: SubFolderCountAggregateOutputType | null
    _avg: SubFolderAvgAggregateOutputType | null
    _sum: SubFolderSumAggregateOutputType | null
    _min: SubFolderMinAggregateOutputType | null
    _max: SubFolderMaxAggregateOutputType | null
  }

  type GetSubFolderGroupByPayload<T extends SubFolderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubFolderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubFolderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubFolderGroupByOutputType[P]>
            : GetScalarType<T[P], SubFolderGroupByOutputType[P]>
        }
      >
    >


  export type SubFolderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    rootFolderId?: boolean
    parentId?: boolean
    root?: boolean | RootFolderDefaultArgs<ExtArgs>
    parent?: boolean | SubFolder$parentArgs<ExtArgs>
    subs?: boolean | SubFolder$subsArgs<ExtArgs>
    _count?: boolean | SubFolderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subFolder"]>



  export type SubFolderSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    rootFolderId?: boolean
    parentId?: boolean
  }

  export type SubFolderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "rootFolderId" | "parentId", ExtArgs["result"]["subFolder"]>
  export type SubFolderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    root?: boolean | RootFolderDefaultArgs<ExtArgs>
    parent?: boolean | SubFolder$parentArgs<ExtArgs>
    subs?: boolean | SubFolder$subsArgs<ExtArgs>
    _count?: boolean | SubFolderCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SubFolderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubFolder"
    objects: {
      root: Prisma.$RootFolderPayload<ExtArgs>
      parent: Prisma.$SubFolderPayload<ExtArgs> | null
      subs: Prisma.$SubFolderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      type: $Enums.SubFolderType
      rootFolderId: number
      parentId: number | null
    }, ExtArgs["result"]["subFolder"]>
    composites: {}
  }

  type SubFolderGetPayload<S extends boolean | null | undefined | SubFolderDefaultArgs> = $Result.GetResult<Prisma.$SubFolderPayload, S>

  type SubFolderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubFolderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubFolderCountAggregateInputType | true
    }

  export interface SubFolderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubFolder'], meta: { name: 'SubFolder' } }
    /**
     * Find zero or one SubFolder that matches the filter.
     * @param {SubFolderFindUniqueArgs} args - Arguments to find a SubFolder
     * @example
     * // Get one SubFolder
     * const subFolder = await prisma.subFolder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubFolderFindUniqueArgs>(args: SelectSubset<T, SubFolderFindUniqueArgs<ExtArgs>>): Prisma__SubFolderClient<$Result.GetResult<Prisma.$SubFolderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubFolder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubFolderFindUniqueOrThrowArgs} args - Arguments to find a SubFolder
     * @example
     * // Get one SubFolder
     * const subFolder = await prisma.subFolder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubFolderFindUniqueOrThrowArgs>(args: SelectSubset<T, SubFolderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubFolderClient<$Result.GetResult<Prisma.$SubFolderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubFolder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubFolderFindFirstArgs} args - Arguments to find a SubFolder
     * @example
     * // Get one SubFolder
     * const subFolder = await prisma.subFolder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubFolderFindFirstArgs>(args?: SelectSubset<T, SubFolderFindFirstArgs<ExtArgs>>): Prisma__SubFolderClient<$Result.GetResult<Prisma.$SubFolderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubFolder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubFolderFindFirstOrThrowArgs} args - Arguments to find a SubFolder
     * @example
     * // Get one SubFolder
     * const subFolder = await prisma.subFolder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubFolderFindFirstOrThrowArgs>(args?: SelectSubset<T, SubFolderFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubFolderClient<$Result.GetResult<Prisma.$SubFolderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubFolders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubFolderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubFolders
     * const subFolders = await prisma.subFolder.findMany()
     * 
     * // Get first 10 SubFolders
     * const subFolders = await prisma.subFolder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subFolderWithIdOnly = await prisma.subFolder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubFolderFindManyArgs>(args?: SelectSubset<T, SubFolderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubFolderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubFolder.
     * @param {SubFolderCreateArgs} args - Arguments to create a SubFolder.
     * @example
     * // Create one SubFolder
     * const SubFolder = await prisma.subFolder.create({
     *   data: {
     *     // ... data to create a SubFolder
     *   }
     * })
     * 
     */
    create<T extends SubFolderCreateArgs>(args: SelectSubset<T, SubFolderCreateArgs<ExtArgs>>): Prisma__SubFolderClient<$Result.GetResult<Prisma.$SubFolderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubFolders.
     * @param {SubFolderCreateManyArgs} args - Arguments to create many SubFolders.
     * @example
     * // Create many SubFolders
     * const subFolder = await prisma.subFolder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubFolderCreateManyArgs>(args?: SelectSubset<T, SubFolderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SubFolder.
     * @param {SubFolderDeleteArgs} args - Arguments to delete one SubFolder.
     * @example
     * // Delete one SubFolder
     * const SubFolder = await prisma.subFolder.delete({
     *   where: {
     *     // ... filter to delete one SubFolder
     *   }
     * })
     * 
     */
    delete<T extends SubFolderDeleteArgs>(args: SelectSubset<T, SubFolderDeleteArgs<ExtArgs>>): Prisma__SubFolderClient<$Result.GetResult<Prisma.$SubFolderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubFolder.
     * @param {SubFolderUpdateArgs} args - Arguments to update one SubFolder.
     * @example
     * // Update one SubFolder
     * const subFolder = await prisma.subFolder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubFolderUpdateArgs>(args: SelectSubset<T, SubFolderUpdateArgs<ExtArgs>>): Prisma__SubFolderClient<$Result.GetResult<Prisma.$SubFolderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubFolders.
     * @param {SubFolderDeleteManyArgs} args - Arguments to filter SubFolders to delete.
     * @example
     * // Delete a few SubFolders
     * const { count } = await prisma.subFolder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubFolderDeleteManyArgs>(args?: SelectSubset<T, SubFolderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubFolders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubFolderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubFolders
     * const subFolder = await prisma.subFolder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubFolderUpdateManyArgs>(args: SelectSubset<T, SubFolderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SubFolder.
     * @param {SubFolderUpsertArgs} args - Arguments to update or create a SubFolder.
     * @example
     * // Update or create a SubFolder
     * const subFolder = await prisma.subFolder.upsert({
     *   create: {
     *     // ... data to create a SubFolder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubFolder we want to update
     *   }
     * })
     */
    upsert<T extends SubFolderUpsertArgs>(args: SelectSubset<T, SubFolderUpsertArgs<ExtArgs>>): Prisma__SubFolderClient<$Result.GetResult<Prisma.$SubFolderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubFolders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubFolderCountArgs} args - Arguments to filter SubFolders to count.
     * @example
     * // Count the number of SubFolders
     * const count = await prisma.subFolder.count({
     *   where: {
     *     // ... the filter for the SubFolders we want to count
     *   }
     * })
    **/
    count<T extends SubFolderCountArgs>(
      args?: Subset<T, SubFolderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubFolderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubFolder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubFolderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubFolderAggregateArgs>(args: Subset<T, SubFolderAggregateArgs>): Prisma.PrismaPromise<GetSubFolderAggregateType<T>>

    /**
     * Group by SubFolder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubFolderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubFolderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubFolderGroupByArgs['orderBy'] }
        : { orderBy?: SubFolderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubFolderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubFolderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubFolder model
   */
  readonly fields: SubFolderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubFolder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubFolderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    root<T extends RootFolderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RootFolderDefaultArgs<ExtArgs>>): Prisma__RootFolderClient<$Result.GetResult<Prisma.$RootFolderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parent<T extends SubFolder$parentArgs<ExtArgs> = {}>(args?: Subset<T, SubFolder$parentArgs<ExtArgs>>): Prisma__SubFolderClient<$Result.GetResult<Prisma.$SubFolderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subs<T extends SubFolder$subsArgs<ExtArgs> = {}>(args?: Subset<T, SubFolder$subsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubFolderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SubFolder model
   */
  interface SubFolderFieldRefs {
    readonly id: FieldRef<"SubFolder", 'Int'>
    readonly name: FieldRef<"SubFolder", 'String'>
    readonly type: FieldRef<"SubFolder", 'SubFolderType'>
    readonly rootFolderId: FieldRef<"SubFolder", 'Int'>
    readonly parentId: FieldRef<"SubFolder", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SubFolder findUnique
   */
  export type SubFolderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubFolder
     */
    select?: SubFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubFolder
     */
    omit?: SubFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubFolderInclude<ExtArgs> | null
    /**
     * Filter, which SubFolder to fetch.
     */
    where: SubFolderWhereUniqueInput
  }

  /**
   * SubFolder findUniqueOrThrow
   */
  export type SubFolderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubFolder
     */
    select?: SubFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubFolder
     */
    omit?: SubFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubFolderInclude<ExtArgs> | null
    /**
     * Filter, which SubFolder to fetch.
     */
    where: SubFolderWhereUniqueInput
  }

  /**
   * SubFolder findFirst
   */
  export type SubFolderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubFolder
     */
    select?: SubFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubFolder
     */
    omit?: SubFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubFolderInclude<ExtArgs> | null
    /**
     * Filter, which SubFolder to fetch.
     */
    where?: SubFolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubFolders to fetch.
     */
    orderBy?: SubFolderOrderByWithRelationInput | SubFolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubFolders.
     */
    cursor?: SubFolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubFolders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubFolders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubFolders.
     */
    distinct?: SubFolderScalarFieldEnum | SubFolderScalarFieldEnum[]
  }

  /**
   * SubFolder findFirstOrThrow
   */
  export type SubFolderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubFolder
     */
    select?: SubFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubFolder
     */
    omit?: SubFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubFolderInclude<ExtArgs> | null
    /**
     * Filter, which SubFolder to fetch.
     */
    where?: SubFolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubFolders to fetch.
     */
    orderBy?: SubFolderOrderByWithRelationInput | SubFolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubFolders.
     */
    cursor?: SubFolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubFolders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubFolders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubFolders.
     */
    distinct?: SubFolderScalarFieldEnum | SubFolderScalarFieldEnum[]
  }

  /**
   * SubFolder findMany
   */
  export type SubFolderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubFolder
     */
    select?: SubFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubFolder
     */
    omit?: SubFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubFolderInclude<ExtArgs> | null
    /**
     * Filter, which SubFolders to fetch.
     */
    where?: SubFolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubFolders to fetch.
     */
    orderBy?: SubFolderOrderByWithRelationInput | SubFolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubFolders.
     */
    cursor?: SubFolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubFolders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubFolders.
     */
    skip?: number
    distinct?: SubFolderScalarFieldEnum | SubFolderScalarFieldEnum[]
  }

  /**
   * SubFolder create
   */
  export type SubFolderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubFolder
     */
    select?: SubFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubFolder
     */
    omit?: SubFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubFolderInclude<ExtArgs> | null
    /**
     * The data needed to create a SubFolder.
     */
    data: XOR<SubFolderCreateInput, SubFolderUncheckedCreateInput>
  }

  /**
   * SubFolder createMany
   */
  export type SubFolderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubFolders.
     */
    data: SubFolderCreateManyInput | SubFolderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubFolder update
   */
  export type SubFolderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubFolder
     */
    select?: SubFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubFolder
     */
    omit?: SubFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubFolderInclude<ExtArgs> | null
    /**
     * The data needed to update a SubFolder.
     */
    data: XOR<SubFolderUpdateInput, SubFolderUncheckedUpdateInput>
    /**
     * Choose, which SubFolder to update.
     */
    where: SubFolderWhereUniqueInput
  }

  /**
   * SubFolder updateMany
   */
  export type SubFolderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubFolders.
     */
    data: XOR<SubFolderUpdateManyMutationInput, SubFolderUncheckedUpdateManyInput>
    /**
     * Filter which SubFolders to update
     */
    where?: SubFolderWhereInput
    /**
     * Limit how many SubFolders to update.
     */
    limit?: number
  }

  /**
   * SubFolder upsert
   */
  export type SubFolderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubFolder
     */
    select?: SubFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubFolder
     */
    omit?: SubFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubFolderInclude<ExtArgs> | null
    /**
     * The filter to search for the SubFolder to update in case it exists.
     */
    where: SubFolderWhereUniqueInput
    /**
     * In case the SubFolder found by the `where` argument doesn't exist, create a new SubFolder with this data.
     */
    create: XOR<SubFolderCreateInput, SubFolderUncheckedCreateInput>
    /**
     * In case the SubFolder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubFolderUpdateInput, SubFolderUncheckedUpdateInput>
  }

  /**
   * SubFolder delete
   */
  export type SubFolderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubFolder
     */
    select?: SubFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubFolder
     */
    omit?: SubFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubFolderInclude<ExtArgs> | null
    /**
     * Filter which SubFolder to delete.
     */
    where: SubFolderWhereUniqueInput
  }

  /**
   * SubFolder deleteMany
   */
  export type SubFolderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubFolders to delete
     */
    where?: SubFolderWhereInput
    /**
     * Limit how many SubFolders to delete.
     */
    limit?: number
  }

  /**
   * SubFolder.parent
   */
  export type SubFolder$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubFolder
     */
    select?: SubFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubFolder
     */
    omit?: SubFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubFolderInclude<ExtArgs> | null
    where?: SubFolderWhereInput
  }

  /**
   * SubFolder.subs
   */
  export type SubFolder$subsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubFolder
     */
    select?: SubFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubFolder
     */
    omit?: SubFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubFolderInclude<ExtArgs> | null
    where?: SubFolderWhereInput
    orderBy?: SubFolderOrderByWithRelationInput | SubFolderOrderByWithRelationInput[]
    cursor?: SubFolderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubFolderScalarFieldEnum | SubFolderScalarFieldEnum[]
  }

  /**
   * SubFolder without action
   */
  export type SubFolderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubFolder
     */
    select?: SubFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubFolder
     */
    omit?: SubFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubFolderInclude<ExtArgs> | null
  }


  /**
   * Model RootFolder
   */

  export type AggregateRootFolder = {
    _count: RootFolderCountAggregateOutputType | null
    _avg: RootFolderAvgAggregateOutputType | null
    _sum: RootFolderSumAggregateOutputType | null
    _min: RootFolderMinAggregateOutputType | null
    _max: RootFolderMaxAggregateOutputType | null
  }

  export type RootFolderAvgAggregateOutputType = {
    id: number | null
  }

  export type RootFolderSumAggregateOutputType = {
    id: number | null
  }

  export type RootFolderMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RootFolderMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RootFolderCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RootFolderAvgAggregateInputType = {
    id?: true
  }

  export type RootFolderSumAggregateInputType = {
    id?: true
  }

  export type RootFolderMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RootFolderMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RootFolderCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RootFolderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RootFolder to aggregate.
     */
    where?: RootFolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RootFolders to fetch.
     */
    orderBy?: RootFolderOrderByWithRelationInput | RootFolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RootFolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RootFolders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RootFolders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RootFolders
    **/
    _count?: true | RootFolderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RootFolderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RootFolderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RootFolderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RootFolderMaxAggregateInputType
  }

  export type GetRootFolderAggregateType<T extends RootFolderAggregateArgs> = {
        [P in keyof T & keyof AggregateRootFolder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRootFolder[P]>
      : GetScalarType<T[P], AggregateRootFolder[P]>
  }




  export type RootFolderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RootFolderWhereInput
    orderBy?: RootFolderOrderByWithAggregationInput | RootFolderOrderByWithAggregationInput[]
    by: RootFolderScalarFieldEnum[] | RootFolderScalarFieldEnum
    having?: RootFolderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RootFolderCountAggregateInputType | true
    _avg?: RootFolderAvgAggregateInputType
    _sum?: RootFolderSumAggregateInputType
    _min?: RootFolderMinAggregateInputType
    _max?: RootFolderMaxAggregateInputType
  }

  export type RootFolderGroupByOutputType = {
    id: number
    name: string
    _count: RootFolderCountAggregateOutputType | null
    _avg: RootFolderAvgAggregateOutputType | null
    _sum: RootFolderSumAggregateOutputType | null
    _min: RootFolderMinAggregateOutputType | null
    _max: RootFolderMaxAggregateOutputType | null
  }

  type GetRootFolderGroupByPayload<T extends RootFolderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RootFolderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RootFolderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RootFolderGroupByOutputType[P]>
            : GetScalarType<T[P], RootFolderGroupByOutputType[P]>
        }
      >
    >


  export type RootFolderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subs?: boolean | RootFolder$subsArgs<ExtArgs>
    _count?: boolean | RootFolderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rootFolder"]>



  export type RootFolderSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type RootFolderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["rootFolder"]>
  export type RootFolderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subs?: boolean | RootFolder$subsArgs<ExtArgs>
    _count?: boolean | RootFolderCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RootFolderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RootFolder"
    objects: {
      subs: Prisma.$SubFolderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["rootFolder"]>
    composites: {}
  }

  type RootFolderGetPayload<S extends boolean | null | undefined | RootFolderDefaultArgs> = $Result.GetResult<Prisma.$RootFolderPayload, S>

  type RootFolderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RootFolderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RootFolderCountAggregateInputType | true
    }

  export interface RootFolderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RootFolder'], meta: { name: 'RootFolder' } }
    /**
     * Find zero or one RootFolder that matches the filter.
     * @param {RootFolderFindUniqueArgs} args - Arguments to find a RootFolder
     * @example
     * // Get one RootFolder
     * const rootFolder = await prisma.rootFolder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RootFolderFindUniqueArgs>(args: SelectSubset<T, RootFolderFindUniqueArgs<ExtArgs>>): Prisma__RootFolderClient<$Result.GetResult<Prisma.$RootFolderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RootFolder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RootFolderFindUniqueOrThrowArgs} args - Arguments to find a RootFolder
     * @example
     * // Get one RootFolder
     * const rootFolder = await prisma.rootFolder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RootFolderFindUniqueOrThrowArgs>(args: SelectSubset<T, RootFolderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RootFolderClient<$Result.GetResult<Prisma.$RootFolderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RootFolder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RootFolderFindFirstArgs} args - Arguments to find a RootFolder
     * @example
     * // Get one RootFolder
     * const rootFolder = await prisma.rootFolder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RootFolderFindFirstArgs>(args?: SelectSubset<T, RootFolderFindFirstArgs<ExtArgs>>): Prisma__RootFolderClient<$Result.GetResult<Prisma.$RootFolderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RootFolder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RootFolderFindFirstOrThrowArgs} args - Arguments to find a RootFolder
     * @example
     * // Get one RootFolder
     * const rootFolder = await prisma.rootFolder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RootFolderFindFirstOrThrowArgs>(args?: SelectSubset<T, RootFolderFindFirstOrThrowArgs<ExtArgs>>): Prisma__RootFolderClient<$Result.GetResult<Prisma.$RootFolderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RootFolders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RootFolderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RootFolders
     * const rootFolders = await prisma.rootFolder.findMany()
     * 
     * // Get first 10 RootFolders
     * const rootFolders = await prisma.rootFolder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rootFolderWithIdOnly = await prisma.rootFolder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RootFolderFindManyArgs>(args?: SelectSubset<T, RootFolderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RootFolderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RootFolder.
     * @param {RootFolderCreateArgs} args - Arguments to create a RootFolder.
     * @example
     * // Create one RootFolder
     * const RootFolder = await prisma.rootFolder.create({
     *   data: {
     *     // ... data to create a RootFolder
     *   }
     * })
     * 
     */
    create<T extends RootFolderCreateArgs>(args: SelectSubset<T, RootFolderCreateArgs<ExtArgs>>): Prisma__RootFolderClient<$Result.GetResult<Prisma.$RootFolderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RootFolders.
     * @param {RootFolderCreateManyArgs} args - Arguments to create many RootFolders.
     * @example
     * // Create many RootFolders
     * const rootFolder = await prisma.rootFolder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RootFolderCreateManyArgs>(args?: SelectSubset<T, RootFolderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RootFolder.
     * @param {RootFolderDeleteArgs} args - Arguments to delete one RootFolder.
     * @example
     * // Delete one RootFolder
     * const RootFolder = await prisma.rootFolder.delete({
     *   where: {
     *     // ... filter to delete one RootFolder
     *   }
     * })
     * 
     */
    delete<T extends RootFolderDeleteArgs>(args: SelectSubset<T, RootFolderDeleteArgs<ExtArgs>>): Prisma__RootFolderClient<$Result.GetResult<Prisma.$RootFolderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RootFolder.
     * @param {RootFolderUpdateArgs} args - Arguments to update one RootFolder.
     * @example
     * // Update one RootFolder
     * const rootFolder = await prisma.rootFolder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RootFolderUpdateArgs>(args: SelectSubset<T, RootFolderUpdateArgs<ExtArgs>>): Prisma__RootFolderClient<$Result.GetResult<Prisma.$RootFolderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RootFolders.
     * @param {RootFolderDeleteManyArgs} args - Arguments to filter RootFolders to delete.
     * @example
     * // Delete a few RootFolders
     * const { count } = await prisma.rootFolder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RootFolderDeleteManyArgs>(args?: SelectSubset<T, RootFolderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RootFolders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RootFolderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RootFolders
     * const rootFolder = await prisma.rootFolder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RootFolderUpdateManyArgs>(args: SelectSubset<T, RootFolderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RootFolder.
     * @param {RootFolderUpsertArgs} args - Arguments to update or create a RootFolder.
     * @example
     * // Update or create a RootFolder
     * const rootFolder = await prisma.rootFolder.upsert({
     *   create: {
     *     // ... data to create a RootFolder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RootFolder we want to update
     *   }
     * })
     */
    upsert<T extends RootFolderUpsertArgs>(args: SelectSubset<T, RootFolderUpsertArgs<ExtArgs>>): Prisma__RootFolderClient<$Result.GetResult<Prisma.$RootFolderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RootFolders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RootFolderCountArgs} args - Arguments to filter RootFolders to count.
     * @example
     * // Count the number of RootFolders
     * const count = await prisma.rootFolder.count({
     *   where: {
     *     // ... the filter for the RootFolders we want to count
     *   }
     * })
    **/
    count<T extends RootFolderCountArgs>(
      args?: Subset<T, RootFolderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RootFolderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RootFolder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RootFolderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RootFolderAggregateArgs>(args: Subset<T, RootFolderAggregateArgs>): Prisma.PrismaPromise<GetRootFolderAggregateType<T>>

    /**
     * Group by RootFolder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RootFolderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RootFolderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RootFolderGroupByArgs['orderBy'] }
        : { orderBy?: RootFolderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RootFolderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRootFolderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RootFolder model
   */
  readonly fields: RootFolderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RootFolder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RootFolderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subs<T extends RootFolder$subsArgs<ExtArgs> = {}>(args?: Subset<T, RootFolder$subsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubFolderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RootFolder model
   */
  interface RootFolderFieldRefs {
    readonly id: FieldRef<"RootFolder", 'Int'>
    readonly name: FieldRef<"RootFolder", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RootFolder findUnique
   */
  export type RootFolderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RootFolder
     */
    select?: RootFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RootFolder
     */
    omit?: RootFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RootFolderInclude<ExtArgs> | null
    /**
     * Filter, which RootFolder to fetch.
     */
    where: RootFolderWhereUniqueInput
  }

  /**
   * RootFolder findUniqueOrThrow
   */
  export type RootFolderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RootFolder
     */
    select?: RootFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RootFolder
     */
    omit?: RootFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RootFolderInclude<ExtArgs> | null
    /**
     * Filter, which RootFolder to fetch.
     */
    where: RootFolderWhereUniqueInput
  }

  /**
   * RootFolder findFirst
   */
  export type RootFolderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RootFolder
     */
    select?: RootFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RootFolder
     */
    omit?: RootFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RootFolderInclude<ExtArgs> | null
    /**
     * Filter, which RootFolder to fetch.
     */
    where?: RootFolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RootFolders to fetch.
     */
    orderBy?: RootFolderOrderByWithRelationInput | RootFolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RootFolders.
     */
    cursor?: RootFolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RootFolders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RootFolders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RootFolders.
     */
    distinct?: RootFolderScalarFieldEnum | RootFolderScalarFieldEnum[]
  }

  /**
   * RootFolder findFirstOrThrow
   */
  export type RootFolderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RootFolder
     */
    select?: RootFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RootFolder
     */
    omit?: RootFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RootFolderInclude<ExtArgs> | null
    /**
     * Filter, which RootFolder to fetch.
     */
    where?: RootFolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RootFolders to fetch.
     */
    orderBy?: RootFolderOrderByWithRelationInput | RootFolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RootFolders.
     */
    cursor?: RootFolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RootFolders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RootFolders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RootFolders.
     */
    distinct?: RootFolderScalarFieldEnum | RootFolderScalarFieldEnum[]
  }

  /**
   * RootFolder findMany
   */
  export type RootFolderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RootFolder
     */
    select?: RootFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RootFolder
     */
    omit?: RootFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RootFolderInclude<ExtArgs> | null
    /**
     * Filter, which RootFolders to fetch.
     */
    where?: RootFolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RootFolders to fetch.
     */
    orderBy?: RootFolderOrderByWithRelationInput | RootFolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RootFolders.
     */
    cursor?: RootFolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RootFolders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RootFolders.
     */
    skip?: number
    distinct?: RootFolderScalarFieldEnum | RootFolderScalarFieldEnum[]
  }

  /**
   * RootFolder create
   */
  export type RootFolderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RootFolder
     */
    select?: RootFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RootFolder
     */
    omit?: RootFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RootFolderInclude<ExtArgs> | null
    /**
     * The data needed to create a RootFolder.
     */
    data: XOR<RootFolderCreateInput, RootFolderUncheckedCreateInput>
  }

  /**
   * RootFolder createMany
   */
  export type RootFolderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RootFolders.
     */
    data: RootFolderCreateManyInput | RootFolderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RootFolder update
   */
  export type RootFolderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RootFolder
     */
    select?: RootFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RootFolder
     */
    omit?: RootFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RootFolderInclude<ExtArgs> | null
    /**
     * The data needed to update a RootFolder.
     */
    data: XOR<RootFolderUpdateInput, RootFolderUncheckedUpdateInput>
    /**
     * Choose, which RootFolder to update.
     */
    where: RootFolderWhereUniqueInput
  }

  /**
   * RootFolder updateMany
   */
  export type RootFolderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RootFolders.
     */
    data: XOR<RootFolderUpdateManyMutationInput, RootFolderUncheckedUpdateManyInput>
    /**
     * Filter which RootFolders to update
     */
    where?: RootFolderWhereInput
    /**
     * Limit how many RootFolders to update.
     */
    limit?: number
  }

  /**
   * RootFolder upsert
   */
  export type RootFolderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RootFolder
     */
    select?: RootFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RootFolder
     */
    omit?: RootFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RootFolderInclude<ExtArgs> | null
    /**
     * The filter to search for the RootFolder to update in case it exists.
     */
    where: RootFolderWhereUniqueInput
    /**
     * In case the RootFolder found by the `where` argument doesn't exist, create a new RootFolder with this data.
     */
    create: XOR<RootFolderCreateInput, RootFolderUncheckedCreateInput>
    /**
     * In case the RootFolder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RootFolderUpdateInput, RootFolderUncheckedUpdateInput>
  }

  /**
   * RootFolder delete
   */
  export type RootFolderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RootFolder
     */
    select?: RootFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RootFolder
     */
    omit?: RootFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RootFolderInclude<ExtArgs> | null
    /**
     * Filter which RootFolder to delete.
     */
    where: RootFolderWhereUniqueInput
  }

  /**
   * RootFolder deleteMany
   */
  export type RootFolderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RootFolders to delete
     */
    where?: RootFolderWhereInput
    /**
     * Limit how many RootFolders to delete.
     */
    limit?: number
  }

  /**
   * RootFolder.subs
   */
  export type RootFolder$subsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubFolder
     */
    select?: SubFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubFolder
     */
    omit?: SubFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubFolderInclude<ExtArgs> | null
    where?: SubFolderWhereInput
    orderBy?: SubFolderOrderByWithRelationInput | SubFolderOrderByWithRelationInput[]
    cursor?: SubFolderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubFolderScalarFieldEnum | SubFolderScalarFieldEnum[]
  }

  /**
   * RootFolder without action
   */
  export type RootFolderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RootFolder
     */
    select?: RootFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RootFolder
     */
    omit?: RootFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RootFolderInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SubFolderScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    rootFolderId: 'rootFolderId',
    parentId: 'parentId'
  };

  export type SubFolderScalarFieldEnum = (typeof SubFolderScalarFieldEnum)[keyof typeof SubFolderScalarFieldEnum]


  export const RootFolderScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RootFolderScalarFieldEnum = (typeof RootFolderScalarFieldEnum)[keyof typeof RootFolderScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const SubFolderOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type SubFolderOrderByRelevanceFieldEnum = (typeof SubFolderOrderByRelevanceFieldEnum)[keyof typeof SubFolderOrderByRelevanceFieldEnum]


  export const RootFolderOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type RootFolderOrderByRelevanceFieldEnum = (typeof RootFolderOrderByRelevanceFieldEnum)[keyof typeof RootFolderOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'SubFolderType'
   */
  export type EnumSubFolderTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubFolderType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type SubFolderWhereInput = {
    AND?: SubFolderWhereInput | SubFolderWhereInput[]
    OR?: SubFolderWhereInput[]
    NOT?: SubFolderWhereInput | SubFolderWhereInput[]
    id?: IntFilter<"SubFolder"> | number
    name?: StringFilter<"SubFolder"> | string
    type?: EnumSubFolderTypeFilter<"SubFolder"> | $Enums.SubFolderType
    rootFolderId?: IntFilter<"SubFolder"> | number
    parentId?: IntNullableFilter<"SubFolder"> | number | null
    root?: XOR<RootFolderScalarRelationFilter, RootFolderWhereInput>
    parent?: XOR<SubFolderNullableScalarRelationFilter, SubFolderWhereInput> | null
    subs?: SubFolderListRelationFilter
  }

  export type SubFolderOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    rootFolderId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    root?: RootFolderOrderByWithRelationInput
    parent?: SubFolderOrderByWithRelationInput
    subs?: SubFolderOrderByRelationAggregateInput
    _relevance?: SubFolderOrderByRelevanceInput
  }

  export type SubFolderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SubFolderWhereInput | SubFolderWhereInput[]
    OR?: SubFolderWhereInput[]
    NOT?: SubFolderWhereInput | SubFolderWhereInput[]
    name?: StringFilter<"SubFolder"> | string
    type?: EnumSubFolderTypeFilter<"SubFolder"> | $Enums.SubFolderType
    rootFolderId?: IntFilter<"SubFolder"> | number
    parentId?: IntNullableFilter<"SubFolder"> | number | null
    root?: XOR<RootFolderScalarRelationFilter, RootFolderWhereInput>
    parent?: XOR<SubFolderNullableScalarRelationFilter, SubFolderWhereInput> | null
    subs?: SubFolderListRelationFilter
  }, "id">

  export type SubFolderOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    rootFolderId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    _count?: SubFolderCountOrderByAggregateInput
    _avg?: SubFolderAvgOrderByAggregateInput
    _max?: SubFolderMaxOrderByAggregateInput
    _min?: SubFolderMinOrderByAggregateInput
    _sum?: SubFolderSumOrderByAggregateInput
  }

  export type SubFolderScalarWhereWithAggregatesInput = {
    AND?: SubFolderScalarWhereWithAggregatesInput | SubFolderScalarWhereWithAggregatesInput[]
    OR?: SubFolderScalarWhereWithAggregatesInput[]
    NOT?: SubFolderScalarWhereWithAggregatesInput | SubFolderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SubFolder"> | number
    name?: StringWithAggregatesFilter<"SubFolder"> | string
    type?: EnumSubFolderTypeWithAggregatesFilter<"SubFolder"> | $Enums.SubFolderType
    rootFolderId?: IntWithAggregatesFilter<"SubFolder"> | number
    parentId?: IntNullableWithAggregatesFilter<"SubFolder"> | number | null
  }

  export type RootFolderWhereInput = {
    AND?: RootFolderWhereInput | RootFolderWhereInput[]
    OR?: RootFolderWhereInput[]
    NOT?: RootFolderWhereInput | RootFolderWhereInput[]
    id?: IntFilter<"RootFolder"> | number
    name?: StringFilter<"RootFolder"> | string
    subs?: SubFolderListRelationFilter
  }

  export type RootFolderOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    subs?: SubFolderOrderByRelationAggregateInput
    _relevance?: RootFolderOrderByRelevanceInput
  }

  export type RootFolderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RootFolderWhereInput | RootFolderWhereInput[]
    OR?: RootFolderWhereInput[]
    NOT?: RootFolderWhereInput | RootFolderWhereInput[]
    name?: StringFilter<"RootFolder"> | string
    subs?: SubFolderListRelationFilter
  }, "id">

  export type RootFolderOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: RootFolderCountOrderByAggregateInput
    _avg?: RootFolderAvgOrderByAggregateInput
    _max?: RootFolderMaxOrderByAggregateInput
    _min?: RootFolderMinOrderByAggregateInput
    _sum?: RootFolderSumOrderByAggregateInput
  }

  export type RootFolderScalarWhereWithAggregatesInput = {
    AND?: RootFolderScalarWhereWithAggregatesInput | RootFolderScalarWhereWithAggregatesInput[]
    OR?: RootFolderScalarWhereWithAggregatesInput[]
    NOT?: RootFolderScalarWhereWithAggregatesInput | RootFolderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RootFolder"> | number
    name?: StringWithAggregatesFilter<"RootFolder"> | string
  }

  export type SubFolderCreateInput = {
    name: string
    type?: $Enums.SubFolderType
    root: RootFolderCreateNestedOneWithoutSubsInput
    parent?: SubFolderCreateNestedOneWithoutSubsInput
    subs?: SubFolderCreateNestedManyWithoutParentInput
  }

  export type SubFolderUncheckedCreateInput = {
    id?: number
    name: string
    type?: $Enums.SubFolderType
    rootFolderId: number
    parentId?: number | null
    subs?: SubFolderUncheckedCreateNestedManyWithoutParentInput
  }

  export type SubFolderUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumSubFolderTypeFieldUpdateOperationsInput | $Enums.SubFolderType
    root?: RootFolderUpdateOneRequiredWithoutSubsNestedInput
    parent?: SubFolderUpdateOneWithoutSubsNestedInput
    subs?: SubFolderUpdateManyWithoutParentNestedInput
  }

  export type SubFolderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumSubFolderTypeFieldUpdateOperationsInput | $Enums.SubFolderType
    rootFolderId?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    subs?: SubFolderUncheckedUpdateManyWithoutParentNestedInput
  }

  export type SubFolderCreateManyInput = {
    id?: number
    name: string
    type?: $Enums.SubFolderType
    rootFolderId: number
    parentId?: number | null
  }

  export type SubFolderUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumSubFolderTypeFieldUpdateOperationsInput | $Enums.SubFolderType
  }

  export type SubFolderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumSubFolderTypeFieldUpdateOperationsInput | $Enums.SubFolderType
    rootFolderId?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RootFolderCreateInput = {
    name: string
    subs?: SubFolderCreateNestedManyWithoutRootInput
  }

  export type RootFolderUncheckedCreateInput = {
    id?: number
    name: string
    subs?: SubFolderUncheckedCreateNestedManyWithoutRootInput
  }

  export type RootFolderUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    subs?: SubFolderUpdateManyWithoutRootNestedInput
  }

  export type RootFolderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subs?: SubFolderUncheckedUpdateManyWithoutRootNestedInput
  }

  export type RootFolderCreateManyInput = {
    id?: number
    name: string
  }

  export type RootFolderUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RootFolderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumSubFolderTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SubFolderType | EnumSubFolderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubFolderType[]
    notIn?: $Enums.SubFolderType[]
    not?: NestedEnumSubFolderTypeFilter<$PrismaModel> | $Enums.SubFolderType
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type RootFolderScalarRelationFilter = {
    is?: RootFolderWhereInput
    isNot?: RootFolderWhereInput
  }

  export type SubFolderNullableScalarRelationFilter = {
    is?: SubFolderWhereInput | null
    isNot?: SubFolderWhereInput | null
  }

  export type SubFolderListRelationFilter = {
    every?: SubFolderWhereInput
    some?: SubFolderWhereInput
    none?: SubFolderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SubFolderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubFolderOrderByRelevanceInput = {
    fields: SubFolderOrderByRelevanceFieldEnum | SubFolderOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SubFolderCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    rootFolderId?: SortOrder
    parentId?: SortOrder
  }

  export type SubFolderAvgOrderByAggregateInput = {
    id?: SortOrder
    rootFolderId?: SortOrder
    parentId?: SortOrder
  }

  export type SubFolderMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    rootFolderId?: SortOrder
    parentId?: SortOrder
  }

  export type SubFolderMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    rootFolderId?: SortOrder
    parentId?: SortOrder
  }

  export type SubFolderSumOrderByAggregateInput = {
    id?: SortOrder
    rootFolderId?: SortOrder
    parentId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumSubFolderTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubFolderType | EnumSubFolderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubFolderType[]
    notIn?: $Enums.SubFolderType[]
    not?: NestedEnumSubFolderTypeWithAggregatesFilter<$PrismaModel> | $Enums.SubFolderType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubFolderTypeFilter<$PrismaModel>
    _max?: NestedEnumSubFolderTypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type RootFolderOrderByRelevanceInput = {
    fields: RootFolderOrderByRelevanceFieldEnum | RootFolderOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RootFolderCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RootFolderAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RootFolderMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RootFolderMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RootFolderSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RootFolderCreateNestedOneWithoutSubsInput = {
    create?: XOR<RootFolderCreateWithoutSubsInput, RootFolderUncheckedCreateWithoutSubsInput>
    connectOrCreate?: RootFolderCreateOrConnectWithoutSubsInput
    connect?: RootFolderWhereUniqueInput
  }

  export type SubFolderCreateNestedOneWithoutSubsInput = {
    create?: XOR<SubFolderCreateWithoutSubsInput, SubFolderUncheckedCreateWithoutSubsInput>
    connectOrCreate?: SubFolderCreateOrConnectWithoutSubsInput
    connect?: SubFolderWhereUniqueInput
  }

  export type SubFolderCreateNestedManyWithoutParentInput = {
    create?: XOR<SubFolderCreateWithoutParentInput, SubFolderUncheckedCreateWithoutParentInput> | SubFolderCreateWithoutParentInput[] | SubFolderUncheckedCreateWithoutParentInput[]
    connectOrCreate?: SubFolderCreateOrConnectWithoutParentInput | SubFolderCreateOrConnectWithoutParentInput[]
    createMany?: SubFolderCreateManyParentInputEnvelope
    connect?: SubFolderWhereUniqueInput | SubFolderWhereUniqueInput[]
  }

  export type SubFolderUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<SubFolderCreateWithoutParentInput, SubFolderUncheckedCreateWithoutParentInput> | SubFolderCreateWithoutParentInput[] | SubFolderUncheckedCreateWithoutParentInput[]
    connectOrCreate?: SubFolderCreateOrConnectWithoutParentInput | SubFolderCreateOrConnectWithoutParentInput[]
    createMany?: SubFolderCreateManyParentInputEnvelope
    connect?: SubFolderWhereUniqueInput | SubFolderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumSubFolderTypeFieldUpdateOperationsInput = {
    set?: $Enums.SubFolderType
  }

  export type RootFolderUpdateOneRequiredWithoutSubsNestedInput = {
    create?: XOR<RootFolderCreateWithoutSubsInput, RootFolderUncheckedCreateWithoutSubsInput>
    connectOrCreate?: RootFolderCreateOrConnectWithoutSubsInput
    upsert?: RootFolderUpsertWithoutSubsInput
    connect?: RootFolderWhereUniqueInput
    update?: XOR<XOR<RootFolderUpdateToOneWithWhereWithoutSubsInput, RootFolderUpdateWithoutSubsInput>, RootFolderUncheckedUpdateWithoutSubsInput>
  }

  export type SubFolderUpdateOneWithoutSubsNestedInput = {
    create?: XOR<SubFolderCreateWithoutSubsInput, SubFolderUncheckedCreateWithoutSubsInput>
    connectOrCreate?: SubFolderCreateOrConnectWithoutSubsInput
    upsert?: SubFolderUpsertWithoutSubsInput
    disconnect?: SubFolderWhereInput | boolean
    delete?: SubFolderWhereInput | boolean
    connect?: SubFolderWhereUniqueInput
    update?: XOR<XOR<SubFolderUpdateToOneWithWhereWithoutSubsInput, SubFolderUpdateWithoutSubsInput>, SubFolderUncheckedUpdateWithoutSubsInput>
  }

  export type SubFolderUpdateManyWithoutParentNestedInput = {
    create?: XOR<SubFolderCreateWithoutParentInput, SubFolderUncheckedCreateWithoutParentInput> | SubFolderCreateWithoutParentInput[] | SubFolderUncheckedCreateWithoutParentInput[]
    connectOrCreate?: SubFolderCreateOrConnectWithoutParentInput | SubFolderCreateOrConnectWithoutParentInput[]
    upsert?: SubFolderUpsertWithWhereUniqueWithoutParentInput | SubFolderUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: SubFolderCreateManyParentInputEnvelope
    set?: SubFolderWhereUniqueInput | SubFolderWhereUniqueInput[]
    disconnect?: SubFolderWhereUniqueInput | SubFolderWhereUniqueInput[]
    delete?: SubFolderWhereUniqueInput | SubFolderWhereUniqueInput[]
    connect?: SubFolderWhereUniqueInput | SubFolderWhereUniqueInput[]
    update?: SubFolderUpdateWithWhereUniqueWithoutParentInput | SubFolderUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: SubFolderUpdateManyWithWhereWithoutParentInput | SubFolderUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: SubFolderScalarWhereInput | SubFolderScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SubFolderUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<SubFolderCreateWithoutParentInput, SubFolderUncheckedCreateWithoutParentInput> | SubFolderCreateWithoutParentInput[] | SubFolderUncheckedCreateWithoutParentInput[]
    connectOrCreate?: SubFolderCreateOrConnectWithoutParentInput | SubFolderCreateOrConnectWithoutParentInput[]
    upsert?: SubFolderUpsertWithWhereUniqueWithoutParentInput | SubFolderUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: SubFolderCreateManyParentInputEnvelope
    set?: SubFolderWhereUniqueInput | SubFolderWhereUniqueInput[]
    disconnect?: SubFolderWhereUniqueInput | SubFolderWhereUniqueInput[]
    delete?: SubFolderWhereUniqueInput | SubFolderWhereUniqueInput[]
    connect?: SubFolderWhereUniqueInput | SubFolderWhereUniqueInput[]
    update?: SubFolderUpdateWithWhereUniqueWithoutParentInput | SubFolderUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: SubFolderUpdateManyWithWhereWithoutParentInput | SubFolderUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: SubFolderScalarWhereInput | SubFolderScalarWhereInput[]
  }

  export type SubFolderCreateNestedManyWithoutRootInput = {
    create?: XOR<SubFolderCreateWithoutRootInput, SubFolderUncheckedCreateWithoutRootInput> | SubFolderCreateWithoutRootInput[] | SubFolderUncheckedCreateWithoutRootInput[]
    connectOrCreate?: SubFolderCreateOrConnectWithoutRootInput | SubFolderCreateOrConnectWithoutRootInput[]
    createMany?: SubFolderCreateManyRootInputEnvelope
    connect?: SubFolderWhereUniqueInput | SubFolderWhereUniqueInput[]
  }

  export type SubFolderUncheckedCreateNestedManyWithoutRootInput = {
    create?: XOR<SubFolderCreateWithoutRootInput, SubFolderUncheckedCreateWithoutRootInput> | SubFolderCreateWithoutRootInput[] | SubFolderUncheckedCreateWithoutRootInput[]
    connectOrCreate?: SubFolderCreateOrConnectWithoutRootInput | SubFolderCreateOrConnectWithoutRootInput[]
    createMany?: SubFolderCreateManyRootInputEnvelope
    connect?: SubFolderWhereUniqueInput | SubFolderWhereUniqueInput[]
  }

  export type SubFolderUpdateManyWithoutRootNestedInput = {
    create?: XOR<SubFolderCreateWithoutRootInput, SubFolderUncheckedCreateWithoutRootInput> | SubFolderCreateWithoutRootInput[] | SubFolderUncheckedCreateWithoutRootInput[]
    connectOrCreate?: SubFolderCreateOrConnectWithoutRootInput | SubFolderCreateOrConnectWithoutRootInput[]
    upsert?: SubFolderUpsertWithWhereUniqueWithoutRootInput | SubFolderUpsertWithWhereUniqueWithoutRootInput[]
    createMany?: SubFolderCreateManyRootInputEnvelope
    set?: SubFolderWhereUniqueInput | SubFolderWhereUniqueInput[]
    disconnect?: SubFolderWhereUniqueInput | SubFolderWhereUniqueInput[]
    delete?: SubFolderWhereUniqueInput | SubFolderWhereUniqueInput[]
    connect?: SubFolderWhereUniqueInput | SubFolderWhereUniqueInput[]
    update?: SubFolderUpdateWithWhereUniqueWithoutRootInput | SubFolderUpdateWithWhereUniqueWithoutRootInput[]
    updateMany?: SubFolderUpdateManyWithWhereWithoutRootInput | SubFolderUpdateManyWithWhereWithoutRootInput[]
    deleteMany?: SubFolderScalarWhereInput | SubFolderScalarWhereInput[]
  }

  export type SubFolderUncheckedUpdateManyWithoutRootNestedInput = {
    create?: XOR<SubFolderCreateWithoutRootInput, SubFolderUncheckedCreateWithoutRootInput> | SubFolderCreateWithoutRootInput[] | SubFolderUncheckedCreateWithoutRootInput[]
    connectOrCreate?: SubFolderCreateOrConnectWithoutRootInput | SubFolderCreateOrConnectWithoutRootInput[]
    upsert?: SubFolderUpsertWithWhereUniqueWithoutRootInput | SubFolderUpsertWithWhereUniqueWithoutRootInput[]
    createMany?: SubFolderCreateManyRootInputEnvelope
    set?: SubFolderWhereUniqueInput | SubFolderWhereUniqueInput[]
    disconnect?: SubFolderWhereUniqueInput | SubFolderWhereUniqueInput[]
    delete?: SubFolderWhereUniqueInput | SubFolderWhereUniqueInput[]
    connect?: SubFolderWhereUniqueInput | SubFolderWhereUniqueInput[]
    update?: SubFolderUpdateWithWhereUniqueWithoutRootInput | SubFolderUpdateWithWhereUniqueWithoutRootInput[]
    updateMany?: SubFolderUpdateManyWithWhereWithoutRootInput | SubFolderUpdateManyWithWhereWithoutRootInput[]
    deleteMany?: SubFolderScalarWhereInput | SubFolderScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumSubFolderTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SubFolderType | EnumSubFolderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubFolderType[]
    notIn?: $Enums.SubFolderType[]
    not?: NestedEnumSubFolderTypeFilter<$PrismaModel> | $Enums.SubFolderType
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumSubFolderTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubFolderType | EnumSubFolderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubFolderType[]
    notIn?: $Enums.SubFolderType[]
    not?: NestedEnumSubFolderTypeWithAggregatesFilter<$PrismaModel> | $Enums.SubFolderType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubFolderTypeFilter<$PrismaModel>
    _max?: NestedEnumSubFolderTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type RootFolderCreateWithoutSubsInput = {
    name: string
  }

  export type RootFolderUncheckedCreateWithoutSubsInput = {
    id?: number
    name: string
  }

  export type RootFolderCreateOrConnectWithoutSubsInput = {
    where: RootFolderWhereUniqueInput
    create: XOR<RootFolderCreateWithoutSubsInput, RootFolderUncheckedCreateWithoutSubsInput>
  }

  export type SubFolderCreateWithoutSubsInput = {
    name: string
    type?: $Enums.SubFolderType
    root: RootFolderCreateNestedOneWithoutSubsInput
    parent?: SubFolderCreateNestedOneWithoutSubsInput
  }

  export type SubFolderUncheckedCreateWithoutSubsInput = {
    id?: number
    name: string
    type?: $Enums.SubFolderType
    rootFolderId: number
    parentId?: number | null
  }

  export type SubFolderCreateOrConnectWithoutSubsInput = {
    where: SubFolderWhereUniqueInput
    create: XOR<SubFolderCreateWithoutSubsInput, SubFolderUncheckedCreateWithoutSubsInput>
  }

  export type SubFolderCreateWithoutParentInput = {
    name: string
    type?: $Enums.SubFolderType
    root: RootFolderCreateNestedOneWithoutSubsInput
    subs?: SubFolderCreateNestedManyWithoutParentInput
  }

  export type SubFolderUncheckedCreateWithoutParentInput = {
    id?: number
    name: string
    type?: $Enums.SubFolderType
    rootFolderId: number
    subs?: SubFolderUncheckedCreateNestedManyWithoutParentInput
  }

  export type SubFolderCreateOrConnectWithoutParentInput = {
    where: SubFolderWhereUniqueInput
    create: XOR<SubFolderCreateWithoutParentInput, SubFolderUncheckedCreateWithoutParentInput>
  }

  export type SubFolderCreateManyParentInputEnvelope = {
    data: SubFolderCreateManyParentInput | SubFolderCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type RootFolderUpsertWithoutSubsInput = {
    update: XOR<RootFolderUpdateWithoutSubsInput, RootFolderUncheckedUpdateWithoutSubsInput>
    create: XOR<RootFolderCreateWithoutSubsInput, RootFolderUncheckedCreateWithoutSubsInput>
    where?: RootFolderWhereInput
  }

  export type RootFolderUpdateToOneWithWhereWithoutSubsInput = {
    where?: RootFolderWhereInput
    data: XOR<RootFolderUpdateWithoutSubsInput, RootFolderUncheckedUpdateWithoutSubsInput>
  }

  export type RootFolderUpdateWithoutSubsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RootFolderUncheckedUpdateWithoutSubsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SubFolderUpsertWithoutSubsInput = {
    update: XOR<SubFolderUpdateWithoutSubsInput, SubFolderUncheckedUpdateWithoutSubsInput>
    create: XOR<SubFolderCreateWithoutSubsInput, SubFolderUncheckedCreateWithoutSubsInput>
    where?: SubFolderWhereInput
  }

  export type SubFolderUpdateToOneWithWhereWithoutSubsInput = {
    where?: SubFolderWhereInput
    data: XOR<SubFolderUpdateWithoutSubsInput, SubFolderUncheckedUpdateWithoutSubsInput>
  }

  export type SubFolderUpdateWithoutSubsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumSubFolderTypeFieldUpdateOperationsInput | $Enums.SubFolderType
    root?: RootFolderUpdateOneRequiredWithoutSubsNestedInput
    parent?: SubFolderUpdateOneWithoutSubsNestedInput
  }

  export type SubFolderUncheckedUpdateWithoutSubsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumSubFolderTypeFieldUpdateOperationsInput | $Enums.SubFolderType
    rootFolderId?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SubFolderUpsertWithWhereUniqueWithoutParentInput = {
    where: SubFolderWhereUniqueInput
    update: XOR<SubFolderUpdateWithoutParentInput, SubFolderUncheckedUpdateWithoutParentInput>
    create: XOR<SubFolderCreateWithoutParentInput, SubFolderUncheckedCreateWithoutParentInput>
  }

  export type SubFolderUpdateWithWhereUniqueWithoutParentInput = {
    where: SubFolderWhereUniqueInput
    data: XOR<SubFolderUpdateWithoutParentInput, SubFolderUncheckedUpdateWithoutParentInput>
  }

  export type SubFolderUpdateManyWithWhereWithoutParentInput = {
    where: SubFolderScalarWhereInput
    data: XOR<SubFolderUpdateManyMutationInput, SubFolderUncheckedUpdateManyWithoutParentInput>
  }

  export type SubFolderScalarWhereInput = {
    AND?: SubFolderScalarWhereInput | SubFolderScalarWhereInput[]
    OR?: SubFolderScalarWhereInput[]
    NOT?: SubFolderScalarWhereInput | SubFolderScalarWhereInput[]
    id?: IntFilter<"SubFolder"> | number
    name?: StringFilter<"SubFolder"> | string
    type?: EnumSubFolderTypeFilter<"SubFolder"> | $Enums.SubFolderType
    rootFolderId?: IntFilter<"SubFolder"> | number
    parentId?: IntNullableFilter<"SubFolder"> | number | null
  }

  export type SubFolderCreateWithoutRootInput = {
    name: string
    type?: $Enums.SubFolderType
    parent?: SubFolderCreateNestedOneWithoutSubsInput
    subs?: SubFolderCreateNestedManyWithoutParentInput
  }

  export type SubFolderUncheckedCreateWithoutRootInput = {
    id?: number
    name: string
    type?: $Enums.SubFolderType
    parentId?: number | null
    subs?: SubFolderUncheckedCreateNestedManyWithoutParentInput
  }

  export type SubFolderCreateOrConnectWithoutRootInput = {
    where: SubFolderWhereUniqueInput
    create: XOR<SubFolderCreateWithoutRootInput, SubFolderUncheckedCreateWithoutRootInput>
  }

  export type SubFolderCreateManyRootInputEnvelope = {
    data: SubFolderCreateManyRootInput | SubFolderCreateManyRootInput[]
    skipDuplicates?: boolean
  }

  export type SubFolderUpsertWithWhereUniqueWithoutRootInput = {
    where: SubFolderWhereUniqueInput
    update: XOR<SubFolderUpdateWithoutRootInput, SubFolderUncheckedUpdateWithoutRootInput>
    create: XOR<SubFolderCreateWithoutRootInput, SubFolderUncheckedCreateWithoutRootInput>
  }

  export type SubFolderUpdateWithWhereUniqueWithoutRootInput = {
    where: SubFolderWhereUniqueInput
    data: XOR<SubFolderUpdateWithoutRootInput, SubFolderUncheckedUpdateWithoutRootInput>
  }

  export type SubFolderUpdateManyWithWhereWithoutRootInput = {
    where: SubFolderScalarWhereInput
    data: XOR<SubFolderUpdateManyMutationInput, SubFolderUncheckedUpdateManyWithoutRootInput>
  }

  export type SubFolderCreateManyParentInput = {
    id?: number
    name: string
    type?: $Enums.SubFolderType
    rootFolderId: number
  }

  export type SubFolderUpdateWithoutParentInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumSubFolderTypeFieldUpdateOperationsInput | $Enums.SubFolderType
    root?: RootFolderUpdateOneRequiredWithoutSubsNestedInput
    subs?: SubFolderUpdateManyWithoutParentNestedInput
  }

  export type SubFolderUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumSubFolderTypeFieldUpdateOperationsInput | $Enums.SubFolderType
    rootFolderId?: IntFieldUpdateOperationsInput | number
    subs?: SubFolderUncheckedUpdateManyWithoutParentNestedInput
  }

  export type SubFolderUncheckedUpdateManyWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumSubFolderTypeFieldUpdateOperationsInput | $Enums.SubFolderType
    rootFolderId?: IntFieldUpdateOperationsInput | number
  }

  export type SubFolderCreateManyRootInput = {
    id?: number
    name: string
    type?: $Enums.SubFolderType
    parentId?: number | null
  }

  export type SubFolderUpdateWithoutRootInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumSubFolderTypeFieldUpdateOperationsInput | $Enums.SubFolderType
    parent?: SubFolderUpdateOneWithoutSubsNestedInput
    subs?: SubFolderUpdateManyWithoutParentNestedInput
  }

  export type SubFolderUncheckedUpdateWithoutRootInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumSubFolderTypeFieldUpdateOperationsInput | $Enums.SubFolderType
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    subs?: SubFolderUncheckedUpdateManyWithoutParentNestedInput
  }

  export type SubFolderUncheckedUpdateManyWithoutRootInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumSubFolderTypeFieldUpdateOperationsInput | $Enums.SubFolderType
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}