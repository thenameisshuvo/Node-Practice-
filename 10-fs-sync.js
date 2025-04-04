const { readFileSync, writeFileSync } = require("fs");
console.log("start");

const first = readFileSync("./contents/subfolder/first.txt", "utf8");
const second = readFileSync("./contents/subfolder/second.txt", "utf8");
console.log(first, second);

writeFileSync("./contents/subfolder/first.txt", "Hello, World!");
writeFileSync("./contents/subfolder/second.txt", "Hello, Bangladesh!");

writeFileSync(
  "./contents/subfolder/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" }
);
// Here is the result: Hello, World!, Hello, Bangladesh!
// flag: 'a' means append

console.log("done with this task");
console.log("starting the next one");
// start
// Hello, World! Hello, Bangladesh!
// done with this task
// starting the next one
