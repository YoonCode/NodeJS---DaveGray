const fsPromises = require('fs').promises
const path = require('path')

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, 'files', 'starter.txt'),
      'utf-8',
    ) // read the file
    console.log(data)
    await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt')) // delete the file
    await fsPromises.writeFile(
      path.join(__dirname, 'files', 'promiseWrite.txt'),
      data,
    ) // write in the file
    await fsPromises.appendFile(
      path.join(__dirname, 'files', 'promiseWrite.txt'),
      '\n\nNice to meet you.',
    ) // update in the file
    await fsPromises.rename(
      path.join(__dirname, 'files', 'promiseWrite.txt'),
      path.join(__dirname, 'files', 'promiseComplete.txt'),
    ) // rename the file
    const newData = await fsPromises.readFile(
      path.join(__dirname, 'files', 'promiseComplete.txt'),
      'utf-8',
    )
    console.log(newData)
  } catch (err) {
    console.error(err)
  }
}

fileOps()

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
// fs.readFile(
//   path.join(__dirname, 'files', 'starter.txt'), // /Users/ericyoon/Development/Nodejs/NodeJs - Dave Gray/02TUT/files/starter.txt
//   'utf-8',
//   (err, data) => {
//     if (err) throw err
//     console.log(data) // Hi, my name is EricYoon.
//   },
// )

// fs.writeFile(
//   path.join(__dirname, 'files', 'reply.txt'),
//   'Nice to meet you!',
//   (err) => {
//     if (err) throw err
//     console.log('Write Complete')

//     fs.appendFile(
//       path.join(__dirname, 'files', 'reply.txt'),
//       '\n\nYes it is.',
//       (err) => {
//         if (err) throw err
//         console.log('Append Complete')

//         fs.rename(
//           path.join(__dirname, 'files', 'reply.txt'),
//           path.join(__dirname, 'files', 'newReply.txt'),
//           (err) => {
//             if (err) throw err
//             console.log('Rename Complete')
//           },
//         )
//       },
//     )
//   },
// )

// exit on uncaught errors
process.on('uncaughtException', (err) => {
  console.error(`There was an uncaught error: ${err}`) // There was an uncaught error: Error: ENOENT: no such file or directory, open './files/hello.txt'
  process.exit(1)
})
