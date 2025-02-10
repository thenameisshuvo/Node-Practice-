const {readFile, writeFile} = require('fs');


readFile('./contents/subfolder/first.txt', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
}
)


