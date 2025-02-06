const {readFileSync,writeFileSync} = require('fs');

const first = readFileSync('./contents/subfolder/first.txt', 'utf8');
const second = readFileSync('./contents/subfolder/second.txt', 'utf8');
console.log(first, second)
