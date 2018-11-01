let userName = prompt('What is your name?');
let answer = prompt('Do you want to leave a quote for humanity to reflect upon such wisdom?');

if (answer.toLowerCase() === 'yes') {

    let wordLength = prompt('How many words has your quote?'); 
    let quote = prompt('Tell me your quote word by word');

    alert(`Your quote is: ${quote} - ${userName}`)

} else if (answer.toLowerCase() === 'no') {

    alert('See you next time, humanity will surely lost...');

} else {

    alert('We only accept yes or no as an answer');

}