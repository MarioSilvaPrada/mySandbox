let input = prompt('number input');

let split = input.split('');

let numberSplit = split.map((num) => parseInt(num) );

const numObj = {};

for (num of numberSplit) {
    if (numObj.hasOwnProperty(num)) {
        numObj[num] += 1;
    } else {
        numObj[num] = 1;
    }
}

console.log(numObj);

// let string = `List of numbers: \n`;
alert('List of numbers:')

for (let prop in numObj) {
      
    // string += `${prop}: ${numObj[prop]} times \n`;
    alert(`${prop}: ${numObj[prop]} times`)
}




