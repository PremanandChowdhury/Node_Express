const {john, peter} = require('./1-names')
const greetings = require('./2-utils')

require('./3-alternative_exports.js')

greetings('Prem')
greetings(john)
greetings(peter)