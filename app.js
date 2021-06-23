// TODO

const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("How are you doing ?\n", (answer) => {
    console.log('your anwser was : ', answer);

    rl.close();
})