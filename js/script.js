'use strict';

const hamburger = 5;
const fries = null;
if (hamburger && fries) {
	console.log('Cет: гамбурег и картошка');
} else {
	console.log('Добавьте еще позицию для сет набора');
}

const hamburger = 3;
const fries = 1;
const cola = 1;
console.log(hamburger >= 3 && cola && fries);
if (hamburger >= 3 && cola && fries) {
	console.log('Cет: 3+ гамбургера кола и картошка фри');
} else {
	console.log('Добавьте еще позицию для набора');
}

console.log(0 && 1);
console.log(1 && 5);
console.log(null && 5);
console.log(1 && 'случайная строка');


const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;
if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
	console.log('Все довольны');
} else {
	console.log('Мы уходим');
}
console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);



let johnReport, alexReport, samReport, mariaReport = 'done';
console.log(johnReport || alexReport || samReport || mariaReport);



console.log( NaN || 2 || undefined );
console.log( NaN && 2 && undefined );
console.log( 1 && 2 && 3 );
console.log( !1 && 2 || !3 );
console.log( 25 || null && !3 );
console.log( NaN || null || !3 || undefined || 5);
console.log( NaN || null && !3 && undefined || 5);
console.log( 5 === 5 && 3 > 1 || 5);


const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;
if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
}


// Переменная hamburger задана через let, так как const подразумевает какое-либо начальное значение. С const будет ошибка, можете проверить.
// А без значения там undefined, напоминаю.
let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!')
};


let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
};