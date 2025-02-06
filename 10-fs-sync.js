const {readFileSync,writeFileSync} = require('fs');

const first = readFileSync('./contents/subfolder/first.txt', 'utf8');
const second = readFileSync('./contents/subfolder/second.txt', 'utf8');
console.log(first, second)


writeFileSync('./contents/subfolder/first.txt', 'Hello, World!');
writeFileSync('./contents/subfolder/second.txt', 'Hello, Bangladesh!');

writeFileSync('./contents/subfolder/result-sync.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'});
// Here is the result: Hello, World!, Hello, Bangladesh!
// flag: 'a' means append

