
const makeTestArr = len => [...Array(len)].map(() => Math.floor(Math.random() * 100));

const formatNanos = nanoseconds => {
    return `${Math.floor(nanoseconds / 1e+9)} seconds, ${nanoseconds % 1e+9} nanoseconds`;
};

const timeAlg = (arr, alg, log = false) => {
    if (log) console.log(`Testing ${alg.name}`)
    t = process.hrtime();
    alg(arr, log);
    t = process.hrtime(t);
    if (log) console.log(`\n${alg.name} took ${t[0]} second(s) and ${t[1]} nanoseconds to sort.`)
    return t[0] * 1e+9 + t[1];
};
const gauntlet = (alg, reps = 1000000) => {
    let timeSum = 0;
    for (let i = 0; i < reps; i++) {
        timeSum += timeAlg(makeTestArr(1000), alg);
    }
    return {
        total: timeSum,
        average: timeSum / reps
    }
};



module.exports = {
    timeAlg: timeAlg,
    gauntlet: gauntlet,
    formatNanos: formatNanos
}