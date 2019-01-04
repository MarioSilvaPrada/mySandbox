const fs = require('fs');

fs.writeFile('index.html', '<h1>Hello World</h1>', (err) => {
    if (err) {
        return console.log(err);
    }
    console.log('Html file was created')
})

fs.writeFile('app.js', 'console.log("test")', (err) => {
    if (err) {
        return console.log(err);
    }
    console.log('JS file was created')
})

console.log('hi');