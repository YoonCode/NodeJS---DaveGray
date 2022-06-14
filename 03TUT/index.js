const { format } = require('date-fns')
const { v4: uuid } = require('uuid')
// const uuid = require('uuid')

console.log(format(new Date(), 'yyyyMMdd\tHH:MM:ss'))

console.log(uuid()) // uuid : generate random id
