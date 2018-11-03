let alphabetFirst = 'ABCDEFGHIJKLM';
let alphabetSecond = 'NOPQRSTUVWXYZ';

let userInput = prompt('User Input');

if (userInput !== userInput.toUpperCase() || typeof userInput !== 'string' || userInput.indexOf(' ') >= 0 || userInput.indexOf('!') >= 0) {
    alert('We only accept capital letters A - Z');
} else {
    let split = userInput.split('');
    let output = [];

    for (char of split) {
        if (alphabetFirst.indexOf(char) !== -1) {
            let index = alphabetFirst.indexOf(char);
            let utf = String.fromCharCode(alphabetSecond[index].charCodeAt(0));
            output.push(utf);
        } else {
            let index2 = alphabetSecond.indexOf(char);
            let utf = String.fromCharCode(alphabetFirst[index2].charCodeAt(0));
            output.push(utf);
        }
    }

    alert(output.join(''));
}

