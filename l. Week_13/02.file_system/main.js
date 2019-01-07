const fs = require('fs');

setTimeout(() => {
    fs.writeFile('input.txt', 'Hello World', (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('File was created!')
    })
}, 5000)
