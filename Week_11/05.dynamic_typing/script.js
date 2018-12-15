let parag = document.querySelector('.parag');
let textArea = document.querySelector('textarea');

textArea.addEventListener('keyup', userInput);

function userInput(e) {
    let text = e.target.value;
    parag.textContent = text;
}
