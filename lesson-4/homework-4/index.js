const newArr = [5, 7,
    [4, [2], 8, [1, 3], 2],
    [9, []],
    1, 8
];

function treeSum(accumulator, currentValue) {
    if (Array.isArray(currentValue)) {
        return accumulator += treeSum(currentValue);
    }
    // if (typeof currentValue === 'string') {
    //     let numberValue = Number(currentValue);
    //     console.log(numberValue)
    //     return accumulator += numberValue;
    // }
    if (typeof currentValue === 'undefined' || currentValue === null || currentValue === NaN) {
        return accumulator;
    }
    else {
        return accumulator += +currentValue;
    }

    // return accumulator += Array.isArray(currentValue) ? treeSum(currentValue) : +currentValue;
}

let sum = newArr.reduce(treeSum, 0);

console.log(sum);

