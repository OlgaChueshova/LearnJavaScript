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

//const num = prompt('Введите число', 55);

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
//console.log(colonOdd(num));


// Задание 4

//const str = prompt('Введите слово', 'КаЖдЫй ОхОтНиК');

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
//console.log(changeRegister(str)); // [кАжДыЙ оХоТнИк]


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

//console.log(removeDuplicates(arr));


//Задание 6

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [4, 5, 6];

function sum() {
    const arr3 = [];
    arr1.forEach((item, index, array) => {
        if (typeof arr1[index] === 'undefined') {
            arr3.push(arr2[index])
        }
        if (typeof arr2[index] === 'undefined') {
            arr3.push(arr1[index])
        }
        else {
            arr3.push(arr1[index] + arr2[index])
        };
    })
    console.log(arr3); // [5,7,9,4,5]
};
sum();


// Задание 7  

function countIdentic(arr) {
    arr2 = [];
    arr3 = [];
    arr.forEach((item, index, array) => {
        if (!arr2.includes(item)) {
            arr2.push(item);
            arr.splice(arr.indexOf(item), 1);
            // Не понятно, почему 19 не удаляется.
        }
    });
    arr.forEach((item, index, array) => {
        if (!arr3.includes(item)) {
            arr3.push(item);
        }
    });
    return arr3.length;
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


// Задание 9

var litmir = [
    { author: 'Хэленка', title: 'Улетела сказка' },
    { author: 'Коул Кресли', title: 'Восстание Аркан' },
    { author: 'Райчел Мид', title: 'Золотая лилия' }
];

function sortValue(array, key) {
    const newAray = array.map(book => {
        return book[key]
    });
    newAray.sort((a, b) => a.localeCompare(b));
    const result = newAray.join(' ');
    console.log(result);
}
sortValue(litmir, 'title');

function sortValue2(array, key) {
    const arr = [];
    for (let book of array) {
        arr.push(book[key]);
    }
    arr.sort((a, b) => a.localeCompare(b));
    const res = arr.join(' ');
    console.log(res);
}
sortValue2(litmir, 'title');


//Восстание Аркан Золотая лилия Улетела сказка

var litmir = [
    { author: 'Хэленка', title: 'Улетела сказка' },
    { author: 'Коул Кресли', title: 'Восстание Аркан' },
    { author: 'Райчел Мид', title: 'Золотая лилия' }
];

function propertyValue(array, key) {
    const arr4 = [];
    for (let book of array) {
        arr4.push(book[key]);
    }
    const str = arr4.join(', ');
    console.log(str);
}
propertyValue(litmir, 'title');  // Улетела сказка,Восстание Аркан,Золотая лилия
propertyValue(litmir, 'author'); // Хэленка,Коул Кресли,Райчел Мид

function propertyValue2(array, key) {
    const newAray = array.map(book => {
        return book[key];
    });
    const str2 = newAray.join(', ');
    console.log(str2);
}
propertyValue2(litmir, 'title');
propertyValue2(litmir, 'author');









