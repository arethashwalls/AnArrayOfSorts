const bubbleSort = require('./bubble');

const makeTestArr = len => {
    let testArr = [];
    for(let i = 0; i < len; i++) {
        testArr.push(Math.floor(Math.random() * 100));
    }
    return testArr;
}

const timeAlg = (arr, alg, log=false) => {
    console.log(`Testing ${alg.name}`)
    t = process.hrtime();
    alg(arr, log);
    t = process.hrtime(t);
    console.log(`\n${alg.name} took ${t[0]} second(s) and ${t[1]} nanoseconds to sort.`)
}

timeAlg(makeTestArr(50), bubbleSort, true);
timeAlg(makeTestArr(500), bubbleSort);
timeAlg(makeTestArr(10000000), bubbleSort);