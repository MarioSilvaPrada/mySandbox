// // Cat Me

var catMe = require('cat-me');

for (let i = 0; i < 2; i++) {
    console.log(catMe())
}

// Faker

var faker = require('faker');

console.log('====================');
console.log('WELCOME TO MY SHOP!');
console.log('====================');

for (let i = 0; i < 10; i ++) {
    var randomCard = faker.helpers.createCard();
    console.log(`${randomCard['name']} - $${randomCard['accountHistory'][0].amount}`)
}