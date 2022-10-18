import { arr } from './js-module-1.js';

const arr2 = arr.filter((item) => {
    return item % 2 !== 0;
});

console.log(arr2);