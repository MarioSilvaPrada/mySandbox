let alphabetFirst = 'ABCDEFGHIJKLM';
let alphabetSecond = 'NOPQRSTUVWXYZ';

let userInput = prompt('User Input');
let output = [];

for (char of userInput) {
    if (char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91) {

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
}

if (output.length > 0) {
    alert(output.join(''));
} else {
    alert('We only accept capital letters A - Z');
}




// if (userInput !== userInput.toUpperCase() || typeof userInput !== 'string' || userInput.indexOf(' ') >= 0 || userInput.indexOf('!') >= 0) {
//     alert('We only accept capital letters A - Z');
// } else {



//     alert(output.join(''));
// }

