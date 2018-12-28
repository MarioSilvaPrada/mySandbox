let userName = prompt('What is your name?');
let answer = prompt('Do you want to leave a quote for humanity to reflect upon such wisdom?');

if (answer.toLowerCase() === 'yes') {
    let number = prompt('How many words?');
    alert('Tell me your quote word by word'); 

    let wordArr = [];
    
    
    for (let i = 0; i < number; i++) {
        let word = prompt('give word');
        wordArr.push(word);
    }
    let quote = wordArr.join(' ');

    alert(`Your quote is: '${quote}.' - ${userName}`)

} else if (answer.toLowerCase() === 'no') {

    alert('See you next time, humanity will surely lost...');

} else {

    alert('We only accept yes or no as an answer');

}