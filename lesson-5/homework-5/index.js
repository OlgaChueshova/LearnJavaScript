// Задание 1

var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
function arrayClone(arr) {
    return arr.slice(0, arr.length);
}
var arr1 = arrayClone(vegetables);



// Задание 2

var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

const str1 = vegetables.join(', ');

const str2 = vegetables.reduce((accumulator, item) => {
    return accumulator + ", " + item;
});

document.writeln(str1);
document.writeln(str2);


// Задание 3

const num = prompt('Введите число', 55);

const colonOdd = (number) => {
    return number
        .split("")
        .map((item, index, array) => {
            if (item % 2 !== 0 && array[index + 1] % 2 !== 0 && !(index === array.length - 1)) {
                return `${item}:`
            }
            return item;
        })
        .join("");
};

console.log(colonOdd(num));



// Задание 4

const str = prompt('Введите слово', 'КаЖдЫй ОхОтНиК');

function changeRegister(str) {
    return str.split('')
        .map((item) => {
            if (item !== item.toLowerCase()) {
                return item.toLowerCase();
            }
            else {
                return item.toUpperCase();
            }
        })
        .join('');
}

console.log(changeRegister(str)); // [кАжДыЙ оХоТнИк]


// Задание 5

var arr = ["php", "php", "css", "css",
    "script", "script", "html", "html", "java"
];
function removeDuplicates(array) {
    const arr2 = [];
    arr.forEach((item, i, arr) => {
        if (!arr2.includes(item)) {
            arr2.push(item);
        }
    });
    return arr2;
};

console.log(removeDuplicates(arr));


//Задание 6

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [4, 5, 6];

function sum() {
    const arr3 = [];
    arr3.concat(arr2, arr1);
    arr3.filter((item, index, array) => {
        if (arr1.index === arr2.index) {
            arr3.reduce((acc, item, index, array) => {
                return acc + arr1[index] + arr2[index];
            }, 0); 
        }
    });
    return arr3;
}
// sum();

// console.log(arr3); // [5,7,9,4,5]


// Задание 7

function countIdentic(arr) {
    let count = 0;
    arr.filter((item, index, array) => {
        if (arr.includes(item) && item!== ) {
           return count += 1;
        }
        else {count};
    });
    return count;
};

console.log(countIdentic([3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8])) // 4
console.log(countIdentic([15, 14, 13, 19, 13, 14, 14, 14, 7, 9, 9])) // 3

// Задание 8

var numbers = [3, 8, 7, 6, 5, -4, 3, 2, 1];

function compareNumbers(arr) {
    numbers.sort((a, b) => b - a);
    console.log(numbers);
};

compareNumbers(numbers);

//Задание 9

// var litmir = [
//     { author: 'Хэленка', title: 'Улетела сказка' },
//     { author: 'Коул Кресли', title: 'Восстание Аркан' },
//     { author: 'Райчел Мид', title: 'Золотая лилия' }
// ];

// const res = litmir.filter((item, index, array) => {
//     array.item.title.name.sort(((a, b) => a.localeCompare(b)));
// });

// console.log(res);


// Восстание Аркан Золотая лилия Улетела сказка

var litmir = [
    { author: 'Хэленка', title: 'Улетела сказка' },
    { author: 'Коул Кресли', title: 'Восстание Аркан' },
    { author: 'Райчел Мид', title: 'Золотая лилия' }
];

function propertyValue(array, key) {
    array.every((item, array) => {
        return array.item[key];
    })
}

propertyValue(litmir, 'title');  // Улетела сказка,Восстание Аркан,Золотая лилия
propertyValue(litmir, 'author'); // Хэленка,Коул Кресли,Райчел Мид
console.log(propertyValue);





