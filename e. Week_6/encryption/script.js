let alphabetFirst = 'ABCDEFGHIJKLM';
let alphabetSecond = 'NOPQRSTUVWXYZ';

let userInput = prompt('User Input');
let output = [];

for (let char of userInput) {
    if (char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91) {

        if (alphabetFirst.includes(char)) {
            let index = alphabetFirst.indexOf(char);
            let utf = String.fromCharCode(alphabetSecond[index].charCodeAt(0));
            output.push(utf);
        } else {
            let index2 = alphabetSecond.indexOf(char);
            let utf = String.fromCharCode(alphabetFirst[index2].charCodeAt(0));
            output.push(utf);
        }
    } else {
        output.push(false)
    }
}

if (output.indexOf(false) === -1) {
    alert(output.join(''));
} else {
    alert('We only accept capital letters A - Z');
}