// Synchronous Way | Blocking Code

const { readFileSync, writeFileSync } = require('fs')

// Reading file
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(`First file: ${first}, Second file: ${second}`)

// Writing file
writeFileSync('./content/result-sync.txt', `Result file:  ${first} ${second}`)

// Append to the existing file
writeFileSync('./content/result-sync.txt', ' Appending some text',{flag: 'a'})

