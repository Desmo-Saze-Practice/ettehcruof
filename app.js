const os = require('os');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let min = 1;
let max = 100;

// const getRandomNumber = (min, max) => {
//     return Math.floor(Math.random(min + max) * max - min);
// }
// const target = getRandomNumber(min, max);

let makeGuess = (min, max) => {
    return Math.floor((max + min) / 2);
}

let guess = makeGuess(min, max);
console.log(min);
console.log(max);

const ask = function (question) {
    rl.question(`${question} ${os.EOL}`, (answer) => {
        if (answer != '-' && answer != '+' && answer != '=') {
            console.log(`You must use the symbole +, - or = to help the computer find your number. Please try again. ${os.EOL}`);
            ask(`Is your number ${guess} ? ${os.EOL}`);
        }
        else {
            switch (answer) {
                case '+':
                    min = guess+1;
                    guess = makeGuess(min, max);
                    ask(`ok it's more... Is your number ${guess} ${os.EOL}`)
                    break;
                case '-':
                    max = guess-1;
                    guess = makeGuess(min, max);
                    ask(`ok it's less... Is your number ${guess} ${os.EOL}`)
                    break;
                default:
                    console.log(`Congratulations, we found your number ! It was ${guess} ! ${os.EOL}`);
                    rl.close();
                    break;
            }
        }
    })
}

// lunch game
ask(`Pick a number then help me find it with "+", "-" or "=". Is your number ${guess} ?`);