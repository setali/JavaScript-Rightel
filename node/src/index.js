import isOdd from 'is-odd'
const random = require('lodash/random')
console.log(isOdd(10))

import { sub, sum as mySum } from './math'

console.log(random(1, 10))

console.log(sub(9, 1))
console.log(mySum(10, 20))

// const { sum: mySum, sub } = require('./math')
// const os = require('os')
// const fs = require('fs')
// const path = require('path')

// // console.log(__dirname)
// // console.log(__filename)

// const p = path.resolve(__dirname, '..', 'users-list')
// console.log(p)

// const files = fs.readdirSync(p)
// console.log(files)

// console.log(os.arch())
// console.log(os.cpus().length)

// console.log(mySum(4, 5))

// console.log(Math.random())
