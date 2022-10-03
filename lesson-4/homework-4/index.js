const newArr = [5, 7,
    [4, [2], 8, [1, 3], 2],
    [9, []],
    1, 8
];

function treeSum(accumulator, currentValue) {
    if (Array.isArray(currentValue)) {
        let currentArray = currentValue;
        currentArray.reduce(treeSum);
    }
    return accumulator + currentValue;
}

let sum = newArr.reduce(treeSum);

console.log(sum);

