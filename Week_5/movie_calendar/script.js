let movieArr = [];
let airDateArr = [];
let mainActorArr = [];

for (let i = 0; i < 6; i ++) {
    let movie = prompt('Movie name');
    let airDate = prompt('Air date');
    let mainActor = prompt('Main Actor');

    movieArr.push(movie);
    airDateArr.push(airDate);
    mainActorArr.push(mainActor);
}

let userInput = prompt('Please choose a movie a I will give you the airing date');

if (movieArr.indexOf(userInput) !== -1) {
    let index = movieArr.indexOf(userInput);
    let airDateAnswer = airDateArr[index];
    alert(airDateAnswer);
} else {
    alert('We don\'t have that movie');
}