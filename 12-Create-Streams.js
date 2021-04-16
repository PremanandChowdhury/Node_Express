/**
 * STREAMS :
 * To handle[read / write] continuous or sequentially data
 * Also, streams are used for big files
 * 
 * We have 4 types of streams 
 * - Writeable { used to write data sequentially }
 * - Readable  { used to read data sequentially }
 * - Duplex    { used to read and write data both }
 * - Transform { data can be modified while reading/ writing }
 */

const { createReadStream } = require('fs')

// const stream = createReadStream('./content/big.txt')

const stream = createReadStream('./content/big.txt', {
  highWaterMark : 90000,
  encoding: 'utf8'
})

stream.on('data', (result) => {
  console.log(result);
})

stream.on('error', (err) => {
  console.log(err);
})