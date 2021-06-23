// TODO

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let min = 1;
let max = 100;
let answer = min + max;
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random(min + max) * max - min);
}

let makeGuess = (min, max) => {
    return Math.round(((min + max) / 2) - 1);
}

const target = getRandomNumber(min, max);
console.log(target);

rl.question(`What is ${min} + ${max} ?\n`, (userInput) => {
    if (userInput.trim() == answer) {
        rl.setPrompt("corret, good job.")
        rl.close();
    } else {
        rl.setPrompt('Incorrect, try again.\n');
        rl.prompt();
        rl.on('line', (userInput) => {
            if (userInput.trim() == answer) {
                rl.setPrompt("corret. You finaly got it, good job.")
                rl.close();
            } else {
                rl.setPrompt(`Your Input of ${userInput} is not correct.\n`);
                rl.prompt();
            }
        });
    }
});
