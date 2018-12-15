let newColors = document.querySelector('.newcolors');
let difficulty = document.querySelector('.difficulty');


let mainTitle = document.querySelector('.p2');

const levelChoice = (e) => {
    let hard = document.querySelector('#hard');
    let easy = document.querySelector('#easy');

    if (e.target.id === 'hard') {
        e.target.className = 'difficulty-select';
        easy.className = 'none';
    }
    else {
        e.target.className = 'difficulty-select';
        hard.className = 'none';
    }
}


difficulty.addEventListener('click', levelChoice);


const newGame = () => {

    let squares = Array.from(document.querySelectorAll('.square'));
    squares.map(square => {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);

        square.style.background = `RGB(${red},${green},${blue})`;
    });

    let squareIndex = Math.floor(Math.random() * 6);
    let guess = squares[squareIndex].style.background;

    mainTitle.textContent = guess;

    squares.map(square => {
        square.addEventListener('click', () => {
            let squareSelected = square.style.background;

            if (guess === squareSelected) {
                let header = document.querySelector('.first-row');
                header.style.background = guess;
                squares.map(square => {
                    square.style.opacity = 1;
                    square.style.background = guess;
                })
            }
            else {
                square.style.opacity = 0;
            }
        })
    });
}

newGame();

newColors.addEventListener('click', newGame);




