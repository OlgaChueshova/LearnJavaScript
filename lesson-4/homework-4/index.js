const newArr = [5, 7,
    [4, [2], 8, [1, 3], 2],
    [9, []],
    1, 8
];

function treeSum(array) {
    return array.reduce((accumulator, item) => {
        if (Array.isArray(item)) {
            return accumulator += treeSum(item)
        }
        return accumulator += item;
    }, 0)
}

console.log(treeSum(newArr))

