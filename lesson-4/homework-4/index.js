const newArr = [5, 7,
    [4, [2], 8, [1, 3], 2],
    [9, []],
    1, 8
];

function treeSum(accumulator, currentValue) {
     
    return accumulator += Array.isArray(currentValue) ? treeSum(currentValue) : +currentValue;
}

let sum = newArr.reduce(treeSum, 0);

console.log(sum);

