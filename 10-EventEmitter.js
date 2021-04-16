const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, age) => {
  console.log(`Data Received: We have a user ${name} with age ${age}`);
})
customEmitter.on('response', () => {
  console.log('Some other Logic goes there 🤔 ');
})

// customEmitter.emit('response')

/**
 * Passing arguements to the emit function
 */

customEmitter.emit('response', 'Ram', 22)
