const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const ask = question => {
    return new Promise((resolve, reject) => {
        rl.question(question, answer => resolve(answer));
    });
}

module.exports = {
    ask: ask,
    rl: rl
};