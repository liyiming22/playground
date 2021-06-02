/* eslint-disable @typescript-eslint/no-unused-vars */
type TemporaryType = {
  bar: number
  baz: number[]
}

type Bar = {
  type: 'bar'
  data: number
}

type Baz = {
  type: 'baz'
  data: number[]
}

// function fnc2<T extends Bar | Baz>(props: { type: keyof T; data: T[type] }) {
//   // const { type, data } = props
//   const foo = {
//     bar: (parameters: typeof data) => {
//       return parameters
//     },
//     baz: (parameters: typeof data) => {
//       return parameters
//     },
//   }
//   return foo[type](data)
// }

const object1: Bar = { type: 'bar', data: 123 }
const object2: Baz = { type: 'baz', data: [123] }
// const object3 = { type: 'bar', data: [123] }
// const object4 = { type: 'baz', data: 123 }

// fnc2(object1)
// fnc2(object2)

// fnc2(object3)
// fnc2(object4)

function fnc<T extends keyof TemporaryType>(props: { type: T; data: TemporaryType[T] }) {
  const { type, data } = props
  const foo = {
    bar: (parameters: TemporaryType[T]) => {
      return parameters
    },
    baz: (parameters: TemporaryType[T]) => {
      return parameters
    },
  }
  return foo[type](data)
}

fnc(object1)
fnc(object2)

// fnc(object3)
// fnc(object4)
