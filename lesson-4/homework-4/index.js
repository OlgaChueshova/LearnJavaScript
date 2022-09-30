const newArr = [5, 7,
    [4, [2], 8, [1, 3], 2],
    [9, ['fhgfh']],
    1, 8
];

console.log(newArr);

function treeSum() {
    const newArr2 = newArr.flat(Infinity);
    console.log(newArr2);

    for (let item = 0; item <= newArr2.length-1; item++) {
       
            return item += item;          
    }

    // for (let item of newArr2) {
    //     Number(item);
    //     console.log(item); 
    //     if (Number.isFinite(item)) {
    //         return item =+ item; 
    //     }
    // }
}

treeSum(newArr);


// function treeSum2(newArr) {
//     const newArr3 = [];
//     newArr.forEach(element => {
//         if (newArr.isArray(element)) flat(element);
//         else newArr3.push(element);
//     });
//     return newArr3;
// }

// console.log(newArr3);
