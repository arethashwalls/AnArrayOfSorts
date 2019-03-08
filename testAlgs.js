const bubbleSort = require('./algs/bubble'),
      quickSort = require('./algs/quick'),
      radixSort = require('./algs/radix'),
      {gauntlet} = require('./helpers');


const bubbleTest = gauntlet(bubbleSort, 5),
      quickTest = gauntlet(quickSort, 5),
      radixTest = gauntlet(radixSort, 5);

console.log(`\nPUT 'EM THROUGH THE GAUNTLET:\n-------------------------\n
            \rBubbleSort --- Total: ${formatNanos(bubbleTest.total)}| Average: ${formatNanos(bubbleTest.average)}\n
            \rQuickSort ---- Total: ${formatNanos(quickTest.total)} | Average: ${formatNanos(quickTest.average)}\n
            \rRadixSort ---- Total: ${formatNanos(radixTest.total)} | Average: ${formatNanos(radixTest.average)}\n`);
