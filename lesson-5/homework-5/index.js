var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
function arrayClone(arr) {
    arr1 = [];
    for (let index = 0; index < vegetables.length; index++) {
        arr1.push(vegetables[index]);
    }
    return arr1;
}

var arr1 = arrayClone(vegetables);
console.log(arr1);



var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

const str1 = vegetables.join(', ');

function callback(accumulator, item) {
    return accumulator + ", " + item;
}

const str2 = vegetables.reduce(callback);

document.writeln(str1);
document.writeln(str2);



// const num = prompt('Введите число', 55);
// function colonOdd(num) {


//     for (let index = 0; index < num.length; index++) {
//         const itemPrev = index;
//         const itemNext = index+1;

//     }
//     if (itemPrev % 2 != 0 && itemNext % 2 !=0) {
//         return itemPrev = itemPrev + ":";
//     }
// }

// alert(num);



// const str = prompt('Введите слово', 'КаЖдЫй ОхОтНиК');

// function changeRegister (str) { 

// for (let item of str) {

// }

// }

// document.writeln(changeRegister(str)); // [кАжДыЙ оХоТнИк]


// Это не работает!

// var arr = ["php", "php", "css", "css",
//   "script", "script", "html", "html", "java"
// ];
// function removeDuplicates(arr) {
//     const arr2 = [];
//     arr.forEach((item, i, arr) => {
//        if (!result.includes(item)) {
//         arr2.push(item);
//        } 
//     });
//     return arr2;
//     const result = arr2;
// };

// document.writeln(result);


// var arr1 = [1, 2, 3, 4, 5];
// var arr2 = [4, 5, 6];

//    //  ваш код

// document.writeln(arr3); // [5,7,9,4,5]



// function countIdentic(arr) {
// let count = 0;
// arr.forEach(item => {
//     if (arr.includes(item)) {
//         count = count + 1;
//     }
// });
//    return count;
// };

// countIdentic([3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8]) // 4
// countIdentic([15,14,13,19,13,14,14,14,7,9,9]) // 3  


var numbers = [3, 8, 7, 6, 5, -4, 3, 2, 1];

function compareNumbers(arr) {
    numbers.sort((a, b) => b - a);
    console.log(numbers);
};

compareNumbers(numbers);



// var litmir = [ 
//     { author: 'Хэленка', title: 'Улетела сказка'},
//     { author: 'Коул Кресли', title: 'Восстание Аркан'},
//     { author: 'Райчел Мид', title: 'Золотая лилия'}
//     ];

// console.log(litmir[title].sort((a, b) => a.localeCompare(b)));

// Восстание Аркан Золотая лилия Улетела сказка 



var litmir = [
    { author: 'Хэленка', title: 'Улетела сказка' },
    { author: 'Коул Кресли', title: 'Восстание Аркан' },
    { author: 'Райчел Мид', title: 'Золотая лилия' }
];

function propertyValue(array, key) {
    array.forEach(element => {
        let obj = element;
        array.obj.toString(key);
    });
    console.log(array);

}

propertyValue(litmir, 'title');  // Улетела сказка,Восстание Аркан,Золотая лилия
propertyValue(litmir, 'author'); // Хэленка,Коул Кресли,Райчел Мид






