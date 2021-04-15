const os = require('os')

// info about the current user
const user = os.userInfo()
console.log(user);

// method returns the system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} in seconds `);

// properties for the currenct OS
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
}

console.log(`The details of the Current OS is :`, currentOS);

