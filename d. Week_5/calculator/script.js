let userAnswer = prompt('Hi, do you want to use the calculator');

let answer = userAnswer.toLowerCase();

if (answer === 'yes') {
    let symbol = prompt('what kind of math operation do you want (insert the symbol) ?');

    switch (symbol) {
        case  '+' :
        let valueSum1 = parseInt(prompt('give first value'));
        let valueSum2 = parseInt(prompt('give second value'));

        let sum = valueSum1 + valueSum2;

        alert(`The result of your operation is ${sum % 1 == 0 ? sum : sum.toFixed(3)}`);
        alert('Thank you for using this calculator');

        break;
        case '-' :
        let valueSub1 = parseInt(prompt('give first value'));
        let valueSub2 = parseInt(prompt('give second value'));

        let subtraction = valueSub1 - valueSub2;

        alert(`The result of your operation is ${subtraction % 1 == 0 ? subtraction : subtraction.toFixed(3)}`);
        alert('Thank you for using this calculator');
        break;
        case '/' :
        let valueDiv1 = parseInt(prompt('give first value'));
        let valueDiv2 = parseInt(prompt('give second value'));

        let division = valueDiv1 / valueDiv2;
        alert(`The result of your operation is ${division % 1 == 0 ? division : division.toFixed(3)}`);
        alert('Thank you for using this calculator');
        break;
        case '*' :
        let valueMul1 = parseInt(prompt('give first value'));
        let valueMul2 = parseInt(prompt('give second value'));

        let multiplication = valueMul1 * valueMul2;
        alert(`The result of your operation is ${multiplication % 1 == 0 ? multiplication : multiplication.toFixed(3)}`);
        alert('Thank you for using this calculator');
        break;
        case '%' :
        let valueRem1 = parseInt(prompt('give first value'));
        let valueRem2 = parseInt(prompt('give second value'));

        let remainder = valueRem1 % valueRem2;
        alert(`The result of your operation is ${remainder % 1 == 0 ? remainder : remainder.toFixed(3)}`);
        alert('Thank you for using this calculator');
        break;
        case 'cos':
        let valueCos = parseInt(prompt('value input'));
        let cos = Math.cos(valueCos);

        alert(`The result of your operation is ${cos % 1 == 0 ? cos : cos.toFixed(3)}`);
        alert('Thank you for using this calculator');
        break;
        case 'log' :
        let valueLog = parseInt(prompt('value input'));
        let log = Math.log(valueLog);

        alert(`The result of your operation is ${log % 1 == 0 ? log : log.toFixed(3)}`);
        alert('Thank you for using this calculator');
        break;
        default :
        alert('We\'re sorry but we don\'t have that operation')
    }
    
} else if (answer === 'no') {
    alert('See you later alligator');
} else {
    alert('We don\'t understand what you mean dawg, say yes or no please');
}
