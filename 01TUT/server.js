// You should already know:
// HTML, SCC, and Javascript
// Possibly experience with other libraries and frameworks

// How NodeJS differs from Vanilla JS
// 1) Node runs on a server - not in a browser (backend not frontend)
// 2) The console is the terminal window
console.log('Hello World')
// 3) global object instead of window object
// console.log(global)
// 4) Has Common Core modules that we will explore
// 5) CommonJS modules instead of ES6 modules
// 6) Missing some JS APIs like fetch

const os = require('os') // Core Modules - imports
const path = require('path')
// const math = require('./math') // Custom Modules - imports
const { add, subtract, multiply, divide } = require('./math')

// console.log(math.add(2, 3))
console.log(add(2, 3))
console.log(subtract(2, 3))
console.log(multiply(2, 3))
console.log(divide(2, 3))

// console.log(os.type()) // Darwin
// console.log(os.version()) // Darwin Kernel Version 21.4.0: Fri Mar 18 00:45:05 PDT 2022; root:xnu-8020.101.4~15/RELEASE_X86_64
// console.log(os.homedir()) // /Users/ericyoon

// console.log(__dirname) // /Users/ericyoon/Development/Nodejs/NodeJs - Dave Gray
// console.log(__filename) // /Users/ericyoon/Development/Nodejs/NodeJs - Dave Gray/server.js

// console.log(path.dirname(__filename)) // /Users/ericyoon/Development/Nodejs/NodeJs - Dave Gray
// console.log(path.basename(__filename)) // server.js
// console.log(path.extname(__filename)) // .js

// console.log(path.parse(__filename)) // {root, dir, base, ext, name}
