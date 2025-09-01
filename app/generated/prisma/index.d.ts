
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model AttachedPhoto
 * 
 */
export type AttachedPhoto = $Result.DefaultSelection<Prisma.$AttachedPhotoPayload>
/**
 * Model ProcessedPhoto
 * 
 */
export type ProcessedPhoto = $Result.DefaultSelection<Prisma.$ProcessedPhotoPayload>
/**
 * Model GeneratedImage
 * 
 */
export type GeneratedImage = $Result.DefaultSelection<Prisma.$GeneratedImagePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attachedPhoto`: Exposes CRUD operations for the **AttachedPhoto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AttachedPhotos
    * const attachedPhotos = await prisma.attachedPhoto.findMany()
    * ```
    */
  get attachedPhoto(): Prisma.AttachedPhotoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.processedPhoto`: Exposes CRUD operations for the **ProcessedPhoto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProcessedPhotos
    * const processedPhotos = await prisma.processedPhoto.findMany()
    * ```
    */
  get processedPhoto(): Prisma.ProcessedPhotoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.generatedImage`: Exposes CRUD operations for the **GeneratedImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GeneratedImages
    * const generatedImages = await prisma.generatedImage.findMany()
    * ```
    */
  get generatedImage(): Prisma.GeneratedImageDelegate<ExtArgs, ClientOptions>;
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
    User: 'User',
    AttachedPhoto: 'AttachedPhoto',
    ProcessedPhoto: 'ProcessedPhoto',
    GeneratedImage: 'GeneratedImage'
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
      modelProps: "user" | "attachedPhoto" | "processedPhoto" | "generatedImage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      AttachedPhoto: {
        payload: Prisma.$AttachedPhotoPayload<ExtArgs>
        fields: Prisma.AttachedPhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttachedPhotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachedPhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttachedPhotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachedPhotoPayload>
          }
          findFirst: {
            args: Prisma.AttachedPhotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachedPhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttachedPhotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachedPhotoPayload>
          }
          findMany: {
            args: Prisma.AttachedPhotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachedPhotoPayload>[]
          }
          create: {
            args: Prisma.AttachedPhotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachedPhotoPayload>
          }
          createMany: {
            args: Prisma.AttachedPhotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttachedPhotoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachedPhotoPayload>[]
          }
          delete: {
            args: Prisma.AttachedPhotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachedPhotoPayload>
          }
          update: {
            args: Prisma.AttachedPhotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachedPhotoPayload>
          }
          deleteMany: {
            args: Prisma.AttachedPhotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttachedPhotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttachedPhotoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachedPhotoPayload>[]
          }
          upsert: {
            args: Prisma.AttachedPhotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachedPhotoPayload>
          }
          aggregate: {
            args: Prisma.AttachedPhotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttachedPhoto>
          }
          groupBy: {
            args: Prisma.AttachedPhotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttachedPhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttachedPhotoCountArgs<ExtArgs>
            result: $Utils.Optional<AttachedPhotoCountAggregateOutputType> | number
          }
        }
      }
      ProcessedPhoto: {
        payload: Prisma.$ProcessedPhotoPayload<ExtArgs>
        fields: Prisma.ProcessedPhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProcessedPhotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedPhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProcessedPhotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedPhotoPayload>
          }
          findFirst: {
            args: Prisma.ProcessedPhotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedPhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProcessedPhotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedPhotoPayload>
          }
          findMany: {
            args: Prisma.ProcessedPhotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedPhotoPayload>[]
          }
          create: {
            args: Prisma.ProcessedPhotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedPhotoPayload>
          }
          createMany: {
            args: Prisma.ProcessedPhotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProcessedPhotoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedPhotoPayload>[]
          }
          delete: {
            args: Prisma.ProcessedPhotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedPhotoPayload>
          }
          update: {
            args: Prisma.ProcessedPhotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedPhotoPayload>
          }
          deleteMany: {
            args: Prisma.ProcessedPhotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProcessedPhotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProcessedPhotoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedPhotoPayload>[]
          }
          upsert: {
            args: Prisma.ProcessedPhotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedPhotoPayload>
          }
          aggregate: {
            args: Prisma.ProcessedPhotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProcessedPhoto>
          }
          groupBy: {
            args: Prisma.ProcessedPhotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProcessedPhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProcessedPhotoCountArgs<ExtArgs>
            result: $Utils.Optional<ProcessedPhotoCountAggregateOutputType> | number
          }
        }
      }
      GeneratedImage: {
        payload: Prisma.$GeneratedImagePayload<ExtArgs>
        fields: Prisma.GeneratedImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GeneratedImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GeneratedImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedImagePayload>
          }
          findFirst: {
            args: Prisma.GeneratedImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GeneratedImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedImagePayload>
          }
          findMany: {
            args: Prisma.GeneratedImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedImagePayload>[]
          }
          create: {
            args: Prisma.GeneratedImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedImagePayload>
          }
          createMany: {
            args: Prisma.GeneratedImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GeneratedImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedImagePayload>[]
          }
          delete: {
            args: Prisma.GeneratedImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedImagePayload>
          }
          update: {
            args: Prisma.GeneratedImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedImagePayload>
          }
          deleteMany: {
            args: Prisma.GeneratedImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GeneratedImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GeneratedImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedImagePayload>[]
          }
          upsert: {
            args: Prisma.GeneratedImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedImagePayload>
          }
          aggregate: {
            args: Prisma.GeneratedImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGeneratedImage>
          }
          groupBy: {
            args: Prisma.GeneratedImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<GeneratedImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.GeneratedImageCountArgs<ExtArgs>
            result: $Utils.Optional<GeneratedImageCountAggregateOutputType> | number
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
    user?: UserOmit
    attachedPhoto?: AttachedPhotoOmit
    processedPhoto?: ProcessedPhotoOmit
    generatedImage?: GeneratedImageOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    photos: number
    processedPhotos: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photos?: boolean | UserCountOutputTypeCountPhotosArgs
    processedPhotos?: boolean | UserCountOutputTypeCountProcessedPhotosArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachedPhotoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProcessedPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessedPhotoWhereInput
  }


  /**
   * Count Type AttachedPhotoCountOutputType
   */

  export type AttachedPhotoCountOutputType = {
    processedPhotos: number
  }

  export type AttachedPhotoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    processedPhotos?: boolean | AttachedPhotoCountOutputTypeCountProcessedPhotosArgs
  }

  // Custom InputTypes
  /**
   * AttachedPhotoCountOutputType without action
   */
  export type AttachedPhotoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttachedPhotoCountOutputType
     */
    select?: AttachedPhotoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AttachedPhotoCountOutputType without action
   */
  export type AttachedPhotoCountOutputTypeCountProcessedPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessedPhotoWhereInput
  }


  /**
   * Count Type ProcessedPhotoCountOutputType
   */

  export type ProcessedPhotoCountOutputType = {
    generatedImages: number
  }

  export type ProcessedPhotoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generatedImages?: boolean | ProcessedPhotoCountOutputTypeCountGeneratedImagesArgs
  }

  // Custom InputTypes
  /**
   * ProcessedPhotoCountOutputType without action
   */
  export type ProcessedPhotoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedPhotoCountOutputType
     */
    select?: ProcessedPhotoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProcessedPhotoCountOutputType without action
   */
  export type ProcessedPhotoCountOutputTypeCountGeneratedImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneratedImageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    telegramId: string | null
    username: string | null
    firstName: string | null
    lastName: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    telegramId: string | null
    username: string | null
    firstName: string | null
    lastName: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    telegramId: number
    username: number
    firstName: number
    lastName: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    telegramId?: true
    username?: true
    firstName?: true
    lastName?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    telegramId?: true
    username?: true
    firstName?: true
    lastName?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    telegramId?: true
    username?: true
    firstName?: true
    lastName?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    telegramId: string
    username: string | null
    firstName: string | null
    lastName: string | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    telegramId?: boolean
    username?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
    photos?: boolean | User$photosArgs<ExtArgs>
    processedPhotos?: boolean | User$processedPhotosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    telegramId?: boolean
    username?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    telegramId?: boolean
    username?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    telegramId?: boolean
    username?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "telegramId" | "username" | "firstName" | "lastName" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photos?: boolean | User$photosArgs<ExtArgs>
    processedPhotos?: boolean | User$processedPhotosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      photos: Prisma.$AttachedPhotoPayload<ExtArgs>[]
      processedPhotos: Prisma.$ProcessedPhotoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      telegramId: string
      username: string | null
      firstName: string | null
      lastName: string | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    photos<T extends User$photosArgs<ExtArgs> = {}>(args?: Subset<T, User$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachedPhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    processedPhotos<T extends User$processedPhotosArgs<ExtArgs> = {}>(args?: Subset<T, User$processedPhotosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessedPhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly telegramId: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.photos
   */
  export type User$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttachedPhoto
     */
    select?: AttachedPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttachedPhoto
     */
    omit?: AttachedPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachedPhotoInclude<ExtArgs> | null
    where?: AttachedPhotoWhereInput
    orderBy?: AttachedPhotoOrderByWithRelationInput | AttachedPhotoOrderByWithRelationInput[]
    cursor?: AttachedPhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttachedPhotoScalarFieldEnum | AttachedPhotoScalarFieldEnum[]
  }

  /**
   * User.processedPhotos
   */
  export type User$processedPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedPhoto
     */
    select?: ProcessedPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedPhoto
     */
    omit?: ProcessedPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessedPhotoInclude<ExtArgs> | null
    where?: ProcessedPhotoWhereInput
    orderBy?: ProcessedPhotoOrderByWithRelationInput | ProcessedPhotoOrderByWithRelationInput[]
    cursor?: ProcessedPhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProcessedPhotoScalarFieldEnum | ProcessedPhotoScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model AttachedPhoto
   */

  export type AggregateAttachedPhoto = {
    _count: AttachedPhotoCountAggregateOutputType | null
    _avg: AttachedPhotoAvgAggregateOutputType | null
    _sum: AttachedPhotoSumAggregateOutputType | null
    _min: AttachedPhotoMinAggregateOutputType | null
    _max: AttachedPhotoMaxAggregateOutputType | null
  }

  export type AttachedPhotoAvgAggregateOutputType = {
    width: number | null
    height: number | null
  }

  export type AttachedPhotoSumAggregateOutputType = {
    width: number | null
    height: number | null
  }

  export type AttachedPhotoMinAggregateOutputType = {
    id: string | null
    userId: string | null
    telegramFileId: string | null
    filePath: string | null
    mimeType: string | null
    width: number | null
    height: number | null
    createdAt: Date | null
  }

  export type AttachedPhotoMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    telegramFileId: string | null
    filePath: string | null
    mimeType: string | null
    width: number | null
    height: number | null
    createdAt: Date | null
  }

  export type AttachedPhotoCountAggregateOutputType = {
    id: number
    userId: number
    telegramFileId: number
    filePath: number
    mimeType: number
    width: number
    height: number
    createdAt: number
    _all: number
  }


  export type AttachedPhotoAvgAggregateInputType = {
    width?: true
    height?: true
  }

  export type AttachedPhotoSumAggregateInputType = {
    width?: true
    height?: true
  }

  export type AttachedPhotoMinAggregateInputType = {
    id?: true
    userId?: true
    telegramFileId?: true
    filePath?: true
    mimeType?: true
    width?: true
    height?: true
    createdAt?: true
  }

  export type AttachedPhotoMaxAggregateInputType = {
    id?: true
    userId?: true
    telegramFileId?: true
    filePath?: true
    mimeType?: true
    width?: true
    height?: true
    createdAt?: true
  }

  export type AttachedPhotoCountAggregateInputType = {
    id?: true
    userId?: true
    telegramFileId?: true
    filePath?: true
    mimeType?: true
    width?: true
    height?: true
    createdAt?: true
    _all?: true
  }

  export type AttachedPhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttachedPhoto to aggregate.
     */
    where?: AttachedPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttachedPhotos to fetch.
     */
    orderBy?: AttachedPhotoOrderByWithRelationInput | AttachedPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttachedPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttachedPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttachedPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AttachedPhotos
    **/
    _count?: true | AttachedPhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttachedPhotoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttachedPhotoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttachedPhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttachedPhotoMaxAggregateInputType
  }

  export type GetAttachedPhotoAggregateType<T extends AttachedPhotoAggregateArgs> = {
        [P in keyof T & keyof AggregateAttachedPhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttachedPhoto[P]>
      : GetScalarType<T[P], AggregateAttachedPhoto[P]>
  }




  export type AttachedPhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachedPhotoWhereInput
    orderBy?: AttachedPhotoOrderByWithAggregationInput | AttachedPhotoOrderByWithAggregationInput[]
    by: AttachedPhotoScalarFieldEnum[] | AttachedPhotoScalarFieldEnum
    having?: AttachedPhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttachedPhotoCountAggregateInputType | true
    _avg?: AttachedPhotoAvgAggregateInputType
    _sum?: AttachedPhotoSumAggregateInputType
    _min?: AttachedPhotoMinAggregateInputType
    _max?: AttachedPhotoMaxAggregateInputType
  }

  export type AttachedPhotoGroupByOutputType = {
    id: string
    userId: string
    telegramFileId: string
    filePath: string
    mimeType: string | null
    width: number | null
    height: number | null
    createdAt: Date
    _count: AttachedPhotoCountAggregateOutputType | null
    _avg: AttachedPhotoAvgAggregateOutputType | null
    _sum: AttachedPhotoSumAggregateOutputType | null
    _min: AttachedPhotoMinAggregateOutputType | null
    _max: AttachedPhotoMaxAggregateOutputType | null
  }

  type GetAttachedPhotoGroupByPayload<T extends AttachedPhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttachedPhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttachedPhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttachedPhotoGroupByOutputType[P]>
            : GetScalarType<T[P], AttachedPhotoGroupByOutputType[P]>
        }
      >
    >


  export type AttachedPhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    telegramFileId?: boolean
    filePath?: boolean
    mimeType?: boolean
    width?: boolean
    height?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    processedPhotos?: boolean | AttachedPhoto$processedPhotosArgs<ExtArgs>
    _count?: boolean | AttachedPhotoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachedPhoto"]>

  export type AttachedPhotoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    telegramFileId?: boolean
    filePath?: boolean
    mimeType?: boolean
    width?: boolean
    height?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachedPhoto"]>

  export type AttachedPhotoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    telegramFileId?: boolean
    filePath?: boolean
    mimeType?: boolean
    width?: boolean
    height?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachedPhoto"]>

  export type AttachedPhotoSelectScalar = {
    id?: boolean
    userId?: boolean
    telegramFileId?: boolean
    filePath?: boolean
    mimeType?: boolean
    width?: boolean
    height?: boolean
    createdAt?: boolean
  }

  export type AttachedPhotoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "telegramFileId" | "filePath" | "mimeType" | "width" | "height" | "createdAt", ExtArgs["result"]["attachedPhoto"]>
  export type AttachedPhotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    processedPhotos?: boolean | AttachedPhoto$processedPhotosArgs<ExtArgs>
    _count?: boolean | AttachedPhotoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AttachedPhotoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AttachedPhotoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AttachedPhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AttachedPhoto"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      processedPhotos: Prisma.$ProcessedPhotoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      telegramFileId: string
      filePath: string
      mimeType: string | null
      width: number | null
      height: number | null
      createdAt: Date
    }, ExtArgs["result"]["attachedPhoto"]>
    composites: {}
  }

  type AttachedPhotoGetPayload<S extends boolean | null | undefined | AttachedPhotoDefaultArgs> = $Result.GetResult<Prisma.$AttachedPhotoPayload, S>

  type AttachedPhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttachedPhotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttachedPhotoCountAggregateInputType | true
    }

  export interface AttachedPhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AttachedPhoto'], meta: { name: 'AttachedPhoto' } }
    /**
     * Find zero or one AttachedPhoto that matches the filter.
     * @param {AttachedPhotoFindUniqueArgs} args - Arguments to find a AttachedPhoto
     * @example
     * // Get one AttachedPhoto
     * const attachedPhoto = await prisma.attachedPhoto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttachedPhotoFindUniqueArgs>(args: SelectSubset<T, AttachedPhotoFindUniqueArgs<ExtArgs>>): Prisma__AttachedPhotoClient<$Result.GetResult<Prisma.$AttachedPhotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AttachedPhoto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttachedPhotoFindUniqueOrThrowArgs} args - Arguments to find a AttachedPhoto
     * @example
     * // Get one AttachedPhoto
     * const attachedPhoto = await prisma.attachedPhoto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttachedPhotoFindUniqueOrThrowArgs>(args: SelectSubset<T, AttachedPhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttachedPhotoClient<$Result.GetResult<Prisma.$AttachedPhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttachedPhoto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachedPhotoFindFirstArgs} args - Arguments to find a AttachedPhoto
     * @example
     * // Get one AttachedPhoto
     * const attachedPhoto = await prisma.attachedPhoto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttachedPhotoFindFirstArgs>(args?: SelectSubset<T, AttachedPhotoFindFirstArgs<ExtArgs>>): Prisma__AttachedPhotoClient<$Result.GetResult<Prisma.$AttachedPhotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttachedPhoto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachedPhotoFindFirstOrThrowArgs} args - Arguments to find a AttachedPhoto
     * @example
     * // Get one AttachedPhoto
     * const attachedPhoto = await prisma.attachedPhoto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttachedPhotoFindFirstOrThrowArgs>(args?: SelectSubset<T, AttachedPhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttachedPhotoClient<$Result.GetResult<Prisma.$AttachedPhotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AttachedPhotos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachedPhotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AttachedPhotos
     * const attachedPhotos = await prisma.attachedPhoto.findMany()
     * 
     * // Get first 10 AttachedPhotos
     * const attachedPhotos = await prisma.attachedPhoto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attachedPhotoWithIdOnly = await prisma.attachedPhoto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttachedPhotoFindManyArgs>(args?: SelectSubset<T, AttachedPhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachedPhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AttachedPhoto.
     * @param {AttachedPhotoCreateArgs} args - Arguments to create a AttachedPhoto.
     * @example
     * // Create one AttachedPhoto
     * const AttachedPhoto = await prisma.attachedPhoto.create({
     *   data: {
     *     // ... data to create a AttachedPhoto
     *   }
     * })
     * 
     */
    create<T extends AttachedPhotoCreateArgs>(args: SelectSubset<T, AttachedPhotoCreateArgs<ExtArgs>>): Prisma__AttachedPhotoClient<$Result.GetResult<Prisma.$AttachedPhotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AttachedPhotos.
     * @param {AttachedPhotoCreateManyArgs} args - Arguments to create many AttachedPhotos.
     * @example
     * // Create many AttachedPhotos
     * const attachedPhoto = await prisma.attachedPhoto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttachedPhotoCreateManyArgs>(args?: SelectSubset<T, AttachedPhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AttachedPhotos and returns the data saved in the database.
     * @param {AttachedPhotoCreateManyAndReturnArgs} args - Arguments to create many AttachedPhotos.
     * @example
     * // Create many AttachedPhotos
     * const attachedPhoto = await prisma.attachedPhoto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AttachedPhotos and only return the `id`
     * const attachedPhotoWithIdOnly = await prisma.attachedPhoto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttachedPhotoCreateManyAndReturnArgs>(args?: SelectSubset<T, AttachedPhotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachedPhotoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AttachedPhoto.
     * @param {AttachedPhotoDeleteArgs} args - Arguments to delete one AttachedPhoto.
     * @example
     * // Delete one AttachedPhoto
     * const AttachedPhoto = await prisma.attachedPhoto.delete({
     *   where: {
     *     // ... filter to delete one AttachedPhoto
     *   }
     * })
     * 
     */
    delete<T extends AttachedPhotoDeleteArgs>(args: SelectSubset<T, AttachedPhotoDeleteArgs<ExtArgs>>): Prisma__AttachedPhotoClient<$Result.GetResult<Prisma.$AttachedPhotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AttachedPhoto.
     * @param {AttachedPhotoUpdateArgs} args - Arguments to update one AttachedPhoto.
     * @example
     * // Update one AttachedPhoto
     * const attachedPhoto = await prisma.attachedPhoto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttachedPhotoUpdateArgs>(args: SelectSubset<T, AttachedPhotoUpdateArgs<ExtArgs>>): Prisma__AttachedPhotoClient<$Result.GetResult<Prisma.$AttachedPhotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AttachedPhotos.
     * @param {AttachedPhotoDeleteManyArgs} args - Arguments to filter AttachedPhotos to delete.
     * @example
     * // Delete a few AttachedPhotos
     * const { count } = await prisma.attachedPhoto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttachedPhotoDeleteManyArgs>(args?: SelectSubset<T, AttachedPhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttachedPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachedPhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AttachedPhotos
     * const attachedPhoto = await prisma.attachedPhoto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttachedPhotoUpdateManyArgs>(args: SelectSubset<T, AttachedPhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttachedPhotos and returns the data updated in the database.
     * @param {AttachedPhotoUpdateManyAndReturnArgs} args - Arguments to update many AttachedPhotos.
     * @example
     * // Update many AttachedPhotos
     * const attachedPhoto = await prisma.attachedPhoto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AttachedPhotos and only return the `id`
     * const attachedPhotoWithIdOnly = await prisma.attachedPhoto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttachedPhotoUpdateManyAndReturnArgs>(args: SelectSubset<T, AttachedPhotoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachedPhotoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AttachedPhoto.
     * @param {AttachedPhotoUpsertArgs} args - Arguments to update or create a AttachedPhoto.
     * @example
     * // Update or create a AttachedPhoto
     * const attachedPhoto = await prisma.attachedPhoto.upsert({
     *   create: {
     *     // ... data to create a AttachedPhoto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AttachedPhoto we want to update
     *   }
     * })
     */
    upsert<T extends AttachedPhotoUpsertArgs>(args: SelectSubset<T, AttachedPhotoUpsertArgs<ExtArgs>>): Prisma__AttachedPhotoClient<$Result.GetResult<Prisma.$AttachedPhotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AttachedPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachedPhotoCountArgs} args - Arguments to filter AttachedPhotos to count.
     * @example
     * // Count the number of AttachedPhotos
     * const count = await prisma.attachedPhoto.count({
     *   where: {
     *     // ... the filter for the AttachedPhotos we want to count
     *   }
     * })
    **/
    count<T extends AttachedPhotoCountArgs>(
      args?: Subset<T, AttachedPhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttachedPhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AttachedPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachedPhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttachedPhotoAggregateArgs>(args: Subset<T, AttachedPhotoAggregateArgs>): Prisma.PrismaPromise<GetAttachedPhotoAggregateType<T>>

    /**
     * Group by AttachedPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachedPhotoGroupByArgs} args - Group by arguments.
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
      T extends AttachedPhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttachedPhotoGroupByArgs['orderBy'] }
        : { orderBy?: AttachedPhotoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttachedPhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttachedPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AttachedPhoto model
   */
  readonly fields: AttachedPhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AttachedPhoto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttachedPhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    processedPhotos<T extends AttachedPhoto$processedPhotosArgs<ExtArgs> = {}>(args?: Subset<T, AttachedPhoto$processedPhotosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessedPhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AttachedPhoto model
   */
  interface AttachedPhotoFieldRefs {
    readonly id: FieldRef<"AttachedPhoto", 'String'>
    readonly userId: FieldRef<"AttachedPhoto", 'String'>
    readonly telegramFileId: FieldRef<"AttachedPhoto", 'String'>
    readonly filePath: FieldRef<"AttachedPhoto", 'String'>
    readonly mimeType: FieldRef<"AttachedPhoto", 'String'>
    readonly width: FieldRef<"AttachedPhoto", 'Int'>
    readonly height: FieldRef<"AttachedPhoto", 'Int'>
    readonly createdAt: FieldRef<"AttachedPhoto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AttachedPhoto findUnique
   */
  export type AttachedPhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttachedPhoto
     */
    select?: AttachedPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttachedPhoto
     */
    omit?: AttachedPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachedPhotoInclude<ExtArgs> | null
    /**
     * Filter, which AttachedPhoto to fetch.
     */
    where: AttachedPhotoWhereUniqueInput
  }

  /**
   * AttachedPhoto findUniqueOrThrow
   */
  export type AttachedPhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttachedPhoto
     */
    select?: AttachedPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttachedPhoto
     */
    omit?: AttachedPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachedPhotoInclude<ExtArgs> | null
    /**
     * Filter, which AttachedPhoto to fetch.
     */
    where: AttachedPhotoWhereUniqueInput
  }

  /**
   * AttachedPhoto findFirst
   */
  export type AttachedPhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttachedPhoto
     */
    select?: AttachedPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttachedPhoto
     */
    omit?: AttachedPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachedPhotoInclude<ExtArgs> | null
    /**
     * Filter, which AttachedPhoto to fetch.
     */
    where?: AttachedPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttachedPhotos to fetch.
     */
    orderBy?: AttachedPhotoOrderByWithRelationInput | AttachedPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttachedPhotos.
     */
    cursor?: AttachedPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttachedPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttachedPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttachedPhotos.
     */
    distinct?: AttachedPhotoScalarFieldEnum | AttachedPhotoScalarFieldEnum[]
  }

  /**
   * AttachedPhoto findFirstOrThrow
   */
  export type AttachedPhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttachedPhoto
     */
    select?: AttachedPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttachedPhoto
     */
    omit?: AttachedPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachedPhotoInclude<ExtArgs> | null
    /**
     * Filter, which AttachedPhoto to fetch.
     */
    where?: AttachedPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttachedPhotos to fetch.
     */
    orderBy?: AttachedPhotoOrderByWithRelationInput | AttachedPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttachedPhotos.
     */
    cursor?: AttachedPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttachedPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttachedPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttachedPhotos.
     */
    distinct?: AttachedPhotoScalarFieldEnum | AttachedPhotoScalarFieldEnum[]
  }

  /**
   * AttachedPhoto findMany
   */
  export type AttachedPhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttachedPhoto
     */
    select?: AttachedPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttachedPhoto
     */
    omit?: AttachedPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachedPhotoInclude<ExtArgs> | null
    /**
     * Filter, which AttachedPhotos to fetch.
     */
    where?: AttachedPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttachedPhotos to fetch.
     */
    orderBy?: AttachedPhotoOrderByWithRelationInput | AttachedPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AttachedPhotos.
     */
    cursor?: AttachedPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttachedPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttachedPhotos.
     */
    skip?: number
    distinct?: AttachedPhotoScalarFieldEnum | AttachedPhotoScalarFieldEnum[]
  }

  /**
   * AttachedPhoto create
   */
  export type AttachedPhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttachedPhoto
     */
    select?: AttachedPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttachedPhoto
     */
    omit?: AttachedPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachedPhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a AttachedPhoto.
     */
    data: XOR<AttachedPhotoCreateInput, AttachedPhotoUncheckedCreateInput>
  }

  /**
   * AttachedPhoto createMany
   */
  export type AttachedPhotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AttachedPhotos.
     */
    data: AttachedPhotoCreateManyInput | AttachedPhotoCreateManyInput[]
  }

  /**
   * AttachedPhoto createManyAndReturn
   */
  export type AttachedPhotoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttachedPhoto
     */
    select?: AttachedPhotoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttachedPhoto
     */
    omit?: AttachedPhotoOmit<ExtArgs> | null
    /**
     * The data used to create many AttachedPhotos.
     */
    data: AttachedPhotoCreateManyInput | AttachedPhotoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachedPhotoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AttachedPhoto update
   */
  export type AttachedPhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttachedPhoto
     */
    select?: AttachedPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttachedPhoto
     */
    omit?: AttachedPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachedPhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a AttachedPhoto.
     */
    data: XOR<AttachedPhotoUpdateInput, AttachedPhotoUncheckedUpdateInput>
    /**
     * Choose, which AttachedPhoto to update.
     */
    where: AttachedPhotoWhereUniqueInput
  }

  /**
   * AttachedPhoto updateMany
   */
  export type AttachedPhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AttachedPhotos.
     */
    data: XOR<AttachedPhotoUpdateManyMutationInput, AttachedPhotoUncheckedUpdateManyInput>
    /**
     * Filter which AttachedPhotos to update
     */
    where?: AttachedPhotoWhereInput
    /**
     * Limit how many AttachedPhotos to update.
     */
    limit?: number
  }

  /**
   * AttachedPhoto updateManyAndReturn
   */
  export type AttachedPhotoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttachedPhoto
     */
    select?: AttachedPhotoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttachedPhoto
     */
    omit?: AttachedPhotoOmit<ExtArgs> | null
    /**
     * The data used to update AttachedPhotos.
     */
    data: XOR<AttachedPhotoUpdateManyMutationInput, AttachedPhotoUncheckedUpdateManyInput>
    /**
     * Filter which AttachedPhotos to update
     */
    where?: AttachedPhotoWhereInput
    /**
     * Limit how many AttachedPhotos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachedPhotoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AttachedPhoto upsert
   */
  export type AttachedPhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttachedPhoto
     */
    select?: AttachedPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttachedPhoto
     */
    omit?: AttachedPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachedPhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the AttachedPhoto to update in case it exists.
     */
    where: AttachedPhotoWhereUniqueInput
    /**
     * In case the AttachedPhoto found by the `where` argument doesn't exist, create a new AttachedPhoto with this data.
     */
    create: XOR<AttachedPhotoCreateInput, AttachedPhotoUncheckedCreateInput>
    /**
     * In case the AttachedPhoto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttachedPhotoUpdateInput, AttachedPhotoUncheckedUpdateInput>
  }

  /**
   * AttachedPhoto delete
   */
  export type AttachedPhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttachedPhoto
     */
    select?: AttachedPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttachedPhoto
     */
    omit?: AttachedPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachedPhotoInclude<ExtArgs> | null
    /**
     * Filter which AttachedPhoto to delete.
     */
    where: AttachedPhotoWhereUniqueInput
  }

  /**
   * AttachedPhoto deleteMany
   */
  export type AttachedPhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttachedPhotos to delete
     */
    where?: AttachedPhotoWhereInput
    /**
     * Limit how many AttachedPhotos to delete.
     */
    limit?: number
  }

  /**
   * AttachedPhoto.processedPhotos
   */
  export type AttachedPhoto$processedPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedPhoto
     */
    select?: ProcessedPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedPhoto
     */
    omit?: ProcessedPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessedPhotoInclude<ExtArgs> | null
    where?: ProcessedPhotoWhereInput
    orderBy?: ProcessedPhotoOrderByWithRelationInput | ProcessedPhotoOrderByWithRelationInput[]
    cursor?: ProcessedPhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProcessedPhotoScalarFieldEnum | ProcessedPhotoScalarFieldEnum[]
  }

  /**
   * AttachedPhoto without action
   */
  export type AttachedPhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttachedPhoto
     */
    select?: AttachedPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttachedPhoto
     */
    omit?: AttachedPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachedPhotoInclude<ExtArgs> | null
  }


  /**
   * Model ProcessedPhoto
   */

  export type AggregateProcessedPhoto = {
    _count: ProcessedPhotoCountAggregateOutputType | null
    _min: ProcessedPhotoMinAggregateOutputType | null
    _max: ProcessedPhotoMaxAggregateOutputType | null
  }

  export type ProcessedPhotoMinAggregateOutputType = {
    id: string | null
    userId: string | null
    attachedPhotoId: string | null
    filePath: string | null
    mimeType: string | null
    createdAt: Date | null
  }

  export type ProcessedPhotoMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    attachedPhotoId: string | null
    filePath: string | null
    mimeType: string | null
    createdAt: Date | null
  }

  export type ProcessedPhotoCountAggregateOutputType = {
    id: number
    userId: number
    attachedPhotoId: number
    filePath: number
    mimeType: number
    createdAt: number
    _all: number
  }


  export type ProcessedPhotoMinAggregateInputType = {
    id?: true
    userId?: true
    attachedPhotoId?: true
    filePath?: true
    mimeType?: true
    createdAt?: true
  }

  export type ProcessedPhotoMaxAggregateInputType = {
    id?: true
    userId?: true
    attachedPhotoId?: true
    filePath?: true
    mimeType?: true
    createdAt?: true
  }

  export type ProcessedPhotoCountAggregateInputType = {
    id?: true
    userId?: true
    attachedPhotoId?: true
    filePath?: true
    mimeType?: true
    createdAt?: true
    _all?: true
  }

  export type ProcessedPhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProcessedPhoto to aggregate.
     */
    where?: ProcessedPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessedPhotos to fetch.
     */
    orderBy?: ProcessedPhotoOrderByWithRelationInput | ProcessedPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProcessedPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessedPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessedPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProcessedPhotos
    **/
    _count?: true | ProcessedPhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProcessedPhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProcessedPhotoMaxAggregateInputType
  }

  export type GetProcessedPhotoAggregateType<T extends ProcessedPhotoAggregateArgs> = {
        [P in keyof T & keyof AggregateProcessedPhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProcessedPhoto[P]>
      : GetScalarType<T[P], AggregateProcessedPhoto[P]>
  }




  export type ProcessedPhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessedPhotoWhereInput
    orderBy?: ProcessedPhotoOrderByWithAggregationInput | ProcessedPhotoOrderByWithAggregationInput[]
    by: ProcessedPhotoScalarFieldEnum[] | ProcessedPhotoScalarFieldEnum
    having?: ProcessedPhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProcessedPhotoCountAggregateInputType | true
    _min?: ProcessedPhotoMinAggregateInputType
    _max?: ProcessedPhotoMaxAggregateInputType
  }

  export type ProcessedPhotoGroupByOutputType = {
    id: string
    userId: string
    attachedPhotoId: string
    filePath: string
    mimeType: string | null
    createdAt: Date
    _count: ProcessedPhotoCountAggregateOutputType | null
    _min: ProcessedPhotoMinAggregateOutputType | null
    _max: ProcessedPhotoMaxAggregateOutputType | null
  }

  type GetProcessedPhotoGroupByPayload<T extends ProcessedPhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProcessedPhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProcessedPhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProcessedPhotoGroupByOutputType[P]>
            : GetScalarType<T[P], ProcessedPhotoGroupByOutputType[P]>
        }
      >
    >


  export type ProcessedPhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    attachedPhotoId?: boolean
    filePath?: boolean
    mimeType?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    source?: boolean | AttachedPhotoDefaultArgs<ExtArgs>
    generatedImages?: boolean | ProcessedPhoto$generatedImagesArgs<ExtArgs>
    _count?: boolean | ProcessedPhotoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["processedPhoto"]>

  export type ProcessedPhotoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    attachedPhotoId?: boolean
    filePath?: boolean
    mimeType?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    source?: boolean | AttachedPhotoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["processedPhoto"]>

  export type ProcessedPhotoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    attachedPhotoId?: boolean
    filePath?: boolean
    mimeType?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    source?: boolean | AttachedPhotoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["processedPhoto"]>

  export type ProcessedPhotoSelectScalar = {
    id?: boolean
    userId?: boolean
    attachedPhotoId?: boolean
    filePath?: boolean
    mimeType?: boolean
    createdAt?: boolean
  }

  export type ProcessedPhotoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "attachedPhotoId" | "filePath" | "mimeType" | "createdAt", ExtArgs["result"]["processedPhoto"]>
  export type ProcessedPhotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    source?: boolean | AttachedPhotoDefaultArgs<ExtArgs>
    generatedImages?: boolean | ProcessedPhoto$generatedImagesArgs<ExtArgs>
    _count?: boolean | ProcessedPhotoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProcessedPhotoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    source?: boolean | AttachedPhotoDefaultArgs<ExtArgs>
  }
  export type ProcessedPhotoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    source?: boolean | AttachedPhotoDefaultArgs<ExtArgs>
  }

  export type $ProcessedPhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProcessedPhoto"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      source: Prisma.$AttachedPhotoPayload<ExtArgs>
      generatedImages: Prisma.$GeneratedImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      attachedPhotoId: string
      filePath: string
      mimeType: string | null
      createdAt: Date
    }, ExtArgs["result"]["processedPhoto"]>
    composites: {}
  }

  type ProcessedPhotoGetPayload<S extends boolean | null | undefined | ProcessedPhotoDefaultArgs> = $Result.GetResult<Prisma.$ProcessedPhotoPayload, S>

  type ProcessedPhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProcessedPhotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProcessedPhotoCountAggregateInputType | true
    }

  export interface ProcessedPhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProcessedPhoto'], meta: { name: 'ProcessedPhoto' } }
    /**
     * Find zero or one ProcessedPhoto that matches the filter.
     * @param {ProcessedPhotoFindUniqueArgs} args - Arguments to find a ProcessedPhoto
     * @example
     * // Get one ProcessedPhoto
     * const processedPhoto = await prisma.processedPhoto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProcessedPhotoFindUniqueArgs>(args: SelectSubset<T, ProcessedPhotoFindUniqueArgs<ExtArgs>>): Prisma__ProcessedPhotoClient<$Result.GetResult<Prisma.$ProcessedPhotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProcessedPhoto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProcessedPhotoFindUniqueOrThrowArgs} args - Arguments to find a ProcessedPhoto
     * @example
     * // Get one ProcessedPhoto
     * const processedPhoto = await prisma.processedPhoto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProcessedPhotoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProcessedPhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProcessedPhotoClient<$Result.GetResult<Prisma.$ProcessedPhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProcessedPhoto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessedPhotoFindFirstArgs} args - Arguments to find a ProcessedPhoto
     * @example
     * // Get one ProcessedPhoto
     * const processedPhoto = await prisma.processedPhoto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProcessedPhotoFindFirstArgs>(args?: SelectSubset<T, ProcessedPhotoFindFirstArgs<ExtArgs>>): Prisma__ProcessedPhotoClient<$Result.GetResult<Prisma.$ProcessedPhotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProcessedPhoto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessedPhotoFindFirstOrThrowArgs} args - Arguments to find a ProcessedPhoto
     * @example
     * // Get one ProcessedPhoto
     * const processedPhoto = await prisma.processedPhoto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProcessedPhotoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProcessedPhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProcessedPhotoClient<$Result.GetResult<Prisma.$ProcessedPhotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProcessedPhotos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessedPhotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProcessedPhotos
     * const processedPhotos = await prisma.processedPhoto.findMany()
     * 
     * // Get first 10 ProcessedPhotos
     * const processedPhotos = await prisma.processedPhoto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const processedPhotoWithIdOnly = await prisma.processedPhoto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProcessedPhotoFindManyArgs>(args?: SelectSubset<T, ProcessedPhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessedPhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProcessedPhoto.
     * @param {ProcessedPhotoCreateArgs} args - Arguments to create a ProcessedPhoto.
     * @example
     * // Create one ProcessedPhoto
     * const ProcessedPhoto = await prisma.processedPhoto.create({
     *   data: {
     *     // ... data to create a ProcessedPhoto
     *   }
     * })
     * 
     */
    create<T extends ProcessedPhotoCreateArgs>(args: SelectSubset<T, ProcessedPhotoCreateArgs<ExtArgs>>): Prisma__ProcessedPhotoClient<$Result.GetResult<Prisma.$ProcessedPhotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProcessedPhotos.
     * @param {ProcessedPhotoCreateManyArgs} args - Arguments to create many ProcessedPhotos.
     * @example
     * // Create many ProcessedPhotos
     * const processedPhoto = await prisma.processedPhoto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProcessedPhotoCreateManyArgs>(args?: SelectSubset<T, ProcessedPhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProcessedPhotos and returns the data saved in the database.
     * @param {ProcessedPhotoCreateManyAndReturnArgs} args - Arguments to create many ProcessedPhotos.
     * @example
     * // Create many ProcessedPhotos
     * const processedPhoto = await prisma.processedPhoto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProcessedPhotos and only return the `id`
     * const processedPhotoWithIdOnly = await prisma.processedPhoto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProcessedPhotoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProcessedPhotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessedPhotoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProcessedPhoto.
     * @param {ProcessedPhotoDeleteArgs} args - Arguments to delete one ProcessedPhoto.
     * @example
     * // Delete one ProcessedPhoto
     * const ProcessedPhoto = await prisma.processedPhoto.delete({
     *   where: {
     *     // ... filter to delete one ProcessedPhoto
     *   }
     * })
     * 
     */
    delete<T extends ProcessedPhotoDeleteArgs>(args: SelectSubset<T, ProcessedPhotoDeleteArgs<ExtArgs>>): Prisma__ProcessedPhotoClient<$Result.GetResult<Prisma.$ProcessedPhotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProcessedPhoto.
     * @param {ProcessedPhotoUpdateArgs} args - Arguments to update one ProcessedPhoto.
     * @example
     * // Update one ProcessedPhoto
     * const processedPhoto = await prisma.processedPhoto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProcessedPhotoUpdateArgs>(args: SelectSubset<T, ProcessedPhotoUpdateArgs<ExtArgs>>): Prisma__ProcessedPhotoClient<$Result.GetResult<Prisma.$ProcessedPhotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProcessedPhotos.
     * @param {ProcessedPhotoDeleteManyArgs} args - Arguments to filter ProcessedPhotos to delete.
     * @example
     * // Delete a few ProcessedPhotos
     * const { count } = await prisma.processedPhoto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProcessedPhotoDeleteManyArgs>(args?: SelectSubset<T, ProcessedPhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProcessedPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessedPhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProcessedPhotos
     * const processedPhoto = await prisma.processedPhoto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProcessedPhotoUpdateManyArgs>(args: SelectSubset<T, ProcessedPhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProcessedPhotos and returns the data updated in the database.
     * @param {ProcessedPhotoUpdateManyAndReturnArgs} args - Arguments to update many ProcessedPhotos.
     * @example
     * // Update many ProcessedPhotos
     * const processedPhoto = await prisma.processedPhoto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProcessedPhotos and only return the `id`
     * const processedPhotoWithIdOnly = await prisma.processedPhoto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProcessedPhotoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProcessedPhotoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessedPhotoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProcessedPhoto.
     * @param {ProcessedPhotoUpsertArgs} args - Arguments to update or create a ProcessedPhoto.
     * @example
     * // Update or create a ProcessedPhoto
     * const processedPhoto = await prisma.processedPhoto.upsert({
     *   create: {
     *     // ... data to create a ProcessedPhoto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProcessedPhoto we want to update
     *   }
     * })
     */
    upsert<T extends ProcessedPhotoUpsertArgs>(args: SelectSubset<T, ProcessedPhotoUpsertArgs<ExtArgs>>): Prisma__ProcessedPhotoClient<$Result.GetResult<Prisma.$ProcessedPhotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProcessedPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessedPhotoCountArgs} args - Arguments to filter ProcessedPhotos to count.
     * @example
     * // Count the number of ProcessedPhotos
     * const count = await prisma.processedPhoto.count({
     *   where: {
     *     // ... the filter for the ProcessedPhotos we want to count
     *   }
     * })
    **/
    count<T extends ProcessedPhotoCountArgs>(
      args?: Subset<T, ProcessedPhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProcessedPhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProcessedPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessedPhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProcessedPhotoAggregateArgs>(args: Subset<T, ProcessedPhotoAggregateArgs>): Prisma.PrismaPromise<GetProcessedPhotoAggregateType<T>>

    /**
     * Group by ProcessedPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessedPhotoGroupByArgs} args - Group by arguments.
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
      T extends ProcessedPhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProcessedPhotoGroupByArgs['orderBy'] }
        : { orderBy?: ProcessedPhotoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProcessedPhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProcessedPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProcessedPhoto model
   */
  readonly fields: ProcessedPhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProcessedPhoto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProcessedPhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    source<T extends AttachedPhotoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AttachedPhotoDefaultArgs<ExtArgs>>): Prisma__AttachedPhotoClient<$Result.GetResult<Prisma.$AttachedPhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    generatedImages<T extends ProcessedPhoto$generatedImagesArgs<ExtArgs> = {}>(args?: Subset<T, ProcessedPhoto$generatedImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProcessedPhoto model
   */
  interface ProcessedPhotoFieldRefs {
    readonly id: FieldRef<"ProcessedPhoto", 'String'>
    readonly userId: FieldRef<"ProcessedPhoto", 'String'>
    readonly attachedPhotoId: FieldRef<"ProcessedPhoto", 'String'>
    readonly filePath: FieldRef<"ProcessedPhoto", 'String'>
    readonly mimeType: FieldRef<"ProcessedPhoto", 'String'>
    readonly createdAt: FieldRef<"ProcessedPhoto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProcessedPhoto findUnique
   */
  export type ProcessedPhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedPhoto
     */
    select?: ProcessedPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedPhoto
     */
    omit?: ProcessedPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessedPhotoInclude<ExtArgs> | null
    /**
     * Filter, which ProcessedPhoto to fetch.
     */
    where: ProcessedPhotoWhereUniqueInput
  }

  /**
   * ProcessedPhoto findUniqueOrThrow
   */
  export type ProcessedPhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedPhoto
     */
    select?: ProcessedPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedPhoto
     */
    omit?: ProcessedPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessedPhotoInclude<ExtArgs> | null
    /**
     * Filter, which ProcessedPhoto to fetch.
     */
    where: ProcessedPhotoWhereUniqueInput
  }

  /**
   * ProcessedPhoto findFirst
   */
  export type ProcessedPhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedPhoto
     */
    select?: ProcessedPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedPhoto
     */
    omit?: ProcessedPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessedPhotoInclude<ExtArgs> | null
    /**
     * Filter, which ProcessedPhoto to fetch.
     */
    where?: ProcessedPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessedPhotos to fetch.
     */
    orderBy?: ProcessedPhotoOrderByWithRelationInput | ProcessedPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProcessedPhotos.
     */
    cursor?: ProcessedPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessedPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessedPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProcessedPhotos.
     */
    distinct?: ProcessedPhotoScalarFieldEnum | ProcessedPhotoScalarFieldEnum[]
  }

  /**
   * ProcessedPhoto findFirstOrThrow
   */
  export type ProcessedPhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedPhoto
     */
    select?: ProcessedPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedPhoto
     */
    omit?: ProcessedPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessedPhotoInclude<ExtArgs> | null
    /**
     * Filter, which ProcessedPhoto to fetch.
     */
    where?: ProcessedPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessedPhotos to fetch.
     */
    orderBy?: ProcessedPhotoOrderByWithRelationInput | ProcessedPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProcessedPhotos.
     */
    cursor?: ProcessedPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessedPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessedPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProcessedPhotos.
     */
    distinct?: ProcessedPhotoScalarFieldEnum | ProcessedPhotoScalarFieldEnum[]
  }

  /**
   * ProcessedPhoto findMany
   */
  export type ProcessedPhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedPhoto
     */
    select?: ProcessedPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedPhoto
     */
    omit?: ProcessedPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessedPhotoInclude<ExtArgs> | null
    /**
     * Filter, which ProcessedPhotos to fetch.
     */
    where?: ProcessedPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessedPhotos to fetch.
     */
    orderBy?: ProcessedPhotoOrderByWithRelationInput | ProcessedPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProcessedPhotos.
     */
    cursor?: ProcessedPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessedPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessedPhotos.
     */
    skip?: number
    distinct?: ProcessedPhotoScalarFieldEnum | ProcessedPhotoScalarFieldEnum[]
  }

  /**
   * ProcessedPhoto create
   */
  export type ProcessedPhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedPhoto
     */
    select?: ProcessedPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedPhoto
     */
    omit?: ProcessedPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessedPhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a ProcessedPhoto.
     */
    data: XOR<ProcessedPhotoCreateInput, ProcessedPhotoUncheckedCreateInput>
  }

  /**
   * ProcessedPhoto createMany
   */
  export type ProcessedPhotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProcessedPhotos.
     */
    data: ProcessedPhotoCreateManyInput | ProcessedPhotoCreateManyInput[]
  }

  /**
   * ProcessedPhoto createManyAndReturn
   */
  export type ProcessedPhotoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedPhoto
     */
    select?: ProcessedPhotoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedPhoto
     */
    omit?: ProcessedPhotoOmit<ExtArgs> | null
    /**
     * The data used to create many ProcessedPhotos.
     */
    data: ProcessedPhotoCreateManyInput | ProcessedPhotoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessedPhotoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProcessedPhoto update
   */
  export type ProcessedPhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedPhoto
     */
    select?: ProcessedPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedPhoto
     */
    omit?: ProcessedPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessedPhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a ProcessedPhoto.
     */
    data: XOR<ProcessedPhotoUpdateInput, ProcessedPhotoUncheckedUpdateInput>
    /**
     * Choose, which ProcessedPhoto to update.
     */
    where: ProcessedPhotoWhereUniqueInput
  }

  /**
   * ProcessedPhoto updateMany
   */
  export type ProcessedPhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProcessedPhotos.
     */
    data: XOR<ProcessedPhotoUpdateManyMutationInput, ProcessedPhotoUncheckedUpdateManyInput>
    /**
     * Filter which ProcessedPhotos to update
     */
    where?: ProcessedPhotoWhereInput
    /**
     * Limit how many ProcessedPhotos to update.
     */
    limit?: number
  }

  /**
   * ProcessedPhoto updateManyAndReturn
   */
  export type ProcessedPhotoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedPhoto
     */
    select?: ProcessedPhotoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedPhoto
     */
    omit?: ProcessedPhotoOmit<ExtArgs> | null
    /**
     * The data used to update ProcessedPhotos.
     */
    data: XOR<ProcessedPhotoUpdateManyMutationInput, ProcessedPhotoUncheckedUpdateManyInput>
    /**
     * Filter which ProcessedPhotos to update
     */
    where?: ProcessedPhotoWhereInput
    /**
     * Limit how many ProcessedPhotos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessedPhotoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProcessedPhoto upsert
   */
  export type ProcessedPhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedPhoto
     */
    select?: ProcessedPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedPhoto
     */
    omit?: ProcessedPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessedPhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the ProcessedPhoto to update in case it exists.
     */
    where: ProcessedPhotoWhereUniqueInput
    /**
     * In case the ProcessedPhoto found by the `where` argument doesn't exist, create a new ProcessedPhoto with this data.
     */
    create: XOR<ProcessedPhotoCreateInput, ProcessedPhotoUncheckedCreateInput>
    /**
     * In case the ProcessedPhoto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProcessedPhotoUpdateInput, ProcessedPhotoUncheckedUpdateInput>
  }

  /**
   * ProcessedPhoto delete
   */
  export type ProcessedPhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedPhoto
     */
    select?: ProcessedPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedPhoto
     */
    omit?: ProcessedPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessedPhotoInclude<ExtArgs> | null
    /**
     * Filter which ProcessedPhoto to delete.
     */
    where: ProcessedPhotoWhereUniqueInput
  }

  /**
   * ProcessedPhoto deleteMany
   */
  export type ProcessedPhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProcessedPhotos to delete
     */
    where?: ProcessedPhotoWhereInput
    /**
     * Limit how many ProcessedPhotos to delete.
     */
    limit?: number
  }

  /**
   * ProcessedPhoto.generatedImages
   */
  export type ProcessedPhoto$generatedImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedImage
     */
    select?: GeneratedImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedImage
     */
    omit?: GeneratedImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedImageInclude<ExtArgs> | null
    where?: GeneratedImageWhereInput
    orderBy?: GeneratedImageOrderByWithRelationInput | GeneratedImageOrderByWithRelationInput[]
    cursor?: GeneratedImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GeneratedImageScalarFieldEnum | GeneratedImageScalarFieldEnum[]
  }

  /**
   * ProcessedPhoto without action
   */
  export type ProcessedPhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedPhoto
     */
    select?: ProcessedPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedPhoto
     */
    omit?: ProcessedPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessedPhotoInclude<ExtArgs> | null
  }


  /**
   * Model GeneratedImage
   */

  export type AggregateGeneratedImage = {
    _count: GeneratedImageCountAggregateOutputType | null
    _min: GeneratedImageMinAggregateOutputType | null
    _max: GeneratedImageMaxAggregateOutputType | null
  }

  export type GeneratedImageMinAggregateOutputType = {
    id: string | null
    processedPhotoId: string | null
    provider: string | null
    templateLabel: string | null
    promptText: string | null
    metaJson: string | null
    filePath: string | null
    createdAt: Date | null
  }

  export type GeneratedImageMaxAggregateOutputType = {
    id: string | null
    processedPhotoId: string | null
    provider: string | null
    templateLabel: string | null
    promptText: string | null
    metaJson: string | null
    filePath: string | null
    createdAt: Date | null
  }

  export type GeneratedImageCountAggregateOutputType = {
    id: number
    processedPhotoId: number
    provider: number
    templateLabel: number
    promptText: number
    metaJson: number
    filePath: number
    createdAt: number
    _all: number
  }


  export type GeneratedImageMinAggregateInputType = {
    id?: true
    processedPhotoId?: true
    provider?: true
    templateLabel?: true
    promptText?: true
    metaJson?: true
    filePath?: true
    createdAt?: true
  }

  export type GeneratedImageMaxAggregateInputType = {
    id?: true
    processedPhotoId?: true
    provider?: true
    templateLabel?: true
    promptText?: true
    metaJson?: true
    filePath?: true
    createdAt?: true
  }

  export type GeneratedImageCountAggregateInputType = {
    id?: true
    processedPhotoId?: true
    provider?: true
    templateLabel?: true
    promptText?: true
    metaJson?: true
    filePath?: true
    createdAt?: true
    _all?: true
  }

  export type GeneratedImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeneratedImage to aggregate.
     */
    where?: GeneratedImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedImages to fetch.
     */
    orderBy?: GeneratedImageOrderByWithRelationInput | GeneratedImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GeneratedImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GeneratedImages
    **/
    _count?: true | GeneratedImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeneratedImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeneratedImageMaxAggregateInputType
  }

  export type GetGeneratedImageAggregateType<T extends GeneratedImageAggregateArgs> = {
        [P in keyof T & keyof AggregateGeneratedImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeneratedImage[P]>
      : GetScalarType<T[P], AggregateGeneratedImage[P]>
  }




  export type GeneratedImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneratedImageWhereInput
    orderBy?: GeneratedImageOrderByWithAggregationInput | GeneratedImageOrderByWithAggregationInput[]
    by: GeneratedImageScalarFieldEnum[] | GeneratedImageScalarFieldEnum
    having?: GeneratedImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeneratedImageCountAggregateInputType | true
    _min?: GeneratedImageMinAggregateInputType
    _max?: GeneratedImageMaxAggregateInputType
  }

  export type GeneratedImageGroupByOutputType = {
    id: string
    processedPhotoId: string
    provider: string
    templateLabel: string
    promptText: string
    metaJson: string | null
    filePath: string
    createdAt: Date
    _count: GeneratedImageCountAggregateOutputType | null
    _min: GeneratedImageMinAggregateOutputType | null
    _max: GeneratedImageMaxAggregateOutputType | null
  }

  type GetGeneratedImageGroupByPayload<T extends GeneratedImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GeneratedImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeneratedImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeneratedImageGroupByOutputType[P]>
            : GetScalarType<T[P], GeneratedImageGroupByOutputType[P]>
        }
      >
    >


  export type GeneratedImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    processedPhotoId?: boolean
    provider?: boolean
    templateLabel?: boolean
    promptText?: boolean
    metaJson?: boolean
    filePath?: boolean
    createdAt?: boolean
    processedPhoto?: boolean | ProcessedPhotoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["generatedImage"]>

  export type GeneratedImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    processedPhotoId?: boolean
    provider?: boolean
    templateLabel?: boolean
    promptText?: boolean
    metaJson?: boolean
    filePath?: boolean
    createdAt?: boolean
    processedPhoto?: boolean | ProcessedPhotoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["generatedImage"]>

  export type GeneratedImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    processedPhotoId?: boolean
    provider?: boolean
    templateLabel?: boolean
    promptText?: boolean
    metaJson?: boolean
    filePath?: boolean
    createdAt?: boolean
    processedPhoto?: boolean | ProcessedPhotoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["generatedImage"]>

  export type GeneratedImageSelectScalar = {
    id?: boolean
    processedPhotoId?: boolean
    provider?: boolean
    templateLabel?: boolean
    promptText?: boolean
    metaJson?: boolean
    filePath?: boolean
    createdAt?: boolean
  }

  export type GeneratedImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "processedPhotoId" | "provider" | "templateLabel" | "promptText" | "metaJson" | "filePath" | "createdAt", ExtArgs["result"]["generatedImage"]>
  export type GeneratedImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    processedPhoto?: boolean | ProcessedPhotoDefaultArgs<ExtArgs>
  }
  export type GeneratedImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    processedPhoto?: boolean | ProcessedPhotoDefaultArgs<ExtArgs>
  }
  export type GeneratedImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    processedPhoto?: boolean | ProcessedPhotoDefaultArgs<ExtArgs>
  }

  export type $GeneratedImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GeneratedImage"
    objects: {
      processedPhoto: Prisma.$ProcessedPhotoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      processedPhotoId: string
      provider: string
      templateLabel: string
      promptText: string
      metaJson: string | null
      filePath: string
      createdAt: Date
    }, ExtArgs["result"]["generatedImage"]>
    composites: {}
  }

  type GeneratedImageGetPayload<S extends boolean | null | undefined | GeneratedImageDefaultArgs> = $Result.GetResult<Prisma.$GeneratedImagePayload, S>

  type GeneratedImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GeneratedImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GeneratedImageCountAggregateInputType | true
    }

  export interface GeneratedImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GeneratedImage'], meta: { name: 'GeneratedImage' } }
    /**
     * Find zero or one GeneratedImage that matches the filter.
     * @param {GeneratedImageFindUniqueArgs} args - Arguments to find a GeneratedImage
     * @example
     * // Get one GeneratedImage
     * const generatedImage = await prisma.generatedImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GeneratedImageFindUniqueArgs>(args: SelectSubset<T, GeneratedImageFindUniqueArgs<ExtArgs>>): Prisma__GeneratedImageClient<$Result.GetResult<Prisma.$GeneratedImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GeneratedImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GeneratedImageFindUniqueOrThrowArgs} args - Arguments to find a GeneratedImage
     * @example
     * // Get one GeneratedImage
     * const generatedImage = await prisma.generatedImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GeneratedImageFindUniqueOrThrowArgs>(args: SelectSubset<T, GeneratedImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GeneratedImageClient<$Result.GetResult<Prisma.$GeneratedImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GeneratedImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedImageFindFirstArgs} args - Arguments to find a GeneratedImage
     * @example
     * // Get one GeneratedImage
     * const generatedImage = await prisma.generatedImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GeneratedImageFindFirstArgs>(args?: SelectSubset<T, GeneratedImageFindFirstArgs<ExtArgs>>): Prisma__GeneratedImageClient<$Result.GetResult<Prisma.$GeneratedImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GeneratedImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedImageFindFirstOrThrowArgs} args - Arguments to find a GeneratedImage
     * @example
     * // Get one GeneratedImage
     * const generatedImage = await prisma.generatedImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GeneratedImageFindFirstOrThrowArgs>(args?: SelectSubset<T, GeneratedImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__GeneratedImageClient<$Result.GetResult<Prisma.$GeneratedImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GeneratedImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GeneratedImages
     * const generatedImages = await prisma.generatedImage.findMany()
     * 
     * // Get first 10 GeneratedImages
     * const generatedImages = await prisma.generatedImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const generatedImageWithIdOnly = await prisma.generatedImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GeneratedImageFindManyArgs>(args?: SelectSubset<T, GeneratedImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GeneratedImage.
     * @param {GeneratedImageCreateArgs} args - Arguments to create a GeneratedImage.
     * @example
     * // Create one GeneratedImage
     * const GeneratedImage = await prisma.generatedImage.create({
     *   data: {
     *     // ... data to create a GeneratedImage
     *   }
     * })
     * 
     */
    create<T extends GeneratedImageCreateArgs>(args: SelectSubset<T, GeneratedImageCreateArgs<ExtArgs>>): Prisma__GeneratedImageClient<$Result.GetResult<Prisma.$GeneratedImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GeneratedImages.
     * @param {GeneratedImageCreateManyArgs} args - Arguments to create many GeneratedImages.
     * @example
     * // Create many GeneratedImages
     * const generatedImage = await prisma.generatedImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GeneratedImageCreateManyArgs>(args?: SelectSubset<T, GeneratedImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GeneratedImages and returns the data saved in the database.
     * @param {GeneratedImageCreateManyAndReturnArgs} args - Arguments to create many GeneratedImages.
     * @example
     * // Create many GeneratedImages
     * const generatedImage = await prisma.generatedImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GeneratedImages and only return the `id`
     * const generatedImageWithIdOnly = await prisma.generatedImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GeneratedImageCreateManyAndReturnArgs>(args?: SelectSubset<T, GeneratedImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GeneratedImage.
     * @param {GeneratedImageDeleteArgs} args - Arguments to delete one GeneratedImage.
     * @example
     * // Delete one GeneratedImage
     * const GeneratedImage = await prisma.generatedImage.delete({
     *   where: {
     *     // ... filter to delete one GeneratedImage
     *   }
     * })
     * 
     */
    delete<T extends GeneratedImageDeleteArgs>(args: SelectSubset<T, GeneratedImageDeleteArgs<ExtArgs>>): Prisma__GeneratedImageClient<$Result.GetResult<Prisma.$GeneratedImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GeneratedImage.
     * @param {GeneratedImageUpdateArgs} args - Arguments to update one GeneratedImage.
     * @example
     * // Update one GeneratedImage
     * const generatedImage = await prisma.generatedImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GeneratedImageUpdateArgs>(args: SelectSubset<T, GeneratedImageUpdateArgs<ExtArgs>>): Prisma__GeneratedImageClient<$Result.GetResult<Prisma.$GeneratedImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GeneratedImages.
     * @param {GeneratedImageDeleteManyArgs} args - Arguments to filter GeneratedImages to delete.
     * @example
     * // Delete a few GeneratedImages
     * const { count } = await prisma.generatedImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GeneratedImageDeleteManyArgs>(args?: SelectSubset<T, GeneratedImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GeneratedImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GeneratedImages
     * const generatedImage = await prisma.generatedImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GeneratedImageUpdateManyArgs>(args: SelectSubset<T, GeneratedImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GeneratedImages and returns the data updated in the database.
     * @param {GeneratedImageUpdateManyAndReturnArgs} args - Arguments to update many GeneratedImages.
     * @example
     * // Update many GeneratedImages
     * const generatedImage = await prisma.generatedImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GeneratedImages and only return the `id`
     * const generatedImageWithIdOnly = await prisma.generatedImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GeneratedImageUpdateManyAndReturnArgs>(args: SelectSubset<T, GeneratedImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GeneratedImage.
     * @param {GeneratedImageUpsertArgs} args - Arguments to update or create a GeneratedImage.
     * @example
     * // Update or create a GeneratedImage
     * const generatedImage = await prisma.generatedImage.upsert({
     *   create: {
     *     // ... data to create a GeneratedImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GeneratedImage we want to update
     *   }
     * })
     */
    upsert<T extends GeneratedImageUpsertArgs>(args: SelectSubset<T, GeneratedImageUpsertArgs<ExtArgs>>): Prisma__GeneratedImageClient<$Result.GetResult<Prisma.$GeneratedImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GeneratedImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedImageCountArgs} args - Arguments to filter GeneratedImages to count.
     * @example
     * // Count the number of GeneratedImages
     * const count = await prisma.generatedImage.count({
     *   where: {
     *     // ... the filter for the GeneratedImages we want to count
     *   }
     * })
    **/
    count<T extends GeneratedImageCountArgs>(
      args?: Subset<T, GeneratedImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeneratedImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GeneratedImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GeneratedImageAggregateArgs>(args: Subset<T, GeneratedImageAggregateArgs>): Prisma.PrismaPromise<GetGeneratedImageAggregateType<T>>

    /**
     * Group by GeneratedImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedImageGroupByArgs} args - Group by arguments.
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
      T extends GeneratedImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GeneratedImageGroupByArgs['orderBy'] }
        : { orderBy?: GeneratedImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GeneratedImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneratedImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GeneratedImage model
   */
  readonly fields: GeneratedImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GeneratedImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GeneratedImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    processedPhoto<T extends ProcessedPhotoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProcessedPhotoDefaultArgs<ExtArgs>>): Prisma__ProcessedPhotoClient<$Result.GetResult<Prisma.$ProcessedPhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GeneratedImage model
   */
  interface GeneratedImageFieldRefs {
    readonly id: FieldRef<"GeneratedImage", 'String'>
    readonly processedPhotoId: FieldRef<"GeneratedImage", 'String'>
    readonly provider: FieldRef<"GeneratedImage", 'String'>
    readonly templateLabel: FieldRef<"GeneratedImage", 'String'>
    readonly promptText: FieldRef<"GeneratedImage", 'String'>
    readonly metaJson: FieldRef<"GeneratedImage", 'String'>
    readonly filePath: FieldRef<"GeneratedImage", 'String'>
    readonly createdAt: FieldRef<"GeneratedImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GeneratedImage findUnique
   */
  export type GeneratedImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedImage
     */
    select?: GeneratedImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedImage
     */
    omit?: GeneratedImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedImageInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedImage to fetch.
     */
    where: GeneratedImageWhereUniqueInput
  }

  /**
   * GeneratedImage findUniqueOrThrow
   */
  export type GeneratedImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedImage
     */
    select?: GeneratedImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedImage
     */
    omit?: GeneratedImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedImageInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedImage to fetch.
     */
    where: GeneratedImageWhereUniqueInput
  }

  /**
   * GeneratedImage findFirst
   */
  export type GeneratedImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedImage
     */
    select?: GeneratedImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedImage
     */
    omit?: GeneratedImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedImageInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedImage to fetch.
     */
    where?: GeneratedImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedImages to fetch.
     */
    orderBy?: GeneratedImageOrderByWithRelationInput | GeneratedImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneratedImages.
     */
    cursor?: GeneratedImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneratedImages.
     */
    distinct?: GeneratedImageScalarFieldEnum | GeneratedImageScalarFieldEnum[]
  }

  /**
   * GeneratedImage findFirstOrThrow
   */
  export type GeneratedImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedImage
     */
    select?: GeneratedImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedImage
     */
    omit?: GeneratedImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedImageInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedImage to fetch.
     */
    where?: GeneratedImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedImages to fetch.
     */
    orderBy?: GeneratedImageOrderByWithRelationInput | GeneratedImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneratedImages.
     */
    cursor?: GeneratedImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneratedImages.
     */
    distinct?: GeneratedImageScalarFieldEnum | GeneratedImageScalarFieldEnum[]
  }

  /**
   * GeneratedImage findMany
   */
  export type GeneratedImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedImage
     */
    select?: GeneratedImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedImage
     */
    omit?: GeneratedImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedImageInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedImages to fetch.
     */
    where?: GeneratedImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedImages to fetch.
     */
    orderBy?: GeneratedImageOrderByWithRelationInput | GeneratedImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GeneratedImages.
     */
    cursor?: GeneratedImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedImages.
     */
    skip?: number
    distinct?: GeneratedImageScalarFieldEnum | GeneratedImageScalarFieldEnum[]
  }

  /**
   * GeneratedImage create
   */
  export type GeneratedImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedImage
     */
    select?: GeneratedImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedImage
     */
    omit?: GeneratedImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedImageInclude<ExtArgs> | null
    /**
     * The data needed to create a GeneratedImage.
     */
    data: XOR<GeneratedImageCreateInput, GeneratedImageUncheckedCreateInput>
  }

  /**
   * GeneratedImage createMany
   */
  export type GeneratedImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GeneratedImages.
     */
    data: GeneratedImageCreateManyInput | GeneratedImageCreateManyInput[]
  }

  /**
   * GeneratedImage createManyAndReturn
   */
  export type GeneratedImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedImage
     */
    select?: GeneratedImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedImage
     */
    omit?: GeneratedImageOmit<ExtArgs> | null
    /**
     * The data used to create many GeneratedImages.
     */
    data: GeneratedImageCreateManyInput | GeneratedImageCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GeneratedImage update
   */
  export type GeneratedImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedImage
     */
    select?: GeneratedImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedImage
     */
    omit?: GeneratedImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedImageInclude<ExtArgs> | null
    /**
     * The data needed to update a GeneratedImage.
     */
    data: XOR<GeneratedImageUpdateInput, GeneratedImageUncheckedUpdateInput>
    /**
     * Choose, which GeneratedImage to update.
     */
    where: GeneratedImageWhereUniqueInput
  }

  /**
   * GeneratedImage updateMany
   */
  export type GeneratedImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GeneratedImages.
     */
    data: XOR<GeneratedImageUpdateManyMutationInput, GeneratedImageUncheckedUpdateManyInput>
    /**
     * Filter which GeneratedImages to update
     */
    where?: GeneratedImageWhereInput
    /**
     * Limit how many GeneratedImages to update.
     */
    limit?: number
  }

  /**
   * GeneratedImage updateManyAndReturn
   */
  export type GeneratedImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedImage
     */
    select?: GeneratedImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedImage
     */
    omit?: GeneratedImageOmit<ExtArgs> | null
    /**
     * The data used to update GeneratedImages.
     */
    data: XOR<GeneratedImageUpdateManyMutationInput, GeneratedImageUncheckedUpdateManyInput>
    /**
     * Filter which GeneratedImages to update
     */
    where?: GeneratedImageWhereInput
    /**
     * Limit how many GeneratedImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GeneratedImage upsert
   */
  export type GeneratedImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedImage
     */
    select?: GeneratedImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedImage
     */
    omit?: GeneratedImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedImageInclude<ExtArgs> | null
    /**
     * The filter to search for the GeneratedImage to update in case it exists.
     */
    where: GeneratedImageWhereUniqueInput
    /**
     * In case the GeneratedImage found by the `where` argument doesn't exist, create a new GeneratedImage with this data.
     */
    create: XOR<GeneratedImageCreateInput, GeneratedImageUncheckedCreateInput>
    /**
     * In case the GeneratedImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GeneratedImageUpdateInput, GeneratedImageUncheckedUpdateInput>
  }

  /**
   * GeneratedImage delete
   */
  export type GeneratedImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedImage
     */
    select?: GeneratedImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedImage
     */
    omit?: GeneratedImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedImageInclude<ExtArgs> | null
    /**
     * Filter which GeneratedImage to delete.
     */
    where: GeneratedImageWhereUniqueInput
  }

  /**
   * GeneratedImage deleteMany
   */
  export type GeneratedImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeneratedImages to delete
     */
    where?: GeneratedImageWhereInput
    /**
     * Limit how many GeneratedImages to delete.
     */
    limit?: number
  }

  /**
   * GeneratedImage without action
   */
  export type GeneratedImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedImage
     */
    select?: GeneratedImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedImage
     */
    omit?: GeneratedImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedImageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    telegramId: 'telegramId',
    username: 'username',
    firstName: 'firstName',
    lastName: 'lastName',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AttachedPhotoScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    telegramFileId: 'telegramFileId',
    filePath: 'filePath',
    mimeType: 'mimeType',
    width: 'width',
    height: 'height',
    createdAt: 'createdAt'
  };

  export type AttachedPhotoScalarFieldEnum = (typeof AttachedPhotoScalarFieldEnum)[keyof typeof AttachedPhotoScalarFieldEnum]


  export const ProcessedPhotoScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    attachedPhotoId: 'attachedPhotoId',
    filePath: 'filePath',
    mimeType: 'mimeType',
    createdAt: 'createdAt'
  };

  export type ProcessedPhotoScalarFieldEnum = (typeof ProcessedPhotoScalarFieldEnum)[keyof typeof ProcessedPhotoScalarFieldEnum]


  export const GeneratedImageScalarFieldEnum: {
    id: 'id',
    processedPhotoId: 'processedPhotoId',
    provider: 'provider',
    templateLabel: 'templateLabel',
    promptText: 'promptText',
    metaJson: 'metaJson',
    filePath: 'filePath',
    createdAt: 'createdAt'
  };

  export type GeneratedImageScalarFieldEnum = (typeof GeneratedImageScalarFieldEnum)[keyof typeof GeneratedImageScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    telegramId?: StringFilter<"User"> | string
    username?: StringNullableFilter<"User"> | string | null
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    photos?: AttachedPhotoListRelationFilter
    processedPhotos?: ProcessedPhotoListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    telegramId?: SortOrder
    username?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    photos?: AttachedPhotoOrderByRelationAggregateInput
    processedPhotos?: ProcessedPhotoOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    telegramId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringNullableFilter<"User"> | string | null
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    photos?: AttachedPhotoListRelationFilter
    processedPhotos?: ProcessedPhotoListRelationFilter
  }, "id" | "telegramId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    telegramId?: SortOrder
    username?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    telegramId?: StringWithAggregatesFilter<"User"> | string
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AttachedPhotoWhereInput = {
    AND?: AttachedPhotoWhereInput | AttachedPhotoWhereInput[]
    OR?: AttachedPhotoWhereInput[]
    NOT?: AttachedPhotoWhereInput | AttachedPhotoWhereInput[]
    id?: StringFilter<"AttachedPhoto"> | string
    userId?: StringFilter<"AttachedPhoto"> | string
    telegramFileId?: StringFilter<"AttachedPhoto"> | string
    filePath?: StringFilter<"AttachedPhoto"> | string
    mimeType?: StringNullableFilter<"AttachedPhoto"> | string | null
    width?: IntNullableFilter<"AttachedPhoto"> | number | null
    height?: IntNullableFilter<"AttachedPhoto"> | number | null
    createdAt?: DateTimeFilter<"AttachedPhoto"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    processedPhotos?: ProcessedPhotoListRelationFilter
  }

  export type AttachedPhotoOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    telegramFileId?: SortOrder
    filePath?: SortOrder
    mimeType?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    processedPhotos?: ProcessedPhotoOrderByRelationAggregateInput
  }

  export type AttachedPhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AttachedPhotoWhereInput | AttachedPhotoWhereInput[]
    OR?: AttachedPhotoWhereInput[]
    NOT?: AttachedPhotoWhereInput | AttachedPhotoWhereInput[]
    userId?: StringFilter<"AttachedPhoto"> | string
    telegramFileId?: StringFilter<"AttachedPhoto"> | string
    filePath?: StringFilter<"AttachedPhoto"> | string
    mimeType?: StringNullableFilter<"AttachedPhoto"> | string | null
    width?: IntNullableFilter<"AttachedPhoto"> | number | null
    height?: IntNullableFilter<"AttachedPhoto"> | number | null
    createdAt?: DateTimeFilter<"AttachedPhoto"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    processedPhotos?: ProcessedPhotoListRelationFilter
  }, "id">

  export type AttachedPhotoOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    telegramFileId?: SortOrder
    filePath?: SortOrder
    mimeType?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AttachedPhotoCountOrderByAggregateInput
    _avg?: AttachedPhotoAvgOrderByAggregateInput
    _max?: AttachedPhotoMaxOrderByAggregateInput
    _min?: AttachedPhotoMinOrderByAggregateInput
    _sum?: AttachedPhotoSumOrderByAggregateInput
  }

  export type AttachedPhotoScalarWhereWithAggregatesInput = {
    AND?: AttachedPhotoScalarWhereWithAggregatesInput | AttachedPhotoScalarWhereWithAggregatesInput[]
    OR?: AttachedPhotoScalarWhereWithAggregatesInput[]
    NOT?: AttachedPhotoScalarWhereWithAggregatesInput | AttachedPhotoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AttachedPhoto"> | string
    userId?: StringWithAggregatesFilter<"AttachedPhoto"> | string
    telegramFileId?: StringWithAggregatesFilter<"AttachedPhoto"> | string
    filePath?: StringWithAggregatesFilter<"AttachedPhoto"> | string
    mimeType?: StringNullableWithAggregatesFilter<"AttachedPhoto"> | string | null
    width?: IntNullableWithAggregatesFilter<"AttachedPhoto"> | number | null
    height?: IntNullableWithAggregatesFilter<"AttachedPhoto"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"AttachedPhoto"> | Date | string
  }

  export type ProcessedPhotoWhereInput = {
    AND?: ProcessedPhotoWhereInput | ProcessedPhotoWhereInput[]
    OR?: ProcessedPhotoWhereInput[]
    NOT?: ProcessedPhotoWhereInput | ProcessedPhotoWhereInput[]
    id?: StringFilter<"ProcessedPhoto"> | string
    userId?: StringFilter<"ProcessedPhoto"> | string
    attachedPhotoId?: StringFilter<"ProcessedPhoto"> | string
    filePath?: StringFilter<"ProcessedPhoto"> | string
    mimeType?: StringNullableFilter<"ProcessedPhoto"> | string | null
    createdAt?: DateTimeFilter<"ProcessedPhoto"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    source?: XOR<AttachedPhotoScalarRelationFilter, AttachedPhotoWhereInput>
    generatedImages?: GeneratedImageListRelationFilter
  }

  export type ProcessedPhotoOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    attachedPhotoId?: SortOrder
    filePath?: SortOrder
    mimeType?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    source?: AttachedPhotoOrderByWithRelationInput
    generatedImages?: GeneratedImageOrderByRelationAggregateInput
  }

  export type ProcessedPhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProcessedPhotoWhereInput | ProcessedPhotoWhereInput[]
    OR?: ProcessedPhotoWhereInput[]
    NOT?: ProcessedPhotoWhereInput | ProcessedPhotoWhereInput[]
    userId?: StringFilter<"ProcessedPhoto"> | string
    attachedPhotoId?: StringFilter<"ProcessedPhoto"> | string
    filePath?: StringFilter<"ProcessedPhoto"> | string
    mimeType?: StringNullableFilter<"ProcessedPhoto"> | string | null
    createdAt?: DateTimeFilter<"ProcessedPhoto"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    source?: XOR<AttachedPhotoScalarRelationFilter, AttachedPhotoWhereInput>
    generatedImages?: GeneratedImageListRelationFilter
  }, "id">

  export type ProcessedPhotoOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    attachedPhotoId?: SortOrder
    filePath?: SortOrder
    mimeType?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ProcessedPhotoCountOrderByAggregateInput
    _max?: ProcessedPhotoMaxOrderByAggregateInput
    _min?: ProcessedPhotoMinOrderByAggregateInput
  }

  export type ProcessedPhotoScalarWhereWithAggregatesInput = {
    AND?: ProcessedPhotoScalarWhereWithAggregatesInput | ProcessedPhotoScalarWhereWithAggregatesInput[]
    OR?: ProcessedPhotoScalarWhereWithAggregatesInput[]
    NOT?: ProcessedPhotoScalarWhereWithAggregatesInput | ProcessedPhotoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProcessedPhoto"> | string
    userId?: StringWithAggregatesFilter<"ProcessedPhoto"> | string
    attachedPhotoId?: StringWithAggregatesFilter<"ProcessedPhoto"> | string
    filePath?: StringWithAggregatesFilter<"ProcessedPhoto"> | string
    mimeType?: StringNullableWithAggregatesFilter<"ProcessedPhoto"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ProcessedPhoto"> | Date | string
  }

  export type GeneratedImageWhereInput = {
    AND?: GeneratedImageWhereInput | GeneratedImageWhereInput[]
    OR?: GeneratedImageWhereInput[]
    NOT?: GeneratedImageWhereInput | GeneratedImageWhereInput[]
    id?: StringFilter<"GeneratedImage"> | string
    processedPhotoId?: StringFilter<"GeneratedImage"> | string
    provider?: StringFilter<"GeneratedImage"> | string
    templateLabel?: StringFilter<"GeneratedImage"> | string
    promptText?: StringFilter<"GeneratedImage"> | string
    metaJson?: StringNullableFilter<"GeneratedImage"> | string | null
    filePath?: StringFilter<"GeneratedImage"> | string
    createdAt?: DateTimeFilter<"GeneratedImage"> | Date | string
    processedPhoto?: XOR<ProcessedPhotoScalarRelationFilter, ProcessedPhotoWhereInput>
  }

  export type GeneratedImageOrderByWithRelationInput = {
    id?: SortOrder
    processedPhotoId?: SortOrder
    provider?: SortOrder
    templateLabel?: SortOrder
    promptText?: SortOrder
    metaJson?: SortOrderInput | SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    processedPhoto?: ProcessedPhotoOrderByWithRelationInput
  }

  export type GeneratedImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GeneratedImageWhereInput | GeneratedImageWhereInput[]
    OR?: GeneratedImageWhereInput[]
    NOT?: GeneratedImageWhereInput | GeneratedImageWhereInput[]
    processedPhotoId?: StringFilter<"GeneratedImage"> | string
    provider?: StringFilter<"GeneratedImage"> | string
    templateLabel?: StringFilter<"GeneratedImage"> | string
    promptText?: StringFilter<"GeneratedImage"> | string
    metaJson?: StringNullableFilter<"GeneratedImage"> | string | null
    filePath?: StringFilter<"GeneratedImage"> | string
    createdAt?: DateTimeFilter<"GeneratedImage"> | Date | string
    processedPhoto?: XOR<ProcessedPhotoScalarRelationFilter, ProcessedPhotoWhereInput>
  }, "id">

  export type GeneratedImageOrderByWithAggregationInput = {
    id?: SortOrder
    processedPhotoId?: SortOrder
    provider?: SortOrder
    templateLabel?: SortOrder
    promptText?: SortOrder
    metaJson?: SortOrderInput | SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    _count?: GeneratedImageCountOrderByAggregateInput
    _max?: GeneratedImageMaxOrderByAggregateInput
    _min?: GeneratedImageMinOrderByAggregateInput
  }

  export type GeneratedImageScalarWhereWithAggregatesInput = {
    AND?: GeneratedImageScalarWhereWithAggregatesInput | GeneratedImageScalarWhereWithAggregatesInput[]
    OR?: GeneratedImageScalarWhereWithAggregatesInput[]
    NOT?: GeneratedImageScalarWhereWithAggregatesInput | GeneratedImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GeneratedImage"> | string
    processedPhotoId?: StringWithAggregatesFilter<"GeneratedImage"> | string
    provider?: StringWithAggregatesFilter<"GeneratedImage"> | string
    templateLabel?: StringWithAggregatesFilter<"GeneratedImage"> | string
    promptText?: StringWithAggregatesFilter<"GeneratedImage"> | string
    metaJson?: StringNullableWithAggregatesFilter<"GeneratedImage"> | string | null
    filePath?: StringWithAggregatesFilter<"GeneratedImage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GeneratedImage"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    telegramId: string
    username?: string | null
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    photos?: AttachedPhotoCreateNestedManyWithoutUserInput
    processedPhotos?: ProcessedPhotoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    telegramId: string
    username?: string | null
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    photos?: AttachedPhotoUncheckedCreateNestedManyWithoutUserInput
    processedPhotos?: ProcessedPhotoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: AttachedPhotoUpdateManyWithoutUserNestedInput
    processedPhotos?: ProcessedPhotoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: AttachedPhotoUncheckedUpdateManyWithoutUserNestedInput
    processedPhotos?: ProcessedPhotoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    telegramId: string
    username?: string | null
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachedPhotoCreateInput = {
    id?: string
    telegramFileId: string
    filePath: string
    mimeType?: string | null
    width?: number | null
    height?: number | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPhotosInput
    processedPhotos?: ProcessedPhotoCreateNestedManyWithoutSourceInput
  }

  export type AttachedPhotoUncheckedCreateInput = {
    id?: string
    userId: string
    telegramFileId: string
    filePath: string
    mimeType?: string | null
    width?: number | null
    height?: number | null
    createdAt?: Date | string
    processedPhotos?: ProcessedPhotoUncheckedCreateNestedManyWithoutSourceInput
  }

  export type AttachedPhotoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramFileId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPhotosNestedInput
    processedPhotos?: ProcessedPhotoUpdateManyWithoutSourceNestedInput
  }

  export type AttachedPhotoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    telegramFileId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedPhotos?: ProcessedPhotoUncheckedUpdateManyWithoutSourceNestedInput
  }

  export type AttachedPhotoCreateManyInput = {
    id?: string
    userId: string
    telegramFileId: string
    filePath: string
    mimeType?: string | null
    width?: number | null
    height?: number | null
    createdAt?: Date | string
  }

  export type AttachedPhotoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramFileId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachedPhotoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    telegramFileId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcessedPhotoCreateInput = {
    id?: string
    filePath: string
    mimeType?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutProcessedPhotosInput
    source: AttachedPhotoCreateNestedOneWithoutProcessedPhotosInput
    generatedImages?: GeneratedImageCreateNestedManyWithoutProcessedPhotoInput
  }

  export type ProcessedPhotoUncheckedCreateInput = {
    id?: string
    userId: string
    attachedPhotoId: string
    filePath: string
    mimeType?: string | null
    createdAt?: Date | string
    generatedImages?: GeneratedImageUncheckedCreateNestedManyWithoutProcessedPhotoInput
  }

  export type ProcessedPhotoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProcessedPhotosNestedInput
    source?: AttachedPhotoUpdateOneRequiredWithoutProcessedPhotosNestedInput
    generatedImages?: GeneratedImageUpdateManyWithoutProcessedPhotoNestedInput
  }

  export type ProcessedPhotoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    attachedPhotoId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generatedImages?: GeneratedImageUncheckedUpdateManyWithoutProcessedPhotoNestedInput
  }

  export type ProcessedPhotoCreateManyInput = {
    id?: string
    userId: string
    attachedPhotoId: string
    filePath: string
    mimeType?: string | null
    createdAt?: Date | string
  }

  export type ProcessedPhotoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcessedPhotoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    attachedPhotoId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratedImageCreateInput = {
    id?: string
    provider: string
    templateLabel: string
    promptText: string
    metaJson?: string | null
    filePath: string
    createdAt?: Date | string
    processedPhoto: ProcessedPhotoCreateNestedOneWithoutGeneratedImagesInput
  }

  export type GeneratedImageUncheckedCreateInput = {
    id?: string
    processedPhotoId: string
    provider: string
    templateLabel: string
    promptText: string
    metaJson?: string | null
    filePath: string
    createdAt?: Date | string
  }

  export type GeneratedImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    templateLabel?: StringFieldUpdateOperationsInput | string
    promptText?: StringFieldUpdateOperationsInput | string
    metaJson?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedPhoto?: ProcessedPhotoUpdateOneRequiredWithoutGeneratedImagesNestedInput
  }

  export type GeneratedImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    processedPhotoId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    templateLabel?: StringFieldUpdateOperationsInput | string
    promptText?: StringFieldUpdateOperationsInput | string
    metaJson?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratedImageCreateManyInput = {
    id?: string
    processedPhotoId: string
    provider: string
    templateLabel: string
    promptText: string
    metaJson?: string | null
    filePath: string
    createdAt?: Date | string
  }

  export type GeneratedImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    templateLabel?: StringFieldUpdateOperationsInput | string
    promptText?: StringFieldUpdateOperationsInput | string
    metaJson?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratedImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    processedPhotoId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    templateLabel?: StringFieldUpdateOperationsInput | string
    promptText?: StringFieldUpdateOperationsInput | string
    metaJson?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AttachedPhotoListRelationFilter = {
    every?: AttachedPhotoWhereInput
    some?: AttachedPhotoWhereInput
    none?: AttachedPhotoWhereInput
  }

  export type ProcessedPhotoListRelationFilter = {
    every?: ProcessedPhotoWhereInput
    some?: ProcessedPhotoWhereInput
    none?: ProcessedPhotoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AttachedPhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProcessedPhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    telegramId?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    telegramId?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    telegramId?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AttachedPhotoCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    telegramFileId?: SortOrder
    filePath?: SortOrder
    mimeType?: SortOrder
    width?: SortOrder
    height?: SortOrder
    createdAt?: SortOrder
  }

  export type AttachedPhotoAvgOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
  }

  export type AttachedPhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    telegramFileId?: SortOrder
    filePath?: SortOrder
    mimeType?: SortOrder
    width?: SortOrder
    height?: SortOrder
    createdAt?: SortOrder
  }

  export type AttachedPhotoMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    telegramFileId?: SortOrder
    filePath?: SortOrder
    mimeType?: SortOrder
    width?: SortOrder
    height?: SortOrder
    createdAt?: SortOrder
  }

  export type AttachedPhotoSumOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
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

  export type AttachedPhotoScalarRelationFilter = {
    is?: AttachedPhotoWhereInput
    isNot?: AttachedPhotoWhereInput
  }

  export type GeneratedImageListRelationFilter = {
    every?: GeneratedImageWhereInput
    some?: GeneratedImageWhereInput
    none?: GeneratedImageWhereInput
  }

  export type GeneratedImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProcessedPhotoCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    attachedPhotoId?: SortOrder
    filePath?: SortOrder
    mimeType?: SortOrder
    createdAt?: SortOrder
  }

  export type ProcessedPhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    attachedPhotoId?: SortOrder
    filePath?: SortOrder
    mimeType?: SortOrder
    createdAt?: SortOrder
  }

  export type ProcessedPhotoMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    attachedPhotoId?: SortOrder
    filePath?: SortOrder
    mimeType?: SortOrder
    createdAt?: SortOrder
  }

  export type ProcessedPhotoScalarRelationFilter = {
    is?: ProcessedPhotoWhereInput
    isNot?: ProcessedPhotoWhereInput
  }

  export type GeneratedImageCountOrderByAggregateInput = {
    id?: SortOrder
    processedPhotoId?: SortOrder
    provider?: SortOrder
    templateLabel?: SortOrder
    promptText?: SortOrder
    metaJson?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
  }

  export type GeneratedImageMaxOrderByAggregateInput = {
    id?: SortOrder
    processedPhotoId?: SortOrder
    provider?: SortOrder
    templateLabel?: SortOrder
    promptText?: SortOrder
    metaJson?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
  }

  export type GeneratedImageMinOrderByAggregateInput = {
    id?: SortOrder
    processedPhotoId?: SortOrder
    provider?: SortOrder
    templateLabel?: SortOrder
    promptText?: SortOrder
    metaJson?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
  }

  export type AttachedPhotoCreateNestedManyWithoutUserInput = {
    create?: XOR<AttachedPhotoCreateWithoutUserInput, AttachedPhotoUncheckedCreateWithoutUserInput> | AttachedPhotoCreateWithoutUserInput[] | AttachedPhotoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttachedPhotoCreateOrConnectWithoutUserInput | AttachedPhotoCreateOrConnectWithoutUserInput[]
    createMany?: AttachedPhotoCreateManyUserInputEnvelope
    connect?: AttachedPhotoWhereUniqueInput | AttachedPhotoWhereUniqueInput[]
  }

  export type ProcessedPhotoCreateNestedManyWithoutUserInput = {
    create?: XOR<ProcessedPhotoCreateWithoutUserInput, ProcessedPhotoUncheckedCreateWithoutUserInput> | ProcessedPhotoCreateWithoutUserInput[] | ProcessedPhotoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProcessedPhotoCreateOrConnectWithoutUserInput | ProcessedPhotoCreateOrConnectWithoutUserInput[]
    createMany?: ProcessedPhotoCreateManyUserInputEnvelope
    connect?: ProcessedPhotoWhereUniqueInput | ProcessedPhotoWhereUniqueInput[]
  }

  export type AttachedPhotoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AttachedPhotoCreateWithoutUserInput, AttachedPhotoUncheckedCreateWithoutUserInput> | AttachedPhotoCreateWithoutUserInput[] | AttachedPhotoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttachedPhotoCreateOrConnectWithoutUserInput | AttachedPhotoCreateOrConnectWithoutUserInput[]
    createMany?: AttachedPhotoCreateManyUserInputEnvelope
    connect?: AttachedPhotoWhereUniqueInput | AttachedPhotoWhereUniqueInput[]
  }

  export type ProcessedPhotoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProcessedPhotoCreateWithoutUserInput, ProcessedPhotoUncheckedCreateWithoutUserInput> | ProcessedPhotoCreateWithoutUserInput[] | ProcessedPhotoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProcessedPhotoCreateOrConnectWithoutUserInput | ProcessedPhotoCreateOrConnectWithoutUserInput[]
    createMany?: ProcessedPhotoCreateManyUserInputEnvelope
    connect?: ProcessedPhotoWhereUniqueInput | ProcessedPhotoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AttachedPhotoUpdateManyWithoutUserNestedInput = {
    create?: XOR<AttachedPhotoCreateWithoutUserInput, AttachedPhotoUncheckedCreateWithoutUserInput> | AttachedPhotoCreateWithoutUserInput[] | AttachedPhotoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttachedPhotoCreateOrConnectWithoutUserInput | AttachedPhotoCreateOrConnectWithoutUserInput[]
    upsert?: AttachedPhotoUpsertWithWhereUniqueWithoutUserInput | AttachedPhotoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AttachedPhotoCreateManyUserInputEnvelope
    set?: AttachedPhotoWhereUniqueInput | AttachedPhotoWhereUniqueInput[]
    disconnect?: AttachedPhotoWhereUniqueInput | AttachedPhotoWhereUniqueInput[]
    delete?: AttachedPhotoWhereUniqueInput | AttachedPhotoWhereUniqueInput[]
    connect?: AttachedPhotoWhereUniqueInput | AttachedPhotoWhereUniqueInput[]
    update?: AttachedPhotoUpdateWithWhereUniqueWithoutUserInput | AttachedPhotoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AttachedPhotoUpdateManyWithWhereWithoutUserInput | AttachedPhotoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AttachedPhotoScalarWhereInput | AttachedPhotoScalarWhereInput[]
  }

  export type ProcessedPhotoUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProcessedPhotoCreateWithoutUserInput, ProcessedPhotoUncheckedCreateWithoutUserInput> | ProcessedPhotoCreateWithoutUserInput[] | ProcessedPhotoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProcessedPhotoCreateOrConnectWithoutUserInput | ProcessedPhotoCreateOrConnectWithoutUserInput[]
    upsert?: ProcessedPhotoUpsertWithWhereUniqueWithoutUserInput | ProcessedPhotoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProcessedPhotoCreateManyUserInputEnvelope
    set?: ProcessedPhotoWhereUniqueInput | ProcessedPhotoWhereUniqueInput[]
    disconnect?: ProcessedPhotoWhereUniqueInput | ProcessedPhotoWhereUniqueInput[]
    delete?: ProcessedPhotoWhereUniqueInput | ProcessedPhotoWhereUniqueInput[]
    connect?: ProcessedPhotoWhereUniqueInput | ProcessedPhotoWhereUniqueInput[]
    update?: ProcessedPhotoUpdateWithWhereUniqueWithoutUserInput | ProcessedPhotoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProcessedPhotoUpdateManyWithWhereWithoutUserInput | ProcessedPhotoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProcessedPhotoScalarWhereInput | ProcessedPhotoScalarWhereInput[]
  }

  export type AttachedPhotoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AttachedPhotoCreateWithoutUserInput, AttachedPhotoUncheckedCreateWithoutUserInput> | AttachedPhotoCreateWithoutUserInput[] | AttachedPhotoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttachedPhotoCreateOrConnectWithoutUserInput | AttachedPhotoCreateOrConnectWithoutUserInput[]
    upsert?: AttachedPhotoUpsertWithWhereUniqueWithoutUserInput | AttachedPhotoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AttachedPhotoCreateManyUserInputEnvelope
    set?: AttachedPhotoWhereUniqueInput | AttachedPhotoWhereUniqueInput[]
    disconnect?: AttachedPhotoWhereUniqueInput | AttachedPhotoWhereUniqueInput[]
    delete?: AttachedPhotoWhereUniqueInput | AttachedPhotoWhereUniqueInput[]
    connect?: AttachedPhotoWhereUniqueInput | AttachedPhotoWhereUniqueInput[]
    update?: AttachedPhotoUpdateWithWhereUniqueWithoutUserInput | AttachedPhotoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AttachedPhotoUpdateManyWithWhereWithoutUserInput | AttachedPhotoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AttachedPhotoScalarWhereInput | AttachedPhotoScalarWhereInput[]
  }

  export type ProcessedPhotoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProcessedPhotoCreateWithoutUserInput, ProcessedPhotoUncheckedCreateWithoutUserInput> | ProcessedPhotoCreateWithoutUserInput[] | ProcessedPhotoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProcessedPhotoCreateOrConnectWithoutUserInput | ProcessedPhotoCreateOrConnectWithoutUserInput[]
    upsert?: ProcessedPhotoUpsertWithWhereUniqueWithoutUserInput | ProcessedPhotoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProcessedPhotoCreateManyUserInputEnvelope
    set?: ProcessedPhotoWhereUniqueInput | ProcessedPhotoWhereUniqueInput[]
    disconnect?: ProcessedPhotoWhereUniqueInput | ProcessedPhotoWhereUniqueInput[]
    delete?: ProcessedPhotoWhereUniqueInput | ProcessedPhotoWhereUniqueInput[]
    connect?: ProcessedPhotoWhereUniqueInput | ProcessedPhotoWhereUniqueInput[]
    update?: ProcessedPhotoUpdateWithWhereUniqueWithoutUserInput | ProcessedPhotoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProcessedPhotoUpdateManyWithWhereWithoutUserInput | ProcessedPhotoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProcessedPhotoScalarWhereInput | ProcessedPhotoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPhotosInput = {
    create?: XOR<UserCreateWithoutPhotosInput, UserUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: UserCreateOrConnectWithoutPhotosInput
    connect?: UserWhereUniqueInput
  }

  export type ProcessedPhotoCreateNestedManyWithoutSourceInput = {
    create?: XOR<ProcessedPhotoCreateWithoutSourceInput, ProcessedPhotoUncheckedCreateWithoutSourceInput> | ProcessedPhotoCreateWithoutSourceInput[] | ProcessedPhotoUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: ProcessedPhotoCreateOrConnectWithoutSourceInput | ProcessedPhotoCreateOrConnectWithoutSourceInput[]
    createMany?: ProcessedPhotoCreateManySourceInputEnvelope
    connect?: ProcessedPhotoWhereUniqueInput | ProcessedPhotoWhereUniqueInput[]
  }

  export type ProcessedPhotoUncheckedCreateNestedManyWithoutSourceInput = {
    create?: XOR<ProcessedPhotoCreateWithoutSourceInput, ProcessedPhotoUncheckedCreateWithoutSourceInput> | ProcessedPhotoCreateWithoutSourceInput[] | ProcessedPhotoUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: ProcessedPhotoCreateOrConnectWithoutSourceInput | ProcessedPhotoCreateOrConnectWithoutSourceInput[]
    createMany?: ProcessedPhotoCreateManySourceInputEnvelope
    connect?: ProcessedPhotoWhereUniqueInput | ProcessedPhotoWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutPhotosNestedInput = {
    create?: XOR<UserCreateWithoutPhotosInput, UserUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: UserCreateOrConnectWithoutPhotosInput
    upsert?: UserUpsertWithoutPhotosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPhotosInput, UserUpdateWithoutPhotosInput>, UserUncheckedUpdateWithoutPhotosInput>
  }

  export type ProcessedPhotoUpdateManyWithoutSourceNestedInput = {
    create?: XOR<ProcessedPhotoCreateWithoutSourceInput, ProcessedPhotoUncheckedCreateWithoutSourceInput> | ProcessedPhotoCreateWithoutSourceInput[] | ProcessedPhotoUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: ProcessedPhotoCreateOrConnectWithoutSourceInput | ProcessedPhotoCreateOrConnectWithoutSourceInput[]
    upsert?: ProcessedPhotoUpsertWithWhereUniqueWithoutSourceInput | ProcessedPhotoUpsertWithWhereUniqueWithoutSourceInput[]
    createMany?: ProcessedPhotoCreateManySourceInputEnvelope
    set?: ProcessedPhotoWhereUniqueInput | ProcessedPhotoWhereUniqueInput[]
    disconnect?: ProcessedPhotoWhereUniqueInput | ProcessedPhotoWhereUniqueInput[]
    delete?: ProcessedPhotoWhereUniqueInput | ProcessedPhotoWhereUniqueInput[]
    connect?: ProcessedPhotoWhereUniqueInput | ProcessedPhotoWhereUniqueInput[]
    update?: ProcessedPhotoUpdateWithWhereUniqueWithoutSourceInput | ProcessedPhotoUpdateWithWhereUniqueWithoutSourceInput[]
    updateMany?: ProcessedPhotoUpdateManyWithWhereWithoutSourceInput | ProcessedPhotoUpdateManyWithWhereWithoutSourceInput[]
    deleteMany?: ProcessedPhotoScalarWhereInput | ProcessedPhotoScalarWhereInput[]
  }

  export type ProcessedPhotoUncheckedUpdateManyWithoutSourceNestedInput = {
    create?: XOR<ProcessedPhotoCreateWithoutSourceInput, ProcessedPhotoUncheckedCreateWithoutSourceInput> | ProcessedPhotoCreateWithoutSourceInput[] | ProcessedPhotoUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: ProcessedPhotoCreateOrConnectWithoutSourceInput | ProcessedPhotoCreateOrConnectWithoutSourceInput[]
    upsert?: ProcessedPhotoUpsertWithWhereUniqueWithoutSourceInput | ProcessedPhotoUpsertWithWhereUniqueWithoutSourceInput[]
    createMany?: ProcessedPhotoCreateManySourceInputEnvelope
    set?: ProcessedPhotoWhereUniqueInput | ProcessedPhotoWhereUniqueInput[]
    disconnect?: ProcessedPhotoWhereUniqueInput | ProcessedPhotoWhereUniqueInput[]
    delete?: ProcessedPhotoWhereUniqueInput | ProcessedPhotoWhereUniqueInput[]
    connect?: ProcessedPhotoWhereUniqueInput | ProcessedPhotoWhereUniqueInput[]
    update?: ProcessedPhotoUpdateWithWhereUniqueWithoutSourceInput | ProcessedPhotoUpdateWithWhereUniqueWithoutSourceInput[]
    updateMany?: ProcessedPhotoUpdateManyWithWhereWithoutSourceInput | ProcessedPhotoUpdateManyWithWhereWithoutSourceInput[]
    deleteMany?: ProcessedPhotoScalarWhereInput | ProcessedPhotoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProcessedPhotosInput = {
    create?: XOR<UserCreateWithoutProcessedPhotosInput, UserUncheckedCreateWithoutProcessedPhotosInput>
    connectOrCreate?: UserCreateOrConnectWithoutProcessedPhotosInput
    connect?: UserWhereUniqueInput
  }

  export type AttachedPhotoCreateNestedOneWithoutProcessedPhotosInput = {
    create?: XOR<AttachedPhotoCreateWithoutProcessedPhotosInput, AttachedPhotoUncheckedCreateWithoutProcessedPhotosInput>
    connectOrCreate?: AttachedPhotoCreateOrConnectWithoutProcessedPhotosInput
    connect?: AttachedPhotoWhereUniqueInput
  }

  export type GeneratedImageCreateNestedManyWithoutProcessedPhotoInput = {
    create?: XOR<GeneratedImageCreateWithoutProcessedPhotoInput, GeneratedImageUncheckedCreateWithoutProcessedPhotoInput> | GeneratedImageCreateWithoutProcessedPhotoInput[] | GeneratedImageUncheckedCreateWithoutProcessedPhotoInput[]
    connectOrCreate?: GeneratedImageCreateOrConnectWithoutProcessedPhotoInput | GeneratedImageCreateOrConnectWithoutProcessedPhotoInput[]
    createMany?: GeneratedImageCreateManyProcessedPhotoInputEnvelope
    connect?: GeneratedImageWhereUniqueInput | GeneratedImageWhereUniqueInput[]
  }

  export type GeneratedImageUncheckedCreateNestedManyWithoutProcessedPhotoInput = {
    create?: XOR<GeneratedImageCreateWithoutProcessedPhotoInput, GeneratedImageUncheckedCreateWithoutProcessedPhotoInput> | GeneratedImageCreateWithoutProcessedPhotoInput[] | GeneratedImageUncheckedCreateWithoutProcessedPhotoInput[]
    connectOrCreate?: GeneratedImageCreateOrConnectWithoutProcessedPhotoInput | GeneratedImageCreateOrConnectWithoutProcessedPhotoInput[]
    createMany?: GeneratedImageCreateManyProcessedPhotoInputEnvelope
    connect?: GeneratedImageWhereUniqueInput | GeneratedImageWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutProcessedPhotosNestedInput = {
    create?: XOR<UserCreateWithoutProcessedPhotosInput, UserUncheckedCreateWithoutProcessedPhotosInput>
    connectOrCreate?: UserCreateOrConnectWithoutProcessedPhotosInput
    upsert?: UserUpsertWithoutProcessedPhotosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProcessedPhotosInput, UserUpdateWithoutProcessedPhotosInput>, UserUncheckedUpdateWithoutProcessedPhotosInput>
  }

  export type AttachedPhotoUpdateOneRequiredWithoutProcessedPhotosNestedInput = {
    create?: XOR<AttachedPhotoCreateWithoutProcessedPhotosInput, AttachedPhotoUncheckedCreateWithoutProcessedPhotosInput>
    connectOrCreate?: AttachedPhotoCreateOrConnectWithoutProcessedPhotosInput
    upsert?: AttachedPhotoUpsertWithoutProcessedPhotosInput
    connect?: AttachedPhotoWhereUniqueInput
    update?: XOR<XOR<AttachedPhotoUpdateToOneWithWhereWithoutProcessedPhotosInput, AttachedPhotoUpdateWithoutProcessedPhotosInput>, AttachedPhotoUncheckedUpdateWithoutProcessedPhotosInput>
  }

  export type GeneratedImageUpdateManyWithoutProcessedPhotoNestedInput = {
    create?: XOR<GeneratedImageCreateWithoutProcessedPhotoInput, GeneratedImageUncheckedCreateWithoutProcessedPhotoInput> | GeneratedImageCreateWithoutProcessedPhotoInput[] | GeneratedImageUncheckedCreateWithoutProcessedPhotoInput[]
    connectOrCreate?: GeneratedImageCreateOrConnectWithoutProcessedPhotoInput | GeneratedImageCreateOrConnectWithoutProcessedPhotoInput[]
    upsert?: GeneratedImageUpsertWithWhereUniqueWithoutProcessedPhotoInput | GeneratedImageUpsertWithWhereUniqueWithoutProcessedPhotoInput[]
    createMany?: GeneratedImageCreateManyProcessedPhotoInputEnvelope
    set?: GeneratedImageWhereUniqueInput | GeneratedImageWhereUniqueInput[]
    disconnect?: GeneratedImageWhereUniqueInput | GeneratedImageWhereUniqueInput[]
    delete?: GeneratedImageWhereUniqueInput | GeneratedImageWhereUniqueInput[]
    connect?: GeneratedImageWhereUniqueInput | GeneratedImageWhereUniqueInput[]
    update?: GeneratedImageUpdateWithWhereUniqueWithoutProcessedPhotoInput | GeneratedImageUpdateWithWhereUniqueWithoutProcessedPhotoInput[]
    updateMany?: GeneratedImageUpdateManyWithWhereWithoutProcessedPhotoInput | GeneratedImageUpdateManyWithWhereWithoutProcessedPhotoInput[]
    deleteMany?: GeneratedImageScalarWhereInput | GeneratedImageScalarWhereInput[]
  }

  export type GeneratedImageUncheckedUpdateManyWithoutProcessedPhotoNestedInput = {
    create?: XOR<GeneratedImageCreateWithoutProcessedPhotoInput, GeneratedImageUncheckedCreateWithoutProcessedPhotoInput> | GeneratedImageCreateWithoutProcessedPhotoInput[] | GeneratedImageUncheckedCreateWithoutProcessedPhotoInput[]
    connectOrCreate?: GeneratedImageCreateOrConnectWithoutProcessedPhotoInput | GeneratedImageCreateOrConnectWithoutProcessedPhotoInput[]
    upsert?: GeneratedImageUpsertWithWhereUniqueWithoutProcessedPhotoInput | GeneratedImageUpsertWithWhereUniqueWithoutProcessedPhotoInput[]
    createMany?: GeneratedImageCreateManyProcessedPhotoInputEnvelope
    set?: GeneratedImageWhereUniqueInput | GeneratedImageWhereUniqueInput[]
    disconnect?: GeneratedImageWhereUniqueInput | GeneratedImageWhereUniqueInput[]
    delete?: GeneratedImageWhereUniqueInput | GeneratedImageWhereUniqueInput[]
    connect?: GeneratedImageWhereUniqueInput | GeneratedImageWhereUniqueInput[]
    update?: GeneratedImageUpdateWithWhereUniqueWithoutProcessedPhotoInput | GeneratedImageUpdateWithWhereUniqueWithoutProcessedPhotoInput[]
    updateMany?: GeneratedImageUpdateManyWithWhereWithoutProcessedPhotoInput | GeneratedImageUpdateManyWithWhereWithoutProcessedPhotoInput[]
    deleteMany?: GeneratedImageScalarWhereInput | GeneratedImageScalarWhereInput[]
  }

  export type ProcessedPhotoCreateNestedOneWithoutGeneratedImagesInput = {
    create?: XOR<ProcessedPhotoCreateWithoutGeneratedImagesInput, ProcessedPhotoUncheckedCreateWithoutGeneratedImagesInput>
    connectOrCreate?: ProcessedPhotoCreateOrConnectWithoutGeneratedImagesInput
    connect?: ProcessedPhotoWhereUniqueInput
  }

  export type ProcessedPhotoUpdateOneRequiredWithoutGeneratedImagesNestedInput = {
    create?: XOR<ProcessedPhotoCreateWithoutGeneratedImagesInput, ProcessedPhotoUncheckedCreateWithoutGeneratedImagesInput>
    connectOrCreate?: ProcessedPhotoCreateOrConnectWithoutGeneratedImagesInput
    upsert?: ProcessedPhotoUpsertWithoutGeneratedImagesInput
    connect?: ProcessedPhotoWhereUniqueInput
    update?: XOR<XOR<ProcessedPhotoUpdateToOneWithWhereWithoutGeneratedImagesInput, ProcessedPhotoUpdateWithoutGeneratedImagesInput>, ProcessedPhotoUncheckedUpdateWithoutGeneratedImagesInput>
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
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type AttachedPhotoCreateWithoutUserInput = {
    id?: string
    telegramFileId: string
    filePath: string
    mimeType?: string | null
    width?: number | null
    height?: number | null
    createdAt?: Date | string
    processedPhotos?: ProcessedPhotoCreateNestedManyWithoutSourceInput
  }

  export type AttachedPhotoUncheckedCreateWithoutUserInput = {
    id?: string
    telegramFileId: string
    filePath: string
    mimeType?: string | null
    width?: number | null
    height?: number | null
    createdAt?: Date | string
    processedPhotos?: ProcessedPhotoUncheckedCreateNestedManyWithoutSourceInput
  }

  export type AttachedPhotoCreateOrConnectWithoutUserInput = {
    where: AttachedPhotoWhereUniqueInput
    create: XOR<AttachedPhotoCreateWithoutUserInput, AttachedPhotoUncheckedCreateWithoutUserInput>
  }

  export type AttachedPhotoCreateManyUserInputEnvelope = {
    data: AttachedPhotoCreateManyUserInput | AttachedPhotoCreateManyUserInput[]
  }

  export type ProcessedPhotoCreateWithoutUserInput = {
    id?: string
    filePath: string
    mimeType?: string | null
    createdAt?: Date | string
    source: AttachedPhotoCreateNestedOneWithoutProcessedPhotosInput
    generatedImages?: GeneratedImageCreateNestedManyWithoutProcessedPhotoInput
  }

  export type ProcessedPhotoUncheckedCreateWithoutUserInput = {
    id?: string
    attachedPhotoId: string
    filePath: string
    mimeType?: string | null
    createdAt?: Date | string
    generatedImages?: GeneratedImageUncheckedCreateNestedManyWithoutProcessedPhotoInput
  }

  export type ProcessedPhotoCreateOrConnectWithoutUserInput = {
    where: ProcessedPhotoWhereUniqueInput
    create: XOR<ProcessedPhotoCreateWithoutUserInput, ProcessedPhotoUncheckedCreateWithoutUserInput>
  }

  export type ProcessedPhotoCreateManyUserInputEnvelope = {
    data: ProcessedPhotoCreateManyUserInput | ProcessedPhotoCreateManyUserInput[]
  }

  export type AttachedPhotoUpsertWithWhereUniqueWithoutUserInput = {
    where: AttachedPhotoWhereUniqueInput
    update: XOR<AttachedPhotoUpdateWithoutUserInput, AttachedPhotoUncheckedUpdateWithoutUserInput>
    create: XOR<AttachedPhotoCreateWithoutUserInput, AttachedPhotoUncheckedCreateWithoutUserInput>
  }

  export type AttachedPhotoUpdateWithWhereUniqueWithoutUserInput = {
    where: AttachedPhotoWhereUniqueInput
    data: XOR<AttachedPhotoUpdateWithoutUserInput, AttachedPhotoUncheckedUpdateWithoutUserInput>
  }

  export type AttachedPhotoUpdateManyWithWhereWithoutUserInput = {
    where: AttachedPhotoScalarWhereInput
    data: XOR<AttachedPhotoUpdateManyMutationInput, AttachedPhotoUncheckedUpdateManyWithoutUserInput>
  }

  export type AttachedPhotoScalarWhereInput = {
    AND?: AttachedPhotoScalarWhereInput | AttachedPhotoScalarWhereInput[]
    OR?: AttachedPhotoScalarWhereInput[]
    NOT?: AttachedPhotoScalarWhereInput | AttachedPhotoScalarWhereInput[]
    id?: StringFilter<"AttachedPhoto"> | string
    userId?: StringFilter<"AttachedPhoto"> | string
    telegramFileId?: StringFilter<"AttachedPhoto"> | string
    filePath?: StringFilter<"AttachedPhoto"> | string
    mimeType?: StringNullableFilter<"AttachedPhoto"> | string | null
    width?: IntNullableFilter<"AttachedPhoto"> | number | null
    height?: IntNullableFilter<"AttachedPhoto"> | number | null
    createdAt?: DateTimeFilter<"AttachedPhoto"> | Date | string
  }

  export type ProcessedPhotoUpsertWithWhereUniqueWithoutUserInput = {
    where: ProcessedPhotoWhereUniqueInput
    update: XOR<ProcessedPhotoUpdateWithoutUserInput, ProcessedPhotoUncheckedUpdateWithoutUserInput>
    create: XOR<ProcessedPhotoCreateWithoutUserInput, ProcessedPhotoUncheckedCreateWithoutUserInput>
  }

  export type ProcessedPhotoUpdateWithWhereUniqueWithoutUserInput = {
    where: ProcessedPhotoWhereUniqueInput
    data: XOR<ProcessedPhotoUpdateWithoutUserInput, ProcessedPhotoUncheckedUpdateWithoutUserInput>
  }

  export type ProcessedPhotoUpdateManyWithWhereWithoutUserInput = {
    where: ProcessedPhotoScalarWhereInput
    data: XOR<ProcessedPhotoUpdateManyMutationInput, ProcessedPhotoUncheckedUpdateManyWithoutUserInput>
  }

  export type ProcessedPhotoScalarWhereInput = {
    AND?: ProcessedPhotoScalarWhereInput | ProcessedPhotoScalarWhereInput[]
    OR?: ProcessedPhotoScalarWhereInput[]
    NOT?: ProcessedPhotoScalarWhereInput | ProcessedPhotoScalarWhereInput[]
    id?: StringFilter<"ProcessedPhoto"> | string
    userId?: StringFilter<"ProcessedPhoto"> | string
    attachedPhotoId?: StringFilter<"ProcessedPhoto"> | string
    filePath?: StringFilter<"ProcessedPhoto"> | string
    mimeType?: StringNullableFilter<"ProcessedPhoto"> | string | null
    createdAt?: DateTimeFilter<"ProcessedPhoto"> | Date | string
  }

  export type UserCreateWithoutPhotosInput = {
    id?: string
    telegramId: string
    username?: string | null
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    processedPhotos?: ProcessedPhotoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPhotosInput = {
    id?: string
    telegramId: string
    username?: string | null
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    processedPhotos?: ProcessedPhotoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPhotosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPhotosInput, UserUncheckedCreateWithoutPhotosInput>
  }

  export type ProcessedPhotoCreateWithoutSourceInput = {
    id?: string
    filePath: string
    mimeType?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutProcessedPhotosInput
    generatedImages?: GeneratedImageCreateNestedManyWithoutProcessedPhotoInput
  }

  export type ProcessedPhotoUncheckedCreateWithoutSourceInput = {
    id?: string
    userId: string
    filePath: string
    mimeType?: string | null
    createdAt?: Date | string
    generatedImages?: GeneratedImageUncheckedCreateNestedManyWithoutProcessedPhotoInput
  }

  export type ProcessedPhotoCreateOrConnectWithoutSourceInput = {
    where: ProcessedPhotoWhereUniqueInput
    create: XOR<ProcessedPhotoCreateWithoutSourceInput, ProcessedPhotoUncheckedCreateWithoutSourceInput>
  }

  export type ProcessedPhotoCreateManySourceInputEnvelope = {
    data: ProcessedPhotoCreateManySourceInput | ProcessedPhotoCreateManySourceInput[]
  }

  export type UserUpsertWithoutPhotosInput = {
    update: XOR<UserUpdateWithoutPhotosInput, UserUncheckedUpdateWithoutPhotosInput>
    create: XOR<UserCreateWithoutPhotosInput, UserUncheckedCreateWithoutPhotosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPhotosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPhotosInput, UserUncheckedUpdateWithoutPhotosInput>
  }

  export type UserUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedPhotos?: ProcessedPhotoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedPhotos?: ProcessedPhotoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProcessedPhotoUpsertWithWhereUniqueWithoutSourceInput = {
    where: ProcessedPhotoWhereUniqueInput
    update: XOR<ProcessedPhotoUpdateWithoutSourceInput, ProcessedPhotoUncheckedUpdateWithoutSourceInput>
    create: XOR<ProcessedPhotoCreateWithoutSourceInput, ProcessedPhotoUncheckedCreateWithoutSourceInput>
  }

  export type ProcessedPhotoUpdateWithWhereUniqueWithoutSourceInput = {
    where: ProcessedPhotoWhereUniqueInput
    data: XOR<ProcessedPhotoUpdateWithoutSourceInput, ProcessedPhotoUncheckedUpdateWithoutSourceInput>
  }

  export type ProcessedPhotoUpdateManyWithWhereWithoutSourceInput = {
    where: ProcessedPhotoScalarWhereInput
    data: XOR<ProcessedPhotoUpdateManyMutationInput, ProcessedPhotoUncheckedUpdateManyWithoutSourceInput>
  }

  export type UserCreateWithoutProcessedPhotosInput = {
    id?: string
    telegramId: string
    username?: string | null
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    photos?: AttachedPhotoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProcessedPhotosInput = {
    id?: string
    telegramId: string
    username?: string | null
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    photos?: AttachedPhotoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProcessedPhotosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProcessedPhotosInput, UserUncheckedCreateWithoutProcessedPhotosInput>
  }

  export type AttachedPhotoCreateWithoutProcessedPhotosInput = {
    id?: string
    telegramFileId: string
    filePath: string
    mimeType?: string | null
    width?: number | null
    height?: number | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPhotosInput
  }

  export type AttachedPhotoUncheckedCreateWithoutProcessedPhotosInput = {
    id?: string
    userId: string
    telegramFileId: string
    filePath: string
    mimeType?: string | null
    width?: number | null
    height?: number | null
    createdAt?: Date | string
  }

  export type AttachedPhotoCreateOrConnectWithoutProcessedPhotosInput = {
    where: AttachedPhotoWhereUniqueInput
    create: XOR<AttachedPhotoCreateWithoutProcessedPhotosInput, AttachedPhotoUncheckedCreateWithoutProcessedPhotosInput>
  }

  export type GeneratedImageCreateWithoutProcessedPhotoInput = {
    id?: string
    provider: string
    templateLabel: string
    promptText: string
    metaJson?: string | null
    filePath: string
    createdAt?: Date | string
  }

  export type GeneratedImageUncheckedCreateWithoutProcessedPhotoInput = {
    id?: string
    provider: string
    templateLabel: string
    promptText: string
    metaJson?: string | null
    filePath: string
    createdAt?: Date | string
  }

  export type GeneratedImageCreateOrConnectWithoutProcessedPhotoInput = {
    where: GeneratedImageWhereUniqueInput
    create: XOR<GeneratedImageCreateWithoutProcessedPhotoInput, GeneratedImageUncheckedCreateWithoutProcessedPhotoInput>
  }

  export type GeneratedImageCreateManyProcessedPhotoInputEnvelope = {
    data: GeneratedImageCreateManyProcessedPhotoInput | GeneratedImageCreateManyProcessedPhotoInput[]
  }

  export type UserUpsertWithoutProcessedPhotosInput = {
    update: XOR<UserUpdateWithoutProcessedPhotosInput, UserUncheckedUpdateWithoutProcessedPhotosInput>
    create: XOR<UserCreateWithoutProcessedPhotosInput, UserUncheckedCreateWithoutProcessedPhotosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProcessedPhotosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProcessedPhotosInput, UserUncheckedUpdateWithoutProcessedPhotosInput>
  }

  export type UserUpdateWithoutProcessedPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: AttachedPhotoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProcessedPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: AttachedPhotoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AttachedPhotoUpsertWithoutProcessedPhotosInput = {
    update: XOR<AttachedPhotoUpdateWithoutProcessedPhotosInput, AttachedPhotoUncheckedUpdateWithoutProcessedPhotosInput>
    create: XOR<AttachedPhotoCreateWithoutProcessedPhotosInput, AttachedPhotoUncheckedCreateWithoutProcessedPhotosInput>
    where?: AttachedPhotoWhereInput
  }

  export type AttachedPhotoUpdateToOneWithWhereWithoutProcessedPhotosInput = {
    where?: AttachedPhotoWhereInput
    data: XOR<AttachedPhotoUpdateWithoutProcessedPhotosInput, AttachedPhotoUncheckedUpdateWithoutProcessedPhotosInput>
  }

  export type AttachedPhotoUpdateWithoutProcessedPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramFileId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPhotosNestedInput
  }

  export type AttachedPhotoUncheckedUpdateWithoutProcessedPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    telegramFileId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratedImageUpsertWithWhereUniqueWithoutProcessedPhotoInput = {
    where: GeneratedImageWhereUniqueInput
    update: XOR<GeneratedImageUpdateWithoutProcessedPhotoInput, GeneratedImageUncheckedUpdateWithoutProcessedPhotoInput>
    create: XOR<GeneratedImageCreateWithoutProcessedPhotoInput, GeneratedImageUncheckedCreateWithoutProcessedPhotoInput>
  }

  export type GeneratedImageUpdateWithWhereUniqueWithoutProcessedPhotoInput = {
    where: GeneratedImageWhereUniqueInput
    data: XOR<GeneratedImageUpdateWithoutProcessedPhotoInput, GeneratedImageUncheckedUpdateWithoutProcessedPhotoInput>
  }

  export type GeneratedImageUpdateManyWithWhereWithoutProcessedPhotoInput = {
    where: GeneratedImageScalarWhereInput
    data: XOR<GeneratedImageUpdateManyMutationInput, GeneratedImageUncheckedUpdateManyWithoutProcessedPhotoInput>
  }

  export type GeneratedImageScalarWhereInput = {
    AND?: GeneratedImageScalarWhereInput | GeneratedImageScalarWhereInput[]
    OR?: GeneratedImageScalarWhereInput[]
    NOT?: GeneratedImageScalarWhereInput | GeneratedImageScalarWhereInput[]
    id?: StringFilter<"GeneratedImage"> | string
    processedPhotoId?: StringFilter<"GeneratedImage"> | string
    provider?: StringFilter<"GeneratedImage"> | string
    templateLabel?: StringFilter<"GeneratedImage"> | string
    promptText?: StringFilter<"GeneratedImage"> | string
    metaJson?: StringNullableFilter<"GeneratedImage"> | string | null
    filePath?: StringFilter<"GeneratedImage"> | string
    createdAt?: DateTimeFilter<"GeneratedImage"> | Date | string
  }

  export type ProcessedPhotoCreateWithoutGeneratedImagesInput = {
    id?: string
    filePath: string
    mimeType?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutProcessedPhotosInput
    source: AttachedPhotoCreateNestedOneWithoutProcessedPhotosInput
  }

  export type ProcessedPhotoUncheckedCreateWithoutGeneratedImagesInput = {
    id?: string
    userId: string
    attachedPhotoId: string
    filePath: string
    mimeType?: string | null
    createdAt?: Date | string
  }

  export type ProcessedPhotoCreateOrConnectWithoutGeneratedImagesInput = {
    where: ProcessedPhotoWhereUniqueInput
    create: XOR<ProcessedPhotoCreateWithoutGeneratedImagesInput, ProcessedPhotoUncheckedCreateWithoutGeneratedImagesInput>
  }

  export type ProcessedPhotoUpsertWithoutGeneratedImagesInput = {
    update: XOR<ProcessedPhotoUpdateWithoutGeneratedImagesInput, ProcessedPhotoUncheckedUpdateWithoutGeneratedImagesInput>
    create: XOR<ProcessedPhotoCreateWithoutGeneratedImagesInput, ProcessedPhotoUncheckedCreateWithoutGeneratedImagesInput>
    where?: ProcessedPhotoWhereInput
  }

  export type ProcessedPhotoUpdateToOneWithWhereWithoutGeneratedImagesInput = {
    where?: ProcessedPhotoWhereInput
    data: XOR<ProcessedPhotoUpdateWithoutGeneratedImagesInput, ProcessedPhotoUncheckedUpdateWithoutGeneratedImagesInput>
  }

  export type ProcessedPhotoUpdateWithoutGeneratedImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProcessedPhotosNestedInput
    source?: AttachedPhotoUpdateOneRequiredWithoutProcessedPhotosNestedInput
  }

  export type ProcessedPhotoUncheckedUpdateWithoutGeneratedImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    attachedPhotoId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachedPhotoCreateManyUserInput = {
    id?: string
    telegramFileId: string
    filePath: string
    mimeType?: string | null
    width?: number | null
    height?: number | null
    createdAt?: Date | string
  }

  export type ProcessedPhotoCreateManyUserInput = {
    id?: string
    attachedPhotoId: string
    filePath: string
    mimeType?: string | null
    createdAt?: Date | string
  }

  export type AttachedPhotoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramFileId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedPhotos?: ProcessedPhotoUpdateManyWithoutSourceNestedInput
  }

  export type AttachedPhotoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramFileId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedPhotos?: ProcessedPhotoUncheckedUpdateManyWithoutSourceNestedInput
  }

  export type AttachedPhotoUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramFileId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcessedPhotoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: AttachedPhotoUpdateOneRequiredWithoutProcessedPhotosNestedInput
    generatedImages?: GeneratedImageUpdateManyWithoutProcessedPhotoNestedInput
  }

  export type ProcessedPhotoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    attachedPhotoId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generatedImages?: GeneratedImageUncheckedUpdateManyWithoutProcessedPhotoNestedInput
  }

  export type ProcessedPhotoUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    attachedPhotoId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcessedPhotoCreateManySourceInput = {
    id?: string
    userId: string
    filePath: string
    mimeType?: string | null
    createdAt?: Date | string
  }

  export type ProcessedPhotoUpdateWithoutSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProcessedPhotosNestedInput
    generatedImages?: GeneratedImageUpdateManyWithoutProcessedPhotoNestedInput
  }

  export type ProcessedPhotoUncheckedUpdateWithoutSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generatedImages?: GeneratedImageUncheckedUpdateManyWithoutProcessedPhotoNestedInput
  }

  export type ProcessedPhotoUncheckedUpdateManyWithoutSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratedImageCreateManyProcessedPhotoInput = {
    id?: string
    provider: string
    templateLabel: string
    promptText: string
    metaJson?: string | null
    filePath: string
    createdAt?: Date | string
  }

  export type GeneratedImageUpdateWithoutProcessedPhotoInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    templateLabel?: StringFieldUpdateOperationsInput | string
    promptText?: StringFieldUpdateOperationsInput | string
    metaJson?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratedImageUncheckedUpdateWithoutProcessedPhotoInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    templateLabel?: StringFieldUpdateOperationsInput | string
    promptText?: StringFieldUpdateOperationsInput | string
    metaJson?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratedImageUncheckedUpdateManyWithoutProcessedPhotoInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    templateLabel?: StringFieldUpdateOperationsInput | string
    promptText?: StringFieldUpdateOperationsInput | string
    metaJson?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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