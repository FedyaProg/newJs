'use strict';


let isNumber = function (n) {
    return !isNaN(parseFloat(n) && isFinite(n));
}

let name = prompt('Привет, как тебя зовут?');

while ((name.trim()) == '') {
    name = prompt('Введите корректное имя!');
}

alert(name + ', Я загадал число от 1 до 100. Попробуй отгадать его ');

const letPlay = function () {

    let number = Math.ceil(Math.random() * 100);
    console.log(number);
    let numberOfGuesses = 0;
    let guess = prompt('Какое число я загадал?');

    return function letGuess() {

        if (isNumber(guess)) {
            guess = +guess;
            if (number > guess) {
                guess = prompt('Загаданное число больше, попробуйте еще раз');
                numberOfGuesses = numberOfGuesses + 1;
                letGuess();
            } else if (number < guess) {
                guess = prompt('Загаданное число меньше, попробуйте еще раз');
                numberOfGuesses = numberOfGuesses + 1;
                letGuess();
            } else {
                alert(' Поздровляю вы угадали, Вам понадобилось: ' + numberOfGuesses + ' попыток');
            }
        } else if (guess === null) {
            alert(' Спасибо за игру. Досвидание!');
        } else {
            guess = prompt('Введите число!');
            letGuess();
        }
    }
}
const getGame = letPlay();
getGame()





