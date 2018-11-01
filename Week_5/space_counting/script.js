let answer = prompt('Write here something')

let split = answer.split('');

let countSpace = 0;

for (let char of split) {
    if (char === ' ') {
        countSpace ++;
    }
}

alert(`That sentence has ${countSpace} spaces`);