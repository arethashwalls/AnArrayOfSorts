const bubbleSort = require('./algs/bubble'),
      quickSort = require('./algs/quick'),
      radixSort = require('./algs/radix'),
      countSort = require('./algs/count'),
      {gauntlet} = require('./helpers/testHelpers'),
      format = require('./helpers/formatHelpers');


const bubbleTest = gauntlet(bubbleSort, 5),
      quickTest = gauntlet(quickSort, 5),
      radixTest = gauntlet(radixSort, 5);

let quit = false;

while(!quit) {
    const [, , ...commands] = process.argv;
    const command = commands.join(' ');
    console.log( format.colorfy(`\nWelcome to ${format.formatify('An Array of Sorts', 'bold')}`, 'cyan') );
    

    quit = true;
}

// console.log(`\nPUT 'EM THROUGH THE GAUNTLET:\n-------------------------\n
//             \rBubbleSort --- Total: ${formatNanos(bubbleTest.total)}| Average: ${formatNanos(bubbleTest.average)}\n
//             \rQuickSort ---- Total: ${formatNanos(quickTest.total)} | Average: ${formatNanos(quickTest.average)}\n
//             \rRadixSort ---- Total: ${formatNanos(radixTest.total)} | Average: ${formatNanos(radixTest.average)}\n`);
