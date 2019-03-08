const radixSort = (arr, log=false) => {
    if(log) console.log(`\nOriginal array: ${arr.join(' ')}`)
    const max = Math.max(...arr);
    let divisor = 1;
    while(divisor < max) {
        let buckets = [...Array(10)].map(() => []);
        arr.forEach(num => {
            buckets[Math.floor(num % (divisor * 10) / divisor)].push(num);
        });
        arr = buckets.flat();
        divisor *= 10;
        if(log) console.log(`\n${arr.join(' ')}`);
    }
    return arr;
}

module.exports = radixSort;