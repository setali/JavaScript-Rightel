// function request (url, method, cb) {
//   const xhr = new XMLHttpRequest()
//   xhr.open(method, url)

//   xhr.send()

//   xhr.onload = function () {
//     const data = JSON.parse(xhr.responseText)
//     cb(null, data)
//   }

//   xhr.onerror = function () {
//     cb(new Error('Request error'))
//   }
// }

// function request (url, method = 'GET') {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest()
//     xhr.open(method, url)

//     xhr.send()

//     xhr.onload = function () {
//       resolve({
//         json: function () {
//           return new Promise((resolve, reject) => {
//             try {
//               resolve(JSON.parse(xhr.responseText))
//             } catch (err) {
//               reject(err)
//             }
//           })
//         },
//         text: function () {
//           return xhr.responseText
//         }
//       })
//     }

//     xhr.onerror = function () {
//       reject(new Error('Request error'))
//     }
//   })
// }

// const url = 'https://jsonplaceholder.typicode.com/users/1'
const url = 'https://jsonplaceholder.typicode.com/'

// fetch(url)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// axios(url)
//   .then(response => console.log(response.data))
//   .catch(err => console.log(err))

function axios (url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(data => resolve({ data }))
      .catch(reject)
  })
}

axios(url)
  .then(({ data }) => console.log(data))
  .catch(console.log)

// request(url, 'GET', (err, data) => {
//   if (err) {
//     console.error(err)
//   } else {
//     console.log(data)
//   }
// })

// setTimeout(() => {
//   console.log('Ali')
// }, 0)

// function prom () {
//   return new Promise(resolve => {
//     resolve('Mohammad')
//   })
// }

// prom().then(console.log)

// console.log('Salam')

// console.log(1)
// const prom = new Promise(resolve => {
//   resolve(2 + 2)
// })

// console.log(2)

// prom.then(console.log)

// console.log(3)

// function prom (time, number, cb) {
//   setTimeout(() => {
//     if (typeof number === 'number') {
//       cb(null, number ** 2)
//     } else {
//       cb(new Error('Number is not valid'))
//     }
//   }, time * 1000)
// }

// function prom (time, number) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof number === 'number') {
//         resolve(number ** 2)
//       } else {
//         reject(new Error('Number is not valid'))
//       }
//     }, time * 1000)
//   })
// }

// const result = prom(1, 5)
//   .then(result => result)
//   .then(value => value + 10)
//   .then(newValue => console.log(newValue))
//   .catch(err => console.log(err))

// console.log(result)

// prom(3, 8, (err, result) => {
//   if (err) {
//     console.error(err)
//   } else {
//     console.log(result)
//   }
// })

// const arr = [1, 2, 3, 7, 8, 9]

// const [a, b, ...rest] = arr

// console.log(a, b, rest)

// const person = {
//   name: 'Ali',
//   family: 'Mousavi'
// }
// const arr = ['ALi', 'Mousavi']

// const newObj = {}

// ;[newObj.name, newObj.family] = arr

// console.log(newObj)

// newObj.name = person.name
// newObj.family = person.family

// const {name: newObj.name} = person

// console.log(newObj)

// const friends = ['Ali', 'Eli', 'Qoli']

// const [a, b, c, d = 10] = friends

// console.log(a, b, c, d)

// const person = {
//   firstName: 'Ali',
//   lastName: 'Mousavi',
//   age: 34,
//   gender: true,
//   family: {
//     father: 'Mohammad',
//     mother: 'Hajar',
//     children: ['Mahsa', 'Mohammad']
//   }
// }

// const { firstName, ...obj } = person

// console.log(firstName)
// console.log(obj)

// const {
//   family: {
//     children: [, secondChild]
//   }
// } = person

// console.log(secondChild)

// const {
//   firstName: myName = 'Qoli',
//   lastName,
//   age,
//   family: { father: fatherName }
// } = person

// const { father: fatherName } = family

// const firstName = person.firstName
// const myName = person.firstName ?? 'Qoli'
// const lastName = person.lastName
// const fatherName = person.family.father

// console.log(firstName)
// console.log(myName)
// console.log(lastName)
// // console.log(family)
// console.log(fatherName)

// const sort = (...args) => args.sort()

// console.log(sort(4, 9, 3, 1))

// const sum = (...args) => args.reduce((acc, el) => acc + el)

// const arr = [4, 5, 9, 7]

// const result = sum(...arr)

// console.log(result)

// function func (a, b, ...args) {
//   console.log(a, b)
//   console.log(args)
// }

// func(1, 4, 7, 'a')

// const str = 'salam'

// const arr = [...str]

// console.log(arr)

// const obj = { name: 'ALi' }

// const arr = [...obj] // Error

// const friends = ['Ali', 'Eli', 'Qoli']

// const obj = { ...friends }

// console.log(obj)

// const arr1 = [4, 5, 6]

// const newArr = [1, 2, 3, ...arr1, 7, 8, 9]

// const arr = [4, 1, 8, 9]

// // const max = Math.max.apply({}, arr)
// const max = Math.max(...arr)

// console.log(max)

// console.log(newArr)

// const obj1 = { name: 'Ali' }

// const obj2 = { family: 'Mousavi' }

// // const newObj = Object.assign({}, obj1, obj2)

// const newObj = {
//   family: 'Hasani',
//   ...obj1,
//   ...obj2,
//   name: 'Hasan',
//   age: 34,
//   gender: 'mal'
// }

// console.log(newObj)

// console.log(newObj === obj1)

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
