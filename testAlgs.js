const algs = require('./algs'),
    { timeAlg, gauntlet } = require('./helpers/testHelpers'),
    format = require('./helpers/formatHelpers'),
    { ask, rl } = require('./helpers/askHelpers');

const introAsk = () => {
    ask(`\n${format.colorfy('What would you like to do?', 'yellow')}
    \r\n${format.formatify('>[1]', 'bold', 'yellow')} Get info on an algorithm
    \r${format.formatify('>[2]', 'bold', 'yellow')} Test a single algorithm
    \r${format.formatify('>[3]', 'bold', 'yellow')} Test all algorithms
    \r${format.formatify('>[4]', 'bold', 'yellow')} Quit
    \r\n${format.colorfy('>>', 'cyan')} `)
        .then(answer => {
            switch (answer) {
                case '1':
                    giveInfo();
                    break;
                case '2':
                    testOne();
                    break;
                case '3':
                    break;
                case '4':
                    console.log('\nGoodbye!\n');
                    rl.close();
                    break;
                default:
                    console.log('Please enter 1, 2, or 3.');
                    break;
            }
        });
}

const askWhich = () => {
    return new Promise((resolve, reject) => {
        ask(`\nWhich algorithm?
            \r${algs.map((alg, i) => `\n>[${i + 1}] ${alg.name}`).join(' ')}
            \r\n${format.colorfy('>>', 'cyan')} `)
        .then(answer => {
            const alg = algs[answer - 1];
            resolve(alg)
        })
    });
}

const giveInfo = () => {
    askWhich()
    .then(alg => {
        console.log('\n' + alg.description);
        console.log('\n' + alg.func.toString());
        introAsk();
    })
}

const testOne = () => {
    askWhich()
    .then(alg => {
        console.log('\n');
        timeAlg(alg.func, true);
        introAsk();
    })
}

console.log(format.colorfy(`\nWelcome to ${format.formatify('An Array of Sorts', 'bold', 'cyan')}`, 'cyan'));
introAsk();

