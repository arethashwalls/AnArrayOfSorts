const countSort = (arr, log=false) => {
    if(log) console.log(`\nOriginal array: ${arr.join(' ')}`);
    const max = Math.max(...arr);
    let place = 0;
    let counts = [...Array(max + 1)].map(() => 0);
    arr.forEach(element => counts[element] += 1);
    counts.forEach((element, i) => {
        while(element > 0) {
            arr[place] = i;
            place++;
            element--;
        }
        if(log) console.log(`\n${arr.join(' ')}`);
    });
    if(log) console.log(`\n${arr.join(' ')}`);
    return arr;
}

module.exports = countSort;