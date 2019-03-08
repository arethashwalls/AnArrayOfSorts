const bubbleSort = require('./bubble'),
      quickSort = require('./quick'),
      radixSort = require('./radix');

const makeTestArr = len => [...Array(len)].map(() => Math.floor(Math.random() * 100));

const timeAlg = (arr, alg, log=false) => {
    if(log) console.log(`Testing ${alg.name}`)
    t = process.hrtime();
    alg(arr, log);
    t = process.hrtime(t);
    if(log) console.log(`\n${alg.name} took ${t[0]} second(s) and ${t[1]} nanoseconds to sort.`)
    return t[0] * 1e+9 + t[1];
}

const gauntlet = alg => {
    let timeSum = 0;
    for(let i = 0; i < 10000; i++) {
        timeSum += timeAlg(makeTestArr(1000), alg);
    }
    return {
        total: timeSum,
        average: timeSum / 10000
    }
}

const formatNanos = nanoseconds => {
    return `${Math.floor(nanoseconds / 1e+9)} seconds, ${nanoseconds % 1e+9} nanoseconds`;
}

const bubbleTest = gauntlet(bubbleSort),
      quickTest = gauntlet(quickSort),
      radixTest = gauntlet(radixSort);

console.log(`\nPUT 'EM THROUGH THE GAUNTLET:\n-------------------------\n
            \rBubbleSort --- Total: ${formatNanos(bubbleTest.total)}| Average: ${formatNanos(bubbleTest.average)}\n
            \rQuickSort ---- Total: ${formatNanos(quickTest.total)} | Average: ${formatNanos(quickTest.average)}\n
            \rRadixSort ---- Total: ${formatNanos(radixTest.total)} | Average: ${formatNanos(radixTest.average)}`);
