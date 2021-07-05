/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
type SelfPartial<T> = {
  [K in keyof T]?: T[K]
}

type TypeName<T> = T extends string
  ? 'string'
  : T extends number
  ? 'number'
  : T extends boolean
  ? 'boolean'
  : T extends undefined
  ? 'undefined'
  : // eslint-disable-next-line @typescript-eslint/ban-types
  T extends Function
  ? 'function'
  : 'object'

// 使用上面的TypeName类型别名

// "string" | "function"
type T1 = TypeName<string | (() => void)>

// "string" | "object"
type T2 = TypeName<string | string[]>

// "object"
type T3 = TypeName<string[] | number[]>

type SelfReturnType<T> = T extends (...arguments_: any[]) => infer R ? R : any

const foo = () => 'liam'

type fooReturnType = SelfReturnType<typeof foo>

type Falsy = false | '' | 0 | undefined | null
const isFalsy = (value: unknown): value is Falsy => !value

function pick<T extends Record<string, unknown>, U extends keyof T>(object_: T, keys: U[]): T[U][] {
  // function pick<T extends object, U extends keyof T>(object_: T, keys: U[]): T[U][] {
  return keys.map((key) => object_[key])
}

type SelfInstanceType<T extends new (...arguments_: any) => any> = T extends new (...arguments_: any) => infer R
  ? R
  : any

const bar = (): Promise<string> => {
  return new Promise((resolve) => {
    resolve('liam')
  })
}

type PromiseType<T extends Promise<any>> = T extends Promise<infer U> ? U : never

// Promise<string>
type FooReturnType = ReturnType<typeof bar>

// string
type NakedFooReturnType = PromiseType<FooReturnType>

// type Fnc = (...arguments_: any) => any
type Fnc = () => any
// type Dfc = Function

const a: Fnc = (abc = 123) => {
  return abc
}

// test code goes here...
interface ITest {
  fnc: () => any
}

type GetOption = (nav: string) => any
const getOption: GetOption = (nav = '123') => nav

const itest = {
  fnc: getOption,
}
