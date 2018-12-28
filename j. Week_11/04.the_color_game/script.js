let newColors = document.querySelector('.newcolors');
let mainTitle = document.querySelector('.p2');

let level = 'hard';

const newGame = () => {
    let squareDivision = document.querySelector('.square-division');

    // clean all squares
    while(squareDivision.firstChild) {
        squareDivision.removeChild(squareDivision.firstChild);
    }

    if (level === 'hard') {
        for (let i = 0; i < 6; i++) {
            let square = document.createElement('div');
            square.className = 'square';

            squareDivision.appendChild(square);
        }
    }
    else {
        for (let i = 0; i < 3; i++) {
            let square = document.createElement('div');
            square.className = 'square';

            squareDivision.appendChild(square);
        }
    }

    let squares = Array.from(document.querySelectorAll('.square'));

    squares.map(square => {
        square.style.opacity = 1;
    });

    //set text "New Colors"
    newColors.textContent = 'New Colors';

    // clean answer from previous game
    let answer = document.querySelector('.answer');
    answer.textContent = '';

    // ser header background to default color
    let header = document.querySelector('.first-row');
    header.style.background = 'rgb(43, 91, 224)';


    squares.map(square => {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);

        square.style.background = `RGB(${red},${green},${blue})`;
    });


    let squareIndex = level === 'hard' ? Math.floor(Math.random() * 6) : Math.floor(Math.random() * 3)
    let guess = squares[squareIndex].style.background;

    mainTitle.textContent = guess;

    squares.map(square => {
        square.addEventListener('click', () => {
            let squareSelected = square.style.background;

            if (guess === squareSelected) {

                header.style.background = guess;
                squares.map(square => {
                    square.style.opacity = 1;
                    square.style.background = guess;
                })
                answer.textContent = 'Correct!'
                newColors.textContent = 'Play again?'
            }
            else {
                square.style.opacity = 0;
                answer.textContent = 'Incorrect'
            }
        })
    });
}

newGame();

// create a new game
newColors.addEventListener('click', newGame);


// change difficulty
let difficulty = document.querySelector('.difficulty');

const levelChoice = (e) => {
    let hard = document.querySelector('#hard');
    let easy = document.querySelector('#easy');

    if (e.target.id === 'hard') {
        e.target.className = 'difficulty-select';
        easy.className = 'none';
        level = 'hard';
        newGame();
    }
    else {
        e.target.className = 'difficulty-select';
        hard.className = 'none';
        level = 'easy';
        newGame();
    }
}

difficulty.addEventListener('click', levelChoice);

