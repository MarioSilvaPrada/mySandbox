let input = prompt('number input');

let split = input.split('');

let numberSplit = split.map((num) => parseInt(num) );


let output = numberSplit[0];

for (let i = 1; i < numberSplit.length; i++) {
    if(numberSplit[i] % 2 == 0 && numberSplit[i-1] % 2 == 0) {
        output += `-${numberSplit[i]}`
    } else if (numberSplit[i] % 2 != 0 && numberSplit[i-1] % 2 != 0) {
        output += `#${numberSplit[i]}`
    } else {
        output += `${numberSplit[i]}`;
    }
}

alert(output);

