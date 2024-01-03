// class Component {

//     name = "Ali"

//     getName = () => {
//         console.log(this.name)

//     }

//     return (<div>
//             <button onClick={this.getName}></button>
//         </div>)
// }

// function func () {
//   console.log('func', this)

//   const myObj = {
//     myName: 'Ali',
//     normFunc () {
//       console.log('normal', this)
//     },
//     arrowFunc: () => {
//       console.log('arrow', this)
//     }
//   }

//   return myObj
// }

// const hasan = {
//   name: 'Hasan'
// }

// // const obj = func.bind(hasan)()
// const obj = func.call(hasan)
// // const obj = func()

// console.log(obj)

// // obj.normFunc()
// obj.arrowFunc()

// function Person (name) {
//   this.name = name
//   console.log(this)
// }

// Person()

// const p = new Person('Ali')

// console.log(p)

// const obj = {
//   name: 'Ali',
//   func () {
//     console.log(this)
//   }
// }

// const f = obj.func

// f()

// obj.func()

// const func = () => {
//   console.log(this)
// }

// new func() // ERROR

// function* gen () {
//   yield 'a'
//   yield 'b'
//   yield 'c'
//   yield 'd'
// }

// const it = gen()

// // console.log(it.next())
// // console.log(it.next())
// // console.log(it.next())
// // console.log(it.next())
// // console.log(it.next())

// for (const el of it) {
//   console.log(el)
// }
// for (const el of it) {
//   console.log(el)
// }

// const arr = ['a', 'b', 'c', 'd']

// for (const el of arr) {
//   console.log(el)
// }

// const func = () => 2
// const func = () => {
//   return 2
// }

// console.log(func())

// const arr = [1, 2, 3, 4, 5]

// const newArr = arr.map(el => el ** 2)

// console.log(newArr)

// function pow2 (n) {
//   return n ** 2
// }

// const pow3 = n => n * 3

// const sum = (a, b) => a + b

// console.log(pow3(5))
// console.log(sum(4, 5))

// const name = 'Ali'

// function getFamily () {
//   return 'Mousavi'
// }

// // const str = 'My Name is ' + name + "\nI'm living in Shiraz"

// const str = `My name is ${name} ${getFamily()}
// I'm living in Shiraz`

// console.log(str)

// const people = ['Ali', 'Eli', 'Qoli']

// for (const person of people) {
//   console.log(person)
// }

// function func () {
//   for (const i = 0; i < 5; i = i + 1) {
//     setTimeout(function () {
//       console.log(i)
//     }, 1000)
//   }
// }

// func()

// const arr = ['Ali', 'Eli', 'Qoli']

// arr[0] = 'Mohammad'

// arr.push('Mahsa')

// console.log(arr)

// // #AC67B4
// const person = {
//   name: 'Ali'
// }

// // person.name = 'Hasan'

// person = {
//   name: 'Hasan'
// } //  ERROR

// console.log(person)

// const a = 10

// a = 20 // ERROR

// console.log(a)

// // #BA67A1 => 1
// // #12ABDF => 0
// function func () {
//   for (let i = 0; i < 5; i++) {
//     setTimeout(function () {
//       console.log(i)
//     }, 1000)
//   }
// }

// func()

// function func () {
//   var a = 10

//   {
//     let a = 20
//     console.log('block', a)
//   }

//   console.log('function', a)
// }

// func()

// let a = 10

// console.log(window.a)

// let a = 10

// let a = 20

// console.log(a)
