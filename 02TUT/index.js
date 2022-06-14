const fs = require('fs')
const path = require('path')

// fs.readFile('./files/starter.txt', (err, data) => {
//   if (err) throw err
//   // console.log(data) // 1. <Buffer 48 69 2c 20 6d 79 20 6e 61 6d 65 20 69 73 20 45 72 69 63 59 6f 6f 6e 2e>
//   console.log(data.toString()) // 2. Hi, my name is EricYoon.
// })

// 3. 'utf-8'
// fs.readFile('./files/starter.txt', 'utf-8', (err, data) => {
//   if (err) throw err
//   console.log(data) // Hi, my name is EricYoon.
// })
fs.readFile(
  path.join(__dirname, 'files', 'starter.txt'), // /Users/ericyoon/Development/Nodejs/NodeJs - Dave Gray/02TUT/files/starter.txt
  'utf-8',
  (err, data) => {
    if (err) throw err
    console.log(data) // Hi, my name is EricYoon.
  },
)

console.log('Hello...')

fs.writeFile(
  path.join(__dirname, 'files', 'reply.txt'),
  'Nice to meet you!',
  (err) => {
    if (err) throw err
    console.log('Write Complete')
  },
)
fs.appendFile(
  path.join(__dirname, 'files', 'test.txt'),
  'Testing text.',
  (err) => {
    if (err) throw err
    console.log('Append Complete')
  },
)

// exit on uncaught errors
process.on('uncaughtException', (err) => {
  console.error(`There was an uncaught error: ${err}`) // There was an uncaught error: Error: ENOENT: no such file or directory, open './files/hello.txt'
  process.exit(1)
})
