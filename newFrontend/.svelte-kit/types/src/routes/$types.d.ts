import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type LayoutRouteId = RouteId | "/(static)" | "/(static)/guides" | "/(static)/login" | "/(static)/login/request-password-reset" | "/(static)/login/reset-password/[userId]/[confirmationKey]" | "/(static)/register" | "/(static)/register/request-email-verification" | "/(static)/register/verify/[confirmationKey]" | null
type LayoutParams = RouteParams & { userId?: string; confirmationKey?: string }
type LayoutServerParentData = EnsureDefined<{}>;
type LayoutParentData = EnsureDefined<{}>;

export type LayoutServerLoad<OutputData extends OutputDataShape<LayoutServerParentData> = OutputDataShape<LayoutServerParentData>> = Kit.ServerLoad<LayoutParams, LayoutServerParentData, OutputData, LayoutRouteId>;
export type LayoutServerLoadEvent = Parameters<LayoutServerLoad>[0];
export type LayoutServerData = null;
export type LayoutData = Expand<LayoutParentData>;
export type RequestEvent = Kit.RequestEvent<RouteParams, RouteId>;