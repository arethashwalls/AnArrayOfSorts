const bubbleSort = (arr, log=false) => {
    if(log) console.log(`\nOriginal array: ${arr.join(' ')}`);
    let sorted = arr.slice();
    let changed = false;
    for(let i = 0; i < sorted.length; i++) {
        for(let j = 0; j < sorted.length - i; j++) {
            if(sorted[j] > sorted[j + 1]) {
                changed = true;
                [sorted[j], sorted[j+1]] = [sorted[j+1], sorted[j]];
                if(log) console.log(`\n${sorted.join(' ')}`)
            }
        }
        if(!changed) break;
    }
    return sorted;
}

module.exports = bubbleSort;