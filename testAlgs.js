const algs = require('./algs'),
    { gauntlet } = require('./helpers/testHelpers'),
    format = require('./helpers/formatHelpers'),
    { ask, rl } = require('./helpers/askHelpers');


// const bubbleTest = gauntlet(algs.bubble, 5),
//       quickTest = gauntlet(algs.quick, 5),
//       radixTest = gauntlet(algs.radix, 5);

// console.log(algs)

const introAsk = () => {
    ask(`\nWhat would you like to do?
    \r\n>[1] Get info on an algorithm
    \r>[2] Test a single algorithm
    \r>[3] Test all algorithms
    \r>[4] Quit
    \r\n>> `)
    .then(answer => {
        switch (answer) {
            case '1':
                askWhich();
                break;
            case '2':
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
    console.log('\nWhich algorithm?\n');
    algs.forEach((alg, i) => console.log(`>[${i + 1}] ${alg.name}`));
    introAsk();
}

console.log(format.colorfy(`\nWelcome to ${format.formatify('An Array of Sorts', 'bold')}`, 'cyan'));
introAsk();

    


// console.log(`\nPUT 'EM THROUGH THE GAUNTLET:\n-------------------------\n
//             \rBubbleSort --- Total: ${formatNanos(bubbleTest.total)}| Average: ${formatNanos(bubbleTest.average)}\n
//             \rQuickSort ---- Total: ${formatNanos(quickTest.total)} | Average: ${formatNanos(quickTest.average)}\n
//             \rRadixSort ---- Total: ${formatNanos(radixTest.total)} | Average: ${formatNanos(radixTest.average)}\n`);
