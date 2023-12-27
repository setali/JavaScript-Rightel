
// alert('Salam')

// console.log(confirm('?'))
// console.log(prompt('Message'))

// console.log('123')

// function setCookie (name, value, time, path = '/') {
//   var date = new Date()

//   date.setSeconds(date.getSeconds() + time)

//   document.cookie =
//     name + '=' + value + ';expires=' + date.toUTCString() + '; path=' + path
// }

// function removeCookie (name) {
//   setCookie(name, '', 0)
// }

// // removeCookie('name')

// setCookie('name', 'Ali', 10000)

// function random (a, b) {
//   return Math.floor(Math.random() * (b - a) + a)
// }

// console.log(random(10, 100))

// var date = new Date()

// console.log(date)

// date.setMinutes(date.getMinutes() + 540)

// console.log(date)

// console.log(JSON.stringify(date))

// var numbers = ['7', 1, 111, '1010']

// var result = numbers.map(parseInt)

// var result = numbers.map(function (el, i, arr) {
//   return parseInt(el, 10)
// })

// console.log(result)

// console.log(parseInt('1022'))

// var str = new String('Ali')

// console.log(str)
// console.log(str.length)
// console.log('salam ' + str)

// console.log(typeof str)

// var numbers = [2, 6, 8, 9, 1, 33, 4, 7, 11]

// numbers.sort(function (a, b) {
//   return b - a
// })

// console.log(numbers)

// var arr = ['ali', 'eli', 'qoli', 'fati', 'mohammad']

// var deletedElements = arr.splice(2, 4, 'ahmad', 'pooria', 'hasan', 'mahsa', 'reza')

// console.log(arr)

// console.log(deletedElements)

// var freinds = ['ali', 'eli', 'qoli']

// var last = freinds.pop()

// var last = freinds[freinds.length - 1]

// console.log(last)

// var first = freinds.shift()
// var first = freinds[0]

// console.log(first)

// console.log(freinds)

// var numbers = [1, 2, 3, 4, 5]

// var result = numbers.reduce(function (acc, el) {
//   return acc * el
// })

// console.log(result)

// var arr = [1, 2, 3, 4, 5]

// var newArr = arr.map(function (el) {
//   console.log(el)
//   return el ** 2
// })

// console.log(newArr)

// function MyArray () {
//   var elmements = arguments
//   this.myForEach = function (cb) {
//     for (var i = 0; i < elmements.length; i++) {
//       cb(elmements[i], i, elmements)
//     }
//   }
// }

// var arr = new MyArray(2, 3, 4, 5)

// arr.myForEach(function (el, i, array) {
//   console.log(el)
// })

// var numbers = [2, 3, 5, 8, 1]

// numbers.forEach(function (el) {
//   console.log(el)
// })

// numbers.forEach(el => console.log(el))

// var numbers = [2, 4, 6, 7, 9, 8]

// var odd = numbers.find(function (el) {
//   return el % 2 === 1
// })

// console.log(odd)

// var person = [
//   { name: 'Ali', gender: 'male', age: 34 },
//   { name: 'Mohammad', gender: 'male', age: 33 },
//   { name: 'Fateme', gender: 'female', age: 30 },
//   { name: 'Hasan', gender: 'male', age: 20 }
// ]

// person.sort(function (a, b) {
//   return b.age - a.age
// })

// console.log(person)

// var result = person.reduce(function (acc, el) {
//   return acc + el.age
// }, 0)

// console.log(result / person.length)

// var names = person
//   .filter(function (el) {
//     return el.gender === 'male'
//   })
//   .map(function (el) {
//     return el.name
//   })

// console.log(names)

// person.forEach(function (el) {
//   console.log(el.name)
// })

// var result = person.some(function (el) {
//   console.log(el)
//   return el.gender === 'female'
// })

// console.log(result)

// var mo = person.find(function (el) {
//   return el.name.toLowerCase() === 'mohammad'
// })

// var mo = person.findIndex(function (el) {
//   return el.name.toLowerCase() === 'zahra'
// })

// console.log(mo)

// if (mo >= 0) {
//   console.log('Peyda shod')
// }

// var females = person.filter(function (el) {
//   return el.gender === 'female'
// })

// console.log(females)

// var arr = [2, 4, 9, 12, 7, 4, 11]

// var odds = arr.filter(function (el) {
//   return el % 2
// })
// var evens = arr.filter(function (el) {
//   return !(el % 2)
// })

// console.log(odds)
// console.log(evens)

// var result = arr.every(function (el) {
//   return !(el % 2)
// })

// console.log(result)

// var arr = Array.from({ length: 10 }).fill(1)

// console.log(arr)

// var arr = ['a', 'b', 'c', 'd']

// arr.copyWithin(3, 1)

// console.log(arr)

// var arr = Array.from({ length: 3 }, function (el, index) {
//   return index + 1
// })

// console.log(arr)

// var obj = {
//   name: 'Ali',
//   family: 'Mousavi'
// }

// var keys = Object.keys(obj)

// console.log(keys)

// for (var key of keys) {
//   console.log(key, obj[key])
// }

// console.log(Object.entries(obj))

// Object.defineProperty(obj, 'fullname', {
//   get: function () {
//     return this.name + ' ' + this.family
//   }
// })

// Object.defineProperty(obj, 'age', {
//   get: function () {
//     return this.name + ' age is ' + this._age
//   },
//   set: function (value) {
//     this._age = +value
//   }
// })

// obj.age = '34'

// console.log(obj)
// console.log(obj.age)

// console.log(obj.fullname)

// Object.defineProperty(obj, 'family', {
//   value: 'Mousavi',
//   configurable: false,
//   enumerable: true,
//   writable: false
// })

// obj.family = 'Moradi'

// console.log(obj)

// for (var key in obj) {
//   console.log(key, obj[key])
// }

// console.log(JSON.stringify(obj))

// delete obj.name
// delete obj.family

// console.log(obj)

// var obj1 = {
//   a: 10,
//   b: 20,
//   c: {
//     d: 100
//   },
//   f: undefined,
//   g: new Date(),
//   getData: function () {},
//   sym: Symbol()
// }

// // var obj2 = obj1
// var obj2 = {}

// Object.assign(obj2, obj1)

// var obj2 = JSON.parse(JSON.stringify(obj1))

// console.log(obj1 === obj2)

// obj2.a = 50
// obj2.c.d = 200

// console.log(obj1)
// console.log(obj2)

// var obj = {}

// function getFullName (hi, bye) {
//   console.log('call function')
//   return hi + ' ' + this.name + ' ' + this.family + '. ' + bye
// }

// name = 'Fateme'
// family = 'Ahmari'

// var ali = {
//   name: 'Ali',
//   family: 'Mousavi'
// }

// console.log(getFullName.call(ali, 'Salam', 'Khodafez'))

// console.log(getFullName('Hello', 'Goodbye'))

// console.log(getFullName.apply(ali, ['Salam', 'Khodafez']))

// var numbers = [10, 2, 3, 6, 12, 7]

// console.log(Math.max.apply({}, numbers))

// var newFunc = getFullName.bind(ali)
// newFunc = getFullName.bind(mohammad)

// var mohammad = {
//   name: 'Mohammad',
//   family: 'Moradi',
//   getFullName: newFunc
// }
// console.log(getFullName.call(mohammad))

// console.log(mohammad.getFullName())

// console.log(newFunc.call(mohammad))

// name = 100

// console.log(typeof +name)
// console.log(typeof name)

// name = 'Fateme'
// family = 'Ahmari'

// function getFullName () {
//   return this.name + ' ' + this.family
// }

// console.log(getFullName())

// var ali = {
//   name: 'Ali',
//   family: 'Mousavi',
//   getFullName
// }

// var mohammad = {
//   name: 'Mohammad',
//   family: 'Moradi',
//   getFullName
// }

// console.log(ali.getFullName())
// console.log(mohammad.getFullName())

// var ali = {
//   name: 'Ali',
//   family: 'Mousavi',
//   age: 34
// }

// var ali = new Person('Ali', 'Mousavi', 34)

// var mohammad = {
//   name: 'Mohammad',
//   family: 'Moradi',
//   age: 34
// }

// var mohammad = new Person('Mohhamd', 'Moradi', 34)

// function Person (name, family, age) {
//   this.name = name
//   this.family = family
//   this.age = age
//   this.getFullName = function () {
//     return this.name + ' ' + this.family
//   }
// }

// console.log(ali.getFullName())

// console.log(mohammad.getFullName())

// function func () {
//   for (var i = 0; i < 5; i++) {
//     ;(function (j) {
//       setTimeout(function () {
//         console.log(j)
//       }, 1000)
//     })(i)
//   }
// }

// func()

// var count = (function () {
//   var counter = 0

//   function increase () {
//     console.log(++counter)
//   }

//   function decrease () {
//     console.log(--counter)
//   }

//   return {
//     increase,
//     decrease
//   }
// })()

// function func (a) {
//   return function func2 (b) {
//     return function (c) {
//       return a + b + c
//     }
//   }
// }

// console.log(func(10)(5)(3))

// var sum10 = func(10)

// console.log(sum10(20)(40))

// var sum40 = sum10(30)

// console.log(sum40(50))

// function func () {
//   for (var i = 0; i < 5; i++) {
//     setTimeout(function () {
//       console.log(i)
//     }, 1000)
//   }
// }

// func()

// function func () {
//   var a = 20 // EA2BC4 // AB34CD
//   console.log(a)
// }

// func()
// func()

// setTimeout(function () {
//   console.log('Ali')
// }, 1000)

// setTimeout(function () {
//   console.log('Eli')
// }, 2000)

// console.log(1)

// setTimeout(function () {
//   console.log(2)
// }, 0)

// console.log(3)

// function f (n) {
//   setTimeout(function () {
//     console.log(n)
//   }, n * 1000)
// }

// function func () {
//   for (var i = 0; i < 5; i++) {
//     f(i)
//   }
// }

// func()

// var id = setInterval(function () {
//   console.log('salam', Date.now())
// }, 1000)

// console.log(id)

// setTimeout(function () {
//   clearInterval(id)
// }, 5000)

// console.log(1)

// setTimeout(function () {
//   console.log('salam')
// }, 2000)

// console.log(2)

// function func () {
//   var a
//   console.log(a)

//   a = 10

//   // var a = 10
// }

// func()

// var a = 10

// // console.log(c)

// function func () {
//   var g = 90
//   function func2 () {
//     // b = 20
//     // console.log(a)
//     // window.c = 30
//     var d = 50

//     console.log(a)
//     console.log(d)
//     console.log(g)
//   }

//   console.log(g)

//   func2()
// }

// func()

// console.log(b)
// console.log(c)

// function factorial (n) {
//   return n ? n * factorial(n - 1) : 1
// }

// function factorial (n) {
//   var result = 1
//   for (var i = n; i > 0; i--) {
//     result *= i
//   }

//   return result
// }

// console.log(factorial(99999))

// 5! =  5 * 4!
// 4! =  4 * 3!
// 3! =  3 * 2!
// 2! =  2 * 1!
// 1! =  1

// function noop () {}

// function operate (a, b, cb = noop) {
//   // function operate (a, b, cb = function () {}) {
//   return cb(a, b)
// }

// var result = operate(4, 5, function (a, b) {
//   return a + b
// })

// var result2 = operate(4, 5, function (a, b) {
//   return a * b
// })

// var result3 = operate(4, 5)

// console.log(result)
// console.log(result2)

// var sum = function (a, b) {
//   return a, b
// }

// function sum (number) {
//   for (var i = 1; i < arguments.length; i++) {
//     number += arguments[i]
//   }

//   return number
// }

// console.log(sum(4, 5))
// console.log(sum(4, 5, 6))
// console.log(sum(4, 5, 6, 7))
// console.log(sum(4, 5, 6, 7, 8))

// function sum (a = 0, b = 0) {
//   //   if (!b) {
//   //     b = 0
//   //   }

//   //   b = b ?? 0 // if b => null, undefined
//   //   b = b || 0 // if b => null, undefined, NaN, 0, ''

//   return a + b
// }

// console.log(sum(1, 2, 3))
// console.log(sum(1, 0))

// function sayHello () {
//   console.log('hello')
// }

// sayHello()
// sayHello()
// sayHello()
// sayHello()
// sayHello(1, 22, 3, 5, 6)

// 'DRY PRINCIPLE' ==> Don't Repeat Yourself

// function sum (a, b) {
//   console.log('salam')

//   return a + b
// }

// console.log(sum(2, 6))

// var number = 13

// number % 2 ? console.log('Odd') : console.log('Even')

// console.log(number % 2 ? 'Odd' : 'Even')

// var char = 'z'

// switch (char) {
//   case 'A':
//   case 'a':
//     console.log('Char is A')
//     break

//   case 'B':
//   case 'b':
//     console.log('Char is B')
//     break

//   case 'C':
//   case 'c':
//     console.log('Char is C')
//     break

//   case 'D':
//   case 'd':
//     console.log('Char is D')
//     break

//   default:
//     console.log('Char is not A or B or C or D')
// }

// if (char === 'A' || char === 'a') {
//   console.log('Char is A')
// } else if (char === 'B' || char === 'b') {
//   console.log('Char is B')
// } else if (char === 'C' || char === 'c') {
//   console.log('Char is C')
// } else if (char === 'D' || char === 'd') {
//   console.log('Char is D')
// }

// var number = 15

// if (!(number % 2)) {
//   console.log('Even')
// } else {
//   console.log('Odd')
// }

// if (number % 2) {
//   console.log('Odd')
// } else {
//   console.log('Even')
// }

// var num = 0

// if (num < 0) {
//   console.log('Number is negative')
// } else if (num > 0) {
//   console.log('Number is positive')
// } else {
//   console.log('Number is Zero')
// }

// function* gen () {
//   yield 'A'
//   yield 'B'
//   yield 'C'
// }

// var it = gen()

// console.log(it.next().value)

// for (var v of it) {
//   console.log(v)
// }

// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

// var person = {
//   name: 'Ali',
//   family: 'Mousavi',
//   age: 34
// }

// console.log('firstName' in person)

// for (var key in person) {
//   console.log(key, '==>', person[key])
// }

// var str = 'Salam'

// for (var s of str) {
//   console.log(s)
// }

// var freinds = ['Ali', 'Eli', 'Qoli']

// for (var freind of freinds) {
//   console.log(freind)
// }

// var str = ''

// var i = 0
// do {
//   console.log(str[i])
//   i++
// } while (i < str.length)

// var i = 0
// while (i < str.length) {
//   console.log(str[i])

//   i++
// }

// for (var i = 0; i < str.length; i++) {
//   console.log(str[i])
// }

// var friends = ['Ali', 'Eli', 'Qoli']

// for (var i = 0; i < friends.length; i++) {
//   console.log(friends[i])
// }

// for (var i = 0; i < 10; i++) {
//   if (i % 2 === 1) {
//     continue
//   }

//   console.log(i)
// }

// var i = 0
// for (;;) {
//   if (i >= 5) {
//     break
//   }

//   console.log('salam', i)

//   i++
// }

// var person = {
//   name: 'Ali',
//   //   family: 'Mousavi',
//   //   fullName: 'Ali Mousavi',
//   getFullName () {
//     return 'Ali Mousavi'
//   }
// }

// if (person.fullName !== undefined) {
//   console.log(person.fullName)
// } else if (person.family !== undefined) {
//   console.log(person.family)
// } else {
//   console.log(person.name)
// }

// console.log(person.fullName || person.family || person.name)

// console.log(person.getFullName && person.getFullName())

// 0 | 0 => 0
// 0 | 1 => 1
// 1 | 0 => 1
// 1 | 1 => 1

// 0 & 0 => 0
// 0 & 1 => 0
// 1 & 0 => 0
// 1 & 1 => 1

// console.log('b' + 'a' + +'a' + 'a')

// var x = 10

// x = x + 2
// x += 2

// x *= 2

// x -= -1
// x = x - -1

// console.log(x)

// console.log(++x)
// console.log(x)

// var y = x++

// console.log(x)
// console.log(y)

// var arr = [1, true, 'salam', () => {}, [], {}]

// console.log(arr)

// var arr = ['a', 'b', 'c']

// console.log(arr.length)

// console.log(arr[0])

// arr[0] = 'z'

// console.log(arr)

// console.log(typeof arr)

// var person = {
//   firstName: 'Ali',
//   lastName: 'Mousavi',
//   age: 34,
//   family: {
//     father: 'Mohammad',
//     mother: 'Hajar',
//     sisters: ['Fateme', 'Zahra', 'Zeinab']
//   },
//   friends: ['Ali', 'Eli', 'QOli']
// }

// var person2 = person

// person2.firstName = 'Hasan'

// console.log(person)
// console.log(typeof person2)

// var propertyName = 'family'

// console.log(person[propertyName])

// console.log(person.firstName)

// console.log(person.family.father)

// console.log(person.friends[1])

// var str = 'salam'

// console.log(str[10])

// var myName

// console.log(myName)

// var نام = 'علی'

// var $name = 'ALi'

// var myName = 'Ali',
//   myFamily = 'Mousavi'

// var myName = 'Qoli'

// myName = 'Eli'
// MyName = 'Hasan'

// console.log(myName)
// console.log(MyName)

// console.log('salam')

/*
console.log('Alo')

console.log('Ali')
*/
