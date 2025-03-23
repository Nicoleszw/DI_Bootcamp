const _ = require('lodash');
const math = require('./math');

const sum = math.add(5, 10);
const product = math.multiply(5, 10);

const numbers = [5, 10, 15, 20];
const max = _.max(numbers);
const min = _.min(numbers);

console.log(`Sum: ${sum}`);              
console.log(`Product: ${product}`);      
console.log(`Max: ${max}`);              
console.log(`Min: ${min}`);              
