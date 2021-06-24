// TODO

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let min = 1;
let max = 100;

let makeGuess = (min, max) => {
    return Math.floor((max+min) / 2);
}

let guess = makeGuess(min, max);

rl.question(`Can you think about a number ?\nIs your number ${guess} \n`, (answer) => {

    while (answer != '=') {
        if (answer === '+') {

            min = guess++;
            guess = makeGuess(min, max);
            rl.setPrompt(`ok it's more... Is your number ${guess}\n`);
            rl.prompt();
        }
        else if (answer === '-') {

            max = guess--;
            guess = makeGuess(min, max);
            rl.setPrompt(`ok it's less... Is your number ${guess}\n`);
            rl.prompt();
        }
        else {
            rl.setPrompt(`You must use the symbole +, - or = to help the computer find your number. Please try again.\n`);
            rl.prompt();
        }
    }
    console.log('you win !');
    rl.close();

});
