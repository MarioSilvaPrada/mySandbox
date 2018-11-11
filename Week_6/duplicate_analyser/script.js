let input = prompt('number input');

let split = input.split('');

let numberSplit = split.map((num) => parseInt(num));

const numObj = {};

for (num of numberSplit) {
    if (numObj.hasOwnProperty(num)) {
        numObj[num] += 1;
    } else {
        numObj[num] = 1;
    }
}

alert('List of numbers:')

for (let prop in numObj) {
    alert(`${prop}: ${numObj[prop]} times`)
}