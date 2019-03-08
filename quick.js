const quickSort = (arr, log=false) => {
    if(log) console.log(`\nOriginal array: ${arr.join(' ')}`)
    if(arr.length < 2) return arr;
    const pivot = arr[Math.floor(Math.random() * arr.length)];
    let less = [];
    let equal = [];
    let more = [];
    arr.forEach(element => {
        if(element < pivot) {
            less.push(element);
        } else if (element > pivot) {
            more.push(element);
        } else {
            equal.push(element);
        }
    });
    if(log) console.log(`\n${less.join(' ')} ${equal.join()} ${more.join(' ')}`);
    return quickSort(less)
           .concat(equal)
           .concat(quickSort(more));
}

module.exports = quickSort;