'use strict';
// методы строк
const str = 'Test';
console.log(str.length); // свойство строки
console.log(str.toUpperCase());
console.log(str.toLowerCase());


const fruit = 'Some fruit';
console.log(fruit.indexOf('r'));


const logg = 'Hello World';
console.log(logg.slice(6, 11));

console.log(logg.substring(6, 11));

console.log(logg.substr(6, 11));


// методы чисел
const num = 12.4;
console.log(Math.round(num));

const test = '12.2px';
console.log(parseInt(test));
console.log(parseFloat(test));
