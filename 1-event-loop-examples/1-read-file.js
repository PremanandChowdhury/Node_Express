/**
 * In Node the Event Loop has the concept of offloading.
 * Offloading is the concept participating in the asynchronous flow of execution
 */

const {readFile}  = require('fs')

console.log('Started the first task');
// CHECK THE FILE PATH
readFile('./content/first.txt', 'utf8', (err, result) => {
  if(err) {
    console.log(err)
    return
  }
  console.log(result)
  console.log('Completed the first task');
})

console.log('Starting next task');

