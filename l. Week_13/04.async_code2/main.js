const fs = require('fs');

fs.writeFile('input.txt', 'Hello my dear friend', (err) => {
    if (err) {
        return console.log(err);
    }
    console.log('File was created!')
})

fs.readFile('input.txt', function (err, data) {
    if (err) {
       return console.error(err);
    }
    console.log("File created with the following text: " + data.toString());
 });